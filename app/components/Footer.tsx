export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container py-10 text-sm grid md:grid-cols-2 gap-8">
        <div>
          <p className="font-semibold">Dekaelo Media</p>
          <p className="text-white/70 mt-2">Estudio audiovisual en Chile. Ayudamos a marcas y equipos a comunicar con claridad y calidad cinematográfica.</p>
        </div>
        <div className="md:text-right">
          <p><a href="mailto:info@dekaelomedia.com">info@dekaelomedia.com</a></p>
          <p className="text-white/60 mt-1">© {new Date().getFullYear()} Dekaelo Media. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
