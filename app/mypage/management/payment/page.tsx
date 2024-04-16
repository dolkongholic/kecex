import Header from "@/components/Header";
import PayManagementClient from "./PayManagementClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getAllPayment from "@/app/action/getAllPayment"

const PayManagementPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  const paymentList = await getAllPayment();
  return (
    <div>
      <Header currentUser={currentUser} />
      <PayManagementClient 
      currentUser={currentUser} 
      paymentList={paymentList}
      />
      <Footer />
    </div>
  );
};

export default PayManagementPage;
