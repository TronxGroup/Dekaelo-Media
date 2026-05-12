import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { VideoEmbed } from "../components/VideoEmbed";

export const metadata: Metadata = {
  title: "Portafolio - Dekaelo Media",
  description:
    "Series, vodcast, documentales y contenido estratégico para empresas y audiencias.",
};

const waLink =
  "https://wa.me/56920080031?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto%20con%20Dekaelo%20Media";

/* ================= TYPES ================= */

type BaseItem = {
  client: string;
  name: string;
  year: string;
  tag: string;
  description: string;
  bullets: string[];
};

type VideoItem = BaseItem & {
  type: "video";
  youtube: string;
};

type ImageItem = BaseItem & {
  type: "image";
  image: string;
};

type PortfolioItem = VideoItem | ImageItem;

type Category = {
  id: string;
  label: string;
  title: string;
  description: string;
  items: PortfolioItem[];
};

/* ================= DATA ================= */

const categories: Category[] = [
  {
    id: "companies",
    label: "Empresas e instituciones",
    title: "Contenido estratégico para empresas",
    description:
      "Series, vodcast y piezas audiovisuales diseñadas para posicionar organizaciones y líderes.",
    items: [
      {
        client: "BICECORP",
        name: "Nos Une",
        year: "2024 - 2026",
        tag: "Vodcast interno",
        type: "image",
        image: "/Bice_portafolio_2026.jpg",
        description:
          "Conversaciones con quienes toman decisiones dentro del grupo.",
        bullets: [
          "+14 episodios",
          "Serie interna activa",
          "Producción integral por Dekaelo Media",
        ],
      },
      {
        client: "iGromi",
        name: "Breaking Industrial",
        year: "2024 - 2025",
        tag: "Vodcast",
        type: "video",
        youtube: "https://www.youtube.com/embed/2G7oKXKjPl8",
        description:
          "Conversaciones sobre industria, innovación y negocios con quienes están construyendo el futuro.",
        bullets: [
          "+8 episodios",
          "Relación con empresas relevantes de la industria",
          "Producción integral por Dekaelo Media",
        ],
      },
      {
        client: "Asia Pacific Chamber of Commerce (APCC)",
        name: "Creando Líderes para Asia",
        year: "2023 - 2024",
        tag: "Serie internacional",
        type: "video",
        youtube: "https://www.youtube.com/embed/byTylGKp-uI",
        description:
          "Conversaciones que conectan Chile y Asia a través de comercio, innovación y liderazgo.",
        bullets: [
          "+25 episodios producidos",
          "Participación de líderes Chile–Asia",
          "Producción integral por Dekaelo Media",
        ],
      },
      {
        client: "HKLABA",
        name: "Video institucional",
        year: "2023",
        tag: "Institucional",
        type: "video",
        youtube: "https://www.youtube.com/embed/a1OcIDBTHgw",
        description:
          "Contenido institucional orientado a relaciones internacionales y liderazgo empresarial.",
        bullets: [
          "Participación de figuras públicas y empresariales",
          "Producción corporativa",
        ],
      },
      {
        client: "Trewhela’s School",
        name: "80 años",
        year: "2017",
        tag: "Documental institucional",
        type: "video",
        youtube: "https://www.youtube.com/embed/JKsSN2lo_RU",
        description:
          "Historia, identidad y presente en una sola pieza.",
        bullets: [
          "Herramienta de confianza institucional",
          "Proyecto audiovisual de largo plazo",
          "Producción por Dekaelo Media",
        ],
      },
    ],
  },

  {
    id: "originals",
    label: "Series originales",
    title: "Contenido propio y formatos originales",
    description:
      "Proyectos creados desde la identidad editorial de Dekaelo Media y Tronx TV.",
    items: [
      {
        client: "Fútbol y Parrilla",
        name: "Serie original",
        year: "2024",
        tag: "Serie / entretenimiento",
        type: "video",
        youtube: "https://www.youtube.com/embed/PLSfbZU_asQ",
        description:
          "Fútbol, conversación y fuego. Un espacio donde las historias aparecen sin pauta.",
        bullets: [
          "+390K vistas en los primeros episodios",
          "Alcance orgánico real",
          "Formato original producido por Dekaelo Media",
        ],
      },
      {
        client: "Tronx TV",
        name: "Reality Day",
        year: "2026",
        tag: "Serie documental",
        type: "video",
        youtube: "https://www.youtube.com/embed/acC3dyDKqe8",
        description:
          "Un día real de trabajo. Sin guión. Sin intervención.",
        bullets: [
          "Formato observacional",
          "Serie en desarrollo",
        ],
      },
      {
        client: "Proyecto original",
        name: "Domo",
        year: "En desarrollo",
        tag: "Cine",
        type: "image",
        image: "/Domo_portafolio_2026.jpg",
        description:
          "No todos los lugares te dejan ir.",
        bullets: [
          "Proyecto original de Dekaelo Media",
          "Desarrollo cinematográfico",
        ],
      },
    ],
  },

  {
    id: "cinema",
    label: "Documentales y cine",
    title: "Narrativa audiovisual y proyectos de largo formato",
    description:
      "Historias desarrolladas desde una mirada cinematográfica.",
    items: [
      {
        client: "Pepper & Dreams SpA",
        name: "Yokai",
        year: "2013",
        tag: "Largometraje",
        type: "video",
        youtube: "https://www.youtube.com/embed/1bayIqD5hcs",
        description:
          "Una película que recorrió festivales internacionales.",
        bullets: [
          "Edición y postproducción por Dekaelo Media",
          "Selección en festivales como Sitges y Buenos Aires Rojo Sangre",
          "Disponible en Amazon Prime",
        ],
      },
      {
        client: "Oximixo",
        name: "Contenido evergreen",
        year: "2014",
        tag: "Tutorial",
        type: "video",
        youtube: "https://www.youtube.com/embed/f7BpYpTSPLk",
        description:
          "Un video útil que sigue funcionando más de 10 años después.",
        bullets: [
          "+3.8M vistas",
          "Contenido evergreen",
        ],
      },
    ],
  },
];

