import Header from "@/components/Header";
import SapaClient from "./SapaClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const SapaPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <SapaClient />
      <Footer />
    </div>
  );
};

export default SapaPage;
