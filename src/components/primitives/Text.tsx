import { cva } from "class-variance-authority";

const textStyle = cva("", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    weight: {
      light: "font-light",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
});

const Text = () => {
  return null;
};

export default Text;
