import Header from "@/components/Header";
import MyStatusCancelClient from "./MyStatusCancelClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const MyStatusCancelPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <MyStatusCancelClient />
      <Footer />
    </div>
  );
};

export default MyStatusCancelPage;
