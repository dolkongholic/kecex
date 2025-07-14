import Header from "@/components/Header";
import Index from "@/components/Index";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getMainBanner from "./action/getMainBanner";
import getNews from "./action/getNews";
import getNotice from "./action/getNotice";

const Home = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  const mainBanner = await getMainBanner();
  const newsList = await getNews();
  
  // 메인 페이지에서는 최신 공지사항만 필요하므로 notices 배열만 추출
  const noticeData = await getNotice({ page: 1, limit: 10 });
  const noticeList = noticeData.notices;
  
  return (
    <div>
      <Header currentUser={currentUser} />
      <Index
        currentUser={currentUser}
        mainBanner={mainBanner}
        newsList={newsList}
        noticeList={noticeList}
      />
      <Footer />
    </div>
  );
};

export default Home;
