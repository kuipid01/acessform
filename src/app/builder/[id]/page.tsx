import React from "react";
import { GetFormById } from "../../../../actions/form";
import FormBuilder from "@/components/FormBuilder";

async function BuilderPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const form = await GetFormById(Number(id));
  const numberId = Number(id);
  if (!form) {
    throw new Error("form not found");
  }
  console.log(id);
  return <FormBuilder id={numberId} />;
}

export default BuilderPage;
