import Header from "@/components/Header";
import ReExamClient from "./ReExamClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const ReExamPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <ReExamClient />
      <Footer />
    </div>
  );
};

export default ReExamPage;
