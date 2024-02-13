import prisma from "@/app/libs/prisma";

interface IParams {
  rawId?: string;
}

export default async function getCurrentRaw(params: IParams) {
  try {
    const { rawId } = params;

    const currentNotice = await prisma.notice.findUnique({
      where: {
        id: Number(rawId),
      },
    });

    return currentNotice;
  } catch (error: any) {
    return null;
  }
}
