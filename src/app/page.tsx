import { Mode } from "@/components/Mode";
import Container from "@/components/Container";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      <Container>
        <h1 className="grid place-content-center text-7xl font-bold">
          Hi, Mom!
        </h1>
        <Mode />
      </Container>
    </main>
  );
}
