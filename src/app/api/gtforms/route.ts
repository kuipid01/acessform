import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET() {
  try {
    const user = true;
    if (!user) {
      //   throw new UserNotFoundErr();
    }

    const forms = await prisma.form.findMany({
      where: {
        userId: "123",
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json({
      data: forms,
    });
    // Parse JSON body to extract senderId and receiverId
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
  }
}
