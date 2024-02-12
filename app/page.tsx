import Header from "@/components/Header";
import Index from "@/components/Index";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getMainBanner from "./action/getMainBanner";

const Home = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  const mainBanner = await getMainBanner();
  return (
    <div>
      <Header currentUser={currentUser} />
      <Index currentUser={currentUser} mainBanner={mainBanner} />
      <Footer />
    </div>
  );
};

export default Home;
