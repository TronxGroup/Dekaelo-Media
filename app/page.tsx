import Link from "next/link";
import type { Metadata } from "next";
import { VideoEmbed } from "./components/VideoEmbed";
import { ClientLogos } from "./components/ClientLogos";
import { ArrowUpRight, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Config                                                              */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = "56920080031";
const WA_MSG = encodeURIComponent(
  "Hola 👋 Quiero conversar sobre un proyecto con Dekaelo Media.\n\nEmpresa:\nQué necesito:\nFecha tentativa:\n\nGracias"
);
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MSG}`;

/* ------------------------------------------------------------------ */
/*  SEO                                                                 */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Dekaelo Media — Video corporativo y series institucionales en Chile",
  description:
    "Convertimos tu contenido en video profesional listo para LinkedIn, YouTube e Instagram. Edición, vodcast y series institucionales para empresas en Chile. Banco BICE confía en nosotros.",
  keywords: [
    "video corporativo Chile",
    "edición video empresas Chile",
    "vodcast corporativo Santiago",
    "producción audiovisual empresa Chile",
    "serie institucional empresa",
  ],
  openGraph: {
    title: "Dekaelo Media — Video corporativo en Chile",
    description:
      "Tu empresa genera contenido todos los días. El problema es que nadie lo ve bien. Nosotros lo resolvemos.",
    url: "https://www.dekaelomedia.com",
    siteName: "Dekaelo Media",
    locale: "es_CL",
    type: "website",
  },
};

/* ------------------------------------------------------------------ */
/*  Datos                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    badge: "Más pedido",
    badgeClass:
      "bg-emerald-500/15 text-emerald-300 border border-emerald-400/20",
    name: "Contenido corporativo mensual",
    tagline:
      "Para empresas que quieren publicar en LinkedIn e Instagram de forma constante sin tener equipo interno de video.",
    how: "Tú grabas con tu celular o equipo. Nosotros editamos, titulamos, subtitulamos y entregamos listo para publicar.",
    includes: [
      "4 videos editados por mes",
      "Portadas y miniaturas incluidas",
      "Subtítulos en todos los formatos",
      "Contrato mínimo 3 meses",
    ],
    price: "$700.000 – $900.000 / mes",
    note: "+ IVA",
    href: "/servicios#mensual",
  },
  {
    badge: "Entrada rápida",
    badgeClass: "bg-sky-500/15 text-sky-300 border border-sky-400/20",
    name: "Video institucional editado",
    tagline:
      "Tienes material grabado — un evento, una entrevista, una capacitación — y necesita quedar profesional.",
    how: "Mandas el material en bruto. En 5 días hábiles te entregamos el video con corrección de audio, títulos y formato para web o redes.",
    includes: [
      "Entrega en 5 días hábiles",
      "Corrección de audio y color",
      "Títulos y créditos incluidos",
      "Pago 50% adelantado · alcance por escrito",
    ],
    price: "$400.000 – $650.000",
    note: "+ IVA · pago único",
    href: "/servicios#puntual",
  },
  {
    badge: "Premium",
    badgeClass: "bg-amber-500/15 text-amber-300 border border-amber-400/20",
    name: "Serie vodcast ejecutiva",
    tagline:
      "Para empresas que quieren posicionar a sus líderes o comunicar cultura organizacional de forma continua.",
    how: "Diseñamos el formato, grabamos en tu oficina y producimos la temporada completa.",
    includes: [
      "Dirección y grabación profesional",
      "Diseño de formato y pauta narrativa",
      "Desde 4 episodios por temporada",
      "Referencia: Banco BICE (2024–2026)",
    ],
    price: "Desde $1.200.000 / temporada",
    note: "+ IVA",
    href: "/servicios#vodcast",
  },
];

const cases = [
  {
    tag: "Vodcast · Serie institucional",
    name: "Banco BICE — Serie vodcast institucional",
    period: "2024–2026",
    desc: "Producción continua enfocada en liderazgo ejecutivo y cultura organizacional.",
    note: "Contenido confidencial de uso interno.",
    youtube:
      "https://www.youtube.com/embed/lyt5wWzPCg8?rel=0&modestbranding=1&playsinline=1",
  },
  {
    tag: "Documental institucional",
    name: "Trewhela's School — Documental 80 Años",
    desc: "Narrativa histórica, entrevistas multicámara y tratamiento cinematográfico aplicado al entorno educacional.",
    youtube:
      "https://www.youtube.com/embed/JKsSN2lo_RU?rel=0&modestbranding=1&playsinline=1",
  },
  {
    tag: "Video corporativo",
    name: "Coesam® — Video Corporativo Internacional",
    desc: "Pieza orientada a posicionamiento internacional. Mensaje estratégico y estética sobria enfocada en credibilidad.",
    youtube:
      "https://www.youtube.com/embed/b_sq_6TiwdE?rel=0&modestbranding=1&playsinline=1",
  },
];

const forWho = [
  "Tienes un jefe o cliente que te pide video y no sabes a quién llamar",
  "Tu empresa hace cosas importantes pero nadie lo sabe porque no publican",
  "Grabaste algo en un evento y lleva meses sin editar",
  "Quieres contenido para LinkedIn pero no quieres contratar una agencia completa",
  "Necesitas un video institucional antes de una reunión o licitación",
];

const notForWho = [
  "Necesitas producción de TV o publicidad masiva",
  "Buscas el precio más bajo del mercado",
  "No tienes claro qué quieres comunicar",
];

const steps = [
  {
    n: "01",
    title: "Nos cuentas qué necesitas",
    desc: "Por WhatsApp o formulario. Sin reuniones largas ni presentaciones.",
  },
  {
    n: "02",
    title: "Te enviamos alcance y precio",
    desc: "Claro, por escrito, en menos de 24 horas hábiles.",
  },
  {
    n: "03",
    title: "Produces o mandas el material",
    desc: "Tú grabas con tu equipo o te grabamos nosotros según el servicio.",
  },
  {
    n: "04",
    title: "Recibas el video listo para publicar",
    desc: "Editado, con subtítulos, en el formato que necesitas. Sin vueltas.",
  },
];

/* ------------------------------------------------------------------ */
/*  Subcomponentes                                                      */
/* ------------------------------------------------------------------ */

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/55">
      {children}
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
      {children}
    </p>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
      fill="none"
      viewBox="0 0 16 16"
      stroke="currentColor"
      strokeWidth={2.2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l3.5 3.5L13 4" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-white/20"
      fill="none"
      viewBox="0 0 16 16"
      stroke="currentColor"
      strokeWidth={2.2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Page() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="container max-w-5xl pt-28 pb-20 md:pt-36 md:pb-28">

        {/* Credencial — ancla de confianza arriba del titular */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/50">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Banco BICE confía en nosotros desde 2024 · +58 episodios producidos
        </div>

        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          Tu empresa genera contenido todos los días.{" "}
          <span className="text-white/35">
            El problema es que nadie lo ve bien.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
          Tomamos lo que ya tienes grabado — o lo grabamos nosotros — y lo
          convertimos en{" "}
          <strong className="text-white font-semibold">
            video profesional
          </strong>{" "}
          listo para LinkedIn, YouTube e Instagram.{" "}
          <strong className="text-white font-semibold">
            Sin procesos eternos.
          </strong>{" "}
          Sin presupuestos de agencia.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Chip>Entrega en 5 días hábiles</Chip>
          <Chip>Contrato mensual desde 3 meses</Chip>
          <Chip>Santiago, Chile</Chip>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Cuéntanos tu proyecto por WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link
            href="/portafolio"
            className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 px-8 py-3.5 text-sm text-white/65 transition hover:bg-white/10 hover:text-white"
          >
            Ver trabajos realizados
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── REEL ─────────────────────────────────────────────────── */}
      <section className="container max-w-5xl pb-24">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Eyebrow>Reel institucional</Eyebrow>
          <Link
            href="/portafolio"
            className="text-sm text-white/35 transition hover:text-white"
          >
            Ver todos los casos →
          </Link>
        </div>
        <VideoEmbed
          src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0&modestbranding=1&playsinline=1"
          title="Dekaelo Media Reel"
        />
      </section>

      {/* ── CLIENTES ─────────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-16">
        <div className="container">
          <p className="mb-10 text-center text-xs uppercase tracking-widest text-white/25">
            Empresas e instituciones con las que hemos trabajado
          </p>
          <ClientLogos />
        </div>
      </section>

      {/* ── SERVICIOS ────────────────────────────────────────────── */}
      <section className="container border-t border-white/10 py-24 max-w-6xl">
        <div className="mb-14 flex items-end justify-between gap-4">
          <div>
            <Eyebrow>Servicios</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Tres formas de trabajar juntos
            </h2>
          </div>
          <Link
            href="/servicios"
            className="hidden text-sm text-white/35 transition hover:text-white sm:block"
          >
            Ver detalle completo →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:bg-white/8 hover:border-white/20"
            >
              <span
                className={`mb-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium ${s.badgeClass}`}
              >
                {s.badge}
              </span>

              <h3 className="text-lg font-semibold text-white leading-snug">
                {s.name}
              </h3>

              <p className="mt-3 text-sm text-white/55 leading-relaxed">
                {s.tagline}
              </p>

              <p className="mt-4 text-xs text-white/35 leading-relaxed italic">
                {s.how}
              </p>

              <ul className="mt-5 space-y-2 flex-1">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-base font-semibold text-white">{s.price}</p>
                <p className="text-xs text-white/35 mt-0.5">{s.note}</p>
              </div>

              <div className="mt-4 flex items-center gap-1 text-sm text-white/35 transition group-hover:text-white/60">
                Ver detalle <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-8 py-3.5 text-sm text-white/70 transition hover:bg-white hover:text-black"
          >
            No estás seguro cuál necesitas — escríbenos y te orientamos
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ── CASOS SELECCIONADOS ───────────────────────────────────── */}
      <section className="container border-t border-white/10 py-24 max-w-6xl">
        <div className="mb-14 flex items-end justify-between gap-4">
          <div>
            <Eyebrow>Casos seleccionados</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Lo que hemos producido
            </h2>
          </div>
          <Link
            href="/portafolio"
            className="hidden text-sm text-white/35 transition hover:text-white sm:block"
          >
            Ver portafolio completo →
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {cases.map((c) => (
            <article key={c.name}>
              <VideoEmbed src={c.youtube} title={c.name} />
              <div className="mt-5">
                <p className="text-xs text-white/35">{c.tag}</p>
                <h3 className="mt-1.5 text-base font-semibold text-white leading-snug">
                  {c.name}{" "}
                  {c.period && (
                    <span className="text-white/40 font-normal">
                      · {c.period}
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">
                  {c.desc}
                </p>
                {c.note && (
                  <p className="mt-1 text-xs text-white/25 italic">{c.note}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-2 border border-white/15 px-8 py-3 text-sm text-white/55 transition hover:border-white/30 hover:text-white"
          >
            Ver portafolio completo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Cómo funciona</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Simple. Sin vueltas.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n}>
                <p className="text-4xl font-semibold text-white/10">{s.n}</p>
                <h3 className="mt-3 text-base font-semibold text-white leading-snug">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ES ────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Para quién es</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            ¿Esto es para ti?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-semibold text-white mb-5">
                Sí es para ti si…
              </p>
              <ul className="space-y-3">
                {forWho.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-semibold text-white mb-5">
                No es para ti si…
              </p>
              <ul className="space-y-3">
                {notForWho.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/40 leading-relaxed">
                    <CrossIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-white/50 leading-relaxed">
                  Si no estás seguro, escríbenos igual. Si no somos la mejor
                  opción para tu proyecto, te lo decimos sin rodeos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-28">
        <div className="container max-w-4xl text-center">

          {/* Credencial repetida antes del CTA */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Banco BICE · Trewhela's School · Coesam · iGromi · APCC · Exploflex
          </div>

          <h2 className="text-3xl font-semibold md:text-4xl">
            ¿Conversamos tu proyecto?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/55 leading-relaxed">
            Cuéntanos qué necesitas. Te respondemos con un alcance claro y un
            precio concreto en menos de 24 horas hábiles.
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
              href="/contacto"
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-10 py-4 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              O usa el formulario de contacto
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
