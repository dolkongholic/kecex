import Header from "@/components/Header";
import RuleClient from "./RuleClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const RulePage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <RuleClient />
      <Footer />
    </div>
  );
};

export default RulePage;
