import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/primitives/Card";
import { Label } from "@/components/primitives/Label";
import { Input } from "@/components/primitives/Input";
import { Button } from "@/components/primitives/Button";

const OrderConfirmation = () => {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Перевірка замовлення</CardTitle>
        <CardDescription>
          Переверте правильність введених даних.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Замовник</Label>
          <Input id="name" defaultValue="Іван Гуров" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="number">Початкова адреса</Label>
          <Input id="number" defaultValue="вул. Сумська, 10а" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="number">Кінцева адреса</Label>
          <Input id="number" defaultValue="вул. Героїв праці, 121б" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="number">Кількість дітей</Label>
            <Input id="number" defaultValue={0} />
          </div>

          <div>
            <Label htmlFor="number">Кількість дорослих</Label>
            <Input id="number" defaultValue={0} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="number">Місто</Label>
            <Input id="number" defaultValue="Харків" />
          </div>

          <div>
            <Label htmlFor="number">Час</Label>
            <Input id="number" defaultValue="Якнайшвидше" />
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full">Редагувати</Button>
      </CardFooter>
    </Card>
  );
};

export default OrderConfirmation;
