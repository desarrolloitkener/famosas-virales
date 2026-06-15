"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#referencias", label: "Referencias" },
    { href: "#prueba", label: "Prueba de contenido" },
    { href: "#modelos", label: "Modelos" },
    { href: "#precios", label: "Precios" },
    { href: "#faq", label: "FAQ" },
    { href: "#pago", label: "Pago" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-of-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-of-blue text-lg font-bold text-white">
            FV
          </span>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-of-blue">Famosas</span>
            <span className="text-of-text">Virales</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-of-text-muted transition-colors hover:text-of-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#modelos" className="of-btn-outline px-5 py-2 text-sm">
            Lista Modelos
          </a>
          <a href="#precios" className="of-btn-primary px-5 py-2 text-sm">
            Suscribirse
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-of-border md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-of-border bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-of-text"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#modelos"
              className="of-btn-outline py-3 text-center text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Lista Modelos
            </a>
            <a
              href="#precios"
              className="of-btn-primary py-3 text-center text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Suscribirse
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
