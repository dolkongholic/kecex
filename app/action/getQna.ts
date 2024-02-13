import prisma from "@/app/libs/prisma";

interface IParams {
  email: string;
}

export default async function getQna(params: IParams) {
  const { email } = params;

  const qna = await prisma.qna.findMany({
    where: {
      email: email,
    },
  });

  return qna;
}
