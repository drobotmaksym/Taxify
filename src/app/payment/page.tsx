import Header from "@/components/Header";
import Image from "next/image";
import Container from "@/components/Container";
import PaymentContainer from "@/components/PaymentContainer";
import OrderConfirmation from "@/components/OrderConfirmation";

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
