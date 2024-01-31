import Header from "@/components/Header";
import NewsDetailClient from "./NewsDetailClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const NewsDetailPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <NewsDetailClient />
      <Footer />
    </div>
  );
};

export default NewsDetailPage;
