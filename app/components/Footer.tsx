"use client";

import Link from "next/link";
import Image from "next/image";

const waLink =
"https://wa.me/56920080031?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto%20con%20Dekaelo%20Media.%0A%0AEmpresa%3A%0AQue%20necesito%3A%0AFecha%20tentativa%3A%0A%0AGracias";

export function Footer() {
return (





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

        <p className="text-sm text-white/45 leading-relaxed">
  Producción audiovisual y contenido estratégico para empresas, instituciones y organizaciones que quieren construir una voz relevante para la próxima década.
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

        <p className="text-sm text-white/25">
          Santiago, Chile
        </p>
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
    <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
      
      {/* Social */}
      <div className="flex items-center gap-4">

        <a
          href="https://www.instagram.com/dekaelo_media/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white/30 transition hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm9.75 2.25a.75.75 0 0 1 .102 1.493L17.5 7.25a.75.75 0 0 1-.102-1.493L17.5 5.75zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/company/dekaelo-media/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white/30 transition hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.451 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.939v5.667h-3.554v-11.49h3.414v1.568h.049c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.27 2.372 4.27 5.455v6.317zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.559V8.962h3.555v11.49z" />
          </svg>
        </a>

        <a
          href="https://www.youtube.com/@dekaelo_media"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-white/30 transition hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.54 6.42a3 3 0 0 0-2.12-2.12C18.9 3.75 12 3.75 12 3.75s-6.9 0-8.42.55A3 3 0 0 0 1.46 6.42 31.7 31.7 0 0 0 1 12a31.7 31.7 0 0 0 .46 5.58 3 3 0 0 0 2.12 2.12c1.52.55 8.42.55 8.42.55s6.9 0 8.42-.55a3 3 0 0 0 2.12-2.12A31.7 31.7 0 0 0 23 12a31.7 31.7 0 0 0-.46-5.58zM10 15.25V8.75L15.5 12 10 15.25z" />
          </svg>
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
          ©{new Date().getFullYear()} Dekaelo Media
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
