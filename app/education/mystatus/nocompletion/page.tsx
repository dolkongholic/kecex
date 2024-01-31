import Header from "@/components/Header";
import MyStatusNoCompletionClient from "./MyStatusNoCompletionClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const MyStatusNoCompletionPage = async () => {
  // const [menu, setMenu] = useState<strNoCompletion | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <MyStatusNoCompletionClient />
      <Footer />
    </div>
  );
};

export default MyStatusNoCompletionPage;
