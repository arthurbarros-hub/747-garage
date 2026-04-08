"use client";

import Link from "next/link";
import { useState } from "react";

const topNavItems = [
  { href: "/#sobre", label: "Sobre nós" },
  { href: "/#contato", label: "Contato" },
];

const sideMenuItems = [
  { href: "/vehicles", label: "Veículos" },
  { href: "/pecas", label: "Peças" },
  { href: "/#orcamento", label: "Orçamento" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-label="Abrir menu lateral"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed left-4 top-1/2 z-[60] inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-off/20 bg-black/70 text-off shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-md transition hover:bg-black/90"
      >
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-[2px] w-5 bg-off transition ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] h-[2px] w-5 bg-off transition ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-[14px] h-[2px] w-5 bg-off transition ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={closeMenu}
            className="fixed inset-0 z-[54] bg-black/55"
          />

          <aside className="fixed left-0 top-0 z-[55] flex h-screen w-[18.5rem] flex-col border-r border-off/10 bg-[#090909]/96 p-6 backdrop-blur-xl">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Menu</p>
              <button
                type="button"
                onClick={closeMenu}
                className="rounded-full border border-off/20 px-3 py-1 text-xs text-off/80 transition hover:bg-off/10"
              >
                Fechar
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-3">
              {sideMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl border border-off/15 bg-off/5 px-4 py-3 text-sm font-medium text-off/88 transition hover:border-gold/30 hover:bg-off/10"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/747_garage/"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="rounded-2xl border border-off/15 bg-off/5 px-4 py-3 text-sm font-medium text-off/88 transition hover:border-gold/30 hover:bg-off/10"
              >
                Instagram
              </a>
            </nav>

            <p className="mt-8 text-xs tracking-[0.3em] text-off/35">747 GARAGE</p>
          </aside>
        </>
      )}

      <header className="sticky top-0 z-50 border-b border-off/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <Link
          href="/#topo"
          onClick={closeMenu}
          className="text-xs font-semibold tracking-[0.28em] text-off/90 sm:text-sm sm:tracking-[0.35em]"
        >
          747 GARAGE
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-off/72 md:flex">
          {topNavItems.map((item) => (
            <Link key={item.href} className="transition hover:text-off" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden text-xs tracking-[0.3em] text-off/40 sm:block">Português</div>
      </div>
      </header>
    </>
  );
}
