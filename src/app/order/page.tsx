import Header from "@/components/page/Header";
import Footer from "@/components/page/Footer";
import OrderTabs from "@/app/order/order-tabs";

export const metadata = {
  title: "Order",
  description: "An order page.",
};

export default function Order() {
  return (
    <>
      <Header />
      <main className="flex-1 container grid p-4">
        <OrderTabs />
      </main>
      <Footer />
    </>
  );
}
