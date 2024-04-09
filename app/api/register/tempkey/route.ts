import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { userId ,password } = body;
  const hashedPassword = await bcrypt.hash(password, 12);
  console.log("유저아이디:" ,userId);

  const user = await prisma.user.update({
    where: {
      name: userId,
    },
    data: {
      hashedPassword: hashedPassword,
    },
  });

  return NextResponse.json(user);
}
