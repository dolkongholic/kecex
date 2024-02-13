import Header from "@/components/Header";
import NewsDetailClient from "./NewsDetailClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getCurrentNews from "@/app/action/getCurrentNews";

interface IParams {
  newsId?: string;
}

const NewsDetailPage = async ({ params }: { params: IParams }) => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  const currentNews = await getCurrentNews(params);

  return (
    <div>
      <Header currentUser={currentUser} />
      <NewsDetailClient currentNews={currentNews} currentUser={currentUser} />
      <Footer />
    </div>
  );
};

export default NewsDetailPage;
