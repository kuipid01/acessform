"use client";
import React from "react";

const FullNameComponent: React.FC = () => {
  return (
    <div className=" flex gap-3 flex-col  p-5">
      <label htmlFor="fullname">Fullname</label>

      <div className="w-full flex gap-4">
        <input
          className="flex-1 h-[45px] px-5 rounded-[10px] border outline-none "
          placeholder="Firstname"
          type="text"
        />
        <input
          className="flex-1 h-[45px] px-5 rounded-[10px] border outline-none "
          placeholder="Surname"
          type="text"
        />
      </div>
    </div>
  );
};

export default FullNameComponent;
