import Header from "@/components/Header";
import RawClient from "./RawClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getRaw from "@/app/action/getRaw";

const RawPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  const rawList = await getRaw();
  return (
    <div>
      <Header currentUser={currentUser} />
      <RawClient rawList={rawList} />
      <Footer />
    </div>
  );
};

export default RawPage;
