import Header from "@/components/Header";
import InspectionClient from "./InspectionClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const InspectionPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <InspectionClient />
      <Footer />
    </div>
  );
};

export default InspectionPage;
