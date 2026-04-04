
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-off">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-5xl font-semibold tracking-tight">747 Garage</h1>

        <p className="mt-6 text-gold text-lg font-medium">
          Precisão alemã, curadoria brasileira.
        </p>

        <p className="mt-4 max-w-2xl text-off/80 leading-relaxed">
          Operação independente especializada em Mercedes clássicas dos anos 80 e
          90, com foco na icônica 190E.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/vehicles"
           className="inline-flex items-center 
           justify-center rounded-md bg-off px-5 py-3 text-ink font-medium hover:opacity-90" > 
           Ver veículos disponíveis
          </Link>

          <a
            href="https://wa.me/5511930108649"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-off/25 px-5 py-3 text-off font-medium hover:bg-off/10"
          >
            Falar no WhatsApp
          </a>
        </div>

        <p className="mt-10 text-xs text-off/60">
          Parque Paulistano — São Paulo • Seg–Sex 08h–16h
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold text-off">Destaques</h2>
        <p className="mt-2 text-sm text-off/70">
          Em breve: veículos disponíveis, projetos e peças selecionadas.
        </p>
      </section>

      <footer className="border-t border-off/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-off/70">
          <p className="font-medium text-off">747 Garage</p>
          <p>Rua Antonio Viana, 747 — Parque Paulistano, São Paulo</p>
          <p>Seg–Sex 08h–16h • WhatsApp +55 11 93010-8649</p>
          <p className="mt-2 text-gold">Precisão alemã, curadoria brasileira.</p>
        </div>
      </footer>
    </main>
  );
}