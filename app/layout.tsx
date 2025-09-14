// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

export const metadata: Metadata = {
  title: 'Dekaelo Media — Producción Audiovisual Estratégica',
  description:
    'Estudio creativo de video en Chile. Plan Audiovisual Mensual, videos corporativos, comerciales y contenido de marca.',
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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

  return (
    <html lang="es">
      <head>
        {/* --- Google Tag Manager (HEAD) --- */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=${gtmId}'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
        {/* --- Fin GTM HEAD --- */}
      </head>

      <body className="text-white selection:bg-brand-red/60 selection:text-white">
        {/* --- Google Tag Manager (noscript) - recomendado justo después de <body> --- */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* --- Fin GTM noscript --- */}

        <Navbar />
        <StickyCTA />
        <main>{children}</main>
        <Footer />

        {/* Schema.org (Organization) */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Dekaelo Media',
              url: 'https://www.dekaelomedia.com',
              description:
                'Estudio audiovisual en Chile. Plan mensual, corporativos, comerciales y documentales.',
              brand: 'Dekaelo Media',
            }),
          }}
        />
      </body>
    </html>
  );
}
