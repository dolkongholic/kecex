import prisma from "@/app/libs/prisma";

interface IParams {
  email: string | null;
}

export default async function getQna(params: IParams) {
  const { email } = params;

  if (!email) {
    return;
  }
  const qna = await prisma.qna.findMany({
    where: {
      email: email,
    },
  });

  return qna;
}
