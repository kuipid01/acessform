"use client";
import React from "react";

const EmailComponent: React.FC = () => {
  return (
    <div className=" flex gap-3 flex-col  p-5">
      <label htmlFor="email">Email</label>

      <div className="w-full flex gap-4">
        <input
          className="flex-1 h-[45px] px-5 rounded-[10px] border outline-none "
          placeholder="kuipid01@gmail.com"
          type="email"
        />
      </div>
    </div>
  );
};

export default EmailComponent;
