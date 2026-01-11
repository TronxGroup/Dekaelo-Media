// app/corporativo/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

import { VideoEmbed } from "../components/VideoEmbed";
import { ClientLogos } from "../components/ClientLogos";
import MiniZohoLeadForm from "./components/MiniZohoLeadForm";

const SITE_URL = "https://www.dekaelomedia.com";
const CANONICAL = `${SITE_URL}/corporativo`;

// WhatsApp: +56 9 2008 0031 -> wa.me/56920080031
const WHATSAPP_NUMBER = "56920080031";

type WaIntent = "oneoff" | "monthly" | "vodcast" | "general";

function buildWhatsAppLink(intent: WaIntent = "general") {
  const intentLabel: Record<WaIntent, string> = {
    oneoff: "Video corporativo (proyecto puntual)",
    monthly: "Plan audiovisual mensual",
    vodcast: "Vodcast corporativo",
    general: "Cotización audiovisual corporativa",
  };

  // ✅ Versión corta (ads-friendly)
  const text =
    `Hola Dekaelo Media.\n` +
    `Quiero cotizar: ${intentLabel[intent]}\n\n` +
    `Empresa:\n` +
    `Ciudad y fecha:\n` +
    `Objetivo (marca / ventas / RRHH / interna):\n`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Video Corporativo en Chile | Dekaelo Media",
  description:
    "Video corporativo, institucional y vodcast para empresas en Chile. Calidad cinematográfica + entregables listos para LinkedIn, YouTube e interna. Cotiza por formulario corto o WhatsApp.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Video corporativo para empresas | Dekaelo Media",
    description:
      "Institucionales, vodcasts y plan mensual. Proceso claro, audio impecable y entregas por plataforma. Cotiza sin llamada.",
    url: CANONICAL,
    type: "website",
    siteName: "Dekaelo Media",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video corporativo para empresas | Dekaelo Media",
    description:
      "Institucionales, vodcasts y plan mensual. Cotiza por formulario corto o WhatsApp.",
  },
  robots: { index: true, follow: true },
};

const OFFERS = [
  {
    title: "Video corporativo / institucional",
    subtitle: "Para marca, cultura, ventas, RR.HH. y comunicación interna.",
    bullets: ["Brief + pauta/guion simple", "Grabación profesional + audio limpio", "Edición final + entregas por formato"],
    cta: { label: "Cotizar video corporativo", intent: "oneoff" as const },
  },
  {
    title: "Vodcast corporativo",
    subtitle: "Serie o episodio multicámara (podcast en video).",
    bullets: ["Set + iluminación + audio pro", "Edición multicámara + color", "Clips cortos para difusión"],
    cta: { label: "Cotizar vodcast", intent: "vodcast" as const },
  },
  {
    title: "Plan audiovisual mensual",
    subtitle: "Contenido constante sin armar equipo in-house.",
    bullets: ["Jornada de grabación + piezas del mes", "Reels/cápsulas por plataforma", "Asesoría + guion/pauta"],
    cta: { label: "Cotizar plan mensual", intent: "monthly" as const },
  },
];

