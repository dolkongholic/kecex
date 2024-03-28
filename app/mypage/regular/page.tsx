import Header from "@/components/Header";
import RegularClient from "./RegularClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const RegularPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <RegularClient currentUser={currentUser}  />
      <Footer />
    </div>
  );
};

export default RegularPage;
