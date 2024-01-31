import Header from "@/components/Header";
import Course02Client from "./Course02Client";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const Course02Page = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <Course02Client />
      <Footer />
    </div>
  );
};

export default Course02Page;
