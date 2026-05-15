import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Informacoes legais e uso de marcas no site da 747 Garage.",
};

export default function LegalNoticePage() {
  return (
    <main id="main-content" className="min-h-screen bg-ink px-6 py-24 text-off">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md lg:p-10">
        <p className="text-xs uppercase tracking-[0.34em] text-gold/80">Legal</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-off sm:text-4xl">Aviso Legal</h1>

        <div className="mt-8 space-y-5 text-sm leading-7 text-off/75">
          <p>
            Todas as marcas, logotipos e denominações citadas pertencem aos seus respectivos titulares. O uso neste
            site tem caráter informativo e de referência no contexto dos serviços prestados.
          </p>
          <p>
            A 747 Garage atua de forma independente na curadoria, consultoria e serviços especializados. Não há
            representação oficial de fabricantes, salvo quando expressamente indicado.
          </p>
          <p>
            Imagens e descrições podem sofrer variações conforme disponibilidade e atualização de catálogo.
          </p>
        </div>

        <Link href="/" className="mt-10 inline-flex text-xs uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:text-[#ffe5a3]">
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}
