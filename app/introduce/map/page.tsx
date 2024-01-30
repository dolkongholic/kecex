import Header from "@/components/Header";
import MapClient from "./MapClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const MapPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <MapClient />
      <Footer />
    </div>
  );
};

export default MapPage;
