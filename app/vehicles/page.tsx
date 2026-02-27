export default function Home() {
  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0B0B0B]">
      {/* HERO */}
      <section className="bg-[#0B0B0B] text-[#F2F2F2]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            747 Garage
          </h1>

          <p className="mt-6 text-xl text-[#C6A75E]">
            Precisão alemã, curadoria brasileira.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#F2F2F2]/80">
            Operação independente especializada em Mercedes clássicas dos anos 80 e 90,
            com foco na icônica 190E.
          </p>

          <div className="mt-10 flex gap-3">
            <a
              href="/vehicles"
              className="inline-flex items-center justify-center rounded-md bg-[#F2F2F2] px-5 py-3 text-sm font-medium text-[#0B0B0B] hover:opacity-90"
            >
              Ver veículos disponíveis
            </a>

            <a
              href="https://wa.me/5511930108649"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-[#F2F2F2]/25 px-5 py-3 text-sm font-medium text-[#F2F2F2] hover:border-[#C6A75E] hover:text-[#C6A75E]"
            >
              Falar no WhatsApp
            </a>
          </div>

          <p className="mt-10 text-xs text-[#F2F2F2]/55">
            Parque Paulistano — São Paulo • Seg–Sex 08h–16h
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Destaques</h2>
        <p className="mt-2 text-sm text-black/60">
          Em breve: veículos disponíveis, projetos e peças selecionadas.
        </p>
      </section>
    </main>
  );
}