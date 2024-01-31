import Header from "@/components/Header";
import NewsPostClient from "./NewsPostClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const NewsPostPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <NewsPostClient />
      <Footer />
    </div>
  );
};

export default NewsPostPage;
