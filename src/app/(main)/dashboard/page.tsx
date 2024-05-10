"use client";

import { Copy, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistance } from "date-fns";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CreateFormBtn from "@/components/ui/CreateFormButton";
import { GetForms } from "../../../../actions/form";
import { Form } from "@prisma/client";
import { toast } from "@/components/ui/use-toast";
import { ImShare } from "react-icons/im";

const Page = () => {
  const router = useRouter();
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
      <div className=" flex w-[90%] gap-4 flex-wrap">
        <CreateFormBtn />

        <FormCards />
      </div>
    </div>
  );
};

export default Page;

function FormCards() {
  const [forms, setForms] = useState([]);
  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Parse the JSON response
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors appropriately (e.g., display an error message to the user)
    }
  };

  // Example usage
  const apiUrl = "/api/gtforms"; // Replace with your actual API endpoint
  useEffect(() => {
    fetchData(apiUrl)
      .then((data) => {
        const forms = data.data;
        setForms(forms);
        console.log("Fetched data:", data);

        // Use the fetched data in your application
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log(forms);
  return (
    <>
      {forms.map((form: Form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );
}
function FormCardSkeleton() {
  return (
    <Skeleton className="border-2 border-primary-/20 h-[190px] w-[200px]" />
  );
}
function FormCard({ form }: { form: Form }) {
  const shareLink = `${window.location.origin}/submit/${form.shareURL}`;
  return (
    <Card className=" mr-3 w-[350px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-bold">{form.name}</span>
          {form.published && <Badge>Published</Badge>}
          {!form.published && <Badge variant={"destructive"}>Draft</Badge>}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-muted-foreground text-sm">
          {formatDistance(form.createdAt, new Date(), {
            addSuffix: true,
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
        {form.description || "No description"}
      </CardContent>
      <CardFooter>
        {form.published && (
          <Button
            className="w-[250px]"
            onClick={() => {
              navigator.clipboard.writeText(shareLink);
              toast({
                title: "Copied!",
                description: "Link copied to clipboard",
              });
            }}
          >
            <ImShare className="mr-2 h-4 w-4" />
            Share link
          </Button>
        )}
        {!form.published && (
          <Button
            asChild
            variant={"secondary"}
            className="w-full mt-2 text-md gap-4"
          >
            <Link href={`/builder/${form.id}`}>
              Edit form <FaEdit />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
