import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { CreditCard, Wallet, WalletCards } from "lucide-react";

export function PaymentContainer() {
  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader>
        <CardTitle>Оплата замовлення</CardTitle>
        <CardDescription>
          Оплатіть ваше замовлення наявними способами.
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4 flex-1">
        <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
          <div>
            <RadioGroupItem value="cash" id="cash" className="peer sr-only" />
            <Label
              htmlFor="cash"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Wallet />
              Готівка
            </Label>
          </div>

          <div>
            <RadioGroupItem
              value="paypal"
              id="paypal"
              className="peer sr-only"
            />
            <Label
              htmlFor="paypal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <WalletCards />
              PayPal
            </Label>
          </div>

          <div>
            <RadioGroupItem value="card" id="card" className="peer sr-only" />
            <Label
              htmlFor="card"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <CreditCard />
              Картка
            </Label>
          </div>
        </RadioGroup>

        <div className="grid gap-2">
          <Label htmlFor="name">Ім'я</Label>
          <Input id="name" placeholder="Іван Гуров" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="number">Номер картки</Label>
          <Input id="number" placeholder="1234 5678 9123 4567" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="month">Місяць</Label>
            <Select>
              <SelectTrigger id="month">
                <SelectValue placeholder="Лютий" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Січень</SelectItem>
                <SelectItem value="2">Лютий</SelectItem>
                <SelectItem value="3">Березень</SelectItem>
                <SelectItem value="4">Квітень</SelectItem>
                <SelectItem value="5">Травень</SelectItem>
                <SelectItem value="6">Червень</SelectItem>
                <SelectItem value="7">Липень</SelectItem>
                <SelectItem value="8">Серпень</SelectItem>
                <SelectItem value="9">Вересень</SelectItem>
                <SelectItem value="10">Жовтень</SelectItem>
                <SelectItem value="11">Листопад</SelectItem>
                <SelectItem value="12">Грудень</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="year">Рік</Label>
            <Select>
              <SelectTrigger id="year">
                <SelectValue placeholder="2023" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => (
                  <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                    {new Date().getFullYear() + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" placeholder="123" />
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full">Продовжити</Button>
      </CardFooter>
    </Card>
  );
}

export default PaymentContainer;
