import Header from "@/components/Header";
import NoticeClient from "./NoticeClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getNotice from "@/app/action/getNotice";

const NoticePage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  const noticeList = await getNotice();
  return (
    <div>
      <Header currentUser={currentUser} />
      <NoticeClient currentUser={currentUser} noticeList={noticeList} />
      <Footer />
    </div>
  );
};

export default NoticePage;
