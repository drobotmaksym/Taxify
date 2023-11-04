import { Input } from "@/components/primitives/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/primitives/Select";
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
import { useForm, UseFormReturn } from "react-hook-form";
import { IForm } from "@/library/layout";
import { Checkbox } from "@/components/primitives/Checkbox";

export type OrderFormType = {
  name: string;
  phone: string;
  departure: string;
  destination: string;
  city: string;
  time: string;
  children: number;
  adults: number;
  baggage: boolean;
};

export const OrderForm = ({ children, onSubmit }: IForm) => {
  const form = useForm<OrderFormType>({
    defaultValues: {
      name: "",
      departure: "",
      destination: "",
      city: "",
      time: "",
      children: 0,
      adults: 1,
      baggage: false,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormHeader>
          <FormTitle>Створення замовлення</FormTitle>
          <FormDescription>Введіть дані замовлення.</FormDescription>
        </FormHeader>

        <FormContent>
          <FormFieldGroup className="grid grid-cols-2 gap-4">
            <FullName {...form} />
            <Phone {...form} />
          </FormFieldGroup>

          <FormFieldGroup className="grid grid-cols-2 gap-4">
            <Departure {...form} />
            <Destination {...form} />
          </FormFieldGroup>

          <FormFieldGroup className="grid grid-cols-2 gap-4">
            <City {...form} />
            <Time {...form} />
          </FormFieldGroup>

          <FormFieldGroup className="grid grid-cols-2 gap-4">
            <Children {...form} />
            <Adults {...form} />
          </FormFieldGroup>

          <Baggage {...form} />
        </FormContent>

        <FormFooter className="grid">{children}</FormFooter>
      </form>
    </Form>
  );
};

const FullName = ({ control }: UseFormReturn<OrderFormType>) => {
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

const Phone = ({ control }: UseFormReturn<OrderFormType>) => {
  return (
    <FormField
      control={control}
      name="phone"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Номер телефону</FormLabel>
          <FormControl>
            <Input placeholder="+380123456789" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

const Departure = ({ control }: UseFormReturn<OrderFormType>) => {
  return (
    <FormField
      control={control}
      name="departure"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Початкова адреса</FormLabel>
          <FormControl>
            <Input placeholder="вул. Сумська, 10а" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

const Destination = ({ control }: UseFormReturn<OrderFormType>) => {
  return (
    <FormField
      control={control}
      name="destination"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Кінцева адреса</FormLabel>

          <FormControl>
            <Input placeholder="вул. Героїв праці, 121б" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

const City = ({ control }: UseFormReturn<OrderFormType>) => {
  return (
    <FormField
      control={control}
      name="city"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Місто</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Оберіть місто" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kharkiv">Харків</SelectItem>
                <SelectItem value="kiev">Київ</SelectItem>
                <SelectItem value="sumy">Суми</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

const Time = ({ control }: UseFormReturn<OrderFormType>) => {
  return (
    <FormField
      control={control}
      name="time"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Час</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Оберіть час" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Якнайшвидше</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

const Children = ({ control }: UseFormReturn<OrderFormType>) => {
  return (
    <FormField
      control={control}
      name="children"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Кількість дітей</FormLabel>
          <FormControl>
            <Input type="number" {...field} min={0} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

const Adults = ({ control }: UseFormReturn<OrderFormType>) => {
  return (
    <FormField
      control={control}
      name="adults"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Кількість дорослих</FormLabel>
          <FormControl>
            <Input type="number" min={1} {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

const Baggage = ({ control }: UseFormReturn<OrderFormType>) => {
  return (
    <FormField
      control={control}
      name="baggage"
      render={({ field }) => (
        <FormItem className="flex jitems-start space-x-3 space-y-0 ">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>Я потребую місце для багажу.</FormLabel>
            <FormDescription>Може буте знята додаткова плата</FormDescription>
          </div>
        </FormItem>
      )}
    />
  );
};

export default OrderForm;
