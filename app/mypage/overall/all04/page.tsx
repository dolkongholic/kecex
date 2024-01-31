import Header from "@/components/Header";
import OverAll04Client from "./OverAll04Client";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const OverAll04Page = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <OverAll04Client />
      <Footer />
    </div>
  );
};

export default OverAll04Page;
