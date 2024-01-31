import Header from "@/components/Header";
import OutClient from "./OutClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const OutPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <OutClient />
      <Footer />
    </div>
  );
};

export default OutPage;
