
import Link from "next/link";

export default function Home() {
  const heroHighlights = [
    { label: "Foco", value: "Mercedes classicas" },
    { label: "Assinatura", value: "Curadoria premium" },
    { label: "Contato", value: "Resposta direta no WhatsApp" },
    { label: "Metodo", value: "Selecao tecnica e transparente" },
    { label: "Presenca", value: "Atendimento humano e direto" },
  ];

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-ink text-off">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:96px_96px] opacity-10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,rgba(198,167,94,0.16),transparent_38%)]" />

      <section id="topo" className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center sm:py-20 lg:py-24">
        <div className="inline-flex items-center rounded-full border border-gold/20 bg-gold/10 px-3 py-2 text-[0.6rem] uppercase tracking-[0.26em] text-gold/90 sm:px-4 sm:text-[0.7rem] sm:tracking-[0.42em]">
          747 Garage • precisão em primeiro lugar
        </div>

        <div className="mt-10 flex flex-col items-center">
          <h1 className="gold-shimmer-title text-5xl font-black uppercase tracking-[-0.08em] text-off sm:text-7xl lg:text-8xl">
            747 Garage
          </h1>
          <span
            aria-hidden="true"
            className="-mt-2 select-none text-5xl font-black uppercase tracking-[-0.08em] text-off/15 blur-[1px] sm:-mt-3 sm:text-7xl lg:text-8xl"
            style={{ transform: "scaleY(-1)", opacity: 0.18, maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.75), transparent)" }}
          >
            747 Garage
          </span>
        </div>

        <p className="mt-7 max-w-3xl text-sm leading-7 text-off/72 sm:mt-8 sm:text-lg sm:leading-8">
          Precisão alemã, curadoria brasileira. Um espaço dedicado a Mercedes clássicas dos anos 80 e 90,
          apresentado com uma estética limpa, simétrica e mais exclusiva para a marca.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/vehicles"
            className="inline-flex items-center justify-center rounded-full bg-off px-6 py-3.5 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff6db] hover:shadow-[0_18px_50px_rgba(198,167,94,0.22)]"
          >
            Ver veículos disponíveis
          </Link>

          <Link
            href="#orcamento"
            className="inline-flex items-center justify-center rounded-full border border-off/20 bg-off/5 px-6 py-3.5 text-sm font-semibold text-off transition duration-300 hover:-translate-y-0.5 hover:bg-off/10 hover:border-off/35"
          >
            Fazer orçamento
          </Link>
        </div>

        <div className="hero-marquee mt-14 w-full" aria-label="Diferenciais da 747 Garage">
          <div className="hero-marquee-track">
            {heroHighlights.map((item) => (
              <article
                key={item.label}
                className="hero-marquee-item group min-w-[17rem] rounded-[1.7rem] border border-off/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] px-5 py-4 text-left backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-[0_18px_40px_rgba(0,0,0,0.32)] sm:min-w-[19rem]"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.35em] text-off/50 transition group-hover:text-gold/85">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-off/88 sm:text-[0.95rem]">{item.value}</p>
              </article>
            ))}

            {heroHighlights.map((item) => (
              <article
                key={`${item.label}-clone`}
                aria-hidden="true"
                className="hero-marquee-item hero-marquee-clone group min-w-[17rem] rounded-[1.7rem] border border-off/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] px-5 py-4 text-left backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-[0_18px_40px_rgba(0,0,0,0.32)] sm:min-w-[19rem]"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.35em] text-off/50 transition group-hover:text-gold/85">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-off/88 sm:text-[0.95rem]">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="relative scroll-mt-36 border-t border-off/10 bg-black/10 py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <figure className="overflow-hidden rounded-[2.25rem] border border-off/10 bg-[#111111]/90 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="relative aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[3/4]">
              <img
                src="/sobre/2.jpeg"
                alt="Edmilson e Eliton, irmaos e socios da 747 Garage"
                className="h-full w-full bg-black object-contain object-center"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.18)_100%)]" />

              <div className="absolute inset-x-5 bottom-5 rounded-[1.4rem] border border-off/12 bg-black/55 px-4 py-3 backdrop-blur-md">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/80">747 Garage</p>
                <p className="mt-2 text-sm font-medium text-off/90">
                  Edmilson e Eliton lideram a garagem com curadoria e presenca.
                </p>
              </div>
            </div>

            <figcaption className="border-t border-off/10 bg-black/35 px-5 py-4 text-xs uppercase tracking-[0.28em] text-off/55">
              Excelência alemã com identidade própria
            </figcaption>
          </figure>

          <div className="rounded-[2rem] border border-off/10 bg-white/5 p-8 backdrop-blur-md lg:p-10">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Sobre nós</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-off sm:text-4xl">
              Na 747 Garage, excelência não é promessa — é padrão.
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-off/78 sm:text-base">
              <p>
                A 747 Garage foi construida pelos irmaos e socios Edmilson e Eliton, dois apaixonados por
                automoveis com identidade. O projeto comecou de forma simples, com poucos carros e um olhar
                criterioso para selecionar apenas o que realmente vale estar na garagem.
              </p>
              <p>
                Com o tempo, essa visao virou metodo: curadoria tecnica, apresentacao precisa e cuidado real
                em cada detalhe. Inspirados pela estetica alema, eles seguem uma linha clara e intencional,
                sem excesso e com foco total na qualidade.
              </p>
              <p>
                Mais do que vender carros, Edmilson e Eliton entregam confianca, experiencia e relacionamento
                direto com cada cliente.
              </p>
              <p className="text-base font-medium text-off/92">
                A 747 Garage é para quem entende que qualidade não se negocia.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-off/10 bg-[#111111]/90 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-off/50">Curadoria</p>
                <p className="mt-4 text-base font-medium text-off/90">Seleção rigorosa de clássicos com identidade.</p>
              </div>
              <div className="rounded-[1.5rem] border border-off/10 bg-[#111111]/90 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-off/50">Estilo</p>
                <p className="mt-4 text-base font-medium text-off/90">Visual limpo, intencional e com presença alemã.</p>
              </div>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-off/10 bg-black/35 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-off/50">Identidade visual</p>
              <p className="mt-4 text-sm leading-7 text-off/76 sm:text-base">
                Uma composição pensada para equilibrar a história da garagem com um visual mais editorial,
                limpo e memorável, sem excesso de elementos.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="rounded-[2rem] border border-off/10 bg-white/5 p-8 backdrop-blur-md lg:p-10">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Conheca o Edmilson</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-off sm:text-4xl">
              Especialista Mercedes e contato direto da garagem.
            </h3>

            <div className="mt-6 space-y-5 text-sm leading-7 text-off/78 sm:text-base">
              <p>
                Edmilson e o mecanico especialista em Mercedes da 747 Garage. Ele atua no dia a dia da
                oficina, acompanhando diagnostico, restauracao, revisao e preparacao tecnica dos carros.
              </p>
              <p>
                E com ele que o cliente vai tratar diretamente sobre qualquer assunto da garagem: avaliacao,
                duvidas tecnicas, orientacao de compra e planejamento de servicos.
              </p>
              <p className="text-base font-medium text-off/92">
                Atendimento direto, tecnico e transparente para quem quer resolver com seguranca.
              </p>
            </div>
          </div>

          <figure className="overflow-hidden rounded-[2.25rem] border border-off/10 bg-[#111111]/90 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="relative aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[3/4]">
              <img
                src="/sobre/1.jpeg"
                alt="Edmilson, mecanico especialista da 747 Garage"
                className="h-full w-full object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.18)_100%)]" />

              <div className="absolute inset-x-5 bottom-5 rounded-[1.4rem] border border-off/12 bg-black/55 px-4 py-3 backdrop-blur-md">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/80">Mecanica Mercedes</p>
                <p className="mt-2 text-sm font-medium text-off/90">
                  Fale com Edmilson para qualquer tema da garagem.
                </p>
              </div>
            </div>

            <figcaption className="border-t border-off/10 bg-black/35 px-5 py-4 text-xs uppercase tracking-[0.28em] text-off/55">
              Atendimento direto com o especialista
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="contato" className="relative scroll-mt-36 border-t border-off/10 py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Contato</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-off sm:text-4xl">
              Fale direto com a garagem.
            </h2>
            <p className="mt-5 text-sm leading-7 text-off/72 sm:text-base">
              Se você quer vender, comprar ou entender melhor um carro específico, a conversa começa aqui.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-off/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-off/45">WhatsApp</p>
              <p className="mt-4 text-lg font-medium text-off/90">+55 11 93010-8649</p>
            </div>
            <div className="rounded-[2rem] border border-off/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-off/45">Endereço</p>
              <p className="mt-4 text-lg font-medium text-off/90">Rua Antonio Viana, 747</p>
            </div>
            <div className="rounded-[2rem] border border-off/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-off/45">Horário</p>
              <p className="mt-4 text-lg font-medium text-off/90">Seg–Sex 08h às 16h</p>
            </div>
          </div>
        </div>
      </section>

      <section id="orcamento" className="relative scroll-mt-36 border-t border-off/10 py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="rounded-[2rem] border border-off/10 bg-white/5 p-8 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Faça seu orçamento</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-off sm:text-4xl">
              Envie os detalhes e receba uma resposta objetiva.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-off/72 sm:text-base">
              Para orçamento, informe modelo, ano, estado geral e o que você quer fazer com o carro. Assim a resposta já vem mais precisa.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5511930108649"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-off px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-[#fff6db]"
              >
                Pedir orçamento no WhatsApp
              </a>
              <Link
                href="/vehicles"
                className="inline-flex items-center justify-center rounded-full border border-off/20 bg-off/5 px-6 py-3.5 text-sm font-semibold text-off transition hover:-translate-y-0.5 hover:bg-off/10"
              >
                Ver estoque
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-off/10 bg-[#111111]/90 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-off/50">1. Envie o carro</p>
              <p className="mt-4 text-sm leading-7 text-off/78">Modelo, ano e condição geral já ajudam a direcionar a conversa.</p>
            </div>
            <div className="rounded-[2rem] border border-off/10 bg-[#111111]/90 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-off/50">2. Ajuste a proposta</p>
              <p className="mt-4 text-sm leading-7 text-off/78">Você recebe uma orientação mais precisa sobre compra, venda ou curadoria.</p>
            </div>
            <div className="rounded-[2rem] border border-off/10 bg-[#111111]/90 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-off/50">3. Siga o próximo passo</p>
              <p className="mt-4 text-sm leading-7 text-off/78">Tudo sem poluição visual e com foco no que importa: o carro e a conversa certa.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}