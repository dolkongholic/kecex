import Header from "@/components/Header";
import Course04Client from "./Course04Client";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const Course04Page = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <Course04Client />
      <Footer />
    </div>
  );
};

export default Course04Page;
