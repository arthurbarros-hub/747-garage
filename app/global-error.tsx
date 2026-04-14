"use client";

import Link from "next/link";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-ink text-off antialiased">
        <main className="mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-6 py-16">
          <section className="w-full rounded-3xl border border-off/10 bg-black/35 p-8 text-center backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Falha crítica</p>
            <h1 className="mt-4 text-3xl font-semibold text-off md:text-4xl">Erro global da aplicação</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-off/70 md:text-base">
              Ocorreu um erro inesperado. Tente reiniciar a interface ou voltar para a página inicial.
            </p>

            <p className="mt-4 text-xs text-off/45">
              ID de diagnóstico: {error?.digest ?? "sem-digest"}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={reset}
                className="rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition hover:opacity-90"
              >
                Recarregar interface
              </button>
              <Link
                href="/"
                className="rounded-xl border border-off/20 px-5 py-2.5 text-sm font-semibold text-off transition hover:bg-off/10"
              >
                Ir para início
              </Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
