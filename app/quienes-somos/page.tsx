import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quiénes somos — Dekaelo Media | Productora Audiovisual Corporativa",
  description:
    "Dekaelo Media es una productora audiovisual boutique en Chile especializada en comunicación corporativa, series institucionales y proyectos editoriales. Más de 58 episodios producidos desde 2023 para banca, gremios, salud y tecnología.",
  keywords: [
    "Dekaelo Media",
    "productora audiovisual Chile",
    "video corporativo Chile",
    "serie institucional",
    "vodcast corporativo",
    "comunicación corporativa audiovisual",
  ],
  alternates: {
    canonical: "https://www.dekaelomedia.com/quienes-somos",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Quiénes somos — Dekaelo Media",
    description:
      "Estudio audiovisual boutique enfocado en comunicación corporativa y series institucionales.",
    url: "https://www.dekaelomedia.com/quienes-somos",
    siteName: "Dekaelo Media",
    locale: "es_CL",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-black text-white">
      <section className="container max-w-4xl py-28">

        {/* HERO */}
        <header>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Dekaelo Media
          </h1>

          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Somos una productora audiovisual boutique enfocada en
            <strong> comunicación corporativa</strong> y
            <strong> series institucionales</strong>.
            Diseñamos formatos, dirigimos conversaciones y producimos
            contenido que las organizaciones pueden sostener en el tiempo.
          </p>

          <p className="mt-6 text-white/60 leading-relaxed">
            Trabajamos con banca, gremios empresariales, clínicas,
            empresas tecnológicas y holdings familiares desarrollando
            proyectos de alto estándar visual, criterio editorial y
            procesos discretos.
          </p>
        </header>


        {/* EXPERIENCIA */}
        <section className="mt-20 border-t border-white/10 pt-16">
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
            Hemos producido temporadas institucionales, ciclos ejecutivos
            y series documentales que combinan claridad estratégica
            con lenguaje cinematográfico. Nuestra experiencia incluye
            banca nacional, cámaras empresariales y compañías del sector
            salud y tecnología.
          </p>
        </section>


        {/* ORIGEN */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
            Origen
          </h2>

          <p className="text-white/70 leading-relaxed">
            Nuestro recorrido comienza en el cine independiente con la
            película <strong>“Yokai”</strong>, seleccionada oficialmente
            en festivales internacionales en 2014.
          </p>

          <p className="mt-6 text-white/70 leading-relaxed">
            Esa etapa definió nuestro estándar: narrativa clara,
            ritmo preciso y cuidado visual. Hoy trasladamos esa
            experiencia al mundo corporativo, combinando lenguaje
            cinematográfico con procesos ordenados y entregables concretos.
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


        {/* ENFOQUE */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
            Enfoque
          </h2>

          <p className="text-white/70 leading-relaxed">
            No trabajamos como proveedores aislados, sino como partner
            de producción para equipos de comunicación, gerencias y
            directorios.
          </p>

          <p className="mt-6 text-white/70 leading-relaxed">
            Diseñamos el formato, definimos estructura narrativa,
            grabamos con equipos ligeros y cinematográficos, editamos
            con criterio editorial y entregamos versiones optimizadas
            para web, LinkedIn, intranet o plataformas internas.
          </p>

          <div className="my-14 grid md:grid-cols-2 gap-6">
            <Image
              src="/qs_dekaelo_4.png"
              alt="Rodaje corporativo"
              width={600}
              height={400}
              className="rounded-2xl border border-white/10 object-cover"
            />
            <Image
              src="/qs_dekaelo_1.png"
              alt="Producción institucional"
              width={600}
              height={400}
              className="rounded-2xl border border-white/10 object-cover"
            />
          </div>
        </section>


        {/* PROYECTOS EDITORIALES */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
            Proyectos editoriales
          </h2>

          <p className="text-white/70 leading-relaxed">
            Paralelamente desarrollamos proyectos originales como
            <strong> Tronx TV</strong> y la serie documental
            <strong> Reality Day</strong>. Ese espacio creativo mantiene
            nuestro lenguaje narrativo activo y refuerza la dimensión
            humana del contenido institucional.
          </p>
        </section>


        {/* FILOSOFÍA */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
            Filosofía
          </h2>

          <p className="text-white/70 leading-relaxed">
            Creemos en la comunicación clara, la estética sobria y los
            procesos eficientes. La discreción, el orden y la continuidad
            son parte central de nuestro trabajo con organizaciones de
            alto perfil.
          </p>
        </section>


        {/* CTA */}
        <section className="mt-24 border-t border-white/10 pt-16 text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Si tu organización necesita desarrollar una serie o fortalecer
            su comunicación audiovisual, conversemos.
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
