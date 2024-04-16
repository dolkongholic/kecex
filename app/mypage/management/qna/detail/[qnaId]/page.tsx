import Header from "@/components/Header";
import QnaDetailClient from "./QnaDetailClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getCurrentQna from "@/app/action/getCurrentQna";
import getCurrentQnaDetail from "@/app/action/getCurrentQnaDetail";

interface IParams {
  qnaId?: string;
}


const QnaDetailPage = async ({ params }: { params: IParams }) => {
  const currentUser = await getCurrentUser();
  const currentQna = await getCurrentQna(params);
  const currentQnaDetail = await getCurrentQnaDetail(params);
  return (
    <div>
      <Header currentUser={currentUser} />
      <QnaDetailClient
        currentQna={currentQna}
        currentQnaDetail={currentQnaDetail}
        currentUser={currentUser}
      />
      <Footer />
    </div>
  );
};


export default QnaDetailPage;
