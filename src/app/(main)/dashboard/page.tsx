"use client";

import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import CreateFormBtn from "@/components/ui/CreateFormButton";
import FormCards from "@/components/FormCards";

const Page = () => {
  const router = useRouter();
  const userData = localStorage.getItem("user");
  if (!userData) {
    router.push("/login");
    return;
  }
  const user = JSON.parse(userData);
  // console.log(user);
  // const [user, setUser] = useState<User>();
  // if (userData !== undefined) {

  // }
  // const createForm = () => {
  //   router.push("/formcreator");
  // };

  return (
    <div className="ter  h-screen">
      {/* <Dialog>
        <DialogTrigger>
          <button className="w-[350px] flex-col gap-3 rounded-lg h-[200px] border-dashed border-2 ter border-gray-500 shadow-md shadow-gray-400">
            <Plus size={40} />
            <h1 className="text-xl font-medium uppercase">Create New Form</h1>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Your Own Form</DialogTitle>
            <DialogDescription>
              Drag and Drop Field to make your custom form
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Form Name
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input id="description" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={createForm} className="w-full" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
      <div className=" flex w-[90%] ter gap-4 flex-wrap">
        <CreateFormBtn user={user} />

        <FormCards user={user} />
      </div>
    </div>
  );
};

export default Page;
