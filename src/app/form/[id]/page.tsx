"use client";
import { FormContext, FormProvider } from "@/context/formContext";
import React, { useContext } from "react";

export default function page() {
  const { formData } = useContext(FormContext);
  console.log(formData);
  return (
    <FormProvider>
      <div className=" w-full  h-screen ter">
        {formData?.map((item, idx) => (
          <div key={`${item}-${idx}`} className="w-full">
            <item.component />
          </div>
        ))}
      </div>
    </FormProvider>
  );
}
