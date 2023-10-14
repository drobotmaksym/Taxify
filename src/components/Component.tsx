import { ReactNode } from "react";

interface IComponent {
  children: ReactNode;
}

const Component = ({ children }: IComponent) => {
  return <div className="space-y-2">{children}</div>;
};

export default Component;
