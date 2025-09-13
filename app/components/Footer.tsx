export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container py-10 text-sm grid md:grid-cols-3 gap-8">
        {/* Columna 1: Descripción */}
        <div>
          <p className="font-semibold">Dekaelo Media</p>
          <p className="text-white/70 mt-2">
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

        {/* Columna 3: Enlaces y legales */}
        <div className="md:text-right space-y-2">
          <div className="flex md:justify-end gap-4">
            <a
              href="https://www.instagram.com/dekaelo_media/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/dekaelo-media/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <p>
            <Link href="/terminos" className="hover:underline">
              Términos y condiciones
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
