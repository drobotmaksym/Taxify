import { RadioGroup, RadioGroupItem } from "@/components/primitives/RadioGroup";
import { Label } from "@/components/primitives/Label";
import { CreditCard, Wallet, WalletCards } from "lucide-react";
import { Input } from "@/components/primitives/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/primitives/Select";
import { ComponentProps } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import {
  Form,
  FormContent,
  FormControl,
  FormDescription,
  FormField,
  FormFieldGroup,
  FormFooter,
  FormHeader,
  FormItem,
  FormLabel,
  FormTitle,
} from "@/components/primitives/Form";
import { IForm } from "@/library/layout";
import { Skeleton } from "@/components/primitives/Skeleton";

export type PaymentMethod = "card" | "cash" | "paypal";

export type OrderPaymentType = {
  price: string;
  method: PaymentMethod;
  name: string;
  number: string;
  month: string;
  year: string;
  code: string;
};

const OrderPayment = ({ children, onSubmit }: IForm) => {
  const form = useForm<OrderPaymentType>({
    defaultValues: {
      price: "425 грн.",
      method: "card",
      name: "",
      number: "",
      month: "",
      year: "",
      code: "",
    },
  });

  const method = form.watch("method");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormHeader>
          <FormTitle>Оплата замовлення</FormTitle>
          <FormDescription>
            Оплатіть ваше замовлення наявними способами.
          </FormDescription>
        </FormHeader>

        <FormContent>
          <Price {...form} />
          <PaymentMethod {...form} />

          {method === "card" && (
            <>
              <FullName {...form} />
              <Number {...form} />
              <FormFieldGroup className="grid grid-cols-3 gap-4">
                <Month {...form} />
                <Year {...form} />
                <Code {...form} />
              </FormFieldGroup>
            </>
          )}

          {method === "paypal" && (
            <Skeleton
              variant="placeholder"
              className="p-8 text-sm text-destructive border-destructive"
            >
              Нажаль оплата за допомогою PayPal наразі не є доступною.
            </Skeleton>
          )}
        </FormContent>

        <FormFooter className="grid grid-cols-2 gap-4">{children}</FormFooter>
      </form>
    </Form>
  );
};

const Price = ({ control }: UseFormReturn<OrderPaymentType>) => {
  return (
    <FormField
      control={control}
      name="price"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Вартість замовлення</FormLabel>
          <FormControl>
            <Input defaultValue={field.value} disabled {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

const PaymentItem = ({
  value,
  children,
  ...props
}: ComponentProps<typeof RadioGroupItem>) => {
  return (
    <div>
      <RadioGroupItem
        value={value}
        id={value}
        className="peer sr-only"
        {...props}
      />
      <Label
        htmlFor={value}
        className="flex flex-col gap-2 items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
      >
        {children}
      </Label>
    </div>
  );
};

const PaymentMethod = ({ control }: UseFormReturn<OrderPaymentType>) => {
  return (
    <FormField
      control={control}
      name="method"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Спосіб оплати</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-3 gap-4"
            >
              <PaymentItem value="card">
                <CreditCard />
                Картка
              </PaymentItem>

              <PaymentItem value="cash">
                <Wallet />
                Готівка
              </PaymentItem>

              <PaymentItem value="paypal">
                <WalletCards />
                PayPal
              </PaymentItem>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

const FullName = ({ control }: UseFormReturn<OrderPaymentType>) => {
  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Замовник</FormLabel>
          <FormControl>
            <Input placeholder="Іван Гуров" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

const Number = ({ control }: UseFormReturn<OrderPaymentType>) => {
  return (
    <FormField
      control={control}
      name="number"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Номер картки</FormLabel>
          <FormControl>
            <Input placeholder="1234 5678 9123 4567" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

const Month = ({ control }: UseFormReturn<OrderPaymentType>) => {
  return (
    <FormField
      control={control}
      name="month"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Місяць</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger id="month">
                <SelectValue placeholder="Лютий" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Січень</SelectItem>
                <SelectItem value="2">Лютий</SelectItem>
                <SelectItem value="3">Березень</SelectItem>
                <SelectItem value="4">Квітень</SelectItem>
                <SelectItem value="5">Травень</SelectItem>
                <SelectItem value="6">Червень</SelectItem>
                <SelectItem value="7">Липень</SelectItem>
                <SelectItem value="8">Серпень</SelectItem>
                <SelectItem value="9">Вересень</SelectItem>
                <SelectItem value="10">Жовтень</SelectItem>
                <SelectItem value="11">Листопад</SelectItem>
                <SelectItem value="12">Грудень</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

const Year = ({ control }: UseFormReturn<OrderPaymentType>) => {
  return (
    <FormField
      control={control}
      name="year"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Місяць</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="2023" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => (
                  <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                    {new Date().getFullYear() + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

const Code = ({ control }: UseFormReturn<OrderPaymentType>) => {
  return (
    <FormField
      control={control}
      name="code"
      render={({ field }) => (
        <FormItem>
          <FormLabel>CVC</FormLabel>
          <FormControl>
            <Input placeholder="123" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default OrderPayment;
