import Header from "@/components/Header";
import PrivacyClient from "./PrivacyClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const PrivacyPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <PrivacyClient currentUser={currentUser}/>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
