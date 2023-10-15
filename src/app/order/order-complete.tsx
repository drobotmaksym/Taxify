import {
  Form,
  FormDescription,
  FormFooter,
  FormHeader,
  FormTitle,
} from "@/components/primitives/Form";
import { useForm } from "react-hook-form";
import { IForm } from "@/library/layout";

const OrderComplete = ({ children, onSubmit }: IForm) => {
  const form = useForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormHeader>
          <FormTitle>Все готово</FormTitle>
          <FormDescription>Водій виїхав на вказане місце.</FormDescription>
        </FormHeader>

        <FormFooter className="grid">{children}</FormFooter>
      </form>
    </Form>
  );
};

export default OrderComplete;
