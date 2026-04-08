import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { parts } from "@/lib/parts-data";

type PartDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PartDetailsPage({ params }: PartDetailsPageProps) {
  const { id } = await params;
  const part = parts.find((item) => item.id === id);

  if (!part) {
    notFound();
  }

  const message = encodeURIComponent(
    `Olá! Tenho interesse no anúncio da peça: ${part.title} (${part.price}). Pode me passar mais detalhes?`
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-off">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:90px_90px] opacity-10" />

      <section className="relative mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <article className="overflow-hidden rounded-3xl border border-off/10 bg-[#0f0f0f]/95 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
          <div className="grid gap-4 sm:grid-cols-3">
            {part.images.map((src, index) => (
              <div
                key={src}
                className={`${index === 0 ? "sm:col-span-3" : "sm:col-span-1"} overflow-hidden rounded-2xl`}
              >
                <Image
                  src={src}
                  alt={`${part.title} - imagem ${index + 1}`}
                  width={1200}
                  height={800}
                  className={`w-full object-cover ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}
                />
              </div>
            ))}
          </div>
        </article>

        <aside className="rounded-3xl border border-off/10 bg-black/35 p-7 backdrop-blur-md lg:p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Anúncio individual</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{part.title}</h1>
          <p className="mt-3 text-xs uppercase tracking-[0.28em] text-off/65">
            {part.category} · {part.condition}
          </p>

          {part.badges && part.badges.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
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

          <div className="mt-6 inline-flex rounded-2xl border border-gold/30 bg-[#f3e6c1] px-5 py-2.5 text-2xl font-black tracking-tight text-ink">
            {part.price}
          </div>

          <p className="mt-6 text-sm leading-7 text-off/78">{part.description}</p>
          {part.notes && <p className="mt-4 text-sm italic text-off/68">{part.notes}</p>}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/5511930108649?text=${message}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-off px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#fff6db]"
            >
              Falar no WhatsApp sobre esta peça
            </a>
            <Link
              href="/pecas"
              className="inline-flex items-center justify-center rounded-full border border-off/20 bg-off/5 px-6 py-3 text-sm font-semibold text-off transition hover:bg-off/10"
            >
              Voltar para peças
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
