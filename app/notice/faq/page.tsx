import Header from "@/components/Header";
import FaqClient from "./FaqClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const FaqPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <FaqClient />
      <Footer />
    </div>
  );
};

export default FaqPage;
