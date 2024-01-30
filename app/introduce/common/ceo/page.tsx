import Header from "@/components/Header";
import CeoClient from "./CeoClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const CeoPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <CeoClient />
      <Footer />
    </div>
  );
};

export default CeoPage;
