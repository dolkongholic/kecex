import prisma from "@/app/libs/prisma";

interface IParams {
  noticeId?: string;
}

export default async function getCurrentNotice(params: IParams) {
  try {
    const { noticeId } = params;

    const currentNotice = await prisma.notice.findUnique({
      where: {
        id: Number(noticeId),
      },
    });

    return currentNotice;
  } catch (error: any) {
    return null;
  }
}
