import Header from "@/components/Header";
import SeminaClient from "./SeminaClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const SeminaPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <SeminaClient />
      <Footer />
    </div>
  );
};

export default SeminaPage;
