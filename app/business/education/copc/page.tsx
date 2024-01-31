import Header from "@/components/Header";
import CopcClient from "./CopcClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const CopcPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <CopcClient />
      <Footer />
    </div>
  );
};

export default CopcPage;
