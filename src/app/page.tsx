import Link from "next/link";
import Header from "@/components/page/Header";
import { buttonVariants } from "@/components/primitives/Button";
import Image from "next/image";
import Footer from "@/components/page/Footer";
import Container from "@/components/page/Container";

function BackgroundUpper() {
  return (
    <div
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
    </div>
  );
}

function BackgroundLower() {
  return (
    <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
    </div>
  );
}

function Announcement() {
  return (
    <Link
      href="#"
      className="rounded-full px-3 py-2 text-sm leading-6 text-secondary-foreground border"
    >
      Анонсуємо запуск сервісу у Харкові.{" "}
      <span className="font-medium text-indigo-600">Читати більше &rarr;</span>
    </Link>
  );
}

function Hero() {
  return (
    <div className="mx-auto text-center py-36">
      <Announcement />

      <div>
        <h1 className="text-4xl font-bold mt-8 tracking-tight sm:text-6xl">
          Найкращий сервіс таксі в{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-700 via-blue-500 to-yellow-500">
            Україні
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Швидко, безпечно та надійно. Зробіть ваші поїздки легкими та
          приємними!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/order" className={buttonVariants()}>
            Зробити замовлення
          </Link>
          <Link
            href="#"
            className="text-sm font-medium leading-6 text-muted-foreground"
          >
            Читати більше →
          </Link>
        </div>
      </div>
    </div>
  );
}

function BackgroundTestimonial() {
  return (
    <svg
      viewBox="0 0 2 2"
      width={3}
      height={3}
      aria-hidden="true"
      className="fill-gray-900"
    >
      <circle cx={1} cy={1} r={1} />
    </svg>
  );
}

export function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden mx-auto max-w-3xl py-24 sm:py-32">
      <div className="mx-auto">
        <Image
          className="mx-auto h-12"
          src="/workstation.svg"
          alt=""
          width={256}
          height={64}
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
            <p>
              “Цей сервіс таксі дозволяє нашим співробітникам швидко та
              ефективно пересуватися по місту, завжди дотримуючись високих
              стандартів комфорту та безпеки.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold">Наталія Бурейко</div>
              <BackgroundTestimonial />
              <div className="text-gray-600">Засновник Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <BackgroundUpper />
        <BackgroundLower />
        <Hero />
        <Testimonial />
      </Container>
      <Footer />
    </>
  );
}
