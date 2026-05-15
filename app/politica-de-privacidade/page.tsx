import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politica de privacidade",
  description: "Como a 747 Garage trata dados e informacoes de contato.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-ink px-6 py-24 text-off">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md lg:p-10">
        <p className="text-xs uppercase tracking-[0.34em] text-gold/80">Legal</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-off sm:text-4xl">Política de Privacidade</h1>

        <div className="mt-8 space-y-5 text-sm leading-7 text-off/75">
          <p>
            Esta política descreve como dados enviados por formulários e interações do site podem ser utilizados para
            atendimento comercial, suporte e melhoria de experiência.
          </p>
          <p>
            Os dados coletados são tratados com confidencialidade e não são comercializados com terceiros. O
            compartilhamento pode ocorrer somente quando necessário para cumprimento legal ou operacional.
          </p>
          <p>
            Ao utilizar o site, você concorda com esta política. Para solicitações relacionadas a dados pessoais,
            entre em contato pelos canais oficiais da 747 Garage.
          </p>
        </div>

        <Link href="/" className="mt-10 inline-flex text-xs uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:text-[#ffe5a3]">
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}
