import Header from "@/components/Header";
import PsmClient from "./PsmClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const PsmPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <PsmClient />
      <Footer />
    </div>
  );
};

export default PsmPage;