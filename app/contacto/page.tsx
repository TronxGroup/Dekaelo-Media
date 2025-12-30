// app/contacto/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';
import ZohoLeadForm from '../components/ZohoLeadForm';

const SITE_URL = 'https://www.dekaelomedia.com';
const CANONICAL = `${SITE_URL}/contacto`;
const WHATSAPP_NUMBER = '56920080031';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Contacto | Dekaelo Media',
  description:
    'Cotiza tu video corporativo o plan audiovisual mensual. Envíanos el brief por formulario o WhatsApp. Respondemos con propuesta clara en menos de 24–48 horas hábiles.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Contacto | Dekaelo Media',
    description:
      'Cotiza tu video corporativo o plan audiovisual mensual. Formulario + WhatsApp. Respuesta en 24–48 horas hábiles.',
    url: CANONICAL,
    type: 'website',
    siteName: 'Dekaelo Media',
    locale: 'es_CL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto | Dekaelo Media',
    description:
      'Cotiza tu video corporativo o plan audiovisual mensual. Formulario + WhatsApp. Respuesta en 24–48 horas hábiles.',
  },
  robots: { index: true, follow: true },
};

function buildWhatsAppLink() {
  const text =
    'Hola Dekaelo Media 👋 Quiero cotizar.\n\n' +
    '1) Empresa:\n' +
    '2) Objetivo (marca / ventas / RRHH / interna):\n' +
    '3) Tipo (institucional / vodcast / reels / evento / plan mensual):\n' +
    '4) Fecha y ciudad:\n' +
    '5) Plataformas (LinkedIn / YouTube / Instagram / Intranet):\n' +
    '6) Presupuesto estimado (si tienes):\n' +
    '7) Referencias (1–3 links):\n\n' +
    'Gracias 🙌';

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const FAQ = [
  {
    q: '¿Necesito agendar una llamada?',
    a: 'No es obligatorio. Puedes enviar el brief por formulario o WhatsApp y respondemos con una propuesta clara. Si tu organización lo requiere, también podemos coordinar una llamada breve.',
  },
  {
    q: '¿Qué información debo enviar para cotizar rápido?',
    a: 'Empresa, objetivo, tipo de video/plan, fecha/ciudad, plataformas y 1–3 referencias (links). Con eso estimamos formato, equipo y tiempos.',
  },
  {
    q: '¿Cuánto demoran en responder?',
    a: 'Normalmente respondemos en menos de 24–48 horas hábiles con preguntas puntuales o una propuesta inicial.',
  },
  {
    q: '¿Trabajan en regiones?',
    a: 'Sí. Grabamos en Santiago y también viajamos a regiones. Traslados/viáticos se cotizan según logística.',
  },
];

function buildFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Dekaelo Media',
    url: SITE_URL,
    areaServed: 'CL',
    sameAs: [
      'https://www.instagram.com/dekaelo_media',
      'https://www.linkedin.com/company/dekaelo-media',
      'https://www.youtube.com/@dekaelo_media',
    ],
  };
}

