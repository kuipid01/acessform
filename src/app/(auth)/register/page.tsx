"use client";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { CreateUser } from "../../../../actions/user";
import { useRouter } from "next/navigation";
import { ImSpinner2 } from "react-icons/im";

const Page = () => {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleRegister = async (e: any) => {
    e.preventDefault();
    if (!email && !password) {
      toast({
        variant: "destructive",
        description: "Fill in all input fields",
      });
      return;
    }
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        description: "Passwords don't match",
      });
      return;
    }
    try {
      setLoading(true);
      const data = await CreateUser({ email, password });
      if (data.message) {
        setLoading(false);
        console.log("here");
        toast({
          description: "You ve an account already , you ill b redirected",
        });
        router.push(`/login`);
        return;
      } else {
        setUser(data.data);
        const { password, ...userData } = data.data;
        localStorage.setItem("user", JSON.stringify(userData));
        setLoading(false);
        router.push(`/dashboard`);
      }
    } catch {
      setLoading(false);
      console.log("error");
    }
  };

  const [email, setEmail] = useState("");
  const [user, setUser] = useState<any>("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  console.log(user);
  return (
    <div className="h-screen w-full ter">
      <form
        className="min-w-[400px] border shadow-md border-gray-300 p-4 rounded-md flex flex-col gap-4"
        onSubmit={handleRegister}
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
        <div className=" flex flex-col gap-2 items-start">
          <Input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>
        <button
          disabled={loading}
          className="w-full h-[50px] ter rounded-md bg-black text-white"
        >
          {loading ? (
            <ImSpinner2 className="animate-spin h-12 w-12" />
          ) : (
            "Register"
          )}
        </button>
        <p className=" text-sm italic ">
          Have an account ?{" "}
          <Link className=" text-green-600" href="/login">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
