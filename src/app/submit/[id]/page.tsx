// const shareLink = `${window.location.origin}/submit/${shareUrl}`;
//   return (
//       onClick={() => {
//         window.open(shareLink, "_blank");
//       }}
"use client";
import Confetti from "react-confetti";
import React, { useEffect, useState } from "react";
import {
  GetFormById,
  GetFormByShareUrl,
  PopulateForms,
} from "../../../../actions/form";
import FullNameComponent from "@/components/FullNameComponent";
import NumberComponent from "@/components/NumberComponent";
import EmailComponent from "@/components/EmailComponent";
import { Form, User } from "@prisma/client";
import { ImSpinner2 } from "react-icons/im";
import GenderComponent from "@/components/Gender";
import DatepickerComp from "@/components/DatepickerComp";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const setUserFn = () => {
      const userData = localStorage.getItem("user");
      if (!userData) {
        return;
      }
      const user = JSON.parse(userData);
      setUser(user);
    };
    setUserFn();
  }, []);
  const { toast } = useToast();
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
  // console.log(form);
  // console.log(formComponents);
  const [data, setData] = useState({
    firstname: "",
    surname: "",
    date: "",
    email: "",
    gender: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const handleSubmitForm = async () => {
    if (form === undefined) return;
    if (form === null) return;
    if (user === null) return;
    if (user === undefined) return;

    const formData = await PopulateForms(data, form.id, Number(form.userId));
    if (!formData) return;
    toast({
      description: "Your Form has been submitted",
    });
    setSubmitted(true);
  };
  // console.log(data);
  if (submitted)
    return (
      <>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={1000}
        />
        <div className=" w-full  ter flex-col h-screen pt-[10vh]">
          <h1 className="text-center text-4xl font-bold text-primary border-b pb-2 mb-10">
            🎊🎊 Form Submitted 🎊🎊
          </h1>

          <Link
            className=" w-1/2 bg-black mx-auto  text-white h-12 rounded-xl ter font-bold to-white"
            href="/register"
          >
            Create Your Own Form Now
          </Link>
        </div>
      </>
    );
  return (
    <div className=" w-full mt-[10vh] py-[100px] h-fit ter bg-gray-500">
      <div className=" h-fit flex  flex-col w-[80%] ter overflow-y-auto">
        <h1 className=" text-2xl font-bold uppercase text-gray-50 mb-5 ">
          Access Form
        </h1>
        {formComponents.length > 0 && (
          <ul className=" w-[80%] py-5 h-fit rounded-xl ter bg-white  overflow-y-auto flex flex-col gap-2 px-4 ">
            <h1 className=" text-2xl capitalize font-bold w-full flex items-start justify-start">
              Form Name: {form?.name}
            </h1>
            <hr className=" w-full h-[1px] bg-gray-300 my-5" />
            {formComponents?.map((item: any, idx: any) => (
              <div key={`${idx}`} className="w-full">
                <item.component setData={setData} data={data} />
              </div>
            ))}

            {formComponents.length <= 0 && (
              <ImSpinner2 className="animate-spin h-12 w-12" />
            )}
            <button
              onClick={handleSubmitForm}
              className=" w-full h-12 rounded-xl ter bg-black text-white font-bold uppercase"
            >
              Submit Form
            </button>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Page;