export default function Page() {
  const waHero = buildWhatsAppLink("oneoff");
  const waGeneral = buildWhatsAppLink("general");
  const waMonthly = buildWhatsAppLink("monthly");

  return (
    <section>
      {/* Sticky CTA (mobile) */}
      <div className="fixed bottom-3 left-0 right-0 z-50 md:hidden">
        <div className="container">
          <div className="p-2 rounded-2xl bg-black/70 border border-white/10 backdrop-blur flex gap-2">
            <a href="#cotizar" className="btn flex-1 text-center" data-cta="corp_sticky_form">
              Cotizar
            </a>
            <a
              href={waGeneral}
              className="btn-outline flex-1 text-center"
              data-cta="corp_sticky_whatsapp"
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
            <span className="badge">Video corporativo para empresas</span>

            <h1 className="h1 mt-3 text-[2.05rem] leading-[1.12] sm:text-[2.45rem]">
              Un video corporativo que se usa <span className="text-white/80">(no queda guardado)</span>
            </h1>

            <p className="p mt-4">
              Producimos <strong>institucionales</strong>, <strong>vodcasts</strong> y <strong>planes mensuales</strong>{" "}
              con estándar alto y enfoque práctico: piezas listas para <strong>LinkedIn</strong>, <strong>YouTube</strong>{" "}
              e interna. Proceso claro, audio impecable y entregas por plataforma.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#cotizar" className="btn" data-cta="corp_hero_form">
                Cotizar (2 min)
              </a>
              <a
                href={waHero}
                className="btn-outline"
                data-cta="corp_hero_whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <Link href="/portafolio" className="btn-outline" data-cta="corp_hero_portfolio">
                Ver ejemplos
              </Link>
            </div>

            <p className="mt-3 text-xs text-white/50">
              Respuesta típica: <span className="text-white/70 font-semibold">24–48 hrs hábiles</span>. Trabajamos con
              pocos proyectos al mes para cuidar estándar y plazos.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-xs text-white/70">
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                <div className="font-semibold text-white">Audio impecable</div>
                <div className="mt-1">Entrevistas limpias</div>
              </div>
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                <div className="font-semibold text-white">Entrega por formato</div>
                <div className="mt-1">LinkedIn / YouTube / interna</div>
              </div>
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                <div className="font-semibold text-white">Proceso claro</div>
                <div className="mt-1">Brief → rodaje → edición</div>
              </div>
            </div>
          </div>

          {/* REEL (prueba visual rápida) */}
          <VideoEmbed
            src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0&start=0&modestbranding=1&playsinline=1"
            title="Reel Dekaelo Media — Corporativo"
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

      {/* OFFERS (3) */}
      <section className="container py-16">
        <div className="max-w-3xl">
          <h2 className="h2">Elige tu formato (te guiamos)</h2>
          <p className="text-white/70 mt-2">
            Tres caminos, sin vueltas. Si no sabes cuál pedir, envía objetivo + fecha/ciudad y te recomendamos formato y
            entregables.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-10">
          {OFFERS.map((o) => {
            const wa = buildWhatsAppLink(o.cta.intent);

            return (
              <div key={o.title} className="card p-7 border border-white/10">
                <h3 className="font-semibold text-lg">{o.title}</h3>
                <p className="text-white/70 mt-2 text-sm">{o.subtitle}</p>

                <ul className="mt-4 space-y-2 text-white/80 text-sm">
                  {o.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3 flex-wrap">
                  <a href="#cotizar" className="btn" data-cta={`corp_offer_${o.cta.intent}_form`}>
                    {o.cta.label}
                  </a>
                  <a
                    href={wa}
                    className="btn-outline"
                    data-cta={`corp_offer_${o.cta.intent}_whatsapp`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                  <Link
                    href="/portafolio"
                    className="underline underline-offset-4 text-white/70 hover:text-white"
                    data-cta={`corp_offer_${o.cta.intent}_portfolio`}
                  >
                    Ver ejemplos →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MINI FORM */}
      <section id="cotizar" className="bg-black/40 border-y border-white/10">
        <div className="container py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="h2">Cotiza en 2 minutos</h2>
              <p className="text-white/70 mt-2">
                Con <strong>3–5 datos</strong> basta para partir. Te respondemos con propuesta clara (alcance recomendado,
                tiempos y próximos pasos).
              </p>

              <div className="mt-6 p-6 rounded-2xl bg-black/40 border border-white/10">
                <MiniZohoLeadForm />
              </div>

              <div className="mt-4 flex gap-3 flex-wrap">
                <a
                  href={waGeneral}
                  className="btn-outline"
                  data-cta="corp_form_whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prefiero WhatsApp →
                </a>
                <a
                  href={waMonthly}
                  className="btn-outline"
                  data-cta="corp_form_whatsapp_monthly"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp (Plan mensual) →
                </a>
              </div>

              <p className="mt-4 text-xs text-white/50">
                Si tu fecha es dentro de los próximos 10 días, indícalo para confirmar disponibilidad.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-black/60 border border-white/10">
              <h3 className="font-semibold text-lg text-white">Qué recibes al cotizar</h3>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                <li>• Recomendación de formato (institucional / vodcast / plan)</li>
                <li>• Estimación de alcance + entregables por plataforma</li>
                <li>• Cronograma y próximos pasos</li>
              </ul>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-white/70 text-sm">
                  ¿Solo quieres ver trabajos primero? Perfecto.
                </p>
                <div className="mt-4 flex gap-3 flex-wrap">
                  <Link href="/portafolio" className="btn-outline" data-cta="corp_side_portfolio">
                    Ver portafolio →
                  </Link>
                  <Link href="/contacto#form" className="btn-outline" data-cta="corp_side_full_contact">
                    Formulario completo →
                  </Link>
                </div>
              </div>

              <p className="mt-6 text-xs text-white/50">
                *Landing pensada para empresas. No realizamos bodas o videos familiares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container py-16">
        <div className="p-8 md:p-10 rounded-3xl bg-black/60 border border-white/10 text-center">
          <h2 className="h2 mb-3">¿Listo para avanzar?</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Envíanos objetivo + fecha/ciudad y te respondemos con propuesta clara. Sin llamadas obligatorias.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href="#cotizar" className="btn" data-cta="corp_final_form">
              Cotizar
            </a>
            <a
              href={waGeneral}
              className="btn-outline"
              data-cta="corp_final_whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
