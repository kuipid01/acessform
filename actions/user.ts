"use server";

import { userSchemaType, userSchema } from "@/schemas/user";
import prisma from "../lib/prisma";

export async function CreateUser(data: userSchemaType) {
  const validation = userSchema.safeParse(data);
  if (!validation.success) {
    throw new Error("Form not valid");
  }

  const { email, password } = data;
  try {
    const prevUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (prevUser) {
      return { success: true, message: "user already exist", data: prevUser };
    } else {
      const user = await prisma.user.create({
        data: {
          email,
          password,
        },
      });
      // Set user data to local storage

      return { success: true, data: user };
    }
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
}
export async function LoginUser(data: userSchemaType) {
  const { email, password } = data;
  const user = await prisma.user.findUnique({
    where: {
      email,
      password,
    },
  });
  if (!user) {
    return { message: "User with details not found" };
  }
  return { data: user };
}
// export async function GetFormById(id: number) {
//   const user = true;
//   if (!user) {
//     //   throw new UserNotFoundErr();
//   }

//   return await prisma.form.findUnique({
//     where: {
//       userId: "123",
//       id,
//     },
//   });
// }
