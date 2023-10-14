import Header from "@/components/page/Header";
import Container from "@/components/page/Container";
import { Input } from "@/components/primitives/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/primitives/Select";
import { buttonVariants } from "@/components/primitives/Button";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardComponent,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/primitives/Card";
import { Label } from "@/components/primitives/Label";
import Footer from "@/components/page/Footer";

export default function Order() {
  return (
    <>
      <Header />
      <main>
        <Container className="grid grid-cols-12 gap-8 p-16">
          <div className="flex flex-col gap-6 col-start-2 col-end-8">
            <OrderCard />
          </div>
          <div className="col-start-8 col-end-12 relative">
            <Image
              src="/taxi/taxi-1.jpg"
              alt=""
              className="rounded-lg"
              layout="fill"
            />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

const OrderCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Створення замовлення</CardTitle>
        <CardDescription>Введіть дані замовлення.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <CardComponent>
          <Label>
            Замовник
            <Input placeholder="Іван Гуров" />
          </Label>
        </CardComponent>

        <CardComponent>
          <Label>
            Початкова адреса
            <Input placeholder="вул. Сумська, 10а" />
          </Label>
        </CardComponent>

        <CardComponent>
          <Label>
            Кінцева адреса
            <Input placeholder="вул. Героїв праці, 121б" />
          </Label>
        </CardComponent>

        <div className="grid grid-cols-2 gap-4">
          <CardComponent>
            <p>Місто</p>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Оберіть місто" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kharkiv">Харків</SelectItem>
                <SelectItem value="kiev">Київ</SelectItem>
                <SelectItem value="sumy">Суми</SelectItem>
              </SelectContent>
            </Select>
          </CardComponent>

          <CardComponent>
            <p>Час</p>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Оберіть час" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Якнайшвидше</SelectItem>
                <SelectItem value="5">Через 5 хвилин</SelectItem>
                <SelectItem value="10">Через 10 хвилин</SelectItem>
              </SelectContent>
            </Select>
          </CardComponent>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <CardComponent>
            <div className="space-x-2">
              <span>Кількість дітей</span>
              <span className="text-xs text-muted-foreground">
                (до 12 років)
              </span>
            </div>

            <Input type="number" defaultValue={0} />
          </CardComponent>

          <CardComponent>
            <p>Кількість дорослих</p>
            <Input type="number" defaultValue={0} />
          </CardComponent>
        </div>
      </CardContent>

      <CardFooter>
        <Link href="/payment" className={buttonVariants()}>
          Відправити замовлення
        </Link>
      </CardFooter>
    </Card>
  );
};
