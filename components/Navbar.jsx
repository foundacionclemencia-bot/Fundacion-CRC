"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#historia", label: "Su historia" },
  { href: "#programas", label: "Programas" },
  { href: "#impacto", label: "Impacto" },
  { href: "#transparencia", label: "Transparencia" },
  { href: "#ayudar", label: "Cómo ayudar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-crema/90 shadow-sm shadow-marino/5 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-crc flex h-20 items-center justify-between py-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Inicio — Fundación CRC">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-marino font-serif text-sm font-bold tracking-tight text-dorado">
            CRC
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-base font-semibold text-marino">Fundación CRC</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-marino/55">
              Clemencia Romero Castillo
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-marino/75 transition-colors hover:text-terracota"
            >
              {l.label}
            </a>
          ))}
          <a href="#ayudar" className="btn-primary !px-6 !py-2.5">
            Donar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-marino/15 text-marino lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden border-t border-marino/10 bg-crema/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-crc flex flex-col gap-1 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-marino/80 hover:bg-marino/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#ayudar"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2"
          >
            Donar ahora
          </a>
        </div>
      </div>
    </header>
  );
}
