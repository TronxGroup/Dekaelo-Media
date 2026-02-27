import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vodcast Corporativo Ejecutivo — Serie Anual para Empresas | Dekaelo Media",
  description:
    "Diseñamos y producimos series ejecutivas anuales para gerencias y directorios que necesitan comunicar liderazgo con claridad y continuidad.",
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      {/* HERO */}
      <section className="container max-w-4xl py-32">
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
          Vodcast corporativo ejecutivo
          <br />
          <span className="text-white/60">
            Formato anual para liderazgo y comunicación estratégica.
          </span>
        </h1>

        <p className="mt-8 text-lg text-white/65 leading-relaxed">
          Diseñamos y producimos series audiovisuales ejecutivas para
          organizaciones que necesitan comunicar con claridad,
          continuidad y estándar profesional.
        </p>

        <p className="mt-6 text-white/60 leading-relaxed">
          Trabajamos con banca, clínicas, gremios empresariales y compañías
          que requieren estructura narrativa sostenida, no piezas aisladas.
        </p>

        <div className="mt-12">
          <Link
            href="/contacto"
            className="border border-white/30 px-8 py-3 text-sm hover:bg-white hover:text-black transition"
          >
            Solicitar propuesta ejecutiva
          </Link>
        </div>
      </section>


      {/* PROBLEMA */}
      <section className="container border-t border-white/10 py-28 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6">
          La comunicación ejecutiva no puede depender de piezas aisladas.
        </h2>

        <p className="text-white/60 leading-relaxed">
          Las organizaciones que comunican liderazgo de forma consistente
          generan mayor alineamiento interno, claridad estratégica y
          posicionamiento institucional sostenido.
        </p>

        <p className="mt-6 text-white/60 leading-relaxed">
          Un vodcast corporativo anual permite estructurar conversaciones
          relevantes, reforzar cultura organizacional y mantener presencia
          ejecutiva continua durante todo el año.
        </p>
      </section>


      {/* MODELO ANUAL */}
      <section className="container border-t border-white/10 py-28 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-10">
          Modelo Serie Ejecutiva 2026
        </h2>

        <div className="grid md:grid-cols-2 gap-14 text-white/70 text-sm leading-relaxed">

          <div>
            <h3 className="text-white font-medium mb-4">
              Estructura estratégica
            </h3>
            <ul className="space-y-3">
              <li>• Definición de objetivos comunicacionales</li>
              <li>• Diseño de formato y narrativa</li>
              <li>• Calendario anual de producción</li>
              <li>• Planificación de invitados y temáticas</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">
              Producción continua
            </h3>
            <ul className="space-y-3">
              <li>• Temporadas de 6–12 episodios</li>
              <li>• Trailer institucional</li>
              <li>• Clips para comunicación interna y externa</li>
              <li>• Postproducción completa y entregas optimizadas</li>
            </ul>
          </div>

        </div>

        <p className="mt-14 text-white/60 leading-relaxed max-w-3xl">
          Diseñado para presidencias, gerencias generales, directorios
          y áreas de comunicación que requieren continuidad,
          estructura y estándar visual consistente.
        </p>
      </section>


      {/* PROCESO */}
      <section className="container border-t border-white/10 py-28 max-w-6xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Proceso de trabajo
        </h2>

        <div className="grid md:grid-cols-4 gap-12 text-white/70 text-sm leading-relaxed">

          <div>
            <div className="text-white font-medium mb-3">01 — Estrategia</div>
            Definición de objetivos, audiencia y enfoque narrativo.
          </div>

          <div>
            <div className="text-white font-medium mb-3">02 — Diseño</div>
            Desarrollo de formato, pauta y planificación anual.
          </div>

          <div>
            <div className="text-white font-medium mb-3">03 — Producción</div>
            Rodaje profesional con dirección ejecutiva y estándar cinematográfico.
          </div>

          <div>
            <div className="text-white font-medium mb-3">04 — Postproducción</div>
            Edición, corrección de color, sonido y optimización por canal.
          </div>

        </div>
      </section>


      {/* PARA QUIÉN ES */}
      <section className="container border-t border-white/10 py-28 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6">
          ¿Para quién es este formato?
        </h2>

        <div className="text-white/70 leading-relaxed space-y-4">
          <p>• Empresas medianas y grandes que requieren comunicación sostenida.</p>
          <p>• Organizaciones con liderazgo activo que necesita visibilidad estratégica.</p>
          <p>• Gerencias de comunicaciones internas.</p>
          <p>• Directorios que buscan reforzar cultura y alineamiento.</p>
        </div>
      </section>


      {/* EXPERIENCIA */}
      <section className="container border-t border-white/10 py-28 max-w-5xl">
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
      </section>


      {/* CTA FINAL */}
      <section className="container border-t border-white/10 py-32 text-center">
        <h2 className="text-2xl mb-6">
          Evaluemos tu proyecto
        </h2>

        <p className="text-white/50 mb-10 max-w-2xl mx-auto">
          Cuéntanos el tamaño de tu organización y objetivos estratégicos.
          Diseñamos propuesta anual acorde a tu estructura.
        </p>

        <Link
          href="/contacto"
          className="border border-white/30 px-10 py-4 text-sm hover:bg-white hover:text-black transition"
        >
          Solicitar propuesta ejecutiva
        </Link>
      </section>

    </main>
  );
}
