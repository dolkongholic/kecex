import Header from "@/components/Header";
import JoinClient from "./JoinClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const JoinPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <JoinClient />
      <Footer />
    </div>
  );
};

export default JoinPage;
