"use client";

import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const page = () => {
  const handleLogin = (e: any) => {
    e.preventDefault();
    if (!email && !password) return;
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-screen w-full ter">
      <form
        className="w-fit p-4 rounded-md flex flex-col gap-4"
        onSubmit={handleLogin}
      >
        <div className=" flex flex-col gap-2 items-start">
          <label htmlFor="email">Mail:</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <div className=" flex flex-col gap-2 items-start">
          <label htmlFor="password">Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
      </form>
    </div>
  );
};

export default page;
