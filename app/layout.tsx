import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

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
        <SiteHeader />

        {children}

        <footer className="border-t border-off/10 bg-black/35 backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-off/70 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="font-semibold tracking-[0.3em] text-off">747 Garage</div>
              <div className="mt-2">
                Rua Antonio Viana, 747 — Parque Paulistano, São Paulo
              </div>
              <div className="mt-1">Seg–Sex 08h–16h • WhatsApp +55 11 93010-8649</div>
              <div className="mt-1">
                Instagram{" "}
                <a
                  href="https://www.instagram.com/747_garage/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold transition hover:text-[#ffe5a3]"
                >
                  @747_garage
                </a>
              </div>
              <div className="mt-4 text-xs text-gold/80">
                Precisão alemã, curadoria brasileira.
              </div>
            </div>

            <div className="md:text-right">
              <div className="text-[0.65rem] uppercase tracking-[0.38em] text-off/35">
                Desenvolvido por
              </div>
              <div className="mt-3 inline-flex flex-col gap-2 rounded-[1.5rem] border border-off/10 bg-black/20 px-5 py-4 text-sm text-off/72 backdrop-blur-sm md:items-end md:px-6">
                <a
                  href="https://www.instagram.com/mansuor__1/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-gold"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/arthur-mansur-05a617305/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-gold"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
