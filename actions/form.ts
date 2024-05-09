"use server";

import { formSchema, formSchemaType } from "@/schemas/form";
import prisma from "../lib/prisma";

export async function CreateForm(data: formSchemaType) {
  const validation = formSchema.safeParse(data);
  if (!validation.success) {
    throw new Error("form not valid");
  }

  const user = true;
  if (!user) {
    //   throw new UserNotFoundErr();
    console.log("error");
  }

  const { name, description } = data;

  const form = await prisma.form.create({
    data: {
      userId: "123",
      name,
      description,
    },
  });

  if (!form) {
    throw new Error("something went wrong");
  }

  return form.id;
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
  const user = true;
  if (!user) {
    //   throw new UserNotFoundErr();
  }

  return await prisma.form.findUnique({
    where: {
      userId: "123",
      id,
    },
  });
}

export async function PublishForm(id: number) {
  const user = true;

  return await prisma.form.update({
    data: {
      published: true,
    },
    where: {
      userId: "123",
      id,
    },
  });
}
