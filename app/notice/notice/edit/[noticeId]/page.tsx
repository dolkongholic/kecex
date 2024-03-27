import Header from "@/components/Header";
import NoticeEditClient from "./NoticeEditClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getCurrentNotice from "@/app/action/getCurrentNotice";

interface IParams {
  noticeId?: string;
}

const NoticeEditPage = async ({ params }: { params: IParams }) => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  const currentNotice = await getCurrentNotice(params);
  return (
    <div>
      <Header currentUser={currentUser} />
      <NoticeEditClient
        currentNotice={currentNotice}
        currentUser={currentUser}
      />
      <Footer />
    </div>
  );
};

export default NoticeEditPage;
