import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quiénes somos — Dekaelo Media | Productora Audiovisual Corporativa en Chile",
  description:
    "Dekaelo Media es una productora audiovisual boutique en Chile especializada en video corporativo, series institucionales y comunicación ejecutiva. Más de 58 episodios producidos desde 2023 para banca, educación, industria y tecnología.",
  keywords: [
    "Dekaelo Media",
    "productora audiovisual Chile",
    "video corporativo Chile",
    "serie institucional",
    "vodcast corporativo",
    "producción audiovisual corporativa",
  ],
  alternates: {
    canonical: "https://www.dekaelomedia.com/quienes-somos",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Quiénes somos — Dekaelo Media",
    description:
      "Estudio audiovisual boutique enfocado en comunicación corporativa, series institucionales y video corporativo en Chile.",
    url: "https://www.dekaelomedia.com/quienes-somos",
    siteName: "Dekaelo Media",
    locale: "es_CL",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-black text-white">

      <section className="container max-w-5xl py-28">

        {/* HERO */}
        <header>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Dekaelo Media
          </h1>

          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Somos una productora audiovisual boutique en Chile especializada en
            <strong> video corporativo</strong>,
            <strong> series institucionales</strong> y
            <strong> comunicación ejecutiva</strong>.
          </p>

          <p className="mt-6 text-white/60 leading-relaxed">
            Diseñamos formatos, estructuramos narrativa y producimos contenido
            que las organizaciones pueden sostener en el tiempo.
            Nuestro foco está en claridad estratégica, estética sobria y procesos eficientes.
          </p>
        </header>

        {/* EXPERIENCIA */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
            Experiencia
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-semibold">58+</div>
              <p className="text-white/50 text-sm mt-3">
                episodios producidos desde 2023
              </p>
            </div>

            <div>
              <div className="text-5xl font-semibold">6</div>
              <p className="text-white/50 text-sm mt-3">
                industrias distintas
              </p>
            </div>

            <div>
              <div className="text-5xl font-semibold">3+</div>
              <p className="text-white/50 text-sm mt-3">
                años desarrollando series continuas
              </p>
            </div>
          </div>

          <p className="mt-14 text-white/60 leading-relaxed">
            Hemos trabajado con banca nacional, establecimientos educacionales,
            cámaras empresariales, industria y sector salud, desarrollando
            temporadas institucionales, documentales corporativos y videos
            estratégicos para comunicación interna y posicionamiento externo.
          </p>
        </section>

        {/* ORIGEN */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
            Origen cinematográfico
          </h2>

          <p className="text-white/70 leading-relaxed">
            Nuestro recorrido comienza en el cine independiente con la película
            <strong> “Yokai”</strong>, seleccionada oficialmente en festivales internacionales en 2014.
          </p>

          <p className="mt-6 text-white/70 leading-relaxed">
            Esa etapa definió nuestro estándar: narrativa clara, ritmo preciso y
            cuidado visual. Hoy trasladamos ese enfoque al mundo corporativo,
            combinando lenguaje cinematográfico con estructura ejecutiva y entregables concretos.
          </p>

          <div className="my-14">
            <Image
              src="/qs_dekaelo_3.png"
              alt="Rodaje en etapa de cine independiente"
              width={1200}
              height={700}
              className="rounded-3xl border border-white/10 object-cover"
              priority
            />
          </div>
        </section>

        {/* CÓMO TRABAJAMOS */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
            Cómo trabajamos
          </h2>

          <p className="text-white/70 leading-relaxed">
            Operamos como partner de producción para equipos de marketing,
            comunicaciones, gerencias y directorios.
          </p>

          <p className="mt-6 text-white/70 leading-relaxed">
            Definimos objetivos estratégicos, diseñamos formato, producimos con
            equipo técnico profesional y entregamos piezas optimizadas para web,
            LinkedIn, intranet o plataformas internas.
          </p>

          <div className="my-14 grid md:grid-cols-2 gap-6">
            <Image
              src="/qs_dekaelo_4.png"
              alt="Rodaje corporativo profesional"
              width={600}
              height={400}
              className="rounded-2xl border border-white/10 object-cover"
            />
            <Image
              src="/qs_dekaelo_1.png"
              alt="Producción audiovisual institucional"
              width={600}
              height={400}
              className="rounded-2xl border border-white/10 object-cover"
            />
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
            Nuestro diferencial
          </h2>

          <p className="text-white/70 leading-relaxed">
            No desarrollamos piezas improvisadas. Diseñamos proyectos que pueden
            sostener coherencia en el tiempo.
          </p>

          <p className="mt-6 text-white/70 leading-relaxed">
            Combinamos criterio cinematográfico con estructura corporativa,
            permitiendo que el contenido sea claro, sobrio y alineado con la
            identidad institucional.
          </p>
        </section>

        {/* PROYECTOS EDITORIALES */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
            Proyectos editoriales
          </h2>

          <p className="text-white/70 leading-relaxed">
            Paralelamente desarrollamos iniciativas como
            <strong> Tronx TV</strong> y la serie documental
            <strong> Reality Day</strong>. Estos proyectos mantienen activo
            nuestro lenguaje narrativo y refuerzan la dimensión humana del
            contenido institucional.
          </p>
        </section>

        {/* FILOSOFÍA */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
            Filosofía
          </h2>

          <p className="text-white/70 leading-relaxed">
            Creemos en la comunicación clara, la estética sobria y los procesos
            eficientes. La discreción y la continuidad son parte central de
            nuestro trabajo con organizaciones de alto perfil.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-24 border-t border-white/10 pt-16 text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Si tu empresa necesita producir un video corporativo o desarrollar una serie institucional, conversemos.
          </h2>

          <Link
            href="/contacto"
            className="border border-white/30 px-8 py-3 text-sm hover:bg-white hover:text-black transition"
          >
            Contactar
          </Link>
        </section>

      </section>
    </main>
  );
}
