import Header from "@/components/Header";
import QnaEditClient from "./QnaEditClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getCurrentQna from "@/app/action/getCurrentQna";

interface IParams {
  qnaId?: string;
}


const QnaEditPage = async ({ params }: { params: IParams }) => {
  const currentUser = await getCurrentUser();
  const currentQna = await getCurrentQna(params);
  return (
    <div>
      <Header currentUser={currentUser} />
      <QnaEditClient
        currentQna={currentQna}
        currentUser={currentUser}
      />
      <Footer />
    </div>
  );
};


export default QnaEditPage;
