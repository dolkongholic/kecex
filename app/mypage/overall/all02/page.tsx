import Header from "@/components/Header";
import OverAll02Client from "./OverAll02Client";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const OverAll02Page = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <OverAll02Client />
      <Footer />
    </div>
  );
};

export default OverAll02Page;
