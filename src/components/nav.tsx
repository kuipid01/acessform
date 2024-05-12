"use client";
import { User } from "@prisma/client";
import { User2Icon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Nav() {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const checkUser = () => {
      const userData = localStorage.getItem("user");
      if (!userData) return;
      const user = JSON.parse(userData);
      setUser(user);
    };
    checkUser();
  }, []);

  return (
    <div className="absolute z-[5000] bg-white top-0 left-0 w-full px-[53px]  py-5 h-[10vh] flex justify-between ">
      <Link href="/" className=" text-3xl uppercase font-semibold ">
        AssessForm
      </Link>
      {!user && (
        <div className="flex gap-3 relative">
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
      {user && (
        <Link
          className=" bg-[#0A0513] cursor-pointer relative  gap-1 font-bold uppercase  text-white h-10 w-[170px] rounded-md flex justify-center items-center border "
          href="/dashboard"
        >
          <User2Icon size={15} /> Dashboard{" "}
        </Link>
      )}
    </div>
  );
}
