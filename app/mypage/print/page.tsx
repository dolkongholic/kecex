import Header from "@/components/Header";
import PrintClient from "./PrintClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const PrintPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <PrintClient currentUser={currentUser} />
      <Footer />
    </div>
  );
};

export default PrintPage;
