// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";

const siteUrl = "https://www.dekaelomedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dekaelo Media — Producción Audiovisual Estratégica",
  description:
    "Estudio audiovisual en Chile. Video corporativo, vodcast y contenido para equipos de marketing, comunicaciones y RR.HH.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl + "/",
    siteName: "Dekaelo Media",
    title: "Dekaelo Media — Producción Audiovisual Estratégica",
    description: "Contenido con calidad cinematográfica para empresas: video corporativo y vodcast.",
    images: [
      {
        url: siteUrl + "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Dekaelo Media — Producción Audiovisual Estratégica",
      },
    ],
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dekaelo Media — Producción Audiovisual Estratégica",
    description:
      "Video corporativo, vodcast y contenido para redes. Proyectos puntuales o plan mensual.",
    images: [siteUrl + "/og-cover.jpg"],
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// IDs (mantén los tuyos)
const GA4_ID = "G-96HZDP5PVP";
const ADS_ID = "AW-17760996045";

// ⚠️ Opcional: IDs de conversiones (si ya los tienes, completa)
// const ADS_CONV_FORM = "AW-17760996045/XXXXXXXXXXX"; // form_submit
// const ADS_CONV_WA = "AW-17760996045/YYYYYYYYYYY";   // whatsapp_click

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Preconnect performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google.com" />

        {/* YouTube (embeds) */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
      </head>

      <body className="text-white selection:bg-brand-red/60 selection:text-white">
        {/* Google tag (gtag.js): GA4 + Google Ads */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // GA4
            gtag('config', '${GA4_ID}', {
              anonymize_ip: true,
              send_page_view: true
            });

            // Google Ads
            gtag('config', '${ADS_ID}');
          `}
        </Script>

        <Navbar />
        <StickyCTA />

        <main>{children}</main>

        <Footer />

        {/* SCHEMA.ORG Organization */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dekaelo Media",
              url: siteUrl,
              logo: siteUrl + "/logo.png",
              description:
                "Estudio audiovisual en Chile. Video corporativo, vodcast y contenido para redes y comunicación interna.",
              sameAs: [
                "https://www.instagram.com/dekaelo_media",
                "https://www.youtube.com/@dekaelo_media",
                "https://www.linkedin.com/company/dekaelo-media",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+56-9-2008-0031",
                  contactType: "sales",
                  areaServed: "CL",
                  availableLanguage: ["es"],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
