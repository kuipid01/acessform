"use client";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useContext, useEffect, useState } from "react";
import styles from "../app/App.module.css";
import CartDroppable from "@/components/cartdroppable/CartDroppable";
import FruitDraggable from "@/components/fruitdraggable/Fruitdraggable";
import FullNameComponent from "./FullNameComponent";
import NumberComponent from "./NumberComponent";
import EmailComponent from "./EmailComponent";
import { PresentationIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { PublishForm } from "../../actions/form";
import { FormContext, FormContextType } from "@/context/formContext";
import { toast } from "./ui/use-toast";
const FormBuilder = (newId: any) => {
  const router = useRouter();

  const { setFormData, formData } = useContext(FormContext);
  const [components, setComponents] = useState<any>([]);
  const [cartItems, setCartItems] = useState<
    {
      id: number;
      name: string;
      component: React.FC;
    }[]
  >([]);
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
  ];
  const addItemsToCart = (e: DragEndEvent) => {
    console.log(e);

    const newItem = e.active.data.current?.title;
    if (e.over?.id !== "cart-droppable" || !newItem) return;
    console.log(newItem);
    const temp = [...formData];
    // console.log(temp);
    temp.push(newItem);
    setFormData(temp);
    // setFormData([...formData, newItem]);
    console.log(formData);
    const components = formData.map((data) => data.component);
    setComponents(components);
    // setCartItems(temp);
    // console.log(cartItems);
  };
  console.log(components);

  const handlePreview = async () => {
    const { id } = newId;
    // console.log(id);
    // return;

    console.log(preview);
    setPreview(true);
  };
  const [preview, setPreview] = useState(false);
  return (
    <DndContext onDragEnd={addItemsToCart}>
      {preview && <PreviewSection id={newId} setPreview={setPreview} />}
      <main className="flex justify-center bg-gray-300 w-full h-screen flex-col relative items-center">
        <div
          onClick={handlePreview}
          className="absolute right-5 cursor-pointer top-5 w-[150px] flex gap-2  h-[40px] ter font-bold text-sm rounded-lg text-white bg-black"
        >
          <PresentationIcon size={15} />
          Preview Form
        </div>
        <div className=" h-screen absolute left-0 py-10 px-5  top-0 w-[300px] bg-gray-200">
          <h1 className=" text-3xl font-bold ">Form attributes</h1>
          <ul className=" flex flex-col gap-2 p-3">
            {componentArray.map((fruit) => (
              <FruitDraggable key={fruit.id}>{fruit}</FruitDraggable>
            ))}
          </ul>
        </div>
        <div className=" w-[700px]  bg-white  flex flex-col mx-auto rounded-md h-[90vh]">
          <h1 className=" p-5 font-bold text-2xl">My Form</h1>
          <CartDroppable items={formData} />
        </div>
      </main>
    </DndContext>
  );
};

export default FormBuilder;

const PreviewSection = (newid: any, { setPreview }: { setPreview: any }) => {
  const router = useRouter();
  const handlePublish = async () => {
    const { id } = newid;
    const idsOfcomponents = formData.map((data) => data.id.toLocaleString());
    console.log(idsOfcomponents);

    const form = await PublishForm(Number(id.id), idsOfcomponents);
    console.log(form);
    toast({
      description:
        "Form published succesfully, you will be redirected to homepage",
    });
    router.push("/dashboard");
  };
  const { formData } = useContext(FormContext);
  return (
    <div className=" w-full fixed h-screen z-30 flex-col gap-3  top-0 ter left-0 ">
      <div className=" w-full h-screen bg-gray-600  absolute top-0 left-0">
        {" "}
      </div>

      <X
        onClick={() => setPreview(false)}
        className=" absolute right-10 top-10 size-8 text-white cursor-pointer"
      />
      <h1 className=" relative uppercase text-white mb-3 text-3xl">
        Simple Preview{" "}
      </h1>
      <button
        onClick={handlePublish}
        className=" relative w-[140px]  rounded-xl ter  text-white h-10  bg-orange-600"
      >
        Publish Form
      </button>
      <div className=" bg-white relative flex-col rounded-xl ter">
        {formData?.map((item, idx) => (
          <div key={`${item}-${idx}`} className="w-full">
            <item.component />
          </div>
        ))}
      </div>
    </div>
  );
};
