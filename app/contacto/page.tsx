import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://www.dekaelomedia.com";
const WHATSAPP_NUMBER = "56920080031";
const EMAIL = "info@dekaelomedia.com";

export const metadata: Metadata = {
  title:
    "Contacto — Dekaelo Media | Productora Audiovisual Corporativa en Chile",
  description:
    "Contacto Dekaelo Media. Producción audiovisual corporativa, series institucionales y vodcast ejecutivos para banca, gremios, clínicas y empresas tecnológicas en Chile.",
  keywords: [
    "contacto productora audiovisual",
    "cotizar video corporativo Chile",
    "vodcast corporativo",
    "producción audiovisual ejecutiva",
  ],
  alternates: {
    canonical: `${SITE_URL}/contacto`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contacto — Dekaelo Media",
    description:
      "Conversemos tu proyecto audiovisual corporativo.",
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
    `Tipo de proyecto:\n` +
    `Fecha estimada:\n` +
    `Objetivo principal:\n` +
    `Ciudad:\n`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function Page() {
  const wa = buildWhatsAppLink();

  return (
    <main className="bg-black text-white">

      <section className="container max-w-2xl py-32 text-center">

        {/* HEADER */}
        <h1 className="text-4xl md:text-5xl font-semibold">
          Hablemos
        </h1>

        <p className="mt-6 text-white/65 leading-relaxed">
          Si tu organización necesita desarrollar una serie institucional,
          producir contenido ejecutivo o fortalecer su comunicación
          audiovisual, conversemos el contexto y objetivos.
        </p>

        <p className="mt-6 text-white/60 leading-relaxed">
          Diseñamos el formato adecuado y estructuramos el proyecto
          con alcance claro, tiempos definidos y estándar visual
          corporativo.
        </p>

        <p className="mt-6 text-sm text-white/40">
          Tiempo de respuesta habitual: 24–48 horas hábiles.
        </p>


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
            Trabajamos principalmente con banca, gremios empresariales,
            clínicas, empresas tecnológicas y holdings familiares.
          </p>

          <p className="mt-4">
            Proyectos de continuidad, temporadas ejecutivas y comunicación
            institucional de mediano y largo plazo.
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
