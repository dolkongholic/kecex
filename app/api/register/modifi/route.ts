import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { id, password, email, koname, tel } = body;
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      email: email,
      koname: koname,
      tel: tel,
      hashedPassword: hashedPassword,
    },
  });

  return NextResponse.json(user);
}
