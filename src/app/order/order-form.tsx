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
import { z } from "zod";
import { IForm } from "@/library/layout";

export const OrderFormScheme = z.object({
  fullname: z.string().min(1).max(64),
  departure: z.string().min(1).max(256),
  destination: z.string().min(1).max(256),
  city: z.string().refine((value) => value !== ""),
  time: z.string().refine((value) => value !== ""),
  children: z.number().min(0),
  adults: z.number().min(1),
});

export type OrderFormType = z.infer<typeof OrderFormScheme>;

export const OrderForm = ({ children, onSubmit }: IForm) => {
  const form = useForm({
    defaultValues: {
      fullname: "",
      departure: "",
      destination: "",
      city: "",
      time: "",
      children: 0,
      adults: 1,
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
          <FullName {...form} />
          <Departure {...form} />
          <Destination {...form} />

          <FormFieldGroup className="grid grid-cols-2 gap-4">
            <City {...form} />
            <Time {...form} />
          </FormFieldGroup>

          <FormFieldGroup className="grid grid-cols-2 gap-4">
            <Children {...form} />
            <Adults {...form} />
          </FormFieldGroup>
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
      name="fullname"
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
            <Input type="number" {...field} min={1} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default OrderForm;
