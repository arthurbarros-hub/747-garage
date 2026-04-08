"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { parts } from "@/lib/parts-data";

const ITEMS_PER_PAGE = 12;

function parsePriceToNumber(price: string) {
  return Number(price.replace(/[^\d]/g, ""));
}

export default function PecasPage() {
  const initialSlides = useMemo(
    () => Object.fromEntries(parts.map((p) => [p.id, 0])) as Record<string, number>,
    []
  );

  const [activeSlide, setActiveSlide] = useState<Record<string, number>>(initialSlides);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [sortBy, setSortBy] = useState("relevancia");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    return ["Todas", ...new Set(parts.map((part) => part.category))];
  }, []);

  const filteredParts = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return parts.filter((part) => {
      const matchesCategory =
        selectedCategory === "Todas" || part.category === selectedCategory;

      if (!matchesCategory) {
        return false;
      }

      if (!searchTerm) {
        return true;
      }

      return [part.title, part.category, part.description, part.notes ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm);
    });
  }, [search, selectedCategory]);

  const sortedParts = useMemo(() => {
    const list = [...filteredParts];

    switch (sortBy) {
      case "preco-menor":
        return list.sort((a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price));
      case "preco-maior":
        return list.sort((a, b) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price));
      case "nome-az":
        return list.sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));
      case "nome-za":
        return list.sort((a, b) => b.title.localeCompare(a.title, "pt-BR"));
      case "mais-recentes":
        return list.reverse();
      default:
        return list;
    }
  }, [filteredParts, sortBy]);

  const totalPages = Math.max(1, Math.ceil(sortedParts.length / ITEMS_PER_PAGE));

  const paginatedParts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedParts.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedParts, currentPage]);

  const visiblePages = useMemo(() => {
    const pages: number[] = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + 4);

    for (let page = start; page <= end; page += 1) {
      pages.push(page);
    }

    return pages;
  }, [currentPage, totalPages]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, sortBy]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  function goTo(partId: string, index: number) {
    setActiveSlide((prev) => ({ ...prev, [partId]: index }));
  }

  function changeSlide(partId: string, delta: number) {
    setActiveSlide((prev) => {
      const part = parts.find((p) => p.id === partId);
      if (!part) return prev;

      const current = prev[partId] ?? 0;
      const next = Math.min(Math.max(current + delta, 0), part.images.length - 1);

      return { ...prev, [partId]: next };
    });
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-off">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:90px_90px] opacity-10" />

      <section className="relative mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Peças à venda</h1>
            <p className="mt-3 max-w-2xl text-sm text-off/72 sm:text-base">
              Anúncios de peças Mercedes com visual premium e informações claras para compra.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-off/20 bg-off/5 px-6 py-3 text-sm font-semibold text-off transition hover:bg-off/10"
          >
            Voltar para início
          </Link>
        </div>

        <div className="mb-8 rounded-3xl border border-off/10 bg-black/35 p-5 backdrop-blur-md sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="w-full lg:max-w-md">
              <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-off/55">Buscar peça</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Ex.: lanterna, painel, roda..."
                className="w-full rounded-2xl border border-off/15 bg-off/5 px-4 py-3 text-sm text-off outline-none transition placeholder:text-off/45 focus:border-gold/35"
              />
            </label>

            <div className="w-full lg:w-auto">
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-off/55">Categoria</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                      selectedCategory === category
                        ? "border-gold/45 bg-gold/15 text-gold"
                        : "border-off/15 bg-off/5 text-off/80 hover:border-off/30"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <label className="w-full lg:max-w-[260px]">
              <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-off/55">Ordenar por</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="w-full rounded-2xl border border-off/15 bg-off/5 px-4 py-3 text-sm text-off outline-none transition focus:border-gold/35"
              >
                <option value="relevancia">Relevância</option>
                <option value="mais-recentes">Mais recentes</option>
                <option value="preco-menor">Menor preço</option>
                <option value="preco-maior">Maior preço</option>
                <option value="nome-az">Nome (A-Z)</option>
                <option value="nome-za">Nome (Z-A)</option>
              </select>
            </label>
          </div>

          <p className="mt-4 text-xs text-off/60">
            Mostrando {paginatedParts.length} de {sortedParts.length} peças (página {currentPage} de {totalPages}).
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {paginatedParts.map((part) => {
            const current = activeSlide[part.id] ?? 0;

            return (
              <article
                key={part.id}
                className="group overflow-hidden rounded-3xl border border-off/10 bg-[#0f0f0f]/95 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-2 hover:border-gold/30"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Link href={`/pecas/${part.id}`}>
                    <Image
                      src={part.images[current]}
                      alt={part.title}
                      width={900}
                      height={600}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </Link>

                  {part.images.length > 1 && (
                    <button
                      onClick={() => changeSlide(part.id, -1)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-off hover:bg-black/60"
                      aria-label="Imagem anterior"
                    >
                      ‹
                    </button>
                  )}

                  {part.images.length > 1 && (
                    <button
                      onClick={() => changeSlide(part.id, 1)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-off hover:bg-black/60"
                      aria-label="Próxima imagem"
                    >
                      ›
                    </button>
                  )}

                  {part.images.length > 1 && (
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      {part.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => goTo(part.id, i)}
                          className={`h-2.5 w-2.5 rounded-full ${
                            i === current ? "bg-gold" : "bg-off/40 hover:bg-off"
                          }`}
                          aria-label={`Ir para imagem ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h2 className="text-xl font-semibold">
                        <Link href={`/pecas/${part.id}`} className="transition hover:text-gold">
                          {part.title}
                        </Link>
                      </h2>
                      <p className="text-xs uppercase tracking-[0.25em] text-off/70">
                        {part.category} · {part.condition}
                      </p>

                      {part.badges && part.badges.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {part.badges.map((badge) => (
                            <span
                              key={badge}
                              className="rounded-full border border-gold/35 bg-gold/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="w-full rounded-2xl border border-gold/30 bg-[#f3e6c1] px-4 py-2 text-center text-lg font-black tracking-tight text-ink shadow-[0_10px_35px_rgba(198,167,94,0.25)] sm:min-w-[9.4rem] sm:w-auto sm:text-xl">
                      {part.price}
                    </span>
                  </div>

                  <p className="text-sm text-off/80">{part.description}</p>
                  {part.notes && <p className="text-xs italic text-off/70">{part.notes}</p>}

                  <Link
                    href={`/pecas/${part.id}`}
                    className="inline-flex items-center rounded-full border border-off/20 bg-off/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-off/85 transition hover:border-gold/35 hover:text-gold"
                  >
                    Ver anúncio
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {sortedParts.length === 0 && (
          <div className="mt-8 rounded-3xl border border-off/10 bg-black/35 p-8 text-center text-off/70">
            Nenhuma peça encontrada com os filtros atuais.
          </div>
        )}

        {sortedParts.length > 0 && totalPages > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="rounded-full border border-off/20 bg-off/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-off transition hover:bg-off/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Anterior
            </button>

            {visiblePages.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                  page === currentPage
                    ? "border-gold/45 bg-gold/15 text-gold"
                    : "border-off/20 bg-off/5 text-off hover:bg-off/10"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full border border-off/20 bg-off/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-off transition hover:bg-off/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Próxima
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
