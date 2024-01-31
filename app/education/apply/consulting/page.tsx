import Header from "@/components/Header";
import ConsultingClient from "./ConsultingClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const ConsultingPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <ConsultingClient />
      <Footer />
    </div>
  );
};

export default ConsultingPage;
