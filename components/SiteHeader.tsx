"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";

const topNavItems = [
  { href: "/#conceito", label: "Sobre mim", sectionId: "conceito" },
  { href: "/#contato", label: "Contato", sectionId: "contato" },
];

const sideMenuItems = [
  { href: "/vehicles", label: "Veículos" },
  { href: "/pecas", label: "Peças" },
  { href: "/servicos", label: "Serviços" },
  { href: "/#orcamento", label: "Orçamento" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  const updateLogoGlow = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    const node = logoRef.current;
    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const x = Math.min(Math.max(((event.clientX - rect.left) / rect.width) * 100, 0), 100);
    const y = Math.min(Math.max(((event.clientY - rect.top) / rect.height) * 100, 0), 100);

    node.style.setProperty("--glow-x", `${x}%`);
    node.style.setProperty("--glow-y", `${y}%`);
    node.style.setProperty("--glow-opacity", "1");
  }, []);

  const activateLogoGlow = useCallback(() => {
    const node = logoRef.current;
    if (!node) {
      return;
    }

    node.style.setProperty("--glow-opacity", "1");
  }, []);

  const resetLogoGlow = useCallback(() => {
    const node = logoRef.current;
    if (!node) {
      return;
    }

    node.style.setProperty("--glow-opacity", "0");
  }, []);

  const openMenu = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setMenuMounted(true);
    requestAnimationFrame(() => setOpen(true));
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);

    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = setTimeout(() => {
      setMenuMounted(false);
      closeTimerRef.current = null;
    }, 300);
  }, []);

  useEffect(() => {
    if (!menuMounted) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuMounted]);

  useEffect(() => {
    if (!menuMounted) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu, menuMounted]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.location.pathname !== "/") {
      return;
    }

    const sections = topNavItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveSection(hash);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {!open && (
        <button
          type="button"
          aria-expanded={open}
          aria-label="Abrir menu lateral"
          onClick={openMenu}
          className="fixed left-4 top-1/2 z-[72] inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/35 text-off/85 shadow-[0_8px_22px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-gold/45 hover:bg-black/60 hover:text-gold hover:shadow-[0_0_26px_rgba(212,175,55,0.24)]"
        >
          <span className="relative block h-4 w-5">
            <span className="absolute left-0 top-0 h-[2px] w-5 bg-off" />
            <span className="absolute left-0 top-[7px] h-[2px] w-5 bg-off" />
            <span className="absolute left-0 top-[14px] h-[2px] w-5 bg-off" />
          </span>
        </button>
      )}

      {menuMounted && (
        <div className="fixed inset-0 z-[70]">
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={closeMenu}
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-[350ms] ${
              open ? "opacity-100" : "opacity-0"
            }`}
          />

          <aside
            className={`absolute right-0 top-0 flex h-screen w-full max-w-sm flex-col overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-[350ms] ease-linear ${
              open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
            style={{ transition: "all 0.35s ease" }}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-6">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/80">MENU</p>
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-off backdrop-blur transition-all duration-300 hover:scale-105 hover:border-gold/40 hover:shadow-[0_0_22px_rgba(212,175,55,0.24)]"
              >
                <span className="text-xl leading-none">X</span>
              </button>
            </div>

            <nav className="mt-6 flex flex-1 flex-col gap-4 overflow-y-auto px-6 pb-8">
              {sideMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg font-medium tracking-[0.02em] text-off/90 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/747_garage/"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg font-medium tracking-[0.02em] text-off/90 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white/10"
              >
                Instagram
              </a>
            </nav>

            <p className="px-6 pb-8 text-xs tracking-[0.3em] text-off/35">747 GARAGE</p>
          </aside>
        </div>
      )}

      <header className="header-glass sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8">
          <Link
            ref={logoRef}
            href="/#topo"
            onClick={closeMenu}
            onMouseEnter={activateLogoGlow}
            onMouseMove={updateLogoGlow}
            onMouseLeave={resetLogoGlow}
            className="logo-glow text-xs font-semibold tracking-[0.28em] text-off/90 transition duration-300 hover:text-gold sm:text-sm sm:tracking-[0.35em]"
            style={{
              "--glow-x": "50%",
              "--glow-y": "50%",
              "--glow-opacity": "0",
            } as CSSProperties}
          >
            747 GARAGE
          </Link>

          <nav className="hidden items-center justify-end gap-3 text-sm md:flex">
            {topNavItems.map((item) => {
              const isActive = activeSection === item.sectionId;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveSection(item.sectionId)}
                  className={`rounded-full px-3 py-1.5 transition ${
                    isActive
                      ? "nav-active border border-gold/40 bg-gold/10 text-gold"
                      : "text-off/72 hover:text-off"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
