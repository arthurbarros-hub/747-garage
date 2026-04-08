"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { vehicles } from "@/lib/vehicles-data";

export default function VehiclesPage() {
  const initialSlides = useMemo(
    () => Object.fromEntries(vehicles.map((v) => [v.id, 0])) as Record<string, number>,
    []
  );

  const [activeSlide, setActiveSlide] = useState<Record<string, number>>(initialSlides);

  function goTo(vehicleId: string, index: number) {
    setActiveSlide((prev) => ({ ...prev, [vehicleId]: index }));
  }

  function changeSlide(vehicleId: string, delta: number) {
    setActiveSlide((prev) => {
      const vehicle = vehicles.find((v) => v.id === vehicleId);
      if (!vehicle) return prev;

      const current = prev[vehicleId] ?? 0;
      const next = Math.min(Math.max(current + delta, 0), vehicle.images.length - 1);

      return { ...prev, [vehicleId]: next };
    });
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-off">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:90px_90px] opacity-10" />
      <section className="relative mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Veículos à venda</h1>
            <p className="mt-3 max-w-2xl text-sm text-off/72 sm:text-base">
              Seleção de anúncios com foco em Mercedes clássicas e apresentação premium.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-off/20 bg-off/5 px-6 py-3 text-sm font-semibold text-off transition hover:bg-off/10"
          >
            Voltar para início
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {vehicles.map((vehicle) => {
            const current = activeSlide[vehicle.id] ?? 0;

            return (
              <article
                key={vehicle.id}
                className="group overflow-hidden rounded-3xl border border-off/10 bg-[#0f0f0f]/95 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-2 hover:border-gold/30"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Link href={`/vehicles/${vehicle.id}`}>
                    <Image
                      src={vehicle.images[current]}
                      alt={vehicle.title}
                      width={900}
                      height={600}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </Link>

                  <button
                    onClick={() => changeSlide(vehicle.id, -1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-off hover:bg-black/60"
                    aria-label="Imagem anterior"
                  >
                    ‹
                  </button>

                  <button
                    onClick={() => changeSlide(vehicle.id, 1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-off hover:bg-black/60"
                    aria-label="Próxima imagem"
                  >
                    ›
                  </button>

                  <div className="absolute bottom-3 left-3 flex gap-2">
                    {vehicle.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(vehicle.id, i)}
                        className={`h-2.5 w-2.5 rounded-full ${
                          i === current ? "bg-gold" : "bg-off/40 hover:bg-off"
                        }`}
                        aria-label={`Ir para imagem ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h2 className="text-xl font-semibold">
                        <Link href={`/vehicles/${vehicle.id}`} className="transition hover:text-gold">
                          {vehicle.title}
                        </Link>
                      </h2>
                      <p className="text-xs uppercase tracking-[0.25em] text-off/70">
                        {vehicle.year} · {vehicle.transmission}
                      </p>
                    </div>
                    <span className="w-full rounded-2xl border border-gold/30 bg-[#f3e6c1] px-4 py-2 text-center text-lg font-black tracking-tight text-ink shadow-[0_10px_35px_rgba(198,167,94,0.25)] sm:min-w-[9.4rem] sm:w-auto sm:text-xl">
                      {vehicle.price}
                    </span>
                  </div>

                  <p className="text-sm text-off/80">{vehicle.description}</p>
                  {vehicle.notes && <p className="text-xs italic text-off/70">{vehicle.notes}</p>}

                  <Link
                    href={`/vehicles/${vehicle.id}`}
                    className="inline-flex items-center rounded-full border border-off/20 bg-off/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-off/85 transition hover:border-gold/35 hover:text-gold"
                  >
                    Ver anúncio
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}