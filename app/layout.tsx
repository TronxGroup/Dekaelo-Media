// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '../components/SiteHeader'; // 👈 usa el mismo case que el archivo real
import SiteFooter from '../components/SiteFooter'; // 👈 idem

export const metadata: Metadata = {
  title: 'Dekaelo Media',
  description: 'Producción Audiovisual Estratégica',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white font-sans">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-yellow-500 text-black px-3 py-2 rounded-md"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido" className="pt-20 min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
