"use client";
import { FormProvider } from "@/context/formContext";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <FormProvider>
      <div className="flex w-full flex-grow mx-auto">{children}</div>
    </FormProvider>
  );
}

export default layout;
