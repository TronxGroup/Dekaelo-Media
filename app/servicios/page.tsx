import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Servicios — Dekaelo Media | Producción Audiovisual Corporativa en Chile",
  description:
    "Servicios de producción audiovisual corporativa en Chile: series institucionales, video corporativo, vodcast ejecutivos y comunicación estratégica para empresas.",
  keywords: [
    "productora audiovisual Chile",
    "video corporativo Chile",
    "video institucional empresa",
    "vodcast corporativo",
    "producción audiovisual Santiago",
    "comunicación interna empresas",
  ],
  alternates: {
    canonical: "https://www.dekaelomedia.com/servicios",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Servicios — Dekaelo Media",
    description:
      "Producción audiovisual boutique para organizaciones que comunican liderazgo, cultura y visión estratégica.",
    url: "https://www.dekaelomedia.com/servicios",
    siteName: "Dekaelo Media",
    locale: "es_CL",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="container max-w-4xl py-32">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Producción audiovisual corporativa
        </h1>

        <p className="mt-6 text-lg text-white/65 leading-relaxed">
          Diseñamos y producimos series institucionales, videos corporativos
          y formatos ejecutivos para organizaciones que necesitan comunicar
          liderazgo, cultura y estrategia con claridad y estándar profesional.
        </p>

        <p className="mt-6 text-white/60 leading-relaxed">
          Trabajamos con pocos formatos, bien estructurados. Cada proyecto
          responde a un objetivo concreto y se ejecuta con procesos ordenados,
          dirección profesional y tratamiento visual cinematográfico.
        </p>
      </section>


      {/* SERVICIOS PRINCIPALES */}
      <section className="container border-t border-white/10 py-28">
        <div className="grid md:grid-cols-3 gap-16 text-white/70 leading-relaxed">

          <div>
            <h2 className="text-white text-xl font-medium mb-4">
              Series corporativas
            </h2>
            <p>
              Desarrollo de temporadas audiovisuales para liderazgo ejecutivo,
              cultura organizacional y posicionamiento institucional.
            </p>
            <p className="mt-4 text-white/60">
              Diseñamos el formato, estructura narrativa, sistema de producción
              y calendario de grabación para proyectos sostenidos en el tiempo.
            </p>
            <ul className="mt-6 space-y-2 text-white/60 text-sm">
              <li>• Temporadas de entrevistas ejecutivas</li>
              <li>• Series internas de liderazgo</li>
              <li>• Ciclos institucionales continuos</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-medium mb-4">
              Video corporativo
            </h2>
            <p>
              Producción integral de videos institucionales para empresas que
              requieren una pieza clara, profesional y bien ejecutada.
            </p>
            <p className="mt-4 text-white/60">
              Ideal para presentaciones ejecutivas, sitio web, marca empleadora,
              lanzamientos internos o comunicación estratégica puntual.
            </p>
            <ul className="mt-6 space-y-2 text-white/60 text-sm">
              <li>• Video institucional empresa</li>
              <li>• Entrevista directiva</li>
              <li>• Video de marca empleadora</li>
              <li>• Presentaciones corporativas</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-medium mb-4">
              Vodcast ejecutivo
            </h2>
            <p>
              Formatos de conversación estructurada con liderazgo y equipos
              directivos.
            </p>
            <p className="mt-4 text-white/60">
              Diseñamos narrativa, puesta en escena y producción continua para
              fortalecer alineamiento estratégico y cultura organizacional.
            </p>
            <ul className="mt-6 space-y-2 text-white/60 text-sm">
              <li>• Conversaciones presidencia / gerencia</li>
              <li>• Series internas para equipos</li>
              <li>• Ciclos estratégicos de comunicación</li>
            </ul>
          </div>

        </div>
      </section>


      {/* IMAGEN ATMÓSFERA */}
      <section className="container py-24">
        <Image
          src="/servicios_dekaelo.jpg"
          alt="Producción audiovisual corporativa Dekaelo Media"
          width={1400}
          height={900}
          className="rounded-3xl border border-white/10 object-cover"
          priority
        />
      </section>


      {/* PROCESO DETALLADO */}
      <section className="container border-t border-white/10 py-28 max-w-6xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Proceso de trabajo
        </h2>

        <div className="grid md:grid-cols-4 gap-12 text-white/70 text-sm leading-relaxed">

          <div>
            <div className="text-white font-medium mb-3">01 — Estrategia</div>
            Definición de objetivos, audiencia, tono y alcance del proyecto.
          </div>

          <div>
            <div className="text-white font-medium mb-3">02 — Diseño</div>
            Desarrollo de formato, pauta narrativa y planificación de rodaje.
          </div>

          <div>
            <div className="text-white font-medium mb-3">03 — Producción</div>
            Grabación con equipo técnico profesional, iluminación cuidada y
            dirección precisa.
          </div>

          <div>
            <div className="text-white font-medium mb-3">04 — Postproducción</div>
            Edición, corrección de color, sonido y entregas optimizadas por
            plataforma.
          </div>

        </div>

        <p className="mt-14 text-white/60 leading-relaxed max-w-3xl">
          Operamos como partner de producción. Tu equipo define prioridades
          estratégicas; nosotros estructuramos y ejecutamos el proyecto con
          eficiencia, discreción y estándar consistente.
        </p>
      </section>


      {/* PARA QUIÉN ES */}
      <section className="container border-t border-white/10 py-28 max-w-5xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-12">
          ¿Para quién es este servicio?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-white/70 leading-relaxed">

          <div>
            • Empresas que necesitan profesionalizar su comunicación audiovisual. <br /><br />
            • Gerencias de marketing o comunicaciones internas. <br /><br />
            • Directorios que requieren claridad estratégica en formato audiovisual.
          </div>

          <div>
            • Empresas medianas que necesitan un video corporativo sólido. <br /><br />
            • Organizaciones que buscan continuidad narrativa, no piezas aisladas.
          </div>

        </div>
      </section>


      {/* ENFOQUE DIFERENCIAL */}
      <section className="container border-t border-white/10 py-28 max-w-4xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-12">
          Nuestro diferencial
        </h2>

        <p className="text-white/70 leading-relaxed">
          Combinamos lenguaje cinematográfico con estructura corporativa.
          No improvisamos piezas aisladas: diseñamos proyectos que aportan
          coherencia, continuidad y solidez institucional.
        </p>

        <p className="mt-6 text-white/70 leading-relaxed">
          Nos adaptamos a entornos de alta exigencia como banca, salud y
          organizaciones complejas, manteniendo procesos claros y
          confidencialidad operativa.
        </p>
      </section>


      {/* CTA FINAL */}
      <section className="container border-t border-white/10 py-32 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          ¿Evaluamos tu proyecto?
        </h2>

        <p className="text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Cuéntanos objetivos, fechas y contexto. Diseñamos un alcance acorde
          a tu organización y definimos una propuesta clara.
        </p>

        <Link
          href="/contacto"
          className="border border-white/30 px-10 py-4 text-sm hover:bg-white hover:text-black transition"
        >
          Solicitar propuesta
        </Link>
      </section>

    </main>
  );
}
