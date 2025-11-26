import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
  <div className="container py-10 text-sm grid md:grid-cols-3 gap-8">
    
    {/* Columna 1: Logo + Descripción */}
    <div>
      <Link href="/">
        <Image
          src="/logo_text_white.png"
          alt="Dekaelo Media"
          width={140}
          height={40}
          className="mb-3"
        />
      </Link>
      <p className="text-white/70">
        Estudio audiovisual en Chile. Ayudamos a marcas y equipos a comunicar con claridad y
        calidad cinematográfica.
      </p>
    </div>

    {/* Columna 2: Contacto */}
    <div>
      <p>
        <a href="mailto:info@dekaelomedia.com" className="hover:underline">
          info@dekaelomedia.com
        </a>
      </p>
      <p className="mt-1">
        <a
          href="https://wa.me/56920080031"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          WhatsApp: +56 9 2008 0031
        </a>
      </p>
    </div>

    {/* Columna 3: Redes y legales */}
    <div className="md:text-right space-y-2">
      <div className="flex md:justify-end gap-4">

        {/* Instagram */}
        <a
          href="https://www.instagram.com/dekaelo_media/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-white/80 transition"
          title="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm9.75 2.25a.75.75 0 0 1 .102 1.493L17.5 7.25a.75.75 0 0 1-.102-1.493L17.5 5.75zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/dekaelo-media/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white/80 transition"
          title="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.451 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.939v5.667h-3.554v-11.49h3.414v1.568h.049c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.27 2.372 4.27 5.455v6.317zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.559V8.962h3.555v11.49z" />
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@dekaelo_media"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="hover:text-white/80 transition"
          title="YouTube"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.54 6.42a3 3 0 0 0-2.12-2.12C18.9 3.75 12 3.75 12 3.75s-6.9 0-8.42.55A3 3 0 0 0 1.46 6.42 31.7 31.7 0 0 0 1 12a31.7 31.7 0 0 0 .46 5.58 3 3 0 0 0 2.12 2.12c1.52.55 8.42.55 8.42.55s6.9 0 8.42-.55a3 3 0 0 0 2.12-2.12A31.7 31.7 0 0 0 23 12a31.7 31.7 0 0 0-.46-5.58zM10 15.25V8.75L15.5 12 10 15.25z"/>
          </svg>
        </a>
      </div>

      <p>
        <Link href="/privacidad-condiciones" className="hover:underline">
          Privacidad y Condiciones
        </Link>
      </p>

      <p className="text-white/60 mt-2">
        © {new Date().getFullYear()} Dekaelo Media. Todos los derechos reservados.
      </p>

      {/* Créditos */}
      <p className="text-xs text-white/40">
        Desarrollado por{" "}
        <a
          href="https://www.tronxstrategy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          Tronx Strategy
        </a>.
      </p>
    </div>
  </div>
</footer>
  );
}
