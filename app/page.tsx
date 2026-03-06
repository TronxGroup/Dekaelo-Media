import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { VideoEmbed } from "./components/VideoEmbed";
import { ClientLogos } from "./components/ClientLogos";

export const metadata: Metadata = {
  title: "Dekaelo Media — Producción Audiovisual Corporativa en Chile",
  description:
    "Productora audiovisual boutique especializada en series institucionales, vodcast ejecutivos y videos corporativos para empresas en Chile.",
  keywords: [
    "productora audiovisual Chile",
    "video corporativo Chile",
    "video institucional empresa",
    "vodcast corporativo",
    "producción audiovisual Santiago",
  ],
  openGraph: {
    title: "Dekaelo Media — Producción Audiovisual Corporativa",
    description:
      "Producción audiovisual profesional para empresas que comunican liderazgo, cultura y visión estratégica.",
    url: "https://www.dekaelomedia.com",
    siteName: "Dekaelo Media",
    locale: "es_CL",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      {/* HERO */}
      <section className="container max-w-5xl pt-28 pb-20 md:pt-36 md:pb-24">
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
          Producción audiovisual corporativa con criterio cinematográfico.
        </h1>

        <p className="mt-8 text-lg text-white/65 leading-relaxed max-w-4xl">
          Diseñamos y producimos <strong>series institucionales</strong>,{" "}
          <strong>vodcast ejecutivos</strong> y <strong>videos corporativos</strong>{" "}
          para organizaciones que necesitan comunicar liderazgo, cultura y estrategia con claridad.
          Operamos con dirección profesional, procesos ordenados y discreción operativa.
        </p>

        {/* Micro-bullets (sin precio, sin vibe “landing”) */}
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/60">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Partner de producción para marketing, comunicaciones y directorios
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Estándar visual sobrio y consistente
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Propuesta en 24–48h hábiles
          </span>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          {/* Autoridad primero */}
          <Link
            href="/portafolio"
            className="border border-white/30 px-8 py-3 text-sm hover:bg-white hover:text-black transition"
          >
            Ver portafolio
          </Link>

          {/* CTA secundario (sin agresividad) */}
          <Link
            href="/video-corporativo"
            className="border border-white/10 bg-white/5 px-8 py-3 text-sm text-white/80 hover:bg-white/10 transition"
          >
            Solicitar propuesta
          </Link>

          <Link
            href="/quienes-somos"
            className="px-2 py-3 text-sm text-white/50 hover:text-white transition"
          >
            Conocer nuestro enfoque →
          </Link>
        </div>
      </section>

      {/* IMAGEN DESTACADA */}
      <section className="container pb-20 md:pb-24">
        <Image
          src="/images/dekaelo-entrevista.jpg"
          alt="Grabación entrevista institucional Dekaelo Media"
          width={1600}
          height={900}
          className="w-full object-cover rounded-3xl border border-white/10"
          priority
        />
      </section>

      {/* REEL */}
      <section className="container pb-20 md:pb-24 max-w-5xl">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-sm uppercase tracking-widest text-white/40">
            Reel institucional
          </h2>
          <Link href="/portafolio" className="text-sm text-white/50 hover:text-white transition">
            Ver casos →
          </Link>
        </div>

        <VideoEmbed
          src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0&modestbranding=1&playsinline=1"
          title="Dekaelo Media Reel"
        />
      </section>

      {/* CLIENTES (subido arriba para credibilidad) */}
      <section className="border-t border-white/10 py-20">
        <div className="container">
          <div className="mb-8 text-center text-sm text-white/60">
            Experiencia en producción institucional y ejecutiva
          </div>
          <ClientLogos />
        </div>
      </section>

      {/* SERVICIOS (cards clickeables, sin botones) */}
      <section className="container border-t border-white/10 py-24 max-w-6xl">
        <div className="flex items-end justify-between gap-6 mb-16">
          <h2 className="text-sm uppercase tracking-widest text-white/40">
            Servicios
          </h2>
          <Link href="/servicios" className="text-sm text-white/50 hover:text-white transition">
            Ver detalle →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-white/70 text-sm leading-relaxed">
          <Link
            href="/servicios"
            className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition"
          >
            <h3 className="text-white font-medium mb-3">Series corporativas</h3>
            <p>
              Temporadas para liderazgo ejecutivo, cultura organizacional y posicionamiento institucional.
            </p>
            <p className="mt-4 text-white/60">
              Formatos sostenibles con coherencia en el tiempo, calendario y sistema editorial.
            </p>
            <div className="mt-6 text-xs text-white/50">Continuidad • Coherencia • Partner</div>
          </Link>

          <Link
            href="/video-corporativo"
            className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition"
          >
            <h3 className="text-white font-medium mb-3">Video corporativo</h3>
            <p>
              Piezas institucionales claras y bien ejecutadas para directorio, sitio web o marca empleadora.
            </p>
            <p className="mt-4 text-white/60">
              Dirección, rodaje profesional y postproducción completa con estándar sobrio.
            </p>
            <div className="mt-6 text-xs text-white/50">Solidez • Claridad • Credibilidad</div>
          </Link>

          <Link
            href="/servicios"
            className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition"
          >
            <h3 className="text-white font-medium mb-3">Vodcast ejecutivo</h3>
            <p>
              Formatos de conversación estructurada con presidencias, gerencias y equipos directivos.
            </p>
            <p className="mt-4 text-white/60">
              Puesta en escena, narrativa y producción continua para cultura y alineamiento.
            </p>
            <div className="mt-6 text-xs text-white/50">Estructura • Ritmo • Consistencia</div>
          </Link>
        </div>
      </section>

      {/* CASOS SELECCIONADOS (3) */}
      <section className="container border-t border-white/10 py-24">
        <div className="flex items-end justify-between gap-6 mb-16">
          <h2 className="text-sm uppercase tracking-widest text-white/40">
            Casos seleccionados
          </h2>
          <Link href="/portafolio" className="text-sm text-white/50 hover:text-white transition">
            Ver portafolio →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-white/70 text-sm leading-relaxed">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-xs text-white/50 mb-3">Vodcast • Serie institucional</div>
            <h3 className="text-white font-medium mb-3">
              Banco BICE — Serie vodcast institucional (2024–2026)
            </h3>
            Producción continua enfocada en liderazgo ejecutivo y cultura organizacional.
            <br />
            <span className="text-white/40">Contenido confidencial de uso interno.</span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-xs text-white/50 mb-3">Vodcast • Serie corporativa</div>
            <h3 className="text-white font-medium mb-3">
              iGromi — Serie corporativa industrial (8 episodios)
            </h3>
            Posicionamiento tecnológico e industrial, combinando claridad técnica y tratamiento visual cinematográfico.
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-xs text-white/50 mb-3">Proyecto editorial • Documental</div>
            <h3 className="text-white font-medium mb-3">
              Reality Day — Serie documental original
            </h3>
            Retratos documentales de oficios y pequeñas empresas en Chile, desarrollado junto a Tronx TV.
          </div>
        </div>
      </section>

      {/* PROCESO (mini) */}
      <section className="container border-t border-white/10 py-24 max-w-5xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-12">
          Cómo trabajamos
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-sm text-white/70">
          <div>01 — Estrategia (objetivo, audiencia, alcance)</div>
          <div>02 — Diseño (formato y planificación)</div>
          <div>03 — Producción (rodaje profesional)</div>
          <div>04 — Post (color, sonido, entregas)</div>
        </div>

        <p className="mt-12 text-white/60 leading-relaxed max-w-3xl">
          Trasladamos el lenguaje cinematográfico al entorno corporativo con estructura ejecutiva,
          entregables concretos y procesos eficientes.
        </p>
      </section>

      {/* DISPONIBILIDAD (compacta) */}
      <section className="container border-t border-white/10 py-20 max-w-4xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-8">
          Agenda 2026
        </h2>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white/60 leading-relaxed">
          <p>
            La agenda de rodajes se organiza con anticipación. Durante el período{" "}
            <strong>22 de abril al 5 de mayo de 2026</strong> no se realizarán rodajes presenciales.
          </p>
          <p className="mt-4">
            La planificación y postproducción continúan con normalidad. Recomendamos coordinar con anticipación.
          </p>
        </div>
      </section>

      {/* CIERRE */}
      <section className="container border-t border-white/10 py-28 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          ¿Conversamos tu proyecto?
        </h2>

        <p className="text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Si tu organización necesita desarrollar una serie institucional o producir un video corporativo sólido,
          podemos diseñar el formato y ejecutar la producción de principio a fin.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/video-corporativo"
            className="border border-white/30 px-10 py-4 text-sm hover:bg-white hover:text-black transition"
          >
            Solicitar propuesta
          </Link>

          <Link
            href="/contacto"
            className="border border-white/10 bg-white/5 px-10 py-4 text-sm text-white/80 hover:bg-white/10 transition"
          >
            Contacto directo
          </Link>
        </div>
      </section>
    </main>
  );
}
