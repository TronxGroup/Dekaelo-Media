import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Servicios — Dekaelo Media | Producción Audiovisual Corporativa en Chile",
  description:
    "Servicios de producción audiovisual corporativa en Chile: series institucionales, vodcast internos, comunicación ejecutiva y contenido estratégico para banca, gremios, clínicas y empresas tecnológicas.",
  keywords: [
    "productora audiovisual Chile",
    "video corporativo Chile",
    "vodcast corporativo",
    "serie institucional",
    "comunicación interna empresas",
    "producción audiovisual ejecutiva",
  ],
  alternates: {
    canonical: "https://www.dekaelomedia.com/servicios",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Servicios — Dekaelo Media",
    description:
      "Producción audiovisual boutique para organizaciones que comunican liderazgo, cultura y visión de largo plazo.",
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
          Servicios
        </h1>

        <p className="mt-6 text-lg text-white/65 leading-relaxed">
          Diseñamos y producimos contenido audiovisual para organizaciones
          que necesitan comunicar liderazgo, cultura y estrategia con
          claridad y continuidad.
        </p>

        <p className="mt-6 text-white/60 leading-relaxed">
          Trabajamos con pocos formatos, bien ejecutados. Cada proyecto
          responde a un objetivo concreto y se desarrolla con estándar
          visual cinematográfico y procesos ordenados.
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
              Desarrollo de temporadas audiovisuales para liderazgo
              ejecutivo, cultura organizacional y posicionamiento institucional.
              Diseñamos el formato, la estructura narrativa y el sistema
              de producción para proyectos de continuidad.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-medium mb-4">
              Comunicación institucional
            </h2>
            <p>
              Producción de videos estratégicos para comunicación interna,
              directorios, marca empleadora, presentaciones ejecutivas y
              contenidos de uso prolongado en web o intranet.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-medium mb-4">
              Vodcast ejecutivo
            </h2>
            <p>
              Conversaciones estructuradas con liderazgo y equipos
              directivos. Formato ideal para humanizar la organización
              y alinear visión estratégica en ciclos internos o externos.
            </p>
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


      {/* PROCESO */}
      <section className="container border-t border-white/10 py-28 max-w-5xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Proceso de trabajo
        </h2>

        <div className="grid md:grid-cols-4 gap-12 text-white/70 text-sm leading-relaxed">

          <div>
            <div className="text-white font-medium mb-3">01</div>
            Definición de objetivos, audiencia y alcance del proyecto.
          </div>

          <div>
            <div className="text-white font-medium mb-3">02</div>
            Diseño de formato, pauta y estructura narrativa.
          </div>

          <div>
            <div className="text-white font-medium mb-3">03</div>
            Producción con equipo ligero y estándar cinematográfico.
          </div>

          <div>
            <div className="text-white font-medium mb-3">04</div>
            Edición, ajustes y entregas optimizadas por plataforma.
          </div>

        </div>

        <p className="mt-14 text-white/60 leading-relaxed">
          Operamos como partner de producción. Tu equipo define prioridades
          estratégicas; nosotros estructuramos y ejecutamos el proyecto de
          principio a fin, manteniendo discreción y eficiencia.
        </p>
      </section>


      {/* CASOS DE USO */}
      <section className="container border-t border-white/10 py-28 max-w-4xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-12">
          Casos de uso frecuentes
        </h2>

        <ul className="space-y-4 text-white/70 leading-relaxed">
          <li>• Ciclos de entrevistas con liderazgo o directorio</li>
          <li>• Comunicación interna y cultura organizacional</li>
          <li>• Marca empleadora y posicionamiento institucional</li>
          <li>• Presentaciones estratégicas o memorias corporativas</li>
          <li>• Series documentales o proyectos editoriales</li>
          <li>• Lanzamientos internos o hitos organizacionales</li>
        </ul>
      </section>


      {/* ENFOQUE DIFERENCIAL */}
      <section className="container border-t border-white/10 py-28 max-w-4xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-12">
          Nuestro enfoque
        </h2>

        <p className="text-white/70 leading-relaxed">
          Creemos en la claridad, la estética sobria y la continuidad.
          No desarrollamos piezas aisladas sin estrategia, sino proyectos
          que puedan sostenerse en el tiempo y aportar coherencia al relato
          institucional.
        </p>

        <p className="mt-6 text-white/70 leading-relaxed">
          Combinamos lenguaje cinematográfico con procesos corporativos
          ordenados, adaptándonos a entornos de alta exigencia como banca,
          salud y grandes organizaciones.
        </p>
      </section>


      {/* CTA FINAL */}
      <section className="container border-t border-white/10 py-32 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          ¿Conversamos tu proyecto?
        </h2>

        <p className="text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Cuéntanos objetivos, fechas y contexto. Diseñamos un formato
          y alcance acorde a tu organización.
        </p>

        <Link
          href="/contacto"
          className="border border-white/30 px-10 py-4 text-sm hover:bg-white hover:text-black transition"
        >
          Contactar
        </Link>
      </section>

    </main>
  );
}
