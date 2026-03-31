import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Config                                                              */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = "56920080031";
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola 👋 Quiero conversar sobre un proyecto con Dekaelo Media.\n\nEmpresa:\nQué necesito:\nFecha tentativa:\n\nGracias"
)}`;

/* ------------------------------------------------------------------ */
/*  SEO                                                                 */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Quiénes somos — Dekaelo Media | Productora audiovisual corporativa Chile",
  description:
    "Dekaelo Media es una productora audiovisual en Chile especializada en video corporativo, series institucionales y vodcast ejecutivos. +58 episodios producidos desde 2023. Banco BICE confía en nosotros.",
  keywords: [
    "Dekaelo Media quiénes somos",
    "productora audiovisual Chile",
    "video corporativo Santiago",
    "producción audiovisual empresa Chile",
  ],
  alternates: { canonical: "https://www.dekaelomedia.com/quienes-somos" },
  openGraph: {
    title: "Quiénes somos — Dekaelo Media",
    description:
      "Productora audiovisual corporativa en Chile. +58 episodios. Banco BICE, Trewhela's School, Coesam y más.",
    url: "https://www.dekaelomedia.com/quienes-somos",
    siteName: "Dekaelo Media",
    locale: "es_CL",
    type: "website",
  },
};

/* ------------------------------------------------------------------ */
/*  Datos                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { n: "58+", label: "episodios producidos desde 2023" },
  { n: "6", label: "industrias distintas" },
  { n: "3+", label: "años en producción continua" },
  { n: "300K+", label: "visualizaciones acumuladas" },
];

const clients = [
  "Banco BICE",
  "Trewhela's School",
  "Coesam®",
  "iGromi",
  "APCC",
  "Exploflex®",
  "U-Payments",
];

const values = [
  {
    title: "Claridad antes que estética",
    desc: "Un video que no se entiende no sirve, por más bonito que sea. Siempre empezamos por el mensaje.",
  },
  {
    title: "Precio y alcance por escrito",
    desc: "Antes de empezar cualquier proyecto, tienes por escrito qué incluye y qué cuesta. Sin sorpresas.",
  },
  {
    title: "Entrega que funciona de verdad",
    desc: "No entregamos archivos genéricos. Entregamos el formato correcto para cada plataforma donde vas a publicar.",
  },
  {
    title: "Procesos ordenados, no creativos caóticos",
    desc: "Respondemos rápido, cumplimos plazos y avisamos si algo cambia. Trabajar con nosotros no debería ser estresante.",
  },
];

/* ------------------------------------------------------------------ */
/*  Subcomponentes                                                      */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function QuienesSomosPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="container max-w-4xl pt-28 pb-16 md:pt-36 md:pb-20">
        <Eyebrow>Quiénes somos</Eyebrow>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Hacemos video corporativo profesional.{" "}
          <span className="text-white/35">
            Sin el ego ni el precio de una agencia grande.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/55 leading-relaxed">
          Somos un estudio audiovisual en Santiago especializado en tres
          cosas: edición de contenido corporativo mensual, videos
          institucionales puntuales y series vodcast ejecutivas para empresas
          e instituciones en Chile.
        </p>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-16">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.n}>
                <p className="text-4xl font-semibold text-white">{s.n}</p>
                <p className="mt-2 text-sm text-white/40 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ HACEMOS ──────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Qué hacemos exactamente</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Video que las empresas realmente pueden usar
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Más pedido
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Contenido corporativo mensual
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Tú grabas, nosotros editamos. 4 videos por mes listos para
                LinkedIn e Instagram. Contrato trimestral mínimo.
              </p>
              <p className="mt-4 text-sm font-medium text-white">
                $700.000 – $900.000 / mes
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex items-center rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
                Entrada rápida
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Video institucional editado
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Material grabado que necesita quedar profesional. Entrega en
                5 días hábiles. Pago único sin contrato.
              </p>
              <p className="mt-4 text-sm font-medium text-white">
                $400.000 – $650.000
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex items-center rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                Premium
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Serie vodcast ejecutiva
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Diseñamos el formato, grabamos en tu oficina y producimos la
                temporada completa. Referencia: Banco BICE.
              </p>
              <p className="mt-4 text-sm font-medium text-white">
                Desde $1.200.000 / temporada
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
            >
              Ver detalle completo de servicios y precios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ORIGEN ───────────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <Eyebrow>De dónde venimos</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Empezamos en el cine
              </h2>
              <p className="mt-6 text-white/60 leading-relaxed">
                Nuestro recorrido parte en el cine independiente con{" "}
                <strong className="text-white">"Yokai"</strong>, película
                seleccionada en festivales internacionales en 2014. Ahí
                aprendimos a contar historias con estructura, ritmo y
                criterio visual.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                Hoy aplicamos ese mismo estándar al video corporativo.
                La diferencia es que en lugar de guiones de ficción,
                trabajamos con empresas reales que necesitan comunicar
                cosas concretas a audiencias concretas.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                Desde 2023 hemos producido más de 58 episodios para
                banca, educación, industria, tecnología y cámaras
                empresariales en Chile.
              </p>
            </div>
            <div>
              <Image
                src="/qs_dekaelo_3.png"
                alt="Rodaje Dekaelo Media"
                width={600}
                height={400}
                className="rounded-2xl border border-white/10 object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO TRABAJAMOS ──────────────────────────────────────── */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Cómo trabajamos</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Sin procesos eternos
          </h2>
          <p className="mt-6 max-w-2xl text-white/55 leading-relaxed">
            Operamos como un proveedor ejecutivo. Respondemos rápido,
            definimos el alcance antes de empezar y cumplimos los plazos.
            No somos una agencia con cinco niveles de aprobación.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              {
                n: "01",
                title: "Nos cuentas qué necesitas",
                desc: "Por WhatsApp o formulario. Sin reuniones largas.",
              },
              {
                n: "02",
                title: "Alcance y precio por escrito",
                desc: "En menos de 24 horas hábiles. Claro y sin letra chica.",
              },
              {
                n: "03",
                title: "Produces o mandas el material",
                desc: "Tú grabas o lo grabamos nosotros según el servicio.",
              },
              {
                n: "04",
                title: "Recibes el video listo",
                desc: "Editado, con subtítulos, en el formato correcto para publicar.",
              },
            ].map((s) => (
              <div key={s.n}>
                <p className="text-3xl font-semibold text-white/10">{s.n}</p>
                <h3 className="mt-3 text-sm font-semibold text-white leading-snug">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/45 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Image
              src="/qs_dekaelo_4.png"
              alt="Producción audiovisual corporativa"
              width={580}
              height={380}
              className="rounded-2xl border border-white/10 object-cover w-full"
            />
            <Image
              src="/qs_dekaelo_1.png"
              alt="Rodaje institucional"
              width={580}
              height={380}
              className="rounded-2xl border border-white/10 object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* ── VALORES ──────────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Cómo pensamos</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Lo que nos importa al trabajar
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-base font-semibold text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTES ─────────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-20">
        <div className="container max-w-5xl">
          <Eyebrow>Con quiénes hemos trabajado</Eyebrow>
          <div className="mt-8 flex flex-wrap gap-3">
            {clients.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/50"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/30 leading-relaxed max-w-xl">
            Banca, educación, industria, tecnología y cámaras empresariales.
            Proyectos de uso interno y posicionamiento externo.
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-28">
        <div className="container max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Banco BICE confía en nosotros desde 2024
          </div>

          <h2 className="text-3xl font-semibold md:text-4xl">
            ¿Tu empresa necesita video profesional?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/50 leading-relaxed">
            Cuéntanos qué necesitas. Te respondemos con un alcance claro y
            un precio concreto en menos de 24 horas hábiles.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white px-10 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Escríbenos por WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-10 py-4 text-sm text-white/55 transition hover:bg-white/10 hover:text-white"
            >
              Ver servicios y precios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-6 text-xs text-white/25">
            Respondemos el mismo día hábil. Sin compromiso.
          </p>
        </div>
      </section>

    </main>
  );
}
