import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

import { VideoEmbed } from './components/VideoEmbed';
import { ClientLogos } from './components/ClientLogos';

const SITE_URL = 'https://www.dekaelomedia.com';
const CANONICAL = `${SITE_URL}/`;

// WhatsApp correcto: +56 9 2008 0031  -> wa.me/56920080031
const WHATSAPP_NUMBER = '56920080031';

export const metadata: Metadata = {
  title: 'Dekaelo Media | Productora Audiovisual | Videos Corporativos en Chile',
  description:
    'Producimos videos corporativos, institucionales y vodcasts para empresas en Chile. Calidad cinematográfica, enfoque estratégico y entregables listos para redes, directorios y comunicación interna.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Dekaelo Media | Videos corporativos y contenido audiovisual estratégico',
    description:
      'Videos corporativos, institucionales y vodcasts para empresas en Chile. Calidad cinematográfica y foco en objetivos de negocio.',
    url: CANONICAL,
    type: 'website',
    siteName: 'Dekaelo Media',
    locale: 'es_CL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dekaelo Media | Videos corporativos en Chile',
    description:
      'Videos corporativos, institucionales y vodcasts para empresas en Chile. Calidad cinematográfica y entregables por plataforma.',
  },
  robots: { index: true, follow: true },
};

const FAQ = [
  {
    q: '¿Cuánto demora un video corporativo?',
    a: 'Depende del formato, pero normalmente entregamos entre 7 y 14 días hábiles desde la grabación. En proyectos urgentes, podemos priorizar entregas.',
  },
  {
    q: '¿Ustedes ayudan con guion y enfoque?',
    a: 'Sí. Podemos partir desde una pauta simple o construir guion, estructura y preguntas de entrevista para que el mensaje salga claro y natural.',
  },
  {
    q: '¿Qué entregan para redes sociales?',
    a: 'Además del video principal, entregamos reels/shorts optimizados por formato (vertical/horizontal), duración y plataforma.',
  },
  {
    q: '¿Trabajan en Santiago y regiones?',
    a: 'Sí. Grabamos en Santiago y también viajamos a regiones. Los traslados/viáticos se cotizan según ubicación y logística.',
  },
  {
    q: '¿Incluyen música y post de audio?',
    a: 'Sí. Incluimos música licenciada/stock según el proyecto, mezcla de audio, limpieza y nivelación para que suene profesional.',
  },
  {
    q: '¿Cómo cotizo si no quiero llamadas?',
    a: 'Perfecto. Envíanos tu brief por el formulario o WhatsApp (objetivo, fecha, ciudad y referencias). Respondemos con una propuesta clara.',
  },
];

const SERVICES = [
  {
    title: 'Videos corporativos',
    desc: 'Institucionales, marca empleadora, cultura, innovación, testimoniales y casos.',
  },
  {
    title: 'Vodcast corporativo',
    desc: 'Podcast en video con estándar profesional: set, audio, multicámara y clips.',
  },
  {
    title: 'Contenido para performance',
    desc: 'Reels/shorts pensados para anuncios y conversión, no solo “bonito”.',
  },
  {
    title: 'Comunicación interna',
    desc: 'Mensajes de gerencia, onboarding, inducción, seguridad y capacitación.',
  },
  {
    title: 'Registro de eventos',
    desc: 'Cobertura, aftermovie, fotos, testimonios y piezas de difusión.',
  },
  {
    title: 'Documental institucional',
    desc: 'Storytelling de origen, impacto y propósito (formato largo y cortes).',
  },
];

const PROCESS = [
  { n: '01', title: 'Brief y objetivo', desc: 'Definimos audiencia, mensaje, tono y qué debe lograr el video.' },
  { n: '02', title: 'Guion / pauta', desc: 'Estructura clara + preguntas para entrevistas y testimonios.' },
  { n: '03', title: 'Grabación profesional', desc: 'Imagen cuidada, audio limpio, iluminación y dirección en set.' },
  { n: '04', title: 'Edición y entregas', desc: 'Corte final + versiones por plataforma + ronda de ajustes.' },
];

