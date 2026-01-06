// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { VideoEmbed } from "./components/VideoEmbed";
import { ClientLogos } from "./components/ClientLogos";

const SITE_URL = "https://www.dekaelomedia.com";
const CANONICAL = `${SITE_URL}/`;

// WhatsApp correcto: +56 9 2008 0031  -> wa.me/56920080031
const WHATSAPP_NUMBER = "56920080031";

/**
 * ✅ PRECIOS NUEVOS (reposicionamiento corporativo)
 * - Planes mensuales (IVA incluido):
 *   Básico:   $750.000
 *   Estándar: $1.290.000
 *   Premium:  $1.750.000
 *
 * - Anclas de "desde" (IVA incluido):
 *   Proyectos puntuales desde: $1.200.000
 *   Cobertura de eventos desde: $850.000
 */
const PRICING = {
  oneOffFrom: "$1.200.000",
  eventFrom: "$850.000",
  plansFrom: "$750.000",
  planBasic: "$750.000",
  planStandard: "$1.290.000",
  planPremium: "$1.750.000",
} as const;

export const metadata: Metadata = {
  title: "Dekaelo Media | Productora Audiovisual | Videos Corporativos en Chile",
  description:
    "Producimos videos corporativos, institucionales y vodcasts para empresas en Chile. Calidad cinematográfica, enfoque estratégico y entregables listos para redes, directorios y comunicación interna.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Dekaelo Media | Videos corporativos y contenido audiovisual estratégico",
    description:
      "Videos corporativos, institucionales y vodcasts para empresas en Chile. Calidad cinematográfica y foco en objetivos de negocio.",
    url: CANONICAL,
    type: "website",
    siteName: "Dekaelo Media",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dekaelo Media | Videos corporativos en Chile",
    description:
      "Videos corporativos, institucionales y vodcasts para empresas en Chile. Calidad cinematográfica y entregables por plataforma.",
  },
  robots: { index: true, follow: true },
};

const FAQ = [
  {
    q: "¿Cuánto demora un video corporativo?",
    a: "Depende del formato, pero normalmente entregamos entre 7 y 14 días hábiles desde la grabación. En proyectos urgentes, podemos priorizar entregas.",
  },
  {
    q: "¿Ustedes ayudan con guion y enfoque?",
    a: "Sí. Podemos partir desde una pauta simple o construir guion, estructura y preguntas de entrevista para que el mensaje salga claro y natural.",
  },
  {
    q: "¿Qué entregan para redes sociales?",
    a: "Además del video principal, entregamos reels/shorts optimizados por formato (vertical/horizontal), duración y plataforma.",
  },
  {
    q: "¿Trabajan en Santiago y regiones?",
    a: "Sí. Grabamos en Santiago y también viajamos a regiones. Los traslados/viáticos se cotizan según ubicación y logística.",
  },
  {
    q: "¿Incluyen música y post de audio?",
    a: "Sí. Incluimos música licenciada/stock según el proyecto, mezcla de audio, limpieza y nivelación para que suene profesional.",
  },
  {
    q: "¿Cómo cotizo si no quiero llamadas?",
    a: "Perfecto. Envíanos tu brief por el formulario o WhatsApp (objetivo, fecha, ciudad y referencias). Respondemos con una propuesta clara.",
  },
];

const PROCESS = [
  { n: "01", title: "Brief y objetivo", desc: "Definimos audiencia, mensaje, tono y qué debe lograr el video." },
  { n: "02", title: "Guion / pauta", desc: "Estructura clara + preguntas para entrevistas y testimonios." },
  { n: "03", title: "Grabación profesional", desc: "Imagen cuidada, audio limpio, iluminación y dirección en set." },
  { n: "04", title: "Edición y entregas", desc: "Corte final + versiones por plataforma + ronda de ajustes." },
];

