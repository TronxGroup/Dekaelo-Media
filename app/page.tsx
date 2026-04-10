import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { VideoEmbed } from "./components/VideoEmbed";
import { ClientLogos } from "./components/ClientLogos";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const waLink =
  "https://wa.me/56920080031?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto.%0A%0AEmpresa%3A%0ARequerimiento%3A%0AFecha%3A%0A";

export const metadata: Metadata = {
  title: "Dekaelo Media - Video corporativo en Chile",
  description:
    "Produccion de video corporativo y vodcast para empresas en Chile.",
};

const services = [
  {
    name: "Produccion completa",
    desc: "Produccion de vodcast y series corporativas.",
    detail: "Diseno de formato, grabacion y postproduccion.",
    price: "Desde $1.200.000",
    note: "+ IVA",
    href: "/servicios#produccion",
  },
  {
    name: "Postproduccion",
    desc: "Edicion de material grabado por el cliente.",
    detail: "Correccion de audio, color y entrega final.",
    price: "$400.000 - $650.000",
    note: "+ IVA",
    href: "/servicios#postproduccion",
  },
];

const stats = [
  { value: "150+", label: "videos producidos para empresas" },
  { value: "3.8M", label: "visualizaciones en un video" },
  { value: "357K+", label: "visualizaciones en serie" },
  { value: "60+", label: "episodios vodcast" },
];

const biceImages = [
  { src: "/bice/bice-1.jpg", alt: "BICE vodcast" },
  { src: "/bice/bice-2.jpg", alt: "BICE grabacion" },
  { src: "/bice/bice-3.jpg", alt: "BICE produccion" },
];

const cases = [
  {
    name: "iGromi - Industria 4.0 Ep. 8",
    desc: "Serie distribuida en TV abierta.",
    youtube:
      "https://www.youtube.com/embed/2G7oKXKjPl8?rel=0&modestbranding=1",
  },
  {
    name: "HKLABA - Introduccion institucional",
    desc: "Registro de evento corporativo.",
    youtube:
      "https://www.youtube.com/embed/a1OcIDBTHgw?rel=0&modestbranding=1",
  },
  {
    name: "Futbol y Parrilla",
    desc: "Serie original.",
    youtube:
      "https://www.youtube.com/embed/PLSfbZU_asQ?rel=0&modestbranding=1",
  },
  {
    name: "APCC Chamber",
    desc: "Serie institucional.",
    youtube:
      "https://www.youtube.com/embed/byTylGKp-uI?rel=0&modestbranding=1",
  },
];

function Eyebrow(props: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
      {props.children}
    </p>
  );
}

export default function Page() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="container max-w-5xl pt-28 pb-20">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Produccion de vodcast y video corporativo para empresas en Chile.
        </h1>

        <p className="mt-6 text-sm text-white/40">
          Mas de una decada produciendo contenido para empresas.
        </p>

        <p className="mt-8 max-w-2xl text-lg text-white/60">
          Procesos claros, tiempos definidos y entrega lista para publicar.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 text-sm"
          >
            Escribenos por WhatsApp
          </a>

          <Link
            href="/portafolio"
            className="border border-white/20 px-6 py-3 text-sm text-white/60"
          >
            Ver trabajos
          </Link>
        </div>
      </section>

      {/* REEL */}
      <section className="container max-w-5xl pb-24">
        <Eyebrow>Reel</Eyebrow>
        <div className="mt-6">
          <VideoEmbed
            src="https://www.youtube.com/embed/uul8LNP6BbQ"
            title="Reel"
          />
        </div>
      </section>

      {/* CLIENTES */}
      <section className="border-t border-white/10 py-16">
        <div className="container">
          <p className="text-center text-xs text-white/30 mb-10">
            Empresas e instituciones con las que hemos trabajado
          </p>
          <ClientLogos />
        </div>
      </section>

      {/* STATS */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-semibold">{s.value}</p>
              <p className="text-sm text-white/40">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BICE */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Algunos proyectos en curso</Eyebrow>

          <h2 className="mt-3 text-3xl font-semibold">BICE</h2>

          <p className="mt-3 text-white/50">
            Produccion continua desde 2024. Serie institucional.
          </p>

          <div className="grid grid-cols-3 gap-3 mt-10">
            {biceImages.map((img, i) => (
              <div key={i} className="relative aspect-video">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Servicios</Eyebrow>

          <h2 className="mt-3 text-3xl font-semibold">Servicios</h2>

          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {services.map((s) => (
              <Link key={s.name} href={s.href} className="block">
                <h3 className="text-xl">{s.name}</h3>
                <p className="text-white/50 mt-2">{s.desc}</p>
                <p className="text-white/40 text-sm mt-2">{s.detail}</p>
                <p className="mt-4">{s.price}</p>
                <p className="text-xs text-white/40">{s.note}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 px-6 py-3 text-sm"
            >
              Escribenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* TRABAJOS */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-6xl">
          <Eyebrow>Proyectos</Eyebrow>

          <h2 className="mt-3 text-3xl font-semibold">
            Algunos proyectos en curso y realizados
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {cases.map((c) => (
              <div key={c.name}>
                <VideoEmbed src={c.youtube} title={c.name} />
                <h3 className="mt-4">{c.name}</h3>
                <p className="text-white/50 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-white/10 py-24 text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-semibold">Contacto</h2>

          <p className="mt-4 text-white/50">
            Cuentanos brevemente el proyecto.
            Recibes alcance, tiempos y presupuesto por escrito.
          </p>

          <div className="mt-8">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 text-sm"
            >
              Escribenos por WhatsApp
            </a>
          </div>

          <p className="mt-4 text-xs text-white/30">
            Respuesta el mismo dia habil.
          </p>
        </div>
      </section>

    </main>
  );
}
