import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "747 Garage",
  description: "Mercedes clássicas dos anos 80 e 90, reserva online e curadoria premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <header className="border-b border-black/10 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <Link href="/" className="text-sm font-semibold tracking-wide">
              747 GARAGE
            </Link>

            <nav className="hidden gap-6 text-sm text-black/70 md:flex">
              <Link className="hover:text-black" href="/vehicles">
                Veículos
              </Link>
              <a
                className="hover:text-black"
                href="https://wa.me/5511930108649"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </nav>

            <div className="text-xs text-black/50">PT | EN</div>
          </div>
        </header>

        {children}

        <footer className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-black/70">
            <div className="font-semibold text-black">747 Garage</div>
            <div className="mt-2">
              Rua Antonio Viana, 747 — Parque Paulistano, São Paulo
            </div>
            <div className="mt-1">Seg–Sex 08h–16h • WhatsApp +55 11 93010-8649</div>
            <div className="mt-4 text-xs text-black/50">
              Precisão alemã, curadoria brasileira.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
