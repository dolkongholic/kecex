import Header from "@/components/Header";
import IndustryClient from "./IndustryClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const IndustryPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <IndustryClient />
      <Footer />
    </div>
  );
};

export default IndustryPage;
