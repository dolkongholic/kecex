import Header from "@/components/Header";
import DetailClient from "./DetailClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getPayment from "@/app/action/getPayment";

const DetailPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return;
  }
  const paymentList = await getPayment(currentUser);
  return (
    <div>
      <Header currentUser={currentUser} />
      <DetailClient  
      currentUser={currentUser}
      paymentList={paymentList}
      />
      <Footer />
    </div>
  );
};

export default DetailPage;
