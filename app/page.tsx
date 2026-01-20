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
      "Promoción $750.000 + IVA solo en enero y febrero (puedes grabar en marzo). Cotiza por WhatsApp o formulario.",
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

const TRUST = [
  { t: "Proceso simple", d: "Brief → grabación → entrega" },
  { t: "Audio + imagen", d: "Se ve y suena profesional" },
  { t: "Listo para usar", d: "Web, LinkedIn, YouTube" },
] as const;

const WHO = [
  "Empresas que necesitan un video institucional / corporativo usable por años",
  "Servicios B2B que venden con confianza (web, LinkedIn, presentaciones)",
  "RRHH / cultura interna: onboarding, valores, marca empleadora",
] as const;

const NOT_FOR = [
  "Búsquedas de edición barata, plantillas o “video gratis”",
  "Eventos sociales (matrimonios, cumpleaños, etc.)",
  "Quienes no tienen disponibilidad mínima para coordinar 1 brief corto",
] as const;

const INCLUDED = [
  "Brief guiado (te ayudamos a aterrizar mensaje y enfoque)",
  "Grabación profesional (imagen cuidada + audio limpio)",
  "Edición + entrega lista para publicar",
  "Versiones base para web / YouTube / LinkedIn (según formato)",
] as const;

const NOT_INCLUDED = [
  "Actores/locaciones especiales (si se requieren, se cotiza)",
  "Motion graphics complejos / animación extensa (opcional)",
  "Pauta de medios / compra de anuncios (esto es producción)",
] as const;

const STEPS = [
  { n: "1", t: "Dinos el objetivo", d: "Marca / ventas / RRHH / interna. 1 minuto." },
  { n: "2", t: "Agendamos rodaje", d: "Fechas disponibles. Puede ser marzo." },
  { n: "3", t: "Entregamos listo", d: "Video final + versiones por plataforma." },
] as const;

export default function Page() {
  const businessJsonLd = buildLocalBusinessJsonLd();

  const waPromo = buildWhatsAppLink({ intent: "promo" });
  const waSticky = buildWhatsAppLink({ intent: "promo" });

  return (
    <section>
      {/* JSON-LD */}
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
      <div className="container pt-16 md:pt-24 pb-10 md:pb-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge">Promoción limitada</span>

            <h1 className="h1 mt-3 text-[2.05rem] leading-[1.12] sm:text-[2.45rem]">
              Videos para empresas
            </h1>

            <p className="p mt-4">
              Un video corporativo que <strong>se entiende</strong> y <strong>se usa</strong> (web, LinkedIn, presentaciones).
              <br />
              <strong>Oferta: {PROMO.price}</strong> solo en <strong>{PROMO.months}</strong>.{" "}
              <span className="text-white/80">{PROMO.note}.</span>
            </p>

            {/* PROMO CARD */}
            <div className="mt-5 p-5 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-sm text-white/85">
                Incluye: brief guiado + grabación + edición + entrega lista para web/LinkedIn/YouTube.
              </div>
              <div className="text-xs text-white/55 mt-2">
                Cupos limitados. Confirmación por orden de solicitud. Respuesta típica: &lt; 24h hábiles.
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waPromo}
                className="btn"
                data-cta="hero_whatsapp_primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp
              </a>

              <Link href="/contacto#form" className="btn-outline" data-cta="hero_form_secondary">
                Cotizar por formulario
              </Link>

              <Link href="/portafolio" className="btn-outline" data-cta="hero_portfolio">
                Ver ejemplos
              </Link>
            </div>

            {/* Trust bullets */}
            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-xs text-white/70">
              {TRUST.map((b) => (
                <div key={b.t} className="p-3 rounded-2xl bg-black/40 border border-white/10">
                  <div className="font-semibold text-white">{b.t}</div>
                  <div className="mt-1">{b.d}</div>
                </div>
              ))}
            </div>

            {/* Mini firma */}
            <div className="mt-6 flex items-start gap-4 text-white/70 text-sm">
              <Image src="/logo.png" alt="Dekaelo Media" width={34} height={34} className="rounded-lg" />
              <div>
                <p className="text-white/80">
                  No grabamos “por grabar”: te ayudamos a decidir qué conviene mostrar para que el video cumpla un objetivo.
                </p>
                <p className="text-white/60 mt-1">Sin llamadas si no quieres.</p>
              </div>
            </div>
          </div>

          {/* Reel */}
          <VideoEmbed
            src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0&start=0&modestbranding=1&playsinline=1"
            title="Reel Dekaelo Media — Lo mejor"
          />
        </div>
      </div>

      {/* LOGOS */}
      <section className="border-y border-white/10 bg-black/60">
        <div className="container py-10">
          <p className="text-center text-white/50 text-sm mb-6">Confían en nosotros</p>
          <ClientLogos />
        </div>
      </section>

      {/* WHO / NOT FOR */}
      <section className="container py-14">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="p-7 rounded-3xl bg-black/50 border border-white/10">
            <h2 className="text-xl font-bold text-white">¿Para quién es?</h2>
            <ul className="mt-4 space-y-2 text-white/80 text-sm">
              {WHO.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>

          <div className="p-7 rounded-3xl bg-black/30 border border-white/10">
            <h2 className="text-xl font-bold text-white">¿Para quién no es?</h2>
            <ul className="mt-4 space-y-2 text-white/80 text-sm">
              {NOT_FOR.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="container pb-14">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="p-7 rounded-3xl bg-black/50 border border-white/10">
            <h2 className="text-xl font-bold text-white">Qué incluye</h2>
            <ul className="mt-4 space-y-2 text-white/80 text-sm">
              {INCLUDED.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a
                href={waPromo}
                className="btn"
                data-cta="includes_whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar promo por WhatsApp
              </a>
              <Link href="/contacto#form" className="btn-outline" data-cta="includes_form">
                Cotizar por formulario
              </Link>
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-black/30 border border-white/10">
            <h2 className="text-xl font-bold text-white">Qué no incluye</h2>
            <ul className="mt-4 space-y-2 text-white/80 text-sm">
              {NOT_INCLUDED.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/50">
              Si necesitas extras (dron, multicámara, motion, locación especial), lo cotizamos como adicional.
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="border-y border-white/10 bg-black/40">
        <div className="container py-14">
          <h2 className="h2 text-center mb-10">Cómo funciona</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="p-6 rounded-2xl bg-gray-900 border border-white/10">
                <div className="text-xs text-white/50">Paso {s.n}</div>
                <div className="font-semibold text-white mt-2">{s.t}</div>
                <div className="text-sm text-white/70 mt-2">{s.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={waPromo}
              className="btn"
              data-cta="steps_whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar ahora por WhatsApp
            </a>
            <div className="text-xs text-white/50 mt-3">
              * Promoción válida por solicitud en enero y febrero. Grabación puede ser en marzo (según agenda).
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container py-16">
        <div className="p-8 md:p-10 rounded-3xl bg-black/60 border border-white/10 text-center">
          <h2 className="h2 mb-3">Reserva tu cupo de promoción</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Promoción <strong>{PROMO.price}</strong> solo en <strong>{PROMO.months}</strong>.{" "}
            <span className="text-white/80">{PROMO.note}.</span>
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href={waPromo}
              className="btn"
              data-cta="final_whatsapp_primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar por WhatsApp
            </a>
            <Link href="/contacto#form" className="btn-outline" data-cta="final_form_secondary">
              Cotizar por formulario
            </Link>
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
