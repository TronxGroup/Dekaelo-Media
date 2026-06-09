"use client";

import Link from "next/link";
import Image from "next/image";

const waLink =
  "https://wa.me/56920080031?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto%20con%20Dekaelo%20Media.%0A%0AEmpresa%3A%0AQue%20necesito%3A%0AFecha%20tentativa%3A%0A%0AGracias";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container max-w-6xl py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_auto_auto]">
          {/* Marca */}
          <div className="max-w-xs">
            <Link href="/">
              <Image
                src="/logo_text_white.png"
                alt="Dekaelo Media"
                width={130}
                height={36}
                className="mb-5 opacity-90"
              />
            </Link>

            <p className="text-sm leading-relaxed text-white/45">
              Producción audiovisual y contenido estratégico para empresas,
              instituciones y organizaciones que quieren construir una voz
              relevante para la próxima década.
            </p>
          </div>

          {/* Contacto */}
          <div className="space-y-3">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/25">
              Contacto
            </p>

            <a
              href="mailto:info@dekaelomedia.com"
              className="block text-sm text-white/50 transition hover:text-white"
            >
              info@dekaelomedia.com
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-white/50 transition hover:text-white"
            >
              +56 9 2008 0031
            </a>

            <p className="text-sm text-white/25">Santiago, Chile</p>
          </div>

          {/* Navegación */}
          <div className="space-y-3">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/25">
              Sitio
            </p>

            <Link
              href="/servicios"
              className="block text-sm text-white/50 transition hover:text-white"
            >
              Servicios
            </Link>

            <Link
              href="/portafolio"
              className="block text-sm text-white/50 transition hover:text-white"
            >
              Portafolio
            </Link>

            <Link
              href="/quienes-somos"
              className="block text-sm text-white/50 transition hover:text-white"
            >
              Quiénes somos
            </Link>

            <Link
              href="/vision-chile-2030"
              className="block text-sm text-white/50 transition hover:text-white"
            >
              Chile 2030
            </Link>

            <Link
              href="/contacto"
              className="block text-sm text-white/50 transition hover:text-white"
            >
              Contacto
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Social */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/dekaelo_media/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/company/dekaelo-media/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://www.youtube.com/@dekaelo_media"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 transition hover:text-white"
            >
              YouTube
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/25">
            <Link
              href="/privacidad-condiciones"
              className="transition hover:text-white"
            >
              Privacidad y condiciones
            </Link>

            <span>
              © {new Date().getFullYear()} Dekaelo Media
            </span>

            <a
              href="https://www.tronxweb.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Desarrollo: Tronx Web
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
