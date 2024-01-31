import Header from "@/components/Header";
import Course03Client from "./Course03Client";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const Course03Page = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <Course03Client />
      <Footer />
    </div>
  );
};

export default Course03Page;
