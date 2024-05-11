// const shareLink = `${window.location.origin}/submit/${shareUrl}`;
//   return (
//       onClick={() => {
//         window.open(shareLink, "_blank");
//       }}
"use client";
import React, { useEffect, useState } from "react";
import { GetFormById, GetFormByShareUrl } from "../../../../actions/form";
import FullNameComponent from "@/components/FullNameComponent";
import NumberComponent from "@/components/NumberComponent";
import EmailComponent from "@/components/EmailComponent";
import { Form } from "@prisma/client";
import { ImSpinner2 } from "react-icons/im";
import GenderComponent from "@/components/Gender";
import DatepickerComp from "@/components/DatepickerComp";

function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const componentArray = [
    {
      id: 1,
      name: "Fullname",
      component: FullNameComponent,
    },
    {
      id: 2,
      name: "Number",
      component: NumberComponent,
    },
    {
      id: 3,
      name: "Email",
      component: EmailComponent,
    },
    {
      id: 4,
      name: "Gender",
      component: GenderComponent,
    },
    {
      id: 5,
      name: "DateOfBirth",
      component: DatepickerComp,
    },
  ];
  const [formComponents, setFormComponents] = useState<any>([]);
  const [form, setForm] = useState<Form | null>();
  useEffect(() => {
    const getForm = async () => {
      const form = await GetFormByShareUrl(params.id);
      setForm(form);
      //   console.log(form);
      const filteredComponents = form?.content.map((id) =>
        componentArray.find((component) => component.id.toLocaleString() === id)
      );
      //   console.log(filteredComponents);
      setFormComponents(filteredComponents);
    };

    getForm();
  }, []);
  console.log(form);
  console.log(formComponents);
  return (
    <div className=" w-full h-screen ter bg-gray-200">
      <div className=" h-[500px] w-[80%] ter overflow-y-auto">
        {formComponents.length > 0 && (
          <ul className=" w-[80%]  rounded-xl ter bg-white  overflow-y-auto flex flex-col gap-2 p-4 ">
            <h1 className=" text-2xl capitalize font-bold w-full flex items-start justify-start">
              {form?.name}
            </h1>

            {formComponents?.map((item: any, idx: any) => (
              <div key={`${idx}`} className="w-full">
                <item.component />
              </div>
            ))}

            {formComponents.length <= 0 && (
              <ImSpinner2 className="animate-spin h-12 w-12" />
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Page;
