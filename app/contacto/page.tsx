// app/contacto/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://www.dekaelomedia.com";
const WHATSAPP_NUMBER = "56920080031";
const EMAIL = "hola@dekaelomedia.com"; // cámbialo si usas otro

export const metadata: Metadata = {
  title: "Contacto — Dekaelo Media",
  description:
    "Conversemos tu proyecto de vodcast o contenido corporativo. Escríbenos por WhatsApp o correo y te respondemos con una propuesta clara.",
};

function buildWhatsAppLink() {
  const text =
    `Hola Dekaelo Media.\n` +
    `Quiero conversar un proyecto audiovisual.\n\n` +
    `Empresa:\n` +
    `Qué necesitan producir:\n` +
    `Fecha tentativa:\n` +
    `Objetivo principal:\n`;

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
          Si tu organización necesita producir un vodcast,
          una serie institucional o contenido corporativo,
          conversemos el contexto y te proponemos el formato adecuado.
        </p>

        <p className="mt-4 text-sm text-white/50">
          Respuesta típica: 24–48 horas hábiles.
        </p>


        {/* CTA PRINCIPAL */}
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


        {/* GUIA SUAVE */}
        <div className="mt-16 text-white/50 text-sm leading-relaxed max-w-xl mx-auto">
          <p>
            Para avanzar más rápido, cuéntanos brevemente:
          </p>
          <p className="mt-3">
            objetivo · fecha · ciudad · tipo de contenido · referencias
          </p>
        </div>


        {/* VOLVER */}
        <div className="mt-14">
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