const OFFERS = [
  {
    title: "Video corporativo / institucional (proyecto puntual)",
    price: `Desde ${PRICING.oneOffFrom} (IVA incl.)`,
    who: "Marketing, comunicaciones, ventas, cultura, marca empleadora.",
    meta: "Entrega típica: 7–14 días hábiles (según formato).",
    bullets: [
      "Brief + pauta/guion simple (te guiamos)",
      "Grabación 4K + audio limpio + dirección en set",
      "Edición cinematográfica + música stock/licenciada",
      "Entrega lista para LinkedIn / YouTube + cortes para redes (según alcance)",
    ],
    ctaKey: "oneoff",
  },
  {
    title: "Vodcast corporativo (serie o episodio)",
    price: "Formato profesional multicámara (cotización según set y cantidad)",
    who: "Innovación, cultura, liderazgo, contenido B2B de largo plazo.",
    meta: "Ideal para liderazgo, cultura y posicionamiento interno/externo.",
    bullets: [
      "Set + iluminación + multicámara",
      "Audio pro + limpieza + mezcla",
      "Edición multicámara + color + gráficas básicas (opcional)",
      "Clips cortos para difusión interna/externa",
    ],
    ctaKey: "vodcast",
  },
  {
    title: "Cobertura de eventos / aftermovie",
    price: `Desde ${PRICING.eventFrom} (IVA incl.)`,
    who: "Charlas, lanzamientos, conferencias, hitos internos y cultura.",
    meta: "Entrega: highlight + clips (según alcance).",
    bullets: [
      "Registro + highlights para difusión",
      "Testimonios / vox pop (opcional)",
      "Clips verticales para redes",
      "Entrega optimizada por plataforma",
    ],
    ctaKey: "eventos",
  },
];

/**
 * ✅ WhatsApp (campaña-friendly y SIN EMOJIS)
 * - Permite pasar intent (oneoff/monthly/vodcast/eventos/general)
 * - Agrega UTM como línea final (para trazabilidad humana)
 * - Texto corto y claro
 * - Para planes: "Plan mensual" (no "video corporativo")
 */
type WaIntent = "oneoff" | "monthly" | "vodcast" | "eventos" | "general";
type WaContext =
  | "sticky"
  | "hero"
  | "offers_oneoff"
  | "offers_vodcast"
  | "offers_eventos"
  | "cases"
  | "monthly"
  | "process"
  | "oneoff"
  | "plans"
  | "faq"
  | "final";

function buildWhatsAppLink(opts?: {
  intent?: WaIntent;
  context?: WaContext;
  cta?: string; // data-cta
}) {
  const intent = opts?.intent ?? "general";
  const context = opts?.context ?? "hero";
  const cta = opts?.cta ?? "";

  const intentLabel: Record<WaIntent, string> = {
    oneoff: "Video corporativo (proyecto puntual)",
    monthly: "Plan mensual audiovisual",
    vodcast: "Vodcast corporativo",
    eventos: "Cobertura de evento / aftermovie",
    general: "Cotización audiovisual",
  };

  // Mensaje SIN emojis
  const text =
    `Hola Dekaelo Media.\n` +
    `Quiero cotizar: ${intentLabel[intent]}\n\n` +
    `Empresa:\n` +
    `Ciudad / fecha tentativa:\n` +
    `Objetivo (marca / ventas / RRHH / interna):\n` +
    `Presupuesto estimado (aprox):\n` +
    `Referencias (links) (opcional):\n\n` +
    `Enviado desde: ${context}${cta ? ` · ${cta}` : ""}`;

  const utm = new URLSearchParams({
    utm_source: "whatsapp",
    utm_medium: "cta",
    utm_campaign: "search_videos_corporativos",
    utm_content: `${context}${cta ? `_${cta}` : ""}`,
    utm_term: intent,
  }).toString();

  const withUtm = `${text}\n\nUTM: ${utm}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(withUtm)}`;
}

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
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

