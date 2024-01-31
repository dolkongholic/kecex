import Header from "@/components/Header";
import CareerCardClient from "./CareerCardClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const CareerCardPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <CareerCardClient />
      <Footer />
    </div>
  );
};

export default CareerCardPage;
