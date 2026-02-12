import Link from "next/link";

export const metadata = {
  title: "Producción Audiovisual para Empresas — Dekaelo Media",
  description:
    "Vodcast corporativo y contenido institucional para organizaciones. Más de 58 episodios producidos para banca, gremios y empresas B2B.",
};

export default function Page() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="container max-w-4xl py-32">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Producción audiovisual
          <br />
          para organizaciones
        </h1>

        <p className="mt-8 text-white/65 text-lg">
          Diseñamos y producimos vodcasts, series institucionales y contenido
          corporativo con estándar profesional y continuidad en el tiempo.
        </p>

        <Link
          href="/contacto"
          className="mt-10 inline-block border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition"
        >
          Conversar proyecto
        </Link>
      </section>


      {/* MÉTRICAS */}
      <section className="container border-t border-white/10 py-24">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl font-semibold">58+</div>
            <p className="text-white/50 mt-2">episodios producidos</p>
          </div>
          <div>
            <div className="text-5xl font-semibold">6</div>
            <p className="text-white/50 mt-2">industrias distintas</p>
          </div>
          <div>
            <div className="text-5xl font-semibold">3+</div>
            <p className="text-white/50 mt-2">años en series continuas</p>
          </div>
        </div>
      </section>


      {/* SERVICIOS */}
      <section className="container border-t border-white/10 py-28">
        <div className="grid md:grid-cols-3 gap-14 text-white/70">

          <div>
            <h3 className="text-white font-medium mb-3">Vodcast corporativo</h3>
            Series de entrevistas y conversación para liderazgo, cultura y comunicación interna.
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">Contenido institucional</h3>
            Marca empleadora, cultura, onboarding y piezas de largo uso.
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">Series editoriales</h3>
            Documental y storytelling para plataformas propias.
          </div>

        </div>
      </section>


      {/* CTA FINAL */}
      <section className="container border-t border-white/10 py-32 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          ¿Conversemos tu próximo proyecto?
        </h2>

        <Link
          href="/contacto"
          className="border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition"
        >
          Contactar
        </Link>
      </section>

    </main>
  );
}
