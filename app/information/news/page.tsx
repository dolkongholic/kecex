import Header from "@/components/Header";
import NewsClient from "./NewsClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const NewsPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <NewsClient />
      <Footer />
    </div>
  );
};

export default NewsPage;
