import Header from "@/components/Header";
import ApplyClient from "./ApplyClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const ApplyPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <ApplyClient />
      <Footer />
    </div>
  );
};

export default ApplyPage;
