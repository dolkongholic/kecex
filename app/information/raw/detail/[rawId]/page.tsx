import Header from "@/components/Header";
import RawDetailClient from "./RawDetailClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getCurrentRaw from "@/app/action/getCurrentRaw";

interface IParams {
  rawId?: string;
}

const RawDetailPage = async ({ params }: { params: IParams }) => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  const currentRaw = await getCurrentRaw(params);
  return (
    <div>
      <Header currentUser={currentUser} />
      <RawDetailClient currentRaw={currentRaw} />
      <Footer />
    </div>
  );
};

export default RawDetailPage;
