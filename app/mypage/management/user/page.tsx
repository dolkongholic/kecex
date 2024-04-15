import Header from "@/components/Header";
import UserManagementClient from "./UserManagementClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getUser from "@/app/action/getUser";

const UserManagementPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  const userList = await getUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <UserManagementClient currentUser={currentUser} userList={userList} />
      <Footer />
    </div>
  );
};

export default UserManagementPage;
