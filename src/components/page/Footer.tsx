import Link, { LinkProps } from "@/components/primitives/Link";

const Footer = () => {
  return (
    <footer className="container border-t p-8 font-light text-sm text-center text-muted-foreground">
      Built by{" "}
      <PrimaryFooterLink href="https://github.com/drobotmaksym">
        sunmade
      </PrimaryFooterLink>
      . Hosted on{" "}
      <PrimaryFooterLink href="https://www.netlify.com/">
        Netlify
      </PrimaryFooterLink>
      . Illustrations by{" "}
      <PrimaryFooterLink href="https://popsy.co/">Popsy</PrimaryFooterLink>.
    </footer>
  );
};

const PrimaryFooterLink = ({ href, ...props }: LinkProps) => {
  return <Link href={href} prefetch={false} className="underline" {...props} />;
};

export default Footer;