function buildWhatsAppLink() {
  const text =
    'Hola Dekaelo Media 👋 Quiero cotizar un video corporativo.\n\n' +
    '1) Empresa:\n' +
    '2) Objetivo (marca / ventas / RRHH / interna):\n' +
    '3) Tipo (institucional / vodcast / reels / evento):\n' +
    '4) Fecha y ciudad:\n' +
    '5) Referencias (links):\n\n' +
    'Gracias 🙌';

  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

function buildFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Dekaelo Media',
    url: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    areaServed: 'CL',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CL',
      addressLocality: 'Santiago',
    },
    sameAs: [
      // Agrega perfiles reales si quieres (YouTube / IG / LinkedIn)
    ],
  };
}

export default function Page() {
  const waLink = buildWhatsAppLink();
  const faqJsonLd = buildFaqJsonLd();
  const businessJsonLd = buildLocalBusinessJsonLd();

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
              Ir al formulario
            </Link>
            <a
              href={waLink}
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
            <span className="badge">Productora audiovisual para empresas</span>

            {/* Opción B */}
            <h1 className="h1 mt-3">Video corporativo profesional para empresas</h1>

            <p className="p mt-4">
              Producimos <strong>videos corporativos</strong>, institucionales y <strong>vodcasts</strong> con{' '}
              <strong>calidad cinematográfica</strong>. Grabación 4K, audio limpio y entregas listas para{' '}
              <strong>LinkedIn</strong>, <strong>YouTube</strong>, Instagram o comunicación interna.
            </p>

            {/* PROMESA + PRECIO */}
            <p className="mt-4 text-sm text-white/70">
              <span className="font-semibold text-white">
                Proyectos puntuales y planes mensuales desde $595.000 CLP (IVA incluido).
              </span>{' '}
              Entrega típica: <strong>7–14 días hábiles</strong> desde la grabación (según formato).
            </p>

            {/* CTA: sin llamadas */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contacto#form" className="btn" data-cta="hero_form">
                Ir al formulario
              </Link>

              <a
                href={waLink}
                className="btn-outline"
                data-cta="hero_whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar WhatsApp
              </a>

              <Link href="/portafolio" className="btn-outline" data-cta="hero_portfolio">
                Ver portafolio
              </Link>
            </div>

            {/* TRUST */}
            <div className="mt-6 flex items-start gap-4 text-white/70 text-sm">
              <Image src="/logo.png" alt="Dekaelo Media" width={34} height={34} className="rounded-lg" />
              <div>
                <p className="text-white/80">Te guiamos desde el concepto y guion, hasta el rodaje y edición final.</p>
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

      {/* SERVICES */}
      <section id="servicios" className="container py-16">
        <div className="max-w-3xl">
          <h2 className="h2">¿Qué producimos?</h2>
          <p className="text-white/70 mt-2">
            Elegimos el formato según tu objetivo (marca, conversión, reputación, cultura, ventas o comunicación
            interna). Si no sabes qué pedir, te guiamos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {SERVICES.map((s) => (
            <div key={s.title} className="card p-6 border border-white/10">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{s.desc}</p>
              <div className="mt-4 flex gap-3 flex-wrap">
                <Link
                  href="/contacto#form"
                  className="underline underline-offset-4 text-white/80 hover:text-white"
                  data-cta={`service_form_${s.title.toLowerCase().replace(/[^\w]+/g, '_')}`}
                >
                  Ir al formulario →
                </Link>
                <a
                  href={waLink}
                  className="underline underline-offset-4 text-white/60 hover:text-white"
                  data-cta={`service_whatsapp_${s.title.toLowerCase().replace(/[^\w]+/g, '_')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE: MONTHLY PLAN */}
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
                Consistencia + calidad + estrategia. Un partner creativo que produce y te deja un “banco de contenido”
                para el mes, sin armar un equipo in-house.
              </p>

              <p className="mt-4 text-sm text-white/70">
                <span className="font-semibold text-white">
                  Plan Estándar recomendado: $952.000 CLP / mes (IVA incluido).
                </span>{' '}
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
                  Ir al formulario
                </Link>
                <a
                  href={waLink}
                  className="btn-outline"
                  data-cta="monthly_whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>

              <p className="text-xs text-white/50 mt-4">
                * Ajustamos el plan según calendario, prioridades y cantidad de piezas.
              </p>
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
                Envíanos objetivo + fecha + ciudad + referencias. Respondemos con propuesta clara.
              </div>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contacto#form" className="btn" data-cta="process_form">
                Ir al formulario
              </Link>
              <a
                href={waLink}
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
              Institucionales, cápsulas, testimonios, registro de eventos y piezas explicativas.
              Te recomendamos formato, duración y enfoque según objetivo.
            </p>
            <p className="mt-3 text-sm text-white/70">
              No hacemos llamadas: envía el brief por formulario o WhatsApp y te respondemos con propuesta.
            </p>
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <Link href="/contacto#form" className="btn" data-cta="oneoff_form">
                Ir al formulario
              </Link>
              <a
                href={waLink}
                className="btn-outline"
                data-cta="oneoff_whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
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
                  $595.000
                  <span className="block text-xs text-white/60 font-normal">CLP / mes · IVA incluido</span>
                </p>
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
                  Ir al formulario
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
                  $952.000
                  <span className="block text-xs text-white/60 font-normal">CLP / mes · IVA incluido</span>
                </p>
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
                  Ir al formulario
                </Link>
              </div>
            </div>

            {/* Premium */}
            <div className="card p-6 flex flex-col justify-between border border-white/10">
              <div>
                <h3 className="font-semibold text-lg">Premium</h3>
                <p className="text-white/60 text-sm mt-1">Para campañas, lanzamientos y mayor cobertura mensual.</p>
                <p className="mt-4 text-2xl font-bold">
                  $1.450.000
                  <span className="block text-xs text-white/60 font-normal">CLP / mes · IVA incluido</span>
                </p>
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
                  Ir al formulario
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-white/60">
            Todos los planes se pueden ajustar según calendario, equipo y objetivos.
          </p>

          <div className="text-center mt-8">
            <a
              href={waLink}
              className="btn-outline"
              data-cta="plans_whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar por WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="container py-16">
        <h2 className="h2 text-center mb-12">Casos destacados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card p-6 border border-white/10">
            <h3 className="font-semibold text-lg">Innova Talks — Banco BICE</h3>
            <p className="text-white/70 mt-2">
              Podcast corporativo en video con entrevistas. Formato para posicionar cultura e iniciativas.
            </p>
          </div>
          <div className="card p-6 border border-white/10">
            <h3 className="font-semibold text-lg">Creando Líderes para Asia — APCC</h3>
            <p className="text-white/70 mt-2">
              Serie de episodios + clips reutilizables para YouTube, LinkedIn y newsletters.
            </p>
          </div>
          <div className="card p-6 border border-white/10">
            <h3 className="font-semibold text-lg">Documental 80 Años — Trewhela’s School</h3>
            <p className="text-white/70 mt-2">
              Pieza institucional con versiones y cortes breves para admisión, marketing y redes.
            </p>
          </div>
        </div>

        <div className="text-center mt-10 flex justify-center gap-3 flex-wrap">
          <Link href="/portafolio" className="btn-outline" data-cta="cases_portfolio">
            Ver más trabajos →
          </Link>
          <Link href="/contacto#form" className="btn" data-cta="cases_form">
            Ir al formulario
          </Link>
          <a
            href={waLink}
            className="btn-outline"
            data-cta="cases_whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
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
              Ir al formulario →
            </Link>
            <a
              href={waLink}
              className="btn-outline"
              data-cta="faq_whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            Envíanos objetivo, fecha, ciudad y referencias. Te respondemos con propuesta clara (valor estimado,
            cronograma y próximos pasos).
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/contacto#form" className="btn" data-cta="final_form">
              Ir al formulario
            </Link>
            <a
              href={waLink}
              className="btn-outline"
              data-cta="final_whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar WhatsApp
            </a>
          </div>
          <p className="text-xs text-white/50 mt-5">Tip: mientras más referencias (links), más rápida la propuesta.</p>
        </div>
      </section>
    </section>
  );
}
