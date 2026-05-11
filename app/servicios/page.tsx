import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const waBase = "https://wa.me/56920080031?text=Hola%2C%20quiero%20cotizar%3A%20";
const waEnd = "%0A%0AEmpresa%3A%0AQue%20necesito%3A%0AFecha%20tentativa%3A%0A%0AGracias";

function buildWa(s: string) {
  return waBase + encodeURIComponent(s) + waEnd;
}

export const metadata: Metadata = {
  title: "Servicios - Dekaelo Media | Video corporativo en Chile",
  description: "Producción completa de vodcast y series corporativas, o post-producción de material grabado. Precios claros, entrega en 5 días hábiles.",
  alternates: { canonical: "https://www.dekaelomedia.com/servicios" },
};

function Eyebrow(props: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">{props.children}</p>;
}

function Tag(props: { children: React.ReactNode; className: string }) {
  return <span className={"inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium " + props.className}>{props.children}</span>;
}

function CheckIcon() {
  return <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2.2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l3.5 3.5L13 4" /></svg>;
}

function CrossIcon() {
  return <svg className="mt-0.5 h-4 w-4 shrink-0 text-white/20" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2.2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4l8 8M12 4l-8 8" /></svg>;
}

export default function ServiciosPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      {/* HERO */}
      <section className="container max-w-4xl pt-28 pb-16 md:pt-36 md:pb-20">
        <Eyebrow>Servicios</Eyebrow>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Tu departamento de contenido.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/55 leading-relaxed">
          Producción completa en terreno o post-producción de lo que tu empresa ya grabó.
          Sin equipo interno, sin estructura de agencia. Definimos alcance y precio el mismo día.
        </p>
      </section>

      {/* PRODUCCION COMPLETA */}
      <section id="produccion" className="border-t border-white/10 py-24 scroll-mt-20">
        <div className="container max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
            <div>
              <Tag className="bg-amber-500/15 text-amber-300 border border-amber-400/20 mb-6">
                Especialidad principal
              </Tag>
              <h2 className="text-3xl font-semibold md:text-4xl leading-tight">
                Producción completa
              </h2>
              <p className="mt-5 text-lg text-white/55 leading-relaxed">
                Somos tu equipo de producción externo. Diseñamos el formato, llegamos con equipo a tu oficina y producimos la temporada completa. Tu empresa aparece y publica. Nosotros nos encargamos de todo lo demás.
              </p>
              <div className="mt-8 rounded-2xl border border-amber-400/15 bg-amber-500/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300/60 mb-3">
                  Referencia real
                </p>
                <p className="text-white/70 leading-relaxed">
                  <strong className="text-white">BICECORP</strong> lleva trabajando con nosotros desde 2024 en una serie continua de vodcast institucional. Más de 14 episodios producidos. Temporada activa en curso.
                </p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-white mb-4">Qué incluye</p>
                  <ul className="space-y-3">
                    {[
                      "Diseño de formato y pauta narrativa",
                      "Grabación profesional en tu oficina",
                      "Dirección y conducción técnica",
                      "Edición completa con color y sonido",
                      "Subtítulos y formatos por plataforma",
                      "Desde 4 episodios por temporada",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                        <CheckIcon />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-4">Casos de uso</p>
                  <ul className="space-y-3">
                    {[
                      "Vodcast ejecutivo o de liderazgo",
                      "Serie institucional para comunicación interna",
                      "Video corporativo para licitación o presentación",
                      "Programa de contenido continuo para LinkedIn",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                        <CheckIcon />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* PRECIO */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 lg:sticky lg:top-24">
              <p className="text-sm text-white/40">Precio por episodio</p>
              <p className="mt-2 text-3xl font-semibold text-white">Desde $650.000</p>
              <p className="text-white/35 text-sm">+ IVA — mínimo 4 episodios por temporada</p>
              <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/50 leading-relaxed">
                El alcance se define según número de episodios y nivel de producción.
              </div>
              <a
                href={buildWa("Produccion completa - vodcast o serie corporativa")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Escribir por WhatsApp <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/contacto"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                Prefiero el formulario <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-4 text-center text-xs text-white/25">Primera conversación sin costo</p>
            </div>
          </div>
        </div>
      </section>

      {/* POST PRODUCCION */}
      <section id="postproduccion" className="border-t border-white/10 py-24 scroll-mt-20">
        <div className="container max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
            <div>
              <Tag className="bg-sky-500/15 text-sky-300 border border-sky-400/20 mb-6">
                Post-producción — pago único
              </Tag>
              <h2 className="text-3xl font-semibold md:text-4xl leading-tight">
                Post-producción
              </h2>
              <p className="mt-5 text-lg text-white/55 leading-relaxed">
                Tú o tu empresa graban. Nosotros editamos y entregamos en el formato correcto para cada plataforma. Ideal para empresas que ya tienen material sin editar.
              </p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-3">
                  Cómo funciona
                </p>
                <p className="text-white/70 leading-relaxed">
                  <strong className="text-white">Mandas el material en bruto.</strong> Definimos alcance por escrito antes de empezar, pagas 50% adelantado y en 5 días hábiles recibes el video listo para publicar.
                </p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-white mb-4">Qué incluye</p>
                  <ul className="space-y-3">
                    {[
                      "Edición completa del material",
                      "Corrección de audio y color",
                      "Títulos, créditos y subtítulos",
                      "Formato para redes y web",
                      "1 ronda de revisión incluida",
                      "Entrega en 5 días hábiles",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                        <CheckIcon />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-4">Casos de uso</p>
                  <ul className="space-y-3">
                    {[
                      "Grabación de evento corporativo",
                      "Entrevista a gerente o fundador",
                      "Capacitación interna filmada",
                      "Lanzamiento de producto registrado",
                      "Testimonio de cliente o caso de éxito",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                        <CheckIcon />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* PRECIO */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 lg:sticky lg:top-24">
              <p className="text-sm text-white/40">Precio por video</p>
              <p className="mt-2 text-4xl font-semibold text-white">Desde $350.000</p>
              <p className="text-white/35 text-sm">+ IVA — pago único</p>
              <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/50 leading-relaxed">
                El alcance se define según duración y cantidad de material.
              </div>
              <a
                href={buildWa("Post-produccion - edicion de material grabado")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Escribir por WhatsApp <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/contacto"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                Prefiero el formulario <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-4 text-center text-xs text-white/25">Alcance por escrito antes de empezar</p>
            </div>
          </div>
        </div>
      </section>

      {/* LO QUE NO HACEMOS */}
      <section className="border-t border-white/10 py-20">
        <div className="container max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Eyebrow>Lo que no hacemos</Eyebrow>
              <h2 className="mt-4 text-2xl font-semibold">
                Preferimos ser claros antes de empezar
              </h2>
              <p className="mt-4 text-white/50 leading-relaxed">
                Si lo que necesitas no es lo que hacemos, te lo decimos en la primera conversación. Sin rodeos.
              </p>
            </div>
            <ul className="space-y-3 self-center">
              {[
                "Producción de TV, comerciales o publicidad masiva",
                "Animación, motion graphics o diseño gráfico",
                "Fotografía corporativa o eventos",
                "Gestión de redes sociales",
                "Grabación sin material previo para post-producción",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/40">
                  <CrossIcon />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-28">
        <div className="container max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            BICE — Cámara de Comercio Asia Pacífico — iGromi — Coesam — Exploflex
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">
            ¿Conversamos tu proyecto?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/50 leading-relaxed">
            Cuéntanos qué tienes grabado o qué quieres comunicar. Te decimos qué servicio encaja y a qué precio.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={buildWa("Consulta general")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white px-10 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Escribir por WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-10 py-4 text-sm text-white/55 transition hover:bg-white/10 hover:text-white"
            >
              O usa el formulario <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/25">Respondemos el mismo día hábil. Sin compromiso.</p>
        </div>
      </section>

    </main>
  );
}
