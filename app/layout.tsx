import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";

const siteUrl = "https://www.dekaelomedia.com";

/* -------------------------------------------------------------------------- */
/*                                   SEO                                      */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "Dekaelo Media",

  title: {
    default: "Dekaelo Media — Productora Audiovisual Corporativa en Chile",
    template: "%s | Dekaelo Media",
  },

  description:
    "Productora audiovisual corporativa en Chile especializada en video corporativo, series institucionales y vodcast ejecutivos para empresas y organizaciones de alto perfil.",

  keywords: [
    "productora audiovisual Chile",
    "video corporativo Chile",
    "serie institucional",
    "vodcast ejecutivo",
    "producción audiovisual corporativa",
  ],

  alternates: {
    canonical: siteUrl,
  },

  authors: [{ name: "Dekaelo Media", url: siteUrl }],
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
    title: "Dekaelo Media — Productora Audiovisual Corporativa",
    description:
      "Producción audiovisual estratégica para liderazgo, cultura organizacional y comunicación corporativa en Chile.",
    images: [
      {
        url: siteUrl + "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Dekaelo Media — Productora Audiovisual Corporativa",
      },
    ],
    locale: "es_CL",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dekaelo Media — Productora Audiovisual Corporativa",
    description:
      "Series institucionales, vodcast ejecutivos y video corporativo en Chile.",
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

  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

/* -------------------------------------------------------------------------- */
/*                                ANALYTICS                                   */
/* -------------------------------------------------------------------------- */

const GA4_ID = "G-96HZDP5PVP";
const ADS_ID = "AW-17760996045";

/* -------------------------------------------------------------------------- */
/*                                LAYOUT                                      */
/* -------------------------------------------------------------------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />

        {/* Security / Performance */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>

      <body className="bg-black text-white selection:bg-white selection:text-black">

        {/* Google Tag (GA4 + Google Ads) */}
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

        {/* Structured Data */}
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
                logo: siteUrl + "/logo.png",
                description:
                  "Productora audiovisual corporativa en Chile especializada en video corporativo y series institucionales.",
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
                potentialAction: {
                  "@type": "SearchAction",
                  target: siteUrl + "/?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Producción Audiovisual Corporativa",
                provider: {
                  "@type": "Organization",
                  name: "Dekaelo Media",
                },
                areaServed: {
                  "@type": "Country",
                  name: "Chile",
                },
                serviceType: [
                  "Video corporativo",
                  "Serie institucional",
                  "Vodcast ejecutivo",
                  "Comunicación corporativa audiovisual",
                ],
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}
