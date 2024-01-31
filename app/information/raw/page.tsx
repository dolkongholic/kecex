import Header from "@/components/Header";
import RawClient from "./RawClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const RawPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <RawClient />
      <Footer />
    </div>
  );
};

export default RawPage;