/* ================= UI ================= */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.2em] text-white/35">
      {children}
    </p>
  );
}

/* ================= PAGE ================= */

export default function Page() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      {/* HERO */}
      <section className="container max-w-5xl pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/45">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Dekaelo Media — Media Company
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Series, vodcast y contenido
          <span className="text-white/35">
            {" "}que conecta empresas y audiencias.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
          Creamos formatos originales, contenido corporativo y proyectos audiovisuales con enfoque cinematográfico.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Hablemos de tu proyecto
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 px-8 py-4 text-sm text-white/65 transition hover:bg-white/10 hover:text-white"
          >
            Volver al inicio
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      {categories.map((cat) => (
        <section key={cat.id} className="border-t border-white/10 py-24">
          <div className="container max-w-6xl">

            <div className="mb-16 max-w-3xl">
              <Eyebrow>{cat.label}</Eyebrow>

              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                {cat.title}
              </h2>

              <p className="mt-5 text-white/55 leading-relaxed">
                {cat.description}
              </p>
            </div>

            <div className="space-y-28">
              {cat.items.map((item, i) => {
                const reverse = i % 2 === 1;

                return (
                  <article
                    key={item.name}
                    className="grid items-center gap-12 md:grid-cols-2"
                  >

                    {/* MEDIA */}
                    <div className={reverse ? "md:order-2" : ""}>
                      {item.type === "video" ? (
                        <VideoEmbed src={item.youtube} title={item.name} />
                      ) : (
                        <div className="relative aspect-video overflow-hidden rounded-2xl bg-white/5">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>

                    {/* TEXT */}
                    <div>
                      <p className="text-xs uppercase tracking-wide text-white/35">
                        {item.tag} — {item.year}
                      </p>

                      <h3 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                        {item.client}
                        <span className="text-white/35">
                          {" "}— {item.name}
                        </span>
                      </h3>

                      <p className="mt-5 text-base leading-relaxed text-white/60">
                        {item.description}
                      </p>

                      <ul className="mt-6 space-y-2">
                        {item.bullets.map((b, idx) => (
                          <li
                            key={idx}
                            className="text-sm leading-relaxed text-white/40"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="border-t border-white/10 py-32">
        <div className="container max-w-4xl text-center">

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            BICE — APCC — iGromi — Tronx TV — Yokai
          </div>

          <h2 className="text-4xl font-semibold md:text-5xl">
            Hablemos de tu proyecto
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/55 leading-relaxed">
            Series corporativas, formatos originales, vodcast y contenido audiovisual desarrollado desde una mirada estratégica y cinematográfica.
          </p>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-white px-10 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Escribir por WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
