import Header from "@/components/Header";
import DetailClient from "./DetailClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const DetailPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <DetailClient />
      <Footer />
    </div>
  );
};

export default DetailPage;
