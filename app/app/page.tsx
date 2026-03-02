import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>747 Garage</h1>
      <p>Home OK ✅</p>

      <Link href="/vehicles">Ir para veículos</Link>
    </main>
  );
}
