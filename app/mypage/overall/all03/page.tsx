import Header from "@/components/Header";
import OverAll03Client from "./OverAll03Client";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const OverAll03Page = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <OverAll03Client />
      <Footer />
    </div>
  );
};

export default OverAll03Page;
