import Header from "@/components/Header";
import CiClient from "./CiClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const CiPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <CiClient />
      <Footer />
    </div>
  );
};

export default CiPage;
