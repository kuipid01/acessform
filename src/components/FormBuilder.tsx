"use client";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import styles from "../app/App.module.css";
import CartDroppable from "@/components/cartdroppable/CartDroppable";
import FruitDraggable from "@/components/fruitdraggable/Fruitdraggable";
import FullNameComponent from "./FullNameComponent";
import NumberComponent from "./NumberComponent";
import EmailComponent from "./EmailComponent";

const App = () => {
  const fruits = ["Apple", "Banana", "Lemon", "Pear", "Mango"];
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
    const temp = [...cartItems];
    temp.push(newItem);
    setCartItems(temp);
    console.log(cartItems);
  };

  return (
    <DndContext onDragEnd={addItemsToCart}>
      <main className="flex justify-center bg-gray-300 w-full h-screen flex-col relative items-center">
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
          <CartDroppable items={cartItems} />
        </div>
      </main>
    </DndContext>
  );
};

export default App;