export default function Page() {
  const waLink = buildWhatsAppLink();
  const faqJsonLd = buildFaqJsonLd();
  const businessJsonLd = buildLocalBusinessJsonLd();

  return (
    <section className="section">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />

      <div className="container max-w-2xl">
        {/* HEADER */}
        <div className="mb-8">
          <span className="badge">Contacto</span>
          <h1 className="h2 mt-3">Cotiza tu video corporativo</h1>

          <p className="p mt-3 text-white/80">
            Envíanos el brief por <strong>formulario</strong> o <strong>WhatsApp</strong>.
            <br className="hidden sm:block" />
            <span className="text-white/70">
              Respondemos con una propuesta clara (valor estimado, cronograma y próximos pasos).
            </span>
          </p>

          <p className="mt-3 text-sm text-white/70">
            Tiempo de respuesta típico: <span className="font-semibold text-white">24–48 horas hábiles</span>.
          </p>
        </div>

        {/* QUICK CTAS */}
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href="#form"
            className="rounded-xl border border-white/10 bg-white text-black px-4 py-3 text-center font-semibold hover:opacity-90 transition text-sm"
            data-cta="contact_go_form"
          >
            Ir al formulario
          </Link>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center hover:bg-white/10 transition text-sm text-white"
            data-cta="contact_whatsapp"
          >
            💬 Enviar WhatsApp
            <div className="text-xs text-white/60 mt-1">+56 9 2008 0031</div>
          </a>
        </div>

        {/* SECONDARY LINKS */}
        <div className="mt-3 grid sm:grid-cols-2 gap-3">
          <a
            href="mailto:info@dekaelomedia.com?subject=Consulta%20Dekaelo%20Media"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center hover:bg-white/10 transition text-sm"
            data-cta="contact_email"
          >
            ✉️ Escribir a <span className="font-medium">info@dekaelomedia.com</span>
          </a>

          <Link
            href="/portafolio"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center hover:bg-white/10 transition text-sm"
            data-cta="contact_portfolio"
          >
            Ver portafolio →
          </Link>
        </div>

        {/* PLAN vs ONE-OFF (filtro mental rápido) */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 text-sm">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/75">
            <p className="font-semibold text-white">Plan mensual</p>
            <p className="mt-1">
              Ideal si necesitas constancia (1 jornada + varias piezas por mes). Nosotros proponemos pauta/guion y tu equipo valida.
            </p>
            <Link href="/servicios#planes" className="underline underline-offset-4 text-white/80 hover:text-white">
              Ver planes →
            </Link>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/75">
            <p className="font-semibold text-white">Proyecto puntual</p>
            <p className="mt-1">
              Video institucional, evento, testimonios o piezas de campaña. Definimos alcance, cronograma y entregables por escrito.
            </p>
            <Link href="/servicios#videos-corporativos" className="underline underline-offset-4 text-white/80 hover:text-white">
              Ver formatos →
            </Link>
          </div>
        </div>

        {/* EXPECTATIONS / HELP */}
        <div className="mt-8 grid gap-4 text-sm text-white/70">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="font-semibold text-white">Para cotizar más rápido, incluye:</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                <strong className="text-white">Objetivo</strong> (marca / ventas / RRHH / interna)
              </li>
              <li>
                <strong className="text-white">Tipo</strong> (institucional / vodcast / reels / evento / plan mensual)
              </li>
              <li>
                <strong className="text-white">Fecha y ciudad</strong>
              </li>
              <li>
                <strong className="text-white">Plataformas</strong> (LinkedIn / YouTube / Instagram / Intranet)
              </li>
              <li>
                <strong className="text-white">Referencias</strong> (1–3 links)
              </li>
              <li>
                <strong className="text-white">Presupuesto estimado</strong> (si tienes)
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="font-semibold text-white">Qué pasa después de enviar</p>
            <ol className="mt-1 list-decimal list-inside space-y-1">
              <li>Revisamos tu solicitud y pedimos 1–2 datos si hace falta.</li>
              <li>Te enviamos una propuesta inicial (alcance recomendado + tiempos + estimación).</li>
              <li>Si estás de acuerdo, avanzamos a brief final y calendario de producción.</li>
            </ol>
          </div>
        </div>

        {/* FORM */}
        <div id="form" className="mt-10">
          <h2 className="text-lg font-semibold text-white mb-2">Formulario de contacto</h2>
          <p className="text-sm text-white/70 mb-4">
            Mientras más contexto nos des, mejor será la primera respuesta. Si prefieres, también puedes enviar lo mismo por WhatsApp.
          </p>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <ZohoLeadForm />
          </div>

          {/* AFTER-FORM CTA */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-center"
              data-cta="contact_whatsapp_after_form"
            >
              Prefiero enviar por WhatsApp →
            </a>
            <Link href="/" className="btn-outline text-center" data-cta="contact_back_home">
              Volver al inicio
            </Link>
          </div>

          <p className="mt-4 text-xs text-white/50">
            Tip: si tu proyecto es para <strong>Google Ads</strong> o campañas, avísanos para planificar formatos orientados a conversión
            (reels/shorts, versiones y ganchos por audiencia).
          </p>
        </div>

        {/* MINI FAQ */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <h3 className="text-center text-white/70 text-sm mb-4">Preguntas rápidas</h3>
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="rounded-2xl bg-gray-900 border border-white/10 p-5">
                <summary className="cursor-pointer font-semibold text-white">{f.q}</summary>
                <p className="text-white/70 mt-3 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* SOCIAL */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-white/60 text-sm mb-4">Casos y trabajos recientes:</p>
          <div className="flex justify-center gap-6 text-white/80 text-sm flex-wrap">
            <a
              href="https://www.instagram.com/dekaelo_media"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              data-cta="contact_social_instagram"
            >
              📸 Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/dekaelo-media"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              data-cta="contact_social_linkedin"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@dekaelo_media"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              data-cta="contact_social_youtube"
            >
              ▶️ YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
