"use client";

import Link from "next/link";
import { useEffect } from "react";

type AppErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function AppError({ error, reset }: AppErrorProps) {
  useEffect(() => {
    console.error("Erro de renderização:", error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-4xl items-center justify-center px-6 py-16">
      <section className="w-full rounded-3xl border border-off/10 bg-black/35 p-8 text-center backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Erro de aplicação</p>
        <h1 className="mt-4 text-3xl font-semibold text-off md:text-4xl">Algo inesperado aconteceu</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-off/70 md:text-base">
          Tivemos um problema para carregar esta tela. Seus dados permanecem protegidos e você pode
          tentar novamente agora.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition hover:opacity-90"
          >
            Tentar novamente
          </button>
          <Link
            href="/"
            className="rounded-xl border border-off/20 px-5 py-2.5 text-sm font-semibold text-off transition hover:bg-off/10"
          >
            Voltar para início
          </Link>
        </div>
      </section>
    </main>
  );
}
