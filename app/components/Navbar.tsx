"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { X, Menu, ArrowUpRight } from "lucide-react";

type NavItem = { href: string; label: string; external?: boolean };

const navItems: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/contacto", label: "Contacto" },
];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeHref = useMemo(() => {
    // marca activo por prefijo, pero "/" solo exacto
    return (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname.startsWith(href);
    };
  }, [pathname]);

  // ✅ Lock scroll al abrir el menú móvil
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ✅ Cerrar con Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // ✅ Cerrar al cambiar de ruta
  useEffect(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const NavList = ({ variant }: { variant: "desktop" | "mobile" }) => (
    <ul
      className={cx(
        "text-sm",
        variant === "desktop"
          ? "flex items-center gap-6 lg:gap-8"
          : "flex flex-col gap-2"
      )}
    >
      {navItems.map((item) => {
        const isActive = activeHref(item.href);

        const common =
          "transition-colors rounded-xl px-3 py-2 inline-flex items-center gap-2";
        const active = "text-white bg-white/10 border border-white/15";
        const idle =
          "text-white/80 hover:text-white hover:bg-white/5 border border-transparent";

        // external support (si en el futuro agregas)
        if (item.external) {
          return (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cx(common, idle)}
              >
                {item.label}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>
          );
        }

        return (
          <li key={item.href} className="w-full">
            <Link
              className={cx(common, isActive ? active : idle, variant === "mobile" && "w-full")}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-black/70">
      <div className="container flex items-center justify-between h-16">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Dekaelo Media"
            width={36}
            height={36}
            className="drop-shadow-logo rounded-lg"
            priority
          />
          <span className="font-bold tracking-tight">
            dekaelo<span className="text-white/60 ml-1">MEDIA</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <NavList variant="desktop" />
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contacto"
            className="btn-primary inline-flex items-center gap-2"
          >
            Cotizar
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className={cx(
            "md:hidden p-2 rounded-xl border transition",
            open
              ? "border-sky-400/40 bg-sky-500/15"
              : "border-white/15 hover:bg-white/5"
          )}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* ✅ Mobile overlay menu (fondo oscuro + panel legible) */}
      <div
        className={cx(
          "md:hidden fixed inset-0 z-50 transition",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
          className={cx(
            "absolute inset-0 transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          style={{
            background:
              "radial-gradient(1200px 600px at 50% 0%, rgba(56,189,248,0.18), rgba(0,0,0,0.78) 60%, rgba(0,0,0,0.92) 100%)",
          }}
        />

        {/* Panel */}
        <div
          className={cx(
            "absolute top-0 left-0 right-0 border-b border-white/10",
            "bg-black/92 backdrop-blur-xl",
            "transition-transform duration-200",
            open ? "translate-y-0" : "-translate-y-3"
          )}
        >
          <div className="container py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="Dekaelo Media"
                  width={34}
                  height={34}
                  className="drop-shadow-logo rounded-lg"
                />
                <span className="font-bold tracking-tight">
                  dekaelo<span className="text-white/60 ml-1">MEDIA</span>
                </span>
              </Link>

              <button
                type="button"
                aria-label="Cerrar menú"
                className="p-2 rounded-xl border border-white/15 hover:bg-white/5 transition"
                onClick={() => setOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <div className="mt-4">
              <NavList variant="mobile" />
            </div>

            {/* CTA block */}
            <div className="mt-5 rounded-2xl border border-sky-400/20 bg-sky-500/10 p-4">
              <p className="text-sm text-white font-semibold">¿Hacemos tu proyecto?</p>
              <p className="mt-1 text-sm text-white/70">
                Cuéntanos objetivo, fecha y formato. Respondemos con propuesta.
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <Link
                  href="/contacto"
                  className="btn-primary w-full justify-center inline-flex items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  Cotizar ahora
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portafolio"
                  className="btn-ghost w-full justify-center bg-white/10 hover:bg-white/15"
                  onClick={() => setOpen(false)}
                >
                  Ver portafolio →
                </Link>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-white/50">
              Presiona <span className="text-white/70">Esc</span> para cerrar.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
