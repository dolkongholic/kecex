import Header from "@/components/Header";
import NoticeClient from "./NoticeClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getNotice from "@/app/action/getNotice";

interface NoticePageProps {
  searchParams: {
    page?: string;
  };
}

const NoticePage = async ({ searchParams }: NoticePageProps) => {
  const currentUser = await getCurrentUser();
  
  // 페이지 파라미터 처리 (기본값: 1)
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  
  // 올바른 페이지 번호인지 확인 (1 이상의 정수)
  const validPage = page > 0 ? page : 1;
  
  // 페이지네이션된 공지사항 데이터 가져오기
  const noticeData = await getNotice({ page: validPage, limit: 10 });
  
  return (
    <div>
      <Header currentUser={currentUser} />
      <NoticeClient currentUser={currentUser} noticeData={noticeData} />
      <Footer />
    </div>
  );
};

export default NoticePage;
