"use client";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const userData = null;
  return (
    <div className="absolute bg-white top-0 left-0 w-full px-[53px]  py-5 h-[10vh] flex justify-between ">
      <Link href="/" className=" text-3xl uppercase font-semibold ">
        AssessForm
      </Link>
      {!userData && (
        <div className="flex gap-3">
          <Link
            className=" bg-[#0A0513] cursor-pointer text-white h-10 w-[150px] rounded-md flex justify-center items-center border "
            href="/register"
          >
            Sign Up
          </Link>
          <Link
            className=" w-[150px] h-10 cursor-pointer bg-white border-[#0A0513] rounded-md flex justify-center items-center border "
            href="/login"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
