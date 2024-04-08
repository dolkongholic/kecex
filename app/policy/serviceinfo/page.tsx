import Header from "@/components/Header";
import ServiceInfoClient from "./ServiceInfoClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const ServiceInfoPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <ServiceInfoClient currentUser={currentUser}/>
      <Footer />
    </div>
  );
};

export default ServiceInfoPage;
