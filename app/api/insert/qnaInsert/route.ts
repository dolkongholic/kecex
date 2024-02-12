import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  console.log(body);

  const { name, tel, email, title, content } = body;

  console.log(name, tel, email, title, content);

  const result = await prisma.qna.create({
    data: {
      name: name,
      tel: tel,
      email: email,
      title: title,
      content: content,
    },
  });

  return NextResponse.json(result);
}
