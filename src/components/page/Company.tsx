import Link from "next/link";
import Image from "next/image";

const Company = () => {
  return (
    <Link href="/">
      <Image
        className="h-8 w-auto"
        src="/tailwind.svg"
        alt="Taxify"
        width={32}
        height={32}
      />
    </Link>
  );
};

export default Company;
