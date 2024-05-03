import Header from "@/components/Header";
import PrintClient from "./PrintClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getPayment from "@/app/action/getPayment";

const PrintPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  let paymentList:any = null;
  if (currentUser) {
    paymentList = await getPayment(currentUser);
  }
  return (
    <div>
      <Header currentUser={currentUser} />
      <PrintClient currentUser={currentUser} paymentList = {paymentList} />
      <Footer />
    </div>
  );
};

export default PrintPage;
