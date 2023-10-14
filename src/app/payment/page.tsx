import Header from "@/components/page/Header";
import Image from "next/image";
import Container from "@/components/page/Container";
import OrderConfirmation from "@/app/order/confirmation";
import PaymentContainer from "@/app/payment/container";

const Payment = () => {
  return (
    <>
      <Header />
      <main>
        <Container className="grid grid-cols-12 justify-stretch gap-8 p-8">
          <div className="col-span-4">
            <OrderConfirmation />
          </div>
          <div className="col-span-4 flex flex-col gap-6">
            <PaymentContainer />
          </div>
          <div className="col-span-4 relative">
            <Image
              src="/taxi/taxi-2.jpg"
              alt=""
              className="rounded-lg"
              layout="fill"
            />
          </div>
        </Container>
      </main>
    </>
  );
};

export default Payment;
