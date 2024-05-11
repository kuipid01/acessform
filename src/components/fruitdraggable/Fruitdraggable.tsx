import { useDraggable } from "@dnd-kit/core";
import React, { FC } from "react";
import { CSS } from "@dnd-kit/utilities";

interface IFruitDraggable {
  children: {
    id: number;
    name: string;
    component: React.FunctionComponent;
  };
}

const FruitDraggable: FC<IFruitDraggable> = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.children.id,
    data: { title: props.children },
  });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform) }}
      {...attributes}
      {...listeners}
      className="w- border-gray-300 bg-black text-white p-4 ter rounded-lg uppercase font-bold border"
    >
      {props.children.name}
    </div>
  );
};

export default FruitDraggable;
