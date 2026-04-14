
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AdaptiveImage from "../components/AdaptiveImage";


export default function Home() {
  const heroHighlights = [
    { label: "Foco", value: "Mercedes classicas" },
    { label: "Assinatura", value: "Curadoria premium" },
    { label: "Contato", value: "Resposta direta no WhatsApp" },
    { label: "Metodo", value: "Selecao tecnica e transparente" },
    { label: "Presenca", value: "Atendimento humano e direto" },
  ];

  const historyTimeline = [
    {
      year: "2019",
      title: "Primeiros carros e serviços",
      description: "Os primeiros carros de coleção Mercedes eram fotografados em local externo, onde a 747 Garage armazenava suas seleções premium antes de contar com estrutura própria.",
      people: "",
      image: "/historia/WhatsApp%20Image%202026-04-10%20at%2021.55.07.jpeg",
      alt: "Mercedes clássica em área externa, antes da garagem",
    },


    {
      year: "2021",
      title: "Etapas da construção",
      description: "Estrutura tomando forma. O solo preparado e nivelado para receber os pisos que abrigariam os veículos premium com a dignidade que merecem.",
      people: "",
      image: "/historia/06-etapas-construcao-2021.jpeg",
      alt: "Estrutura da garagem pronta, preparação do piso em 2021",
    },
    {
      year: "2026",
      title: "Hoje — resultado atual",
      description: "A 747 Garage consolidada: espaço premium onde coleções Mercedes repousam com segurança, iluminação natural e o cuidado que colecionadores exigem.",
      people: "",
      image: "/historia/07-resultado-atual-2024.jpeg",
      alt: "Garagem 747 Garage completa com carros e infraestrutura em 2024",
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

  const setOrientationAt = (idx: number, orientation: 'portrait' | 'landscape' | 'square') => {
    setOrientations((prev) => (prev[idx] === orientation ? prev : { ...prev, [idx]: orientation }));
  };

  const nextContact = () => {
    setCurrentContactIndex((prev) => (prev + 1) % contactInfo.length);
  };

  const prevContact = () => {
    setCurrentContactIndex((prev) => (prev - 1 + contactInfo.length) % contactInfo.length);
  };

  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxContainer = parallaxRef.current;
    if (!parallaxContainer) return;

    let lastScrollY = 0;
    let animationFrameId: number;

    const handleScroll = () => {
      lastScrollY = window.scrollY;
    };

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-ink text-off" ref={parallaxRef}>
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
          apresentado com uma estética limpa, simétrica e mais exclusiva para a marca, com veículos, peças e
          serviços especializados.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/vehicles"
            className="inline-flex items-center justify-center rounded-full bg-off px-6 py-3.5 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff6db] hover:shadow-[0_18px_50px_rgba(198,167,94,0.22)]"
          >
            Ver veículos disponíveis
          </Link>

          <Link
            href="/servicos"
            className="inline-flex items-center justify-center rounded-full border border-gold/35 bg-gold/10 px-6 py-3.5 text-sm font-semibold text-gold transition duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:bg-gold/15"
          >
            Explorar serviços
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

      <section id="sobre" className="relative scroll-mt-36 border-t border-off/10 bg-black/10 py-24 lg:py-32">
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

          @keyframes staggerReveal {
            0% { opacity: 0; transform: translateY(32px); }
            100% { opacity: 1; transform: translateY(0); }
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

        <div className="mx-auto max-w-6xl px-6">
          {/* Hero intro */}
          <div className="reveal-up mb-20 lg:mb-28">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80">A história</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-off sm:text-5xl lg:text-6xl">
              Precisão construída dia a dia.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-off/75 lg:text-lg">
              Conheça a jornada de uma garagem que começou com uma exigência interna e se tornou referência de qualidade, método e presença.
            </p>
          </div>

          {/* Main narrative + people */}
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start mb-20">
            <figure className="reveal-left overflow-hidden rounded-[2.5rem] border border-off/10 bg-[#111111]/90 shadow-[0_20px_60px_rgba(0,0,0,0.4)]" data-parallax-image="0.3">
              <div className="relative aspect-[3/4]">
                <AdaptiveImage
                          src="/sobre/2.jpeg"
                          alt="Edmilson e Eliton, sócios da 747 Garage"
                          className="absolute inset-0 w-full h-full object-contain object-left"
                        />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.25)_100%)]" />
                <div className="absolute inset-x-5 bottom-5 rounded-[1.6rem] border border-off/15 bg-black/60 px-5 py-4 backdrop-blur-md">
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/85">Edmilson & Eliton</p>
                  <p className="mt-2 text-sm font-medium text-off/95">Precisão não se improvisa</p>
                </div>
              </div>
            </figure>

            <div className="reveal-right space-y-6">
              <div className="reveal-up stagger-1 card-hover rounded-[2rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(198,167,94,0.08)_0%,rgba(198,167,94,0.03)_100%)] p-6 backdrop-blur-sm" data-parallax="0.4">
                <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Como tudo começou</p>
                <p className="mt-4 text-sm leading-7 text-off/82">Não começou grande. Começou com uma ideia, um espaço limitado e uma exigência interna que nunca aceitou o comum. Antes de qualquer estrutura, existia um padrão — mesmo que ainda invisível.</p>
              </div>

              <div className="reveal-up stagger-2 card-hover rounded-[2rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(198,167,94,0.08)_0%,rgba(198,167,94,0.03)_100%)] p-6 backdrop-blur-sm" data-parallax="0.45">
                <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Maiores dificuldades</p>
                <p className="mt-4 text-sm leading-7 text-off/82">No início, tudo exigia mais. Mais esforço, mais tempo, mais paciência. Manter o nível, mesmo sem as condições ideais, foi o que mais desafiou.</p>
              </div>

              <div className="reveal-up stagger-3 card-hover rounded-[2rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(198,167,94,0.08)_0%,rgba(198,167,94,0.03)_100%)] p-6 backdrop-blur-sm" data-parallax="0.5">
                <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Momento de virada</p>
                <p className="mt-4 text-sm leading-7 text-off/82">A mudança não foi anunciada. Ela apareceu nos detalhes — no acabamento preciso, no cuidado percebido. Quando se vê, já não é tentativa. É padrão.</p>
              </div>

              <div className="reveal-up stagger-4 card-hover rounded-[2rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(198,167,94,0.08)_0%,rgba(198,167,94,0.03)_100%)] p-6 backdrop-blur-sm" data-parallax="0.35">
                <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Nossa missão</p>
                <p className="mt-4 text-sm leading-7 text-off/82">Seguir construindo com precisão. Aprimorar cada etapa, ajustar cada detalhe e manter um nível que não depende de comparação — apenas de continuidade.</p>
              </div>
            </div>
          </div>

          {/* Marcos timeline - compact horizontal */}
          <div className="reveal-up mb-20 lg:mb-28">
            <h2 className="text-2xl font-semibold tracking-tight text-off lg:text-3xl mb-10">Marcos que moldaram a garagem</h2>
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
                <h3 className="mt-2 font-semibold text-off">Primeiro grande reconhecimento</h3>
              </div>
              <div className="reveal-up stagger-5 card-hover rounded-[1.6rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(198,167,94,0.08)_0%,rgba(198,167,94,0.03)_100%)] p-5 text-sm" data-parallax="0.32">
                <p className="text-xs uppercase tracking-[0.3em] text-gold/85 font-bold">Pietro Fittipaldi</p>
                <h3 className="mt-2 font-semibold text-off">Referência</h3>
              </div>
            </div>
          </div>

          {/* Visual timeline - fotos da história */}
          <div className="reveal-up">
            <h2 className="text-2xl font-semibold tracking-tight text-off lg:text-3xl mb-12" data-parallax="0.15">A construção, visual</h2>
            <div className="space-y-6">
              {historyTimeline.map((item, idx) => (
                <article
                  key={`${item.year}-${item.title}`}
                  className={`history-card grid items-stretch gap-6 overflow-hidden rounded-[2.2rem] border border-off/12 bg-gradient-to-b from-[#141414]/80 to-[#0b0b0b]/90 ${orientations[idx] === 'portrait' ? 'lg:grid-cols-[360px_1fr] lg:p-0' : 'lg:grid-cols-[1.6fr_1fr] lg:p-0'} hover:border-gold/25 transition-all duration-500`}
                  data-parallax="0.25"
                >
                  <div className="relative overflow-hidden lg:rounded-l-[2.2rem]">
                    {orientations[idx] === 'portrait' ? (
                      <div className="flex h-full w-full">
                        <div className="relative w-full lg:w-[360px] h-full flex-shrink-0">
                          <AdaptiveImage
                            src={item.image}
                            alt={item.alt}
                            onOrientation={(o) => setOrientationAt(idx, o)}
                            className="absolute inset-0 w-full h-full object-contain object-left transition-transform duration-700"
                          />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                    ) : (
                      <div className="w-full h-0 pb-[56%] lg:pb-0 lg:h-full">
                        <AdaptiveImage
                          src={item.image}
                          alt={item.alt}
                          onOrientation={(o) => setOrientationAt(idx, o)}
                          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 transform hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                    )}
                  </div>

                  {/* Text block: compact, overlaps image slightly on large screens */}
                  <div className={`self-center bg-black/30 lg:bg-transparent lg:backdrop-blur-sm p-6 lg:p-8 lg:-ml-12 ${orientations[idx] === 'portrait' ? 'lg:self-stretch lg:flex lg:items-stretch' : 'lg:self-center'}`}>
                    <div className={`${orientations[idx] === 'portrait' ? 'h-full flex flex-col justify-between' : 'max-w-[36rem]'}`}>
                      <p className="text-xs uppercase tracking-[0.4em] text-gold/85 font-bold">{item.year}</p>
                      <h3 className="mt-4 text-2xl font-bold tracking-tight text-off">{item.title}</h3>
                      <p className={`${orientations[idx] === 'portrait' ? 'flex-1 mt-4 text-sm leading-7 text-off/80' : 'mt-4 text-sm leading-7 text-off/80'}`}>{item.description}</p>
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
              <p className="text-xs uppercase tracking-[0.4em] text-gold/80 mb-4">Contato direto</p>
              <h2 className="text-3xl font-bold tracking-tight text-off lg:text-4xl mb-8">Edmilson — especialista Mercedes 190E</h2>
              <div className="space-y-4 text-sm leading-7 text-off/80">
                <p>Edmilson é o mecanista especialista em Mercedes da 747 Garage. Acompanha diagnóstico, restauração, revisão e preparação técnica de cada carro.</p>
                <p>É com ele que clientes conversam sobre qualquer assunto da garagem: avaliação, dúvidas técnicas, orientação de compra e planejamento.</p>
                <p className="text-base font-medium text-off/90">Atendimento direto, técnico e transparente.</p>
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
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/85">Especialista</p>
                  <p className="mt-2 text-sm font-medium text-off/95">Fale direto com Edmilson</p>
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
              Fale direto com a garagem.
            </h2>
            <p className="mt-5 text-sm leading-7 text-off/72 sm:text-base">
              Se você quer vender, comprar ou entender melhor um carro específico, a conversa começa aqui.
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
              <style>{`
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

                .carousel-item {
                  animation: carouselSlide 0.5s ease-out forwards;
                }
              `}</style>

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
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center rounded-full border border-off/20 bg-off/5 px-6 py-3.5 text-sm font-semibold text-off transition hover:-translate-y-0.5 hover:bg-off/10"
              >
                Ver serviços
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