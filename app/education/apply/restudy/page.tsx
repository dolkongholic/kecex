import Header from "@/components/Header";
import ReStudyClient from "./ReStudyClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const ReStudyPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <ReStudyClient />
      <Footer />
    </div>
  );
};

export default ReStudyPage;
