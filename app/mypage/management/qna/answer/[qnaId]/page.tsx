import Header from "@/components/Header";
import QnaAnswerClient from "./QnaAnswerClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getCurrentQna from "@/app/action/getCurrentQna";

interface IParams {
  qnaId?: string;
}


const QnaAnswerPage = async ({ params }: { params: IParams }) => {
  const currentUser = await getCurrentUser();
  const currentQna = await getCurrentQna(params);
  return (
    <div>
      <Header currentUser={currentUser} />
      <QnaAnswerClient
        currentQna={currentQna}
        currentUser={currentUser}
      />
      <Footer />
    </div>
  );
};


export default QnaAnswerPage;
