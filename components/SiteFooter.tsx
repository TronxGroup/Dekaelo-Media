import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-black text-gray-500 border-t border-gray-800 w-full">
      <div className="container mx-auto px-4 py-8">
        <p className="text-center">© {new Date().getFullYear()} Dekaelo Media. Todos los derechos reservados.</p>
        <p className="mt-2 text-gray-400 text-sm text-center">Historias que inspiran en cada frame.</p>

        <div className="mt-3 flex flex-col items-center gap-2 text-sm md:flex-row md:flex-wrap md:justify-center">
          <a href="mailto:info@dekaelomedia.com" className="hover:text-yellow-400 break-all max-w-full">info@dekaelomedia.com</a>
          <span className="hidden md:inline text-gray-700">|</span>
          <a href="https://wa.me/56920080031" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">WhatsApp +56 9 2008 0031</a>
          <span className="hidden md:inline text-gray-700">|</span>
          <a href="https://www.instagram.com/dekaelo_media/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          <span className="hidden md:inline text-gray-700">|</span>
          <a href="https://www.linkedin.com/company/dekaelo-media/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 break-all max-w-full">LinkedIn</a>
        </div>

        <nav className="mt-4 flex items-center justify-center gap-3 text-xs text-gray-400">
          <Link href="/privacidad" className="hover:text-gray-200 underline underline-offset-4">Privacidad</Link>
          <span className="text-gray-700">/</span>
          <Link href="/condiciones" className="hover:text-gray-200 underline underline-offset-4">Condiciones</Link>
        </nav>
      </div>
    </footer>
  );
}
