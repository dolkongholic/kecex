import Header from "@/components/Header";
import OverAll01Client from "./OverAll01Client";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const OverAll01Page = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <OverAll01Client currentUser={currentUser} />
      <Footer />
    </div>
  );
};

export default OverAll01Page;
