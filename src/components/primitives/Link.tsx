import { default as NextLink, LinkProps as NextLinkProps } from "next/link";
import { HTMLAttributes } from "react";
import { concat } from "@/library/utils";

export interface LinkProps
  extends NextLinkProps,
    HTMLAttributes<HTMLAnchorElement> {}

const Link = ({ href, className = "", ...props }: LinkProps) => {
  const mergedClassName = concat(
    "transition-colors hover:text-foreground/80 text-foreground/60",
    className,
  );

  return <NextLink href={href} className={mergedClassName} {...props} />;
};

export default Link;
