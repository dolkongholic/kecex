import Header from "@/components/Header";
import NewsClient from "./NewsClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getNews from "@/app/action/getNews";

const NewsPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  const newsList = await getNews();

  return (
    <div>
      <Header currentUser={currentUser} />
      <NewsClient newsList={newsList} currentUser={currentUser} />
      <Footer />
    </div>
  );
};

export default NewsPage;
