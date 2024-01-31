import Header from "@/components/Header";
import ResumeClient from "./ResumeClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const ResumePage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <ResumeClient />
      <Footer />
    </div>
  );
};

export default ResumePage;
