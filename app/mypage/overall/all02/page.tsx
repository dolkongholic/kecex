import Header from "@/components/Header";
import OverAll02Client from "./OverAll02Client";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getQna from "@/app/action/getQna";

const OverAll02Page = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  
  let qnaList:any = null

  if (currentUser) {
    qnaList = await getQna(currentUser);
  }


  return (
    <div>
      <Header currentUser={currentUser} />
      <OverAll02Client qnaList={qnaList} currentUser={currentUser} />
      <Footer />
    </div>
  );
};

export default OverAll02Page;
