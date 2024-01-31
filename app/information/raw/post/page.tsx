import Header from "@/components/Header";
import RawPostClient from "./RawPostClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const RawPostPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <RawPostClient />
      <Footer />
    </div>
  );
};

export default RawPostPage;
