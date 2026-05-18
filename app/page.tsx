
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AdaptiveImage from "../components/AdaptiveImage";


export default function Home() {
  const heroHighlights = [
    { label: "Foco", value: "Foco em Mercedes clássicas" },
    { label: "Assinatura", value: "Escolho a dedo" },
    { label: "Contato", value: "Respondo no WhatsApp, sem enrolação" },
    { label: "Método", value: "Sigo um critério claro" },
    { label: "Presença", value: "Acompanho de perto" },
  ];

  const historyTimeline = [
    {
      year: "2019",
      title: "Terreno inicial",
      description: "O espaço ainda estava vazio. Medi, ajustei e marquei tudo com calma, respeitando os limites do terreno e pensando no uso real do dia a dia. Mesmo simples, já dava para ver a ideia ganhando forma.\n\nFoi ali que a 747 Garage começou a nascer. Cada marca no solo e cada escolha foi minha, sempre com um objetivo claro do que eu queria construir.\n\nEsse começo, ainda bruto, foi o que sustentou todo o resto. O cuidado e a atenção aos detalhes já estavam ali desde o primeiro dia.",
      note: "Primeiras marcações do terreno e acesso.",
      people: "",
      image: "/historia/2019-terreno-inicial.jpeg",
      alt: "Terreno inicial da garagem com marcações de base",
    },

    {
      year: "2020",
      title: "Planta da garagem",
      description: "A primeira organização do espaço começou no papel. Defini vagas, circulação e áreas de apoio para transformar a ideia em algo prático e possível no dia a dia.",
      note: "Desenho das vagas, circulação e apoio.",
      people: "",
      image: "/historia/2020-planta-projeto.jpeg",
      alt: "Planta desenhada com divisão de vagas e apoio",
    },

    {
      year: "2020",
      title: "Esboço de implantação",
      description: "O esboço final serviu para ajustar medidas e posição dos carros antes de executar. Ali confirmei proporções, circulação e a leitura do espaço.",
      note: "Ajuste final de medidas e posição dos carros.",
      people: "",
      image: "/historia/2020-projeto-esboco.jpeg",
      alt: "Esboço de implantação da garagem com vagas e circulação",
    },
    {
      year: "2021",
      title: "Evolução da estrutura",
      description: "A cobertura e a organização interna começaram a dar forma ao ambiente. A partir daí, o espaço deixou de ser só plano e virou uma garagem de verdade, com rotina e uso real.",
      note: "Cobertura pronta e rotina começando.",
      people: "",
      image: "/historia/2021-evolucao-garagem.jpeg",
      alt: "Estrutura da garagem em evolução com cobertura e carros",
    },
    {
      year: "2024",
      title: "Resultado atual - frente",
      description: "Hoje a garagem está em uso, com os carros organizados sob a estrutura principal. Essa imagem mostra o resultado de um trabalho feito com cuidado e atenção ao jeito certo de receber cada carro.",
      note: "Garagem funcionando e tudo em ordem.",
      people: "",
      image: "/historia/2024-garagem-atual-frente.jpeg",
      alt: "Garagem atual vista de frente com vários carros sob a cobertura",
    },
    {
      year: "2024",
      title: "Resultado atual - lateral",
      description: "Esse ângulo mostra a evolução real do espaço, agora ocupado e funcional. A estrutura que era só base hoje sustenta o dia a dia, com carros organizados e fluxo pensado para facilitar acesso e manuseio.\n\nA cobertura, os pilares e o alinhamento mostram um ambiente feito para durar. As Mercedes clássicas dão vida ao lugar e deixam claro por que escolhi esse caminho.\n\nO que era terreno virou uma garagem ativa, organizada e fiel ao jeito que queria trabalhar desde o começo.",
      note: "Visão lateral com escala, fluxo e ocupação real.",
      people: "",
      image: "/historia/2024-garagem-atual-lateral.jpeg",
      alt: "Garagem atual vista pela lateral com carros sob a cobertura",
    },
  ];

  const contactInfo = [
    {
      label: "WHATSAPP",
      title: "+55 11 93010-8649",
      icon: "📱",
    },
    {
      label: "ENDEREÇO",
      title: "Rua Antonio Viana, 747",
      icon: "📍",
    },
    {
      label: "HORÁRIO",
      title: "Seg–Sex 08h às 16h",
      icon: "🕐",
    },
  ];

  const [currentContactIndex, setCurrentContactIndex] = useState(0);
  const [orientations, setOrientations] = useState<Record<number, 'portrait' | 'landscape' | 'square'>>({});
  const [whatsLoading, setWhatsLoading] = useState(false);

  const setOrientationAt = (idx: number, orientation: 'portrait' | 'landscape' | 'square') => {
    setOrientations((prev) => (prev[idx] === orientation ? prev : { ...prev, [idx]: orientation }));
  };

  const nextContact = () => {
    setCurrentContactIndex((prev) => (prev + 1) % contactInfo.length);
  };

  const prevContact = () => {
    setCurrentContactIndex((prev) => (prev - 1 + contactInfo.length) % contactInfo.length);
  };

  const handleWhatsAppClick = () => {
    setWhatsLoading(true);
    window.setTimeout(() => setWhatsLoading(false), 2000);
  };

  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxContainer = parallaxRef.current;
    if (!parallaxContainer) return;

    let animationFrameId: number;

    const updateParallax = () => {
      const elements = parallaxContainer.querySelectorAll("[data-parallax]");
      
      elements.forEach((el: Element) => {
        const element = el as HTMLElement;
        const parallaxValue = element.getAttribute("data-parallax");
        
        if (!parallaxValue) return;

        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distanceFromCenter = elementCenter - viewportCenter;
        
        // Parallax calcs baseado em velocidade
        const speed = parseFloat(parallaxValue);
        const offset = (distanceFromCenter * speed) * 0.5;

        // Aplicar transform
        element.style.transform = `translateY(${offset}px) translateZ(0)`;
        element.style.willChange = "transform";
      });
    };

    // Parallax nas imagens com escala suave
    const updateImageParallax = () => {
      const images = parallaxContainer.querySelectorAll("[data-parallax-image]");
      
      images.forEach((img: Element) => {
        const imgEl = img as HTMLElement;
        const parallaxImageValue = imgEl.getAttribute("data-parallax-image");
        
        if (!parallaxImageValue) return;

        const rect = imgEl.getBoundingClientRect();
        const top = rect.top;
        const height = rect.height;
        const speed = parseFloat(parallaxImageValue);
        
        // Escala e movimento só quando visível
        if (top < window.innerHeight && top + height > 0) {
          const progress = (window.innerHeight - top) / (window.innerHeight + height);
          const scale = 1 + (progress * 0.08);
          const offsetY = progress * 40;
          
          imgEl.style.transform = `scale(${scale}) translateY(${offsetY}px) translateZ(0)`;
          imgEl.style.willChange = "transform";
        }
      });
    };

    const animate = () => {
      updateParallax();
      updateImageParallax();
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main id="main-content" className="relative isolate min-h-screen overflow-hidden bg-ink text-off" ref={parallaxRef}>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:96px_96px] opacity-10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,rgba(198,167,94,0.16),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[620px] bg-[radial-gradient(circle_at_50%_90%,rgba(212,175,55,0.12),transparent_45%)]" />

      <style>{`
        @keyframes fadeInUpReveal {
          from {
            opacity: 0;
            transform: translateY(48px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeftReveal {
          from {
            opacity: 0;
            transform: translateX(-48px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRightReveal {
          from {
            opacity: 0;
            transform: translateX(48px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes carouselSlide {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .reveal-up {
          animation: fadeInUpReveal 0.8s ease-out forwards;
          opacity: 0;
        }

        .reveal-left {
          animation: fadeInLeftReveal 0.8s ease-out forwards;
          opacity: 0;
        }

        .reveal-right {
          animation: fadeInRightReveal 0.8s ease-out forwards;
          opacity: 0;
        }

        .reveal-scale {
          animation: slideInScale 0.8s ease-out forwards;
          opacity: 0;
        }

        .carousel-item {
          animation: carouselSlide 0.5s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(198, 167, 94, 0.4);
          background: linear-gradient(135deg, rgba(198,167,94,0.12) 0%, rgba(198,167,94,0.04) 100%);
        }

        .history-card {
          transition: all 0.5s ease;
          opacity: 0;
          animation: fadeInUpReveal 0.8s ease-out forwards;
        }

        .history-card:nth-child(1) { animation-delay: 0s; }
        .history-card:nth-child(2) { animation-delay: 0.15s; }
        .history-card:nth-child(3) { animation-delay: 0.3s; }
        .history-card:nth-child(4) { animation-delay: 0.45s; }
        .history-card:nth-child(5) { animation-delay: 0.6s; }
        .history-card:nth-child(6) { animation-delay: 0.75s; }
        .history-card:nth-child(7) { animation-delay: 0.9s; }
      `}</style>

      <section id="topo" className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center sm:py-20 lg:py-24">
        <div className="hero-pill reveal-up inline-flex items-center rounded-full border border-gold/20 px-3 py-2 text-[0.6rem] uppercase tracking-[0.26em] text-gold/90 sm:px-4 sm:text-[0.7rem] sm:tracking-[0.42em]">
          747 Garage • feito por mim, sem enrolação
        </div>

        <div className="reveal-up stagger-1 mt-10 flex flex-col items-center">
          <h1 className="gold-shimmer-title bg-[linear-gradient(180deg,#fffbe9_0%,#e5c875_45%,#c89f31_100%)] bg-clip-text text-5xl font-black uppercase tracking-[-0.08em] text-transparent drop-shadow-[0_0_18px_rgba(212,175,55,0.26)] sm:text-7xl lg:text-8xl">
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

        <p className="reveal-up stagger-2 mt-7 max-w-2xl text-sm leading-8 text-off/72 sm:mt-8 sm:text-lg sm:leading-9">
          Cuido pessoalmente de Mercedes clássicas dos anos 80 e 90. Seleciono com critério, encontro peças
          certas e faço o serviço do jeito que gostaria que fizessem no meu carro.
        </p>

        <div className="reveal-up stagger-3 mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/vehicles"
            className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-[#d4af37]/35 bg-[linear-gradient(135deg,rgba(212,175,55,0.34)_0%,rgba(255,238,186,0.2)_40%,rgba(255,255,255,0.12)_100%)] px-7 py-3.5 text-sm font-semibold tracking-[0.02em] text-[#fff8de] shadow-[0_14px_38px_rgba(0,0,0,0.35),0_0_24px_rgba(212,175,55,0.2)] backdrop-blur-lg before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(120deg,rgba(255,255,255,0.45)_-10%,rgba(255,255,255,0.12)_28%,rgba(255,255,255,0)_48%)] before:opacity-75 transition-all duration-300 ease-out hover:scale-105 hover:border-[#f2d37a]/60 hover:brightness-110 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_32px_rgba(212,175,55,0.38)] active:scale-95"
          >
            Ver catálogo de veículos
          </Link>

          <Link
            href="/servicos"
            className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-[#d4af37]/30 bg-[linear-gradient(135deg,rgba(23,20,14,0.66)_0%,rgba(44,35,18,0.5)_55%,rgba(212,175,55,0.16)_100%)] px-7 py-3.5 text-sm font-semibold tracking-[0.02em] text-[#e9cc7c] shadow-[0_12px_30px_rgba(0,0,0,0.32)] backdrop-blur-lg before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(120deg,rgba(255,255,255,0.2)_-10%,rgba(255,255,255,0.08)_28%,rgba(255,255,255,0)_50%)] before:opacity-70 transition-all duration-300 ease-out hover:scale-105 hover:border-[#e0bf64]/55 hover:brightness-110 hover:shadow-[0_18px_42px_rgba(0,0,0,0.4),0_0_24px_rgba(212,175,55,0.26)] active:scale-95"
          >
            Ver serviços
          </Link>

          <Link
            href="#orcamento"
            className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-white/25 bg-[linear-gradient(135deg,rgba(255,255,255,0.11)_0%,rgba(255,255,255,0.06)_48%,rgba(255,255,255,0.03)_100%)] px-7 py-3.5 text-sm font-semibold tracking-[0.02em] text-off shadow-[0_12px_30px_rgba(0,0,0,0.3)] backdrop-blur-lg before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(120deg,rgba(255,255,255,0.2)_-10%,rgba(255,255,255,0.08)_30%,rgba(255,255,255,0)_50%)] before:opacity-70 transition-all duration-300 ease-out hover:scale-105 hover:border-white/40 hover:brightness-110 hover:shadow-[0_18px_42px_rgba(0,0,0,0.38),0_0_20px_rgba(212,175,55,0.2)] active:scale-95"
          >
            Pedir orçamento direto
          </Link>
        </div>

        <div className="hero-marquee reveal-up stagger-4 mt-14 w-full" aria-label="Diferenciais da 747 Garage">
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

      <section id="prova" className="relative border-t border-off/10 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Confiança</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-off sm:text-4xl">
                Confiança construída no dia a dia.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-off/72 sm:text-base">
              Sigo um critério técnico claro, apresento tudo como é e converso direto, sem ruído.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Curadoria", value: "Foco em Mercedes clássicas" },
                { label: "Resposta", value: "Falo direto e objetivo" },
                { label: "Método", value: "Sigo um processo técnico, sem improviso" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="surface-card premium-lift p-5 text-sm"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/80">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm text-off/88">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="surface-card premium-lift flex flex-col justify-between gap-6 p-6">
              <p className="text-sm leading-7 text-off/82">
                “Conversa clara, avaliação técnica e entrega bem feita. Do início ao fim, acompanho.”
              </p>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-off/50">Cliente 747</p>
                <p className="mt-2 text-sm font-semibold text-off">Compra assistida e escolha guiada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="conceito" className="relative scroll-mt-36 border-t border-off/10 py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="reveal-left rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-gold/35 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35),0_0_26px_rgba(212,175,55,0.14)] lg:p-10">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Sobre mim</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-off sm:text-4xl">
              Cuido de cada Mercedes como se fosse minha.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-off/78 sm:text-base">
              A 747 Garage nasceu para preservar, ser honesta e ter um jeito claro de trabalhar. Cada carro, peça e serviço
              passa por avaliação técnica, orientação objetiva e execução cuidadosa. O resultado é um atendimento direto,
              com o cuidado que espero de um lugar sério.
            </p>
          </div>

          <div className="reveal-right rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.04)_45%,rgba(212,175,55,0.14)_100%)] p-6 backdrop-blur-md transition-all duration-300 hover:border-gold/35 hover:shadow-[0_18px_42px_rgba(0,0,0,0.38),0_0_24px_rgba(212,175,55,0.18)] lg:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold/80">Padrão</p>
                <p className="mt-3 text-sm text-off/88">Mostro cada passo e mantenho o combinado.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold/80">Curadoria</p>
                <p className="mt-3 text-sm text-off/88">Seleciono Mercedes clássicas com critério técnico.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 sm:col-span-2">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold/80">Atendimento</p>
                <p className="mt-3 text-sm text-off/88">Atendo direto, sem ruído, do início ao fim.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="historia" className="relative scroll-mt-36 border-t border-off/10 bg-black/10 py-24 lg:py-32">

        <div className="mx-auto max-w-6xl px-6">
          {/* Hero intro */}
          <div className="reveal-up mb-20 lg:mb-28">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Minha história</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-off sm:text-5xl lg:text-6xl">
              Construído dia a dia.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-off/75 lg:text-lg">
              Comecei pequeno, com exigência pessoal e muito trabalho. Aqui mostro como a garagem foi ganhando forma.
            </p>
          </div>

          {/* Main narrative + people */}
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start mb-20">
            <figure className="reveal-left overflow-hidden rounded-[2.5rem] border border-off/10 bg-[#111111]/90 shadow-[0_20px_60px_rgba(0,0,0,0.4)]" data-parallax-image="0.3">
              <div className="relative aspect-[3/4]">
                <AdaptiveImage
                          src="/sobre/2.jpeg"
                          alt="Edmilson, dono da 747 Garage"
                          className="absolute inset-0 w-full h-full object-contain object-left"
                        />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.25)_100%)]" />
                <div className="absolute inset-x-5 bottom-5 rounded-[1.6rem] border border-off/15 bg-black/60 px-5 py-4 backdrop-blur-md">
                          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/85">Edmilson</p>
                          <p className="mt-2 text-sm font-medium text-off/95">Capricho não se improvisa</p>
                </div>
              </div>
            </figure>

            <div className="reveal-right space-y-6">
              <div className="reveal-up stagger-1 card-hover rounded-[2rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(198,167,94,0.08)_0%,rgba(198,167,94,0.03)_100%)] p-6 backdrop-blur-sm" data-parallax="0.4">
                <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Como tudo começou</p>
                <p className="mt-4 text-sm leading-7 text-off/82">Não comecei grande. Comecei com uma ideia, um espaço limitado e uma exigência pessoal que nunca aceitou o comum. Antes da estrutura, já existia o meu jeito de fazer.</p>
              </div>

              <div className="reveal-up stagger-2 card-hover rounded-[2rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(198,167,94,0.08)_0%,rgba(198,167,94,0.03)_100%)] p-6 backdrop-blur-sm" data-parallax="0.45">
                <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Maiores dificuldades</p>
                <p className="mt-4 text-sm leading-7 text-off/82">No início, tudo exigia mais. Mais esforço, mais tempo, mais paciência. Manter o nível, sem condições ideais, foi o que mais me desafiou.</p>
              </div>

              <div className="reveal-up stagger-3 card-hover rounded-[2rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(198,167,94,0.08)_0%,rgba(198,167,94,0.03)_100%)] p-6 backdrop-blur-sm" data-parallax="0.5">
                <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Momento de virada</p>
                <p className="mt-4 text-sm leading-7 text-off/82">A mudança não foi anunciada. Ela apareceu nos detalhes, no acabamento e no cuidado. Quando vi, não era tentativa. Era rotina.</p>
              </div>

              <div className="reveal-up stagger-4 card-hover rounded-[2rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(198,167,94,0.08)_0%,rgba(198,167,94,0.03)_100%)] p-6 backdrop-blur-sm" data-parallax="0.35">
                <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Meu jeito de trabalhar</p>
                <p className="mt-4 text-sm leading-7 text-off/82">Ajudo, explico e oriento de forma simples. Meu papel é te deixar seguro na decisão, com conversa direta e acompanhamento de verdade.</p>
              </div>
            </div>
          </div>

          {/* Marcos timeline - compact horizontal */}
          <div className="reveal-up mb-20 lg:mb-28">
            <h2 className="text-2xl font-semibold tracking-tight text-off lg:text-3xl mb-10">Marcos que moldaram meu espaço</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="reveal-up stagger-1 card-hover rounded-[1.6rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(198,167,94,0.08)_0%,rgba(198,167,94,0.03)_100%)] p-5 text-sm" data-parallax="0.25">
                <p className="text-xs uppercase tracking-[0.3em] text-gold/85 font-bold">Fevereiro 2020</p>
                <h3 className="mt-2 font-semibold text-off">A ideia</h3>
              </div>
              <div className="reveal-up stagger-2 card-hover rounded-[1.6rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(198,167,94,0.08)_0%,rgba(198,167,94,0.03)_100%)] p-5 text-sm" data-parallax="0.3">
                <p className="text-xs uppercase tracking-[0.3em] text-gold/85 font-bold">Abril 2020</p>
                <h3 className="mt-2 font-semibold text-off">Início da obra</h3>
              </div>
              <div className="reveal-up stagger-3 card-hover rounded-[1.6rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(198,167,94,0.08)_0%,rgba(198,167,94,0.03)_100%)] p-5 text-sm" data-parallax="0.35">
                <p className="text-xs uppercase tracking-[0.3em] text-gold/85 font-bold">2022</p>
                <h3 className="mt-2 font-semibold text-off">Inauguração</h3>
              </div>
              <div className="reveal-up stagger-4 card-hover rounded-[1.6rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(198,167,94,0.08)_0%,rgba(198,167,94,0.03)_100%)] p-5 text-sm sm:col-span-2" data-parallax="0.28">
                <a
                  href="https://www.instagram.com/naiorezende/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-[0.3em] text-gold/85 font-bold underline underline-offset-4 decoration-gold/70 transition hover:text-gold"
                >
                  Naiorezende
                </a>
                <h3 className="mt-2 font-semibold text-off">Primeiro reconhecimento</h3>
              </div>
              <div className="reveal-up stagger-5 card-hover rounded-[1.6rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(198,167,94,0.08)_0%,rgba(198,167,94,0.03)_100%)] p-5 text-sm" data-parallax="0.32">
                <p className="text-xs uppercase tracking-[0.3em] text-gold/85 font-bold">Pietro Fittipaldi</p>
                <h3 className="mt-2 font-semibold text-off">Referência</h3>
              </div>
            </div>
          </div>

          {/* Visual timeline - fotos da história */}
          <div className="reveal-up">
            <h2 className="text-2xl font-semibold tracking-tight text-off lg:text-3xl mb-12" data-parallax="0.15">Do terreno ao que é hoje</h2>
            <div className="space-y-6">
              {historyTimeline.map((item, idx) => (
                <article
                  key={`${item.year}-${item.title}`}
                  className={`history-card grid items-stretch gap-6 overflow-hidden rounded-[2.2rem] border border-off/12 bg-gradient-to-b from-[#141414]/80 to-[#0b0b0b]/90 ${item.title === "Terreno inicial" || item.title === "Resultado atual - lateral" ? 'lg:grid-cols-[1.55fr_0.85fr]' : orientations[idx] === 'portrait' ? 'lg:grid-cols-[minmax(420px,0.98fr)_1.02fr] lg:p-0 lg:items-center' : 'lg:grid-cols-[1.6fr_1fr] lg:p-0'} hover:border-gold/25 transition-all duration-500`}
                  data-parallax="0.25"
                >
                  <div className={`relative overflow-hidden ${item.title === "Terreno inicial" || item.title === "Resultado atual - lateral" ? 'lg:rounded-l-[2.2rem] lg:min-h-[640px]' : orientations[idx] === 'portrait' ? 'lg:rounded-l-[2.2rem] lg:min-h-[560px]' : 'lg:rounded-l-[2.2rem]'}`}>
                    {item.title === "Terreno inicial" || item.title === "Resultado atual - lateral" || orientations[idx] === 'portrait' ? (
                      <div className={`relative h-full w-full ${item.title === "Terreno inicial" || item.title === "Resultado atual - lateral" ? 'min-h-[500px] lg:min-h-[640px]' : 'min-h-[420px] lg:min-h-[560px]'}`}>
                        <div className="absolute inset-0">
                          <AdaptiveImage
                            src={item.image}
                            alt={item.alt}
                            onOrientation={(o) => setOrientationAt(idx, o)}
                            className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.18)_55%,rgba(0,0,0,0.42)_100%)]" />
                      </div>
                    ) : (
                      <div className="relative h-0 pb-[56%] lg:pb-0 lg:h-full">
                        <AdaptiveImage
                          src={item.image}
                          alt={item.alt}
                          onOrientation={(o) => setOrientationAt(idx, o)}
                          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 transform hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                    )}
                  </div>

                  <div className={`self-center bg-black/30 p-6 ${item.title === "Terreno inicial" || item.title === "Resultado atual - lateral" ? 'lg:self-stretch lg:ml-0 lg:bg-[#0b0b0b]/90 lg:backdrop-blur-md lg:border-l lg:border-off/10 lg:rounded-r-[2.2rem] lg:px-7 lg:py-8' : 'lg:bg-transparent lg:backdrop-blur-sm lg:p-8 lg:-ml-12'} ${orientations[idx] === 'portrait' ? 'lg:self-stretch lg:flex lg:items-center' : 'lg:self-center'}`}>
                    <div className={`${item.title === "Terreno inicial" || item.title === "Resultado atual - lateral" ? 'max-w-[22rem]' : orientations[idx] === 'portrait' ? 'h-full flex flex-col justify-center max-w-[34rem]' : 'max-w-[36rem]'}`}>
                      <p className="text-xs uppercase tracking-[0.4em] text-gold/85 font-bold">{item.year}</p>
                      <h3 className={`mt-4 font-bold tracking-tight text-off ${item.title === "Terreno inicial" || item.title === "Resultado atual - lateral" ? "text-[1.7rem] leading-tight" : "text-2xl"}`}>
                        {item.title}
                      </h3>
                      <p className={`${orientations[idx] === 'portrait' ? 'flex-1 mt-4 text-sm leading-7 text-off/80' : item.title === "Terreno inicial" || item.title === "Resultado atual - lateral" ? 'mt-3 text-[0.92rem] leading-6 text-off/78' : 'mt-4 text-sm leading-7 text-off/80'}`}>
                        {item.description}
                      </p>
                      {"note" in item && (
                        <p className={`uppercase tracking-[0.22em] text-gold/70 leading-6 ${item.title === "Terreno inicial" || item.title === "Resultado atual - lateral" ? 'mt-4 text-[0.68rem]' : 'mt-5 text-xs'}`}>
                          {(item as { note?: string }).note}
                        </p>
                      )}
                      {item.people && (
                        <p className="mt-3 text-xs uppercase tracking-[0.25em] text-off/55 font-medium">{item.people}</p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Edmilson profile */}
          <div className="reveal-up mt-20 lg:mt-28 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="reveal-left">
              <p className="text-xs uppercase tracking-[0.4em] text-gold/80 mb-4">Fale comigo</p>
              <h2 className="text-3xl font-bold tracking-tight text-off lg:text-4xl mb-8">Sou o Edmilson — Mercedes 190E</h2>
              <div className="space-y-4 text-sm leading-7 text-off/80">
                <p>Cuido do diagnóstico, restauração, revisão e preparação técnica de cada carro.</p>
                <p>Fala comigo sobre avaliação, dúvidas técnicas, orientação de compra e planejamento.</p>
                <p className="text-base font-medium text-off/90">Falo direto, técnico e transparente.</p>
              </div>
            </div>

            <figure className="reveal-right overflow-hidden rounded-[2.5rem] border border-off/10 bg-[#111111]/90 shadow-[0_20px_60px_rgba(0,0,0,0.4)]" data-parallax-image="0.25">
              <div className="relative aspect-[3/4]">
                <AdaptiveImage
                  src="/sobre/1.jpeg"
                  alt="Edmilson, especialista Mercedes da 747 Garage"
                  className="h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.25)_100%)]" />
                <div className="absolute inset-x-5 bottom-5 rounded-[1.6rem] border border-off/15 bg-black/60 px-5 py-4 backdrop-blur-md">
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/85">Responsável direto</p>
                  <p className="mt-2 text-sm font-medium text-off/95">Fale direto comigo</p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section id="contato" className="relative scroll-mt-36 border-t border-off/10 py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Contato</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-off sm:text-4xl">
              Fale direto comigo.
            </h2>
            <p className="mt-5 text-sm leading-7 text-off/72 sm:text-base">
              Quer vender, comprar ou entender um carro específico? A conversa certa começa aqui.
            </p>
          </div>

          {/* Carrossel em mobile, grid em desktop */}
          <div className="relative">
            {/* Desktop: Grid com 3 colunas */}
            <div className="hidden lg:grid gap-4 grid-cols-3">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="rounded-[2rem] border border-off/10 bg-white/5 p-8 text-center backdrop-blur-sm hover:border-gold/30 hover:bg-white/8 transition-all duration-300 card-hover" data-parallax="0.2"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-off/45">{info.label}</p>
                  <p className="mt-6 text-2xl font-medium text-off/90">{info.title}</p>
                </div>
              ))}
            </div>

            {/* Mobile: Carrossel */}
            <div className="lg:hidden relative">
              <div className="overflow-hidden rounded-[2.5rem]">
                <div className="relative">
                  <div className="carousel-item">
                    <div className="rounded-[2.5rem] border border-off/10 bg-white/5 p-10 text-center backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.35em] text-off/45">{contactInfo[currentContactIndex].label}</p>
                      <p className="mt-8 text-3xl font-bold text-off/90">{contactInfo[currentContactIndex].title}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={prevContact}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-off/20 bg-off/5 text-off transition hover:border-gold/40 hover:bg-off/10 hover:-translate-y-0.5"
                  aria-label="Anterior"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Indicators */}
                <div className="flex items-center gap-2">
                  {contactInfo.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentContactIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentContactIndex
                          ? "w-8 bg-gold"
                          : "w-2 bg-off/25 hover:bg-off/40"
                      }`}
                      aria-label={`Ir para slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextContact}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-off/20 bg-off/5 text-off transition hover:border-gold/40 hover:bg-off/10 hover:-translate-y-0.5"
                  aria-label="Próximo"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="orcamento" className="relative scroll-mt-36 border-t border-off/10 py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="rounded-[2rem] border border-off/10 bg-white/5 p-8 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Orçamento direto comigo</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-off sm:text-4xl">
              Me envia os detalhes que respondo direto.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-off/72 sm:text-base">
              Para orçamento, me mande modelo, ano, estado geral e objetivo. Assim respondo com mais precisão.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5511930108649"
                target="_blank"
                rel="noreferrer"
                onClick={handleWhatsAppClick}
                aria-busy={whatsLoading}
                className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-[#d4af37]/35 bg-[linear-gradient(135deg,rgba(212,175,55,0.34)_0%,rgba(255,238,186,0.2)_40%,rgba(255,255,255,0.12)_100%)] px-7 py-3.5 text-sm font-semibold tracking-[0.02em] text-[#fff8de] shadow-[0_14px_38px_rgba(0,0,0,0.35),0_0_24px_rgba(212,175,55,0.2)] backdrop-blur-lg before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(120deg,rgba(255,255,255,0.45)_-10%,rgba(255,255,255,0.12)_28%,rgba(255,255,255,0)_48%)] before:opacity-75 transition-all duration-300 ease-out hover:scale-105 hover:border-[#f2d37a]/60 hover:brightness-110 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_32px_rgba(212,175,55,0.38)] active:scale-95"
              >
                {whatsLoading ? "Abrindo WhatsApp..." : "Me chama no WhatsApp"}
              </a>
              <Link
                href="/vehicles"
                className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-[#d4af37]/30 bg-[linear-gradient(135deg,rgba(23,20,14,0.66)_0%,rgba(44,35,18,0.5)_55%,rgba(212,175,55,0.16)_100%)] px-7 py-3.5 text-sm font-semibold tracking-[0.02em] text-[#e9cc7c] shadow-[0_12px_30px_rgba(0,0,0,0.32)] backdrop-blur-lg before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(120deg,rgba(255,255,255,0.2)_-10%,rgba(255,255,255,0.08)_28%,rgba(255,255,255,0)_50%)] before:opacity-70 transition-all duration-300 ease-out hover:scale-105 hover:border-[#e0bf64]/55 hover:brightness-110 hover:shadow-[0_18px_42px_rgba(0,0,0,0.4),0_0_24px_rgba(212,175,55,0.26)] active:scale-95"
              >
                Ver veículos
              </Link>
              <Link
                href="/servicos"
                className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-white/25 bg-[linear-gradient(135deg,rgba(255,255,255,0.11)_0%,rgba(255,255,255,0.06)_48%,rgba(255,255,255,0.03)_100%)] px-7 py-3.5 text-sm font-semibold tracking-[0.02em] text-off shadow-[0_12px_30px_rgba(0,0,0,0.3)] backdrop-blur-lg before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(120deg,rgba(255,255,255,0.2)_-10%,rgba(255,255,255,0.08)_30%,rgba(255,255,255,0)_50%)] before:opacity-70 transition-all duration-300 ease-out hover:scale-105 hover:border-white/40 hover:brightness-110 hover:shadow-[0_18px_42px_rgba(0,0,0,0.38),0_0_20px_rgba(212,175,55,0.2)] active:scale-95"
              >
                Ver serviços
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-off/10 bg-[#111111]/90 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-off/50">1. Me envie o carro</p>
              <p className="mt-4 text-sm leading-7 text-off/78">Modelo, ano e condição geral já ajudam a direcionar a conversa.</p>
            </div>
            <div className="rounded-[2rem] border border-off/10 bg-[#111111]/90 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-off/50">2. Eu ajusto a proposta</p>
              <p className="mt-4 text-sm leading-7 text-off/78">Te passo uma orientação direta sobre compra ou venda.</p>
            </div>
            <div className="rounded-[2rem] border border-off/10 bg-[#111111]/90 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-off/50">3. Seguimos o próximo passo</p>
              <p className="mt-4 text-sm leading-7 text-off/78">Sem enrolação e com foco no que importa: o carro e a conversa certa.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-off/10 pb-14 pt-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="surface-card transition-all duration-300 lg:p-10 p-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-[0.38em] text-gold/85">747 Garage</p>
                <p className="mt-5 max-w-xs text-sm leading-7 text-off/72">
                  Cuido de Mercedes clássicas com atendimento direto, técnico e transparente.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-off/55">Links</p>
                <div className="mt-5 flex flex-col gap-3 text-sm text-off/78">
                  <Link href="/vehicles" className="transition-all duration-300 hover:text-gold">Veículos</Link>
                  <Link href="/servicos" className="transition-all duration-300 hover:text-gold">Serviços</Link>
                  <Link href="/pecas" className="transition-all duration-300 hover:text-gold">Peças</Link>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-off/55">Contato</p>
                <div className="mt-5 space-y-3 text-sm text-off/78">
                  <p className="flex items-center gap-2">
                    <span aria-hidden="true">📞</span>
                    +55 11 93010-8649
                  </p>
                  <p className="flex items-center gap-2">
                    <span aria-hidden="true">📍</span>
                    Rua Antonio Viana, 747 - Parque Paulistano, São Paulo
                  </p>
                  <p className="flex items-center gap-2">
                    <span aria-hidden="true">🕒</span>
                    Seg-Sex 08h às 16h
                  </p>
                  <a
                    href="https://www.instagram.com/747_garage/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-gold transition-all duration-300 hover:text-[#ffe5a3]"
                  >
                    @747_garage
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-off/55">Agenda</p>
                <p className="mt-5 text-sm text-off/72">
                  Quer visitar ou tirar dúvida? Me chama no WhatsApp.
                </p>
                <a
                  href="https://wa.me/5511930108649"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition hover:border-gold/50 hover:bg-gold/20"
                >
                  Me chamar
                </a>
              </div>

              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-off/42">Desenvolvido por</p>
                <div className="mt-4 inline-flex flex-col gap-1.5 rounded-[1rem] border border-white/8 bg-white/[0.03] px-4 py-3 text-[0.82rem] text-off/64 backdrop-blur-sm">
                  <a
                    href="https://www.instagram.com/mansuor__1/"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-all duration-300 hover:text-gold/90"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arthur-mansur-05a617305/"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-all duration-300 hover:text-gold/90"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <div className="flex flex-col gap-4 text-xs tracking-[0.08em] text-off/48 md:flex-row md:items-center md:justify-between">
                <p className="uppercase tracking-[0.22em] text-off/45">
                  © {new Date().getFullYear()} 747 Garage. Todos os direitos reservados.
                </p>
                <p className="text-off/52">São Paulo - SP</p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.18em] text-off/58 md:gap-6">
                <Link href="/termos-de-uso" className="transition-all duration-300 hover:text-gold">
                  Termos de Uso
                </Link>
                <Link href="/politica-de-privacidade" className="transition-all duration-300 hover:text-gold">
                  Política de Privacidade
                </Link>
                <Link href="/aviso-legal" className="transition-all duration-300 hover:text-gold">
                  Aviso Legal
                </Link>
              </div>

              <p className="mt-4 max-w-3xl text-xs leading-6 text-off/50">
                Todas as marcas mencionadas pertencem aos seus respectivos proprietários. A 747 Garage não possui
                vínculo oficial com fabricantes, e atuo de forma independente na seleção e nos serviços.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}