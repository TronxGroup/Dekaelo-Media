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
  const [scrolled, setScrolled] = useState(false);

  const isActive = useMemo(
    () => (href: string) =>
      href === "/" ? pathname === "/" : pathname.startsWith(href),
    [pathname]
  );

  // 👉 Detectar scroll
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 👉 Lock scroll mobile
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

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
        const active = isActive(item.href);
        const common =
          "transition-colors rounded-xl px-3 py-2 inline-flex items-center gap-2";
        const activeCls =
          "text-white bg-sky-500/15 border border-sky-400/25";
        const idleCls =
          "text-white/85 hover:text-white hover:bg-sky-500/10 border border-transparent";

        return (
          <li key={item.href} className={variant === "mobile" ? "w-full" : ""}>
            <Link
              href={item.href}
              className={cx(
                common,
                active ? activeCls : idleCls,
                variant === "mobile" && "w-full"
              )}
              aria-current={active ? "page" : undefined}
              onClick={() => variant === "mobile" && setOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header
      className={cx(
        "sticky top-0 z-40 border-b backdrop-blur transition-all duration-300",
        scrolled
          ? "bg-black/90 border-white/10"
          : "bg-black/70 border-white/10"
      )}
    >
      <div
        className={cx(
          "container flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16 py-1" : "h-20 py-2"
        )}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
  src="/logo_text_white.png"
  alt="Dekaelo Media"
  width={120}
  height={76}
  className={cx(
    "w-auto object-contain transition-all duration-300",
    scrolled ? "h-8" : "h-12"
  )}
  priority
/>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:block">
          <NavList variant="desktop" />
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contacto"
            className="btn-primary inline-flex items-center gap-2"
          >
            Cotizar
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* MOBILE BUTTON */}
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

      {/* MOBILE MENU */}
      <div
        className={cx(
          "md:hidden fixed inset-0 z-50 transition",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          className={cx(
            "absolute inset-0 transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
          style={{
            background:
              "linear-gradient(to bottom, rgba(2,6,23,0.88), rgba(2,6,23,0.95))",
          }}
        />

        <div
          role="dialog"
          aria-modal="true"
          className={cx(
            "absolute top-0 left-0 right-0 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.55)] transition-all duration-200",
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          )}
        >
          <div className="container py-4">
            <div className="flex items-center justify-between">
              <Image
                src="/logo_text_white.png"
                alt="Dekaelo Media"
                width={120}
                height={76}
                className="h-8 w-auto object-contain"
              />

              <button
                className="p-2 rounded-xl border border-white/15 hover:bg-sky-500/10 transition"
                onClick={() => setOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-4">
              <NavList variant="mobile" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
