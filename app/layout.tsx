import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://www.dekaelomedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "Dekaelo Media",

  title: {
    default: "Dekaelo Media — Producción audiovisual",
    template: "%s | Dekaelo Media",
  },

  description:
    "Dekaelo Media. Distintas voces, una misma producción. Producción audiovisual, contenido corporativo, entretenimiento, deporte y tecnología.",

  keywords: [
    "Dekaelo Media",
    "productora audiovisual Chile",
    "producción audiovisual Chile",
    "video corporativo Chile",
    "vodcast Chile",
    "contenido audiovisual",
    "productora audiovisual Santiago",
  ],

  alternates: {
    canonical: siteUrl,
  },

  authors: [
    {
      name: "Dekaelo Media",
      url: siteUrl,
    },
  ],

  creator: "Dekaelo Media",
  publisher: "Dekaelo Media",

  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Dekaelo Media",
    title: "Dekaelo Media — Distintas voces, una misma producción.",
    description:
      "Producción audiovisual, contenido corporativo, entretenimiento, deporte y tecnología.",
    images: [
      {
        url: `${siteUrl}/og-cover.jpg`,
        width: 1200,
        height: 630,
        alt: "Dekaelo Media",
      },
    ],
    locale: "es_CL",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dekaelo Media — Distintas voces, una misma producción.",
    description:
      "Producción audiovisual, contenido corporativo, entretenimiento, deporte y tecnología.",
    images: [`${siteUrl}/og-cover.jpg`],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050505",
};

const GA4_ID = "G-96HZDP5PVP";
const ADS_ID = "AW-17760996045";


/* ============================================================
   HEADER
============================================================ */

function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">

      <div className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7">

        {/* LOGO */}

        <Link
          href="/"
          aria-label="Dekaelo Media — Inicio"
          className="relative z-50"
        >
          <Image
            src="/dekaelo-logo.png"
            alt="Dekaelo Media"
            width={220}
            height={80}
            priority
            className="h-auto w-[135px] md:w-[165px]"
          />
        </Link>


        {/* ====================================================
            DESKTOP NAV
        ===================================================== */}

        <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.2em] md:flex">

          <Link
            href="/#proyectos"
            className="text-white/75 transition hover:text-white"
          >
            Proyectos
          </Link>

          <Link
            href="/quienes-somos"
            className="text-white/75 transition hover:text-white"
          >
            Nosotros
          </Link>

          <Link
            href="/servicios"
            className="text-white/75 transition hover:text-white"
          >
            Servicios
          </Link>

          <Link
            href="/#contacto"
            className="text-white/75 transition hover:text-white"
          >
            Contacto
          </Link>

        </nav>


        {/* ====================================================
            MOBILE MENU
        ===================================================== */}

        <details className="relative z-50 md:hidden">

          <summary
            aria-label="Abrir menú"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center"
          >

            <span className="flex flex-col gap-[5px]">

              <span className="block h-px w-6 bg-white" />
              <span className="block h-px w-6 bg-white" />
              <span className="block h-px w-6 bg-white" />

            </span>

          </summary>


          {/* MOBILE PANEL */}

          <div className="fixed inset-0 top-0 z-40 min-h-screen bg-[#050505] px-5 pt-28">

            <div className="flex min-h-[calc(100vh-7rem)] flex-col">

              <nav className="flex flex-col">

                <Link
                  href="/#proyectos"
                  className="border-b border-white/10 py-6 text-3xl font-medium tracking-[-0.04em]"
                >
                  Proyectos
                </Link>

                <Link
                  href="/quienes-somos"
                  className="border-b border-white/10 py-6 text-3xl font-medium tracking-[-0.04em]"
                >
                  Nosotros
                </Link>

                <Link
                  href="/servicios"
                  className="border-b border-white/10 py-6 text-3xl font-medium tracking-[-0.04em]"
                >
                  Servicios
                </Link>

                <Link
                  href="/#contacto"
                  className="border-b border-white/10 py-6 text-3xl font-medium tracking-[-0.04em]"
                >
                  Contacto
                </Link>

              </nav>


              <div className="mt-auto pb-10">

                <p className="text-[10px] uppercase tracking-[0.25em] text-[#f51b24]">
                  Dekaelo Media
                </p>

                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/35">
                  Distintas voces, una misma producción.
                </p>

              </div>

            </div>

          </div>

        </details>

      </div>

    </header>
  );
}


