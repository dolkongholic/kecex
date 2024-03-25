import Header from "@/components/Header";
import CareerSettingClient from "./CareerSettingClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const CareerSettingPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <CareerSettingClient />
      <Footer />
    </div>
  );
};

export default CareerSettingPage;
