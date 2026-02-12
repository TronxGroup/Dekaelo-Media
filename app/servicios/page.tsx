// app/servicios/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Servicios — Dekaelo Media",
  description:
    "Vodcast corporativo, contenido institucional y series editoriales. Producción audiovisual boutique para organizaciones que necesitan comunicar con claridad y continuidad.",
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
          Trabajamos con organizaciones que necesitan comunicar mejor,
          con continuidad y estándar profesional.
          <br />
          Nos enfocamos en pocos formatos, bien ejecutados.
        </p>
      </section>


      {/* SERVICIOS PRINCIPALES */}
      <section className="container border-t border-white/10 py-28">
        <div className="grid md:grid-cols-3 gap-16 text-white/70">

          <div>
            <h2 className="text-white text-xl font-medium mb-4">
              Vodcast corporativo
            </h2>
            <p>
              Series de conversación, entrevistas y liderazgo de opinión.
              Ideales para cultura interna, posicionamiento ejecutivo y
              comunicación estratégica.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-medium mb-4">
              Contenido institucional
            </h2>
            <p>
              Videos de marca, comunicación interna, onboarding y piezas
              corporativas de uso prolongado para web, intranet o directorios.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-medium mb-4">
              Series editoriales
            </h2>
            <p>
              Documental y storytelling para plataformas propias o proyectos
              especiales. Formatos que construyen relato y comunidad.
            </p>
          </div>

        </div>
      </section>


      {/* IMAGEN / ATMÓSFERA */}
      <section className="container py-24">
        <Image
          src="/servicios_dekaelo.jpg"
          alt="Producción audiovisual Dekaelo Media"
          width={1400}
          height={900}
          className="rounded-3xl border border-white/10 object-cover"
        />
      </section>


      {/* PROCESO */}
      <section className="container border-t border-white/10 py-28 max-w-5xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Proceso
        </h2>

        <div className="grid md:grid-cols-4 gap-12 text-white/70 text-sm">

          <div>
            <div className="text-white font-medium mb-3">01</div>
            Definimos objetivos y formato.
          </div>

          <div>
            <div className="text-white font-medium mb-3">02</div>
            Diseñamos pauta, guion y estructura.
          </div>

          <div>
            <div className="text-white font-medium mb-3">03</div>
            Rodaje con equipo ligero y estándar cinematográfico.
          </div>

          <div>
            <div className="text-white font-medium mb-3">04</div>
            Edición y entregas listas por plataforma.
          </div>

        </div>

        <p className="mt-14 text-white/60 leading-relaxed">
          Trabajamos como partner de producción. Tu equipo define prioridades,
          nosotros ejecutamos de principio a fin.
        </p>
      </section>


      {/* CASOS DE USO */}
      <section className="container border-t border-white/10 py-28 max-w-4xl">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-12">
          Casos de uso frecuentes
        </h2>

        <ul className="space-y-4 text-white/70">
          <li>• Ciclos de entrevistas con liderazgo o directorio</li>
          <li>• Cultura interna y marca empleadora</li>
          <li>• Presentaciones institucionales o memorias</li>
          <li>• Series documentales o contenido editorial</li>
          <li>• Lanzamientos y comunicación estratégica</li>
        </ul>
      </section>


      {/* CTA FINAL */}
      <section className="container border-t border-white/10 py-32 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          ¿Conversamos tu proyecto?
        </h2>

        <p className="text-white/60 mb-10 max-w-2xl mx-auto">
          Cuéntanos objetivos, fechas y contexto. Te proponemos un formato y
          alcance acorde a tu organización.
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
