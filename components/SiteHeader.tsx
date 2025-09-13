'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-lg shadow-md border-b border-gray-800">
      <input id="menu" type="checkbox" className="peer sr-only" />
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Principal">
        <Link href="/#inicio" className="flex items-center" aria-label="Inicio">
          <Image src="/2.Logo_White.png" alt="Dekaelo Media" width={120} height={48} priority />
        </Link>
        <label htmlFor="menu" className="md:hidden cursor-pointer p-2 rounded-lg hover:bg-gray-800" aria-label="Abrir menú" aria-controls="menu-movil" aria-expanded={false}>☰</label>
        <ul className="hidden md:flex space-x-8 text-gray-400 text-sm">
          <li><Link href="/#inicio" className="hover:text-yellow-400">Inicio</Link></li>
          <li><Link href="/#plan" className="hover:text-yellow-400">Plan</Link></li>
          <li><Link href="/#planes" className="hover:text-yellow-400">Planes</Link></li>
          <li><Link href="/#beneficios" className="hover:text-yellow-400">Beneficios</Link></li>
          <li><Link href="/#clientes" className="hover:text-yellow-400">Clientes</Link></li>
          <li><Link href="/#galeria" className="hover:text-yellow-400">Galería</Link></li>
          <li><Link href="/#quienes" className="hover:text-yellow-400">Quiénes Somos</Link></li>
          <li><Link href="/#extras" className="hover:text-yellow-400">Extras</Link></li>
          <li><Link href="/#contacto" className="hover:text-yellow-400">Contacto</Link></li>
        </ul>
      </nav>
      <div id="menu-movil" className="hidden peer-checked:block md:hidden border-t border-gray-800 bg-gray-950/95 max-h-[calc(100vh-64px)] overflow-y-auto">
        <ul className="px-6 py-4 space-y-3 text-gray-300">
          {['inicio','plan','planes','beneficios','clientes','galeria','quienes','extras','contacto'].map((id) => (
            <li key={id}>
              <Link href={`/#${id}`} className="block py-2 hover:text-yellow-400">
                {id === 'inicio' ? 'Inicio' : id.charAt(0).toUpperCase()+id.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
