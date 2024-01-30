import Header from "@/components/Header";
import Index from "@/components/Index";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const Home = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <Index currentUser={currentUser} />
      <Footer />
    </div>
  );
};

export default Home;
