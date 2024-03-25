import prisma from "@/app/libs/prisma";

interface IParams {
  rawId?: string;
}

export default async function getCurrentRaw(params: IParams) {
  try {
    const { rawId } = params;

    const currentRaw = await prisma.raw.findUnique({
      where: {
        id: Number(rawId),
      },
    });

    return currentRaw;
  } catch (error: any) {
    return null;
  }
}
