import Header from "@/components/Header";
import WorkerClient from "./WorkerClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const WorkerPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <WorkerClient currentUser={currentUser} />
      <Footer />
    </div>
  );
};

export default WorkerPage;
