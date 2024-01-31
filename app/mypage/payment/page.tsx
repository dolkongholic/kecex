import Header from "@/components/Header";
import PaymentClient from "./PaymentClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

const PaymentPage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Header currentUser={currentUser} />
      <PaymentClient />
      <Footer />
    </div>
  );
};

export default PaymentPage;
