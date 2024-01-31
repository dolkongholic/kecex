import Header from "@/components/Header";
import EquipmentClient from "./EquipmentClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const EquipmentPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <EquipmentClient />
      <Footer />
    </div>
  );
};

export default EquipmentPage;
