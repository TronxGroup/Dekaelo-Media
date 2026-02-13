import Link from "next/link";
import type { Metadata } from "next";
import { VideoEmbed } from "./components/VideoEmbed";
import { ClientLogos } from "./components/ClientLogos";

export const metadata: Metadata = {
  title:
    "Dekaelo Media — Productora Audiovisual Corporativa en Chile",
  description:
    "Dekaelo Media es una productora audiovisual boutique especializada en comunicación corporativa, series institucionales y vodcast internos para banca, gremios, clínicas y empresas tecnológicas en Chile.",
  keywords: [
    "productora audiovisual Chile",
    "video corporativo Chile",
    "vodcast corporativo",
    "serie institucional",
    "comunicación interna empresas",
    "productora audiovisual corporativa",
  ],
  openGraph: {
    title:
      "Dekaelo Media — Producción Audiovisual Corporativa",
    description:
      "Producción audiovisual para organizaciones que comunican liderazgo, cultura y visión de largo plazo.",
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
          Producción audiovisual para organizaciones que comunican liderazgo,
          cultura y visión de largo plazo.
        </h1>

        <p className="mt-8 text-lg text-white/65 leading-relaxed">
          Dekaelo Media es una productora audiovisual boutique enfocada en
          comunicación corporativa y series institucionales. Trabajamos con
          banca, gremios empresariales, clínicas, empresas tecnológicas y
          holdings familiares desarrollando proyectos de alto estándar visual
          y narrativa cuidada.
        </p>

        <div className="mt-12">
          <Link
            href="/contacto"
            className="border border-white/30 px-6 py-3 text-sm hover:bg-white hover:text-black transition"
          >
            Conversar un proyecto
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

      {/* CASOS */}
      <section className="container border-t border-white/10 py-28">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Casos seleccionados
        </h2>

        <div className="grid md:grid-cols-3 gap-14 text-white/70 text-sm leading-relaxed">

          <div>
            <h3 className="text-white font-medium mb-3">
              Banco BICE — Serie vodcast interna (2024–2026)
            </h3>
            <p>
              Producción continua de temporada institucional enfocada en
              liderazgo ejecutivo y cultura organizacional.
              <br />
              <span className="text-white/40">
                Contenido confidencial de uso interno.
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">
              iGromi — Serie corporativa (8 episodios)
            </h3>
            <p>
              Producción audiovisual para posicionamiento tecnológico e
              industrial, combinando claridad técnica y tratamiento visual
              cinematográfico.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">
              Reality Day — Serie documental original
            </h3>
            <p>
              Proyecto editorial desarrollado junto a Tronx TV. Retratos
              documentales de oficios y pequeñas empresas en Chile.
            </p>
          </div>
        </div>
      </section>

      {/* GALERÍA VISUAL */}
      <section className="container border-t border-white/10 py-28">
        <div className="grid md:grid-cols-2 gap-10">
          <img
            src="/images/dekaelo-set.jpg"
            alt="Set de grabación Dekaelo Media"
            className="w-full object-cover rounded-lg"
          />
          <img
            src="/images/dekaelo-closeup.jpg"
            alt="Plano entrevista institucional"
            className="w-full object-cover rounded-lg"
          />
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
          Diseñamos formatos, producimos temporadas completas y entregamos
          piezas listas para comunicación interna, web y plataformas digitales.
          Trabajamos como partner de producción, manteniendo procesos
          eficientes y discretos para organizaciones de alto perfil.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="container border-t border-white/10 py-32 max-w-5xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-14 text-white/70 text-sm leading-relaxed">

          <div>
            <h3 className="text-white font-medium mb-4">
              Series corporativas
            </h3>
            Producción de ciclos audiovisuales para liderazgo, cultura
            organizacional y posicionamiento institucional.
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">
              Comunicación institucional
            </h3>
            Videos estratégicos para comunicación interna, directorio,
            marca empleadora y presentaciones ejecutivas.
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">
              Proyectos editoriales
            </h3>
            Desarrollo de formatos documentales y narrativas originales
            con lenguaje cinematográfico.
          </div>

        </div>
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

        <p className="text-white/50 mb-10">
          Si tu organización necesita producir una serie, desarrollar contenido
          institucional o fortalecer su comunicación audiovisual, podemos
          diseñar el proyecto y ejecutarlo de principio a fin.
        </p>

        <Link
          href="/contacto"
          className="border border-white/30 px-8 py-3 text-sm hover:bg-white hover:text-black transition"
        >
          Escribirnos
        </Link>
      </section>

    </main>
  );
}
