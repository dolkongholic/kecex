import Header from "@/components/Header";
import GroupClient from "./GroupClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const GroupPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <GroupClient />
      <Footer />
    </div>
  );
};

export default GroupPage;
