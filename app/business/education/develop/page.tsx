import Header from "@/components/Header";
import DevelopClient from "./DevelopClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const DevelopPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <DevelopClient />
      <Footer />
    </div>
  );
};

export default DevelopPage;
