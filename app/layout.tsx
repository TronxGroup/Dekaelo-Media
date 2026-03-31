import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { LayoutShell } from "./components/LayoutShell";

const siteUrl = "https://www.dekaelomedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Dekaelo Media",
  title: {
    default: "Dekaelo Media — Video corporativo y series institucionales en Chile",
    template: "%s | Dekaelo Media",
  },
  description:
    "Convertimos tu contenido en video profesional listo para LinkedIn, YouTube e Instagram. Edición mensual, videos institucionales y vodcast ejecutivos para empresas en Chile.",
  keywords: [
    "video corporativo Chile",
    "edición video empresas Chile",
    "vodcast corporativo Santiago",
    "serie institucional empresa Chile",
    "producción audiovisual corporativa",
  ],
  alternates: { canonical: siteUrl },
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
    title: "Dekaelo Media — Video corporativo en Chile",
    description:
      "Tu empresa genera contenido todos los días. El problema es que nadie lo ve bien. Nosotros lo resolvemos.",
    images: [{ url: siteUrl + "/og-cover.jpg", width: 1200, height: 630, alt: "Dekaelo Media" }],
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dekaelo Media — Video corporativo en Chile",
    description: "Edición mensual, videos institucionales y vodcast ejecutivos para empresas en Chile.",
    images: [siteUrl + "/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

const GA4_ID = "G-96HZDP5PVP";
const ADS_ID = "AW-17760996045";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className="bg-black text-white selection:bg-white selection:text-black">
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}', { anonymize_ip: true, send_page_view: true });
          gtag('config', '${ADS_ID}');
        `}</Script>
        <LayoutShell>{children}</LayoutShell>
        <Script id="schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dekaelo Media",
              url: siteUrl,
              logo: siteUrl + "/logo.png",
              description: "Productora audiovisual corporativa en Chile especializada en video corporativo, edición mensual y series institucionales.",
              sameAs: [
                "https://www.instagram.com/dekaelo_media",
                "https://www.youtube.com/@dekaelo_media",
                "https://www.linkedin.com/company/dekaelo-media",
              ],
              contactPoint: { "@type": "ContactPoint", telephone: "+56-9-2008-0031", contactType: "sales", areaServed: "CL", availableLanguage: ["Spanish"] },
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
              name: "Video Corporativo",
              provider: { "@type": "Organization", name: "Dekaelo Media" },
              areaServed: { "@type": "Country", name: "Chile" },
              serviceType: ["Video corporativo", "Edición de video mensual", "Serie institucional", "Vodcast ejecutivo"],
            },
          ]),
        }} />
      </body>
    </html>
  );
}
