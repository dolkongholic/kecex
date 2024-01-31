import Header from "@/components/Header";
import MyStatusCompletionClient from "./MyStatusCompletionClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const MyStatusCompletionPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <MyStatusCompletionClient />
      <Footer />
    </div>
  );
};

export default MyStatusCompletionPage;
