import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Video Corporativo y Comunicación Interna | Dekaelo Media",
  description:
    "Producción de videos corporativos, institucionales y cápsulas internas para empresas en Chile. Dirección profesional y entrega clara.",
};

export default function Page() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center">
        <Image
          src="/images/dekaelo-entrevista.jpg"
          alt="Grabación video corporativo"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative container max-w-4xl py-28">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Video corporativo profesional
          </h1>

          <p className="mt-6 text-lg text-white/80">
            Producción audiovisual para empresas que necesitan comunicar con
            claridad, orden y estándar profesional.
          </p>

          <div className="mt-10">
            <Link
              href="/contacto"
              className="border border-white/40 px-8 py-3 text-sm hover:bg-white hover:text-black transition"
            >
              Solicitar propuesta
            </Link>
          </div>
        </div>
      </section>


      {/* SERVICIOS */}
      <section className="container border-t border-white/10 py-28 max-w-6xl">
        <h2 className="text-2xl font-semibold mb-12">
          ¿Qué producimos?
        </h2>

        <div className="grid md:grid-cols-3 gap-14 text-white/70 text-sm leading-relaxed">

          <div>
            <h3 className="text-white font-medium mb-4">
              Video institucional
            </h3>
            Producción integral para sitio web, presentaciones ejecutivas,
            hitos organizacionales y posicionamiento institucional.
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">
              Comunicación interna
            </h3>
            Cápsulas estratégicas para liderazgo, cultura organizacional
            y alineamiento transversal.
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">
              Entrevistas ejecutivas
            </h3>
            Formato profesional para presidencias, gerencias y equipos directivos.
          </div>

        </div>
      </section>


      {/* VIDEO REEL */}
      <section className="container border-t border-white/10 py-28 max-w-4xl">
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
      <section className="container border-t border-white/10 py-28 max-w-6xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Proceso de trabajo
        </h2>

        <div className="grid md:grid-cols-4 gap-12 text-white/70 text-sm leading-relaxed">

          <div>
            <div className="text-white font-medium mb-3">01 — Brief</div>
            Definición clara de objetivo, audiencia y mensaje.
          </div>

          <div>
            <div className="text-white font-medium mb-3">02 — Diseño</div>
            Estructura narrativa y planificación de rodaje.
          </div>

          <div>
            <div className="text-white font-medium mb-3">03 — Producción</div>
            Grabación con equipo profesional y dirección precisa.
          </div>

          <div>
            <div className="text-white font-medium mb-3">04 — Entrega</div>
            Edición, color, sonido y formatos optimizados.
          </div>

        </div>
      </section>


      {/* PARA QUIÉN ES */}
      <section className="container border-t border-white/10 py-28 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6">
          ¿Para quién es este servicio?
        </h2>

        <div className="text-white/70 leading-relaxed space-y-4">
          <p>• Empresas medianas y grandes.</p>
          <p>• Áreas de marketing y comunicaciones internas.</p>
          <p>• Organizaciones que requieren piezas audiovisuales claras y profesionales.</p>
        </div>
      </section>


      {/* CTA FINAL */}
      <section className="container border-t border-white/10 py-32 text-center max-w-3xl">
        <h2 className="text-2xl mb-6">
          Coordinemos tu proyecto
        </h2>

        <p className="text-white/50 mb-10">
          Cuéntanos objetivo, fechas y alcance.
          Diseñamos propuesta clara y ajustada a tu organización.
        </p>

        <Link
          href="/contacto"
          className="border border-white/40 px-10 py-4 text-sm hover:bg-white hover:text-black transition"
        >
          Solicitar propuesta
        </Link>
      </section>

    </main>
  );
}
