import { pageNavigation } from "@/library/navigation";
import { Mode } from "@/components/Mode";
import Link from "next/link";
import Company from "@/components/page/Company";
import { buttonVariants } from "@/components/primitives/Button";

const Header = () => {
  return (
    <header className="container text-gray-900 dark:text-gray-200 relative">
      <nav className="flex justify-between items-center p-8">
        <Company />
        <Navigation />
        <Identity />
      </nav>
    </header>
  );
};

const Navigation = () => {
  return (
    <div className="hidden lg:flex justify-center gap-12 translate-center">
      {pageNavigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm font-semibold leading-6"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

const Identity = () => {
  const linkStyle = buttonVariants({
    variant: "ghost",
    className: "text-sm font-semibold leading-6",
  });

  return (
    <div className="flex-1 justify-end flex items-center gap-2">
      <Mode />
      <Link href="#" className={linkStyle}>
        Увійти &rarr;
      </Link>
    </div>
  );
};

export default Header;
