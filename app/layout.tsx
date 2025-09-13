import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: 'Dekaelo Media — Producción Audiovisual Estratégica',
  description: 'Estudio creativo de video en Chile. Plan Audiovisual Mensual, videos corporativos, comerciales y contenido de marca.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    type: 'website',
    title: 'Dekaelo Media — Producción Audiovisual Estratégica',
    description: 'Contenido con calidad cinematográfica para tu marca, todos los meses.',
    url: 'https://www.dekaelomedia.com/',
    images: ['/og-cover.jpg'],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="text-white selection:bg-brand-red/60 selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
