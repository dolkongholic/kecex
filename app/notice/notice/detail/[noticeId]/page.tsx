import Header from "@/components/Header";
import NoticeDetailClient from "./NoticeDetailClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getCurrentNotice from "@/app/action/getCurrentNotice";
import getNotice from "@/app/action/getNotice";

interface IParams {
  noticeId?: string;
}

const NoticeDetailPage = async ({ params }: { params: IParams }) => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  const currentNotice = await getCurrentNotice(params);
  const noticeList = await getNotice();
  return (
    <div>
      <Header currentUser={currentUser} />
      <NoticeDetailClient
        currentNotice={currentNotice}
        currentUser={currentUser}
        noticeList={noticeList}
      />
      <Footer />
    </div>
  );
};

export default NoticeDetailPage;
