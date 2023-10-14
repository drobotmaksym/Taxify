import Header from "@/components/Header";
import Container from "@/components/Container";
import { Input } from "@/components/ui/Input";
import Component from "@/components/Component";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { buttonVariants } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function Order() {
  return (
    <>
      <Header />
      <main>
        <Container className="grid grid-cols-12 gap-8 p-16">
          <div className="flex flex-col gap-6 col-start-2 col-end-8">
            <Component>
              <p>Ім&apos;я замовника</p>
              <Input placeholder="Іван Гуров" />
            </Component>

            <Component>
              <p>Початкова адреса</p>
              <Input placeholder="вул. Сумська, 10а" />
            </Component>

            <Component>
              <p>Кінцева адреса</p>
              <Input placeholder="вул. Героїв праці, 121б" />
            </Component>

            <div className="grid grid-cols-2 gap-4">
              <Component>
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
              </Component>

              <Component>
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
              </Component>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Component>
                <div className="space-x-2">
                  <span>Кількість дітей</span>
                  <span className="text-xs text-muted-foreground">
                    (до 12 років)
                  </span>
                </div>

                <Input type="number" defaultValue={0} />
              </Component>

              <Component>
                <p>Кількість дорослих</p>
                <Input type="number" defaultValue={0} />
              </Component>
            </div>

            <Link href="/payment" className={buttonVariants()}>
              Відправити замовлення
            </Link>
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
    </>
  );
}
