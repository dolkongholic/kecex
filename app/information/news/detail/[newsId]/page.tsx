import Header from "@/components/Header";
import NewsDetailClient from "./NewsDetailClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getCurrentNews from "@/app/action/getCurrentNews";
import getNews from "@/app/action/getNews";

interface IParams {
  newsId?: string;
}

const NewsDetailPage = async ({ params }: { params: IParams }) => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  const currentNews = await getCurrentNews(params);
  const newsList = await getNews();

  return (
    <div>
      <Header currentUser={currentUser} />
      <NewsDetailClient 
        newsList={newsList} 
        currentNews={currentNews} 
        currentUser={currentUser} 
      />
      <Footer />
    </div>
  );
};

export default NewsDetailPage;
