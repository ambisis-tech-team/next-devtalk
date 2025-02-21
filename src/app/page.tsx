import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center text-5xl font-semibold">
      <h1>Hello world</h1>
      <Link href="/licenca">Licença</Link>
    </div>
  );
}
