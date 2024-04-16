import prisma from "@/app/libs/prisma";

interface IParams {
  qnaId?: string;
}

export default async function getCurrentQna(params: IParams) {
  try {
    const { qnaId } = params;

    const currentQna = await prisma.qna.findUnique({
      where: {
        id: qnaId,
      },
    });

    return currentQna;
  } catch (error: any) {
    return null;
  }
}