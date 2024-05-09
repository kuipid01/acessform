import { useDroppable } from "@dnd-kit/core";
import React, { FC } from "react";
import styles from "./CartDroppable.module.css";
import { DownloadCloud } from "lucide-react";

interface ICartDroppable {
  items: {
    id: number;
    name: string;
    component: React.FC;
  }[];
}

const CartDroppable: FC<ICartDroppable> = (props) => {
  const { setNodeRef } = useDroppable({
    id: "cart-droppable",
  });

  return (
    <ul
      className=" w-full ter  overflow-y-auto flex flex-col gap-2 p-4 "
      ref={setNodeRef}
    >
      {props.items.length === 0 && (
        <div className=" h-[400px] w-[400px] border rounded-md bg-gray-100 flex flex-col gap-3 ter">
          <h1>Drag Over here to add to form</h1>
          <p>Get in joor</p>
          <DownloadCloud height={30} width={40} />
        </div>
      )}
      {props.items.map((item, idx) => (
        <div key={`${item}-${idx}`} className="w-full">
          <item.component />
        </div>
      ))}
    </ul>
  );
};

export default CartDroppable;
