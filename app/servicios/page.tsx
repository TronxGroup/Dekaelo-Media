// app/servicios/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.dekaelomedia.com";
const CANONICAL = `${SITE_URL}/servicios`;

// WhatsApp: +56 9 2008 0031 -> wa.me/56920080031
const WHATSAPP_NUMBER = "56920080031";

/**
 * ✅ WhatsApp (SIN emojis + con intención)
 * - intent por tipo de solicitud (monthly/oneoff/vodcast/eventos/general)
 * - contexto/cta para trazabilidad humana
 * - UTM como última línea (texto), sin romper el link
 */
type WaIntent = "general" | "monthly" | "oneoff" | "vodcast" | "eventos";
type WaContext =
  | "services_top"
  | "services_hero"
  | "services_plans"
  | "services_oneoff"
  | "services_extras"
  | "services_faq"
  | "services_final";

function buildWhatsAppLink(opts?: { intent?: WaIntent; context?: WaContext; cta?: string }) {
  const intent = opts?.intent ?? "general";
  const context = opts?.context ?? "services_hero";
  const cta = opts?.cta ?? "";

  const intentLabel: Record<WaIntent, string> = {
    general: "Cotización audiovisual",
    monthly: "Plan mensual audiovisual",
    oneoff: "Video corporativo (proyecto puntual)",
    vodcast: "Vodcast corporativo",
    eventos: "Cobertura de evento / aftermovie",
  };

  const text =
    `Hola Dekaelo Media.\n` +
    `Quiero cotizar: ${intentLabel[intent]}\n\n` +
    `Empresa:\n` +
    `Objetivo (marca / ventas / RRHH / interna):\n` +
    `Tipo (plan mensual / institucional / vodcast / reels / evento):\n` +
    `Fecha y ciudad:\n` +
    `Plataformas (LinkedIn / YouTube / Instagram / Intranet):\n` +
    `Presupuesto estimado (si tienes):\n` +
    `Referencias (1–3 links):\n\n` +
    `Enviado desde: ${context}${cta ? ` · ${cta}` : ""}`;

  const utm = new URLSearchParams({
    utm_source: "whatsapp",
    utm_medium: "cta",
    utm_campaign: "search_servicios",
    utm_content: `${context}${cta ? `_${cta}` : ""}`,
    utm_term: intent,
  }).toString();

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${text}\n\nUTM: ${utm}`)}`;
}

function buildFaqJsonLd(faq: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function buildServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Dekaelo Media",
    url: SITE_URL,
    areaServed: "CL",
    serviceType: ["Producción audiovisual", "Videos corporativos", "Vodcast corporativo", "Contenido para redes"],
    image: `${SITE_URL}/og-cover.jpg`,
  };
}

export const metadata: Metadata = {
  title: "Servicios Audiovisuales | Videos Corporativos y Plan Mensual | Dekaelo Media",
  description:
    "Plan audiovisual mensual (partner de contenido) + videos corporativos e institucionales. Entregas listas para LinkedIn, YouTube y comunicación interna. Valores IVA incluido.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Servicios Audiovisuales | Videos Corporativos y Plan Mensual | Dekaelo Media",
    description:
      "Planes mensuales y proyectos puntuales: video corporativo, vodcast, eventos y motion graphics. Calidad cinematográfica, foco en objetivos.",
    images: ["/og-cover.jpg"],
  },
  twitter: { card: "summary_large_image" },
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
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

