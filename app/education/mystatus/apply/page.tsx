import Header from "@/components/Header";
import MyStatusApplyClient from "./MyStatusApplyClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const MyStatusApplyPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <MyStatusApplyClient />
      <Footer />
    </div>
  );
};

export default MyStatusApplyPage;
