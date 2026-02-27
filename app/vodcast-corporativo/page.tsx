import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vodcast Corporativo Ejecutivo — Serie Anual | Dekaelo Media",
  description:
    "Producción de vodcast corporativos ejecutivos para empresas que necesitan comunicación estratégica continua.",
};

export default function Page() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      {/* HERO CON IMAGEN */}
      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="/images/dekaelo-entrevista.jpg"
          alt="Grabación vodcast corporativo ejecutivo"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative container max-w-4xl py-32">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Vodcast corporativo ejecutivo
          </h1>

          <p className="mt-6 text-lg text-white/80">
            Formato anual diseñado para gerencias y directorios que
            necesitan comunicar liderazgo con claridad y continuidad.
          </p>

          <div className="mt-10">
            <Link
              href="/contacto"
              className="border border-white/40 px-8 py-3 text-sm hover:bg-white hover:text-black transition"
            >
              Solicitar propuesta ejecutiva
            </Link>
          </div>
        </div>
      </section>


      {/* VIDEO REEL ARRIBA */}
      <section className="container py-24 max-w-4xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
          Ejemplo de producción
        </h2>

        <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/10">
          <iframe
            src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0"
            title="Vodcast corporativo ejemplo"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </section>


      {/* PROPUESTA DE VALOR */}
      <section className="container border-t border-white/10 py-28 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-6">
          Comunicación ejecutiva sostenida
        </h2>

        <p className="text-white/60 leading-relaxed">
          Un vodcast corporativo anual permite estructurar conversaciones
          estratégicas, reforzar cultura organizacional y mantener presencia
          ejecutiva continua durante todo el año.
        </p>

        <p className="mt-6 text-white/60 leading-relaxed">
          No producimos piezas aisladas. Diseñamos formatos sostenidos
          en el tiempo con estándar cinematográfico aplicado al entorno corporativo.
        </p>
      </section>


      {/* MODELO ANUAL VISUAL */}
      <section className="container border-t border-white/10 py-28 max-w-6xl">
        <h2 className="text-2xl font-semibold mb-12">
          Modelo Serie Ejecutiva 2026
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-6 text-white/70 text-sm leading-relaxed">
            <div>
              <h3 className="text-white font-medium mb-3">Estructura estratégica</h3>
              • Definición de objetivos comunicacionales <br />
              • Diseño de formato y narrativa <br />
              • Calendario anual de producción
            </div>

            <div>
              <h3 className="text-white font-medium mb-3">Producción continua</h3>
              • Temporadas de 6–12 episodios <br />
              • Trailer institucional <br />
              • Clips optimizados por canal <br />
              • Postproducción completa
            </div>
          </div>

          <div>
            <Image
              src="/images/dekaelo-set.jpg"
              alt="Set de grabación vodcast ejecutivo"
              width={900}
              height={600}
              className="rounded-xl border border-white/10 object-cover"
            />
          </div>

        </div>
      </section>


      {/* EXPERIENCIA */}
      <section className="container border-t border-white/10 py-28 max-w-5xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Experiencia
        </h2>

        <div className="grid md:grid-cols-3 gap-16 text-center">
          <div>
            <div className="text-6xl font-semibold">58+</div>
            <p className="text-white/50 mt-3 text-sm">episodios producidos</p>
          </div>

          <div>
            <div className="text-6xl font-semibold">6</div>
            <p className="text-white/50 mt-3 text-sm">industrias distintas</p>
          </div>

          <div>
            <div className="text-6xl font-semibold">3+</div>
            <p className="text-white/50 mt-3 text-sm">
              años desarrollando series continuas
            </p>
          </div>
        </div>
      </section>


      {/* CTA FINAL */}
      <section className="container border-t border-white/10 py-32 text-center max-w-3xl">
        <h2 className="text-2xl mb-6">
          Evaluemos tu proyecto
        </h2>

        <p className="text-white/50 mb-10">
          Diseñamos propuesta anual acorde al tamaño y estructura
          de tu organización.
        </p>

        <Link
          href="/contacto"
          className="border border-white/40 px-10 py-4 text-sm hover:bg-white hover:text-black transition"
        >
          Solicitar propuesta ejecutiva
        </Link>
      </section>

    </main>
  );
}
