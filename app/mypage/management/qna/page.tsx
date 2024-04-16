import Header from "@/components/Header";
import QnaManagementClient from "./QnaManagementClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getAllQna from "@/app/action/getAllQna";

const QnaManagementPage = async () => {
  const currentUser = await getCurrentUser();
  // 현재 사용자의 이메일을 params 객체에 담아서 getQna 함수에 전달
  const qnaList = await getAllQna();
  return (
    <div>
      <Header currentUser={currentUser} />
      <QnaManagementClient currentUser={currentUser} qnaList={qnaList}  />
      <Footer />
    </div>
  );
};

export default QnaManagementPage;
