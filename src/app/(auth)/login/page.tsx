"use client";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { CreateUser, LoginUser } from "../../../../actions/user";
import { useRouter } from "next/navigation";

const Page = () => {
  const { toast } = useToast();

  const router = useRouter();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        variant: "destructive",
        description: "Fill in all input fields",
      });
      return;
    }

    try {
      const data = await LoginUser({ email, password });
      console.log(data);

      if (!data.data) {
        console.log("here");
        toast({
          variant: "destructive",
          description: data.message,
        });

        return;
      } else {
        // return;

        localStorage.setItem("user", JSON.stringify(data.data));
        router.push(`/dashboard`);
      }
    } catch {
      console.log("error");
    }
  };

  const [email, setEmail] = useState("");
  const [user, setUser] = useState<any>("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen w-full ter">
      <form
        className="min-w-[400px] border shadow-md border-gray-300 p-4 rounded-md flex flex-col gap-4"
        onSubmit={handleLogin}
      >
        <div className=" flex flex-col gap-2 items-start">
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className=" flex flex-col gap-2 items-start">
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>

        <button className="w-full h-[50px] rounded-md bg-black text-white">
          Get in joor
        </button>
        <p className=" text-sm italic ">
          Dont have an account ?{" "}
          <Link className=" text-green-600" href="/register">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
