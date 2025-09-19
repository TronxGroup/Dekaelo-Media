// app/layout.tsx
import './globals.css';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

const siteUrl = 'https://www.dekaelomedia.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dekaelo Media — Producción Audiovisual Estratégica',
  description:
    'Estudio creativo de video en Chile. Plan Audiovisual Mensual, videos corporativos, comerciales y contenido de marca.',
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png', // opcional si lo colocas en /public
    shortcut: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: siteUrl + '/',
    siteName: 'Dekaelo Media',
    title: 'Dekaelo Media — Producción Audiovisual Estratégica',
    description:
      'Contenido con calidad cinematográfica para tu marca, todos los meses.',
    images: [
      {
        url: siteUrl + '/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Dekaelo Media — Producción Audiovisual Estratégica',
      },
    ],
    locale: 'es_CL', // ajusta si usas otro mercado
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dekaelo Media — Producción Audiovisual Estratégica',
    description:
      'Videos corporativos, podcasts en video y contenido para redes. Plan mensual o proyectos puntuales.',
    images: [siteUrl + '/og-cover.jpg'],
    // site: '@tu_cuenta', // TODO: si tienes Twitter/X
    // creator: '@tu_cuenta', // TODO
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  // verification: { google: '...' }, // TODO: añade Search Console si lo tienes
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = 'GTM-NNP2LJJ2'; // tu ID real

  return (
    <html lang="es">
      <head>
        {/* Preconnect para iframes YouTube (mejora LCP) */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://www.google.com" />

        {/* --- Google Tag Manager (HEAD) --- */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
        {/* --- End GTM HEAD --- */}
      </head>

      <body className="text-white selection:bg-brand-red/60 selection:text-white">
        {/* --- Google Tag Manager (noscript) --- */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* --- End GTM noscript --- */}

        <Navbar />
        <StickyCTA />
        <main>{children}</main>
        <Footer />

        {/* Schema.org (Organization) enriquecido */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Dekaelo Media',
              url: siteUrl,
              logo: siteUrl + '/logo.png', // asegúrate de que exista
              description:
                'Estudio audiovisual en Chile. Plan mensual, corporativos, comerciales y documentales.',
              sameAs: [
                'https://www.instagram.com/dekaelo_media',
                'https://www.youtube.com/@dekaelo_media',
                'https://www.linkedin.com/company/dekaelo-media', // TODO: confirma/ajusta
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+56-9-2008-0031',
                  contactType: 'sales',
                  areaServed: 'CL',
                  availableLanguage: ['es'],
                },
              ],
              // Opcional si quieres enfatizar alcance local
              // address: {
              //   '@type': 'PostalAddress',
              //   addressCountry: 'CL',
              //   addressLocality: 'Santiago',
              // },
            }),
          }}
        />
      </body>
    </html>
  );
}
