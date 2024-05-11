import { Form } from "@prisma/client";
import React, { useEffect, useState } from "react";
import FormCard from "./FormCard";

import { Skeleton } from "@/components/ui/skeleton";
export default function FormCards(user: any) {
  const [formsArray, setFormsArray] = useState([]);

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
  const apiUrl = `/api/gtforms/${user.user.id}`;
  useEffect(() => {
    fetchData(apiUrl)
      .then((data) => {
        const forms = data.data;
        // console.log(forms);
        setFormsArray(forms);
        // console.log("Fetched data:", data);

        // Use the fetched data in your application
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [user.id]);
  // console.log(forms);

  if (!formsArray) {
    return (
      <div className=" h-fit flex ter flex-wrap gap-5 ">
        {[0, 3].map((single, i) => (
          <FormCardSkeleton key={i} />
        ))}{" "}
      </div>
    );
  }
  return (
    <div className=" flex h-fit gap-3">
      {formsArray.map((form: Form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </div>
  );
}

function FormCardSkeleton() {
  return (
    <Skeleton className="border-2 border-primary-/20 h-[190px] w-[200px]" />
  );
}
