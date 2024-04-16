import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  // console.log(body);

  const { title, content, qnaId } = body;

  const qnaAnswer = await prisma.qnaAnswer.create({
    data: {
      title: title,
      content: content,
      qna: {
        connect : {id: qnaId}
      }
    },
  });

  if(qnaAnswer){
    await prisma.qna.update({
      where: {id: qnaId},
      data: {
        status : 1
      }
    });
  }

  return NextResponse.json(qnaAnswer);
}
