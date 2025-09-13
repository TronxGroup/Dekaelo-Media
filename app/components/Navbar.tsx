'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);

  const nav = (
    <ul className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center text-sm">
      <li><Link className="link" href="/">Inicio</Link></li>
      <li><Link className="link" href="/quienes-somos">Quiénes somos</Link></li>
      <li><Link className="link" href="/servicios">Servicios</Link></li>
      <li><Link className="link" href="/portafolio">Portafolio</Link></li>
      <li><Link className="link" href="/contacto">Contacto</Link></li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-black/70">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Dekaelo Media" width={36} height={36} className="drop-shadow-logo rounded-lg" />
          <span className="font-bold tracking-tight">dekaelo<span className="text-white/60 ml-1">MEDIA</span></span>
        </Link>
        <nav className="hidden md:block">{nav}</nav>
        <button
          aria-label="Abrir menú"
          className="md:hidden p-2 rounded-xl border border-white/15"
          onClick={() => setOpen(v => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90">
          <div className="container py-4">{nav}</div>
        </div>
      )}
    </header>
  );
}