/* ============================================================
   FOOTER
============================================================ */

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 md:px-10 md:py-14">

      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">

        {/* LOGO */}

        <div>

          <Image
            src="/dekaelo-logo.png"
            alt="Dekaelo Media"
            width={220}
            height={80}
            className="w-[140px]"
          />

          <p className="mt-5 text-xs text-white/30">
            Distintas voces, una misma producción.
          </p>

        </div>


        {/* CONTACT + NAV */}

        <div className="flex flex-col gap-5 md:items-end">

          <a
            href="mailto:info@dekaelomedia.com"
            className="text-sm text-white/60 transition hover:text-white"
          >
            info@dekaelomedia.com
          </a>


          <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.18em]">

            <a
              href="https://www.instagram.com/dekaelo_media/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition hover:text-[#f51b24]"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/company/dekaelo-media/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition hover:text-[#f51b24]"
            >
              LinkedIn
            </a>

            <Link
              href="/#proyectos"
              className="text-white/40 transition hover:text-white"
            >
              Proyectos
            </Link>

            <Link
              href="/quienes-somos"
              className="text-white/40 transition hover:text-white"
            >
              Nosotros
            </Link>

            <Link
              href="/servicios"
              className="text-white/40 transition hover:text-white"
            >
              Servicios
            </Link>

            <Link
              href="/#contacto"
              className="text-white/40 transition hover:text-white"
            >
              Contacto
            </Link>

          </div>

        </div>

      </div>


      {/* COPYRIGHT */}

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-[10px] text-white/20">

        © {new Date().getFullYear()} Dekaelo Media

      </div>

    </footer>
  );
}


/* ============================================================
   ROOT LAYOUT
============================================================ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">

      <head>

        {/* PERFORMANCE */}

        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin=""
        />

        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin=""
        />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      </head>


      <body className="bg-[#050505] text-white antialiased">

        {/* ====================================================
            GOOGLE ANALYTICS + GOOGLE ADS
        ===================================================== */}

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', '${GA4_ID}', {
              anonymize_ip: true,
              send_page_view: true
            });

            gtag('config', '${ADS_ID}');
          `}
        </Script>


        {/* ====================================================
            GLOBAL HEADER
        ===================================================== */}

        <Header />


        {/* ====================================================
            PAGE CONTENT
        ===================================================== */}

        {children}


        {/* ====================================================
            GLOBAL FOOTER
        ===================================================== */}

        <Footer />


        {/* ====================================================
            STRUCTURED DATA
        ===================================================== */}

        <Script
          id="schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",

                name: "Dekaelo Media",
                url: siteUrl,
                logo: `${siteUrl}/dekaelo-logo.png`,

                email: "info@dekaelomedia.com",

                description:
                  "Estudio de producción audiovisual en Chile. Producción audiovisual, contenido corporativo, entretenimiento y contenido original.",

                sameAs: [
                  "https://www.instagram.com/dekaelo_media",
                  "https://www.youtube.com/@dekaelo_media",
                  "https://www.linkedin.com/company/dekaelo-media",
                ],

                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+56-9-2008-0031",
                  contactType: "sales",
                  areaServed: "CL",
                  availableLanguage: ["Spanish"],
                },
              },

              {
                "@context": "https://schema.org",
                "@type": "WebSite",

                name: "Dekaelo Media",
                url: siteUrl,
              },

              {
                "@context": "https://schema.org",
                "@type": "Service",

                name: "Producción audiovisual",

                provider: {
                  "@type": "Organization",
                  name: "Dekaelo Media",
                  url: siteUrl,
                },

                areaServed: {
                  "@type": "Country",
                  name: "Chile",
                },

                serviceType: [
                  "Producción audiovisual",
                  "Contenido corporativo",
                  "Vodcast",
                  "Entrevistas",
                  "Contenido original",
                  "Producción para redes sociales",
                  "Postproducción",
                ],
              },
            ]),
          }}
        />

      </body>

    </html>
  );
}
