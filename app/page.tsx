// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { VideoEmbed } from "./components/VideoEmbed";
import { ClientLogos } from "./components/ClientLogos";

const SITE_URL = "https://www.dekaelomedia.com";
const CANONICAL = `${SITE_URL}/`;
const WHATSAPP_NUMBER = "56920080031";

// Promo
const PROMO = {
  price: "$750.000 + IVA",
  months: "enero y febrero",
  note: "Puedes grabar en marzo",
} as const;

export const metadata: Metadata = {
  title: "Dekaelo Media | Videos para empresas | Promoción $750.000 + IVA",
  description:
    "Videos corporativos para empresas en Chile. Promoción $750.000 + IVA solo en enero y febrero. Puedes grabar en marzo. Cotiza rápido por WhatsApp o formulario.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Dekaelo Media | Videos para empresas",
    description:
      "Promoción $750.000 + IVA solo en enero y febrero (puedes grabar en marzo). Cotiza por WhatsApp o formulario.",
    url: CANONICAL,
    type: "website",
    siteName: "Dekaelo Media",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dekaelo Media | Videos para empresas",
    description:
      "Promoción $750.000 + IVA solo en enero y febrero (puedes grabar en marzo).",
  },
  robots: { index: true, follow: true },
};

type WaIntent = "promo" | "general";

function buildWhatsAppLink(opts?: { intent?: WaIntent }) {
  const intent = opts?.intent ?? "general";

  const intro =
    intent === "promo"
      ? `Hola Dekaelo Media.\nQuiero la promoción de video corporativo (${PROMO.price}).\n\n`
      : `Hola Dekaelo Media.\nQuiero cotizar un video para mi empresa.\n\n`;

  const text =
    intro +
    `Empresa:\n` +
    `Ciudad:\n` +
    `Fecha tentativa (puede ser marzo):\n` +
    `Objetivo (marca / ventas / RRHH / interna):\n` +
    `¿Qué quieres grabar? (1 frase):\n` +
    `Referencias (links) (opcional):\n`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dekaelo Media",
    url: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    areaServed: "CL",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
      addressLocality: "Santiago",
    },
    sameAs: [
      "https://www.instagram.com/dekaelo_media",
      "https://www.youtube.com/@dekaelo_media",
      "https://www.linkedin.com/company/dekaelo-media",
    ],
  };
}

export default function Page() {
  const businessJsonLd = buildLocalBusinessJsonLd();

  const waHero = buildWhatsAppLink({ intent: "promo" });
  const waSticky = buildWhatsAppLink({ intent: "promo" });

  return (
    <section>
      {/* JSON-LD (sin FAQ) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />

      {/* Sticky CTA (mobile) */}
      <div className="fixed bottom-3 left-0 right-0 z-50 md:hidden">
        <div className="container">
          <div className="p-2 rounded-2xl bg-black/70 border border-white/10 backdrop-blur flex gap-2">
            <Link href="/contacto#form" className="btn flex-1 text-center" data-cta="sticky_form">
              Cotizar
            </Link>
            <a
              href={waSticky}
              className="btn-outline flex-1 text-center"
              data-cta="sticky_whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div className="container pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge">Promoción limitada</span>

            <h1 className="h1 mt-3 text-[2.05rem] leading-[1.12] sm:text-[2.35rem]">
              Videos para empresas
            </h1>

            <p className="p mt-4">
              Video corporativo profesional para presentar tu empresa, servicio o equipo.
              <strong> Oferta: {PROMO.price}</strong> solo en <strong>{PROMO.months}</strong>.{" "}
              <span className="text-white/80">{PROMO.note}.</span>
            </p>

            <div className="mt-5 p-4 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-sm text-white/80">
                Incluye: brief + grabación + edición + entrega lista para web/LinkedIn/YouTube.
              </div>
              <div className="text-xs text-white/50 mt-2">
                Cupos limitados. Confirmación por orden de solicitud.
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contacto#form" className="btn" data-cta="hero_form">
                Cotizar (sin llamada)
              </Link>

              <a
                href={waHero}
                className="btn-outline"
                data-cta="hero_whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>

              <Link href="/portafolio" className="btn-outline" data-cta="hero_portfolio">
                Ver ejemplos
              </Link>
            </div>

            {/* Trust bullets (corto) */}
            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-xs text-white/70">
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                <div className="font-semibold text-white">Proceso simple</div>
                <div className="mt-1">Brief → grabación → entrega</div>
              </div>
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                <div className="font-semibold text-white">Audio + imagen</div>
                <div className="mt-1">Se ve y suena pro</div>
              </div>
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                <div className="font-semibold text-white">Listo para usar</div>
                <div className="mt-1">Web, LinkedIn, YouTube</div>
              </div>
            </div>

            {/* Mini firma */}
            <div className="mt-6 flex items-start gap-4 text-white/70 text-sm">
              <Image src="/logo.png" alt="Dekaelo Media" width={34} height={34} className="rounded-lg" />
              <div>
                <p className="text-white/80">Respondemos por WhatsApp o formulario con una propuesta clara.</p>
                <p className="text-white/60 mt-1">Sin llamadas si no quieres.</p>
              </div>
            </div>
          </div>

          {/* Reel (mantengo 1 solo video) */}
          <VideoEmbed
            src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0&start=0&modestbranding=1&playsinline=1"
            title="Reel Dekaelo Media — Lo mejor"
          />
        </div>
      </div>

      {/* LOGOS (confianza rápida) */}
      <section className="border-y border-white/10 bg-black/60">
        <div className="container py-10">
          <p className="text-center text-white/50 text-sm mb-6">Confían en nosotros</p>
          <ClientLogos />
        </div>
      </section>

      {/* CTA final (sin secciones largas) */}
      <section className="container py-16">
        <div className="p-8 md:p-10 rounded-3xl bg-black/60 border border-white/10 text-center">
          <h2 className="h2 mb-3">Reserva tu cupo de promoción</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Promoción <strong>{PROMO.price}</strong> solo en <strong>{PROMO.months}</strong>.{" "}
            <span className="text-white/80">{PROMO.note}.</span>
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/contacto#form" className="btn" data-cta="final_form">
              Cotizar
            </Link>
            <a
              href={waHero}
              className="btn-outline"
              data-cta="final_whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <Link href="/portafolio" className="btn-outline" data-cta="final_portfolio">
              Ver ejemplos
            </Link>
          </div>

          <p className="text-xs text-white/50 mt-5">
            * Promoción válida por solicitud en enero y febrero. Grabación puede ser en marzo (según agenda).
          </p>
        </div>
      </section>
    </section>
  );
}
