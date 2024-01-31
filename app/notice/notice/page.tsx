import Header from "@/components/Header";
import NoticeClient from "./NoticeClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const NoticePage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <NoticeClient />
      <Footer />
    </div>
  );
};

export default NoticePage;
