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
    apple: '/apple-touch-icon.png',
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
    locale: 'es_CL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dekaelo Media — Producción Audiovisual Estratégica',
    description:
      'Videos corporativos, podcasts en video y contenido para redes. Plan mensual o proyectos puntuales.',
    images: [siteUrl + '/og-cover.jpg'],
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Preconnect para videos YouTube */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://www.google.com" />

        {/* --- Google Analytics (gtag.js) --- */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-96HZDP5PVP"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-96HZDP5PVP');
          `}
        </Script>
        {/* --- End GA --- */}
      </head>

      <body className="text-white selection:bg-brand-red/60 selection:text-white">
        <Navbar />
        <StickyCTA />

        <main>{children}</main>

        <Footer />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Dekaelo Media',
              url: siteUrl,
              logo: siteUrl + '/logo.png',
              description:
                'Estudio audiovisual en Chile. Plan mensual, corporativos, comerciales y documentales.',
              sameAs: [
                'https://www.instagram.com/dekaelo_media',
                'https://www.youtube.com/@dekaelo_media',
                'https://www.linkedin.com/company/dekaelo-media',
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
            }),
          }}
        />
      </body>
    </html>
  );
}