function slugifyKey(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

export default function Page() {
  const faqJsonLd = buildFaqJsonLd();
  const businessJsonLd = buildLocalBusinessJsonLd();

  // Links WA por contexto (mejor atribución + mejor intención)
  const waHero = buildWhatsAppLink({ intent: "oneoff", context: "hero", cta: "hero_whatsapp" });
  const waSticky = buildWhatsAppLink({ intent: "general", context: "sticky", cta: "sticky_whatsapp" });
  const waMonthly = buildWhatsAppLink({ intent: "monthly", context: "monthly", cta: "monthly_whatsapp" });
  const waPlans = buildWhatsAppLink({ intent: "monthly", context: "plans", cta: "plans_whatsapp" });
  const waProcess = buildWhatsAppLink({ intent: "general", context: "process", cta: "process_whatsapp" });
  const waOneoff = buildWhatsAppLink({ intent: "oneoff", context: "oneoff", cta: "oneoff_whatsapp" });
  const waFAQ = buildWhatsAppLink({ intent: "general", context: "faq", cta: "faq_whatsapp" });
  const waFinal = buildWhatsAppLink({ intent: "general", context: "final", cta: "final_whatsapp" });
  const waCases = buildWhatsAppLink({ intent: "general", context: "cases", cta: "cases_whatsapp" });

  return (
    <section>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />

      {/* Sticky CTA (mobile-first) */}
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
            <span className="badge">Video corporativo para empresas</span>

            <h1 className="h1 mt-3 text-[2.05rem] leading-[1.12] sm:text-[2.35rem]">
              Un video corporativo que se usa{" "}
              <span className="text-white/80">(no queda guardado)</span>
            </h1>

            <p className="p mt-4">
              Producimos <strong>videos corporativos</strong> y <strong>vodcasts</strong> con{" "}
              <strong>calidad cinematográfica</strong>, pero pensados para negocio: reputación, RR.HH., cultura, ventas y
              comunicación interna. Grabación 4K, audio impecable y entregas listas para{" "}
              <strong>LinkedIn</strong>, <strong>YouTube</strong> o intranet.
            </p>

            {/* Anclas de precio duales (one-off + plan mensual) */}
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p>
                <span className="font-semibold text-white">
                  Proyecto puntual desde {PRICING.oneOffFrom} CLP
                </span>{" "}
                (IVA incluido) · Entrega típica: <strong>7–14 días hábiles</strong>.
              </p>
              <p>
                <span className="font-semibold text-white">
                  Plan mensual desde {PRICING.plansFrom} CLP
                </span>{" "}
                (IVA incluido) · Para equipos que necesitan contenido constante.
              </p>
            </div>

            <p className="mt-3 text-xs text-white/50">
              Trabajamos con <span className="text-white/70 font-semibold">pocos proyectos al mes</span> para cuidar
              estándar y plazos. Si tu fecha es urgente, cuéntanos y vemos factibilidad.
            </p>

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
                Enviar WhatsApp
              </a>

              <Link href="/portafolio" className="btn-outline" data-cta="hero_portfolio">
                Ver ejemplos
              </Link>
            </div>

            {/* TRUST */}
            <div className="mt-6 flex items-start gap-4 text-white/70 text-sm">
              <Image src="/logo.png" alt="Dekaelo Media" width={34} height={34} className="rounded-lg" />
              <div>
                <p className="text-white/80">Te guiamos desde el concepto y guion, hasta el rodaje y la edición final.</p>
                <p className="text-white/60 mt-1">
                  Sin llamadas: envía el brief por formulario o WhatsApp y respondemos con propuesta clara.
                </p>
              </div>
            </div>

            {/* MICRO BENEFITS */}
            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-xs text-white/70">
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                <div className="font-semibold text-white">Audio impecable</div>
                <div className="mt-1">Entrevistas limpias</div>
              </div>
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                <div className="font-semibold text-white">Entrega por formato</div>
                <div className="mt-1">Versiones por plataforma</div>
              </div>
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                <div className="font-semibold text-white">Proceso claro</div>
                <div className="mt-1">Brief → guion → rodaje</div>
              </div>
            </div>
          </div>

          {/* MAIN REEL */}
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

      {/* OFFERS (ads-friendly) */}
      <section id="servicios" className="container py-16">
        <div className="max-w-3xl">
          <h2 className="h2">Elige tu formato (te guiamos)</h2>
          <p className="text-white/70 mt-2">
            Para campañas de Google, lo más común es: <strong>1 video institucional</strong>, <strong>1 vodcast</strong>{" "}
            o <strong>cobertura de un evento</strong>. Si no sabes qué pedir, descríbenos el objetivo y te recomendamos
            formato, duración y entregables.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-10">
          {OFFERS.map((o) => {
            const key = slugifyKey(o.ctaKey);

            const waOffer =
              o.ctaKey === "oneoff"
                ? buildWhatsAppLink({ intent: "oneoff", context: "offers_oneoff", cta: `offer_${key}_whatsapp` })
                : o.ctaKey === "vodcast"
                ? buildWhatsAppLink({ intent: "vodcast", context: "offers_vodcast", cta: `offer_${key}_whatsapp` })
                : buildWhatsAppLink({ intent: "eventos", context: "offers_eventos", cta: `offer_${key}_whatsapp` });

            return (
              <div key={o.title} className="card p-7 border border-white/10">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-lg">{o.title}</h3>
                  <span className="text-xs text-white/60">{o.price}</span>
                </div>

                <p className="text-white/70 mt-2 text-sm">{o.who}</p>
                <div className="mt-2 text-xs text-white/50">{o.meta}</div>

                <ul className="mt-4 space-y-2 text-white/80 text-sm">
                  {o.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3 flex-wrap">
                  <Link href="/contacto#form" className="btn" data-cta={`offer_${key}_form`}>
                    Cotizar
                  </Link>
                  <a
                    href={waOffer}
                    className="btn-outline"
                    data-cta={`offer_${key}_whatsapp`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                  <Link
                    href="/portafolio"
                    className="underline underline-offset-4 text-white/70 hover:text-white"
                    data-cta={`offer_${key}_portfolio`}
                  >
                    Ver ejemplos →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CASES (trust) */}
      <section className="container py-16">
        <h2 className="h2 text-center mb-12">Casos destacados</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card p-6 border border-white/10">
            <h3 className="font-semibold text-lg">Innova Talks — Banco BICE</h3>
            <p className="text-white/70 mt-2">
              Vodcast corporativo en video con entrevistas. Formato para posicionar cultura, iniciativas y liderazgo.
            </p>
            <div className="mt-4 text-xs text-white/50">Entregas listas para difusión interna/externa + clips cortos.</div>
          </div>

          <div className="card p-6 border border-white/10">
            <h3 className="font-semibold text-lg">Creando Líderes para Asia — APCC</h3>
            <p className="text-white/70 mt-2">
              Serie de episodios + clips reutilizables para YouTube, LinkedIn y newsletters.
            </p>
            <div className="mt-4 text-xs text-white/50">Piezas pensadas para comunicar valor y continuidad.</div>
          </div>

          <div className="card p-6 border border-white/10">
            <h3 className="font-semibold text-lg">Documental 80 Años — Trewhela’s School</h3>
            <p className="text-white/70 mt-2">
              Pieza institucional con versiones y cortes breves para admisión, marketing y redes.
            </p>
            <div className="mt-4 text-xs text-white/50">Storytelling largo + recortes de alta utilidad.</div>
          </div>
        </div>

        <div className="text-center mt-10 flex justify-center gap-3 flex-wrap">
          <Link href="/portafolio" className="btn-outline" data-cta="cases_portfolio">
            Ver más trabajos →
          </Link>
          <Link href="/contacto#form" className="btn" data-cta="cases_form">
            Cotizar
          </Link>
          <a href={waCases} className="btn-outline" data-cta="cases_whatsapp" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </section>

      {/* FEATURE: MONTHLY PLAN (upsell) */}
      <section className="bg-black/40 border-y border-white/10">
        <div className="container py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <VideoEmbed
              src="https://www.youtube.com/embed/LAaLA-spVH0?rel=0&start=0&modestbranding=1&playsinline=1"
              title="Reel Dekaelo Media — Otras marcas"
            />

            <div>
              <h2 className="h2">Plan Audiovisual Mensual</h2>
              <p className="text-white/70 mt-2">
                Consistencia + calidad + estrategia. Un partner que produce y deja un “banco de contenido” mensual sin
                armar un equipo in-house.
              </p>

              <p className="mt-4 text-sm text-white/70">
                <span className="font-semibold text-white">
                  Plan Estándar recomendado: {PRICING.planStandard} CLP / mes (IVA incluido).
                </span>{" "}
                Incluye una jornada completa de grabación y piezas suficientes para mantener canales activos.
              </p>

              <ul className="mt-4 space-y-2 text-white/80">
                <li>• 1 jornada de grabación (hasta 8 hrs)</li>
                <li>• 1 video largo institucional / YouTube / vodcast</li>
                <li>• 4–5 reels o cápsulas</li>
                <li>• Guion creativo + asesoría de publicaciones</li>
                <li>• Entregas optimizadas por plataforma</li>
                <li>• 1 revisión incluida</li>
              </ul>

              <div className="mt-6 flex gap-3 flex-wrap">
                <Link href="#planes" className="btn" data-cta="monthly_view_plans">
                  Ver planes
                </Link>
                <Link href="/contacto#form" className="btn-outline" data-cta="monthly_form">
                  Cotizar
                </Link>
                <a
                  href={waMonthly}
                  className="btn-outline"
                  data-cta="monthly_whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp (Plan mensual)
                </a>
              </div>

              <p className="text-xs text-white/50 mt-4">* Ajustamos el plan según calendario, prioridades y cantidad de piezas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="proceso" className="container py-16">
        <div className="max-w-3xl">
          <h2 className="h2">Cómo trabajamos</h2>
          <p className="text-white/70 mt-2">
            Proceso simple, ordenado y rápido. Buscamos que el resultado sea profesional y usable por meses.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {PROCESS.map((p) => (
            <div key={p.n} className="p-6 rounded-2xl bg-gray-900 border border-white/10">
              <div className="text-xs text-white/50">{p.n}</div>
              <div className="font-semibold text-white mt-2">{p.title}</div>
              <div className="text-sm text-white/70 mt-2">{p.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-black/40 border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-white/80">
              <div className="font-semibold text-white">¿Quieres cotizar sin vueltas?</div>
              <div className="text-sm text-white/70 mt-1">
                Envíanos objetivo + fecha + ciudad + presupuesto estimado + referencias. Respondemos con propuesta clara.
              </div>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contacto#form" className="btn" data-cta="process_form">
                Cotizar
              </Link>
              <a
                href={waProcess}
                className="btn-outline"
                data-cta="process_whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ONE-OFF PROJECTS */}
      <section className="bg-black/40 border-y border-white/10">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2">¿Necesitas un proyecto puntual?</h2>
            <p className="text-white/70 mt-2">
              Institucionales, cápsulas, testimonios, registro de eventos y piezas explicativas. Te recomendamos formato,
              duración y enfoque según objetivo.
            </p>
            <p className="mt-3 text-sm text-white/70">
              Sin llamadas: envía el brief por formulario o WhatsApp y te respondemos con propuesta.
            </p>

            <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/10 bg-gray-900 px-4 py-3">
              <span className="text-sm text-white/70">Valores referenciales:</span>
              <span className="text-sm font-semibold text-white">Desde {PRICING.oneOffFrom}</span>
              <span className="text-xs text-white/40">· IVA incluido · alcance según logística y piezas derivadas</span>
            </div>

            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <Link href="/contacto#form" className="btn" data-cta="oneoff_form">
                Cotizar
              </Link>
              <a
                href={waOneoff}
                className="btn-outline"
                data-cta="oneoff_whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp (Proyecto puntual)
              </a>
              <Link href="/portafolio" className="btn-outline" data-cta="oneoff_portfolio">
                Ver ejemplos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="planes" className="bg-black/40 border-y border-white/10">
        <div className="container py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="h2">Planes audiovisuales mensuales</h2>
            <p className="text-white/70 mt-2">
              Valores IVA incluido. Contrato mínimo sugerido: 3 meses. Diseñados para equipos de marketing,
              comunicaciones internas y empresas que necesitan consistencia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {/* Básico */}
            <div className="card p-6 flex flex-col justify-between border border-white/10">
              <div>
                <h3 className="font-semibold text-lg">Básico</h3>
                <p className="text-white/60 text-sm mt-1">Para marcas que comienzan con contenido mensual.</p>
                <p className="mt-4 text-2xl font-bold">
                  {PRICING.planBasic}
                  <span className="block text-xs text-white/60 font-normal">CLP / mes · IVA incluido</span>
                </p>
                <div className="mt-3 text-xs text-white/50">
                  Incluye 1 ciclo de revisión por pieza (ajustes menores). Versiones extra y cambios mayores se cotizan.
                </div>
                <ul className="mt-4 space-y-2 text-white/80 text-sm">
                  <li>• 1 cápsula institucional (máx. 2 min)</li>
                  <li>• 2 reels / shorts / cápsulas</li>
                  <li>• Grabación simple (1 cámara, hasta 3 hrs)</li>
                  <li>• Exportación para 1 plataforma</li>
                  <li>• 1 revisión incluida</li>
                </ul>
              </div>
              <div className="mt-6 flex gap-3">
                <Link href="/contacto#form" className="btn w-full text-center" data-cta="plan_basic_form">
                  Cotizar
                </Link>
              </div>
            </div>

            {/* Estándar */}
            <div className="card p-6 flex flex-col justify-between border border-cyan-400/40 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-cyan-400/60" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300 mb-2">Recomendado</p>
                <h3 className="font-semibold text-lg">Estándar</h3>
                <p className="text-white/60 text-sm mt-1">Para equipos con calendario activo y múltiples canales.</p>
                <p className="mt-4 text-2xl font-bold">
                  {PRICING.planStandard}
                  <span className="block text-xs text-white/60 font-normal">CLP / mes · IVA incluido</span>
                </p>
                <div className="mt-3 text-xs text-white/50">
                  Incluye 1 ciclo de revisión por pieza (ajustes menores). Versiones extra y cambios mayores se cotizan.
                </div>
                <ul className="mt-4 space-y-2 text-white/80 text-sm">
                  <li>• 1 jornada de grabación (8 hrs)</li>
                  <li>• 1 video largo institucional / YouTube / vodcast</li>
                  <li>• 4–5 reels / shorts / cápsulas</li>
                  <li>• Asesoría + guion creativo</li>
                  <li>• 1 revisión incluida</li>
                </ul>
              </div>
              <div className="mt-6 flex gap-3">
                <Link href="/contacto#form" className="btn w-full text-center" data-cta="plan_standard_form">
                  Cotizar
                </Link>
              </div>
            </div>

            {/* Premium */}
            <div className="card p-6 flex flex-col justify-between border border-white/10">
              <div>
                <h3 className="font-semibold text-lg">Premium</h3>
                <p className="text-white/60 text-sm mt-1">Para campañas, lanzamientos y mayor cobertura mensual.</p>
                <p className="mt-4 text-2xl font-bold">
                  {PRICING.planPremium}
                  <span className="block text-xs text-white/60 font-normal">CLP / mes · IVA incluido</span>
                </p>
                <div className="mt-3 text-xs text-white/50">
                  Incluye 2 ciclos de revisión por pieza (ajustes menores). Versiones extra y cambios mayores se cotizan.
                </div>
                <ul className="mt-4 space-y-2 text-white/80 text-sm">
                  <li>• 2 jornadas de grabación (16 hrs)</li>
                  <li>• 2 videos largos de campaña</li>
                  <li>• 8–10 reels / shorts / cápsulas</li>
                  <li>• 2 rondas de revisión</li>
                  <li>• Informe mensual con recomendaciones</li>
                </ul>
              </div>
              <div className="mt-6 flex gap-3">
                <Link href="/contacto#form" className="btn w-full text-center" data-cta="plan_premium_form">
                  Cotizar
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-white/60">
            Todos los planes se pueden ajustar según calendario, equipo y objetivos.
          </p>

          <div className="text-center mt-8">
            <a href={waPlans} className="btn-outline" data-cta="plans_whatsapp" target="_blank" rel="noopener noreferrer">
              Cotizar por WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-black/60 border-y border-white/10">
        <div className="container py-16">
          <h2 className="h2 text-center mb-12">Testimonios</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
              <p className="text-white/80 italic">
                “Muy profesionales y puntuales. El podcast se volvió una herramienta para generar nuevos negocios.”
              </p>
              <p className="mt-4 font-semibold">Víctor Ruz</p>
              <p className="text-sm text-white/60">CEO, IGROMI</p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
              <p className="text-white/80 italic">
                “El video institucional ha sido una inversión de largo plazo y credibilidad.”
              </p>
              <p className="mt-4 font-semibold">William Barhoma</p>
              <p className="text-sm text-white/60">CEO, Exploflex</p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
              <p className="text-white/80 italic">
                “Videos explicativos claros y profesionales. Nuestro video principal se usó durante años.”
              </p>
              <p className="mt-4 font-semibold">Rodrigo González</p>
              <p className="text-sm text-white/60">Gerente Comercial, Acmanet</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="h2 text-center">Preguntas frecuentes</h2>
          <p className="text-white/70 text-center mt-2">Lo más común antes de cotizar. Por formulario o WhatsApp.</p>

          <div className="mt-10 space-y-4">
            {FAQ.map((f) => (
              <details key={f.q} className="p-5 rounded-2xl bg-gray-900 border border-white/10">
                <summary className="cursor-pointer font-semibold text-white">{f.q}</summary>
                <p className="text-white/70 mt-3 text-sm">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="text-center mt-10 flex justify-center gap-3 flex-wrap">
            <Link href="/contacto#form" className="btn" data-cta="faq_form">
              Cotizar →
            </Link>
            <a href={waFAQ} className="btn-outline" data-cta="faq_whatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>

          <p className="text-xs text-white/50 text-center mt-5">Respuesta típica en menos de 24 horas hábiles.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container pb-16">
        <div className="p-8 md:p-10 rounded-3xl bg-black/60 border border-white/10 text-center">
          <h2 className="h2 mb-3">Cotiza tu video corporativo</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Envíanos objetivo, fecha, ciudad, presupuesto estimado y referencias. Te respondemos con propuesta clara
            (valor estimado, cronograma y próximos pasos).
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/contacto#form" className="btn" data-cta="final_form">
              Cotizar
            </Link>
            <a href={waFinal} className="btn-outline" data-cta="final_whatsapp" target="_blank" rel="noopener noreferrer">
              Enviar WhatsApp
            </a>
          </div>

          <p className="text-xs text-white/50 mt-5">
            *Valores referenciales IVA incluido. Alcance definitivo se confirma en propuesta formal según calendario,
            locación y entregables.
          </p>
        </div>
      </section>
    </section>
  );
}
