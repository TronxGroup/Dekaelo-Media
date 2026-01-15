// app/contacto/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import ZohoLeadForm from "../components/ZohoLeadForm";

const SITE_URL = "https://www.dekaelomedia.com";
const CANONICAL = `${SITE_URL}/contacto`;
const WHATSAPP_NUMBER = "56920080031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Contacto | Dekaelo Media",
  description:
    "Cotiza tu video corporativo o plan audiovisual mensual. Envíanos el brief por formulario o WhatsApp. Respondemos con propuesta clara en 24–48 horas hábiles.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Contacto | Dekaelo Media",
    description:
      "Cotiza tu video corporativo o plan audiovisual mensual. Formulario + WhatsApp. Respuesta en 24–48 horas hábiles.",
    url: CANONICAL,
    type: "website",
    siteName: "Dekaelo Media",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Dekaelo Media",
    description:
      "Cotiza tu video corporativo o plan audiovisual mensual. Formulario + WhatsApp. Respuesta en 24–48 horas hábiles.",
  },
  robots: { index: true, follow: true },
};

function buildWhatsAppLink() {
  const text =
    `Hola Dekaelo Media.\n` +
    `Quiero cotizar.\n\n` +
    `Empresa:\n` +
    `Qué necesitas (video / vodcast / evento / plan mensual):\n` +
    `Ciudad y fecha tentativa:\n` +
    `Objetivo (marca / ventas / RRHH / interna):\n` +
    `Referencias (links) (opcional):\n`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function Page() {
  const wa = buildWhatsAppLink();

  return (
    <section className="section">
      <div className="container max-w-2xl">
        {/* HEADER */}
        <div className="mb-6">
          <span className="badge">Contacto</span>
          <h1 className="h2 mt-3">Cotiza sin llamada</h1>
          <p className="p mt-3 text-white/80">
            Envíanos el brief por <strong>formulario</strong> o por <strong>WhatsApp</strong>.
            <br className="hidden sm:block" />
            <span className="text-white/70">Respondemos con propuesta clara (alcance + cronograma + próximos pasos).</span>
          </p>
          <p className="mt-3 text-sm text-white/70">
            Respuesta típica: <span className="font-semibold text-white">24–48 horas hábiles</span>.
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
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center hover:bg-white/10 transition text-sm text-white"
            data-cta="contact_whatsapp"
          >
            Enviar WhatsApp
            <div className="text-xs text-white/60 mt-1">+56 9 2008 0031</div>
          </a>
        </div>

        {/* EXPECTATIONS (simple) */}
        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
          <p className="font-semibold text-white">Para responder más rápido:</p>
          <p className="mt-1">
            Cuéntanos <strong className="text-white">qué necesitas</strong>, <strong className="text-white">fecha/ciudad</strong> y{" "}
            <strong className="text-white">objetivo</strong>. Si tienes referencias, mejor.
          </p>
        </div>

        {/* FORM */}
        <div id="form" className="mt-8">
          <h2 className="text-lg font-semibold text-white mb-2">Formulario</h2>
          <p className="text-sm text-white/70 mb-4">
            No llamamos. Te respondemos por mail o WhatsApp en 24–48h hábiles.
          </p>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <ZohoLeadForm />
          </div>

          {/* AFTER-FORM CTA */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-center"
              data-cta="contact_whatsapp_after_form"
            >
              Prefiero WhatsApp →
            </a>
            <Link href="/" className="btn-outline text-center" data-cta="contact_back_home">
              Volver al inicio
            </Link>
          </div>

          <p className="mt-4 text-xs text-white/50">
            Si tu fecha es dentro de los próximos 10 días, indícalo para confirmar disponibilidad.
          </p>
        </div>
      </div>
    </section>
  );
}
