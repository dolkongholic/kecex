import Header from "@/components/Header";
import DangerClient from "./DangerClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const DangerPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <DangerClient />
      <Footer />
    </div>
  );
};

export default DangerPage;
