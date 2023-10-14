import { ComponentProps, ReactNode } from "react";
import { cn } from "@/library/utils";

interface IContainer extends ComponentProps<"div"> {
  children: ReactNode;
}

const Container = ({ className, children }: IContainer) => {
  return <div className={cn(className, "container")}>{children}</div>;
};

export default Container;
