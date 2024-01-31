import Header from "@/components/Header";
import ProfileClient from "./ProfileClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const ProfilePage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <ProfileClient />
      <Footer />
    </div>
  );
};

export default ProfilePage;