export default function Page() {
  /**
   * BENEFICIOS (plan mensual)
   */
  const beneficios = [
    {
      t: "Un partner mensual (no un video aislado)",
      d: "Gestionamos calendario, guion, rodaje y postproducción. Tu equipo define objetivos y aprueba. Menos fricción, más continuidad.",
    },
    {
      t: "Contenido reutilizable",
      d: "De una jornada salen una pieza principal + clips + versiones por plataforma (LinkedIn, YouTube, reels e intranet).",
    },
    {
      t: "Estándar corporativo",
      d: "Alcance y entregables por escrito, hitos claros y revisiones acotadas. Material listo para directorio, RRHH y marketing.",
    },
    {
      t: "Proceso ordenado",
      d: "Planificación simple para evitar urgencias de última hora. Plazos realistas y calidad constante.",
    },
    {
      t: "Coherencia de marca",
      d: "Un look & tone consistente en todo el contenido: se nota profesional, se entiende mejor y se vuelve usable.",
    },
    {
      t: "Aprendizaje mensual",
      d: "Revisión básica para identificar qué formato rinde mejor y ajustar duración, mensajes y estilo por canal.",
    },
  ];

  /**
   * ✅ Planes Mensuales (IVA incl.)
   */
  const planes = [
    {
      key: "basico",
      nombre: "Básico",
      subtitulo: "Para iniciar presencia mensual con calidad profesional",
      precio: "$750.000",
      destacado: false,
      bullets: [
        "1 cápsula institucional (máx. 2 min)",
        "2 reels / shorts / cápsulas",
        "Grabación simple (1 cámara, hasta 3 hrs)",
        "Exportación optimizada para 1 plataforma",
        "1 revisión incluida por pieza (ajustes menores)",
        "Pauta/guion + dirección (te guiamos)",
        "Entregas listas para publicar",
      ],
      ctaLabel: "Cotizar Básico",
    },
    {
      key: "estandar",
      nombre: "Estándar",
      subtitulo: "El plan recomendado para equipos corporativos",
      precio: "$1.290.000",
      destacado: true,
      bullets: [
        "1 jornada de grabación (hasta 8 hrs)",
        "1 video largo institucional / YouTube / vodcast",
        "4–5 reels / shorts / cápsulas",
        "Guion creativo + pauta de entrevistas",
        "Entrega optimizada por plataforma",
        "1 revisión incluida por pieza (ajustes menores)",
        "Informe mensual estratégico básico",
        "Entregas listas para LinkedIn / YouTube / redes / intranet",
      ],
      ctaLabel: "Cotizar Estándar (recomendado)",
    },
    {
      key: "premium",
      nombre: "Premium",
      subtitulo: "Para campañas, lanzamientos y mayor cobertura",
      precio: "$1.750.000",
      destacado: false,
      bullets: [
        "2 jornadas de grabación (16 hrs)",
        "2 videos largos de campaña",
        "8–10 reels / shorts / cápsulas",
        "Asesoría estratégica avanzada",
        "2 rondas de revisión (ajustes menores)",
        "Entregas personalizadas + material adicional",
        "Informe mensual con métricas y recomendaciones",
        "Entregas listas para publicar",
      ],
      ctaLabel: "Cotizar Premium",
    },
  ] as const;

  /**
   * Proyectos puntuales (desde)
   */
  const oneOff = {
    title: "Proyecto puntual: video corporativo / institucional",
    from: "$1.200.000",
    bullets: [
      "Brief + pauta/guion simple (te guiamos)",
      "Grabación 4K + audio limpio + dirección",
      "Edición + color + música stock/licenciada",
      "Entrega lista para LinkedIn / YouTube (y cortes según alcance)",
    ],
    note: "IVA incluido · valor desde, según locación, duración, logística y piezas derivadas.",
  };

  const extras = [
    {
      key: "eventos",
      t: "Cobertura de eventos",
      d: "Registro de charlas, lanzamientos y conferencias. Video highlight + clips para difusión.",
      p: "desde $850.000",
      note: "IVA incluido · según duración y logística.",
      intent: "eventos" as WaIntent,
    },
    {
      key: "multicamara",
      t: "Multicámara / dron",
      d: "Más dinamismo y contexto para institucionales, eventos y campañas.",
      p: "desde $250.000",
      note: "IVA incluido · sujeto a permisos y locación.",
      intent: "general" as WaIntent,
    },
    {
      key: "motion",
      t: "Motion graphics",
      d: "Lower thirds, datos y gráficos animados para elevar claridad y estándar corporativo.",
      p: "desde $320.000",
      note: "IVA incluido · depende de complejidad.",
      intent: "general" as WaIntent,
    },
    {
      key: "streaming",
      t: "Streaming y webinars",
      d: "Producción técnica para transmisiones con overlays, gráficas y soporte.",
      p: "desde $750.000",
      note: "IVA incluido · según cámaras/plataforma/duración.",
      intent: "general" as WaIntent,
    },
    {
      key: "vodcast",
      t: "Podcast / vodcast corporativo",
      d: "Formato conversacional para liderazgo, cultura, onboarding y contenido B2B.",
      p: "desde $650.000",
      note: "IVA incluido · set básico + post estándar.",
      intent: "vodcast" as WaIntent,
    },
    {
      key: "kit",
      t: "Kit de marca para video",
      d: "Plantillas, lower thirds, tipografías y estilo visual para todo tu contenido del año.",
      p: "desde $320.000",
      note: "IVA incluido · reutilizable.",
      intent: "general" as WaIntent,
    },
  ] as const;

  const faq = [
    {
      q: "No tenemos tiempo ni ideas, ¿igual sirve?",
      a: "Sí. Con una reunión corta mensual definimos objetivos y nosotros proponemos calendario, guiones y formatos. Tu equipo solo valida antes de grabar.",
    },
    {
      q: "¿Qué tan sin fricción es el plan mensual?",
      a: "Ustedes definen objetivos y aprueban. Nosotros gestionamos pauta/guion, agenda de rodaje, producción y post. Entregamos archivos listos para publicar.",
    },
    {
      q: "¿Publican por nosotros?",
      a: "Entregamos versiones optimizadas por plataforma. Si lo necesitas, podemos asistir con carga y buenas prácticas de publicación.",
    },
    {
      q: "¿Trabajan en regiones?",
      a: "Sí. Coordinamos logística y viáticos según calendario. Se cotiza caso a caso.",
    },
    {
      q: "¿Puedo sumar reels, un evento o multicámara?",
      a: "Claro. El plan es escalable: sumamos jornadas, piezas, multicámara/dron, motion extra o cobertura de eventos.",
    },
  ];

  const faqJsonLd = buildFaqJsonLd(faq);
  const serviceJsonLd = buildServiceJsonLd();

  // WhatsApp links por sección (sin emojis, con intent)
  const waTop = buildWhatsAppLink({ intent: "general", context: "services_top", cta: "services_top_whatsapp" });
  const waHero = buildWhatsAppLink({ intent: "general", context: "services_hero", cta: "services_hero_whatsapp" });
  const waPlans = buildWhatsAppLink({ intent: "monthly", context: "services_plans", cta: "services_plans_whatsapp" });
  const waOneoff = buildWhatsAppLink({ intent: "oneoff", context: "services_oneoff", cta: "services_oneoff_whatsapp" });
  const waFaq = buildWhatsAppLink({ intent: "general", context: "services_faq", cta: "services_faq_whatsapp" });
  const waFinal = buildWhatsAppLink({ intent: "general", context: "services_final", cta: "services_final_whatsapp" });

  return (
    <main className="section bg-black">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* TOP BAR: quick CTA */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="container py-3 flex items-center justify-between gap-3">
          <div className="text-xs text-white/60 hidden md:block">
            Plan mensual + videos corporativos · Entregas listas para LinkedIn / YouTube / Intranet
          </div>
          <div className="flex gap-2">
            <Link href="/contacto#form" className="btn text-sm" data-cta="services_top_form">
              Cotizar
            </Link>
            <a
              href={waTop}
              className="btn-outline text-sm"
              target="_blank"
              rel="noopener noreferrer"
              data-cta="services_top_whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Breadcrumb */}
        <nav className="text-xs text-white/50 mb-4 mt-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
            </li>
            <li className="text-white/40">/</li>
            <li>
              <span className="text-white">Servicios</span>
            </li>
          </ol>
        </nav>

        {/* HERO */}
        <header className="pt-4 pb-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            <div>
              <span className="badge">Servicios</span>
              <h1 className="h2 mt-3">Servicios audiovisuales para empresas</h1>

              <p className="mt-3 text-white/70 max-w-2xl">
                Dos formas de trabajar: <strong>plan audiovisual mensual</strong> (partner de contenido) o{" "}
                <strong>proyectos puntuales</strong> (video corporativo / institucional). Proceso claro, estándar
                corporativo y entregas listas para usar.
              </p>

              <div className="mt-4 p-4 rounded-2xl border border-white/10 bg-gray-900">
                <p className="text-sm text-white/70">
                  <span className="font-semibold text-white">Para performance (Google/LinkedIn):</span> el{" "}
                  <span className="text-white font-semibold">Plan Estándar</span> suele ser el mejor equilibrio: 1
                  jornada + 1 pieza principal + clips reutilizables.
                </p>
              </div>

              <p className="mt-3 text-sm text-white/60 max-w-2xl">
                Valores referenciales (IVA incluido). Alcance claro, revisiones acotadas y entregas por hitos. Para
                licitaciones/compliance, armamos propuesta formal.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="#planes" className="btn" data-cta="services_hero_view_plans">
                  Ver planes mensuales
                </Link>
                <Link href="#proyecto-puntual" className="btn-outline" data-cta="services_hero_oneoff">
                  Proyecto puntual
                </Link>
                <Link href="#extras" className="btn-outline" data-cta="services_hero_extras">
                  Servicios adicionales
                </Link>
                <Link href="/portafolio" className="btn-outline" data-cta="services_hero_portfolio">
                  Ver portafolio
                </Link>
                <a
                  href={waHero}
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="services_hero_whatsapp"
                >
                  WhatsApp
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] text-white/60">
                <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10">Plazos realistas</span>
                <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10">Audio profesional</span>
                <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10">Versiones por plataforma</span>
                <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10">Proceso claro</span>
              </div>
            </div>

            {/* Trust / visual */}
            <div className="rounded-3xl border border-white/10 bg-black/40 overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/servicios_dekaelo.jpg"
                  alt="Producción audiovisual corporativa — Dekaelo Media"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-5">
                <div className="text-sm text-white/80 font-semibold">Qué obtienes</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>• Pauta/guion para aterrizar el mensaje</li>
                  <li>• Rodaje cuidado + audio limpio</li>
                  <li>• Edición + versiones por canal</li>
                  <li>• Entrega lista para usar (no archivos sueltos)</li>
                </ul>

                <div className="mt-5 grid gap-2">
                  <Link href="/contacto#form" className="btn w-full text-center" data-cta="services_hero_card_form">
                    Cotizar
                  </Link>
                  <a
                    href={waHero}
                    className="btn-outline w-full text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="services_hero_card_whatsapp"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* BENEFICIOS */}
        <section className="py-12 border-y border-white/10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center">Por qué el plan mensual funciona</h2>
          <p className="text-center text-white/70 mt-3 max-w-3xl mx-auto">
            La ventaja no es producir más, sino mantener una comunicación constante, coherente y reutilizable sin
            sobrecargar al equipo interno.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {beneficios.map((b) => (
              <article key={b.t} className="p-6 rounded-2xl bg-gray-900 border border-white/10">
                <h3 className="font-semibold text-white">{b.t}</h3>
                <p className="text-white/70 mt-2">{b.d}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={waPlans}
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
              data-cta="services_benefits_whatsapp"
            >
              Cotizar plan mensual por WhatsApp →
            </a>
          </div>
        </section>

        {/* PROYECTO PUNTUAL */}
        <section id="proyecto-puntual" className="scroll-mt-24 py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">{oneOff.title}</h2>
              <p className="text-white/70 mt-3">
                Para una pieza estratégica (web, directorio, admisión, RRHH, campaña) con estándar corporativo. Si luego
                quieres continuidad, lo convertimos a plan mensual.
              </p>

              <div className="mt-5 rounded-2xl border border-white/10 bg-gray-900 p-4">
                <p className="text-sm text-white/70">
                  <span className="text-white font-semibold">Desde:</span>{" "}
                  <span className="text-white font-semibold">{oneOff.from}</span>{" "}
                  <span className="text-white/50">CLP (IVA incluido)</span>
                </p>
                <p className="text-xs text-white/50 mt-2">{oneOff.note}</p>
              </div>

              <ul className="mt-5 space-y-2 text-white/80 text-sm">
                {oneOff.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contacto#form" className="btn" data-cta="services_oneoff_form">
                  Cotizar proyecto puntual →
                </Link>
                <a
                  href={waOneoff}
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="services_oneoff_whatsapp"
                >
                  WhatsApp →
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-black/40">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0&modestbranding=1&playsinline=1"
                title="Reel Dekaelo Media"
                className="aspect-video w-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="p-4 border-t border-white/10 text-sm text-white/70">
                Si quieres, envíanos 1–2 referencias y te proponemos duración, estructura y entregables recomendados.
              </div>
            </div>
          </div>
        </section>

        {/* PLANES */}
        <section id="planes" className="scroll-mt-24 py-16 border-y border-white/10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white">Planes audiovisuales mensuales</h2>
          <p className="text-center text-white/60 mb-10 max-w-3xl mx-auto">
            Valores IVA incluido. Contrato mínimo sugerido: 3 meses. Diseñado para equipos que necesitan continuidad
            sin armar un equipo in-house.
          </p>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {planes.map((p) => {
              const waPlan = buildWhatsAppLink({
                intent: "monthly",
                context: "services_plans",
                cta: `services_plan_${p.key}_whatsapp`,
              });

              return (
                <article key={p.key} className="relative p-1 rounded-3xl">
                  <div
                    className={[
                      "h-full w-full rounded-3xl bg-gray-900 border p-8 flex flex-col",
                      p.destacado ? "border-cyan-400/40" : "border-white/10",
                    ].join(" ")}
                  >
                    {p.destacado && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-300/15 text-cyan-200 text-xs font-bold px-3 py-1 rounded-full border border-cyan-300/25">
                        Recomendado
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-white">{p.nombre}</h3>
                    <p className="mt-1 text-sm text-white/70">{p.subtitulo}</p>

                    <div className="mt-6">
                      <div className="text-3xl font-extrabold text-white">{p.precio}</div>
                      <div className="text-sm text-white/50">CLP / mes · IVA incluido</div>
                    </div>

                    <div className="mt-4 text-xs text-white/55">
                      Incluye 1 ciclo de revisión por pieza (ajustes menores). Cambios mayores o versiones extra se cotizan.
                    </div>

                    <ul className="mt-6 space-y-3 text-white/80 text-sm">
                      {p.bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>

                    <div className="mt-6 grid gap-3">
                      <Link
                        href="/contacto#form"
                        className={[
                          "inline-block w-full text-center px-6 py-3 rounded-xl transition border",
                          p.destacado
                            ? "bg-white text-black font-semibold hover:opacity-90 border-white/10"
                            : "bg-white/10 hover:bg-white/15 border-white/15 text-white",
                        ].join(" ")}
                        data-cta={`services_plan_${p.key}_form`}
                      >
                        {p.ctaLabel}
                      </Link>

                      <a
                        href={waPlan}
                        className="inline-block w-full text-center px-6 py-3 rounded-xl transition bg-transparent border border-white/15 text-white/90 hover:bg-white/5"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cta={`services_plan_${p.key}_whatsapp`}
                      >
                        Cotizar plan mensual por WhatsApp
                      </a>
                    </div>

                    <p className="mt-3 text-[11px] text-white/50">
                      Definimos alcance final por escrito según objetivos, agenda y locación.
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-black/40 border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="font-semibold text-white">¿No sabes qué plan elegir?</div>
                <div className="text-sm text-white/70 mt-1">
                  Dinos objetivo + canal principal + frecuencia, y te recomendamos el plan más eficiente.
                </div>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contacto#form" className="btn" data-cta="services_plans_help_form">
                  Pedir recomendación →
                </Link>
                <a
                  href={waPlans}
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="services_plans_help_whatsapp"
                >
                  WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EXTRAS */}
        <section id="extras" className="scroll-mt-24 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white">Servicios adicionales</h2>
          <p className="text-center text-white/60 mb-12 max-w-3xl mx-auto">
            Para complementar planes mensuales o proyectos puntuales: eventos, campañas, motion y formatos especiales.
          </p>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {extras.map((x) => {
              const waExtra = buildWhatsAppLink({
                intent: x.intent,
                context: "services_extras",
                cta: `services_extra_${x.key}_whatsapp`,
              });

              return (
                <article key={x.key} className="p-6 rounded-2xl bg-gray-900 border border-white/10 flex flex-col">
                  <h3 className="font-semibold text-white">{x.t}</h3>
                  <p className="text-white/70 mt-2">{x.d}</p>

                  <div className="mt-4 text-sm text-white/70">
                    <span className="font-semibold text-white">{x.p}</span>{" "}
                    <span className="text-white/30">· IVA incluido</span>
                  </div>
                  <div className="mt-2 text-xs text-white/45">{x.note}</div>

                  <div className="mt-6 grid gap-3">
                    <Link
                      href="/contacto#form"
                      className="inline-block w-full text-center px-6 py-3 rounded-xl transition bg-white/10 hover:bg-white/15 border border-white/15 text-white"
                      data-cta={`services_extra_${x.key}_form`}
                    >
                      Solicitar cotización →
                    </Link>

                    <a
                      href={waExtra}
                      className="inline-block w-full text-center px-6 py-3 rounded-xl transition bg-transparent border border-white/15 text-white/90 hover:bg-white/5"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cta={`services_extra_${x.key}_whatsapp`}
                    >
                      WhatsApp →
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="text-center mt-10 text-white/60 text-sm max-w-3xl mx-auto">
            Si necesitas algo específico (fotografía, traducciones, locución, subtítulos, etc.), lo incorporamos en una
            propuesta a medida.
          </p>
        </section>

        {/* FAQ */}
        <section className="py-16 border-y border-white/10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center">Preguntas frecuentes</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {faq.map((f) => (
              <article key={f.q} className="p-6 rounded-2xl bg-gray-900 border border-white/10">
                <h3 className="font-semibold text-white">{f.q}</h3>
                <p className="text-white/70 mt-2">{f.a}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-10 flex justify-center gap-3 flex-wrap">
            <Link href="/contacto#form" className="btn" data-cta="services_faq_form">
              Cotizar →
            </Link>
            <a
              href={waFaq}
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
              data-cta="services_faq_whatsapp"
            >
              WhatsApp
            </a>
          </div>

          <p className="text-xs text-white/50 text-center mt-5">Respuesta típica en menos de 24 horas hábiles.</p>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Cotiza tu próximo proyecto</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Puedes partir con un proyecto puntual o con un sistema mensual de contenido. En ambos casos, te guiamos en
            estructura, producción y entregables por plataforma.
          </p>

          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link
              href="/contacto#form"
              className="inline-block px-10 py-4 bg-white text-black font-semibold rounded-2xl hover:opacity-90 transition"
              data-cta="services_final_form"
            >
              Cotizar →
            </Link>

            <a
              href={waFinal}
              className="inline-block px-10 py-4 bg-transparent text-white font-semibold rounded-2xl border border-white/15 hover:bg-white/5 transition"
              target="_blank"
              rel="noopener noreferrer"
              data-cta="services_final_whatsapp"
            >
              WhatsApp →
            </a>
          </div>

          <p className="mt-4 text-xs text-white/50">
            Valores referenciales IVA incluido. Alcance definitivo se confirma en propuesta formal según calendario,
            locación y entregables.
          </p>
        </section>
      </div>
    </main>
  );
}
