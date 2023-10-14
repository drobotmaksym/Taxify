import Container from "@/components/Container";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Mode } from "@/components/Mode";
import { Button } from "@/components/ui/Button";
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="px-8 py-3 border-b">
      <Container className="flex justify-between items-center">
        <div className="flex gap-8">
          <h1 className="font-medium">Taxify</h1>
          <nav className="flex gap-4 text-muted-foreground">
            <Link href="/">Замовлення</Link>
            <Link href="/">Контакти</Link>
            <Link href="/">Про нас</Link>
          </nav>
        </div>

        <div className="flex gap-2">
          <Input className="w-[250px]" placeholder="Пошук..." />
          <Mode />
          <Button variant="outline" size="icon">
            <User className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
