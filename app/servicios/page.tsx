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
  description:
    "Produccion completa de vodcast y series corporativas, o post-produccion de material grabado. Precios claros, entrega en 5 dias habiles.",
  alternates: { canonical: "https://www.dekaelomedia.com/servicios" },
};

function Eyebrow(props: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
      {props.children}
    </p>
  );
}

function Tag(props: { children: React.ReactNode; className: string }) {
  return (
    <span
      className={
        "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium " +
        props.className
      }
    >
      {props.children}
    </span>
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

export default function ServiciosPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      {/* HERO */}
      <section className="container max-w-4xl pt-28 pb-16 md:pt-36 md:pb-20">
        <Eyebrow>Servicios</Eyebrow>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Servicios y precios
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/55 leading-relaxed">
          Produccion completa en terreno o post-produccion de material existente.
          Definimos alcance y plazo el mismo dia.
        </p>
      </section>

      {/* PRODUCCION */}
      <section id="produccion" className="border-t border-white/10 py-24">
        <div className="container max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <div>
              <Tag className="bg-amber-500/15 text-amber-300 border border-amber-400/20 mb-6">
                Especialidad principal
              </Tag>

              <h2 className="text-3xl font-semibold md:text-4xl">
                Produccion completa
              </h2>

              <p className="mt-5 text-lg text-white/55 leading-relaxed">
                Produccion en terreno, con direccion y postproduccion.
              </p>

              <div className="mt-8 rounded-2xl border border-amber-400/15 bg-amber-500/5 p-6">
                <p className="text-xs uppercase text-amber-300/60 mb-3">
                  Referencia
                </p>
                <p className="text-white/70">
                  <strong className="text-white">BICE</strong> · trabajo
                  continuo desde 2024. Grabación, edición y entrega en ciclo mensual.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm text-white/40">Precio por temporada</p>
              <p className="mt-2 text-3xl font-semibold">
                Desde $1.200.000
              </p>
              <p className="text-white/35 text-sm">+ IVA</p>

              <div className="mt-5 text-sm text-white/50">
                El alcance se define segun numero de episodios y produccion.
              </div>

              <a
                href={buildWa("Produccion completa")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3 text-black"
              >
                Escribir por WhatsApp <ArrowUpRight className="h-4 w-4" />
              </a>

              <Link
                href="/contacto"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 border border-white/10 px-6 py-3 text-white/60"
              >
                Formulario <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POST */}
      <section id="postproduccion" className="border-t border-white/10 py-24">
        <div className="container max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <div>
              <Tag className="bg-sky-500/15 text-sky-300 border border-sky-400/20 mb-6">
                Post-produccion
              </Tag>

              <h2 className="text-3xl font-semibold md:text-4xl">
                Post-produccion
              </h2>

              <p className="mt-5 text-lg text-white/55">
                Edicion de material grabado por el cliente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm text-white/40">Precio por video</p>
              <p className="mt-2 text-4xl font-semibold">$400.000</p>

              <div className="mt-5 text-sm text-white/50">
                El alcance se define segun duracion y material.
              </div>

              <a
                href={buildWa("Post-produccion")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3 text-black"
              >
                Escribir por WhatsApp <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-24 text-center">
        <h2 className="text-3xl font-semibold">Consulta</h2>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href={buildWa("Consulta general")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-6 py-3 text-black"
          >
            WhatsApp <ArrowUpRight className="h-4 w-4" />
          </a>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 border border-white/20 px-6 py-3"
          >
            Formulario <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
