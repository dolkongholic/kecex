import prisma from "@/app/libs/prisma";

interface IParams {
  newsId?: string;
}

export default async function getCurrentNews(params: IParams) {
  try {
    const { newsId } = params;

    const currentNotice = await prisma.news.findUnique({
      where: {
        id: Number(newsId),
      },
    });

    return currentNotice;
  } catch (error: any) {
    return null;
  }
}
