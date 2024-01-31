import Header from "@/components/Header";
import Course01Client from "./Course01Client";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const Course01Page = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <Course01Client />
      <Footer />
    </div>
  );
};

export default Course01Page;
