import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { data } = body;
  const { username, password, email, koname, tel } = data;
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

  const already_1 = await prisma.user.findUnique({
    where: {
      tel: tel,
    },
  });

  if (already_1) {
    return new NextResponse(null, {
      status: 409,
    });
  }

  const user = await prisma.user.create({
    data: {
      name: username,
      email: email,
      koname: koname,
      tel: tel,
      hashedPassword: hashedPassword,
      level: "일반회원",
      staff: false,
    },
  });

  return NextResponse.json(user);
}
