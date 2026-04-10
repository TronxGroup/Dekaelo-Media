import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const waLink =
  "https://wa.me/56920080031?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto%20con%20Dekaelo%20Media.%0A%0AEmpresa%3A%0AQue%20necesito%3A%0AFecha%20tentativa%3A%0A%0AGracias";

export const metadata: Metadata = {
  title: "Quienes somos - Dekaelo Media",
  description:
    "Productora audiovisual en Chile. Especializados en vodcast corporativo y contenido institucional. Producción clara, ejecución precisa.",
  alternates: {
    canonical: "https://www.dekaelomedia.com/quienes-somos",
  },
};

const stats = [
  { n: "150+", label: "videos producidos" },
  { n: "3.8M", label: "visualizaciones en un contenido" },
  { n: "60+", label: "episodios de vodcast corporativo" },
  { n: "6+", label: "industrias" },
];

const milestones = [
  {
    year: "2013",
    text: "Selección oficial en Sitges Film Festival y BARS con “Yokai”. Producción para Editorial Televisa Chile (Revista Caras).",
  },
  {
    year: "2015",
    text: "Video supera 3.8M de visualizaciones en YouTube.",
  },
  {
    year: "2016 — 2022",
    text: "Producción y postproducción para empresas en industria, tecnología y educación. Contenido interno para Ripley.",
  },
  {
    year: "2023",
    text: "Más de 20 episodios para la Cámara de Comercio Asia Pacífico. Desarrollo de serie para iGromi.",
  },
  {
    year: "2024",
    text: "Serie “Fútbol y Parrilla” supera 357K visualizaciones acumuladas. Inicio de vodcast institucional para BICE.",
  },
  {
    year: "2025 — 2026",
    text: "Continuidad de producción para BICE. Temporada activa.",
  },
];

const values = [
  {
    title: "Claridad antes que estética",
    desc: "Si no se entiende, no sirve. El mensaje define el video.",
  },
  {
    title: "Alcance definido desde el inicio",
    desc: "Todo queda por escrito antes de empezar. Sin ambigüedad.",
  },
  {
    title: "Entrega funcional",
    desc: "Cada pieza se entrega en el formato correcto para su uso.",
  },
  {
    title: "Procesos ordenados",
    desc: "Respuestas rápidas, plazos claros y comunicación directa.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
      {children}
    </p>
  );
}

export default function QuienesSomosPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      
      {/* HERO */}
      <section className="container max-w-4xl pt-28 pb-16 md:pt-36 md:pb-20">
        <Eyebrow>Quienes somos</Eyebrow>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Producción audiovisual corporativa desde 2013.
          <span className="block text-white/35">
            Vodcast y contenido institucional para empresas.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/55 leading-relaxed">
          Producción completa en terreno o postproducción sobre material existente.
          Alcance, tiempos y entrega definidos desde el inicio.
        </p>
      </section>

      {/* STATS */}
      <section className="border-t border-white/10 py-16">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.n} className="bg-black px-8 py-10">
                <p className="text-4xl font-semibold text-white">{s.n}</p>
                <p className="mt-2 text-sm text-white/40 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGEN */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <Eyebrow>De donde venimos</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Empezamos en el cine
              </h2>

              <p className="mt-6 text-white/60 leading-relaxed">
                “Yokai”, largometraje seleccionado en Sitges Film Festival y Buenos Aires Rojo Sangre (2014).
              </p>

              <p className="mt-4 text-white/60 leading-relaxed">
                Ese origen define el criterio: narrativa, ritmo y claridad.
              </p>

              <p className="mt-4 text-white/60 leading-relaxed">
                Hoy aplicado a contenido corporativo. Producción continua para BICE.
              </p>
            </div>

            <Image
              src="/qs_dekaelo_3.png"
              alt="Rodaje Dekaelo Media"
              width={600}
              height={400}
              className="rounded-2xl border border-white/10 object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* TRAYECTORIA */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Trayectoria</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            El trabajo habla
          </h2>

          <div className="mt-12">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={
                  "grid grid-cols-[90px_1fr] gap-8 py-6" +
                  (i !== milestones.length - 1
                    ? " border-b border-white/8"
                    : "")
                }
              >
                <p className="text-sm font-semibold text-white/25">
                  {m.year}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Como trabajamos</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Proceso directo
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              {
                n: "01",
                title: "Nos cuentas lo que necesitas",
                desc: "Por WhatsApp o formulario.",
              },
              {
                n: "02",
                title: "Alcance y precio",
                desc: "Respuesta en menos de 24 horas hábiles.",
              },
              {
                n: "03",
                title: "Producción",
                desc: "Grabamos o trabajamos sobre tu material.",
              },
              {
                n: "04",
                title: "Entrega",
                desc: "Video listo para publicar.",
              },
            ].map((s) => (
              <div key={s.n}>
                <p className="text-3xl font-semibold text-white/10">{s.n}</p>
                <h3 className="mt-3 text-sm font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/45">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Como pensamos</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Criterio de trabajo
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-base font-semibold text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-white/50">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="border-t border-white/10 py-20">
        <div className="container max-w-5xl">
          <Eyebrow>Con quienes hemos trabajado</Eyebrow>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "BICE",
              "Cámara de Comercio Asia Pacífico",
              "iGromi",
              "Editorial Televisa Chile",
              "Trewhela’s School",
              "Coesam",
              "Exploflex",
              "U-Payments",
              "Oximixo",
              "Fútbol y Parrilla",
            ].map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/50"
              >
                {c}
              </span>
            ))}
          </div>

          <p className="mt-6 text-sm text-white/30 max-w-xl">
            Banca, educación, industria, tecnología y organizaciones empresariales.
            Contenido interno y posicionamiento externo.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-28">
        <div className="container max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Producción activa con BICE
          </div>

          <h2 className="text-3xl font-semibold md:text-4xl">
            Solicitar propuesta
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/50">
            Cuéntanos qué necesitas. Respondemos con alcance y precio en menos de 24 horas hábiles.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white px-10 py-4 text-sm font-semibold text-black hover:bg-white/90"
            >
              Escribir por WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>

            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-10 py-4 text-sm text-white/55 hover:bg-white/10 hover:text-white"
            >
              Ver servicios <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-6 text-xs text-white/25">
            Respuesta el mismo día hábil. Sin compromiso.
          </p>
        </div>
      </section>
    </main>
  );
}
