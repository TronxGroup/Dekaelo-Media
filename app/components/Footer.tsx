import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container py-10 text-sm grid md:grid-cols-3 gap-8">
        {/* Columna 1: Logo + Descripción */}
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
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
            <a
              href="https://www.instagram.com/dekaelo_media/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/dekaelo-media/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
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
        </div>
      </div>
    </footer>
  );
}
