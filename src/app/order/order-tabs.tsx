"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/primitives/Tabs";
import OrderForm from "@/app/order/order-form";
import { useState } from "react";
import { Button } from "@/components/primitives/Button";
import OrderPayment from "@/app/order/order-payment";
import { TabsContentProps } from "@radix-ui/react-tabs";
import OrderComplete from "@/app/order/order-complete";
import { useRouter } from "next/navigation";

type TTab = "order" | "payment" | "complete";

const OrderTabs = () => {
  const { push } = useRouter();
  const [tab, setTab] = useState<TTab>("order");

  return (
    <Tabs value={tab} className="mx-auto max-w-2xl w-full h-full">
      <div className="flex justify-center">
        <TabsList>
          <TabsTrigger value="order">Замовлення</TabsTrigger>
          <TabsTrigger value="payment">Оплата</TabsTrigger>
          <TabsTrigger value="complete">Завершення</TabsTrigger>
        </TabsList>
      </div>

      <Tab value="order">
        <OrderForm onSubmit={() => setTab("payment")}>
          <Button type="submit">Відправити замовлення</Button>
        </OrderForm>
      </Tab>

      <Tab value="payment">
        <OrderPayment onSubmit={() => setTab("complete")}>
          <Button
            type="button"
            variant="outline"
            onClick={() => setTab("order")}
          >
            Повернутися назад
          </Button>
          <Button type="submit">Продовжити</Button>
        </OrderPayment>
      </Tab>

      <Tab value="complete">
        <OrderComplete onSubmit={() => push("/")}>
          <Button type="submit">Зрозуміло</Button>
        </OrderComplete>
      </Tab>
    </Tabs>
  );
};

const Tab = ({ value, ...props }: TabsContentProps) => {
  return <TabsContent className="border rounded-lg" value={value} {...props} />;
};

export default OrderTabs;
