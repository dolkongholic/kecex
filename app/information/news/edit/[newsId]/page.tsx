import Header from "@/components/Header";
import NewsEditClient from "./NewsEditClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getCurrentNews from "@/app/action/getCurrentNews";

interface IParams {
  newsId?: string;
}

const NewsEditPage = async ({ params }: { params: IParams }) => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  const currentNews = await getCurrentNews(params);

  return (
    <div>
      <Header currentUser={currentUser} />
      <NewsEditClient currentNews={currentNews} currentUser={currentUser} />
      <Footer />
    </div>
  );
};

export default NewsEditPage;
