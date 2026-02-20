import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://www.dekaelomedia.com";
const WHATSAPP_NUMBER = "56920080031";
const EMAIL = "info@dekaelomedia.com";

export const metadata: Metadata = {
  title:
    "Contacto — Dekaelo Media | Producción Audiovisual Corporativa en Chile",
  description:
    "Contacto Dekaelo Media. Producción de video corporativo, series institucionales y comunicación ejecutiva para empresas en Chile.",
  keywords: [
    "contacto productora audiovisual Chile",
    "cotizar video corporativo Chile",
    "producción audiovisual ejecutiva",
    "serie institucional",
  ],
  alternates: {
    canonical: `${SITE_URL}/contacto`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contacto — Dekaelo Media",
    description:
      "Conversemos tu proyecto audiovisual corporativo en Chile.",
    url: `${SITE_URL}/contacto`,
    siteName: "Dekaelo Media",
    locale: "es_CL",
    type: "website",
  },
};

function buildWhatsAppLink() {
  const text =
    `Hola Dekaelo Media.\n` +
    `Quiero conversar un proyecto audiovisual.\n\n` +
    `Organización:\n` +
    `Tipo de proyecto (serie / video corporativo / vodcast):\n` +
    `Fecha estimada de grabación:\n` +
    `Objetivo principal:\n` +
    `Ciudad:\n` +
    `Presupuesto referencial (opcional):\n`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function Page() {
  const wa = buildWhatsAppLink();

  return (
    <main className="bg-black text-white">

      <section className="container max-w-2xl py-32 text-center">

        {/* HEADER */}
        <h1 className="text-4xl md:text-5xl font-semibold">
          Contacto
        </h1>

        <p className="mt-6 text-white/65 leading-relaxed">
          Si tu empresa necesita producir un video corporativo,
          desarrollar una serie institucional o estructurar comunicación ejecutiva,
          conversemos el contexto y objetivos.
        </p>

        <p className="mt-6 text-white/60 leading-relaxed">
          Diseñamos el formato adecuado y estructuramos el proyecto
          con alcance claro, tiempos definidos y estándar visual corporativo.
        </p>

        <p className="mt-6 text-sm text-white/40">
          Tiempo de respuesta habitual: 24–48 horas hábiles.
        </p>

        {/* DISPONIBILIDAD */}
        <div className="mt-10 border border-white/10 rounded-xl p-6 text-left text-sm text-white/60 leading-relaxed">
          <p className="text-white font-medium mb-2">
            Disponibilidad 2026
          </p>
          <p>
            La agenda de rodajes se organiza con anticipación.
            Durante el período <strong>22 de abril al 5 de mayo de 2026</strong>
            no se realizarán rodajes presenciales.
          </p>
          <p className="mt-3">
            La planificación, preproducción y postproducción continúan con normalidad.
            Recomendamos coordinar fechas con anticipación para asegurar disponibilidad.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 px-8 py-4 hover:bg-white hover:text-black transition"
          >
            Escribir por WhatsApp
            <div className="text-xs opacity-60 mt-1">
              +56 9 2008 0031
            </div>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="border border-white/30 px-8 py-4 hover:bg-white hover:text-black transition"
          >
            Enviar correo
            <div className="text-xs opacity-60 mt-1">
              {EMAIL}
            </div>
          </a>

        </div>

        {/* GUÍA ESTRATÉGICA */}
        <div className="mt-16 text-white/50 text-sm leading-relaxed max-w-xl mx-auto">
          <p>
            Para avanzar de forma más eficiente, puedes incluir:
          </p>

          <p className="mt-4">
            organización · objetivo estratégico · tipo de contenido ·
            ciudad de grabación · fecha estimada · presupuesto referencial
          </p>
        </div>

        {/* PERFIL DE CLIENTE */}
        <div className="mt-20 border-t border-white/10 pt-12 text-white/50 text-sm leading-relaxed">
          <p>
            Trabajamos con banca, educación, industria, clínicas,
            empresas tecnológicas y organizaciones que requieren
            comunicación audiovisual clara y profesional.
          </p>

          <p className="mt-4">
            Desarrollamos tanto temporadas ejecutivas como
            proyectos puntuales de video corporativo.
          </p>
        </div>

        {/* VOLVER */}
        <div className="mt-16">
          <Link
            href="/"
            className="text-white/40 hover:text-white text-sm transition"
          >
            ← Volver al inicio
          </Link>
        </div>

      </section>
    </main>
  );
}
