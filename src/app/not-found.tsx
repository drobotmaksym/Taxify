import { buttonVariants } from "@/components/primitives/Button";
import Link from "next/link";
import Company from "@/components/page/Company";

const NotFound = () => {
  const linkStyles = buttonVariants();

  return (
    <main className="flex-1 flex flex-col justify-center items-center">
      <Company />
      <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-primary">
        Cторінка не знайдена
      </h1>
      <p className="mt-6 mb-8 text-base leading-7 text-gray-600 dark:text-zinc-500">
        Вибачте, ми не змогли знайти сторінку, яку ви шукаєте.
      </p>
      <Link href="/" className={linkStyles}>
        На головну
      </Link>
    </main>
  );
};

export default NotFound;
