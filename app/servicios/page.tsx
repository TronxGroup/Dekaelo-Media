import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const waBase = "https://wa.me/56920080031?text=";

function buildWa(s: string) {
  return waBase + "Hola%2C%20quiero%20cotizar%3A%20" + encodeURIComponent(s) + "%0A%0AEmpresa%3A%0AQue%20necesito%3A%0AFecha%20tentativa%3A%0A%0AGracias";
}

export const metadata: Metadata = {
  title: "Servicios - Dekaelo Media | Video corporativo en Chile",
  description: "Produccion completa de vodcast y series corporativas, o post-produccion de material grabado. Precios claros, entrega en 5 dias habiles.",
  alternates: { canonical: "https://www.dekaelomedia.com/servicios" },
};

function Eyebrow(props: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">{props.children}</p>;
}

function Tag(props: { children: React.ReactNode; className: string }) {
  return <span className={"inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium " + props.className}>{props.children}</span>;
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l3.5 3.5L13 4" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-white/20" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

export default function ServiciosPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      <section className="container max-w-4xl pt-28 pb-16 md:pt-36 md:pb-20">
        <Eyebrow>Servicios</Eyebrow>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Servicios y precios
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/55 leading-relaxed">
          Produccion completa en terreno o post-produccion de lo que tu empresa ya grabo.
          Cotizamos alcance y plazo el mismo dia.
        </p>
      </section>

      {/* SERVICIO 1 - PRODUCCION COMPLETA */}
      <section id="produccion" className="border-t border-white/10 py-24 scroll-mt-20">
        <div className="container max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
            <div>
              <Tag className="bg-amber-500/15 text-amber-300 border border-amber-400/20 mb-6">Especialidad principal</Tag>
              <h2 className="text-3xl font-semibold md:text-4xl leading-tight">Produccion completa</h2>
              <p className="mt-5 text-lg text-white/55 leading-relaxed">
                Produccion completa en terreno, con direccion y postproduccion.
                Para empresas que quieren vodcast, series corporativas o video institucional.
              </p>
              <div className="mt-8 rounded-2xl border border-amber-400/15 bg-amber-500/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300/60 mb-3">Referencia real</p>
                <p className="text-white/70 leading-relaxed">
                  <strong className="text-white">Banco BICE</strong> lleva trabajando con nosotros desde 2024 en una serie continua de vodcast institucional enfocada en liderazgo ejecutivo y cultura organizacional. 3 episodios finalizados, temporada activa en curso.
                </p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-white mb-4">Que incluye</p>
                  <ul className="space-y-3">
                    {[
                      "Diseno de formato y pauta narrativa",
                      "Grabacion profesional en tu oficina",
                      "Direccion y conduccion tecnica",
                      "Edicion completa con color y sonido",
                      "Subtitulos y formatos por plataforma",
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
                      "Serie institucional para comunicacion interna",
                      "Video corporativo para licitacion o presentacion",
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
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 lg:sticky lg:top-24">
              <p className="text-sm text-white/40">Precio por temporada</p>
              <p className="mt-2 text-3xl font-semibold text-white">Desde $1.200.000</p>
              <p className="text-white/35 text-sm">+ IVA - minimo 4 episodios</p>
              <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/50 leading-relaxed">
                Precio final depende del numero de episodios y produccion. Cotizamos tras conversacion inicial sin costo.
              </div>
              
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
              <p className="mt-4 text-center text-xs text-white/25">Conversacion inicial sin compromiso</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIO 2 - POST-PRODUCCION */}
      <section id="postproduccion" className="border-t border-white/10 py-24 scroll-mt-20">
        <div className="container max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
            <div>
              <Tag className="bg-sky-500/15 text-sky-300 border border-sky-400/20 mb-6">Post-produccion - pago unico</Tag>
              <h2 className="text-3xl font-semibold md:text-4xl leading-tight">Post-produccion</h2>
              <p className="mt-5 text-lg text-white/55 leading-relaxed">
                Tu o tu empresa graban. Nosotros editamos y entregamos en el formato correcto para cada plataforma.
              </p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-3">Como funciona</p>
                <p className="text-white/70 leading-relaxed">
                  <strong className="text-white">Mandas el material en bruto.</strong> Definimos alcance por escrito antes de empezar, pagas 50% adelantado y en 5 dias habiles recibes el video listo para publicar o presentar.
                </p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-white mb-4">Que incluye</p>
                  <ul className="space-y-3">
                    {[
                      "Edicion completa del material",
                      "Correccion de audio y color",
                      "Titulos, creditos y subtitulos",
                      "Formato para redes y web",
                      "1 ronda de revision incluida",
                      "Entrega en 5 dias habiles",
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
                      "Grabacion de evento corporativo",
                      "Entrevista a gerente o fundador",
                      "Capacitacion interna filmada",
                      "Lanzamiento de producto registrado",
                      "Testimonio de cliente o caso de exito",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                        <CheckIcon />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 lg:sticky lg:top-24">
              <p className="text-sm text-white/40">Precio por video</p>
              <p className="mt-2 text-4xl font-semibold text-white">$400.000</p>
              <p className="text-white/35 text-sm">- $650.000 + IVA - pago unico</p>
              <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/50 leading-relaxed">
                Precio depende de duracion y cantidad de material. Cotizamos antes de empezar.
              </div>
              
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

      {/* NO HACEMOS */}
      <section className="border-t border-white/10 py-20">
        <div className="container max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Eyebrow>Lo que no hacemos</Eyebrow>
              <h2 className="mt-4 text-2xl font-semibold">Preferimos ser claros antes de empezar</h2>
              <p className="mt-4 text-white/50 leading-relaxed">
                Si lo que necesitas no es lo que hacemos, te lo decimos en la primera conversacion.
              </p>
            </div>
            <ul className="space-y-3 self-center">
              {[
                "Produccion de TV, comerciales o publicidad masiva",
                "Animacion, motion graphics o diseno grafico",
                "Fotografia corporativa o eventos",
                "Gestion de redes sociales",
                "Grabacion sin material previo para post-produccion",
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
            Banco BICE confia en nosotros desde 2024
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">No estas seguro cual necesitas?</h2>
          <p className="mx-auto mt-5 max-w-xl text-white/50 leading-relaxed">
            Cuentanos que tienes grabado o que quieres comunicar. En una conversacion corta te decimos cual servicio encaja y a que precio.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            
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
          <p className="mt-6 text-xs text-white/25">Respondemos el mismo dia habil. Sin compromiso.</p>
        </div>
      </section>

    </main>
  );
}
