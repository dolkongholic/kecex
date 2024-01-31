import Header from "@/components/Header";
import PostClient from "./PostClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const PostPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <PostClient />
      <Footer />
    </div>
  );
};

export default PostPage;
