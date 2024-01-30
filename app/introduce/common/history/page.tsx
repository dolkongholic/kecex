import Header from "@/components/Header";
import HistoryClient from "./HistoryClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const HistoryPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <HistoryClient />
      <Footer />
    </div>
  );
};

export default HistoryPage;
