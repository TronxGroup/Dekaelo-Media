import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Config                                                              */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = "56920080031";

function buildWa(servicio: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola 👋 Quiero cotizar el servicio: ${servicio}\n\nEmpresa:\nQué necesito:\nFecha tentativa:\n\nGracias`
  )}`;
}

/* ------------------------------------------------------------------ */
/*  SEO                                                                 */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Servicios — Dekaelo Media | Video corporativo en Chile",
  description:
    "Edición de video corporativo mensual, video institucional puntual y series vodcast para empresas en Chile. Precios claros, entrega en 5 días hábiles. Banco BICE confía en nosotros.",
  keywords: [
    "video corporativo Chile precio",
    "edición video empresas Santiago",
    "vodcast corporativo Chile",
    "contenido mensual LinkedIn empresas",
    "video institucional editado Chile",
  ],
  alternates: { canonical: "https://www.dekaelomedia.com/servicios" },
  openGraph: {
    title: "Servicios — Dekaelo Media",
    description:
      "Tres servicios claros de video corporativo para empresas en Chile. Precio visible. Entrega rápida.",
    url: "https://www.dekaelomedia.com/servicios",
    siteName: "Dekaelo Media",
    locale: "es_CL",
    type: "website",
  },
};

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

function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function ServiciosPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="container max-w-4xl pt-28 pb-16 md:pt-36 md:pb-20">
        <Eyebrow>Servicios</Eyebrow>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Tres servicios. Precios claros.{" "}
          <span className="text-white/35">Sin letra chica.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/55 leading-relaxed">
          No hacemos de todo. Hacemos bien tres cosas: edición mensual,
          videos puntuales y series vodcast. Si lo que necesitas encaja, te
          decimos precio y plazo el mismo día.
        </p>
      </section>

      {/* ── SERVICIO 1: MENSUAL ───────────────────────────────────── */}
      <section
        id="mensual"
        className="border-t border-white/10 py-24 scroll-mt-20"
      >
        <div className="container max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">

            {/* Descripción */}
            <div>
              <Tag className="bg-emerald-500/15 text-emerald-300 border border-emerald-400/20 mb-6">
                Más pedido
              </Tag>
              <h2 className="text-3xl font-semibold md:text-4xl leading-tight">
                Contenido corporativo mensual
              </h2>
              <p className="mt-5 text-lg text-white/55 leading-relaxed">
                Para empresas que quieren publicar en LinkedIn e Instagram de
                forma constante sin tener equipo interno de video.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-white/50 mb-3 uppercase tracking-wider text-xs">
                  Cómo funciona
                </p>
                <p className="text-white/70 leading-relaxed">
                  <strong className="text-white">Tú grabas con tu celular o equipo.</strong>{" "}
                  Nosotros recibimos el material en bruto y entregamos videos
                  editados, con subtítulos, portadas y en el formato correcto
                  para cada plataforma. Tú solo publicas.
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-white mb-4">
                    Qué incluye
                  </p>
                  <ul className="space-y-3">
                    {[
                      "4 videos editados por mes",
                      "Subtítulos en todos los formatos",
                      "Portadas y miniaturas para YouTube",
                      "Corrección de audio y color básico",
                      "Formato para LinkedIn, Instagram y YouTube",
                      "Revisión incluida por video",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-white/60"
                      >
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-4">
                    Para quién es
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Empresa con contenido grabado sin editar",
                      "Equipo de comunicaciones sin editor interno",
                      "Gerente que quiere presencia constante en LinkedIn",
                      "Empresa que quiere publicar pero no sabe cómo",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-white/60"
                      >
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Tarjeta precio */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 lg:sticky lg:top-24">
              <p className="text-sm text-white/40">Precio mensual</p>
              <p className="mt-2 text-4xl font-semibold text-white">
                $700.000
              </p>
              <p className="text-white/35 text-sm">– $900.000 / mes + IVA</p>

              <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/50 leading-relaxed">
                El precio varía según duración y complejidad de los videos.
                Contrato mínimo 3 meses.
              </div>

              <a
                href={buildWa("Contenido corporativo mensual")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Quiero este servicio
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <Link
                href="/contacto"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                Prefiero el formulario
                <ArrowRight className="h-4 w-4" />
              </Link>

              <p className="mt-4 text-center text-xs text-white/25">
                Respondemos el mismo día hábil
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIO 2: PUNTUAL ───────────────────────────────────── */}
      <section
        id="puntual"
        className="border-t border-white/10 py-24 scroll-mt-20"
      >
        <div className="container max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">

            {/* Descripción */}
            <div>
              <Tag className="bg-sky-500/15 text-sky-300 border border-sky-400/20 mb-6">
                Entrada rápida · pago único
              </Tag>
              <h2 className="text-3xl font-semibold md:text-4xl leading-tight">
                Video institucional editado
              </h2>
              <p className="mt-5 text-lg text-white/55 leading-relaxed">
                Tienes material grabado — un evento, una entrevista, una
                capacitación — y necesita quedar profesional. Sin compromiso
                de continuidad.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-white/50 mb-3 uppercase tracking-wider text-xs">
                  Cómo funciona
                </p>
                <p className="text-white/70 leading-relaxed">
                  <strong className="text-white">
                    Mandas el material en bruto.
                  </strong>{" "}
                  Definimos alcance por escrito antes de empezar, pagas 50%
                  adelantado y en 5 días hábiles recibes el video listo para
                  publicar o presentar. Sin sorpresas.
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-white mb-4">
                    Qué incluye
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Edición completa del material",
                      "Corrección de audio y color",
                      "Títulos, créditos y subtítulos",
                      "Formato para web, redes o presentación",
                      "1 ronda de revisión incluida",
                      "Entrega en 5 días hábiles",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-white/60"
                      >
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-4">
                    Casos típicos
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Grabación de un evento corporativo",
                      "Entrevista a gerente o fundador",
                      "Capacitación interna filmada",
                      "Registro de lanzamiento de producto",
                      "Testimonio de cliente o caso de éxito",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-white/60"
                      >
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Tarjeta precio */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 lg:sticky lg:top-24">
              <p className="text-sm text-white/40">Precio por video</p>
              <p className="mt-2 text-4xl font-semibold text-white">
                $400.000
              </p>
              <p className="text-white/35 text-sm">– $650.000 + IVA · pago único</p>

              <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/50 leading-relaxed">
                El precio depende de la duración y cantidad de material en
                bruto. Cotizamos antes de empezar.
              </div>

              <div className="mt-5 rounded-xl border border-amber-400/15 bg-amber-500/5 p-4 text-sm text-amber-300/70 leading-relaxed">
                Este servicio es la puerta de entrada más fácil. Muchos
                clientes que empiezan con un video puntual pasan al plan
                mensual.
              </div>

              <a
                href={buildWa("Video institucional editado")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Cotizar este video
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <Link
                href="/contacto"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                Prefiero el formulario
                <ArrowRight className="h-4 w-4" />
              </Link>

              <p className="mt-4 text-center text-xs text-white/25">
                Alcance por escrito antes de empezar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIO 3: VODCAST ───────────────────────────────────── */}
      <section
        id="vodcast"
        className="border-t border-white/10 py-24 scroll-mt-20"
      >
        <div className="container max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">

            {/* Descripción */}
            <div>
              <Tag className="bg-amber-500/15 text-amber-300 border border-amber-400/20 mb-6">
                Premium · producción completa
              </Tag>
              <h2 className="text-3xl font-semibold md:text-4xl leading-tight">
                Serie vodcast ejecutiva
              </h2>
              <p className="mt-5 text-lg text-white/55 leading-relaxed">
                Para empresas que quieren posicionar a sus líderes o comunicar
                cultura organizacional de forma continua y profesional.
              </p>

              {/* Referencia BICE destacada */}
              <div className="mt-8 rounded-2xl border border-amber-400/15 bg-amber-500/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300/60 mb-3">
                  Referencia real
                </p>
                <p className="text-white/70 leading-relaxed">
                  <strong className="text-white">Banco BICE</strong> lleva
                  trabajando con nosotros desde 2024 en una serie continua de
                  vodcast institucional enfocada en liderazgo ejecutivo y
                  cultura organizacional. Hemos producido 11 episodios con
                  estándar profesional y confidencialidad total.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-white/50 mb-3 uppercase tracking-wider text-xs">
                  Cómo funciona
                </p>
                <p className="text-white/70 leading-relaxed">
                  Diseñamos el formato junto a ti, definimos narrativa y
                  pauta, grabamos en tu oficina con equipo técnico profesional
                  y producimos cada episodio con edición completa, color y
                  sonido.
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-white mb-4">
                    Qué incluye
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Diseño de formato y pauta narrativa",
                      "Grabación profesional en tu oficina",
                      "Dirección y conducción si la necesitas",
                      "Edición completa con color y sonido",
                      "Subtítulos y formatos por plataforma",
                      "Desde 4 episodios por temporada",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-white/60"
                      >
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-4">
                    Para quién es
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Empresa que quiere posicionar a sus líderes",
                      "Gerencia de comunicaciones con presupuesto",
                      "Institución con necesidad de comunicación interna continua",
                      "Empresa que ya intentó hacer vodcast y quedó mal",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-white/60"
                      >
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Tarjeta precio */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 lg:sticky lg:top-24">
              <p className="text-sm text-white/40">Precio por temporada</p>
              <p className="mt-2 text-4xl font-semibold text-white">
                Desde
              </p>
              <p className="text-3xl font-semibold text-white">$1.200.000</p>
              <p className="text-white/35 text-sm">+ IVA · mínimo 4 episodios</p>

              <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/50 leading-relaxed">
                El precio final depende del número de episodios, duración y
                necesidades de producción. Cotizamos tras una conversación
                inicial sin costo.
              </div>

              <a
                href={buildWa("Serie vodcast ejecutiva")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Conversemos tu serie
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <Link
                href="/contacto"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                Prefiero el formulario
                <ArrowRight className="h-4 w-4" />
              </Link>

              <p className="mt-4 text-center text-xs text-white/25">
                Conversación inicial sin compromiso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NO HACEMOS ───────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-20">
        <div className="container max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Eyebrow>Lo que no hacemos</Eyebrow>
              <h2 className="mt-4 text-2xl font-semibold">
                Preferimos ser claros antes de empezar
              </h2>
              <p className="mt-4 text-white/50 leading-relaxed">
                Si lo que necesitas no es lo que hacemos, te lo decimos en la
                primera conversación. Sin hacerte perder el tiempo.
              </p>
            </div>
            <ul className="space-y-3 self-center">
              {[
                "Producción de TV, comerciales o publicidad masiva",
                "Animación, motion graphics o diseño gráfico",
                "Fotografía corporativa o eventos",
                "Gestión de redes sociales",
                "Grabación sin material previo para el servicio puntual",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-white/40"
                >
                  <CrossIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
            ¿No estás seguro cuál necesitas?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/50 leading-relaxed">
            Cuéntanos qué tienes grabado o qué quieres comunicar. En una
            conversación corta te decimos cuál servicio encaja y a qué precio.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={buildWa("Consulta general — no sé cuál servicio necesito")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white px-10 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Escríbenos por WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-10 py-4 text-sm text-white/55 transition hover:bg-white/10 hover:text-white"
            >
              O usa el formulario
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
