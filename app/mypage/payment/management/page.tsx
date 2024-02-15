import Header from "@/components/Header";
import ManagementClient from "./ManagementClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const ManagementPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <ManagementClient />
      <Footer />
    </div>
  );
};

export default ManagementPage;
