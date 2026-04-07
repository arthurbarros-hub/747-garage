"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Vehicle = {
  id: string;
  title: string;
  year: string;
  transmission: string;
  price: string;
  description: string;
  notes?: string;
  images: string[];
};

const vehicles: Vehicle[] = [
  {
    id: "w201-prata",
    title: "Mercedes Benz 190E 2.3 8V (Prata)",
    year: "1989",
    transmission: "Manual 5 marchas",
    price: "R$ 27.000",
    description:
      "Exemplar prata, íntegro para uso e projeto. Boa base para restauração com visual original.",
    notes: "Anúncio de teste com 3 fotos.",
    images: [
      "/vehicles/prata-1.png",
      "/vehicles/prata-2.png",
      "/vehicles/prata-3.png",
    ],
  },
  {
    id: "w201-branco",
    title: "Mercedes Benz 190E 2.3 8V (Branco)",
    year: "1989",
    transmission: "Manual 5 marchas",
    price: "R$ 28.000",
    description:
      "104.000 km, interior azul, super conservada. Excelente base para coleção, restauração ou projeto.",
    notes: "É... mas acho que terei que virar doadora de peças...",
    images: [
      "/vehicles/branco-1.png",
      "/vehicles/branco-2.png",
      "/vehicles/branco-3.png",
    ],
  },
  {
    id: "w201-preto",
    title: "W201 190E 2.3 8V (Preto)",
    year: "1989",
    transmission: "Automático",
    price: "R$ 25.000",
    description:
      "Documentação ok. Elétrica em ordem exceto AC. Rodando normalmente. Exemplar para restauro original ou projeto personalizado.",
    notes:
      "Olá pessoal... fui vendida... meu novo dono irá aprontar... mandarei notícias!",
    images: [
      "/vehicles/preto-1.png",
      "/vehicles/preto-2.png",
      "/vehicles/preto-3.png",
    ],
  },
];

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
    <main className="min-h-screen bg-ink text-off">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight">Veículos à venda</h1>
            <p className="mt-3 max-w-2xl text-off/70">
              Seleção de Mercedes clássicas. Passe o mouse para efeito de destaque e navegue nas fotos.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-off/20 bg-off/5 px-5 py-3 text-sm font-medium text-off transition hover:bg-off/10"
          >
            Voltar para home
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {vehicles.map((vehicle) => {
            const current = activeSlide[vehicle.id] ?? 0;

            return (
              <article
                key={vehicle.id}
                className="group overflow-hidden rounded-3xl border border-off/10 bg-surface p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={vehicle.images[current]}
                    alt={vehicle.title}
                    width={900}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                  />

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

                <div className="mt-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-semibold">{vehicle.title}</h2>
                      <p className="text-xs uppercase tracking-[0.25em] text-off/70">
                        {vehicle.year} · {vehicle.transmission}
                      </p>
                    </div>
                    <span className="rounded-full bg-off px-3 py-1 text-sm font-semibold text-ink">
                      {vehicle.price}
                    </span>
                  </div>

                  <p className="text-sm text-off/80">{vehicle.description}</p>
                  {vehicle.notes && <p className="text-xs italic text-off/70">{vehicle.notes}</p>}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}