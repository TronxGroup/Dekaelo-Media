// app/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { VideoEmbed } from "./components/VideoEmbed";
import { ClientLogos } from "./components/ClientLogos";

export const metadata: Metadata = {
  title: "Dekaelo Media — Vodcast & Series Corporativas",
  description:
    "Estudio audiovisual boutique especializado en vodcast corporativo y series institucionales. Más de 58 episodios producidos para banca, gremios, salud y tecnología.",
};

export default function Page() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      {/* HERO */}
      <section className="container max-w-4xl py-36">
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
          Historias reales
          <br />
          dentro de organizaciones reales.
        </h1>

        <p className="mt-8 text-lg text-white/65 leading-relaxed">
          Dekaelo Media es un estudio audiovisual boutique especializado en
          vodcast corporativo y series institucionales.
          <br />
          Desde 2023 hemos producido más de 58 episodios para banca,
          gremios empresariales, salud y tecnología.
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


      {/* REEL */}
      <section className="container pb-28">
        <VideoEmbed
          src="https://www.youtube.com/watch?v=hAyZFw0-55o"
          title="Dekaelo Media Reel"
        />
      </section>


      {/* CASOS */}
      <section className="container border-t border-white/10 py-28">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Casos
        </h2>

        <div className="grid md:grid-cols-3 gap-14 text-white/70">

          {/* BICE confidencial */}
          <div>
            <h3 className="text-white font-medium mb-3">
              Banco nacional — Serie institucional
            </h3>
            <p className="text-sm leading-relaxed">
              Vodcast interno para liderazgo y cultura organizacional.
              Producción continua 2024–2026.
              <br />
              <span className="text-white/40">
                Contenido confidencial (uso interno).
              </span>
            </p>
          </div>

          {/* Reality Day */}
          <div>
            <VideoEmbed
              src="https://www.youtube.com/embed/dyP-ioW3Qng"
              title="Reality Day — Tronx TV"
            />
            <p className="text-sm mt-4 text-white/50">
              Serie documental original.
            </p>
          </div>

          {/* APCC */}
          <div>
            <h3 className="text-white font-medium mb-3">
              Cámara empresarial — Ciclo de entrevistas
            </h3>
            <p className="text-sm leading-relaxed">
              24 episodios consecutivos.
              Conversaciones con líderes del ecosistema Asia–Pacífico.
            </p>
          </div>
        </div>
      </section>


      {/* CLIENTES */}
      <section className="border-t border-white/10 py-24">
        <div className="container">
          <ClientLogos />
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
              años creando series continuas
            </p>
          </div>

        </div>

        <p className="mt-16 text-white/60 leading-relaxed max-w-3xl">
          Trabajamos como un partner de producción, no como un proveedor
          puntual. Diseñamos formatos, grabamos con equipos ligeros y
          cinematográficos, y entregamos piezas listas para web, comunicación
          interna y plataformas digitales.
        </p>
      </section>


      {/* SERVICIOS */}
      <section className="container border-t border-white/10 py-32 max-w-5xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-14 text-white/70 text-sm leading-relaxed">

          <div>
            <h3 className="text-white font-medium mb-4">Vodcast corporativo</h3>
            Series de conversación, entrevistas y liderazgo de opinión.
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Contenido institucional</h3>
            Cultura, marca empleadora, comunicación interna y relato estratégico.
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Series editoriales</h3>
            Documental, storytelling y proyectos originales para plataformas propias.
          </div>

        </div>
      </section>


      {/* ESTUDIO */}
      <section className="container border-t border-white/10 py-32 max-w-3xl">
        <p className="text-white/65 leading-relaxed">
          Dekaelo Media forma parte de Tronx Group.
          Paralelamente desarrollamos proyectos editoriales como
          <strong> Tronx TV</strong> y la serie documental
          <strong> Reality Day</strong>, lo que mantiene nuestro lenguaje visual
          cercano al cine y al documental, más que al video corporativo
          tradicional.
        </p>
      </section>


      {/* CONTACTO */}
      <section className="container border-t border-white/10 py-32 text-center">
        <h2 className="text-2xl mb-6">Hablemos</h2>

        <p className="text-white/50 mb-10">
          Si tu organización necesita producir una serie o vodcast,
          podemos ayudarte a diseñarlo y ejecutarlo de principio a fin.
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
