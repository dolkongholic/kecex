import Header from "@/components/Header";
import QnaClient from "./QnaClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const QnaPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <QnaClient />
      <Footer />
    </div>
  );
};

export default QnaPage;
