"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="relative z-[60] block"
            aria-label="Dekaelo Media — Inicio"
          >
            <Image
              src="/logo-dekaelo-white.png"
              alt="Dekaelo Media"
              width={190}
              height={52}
              priority
              className="h-auto w-[145px] md:w-[175px]"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-10 md:flex">
            <Link
              href="/#proyectos"
              className="text-[11px] uppercase tracking-[0.16em] text-white/55 transition hover:text-white"
            >
              Proyectos
            </Link>

            <Link
              href="/quienes-somos"
              className="text-[11px] uppercase tracking-[0.16em] text-white/55 transition hover:text-white"
            >
              Nosotros
            </Link>

            <Link
              href="/servicios"
              className="text-[11px] uppercase tracking-[0.16em] text-white/55 transition hover:text-white"
            >
              Servicios
            </Link>

            <Link
              href="/#contacto"
              className="text-[11px] uppercase tracking-[0.16em] text-white/55 transition hover:text-white"
            >
              Contacto
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="relative z-[60] flex h-11 w-11 items-center justify-center text-white md:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 bg-[#050505] transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col px-5 pb-10 pt-28">
          <div className="mb-10 text-[10px] uppercase tracking-[0.2em] text-white/30">
            Navegación
          </div>

          <nav className="flex flex-col">
            <Link
              href="/#proyectos"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-4xl font-medium tracking-[-0.04em] text-white transition-opacity hover:text-white/60"
            >
              Proyectos
            </Link>

            <Link
              href="/quienes-somos"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-4xl font-medium tracking-[-0.04em] text-white transition-opacity hover:text-white/60"
            >
              Nosotros
            </Link>

            <Link
              href="/servicios"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-4xl font-medium tracking-[-0.04em] text-white transition-opacity hover:text-white/60"
            >
              Servicios
            </Link>

            <Link
              href="/#contacto"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-4xl font-medium tracking-[-0.04em] text-white transition-opacity hover:text-white/60"
            >
              Contacto
            </Link>
          </nav>

          <div className="mt-auto flex flex-col gap-2 pt-12 text-xs text-white/35">
            <p>DEKAELO MEDIA</p>
            <p>Distintas voces, una misma producción.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
