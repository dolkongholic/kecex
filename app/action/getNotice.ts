import prisma from "@/app/libs/prisma";

interface GetNoticeParams {
  page?: number;
  limit?: number;
}

export default async function getNotice(params: GetNoticeParams = {}) {
  const { page = 1, limit = 10 } = params;
  
  // 페이지는 1부터 시작하므로 skip 계산 시 (page - 1) * limit
  const skip = (page - 1) * limit;

  try {
    // 총 공지사항 수 조회 (페이지네이션 정보용)
    const totalCount = await prisma.notice.count();
    
    // 페이지네이션이 적용된 공지사항 조회
    const notices = await prisma.notice.findMany({
      skip: skip,
      take: limit,
      orderBy: {
        id: "desc" // id로 정렬 (최신 글이 높은 id를 가짐)
      },
    });

    // 총 페이지 수 계산
    const totalPages = Math.ceil(totalCount / limit);

    return {
      notices,
      totalCount,
      totalPages,
      currentPage: page,
      hasNext: page < totalPages,
      hasPrev: page > 1
    };
  } catch (error) {
    console.error('공지사항 조회 오류:', error);
    return {
      notices: [],
      totalCount: 0,
      totalPages: 0,
      currentPage: 1,
      hasNext: false,
      hasPrev: false
    };
  }
}
