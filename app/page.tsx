import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="flex justify-center w-screen h-screen relative">
        <Image priority src="/bg-hero.jpg" fill alt="hero" className="" quality={100}/>
        <div className="min-h-96 flex flex-col items-end justify-center h-full z-10">
          <h1 className="text-9xl uppercase">Verônica Ritton</h1>
          <strong className="text-3xl">ART PRODUCER</strong>
        </div>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
    </div>
  );
}
