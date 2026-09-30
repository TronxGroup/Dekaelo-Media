import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import "./globals.css";

const siteUrl = "https://www.dekaelomedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "Dekaelo Media",

  title: {
    default: "Dekaelo Media — Productora Audiovisual",
    template: "%s | Dekaelo Media",
  },

  description:
    "Dekaelo Media es una productora audiovisual chilena especializada en desarrollo de formatos, producción, realización y postproducción.",

  keywords: [
    "Dekaelo Media",
    "productora audiovisual",
    "productora audiovisual Chile",
    "producción audiovisual",
    "vodcast",
    "contenido corporativo",
    "formatos audiovisuales",
    "postproducción",
  ],

  authors: [{ name: "Dekaelo Media" }],
  creator: "Dekaelo Media",
  publisher: "Dekaelo Media",

  /*
   * IMPORTANTE:
   * No definir canonical aquí.
   *
   * Cada página debe definir su propio canonical:
   * /quienes-somos
   * /servicios
   * /contacto
   * /vision-chile-2030
   * etc.
   */

  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Dekaelo Media",
    title: "Dekaelo Media — Productora Audiovisual",
    description:
      "Desarrollamos formatos. Producimos historias. Construimos contenido.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dekaelo Media — Productora Audiovisual",
    description:
      "Desarrollamos formatos. Producimos historias. Construimos contenido.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.png",
  },
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};


/* ============================================================
   FOOTER
============================================================ */

function Footer() {
  return (
    <footer
      id="contacto"
      className="border-t border-white/10 bg-[#050505] px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-12">

          {/* ==================================================
              MARCA
          =================================================== */}

          <div className="md:col-span-6">

            <Image
              src="/dekaelo-logo.png"
              alt="Dekaelo Media"
              width={220}
              height={60}
              className="h-auto w-[180px] md:w-[220px]"
            />

            <p className="mt-8 max-w-md text-sm leading-relaxed text-white/50">
              Distintas voces, una misma producción.
            </p>

          </div>


          {/* ==================================================
              NAVEGACIÓN
          =================================================== */}

          <div className="md:col-span-3">

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              Navegación
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <Link
                href="/"
                className="text-white/60 transition hover:text-white"
              >
                Inicio
              </Link>

              <Link
                href="/quienes-somos"
                className="text-white/60 transition hover:text-white"
              >
                Nosotros
              </Link>

              <Link
                href="/servicios"
                className="text-white/60 transition hover:text-white"
              >
                Servicios
              </Link>

              <Link
                href="/vision-chile-2030"
                className="text-white/60 transition hover:text-white"
              >
                Nuestra visión
              </Link>

              <Link
                href="/contacto"
                className="text-white/60 transition hover:text-white"
              >
                Contacto
              </Link>

            </div>

          </div>


          {/* ==================================================
              CONTACTO
          =================================================== */}

          <div className="md:col-span-3">

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              Contacto
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <a
                href="mailto:info@dekaelomedia.com"
                className="text-white/60 transition hover:text-white"
              >
                info@dekaelomedia.com
              </a>

              <a
                href="https://www.instagram.com/dekaelo_media/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/dekaelo-media/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-white"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>


        {/* ==================================================
            COPYRIGHT
        =================================================== */}

        <div className="mt-16 border-t border-white/10 pt-6">

          <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.16em] text-white/25 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} Dekaelo Media
            </p>

            <p>
              Tronx Group SpA
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}


/* ============================================================
   ROOT LAYOUT
============================================================ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

      <head>

        {/* ==================================================
            GOOGLE ANALYTICS
        =================================================== */}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-96HZDP5PVP"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-96HZDP5PVP');
            `,
          }}
        />


        {/* ==================================================
            GOOGLE ADS
        =================================================== */}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17760996045"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17760996045');
            `,
          }}
        />

      </head>


      <body className="bg-[#050505] text-white antialiased">

        <Header />

        <main>{children}</main>

        <Footer />


        {/* ==================================================
            ORGANIZATION SCHEMA
        =================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",

              name: "Dekaelo Media",

              url: siteUrl,

              logo: `${siteUrl}/dekaelo-logo.png`,

              description:
                "Productora audiovisual chilena especializada en desarrollo de formatos, producción, realización y postproducción.",

              sameAs: [
                "https://www.instagram.com/dekaelo_media/",
                "https://www.linkedin.com/company/dekaelo-media/",
              ],
            }),
          }}
        />

      </body>

    </html>
  );
}
