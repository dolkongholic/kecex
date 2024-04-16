import prisma from "@/app/libs/prisma";

interface IParams {
  qnaId?: string;
}

export default async function getCurrentQna(params: IParams) {
  try {
    const { qnaId } = params;

    const currentQnaDetail = await prisma.qnaAnswer.findUnique({
      where: {
        qnaId: qnaId,
      },
    });

    return currentQnaDetail;
  } catch (error: any) {
    return null;
  }
}