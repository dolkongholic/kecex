import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { data } = body;
  const { username, password } = data;
  const hashedPassword = await bcrypt.hash(password, 12);

  const already = await prisma.user.findUnique({
    where: {
      name: username,
    },
  });

  if (already) {
    return new NextResponse(null, {
      status: 409,
    });
  }

  const user = await prisma.user.create({
    data: {
      name: username,
      hashedPassword: hashedPassword,
    },
  });

  return NextResponse.json(user);
}
