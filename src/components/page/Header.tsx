import Container from "@/components/page/Container";
import { pageNavigation } from "@/library/navigation";
import { Mode } from "@/components/Mode";
import Link from "next/link";
import Company from "@/components/page/Company";

const Header = () => {
  return (
    <header className="text-gray-900 dark:text-gray-200">
      <Container>
        <nav className="grid grid-cols-3 items-center p-8">
          <Company />
          <Navigation />
          <Identity />
        </nav>
      </Container>
    </header>
  );
};

const Navigation = () => {
  return (
    <div className="flex justify-center  gap-12">
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
  return (
    <div className="flex-1 justify-end flex items-center gap-4">
      <Mode />
      <Link href="#" className="text-sm font-semibold leading-6">
        Увійти &rarr;
      </Link>
    </div>
  );
};

export default Header;
