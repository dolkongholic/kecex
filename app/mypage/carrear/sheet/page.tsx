import Header from "@/components/Header";
import CareerSheetClient from "./CareerSheetClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const CareerSheetPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <CareerSheetClient />
      <Footer />
    </div>
  );
};

export default CareerSheetPage;
