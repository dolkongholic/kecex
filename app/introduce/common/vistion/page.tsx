import Header from "@/components/Header";
import VisionClient from "./VisionClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const VistionPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <VisionClient />
      <Footer />
    </div>
  );
};

export default VistionPage;
