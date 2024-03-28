import Header from "@/components/Header";
import CareerClient from "./CareerPrintClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const CareerPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <CareerClient currentUser={currentUser} />
      <Footer />
    </div>
  );
};

export default CareerPage;
