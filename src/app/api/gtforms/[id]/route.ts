import { Prisma, User } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(req: Request, { params }: { params: any }) {
  try {
    const id = params.id;

    const forms = await prisma.form.findMany({
      where: {
        userId: id.toLocaleString(),
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
