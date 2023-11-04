import { ComponentProps } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { concat } from "@/library/utils";

const skeletonVariants = cva(
  "flex flex-col items-center justify-center text-center rounded-md",
  {
    variants: {
      variant: {
        default: "animate-pulse bg-muted",
        placeholder: "border border-dashed",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ISkeleton
  extends ComponentProps<"div">,
    VariantProps<typeof skeletonVariants> {}

export const Skeleton = ({ className, variant, ...props }: ISkeleton) => {
  return (
    <div
      className={concat(skeletonVariants({ variant }), className)}
      {...props}
    />
  );
};
