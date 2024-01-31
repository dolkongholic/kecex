import Header from "@/components/Header";
import CareerClient from "./CarrearPrintClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const CareerPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <CareerClient />
      <Footer />
    </div>
  );
};

export default CareerPage;
