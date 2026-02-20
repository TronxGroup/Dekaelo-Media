import Link from "next/link";
import type { Metadata } from "next";
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
      <section className="container max-w-4xl py-36">
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
          Producción audiovisual corporativa para empresas que necesitan
          comunicar con claridad, solidez y criterio estético.
        </h1>

        <p className="mt-8 text-lg text-white/65 leading-relaxed">
          Diseñamos y producimos series institucionales, vodcast ejecutivos y
          videos corporativos para banca, clínicas, gremios empresariales,
          empresas tecnológicas y compañías en crecimiento en Chile.
          Trabajamos con dirección profesional, procesos claros y estándar
          cinematográfico aplicado al mundo corporativo.
        </p>

        <div className="mt-12 flex gap-6">
          <Link
            href="/contacto"
            className="border border-white/30 px-6 py-3 text-sm hover:bg-white hover:text-black transition"
          >
            Agendar conversación
          </Link>

          <Link
            href="/servicios"
            className="border border-white/10 px-6 py-3 text-sm text-white/60 hover:text-white transition"
          >
            Ver servicios
          </Link>
        </div>
      </section>

      {/* IMAGEN DESTACADA */}
      <section className="container pb-28">
        <img
          src="/images/dekaelo-entrevista.jpg"
          alt="Grabación entrevista institucional Dekaelo Media"
          className="w-full object-cover rounded-lg"
        />
      </section>

      {/* REEL */}
      <section className="container pb-28">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
          Reel institucional
        </h2>

        <VideoEmbed
          src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0&modestbranding=1&playsinline=1"
          title="Dekaelo Media Reel"
        />
      </section>

      {/* SERVICIOS */}
      <section className="container border-t border-white/10 py-28 max-w-6xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-14 text-white/70 text-sm leading-relaxed">

          <div>
            <h3 className="text-white font-medium mb-4">
              Series corporativas
            </h3>
            Producción de temporadas completas enfocadas en liderazgo,
            cultura organizacional y posicionamiento institucional.
            Diseñamos formatos sostenidos en el tiempo para empresas que
            requieren comunicación continua.
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">
              Video corporativo
            </h3>
            Producción integral de videos institucionales para presentaciones
            ejecutivas, marca empleadora, lanzamientos internos y sitio web.
            Incluye dirección, rodaje profesional y postproducción completa.
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">
              Vodcast ejecutivo
            </h3>
            Desarrollo de formatos de conversación institucional para
            directorios, presidencias y equipos ejecutivos. Producción
            estructurada y estándar visual consistente.
          </div>

        </div>
      </section>

      {/* CASOS */}
      <section className="container border-t border-white/10 py-28">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Casos seleccionados
        </h2>

        <div className="grid md:grid-cols-3 gap-14 text-white/70 text-sm leading-relaxed">

          <div>
            <h3 className="text-white font-medium mb-3">
              Banco BICE — Serie vodcast institucional (2024–2026)
            </h3>
            Producción continua enfocada en liderazgo ejecutivo y cultura
            organizacional.
            <br />
            <span className="text-white/40">
              Contenido confidencial de uso interno.
            </span>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">
              iGromi — Serie corporativa (8 episodios)
            </h3>
            Producción audiovisual para posicionamiento tecnológico e
            industrial, combinando claridad técnica y tratamiento visual
            cinematográfico.
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">
              Reality Day — Serie documental original
            </h3>
            Proyecto editorial desarrollado junto a Tronx TV.
            Retratos documentales de oficios y pequeñas empresas en Chile.
          </div>

        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="container border-t border-white/10 py-32 max-w-5xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Experiencia
        </h2>

        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <div className="text-6xl font-semibold">58+</div>
            <p className="text-white/50 mt-3 text-sm">
              episodios producidos
            </p>
          </div>

          <div>
            <div className="text-6xl font-semibold">6</div>
            <p className="text-white/50 mt-3 text-sm">
              industrias distintas
            </p>
          </div>

          <div>
            <div className="text-6xl font-semibold">3+</div>
            <p className="text-white/50 mt-3 text-sm">
              años desarrollando series continuas
            </p>
          </div>
        </div>

        <p className="mt-16 text-white/60 leading-relaxed max-w-3xl">
          Diseñamos formatos, producimos temporadas completas y ejecutamos
          proyectos audiovisuales puntuales con el mismo estándar técnico
          y narrativo. Trabajamos como partner de producción, manteniendo
          procesos eficientes y discretos.
        </p>
      </section>

      {/* ENFOQUE */}
      <section className="container border-t border-white/10 py-32 max-w-5xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Nuestro enfoque
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-sm text-white/70">
          <div>1. Definición estratégica del objetivo comunicacional</div>
          <div>2. Diseño de formato y estructura narrativa</div>
          <div>3. Producción ejecutiva y rodaje profesional</div>
          <div>4. Postproducción y entrega optimizada</div>
        </div>
      </section>

      {/* DISPONIBILIDAD */}
      <section className="container border-t border-white/10 py-24 max-w-4xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
          Disponibilidad 2026
        </h2>

        <p className="text-white/60 leading-relaxed">
          La agenda de rodajes se organiza con anticipación.
          Durante el período <strong>22 de abril al 5 de mayo de 2026</strong> 
           no se realizarán rodajes presenciales.
          La planificación y postproducción continúan con normalidad.
          Recomendamos coordinar proyectos con anticipación para asegurar
          disponibilidad.
        </p>
      </section>

      {/* CLIENTES */}
      <section className="border-t border-white/10 py-24">
        <div className="container">
          <ClientLogos />
        </div>
      </section>

      {/* CONTACTO */}
      <section className="container border-t border-white/10 py-32 text-center">
        <h2 className="text-2xl mb-6">Hablemos</h2>

        <p className="text-white/50 mb-10 max-w-2xl mx-auto">
          Si tu empresa necesita desarrollar una serie institucional o
          producir un video corporativo profesional, podemos diseñar y
          ejecutar el proyecto de principio a fin.
        </p>

        <Link
          href="/contacto"
          className="border border-white/30 px-8 py-3 text-sm hover:bg-white hover:text-black transition"
        >
          Solicitar propuesta
        </Link>
      </section>

    </main>
  );
}
