import {
  Form,
  FormContent,
  FormDescription,
  FormFooter,
  FormHeader,
  FormTitle,
} from "@/components/primitives/Form";
import { useForm } from "react-hook-form";
import { IForm } from "@/library/layout";
import { AspectRatio } from "@/components/primitives/AspectRatio";
import Image from "next/image";

const OrderComplete = ({ children, onSubmit }: IForm) => {
  const form = useForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormHeader>
          <FormTitle>Все готово</FormTitle>
          <FormDescription>Водій виїхав на вказане місце.</FormDescription>
        </FormHeader>

        <FormContent className="py-0">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="https://illustrations.popsy.co/amber/searching-location-on-the-phone.svg"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-contain"
            />
          </AspectRatio>
        </FormContent>

        <FormFooter className="grid">{children}</FormFooter>
      </form>
    </Form>
  );
};

export default OrderComplete;
