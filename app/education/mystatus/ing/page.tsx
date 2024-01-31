import Header from "@/components/Header";
import MyStatusIngClient from "./MyStatusIngClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const MyStatusIngPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <MyStatusIngClient />
      <Footer />
    </div>
  );
};

export default MyStatusIngPage;
