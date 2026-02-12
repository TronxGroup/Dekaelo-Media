// app/quienes-somos/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quiénes somos — Dekaelo Media",
  description:
    "Estudio audiovisual boutique especializado en vodcast corporativo y series institucionales. Más de 58 episodios producidos desde 2023 para banca, gremios, salud y tecnología.",
  alternates: {
    canonical: "https://www.dekaelomedia.com/quienes-somos",
  },
  robots: { index: true, follow: true },
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
            Somos un estudio audiovisual boutique enfocado en
            <strong> vodcast corporativo</strong> y
            <strong> series institucionales</strong>.
            <br />
            Diseñamos formatos, dirigimos conversaciones y producimos
            contenido que las organizaciones pueden sostener en el tiempo.
          </p>
        </header>

        {/* EXPERIENCIA RESUMIDA */}
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
            Hemos trabajado con banca, cámaras empresariales, proyectos médicos
            y compañías tecnológicas, desarrollando ciclos de entrevistas,
            vodcasts internos y contenido institucional de uso continuo.
          </p>
        </section>


        {/* ORIGEN */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
            Origen
          </h2>

          <p className="text-white/70 leading-relaxed">
            Nuestro recorrido comienza en el cine independiente con la película
            <strong> “Yokai”</strong>, seleccionada oficialmente en
            <strong> Sitges</strong> y
            <strong> Buenos Aires Rojo Sangre</strong> (2014).
          </p>

          <p className="mt-6 text-white/70 leading-relaxed">
            Esa etapa definió nuestro estándar: narrativa clara, ritmo,
            dirección precisa y cuidado visual. Hoy trasladamos esa escuela al
            mundo corporativo, donde combinamos lenguaje cinematográfico con
            procesos ordenados y entregables concretos.
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


        {/* ENFOQUE ACTUAL */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
            Enfoque actual
          </h2>

          <p className="text-white/70 leading-relaxed">
            Nos especializamos en formatos de conversación y series
            institucionales que requieren continuidad.
            <br />
            No trabajamos como proveedores aislados, sino como partner de
            producción para equipos de comunicación, gerencias y directorios.
          </p>

          <p className="mt-6 text-white/70 leading-relaxed">
            Diseñamos el formato, definimos estructura, grabamos con equipos
            ligeros y cinematográficos, editamos con criterio editorial y
            entregamos versiones listas para web, LinkedIn, intranet o
            plataformas internas.
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


        {/* TRONX TV */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <h2 className="text-sm uppercase tracking-widest text-white/40 mb-10">
            Proyectos editoriales
          </h2>

          <p className="text-white/70 leading-relaxed">
            Paralelamente desarrollamos proyectos originales como
            <strong> Tronx TV</strong> y la serie documental
            <strong> Reality Day</strong>.
            <br />
            Ese espacio creativo mantiene nuestro lenguaje narrativo activo y
            evita que el contenido corporativo pierda humanidad.
          </p>
        </section>


        {/* CTA FINAL */}
        <section className="mt-24 border-t border-white/10 pt-16 text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Si tu organización necesita producir una serie o vodcast,
            conversemos.
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
