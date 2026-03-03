import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Video Corporativo Profesional para Empresas | Dekaelo Media Chile",
  description:
    "Producción de videos corporativos e institucionales para empresas en Chile. Propuesta en 48 horas. Desde $1.200.000 + IVA.",
};

export default function Page() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center">
        <Image
          src="/images/dekaelo-entrevista.jpg"
          alt="Grabación video corporativo profesional"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative container max-w-4xl py-28">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Video corporativo profesional para empresas
          </h1>

          <p className="mt-6 text-lg text-white/80">
            Producción audiovisual clara, sobria y con estándar cinematográfico
            aplicada al entorno corporativo.
          </p>

          <p className="mt-4 text-sm text-white/60">
            Propuesta en 48 horas. Producción en 2–4 semanas.
            Inversión referencial desde $1.200.000 + IVA.
          </p>

          <div className="mt-10">
            <Link
              href="/contacto"
              className="border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition"
            >
              Recibir propuesta en 48 horas
            </Link>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="container border-t border-white/10 py-24 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-8">
          Producción con estructura, no improvisación
        </h2>

        <p className="text-white/70 leading-relaxed">
          No desarrollamos piezas aisladas sin criterio estratégico.
          Diseñamos cada proyecto en función de un objetivo comunicacional claro,
          manteniendo dirección profesional, procesos ordenados y tratamiento visual consistente.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="container border-t border-white/10 py-24 max-w-6xl">
        <h2 className="text-2xl font-semibold mb-12">
          ¿Qué tipo de proyectos realizamos?
        </h2>

        <div className="grid md:grid-cols-3 gap-14 text-white/70 text-sm leading-relaxed">

          <div>
            <h3 className="text-white font-medium mb-4">
              Video institucional empresa
            </h3>
            Presentaciones corporativas, posicionamiento institucional
            y contenido para sitio web.
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">
              Comunicación interna
            </h3>
            Cápsulas para liderazgo, cultura organizacional
            y alineamiento estratégico.
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">
              Entrevistas ejecutivas
            </h3>
            Formato profesional para gerencias,
            presidencias y equipos directivos.
          </div>

        </div>
      </section>

      {/* REEL */}
      <section className="container border-t border-white/10 py-24 max-w-4xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
          Reel institucional
        </h2>

        <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/10">
          <iframe
            src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0"
            title="Reel video corporativo"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </section>

      {/* PROCESO */}
      <section className="container border-t border-white/10 py-24 max-w-6xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Proceso claro y estructurado
        </h2>

        <div className="grid md:grid-cols-4 gap-12 text-white/70 text-sm leading-relaxed">

          <div>
            <div className="text-white font-medium mb-3">01 — Reunión estratégica</div>
            Definición de objetivo, audiencia y alcance.
          </div>

          <div>
            <div className="text-white font-medium mb-3">02 — Propuesta</div>
            Envío de estructura y presupuesto en 48 horas.
          </div>

          <div>
            <div className="text-white font-medium mb-3">03 — Producción</div>
            Rodaje profesional con dirección precisa.
          </div>

          <div>
            <div className="text-white font-medium mb-3">04 — Entrega</div>
            Edición completa, color, sonido y formatos optimizados.
          </div>

        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="container border-t border-white/10 py-24 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6">
          ¿Para quién es este servicio?
        </h2>

        <div className="text-white/70 leading-relaxed space-y-4">
          <p>• Empresas medianas y grandes.</p>
          <p>• Clínicas y redes de salud privadas.</p>
          <p>• Banca y organizaciones con comunicación estructurada.</p>
          <p>• Equipos de marketing o comunicaciones internas.</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container border-t border-white/10 py-32 text-center max-w-3xl">
        <h2 className="text-2xl mb-6">
          Coordinemos tu proyecto
        </h2>

        <p className="text-white/50 mb-10">
          Envíanos contexto, fechas y objetivo.
          Recibirás una propuesta clara en menos de 48 horas.
        </p>

        <Link
          href="/contacto"
          className="border border-white px-10 py-4 text-sm hover:bg-white hover:text-black transition"
        >
          Solicitar propuesta ejecutiva
        </Link>
      </section>

    </main>
  );
}
