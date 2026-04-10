import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { VideoEmbed } from "../components/VideoEmbed";

export const metadata: Metadata = {
  title: "Portafolio - Dekaelo Media | Video corporativo en Chile",
  description: "Trabajos seleccionados de Dekaelo Media. Vodcast corporativo, series institucionales, documentales y video para empresas en Chile.",
  alternates: { canonical: "https://www.dekaelomedia.com/portafolio" },
};

const waLink = "https://wa.me/56920080031?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto%20con%20Dekaelo%20Media.%0A%0AEmpresa%3A%0AQue%20necesito%3A%0AFecha%20tentativa%3A%0A%0AGracias";

const categories = [
  {
    id: "vodcast",
    label: "Vodcast corporativo",
    items: [
      {
        client: "iGromi",
        name: "Industria 4.0 y nuevos negocios — Ep. 8",
        year: "2024",
        tag: "Vodcast - TV abierta",
        note: "",
        stat: "",
        youtube: "https://www.youtube.com/embed/2G7oKXKjPl8?rel=0&modestbranding=1&playsinline=1",
      },
      {
        client: "APCC Chamber",
        name: "Hong Kong y Latinoamerica — Ep. 2",
        year: "2024",
        tag: "Vodcast institucional",
        note: "",
        stat: "",
        youtube: "https://www.youtube.com/embed/byTylGKp-uI?rel=0&modestbranding=1&playsinline=1",
      },
    ],
  },
  {
    id: "serie",
    label: "Serie original",
    items: [
      {
        client: "Futbol y Parrilla",
        name: "Borghi, Paredes y Monje en la parrilla",
        year: "2024",
        tag: "Serie original - 357K vistas",
        note: "",
        stat: "357K vistas",
        youtube: "https://www.youtube.com/embed/PLSfbZU_asQ?rel=0&modestbranding=1&playsinline=1",
      },
    ],
  },
  {
    id: "evento",
    label: "Evento y figuras publicas",
    items: [
      {
        client: "HKLABA",
        name: "Introduccion institucional",
        year: "2018",
        tag: "Evento corporativo",
        note: "Con Charles Kimber (Arauco), Eduardo Frei y Jorge Carey",
        stat: "",
        youtube: "https://www.youtube.com/embed/a1OcIDBTHgw?rel=0&modestbranding=1&playsinline=1",
      },
    ],
  },
  {
    id: "organico",
    label: "Alcance organico",
    items: [
      {
        client: "Oximixo",
        name: "Como instalar un Aire Acondicionado Split Muro",
        year: "2015",
        tag: "Tutorial - 3.8M vistas organicas",
        note: "",
        stat: "3.8M vistas",
        youtube: "https://www.youtube.com/embed/f7BpYpTSPLk?rel=0&modestbranding=1&playsinline=1",
      },
    ],
  },
  {
    id: "institucional",
    label: "Video institucional",
    items: [
      {
        client: "Coesam",
        name: "Video Corporativo Internacional",
        year: "2020",
        tag: "Video corporativo",
        note: "",
        stat: "",
        youtube: "https://www.youtube.com/embed/b_sq_6TiwdE?rel=0&modestbranding=1&playsinline=1",
      },
      {
        client: "Trewhela's School",
        name: "Documental 80 Anos",
        year: "2017",
        tag: "Documental institucional",
        note: "",
        stat: "",
        youtube: "https://www.youtube.com/embed/JKsSN2lo_RU?rel=0&modestbranding=1&playsinline=1",
      },
      {
        client: "U-Payments",
        name: "Manifiesto",
        year: "2019",
        tag: "Video corporativo",
        note: "",
        stat: "",
        youtube: "https://www.youtube.com/embed/BAN7i2d01W8?rel=0&modestbranding=1&playsinline=1",
      },
      {
        client: "Editorial Televisa Chile",
        name: "Spot Revista Caras Aniversario 25 Anos",
        year: "2013",
        tag: "Spot 30''",
        note: "",
        stat: "",
        youtube: "https://www.youtube.com/embed/hs6DLxIJ0jA?rel=0&modestbranding=1&playsinline=1",
      },
      {
        client: "Exploflex",
        name: "Video Corporativo Sustentable",
        year: "2022",
        tag: "Video corporativo",
        note: "",
        stat: "",
        youtube: "https://www.youtube.com/embed/RF8kLsTZgsU?rel=0&modestbranding=1&playsinline=1",
      },
    ],
  },
  {
    id: "cine",
    label: "Cine independiente",
    items: [
      {
        client: "CEB Producciones",
        name: "Yokai — Trailer oficial",
        year: "2014",
        tag: "Seleccion oficial Sitges Film Festival y BARS",
        note: "",
        stat: "",
        youtube: "https://www.youtube.com/embed/1bayIqD5hcs?rel=0&modestbranding=1&playsinline=1",
      },
    ],
  },
];

function Eyebrow(props: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">{props.children}</p>;
}

export default function PortafolioPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      <section className="container max-w-4xl pt-28 pb-16 md:pt-36 md:pb-20">
        <Eyebrow>Portafolio</Eyebrow>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Trabajos seleccionados
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/55 leading-relaxed">
          Una decada de produccion para empresas, instituciones y proyectos originales en Chile.
        </p>
      </section>

      {categories.map((cat) => (
        <section key={cat.id} className="border-t border-white/10 py-20">
          <div className="container max-w-6xl">
            <Eyebrow>{cat.label}</Eyebrow>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {cat.items.map((item) => (
                <article key={item.name}>
                  <div className="relative">
                    <VideoEmbed src={item.youtube} title={item.name} />
                    {item.stat && (
                      <div className="absolute top-3 right-3 rounded-full bg-black/80 border border-white/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                        {item.stat}
                      </div>
                    )}
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs text-white/35">{item.tag}</p>
                      <p className="text-xs text-white/25">{item.year}</p>
                    </div>
                    <h3 className="mt-1.5 text-base font-semibold text-white leading-snug">
                      {item.client} — {item.name}
                    </h3>
                    {item.note && (
                      <p className="mt-1 text-xs text-white/35 italic">{item.note}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-white/10 py-28">
        <div className="container max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            BICE - trabajo continuo desde 2024
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">Consulta</h2>
          <p className="mx-auto mt-5 max-w-xl text-white/50 leading-relaxed">
            Cuentanos que necesitas. Te respondemos con un alcance claro y un precio concreto en menos de 24 horas habiles.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            
              <a
  href={waLink}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-white px-10 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
>
  Escribir por WhatsApp <ArrowUpRight className="h-4 w-4" />
</a>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-10 py-4 text-sm text-white/55 transition hover:bg-white/10 hover:text-white"
            >
              Ver servicios y precios <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/25">Respondemos el mismo dia habil. Sin compromiso.</p>
        </div>
      </section>

    </main>
  );
}
