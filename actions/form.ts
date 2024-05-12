"use server";

import { formSchema, formSchemaType } from "@/schemas/form";
import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export async function CreateForm(data: formSchemaType, userId: number) {
  const validation = formSchema.safeParse(data);
  if (!validation.success) {
    throw new Error("form not valid");
  }

  const { name, description } = data;

  const form = await prisma.form.create({
    data: {
      userId: userId.toString(),
      name,
      description,
    },
  });

  if (!form) {
    throw new Error("something went wrong");
  }

  return form.id;
}
export async function PopulateForms(data: any, formId: number, userId: number) {
  const form = await prisma.formData.create({
    data: {
      Data: data as Prisma.JsonObject,
      formId,
      userId,
    },
  });
  return form;
}
export async function fetchProspects(id: any) {
  // console.log("fetch prospects", id);
  const data = await prisma.formData.findMany({
    where: {
      userId: id,
    },
  });
  console.log(data);
  return data;
}
export async function GetForms() {
  const user = true;
  if (!user) {
    //   throw new UserNotFoundErr();
  }

  return await prisma.form.findMany({
    where: {
      userId: "123",
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function GetFormById(id: number) {
  return await prisma.form.findUnique({
    where: {
      id,
    },
  });
}
export async function GetFormByShareUrl(shareURL: string) {
  return await prisma.form.findUnique({
    where: {
      shareURL,
    },
  });
}
export async function PublishForm(id: number, content: string[]) {
  return await prisma.form.update({
    data: {
      published: true,
      content: content,
    },
    where: {
      id,
    },
  });
}
