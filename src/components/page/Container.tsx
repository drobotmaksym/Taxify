import { ComponentProps, ReactNode } from "react";
import { concat } from "@/library/utils";

interface IContainer extends ComponentProps<"div"> {
  children: ReactNode;
}

const Container = ({ className, children }: IContainer) => {
  return <div className={concat(className, "container")}>{children}</div>;
};

export default Container;
