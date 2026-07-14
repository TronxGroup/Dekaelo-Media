import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { VideoEmbed } from "../components/VideoEmbed";

export const metadata: Metadata = {
  title: "Portafolio - Dekaelo Media",
  description:
    "Contenido audiovisual para empresas, instituciones y proyectos originales.",
  alternates: {
    canonical: "https://www.dekaelo.com/portafolio",
  },
};

const waLink =
  "https://wa.me/56920080031?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20audiovisual%20con%20Dekaelo%20Media";

/* =========================
TYPES
========================= */

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
  items: PortfolioItem[];
};

/* =========================
DATA
========================= */

const categories: Category[] = [
  {
    id: "selected",
    label: "Casos seleccionados",
    items: [
      {
        client: "BICECORP",
        name: "Nos Une",
        year: "2024 - 2026",
        tag: "Vodcast interno",
        type: "image",
        image: "/Bice_portafolio_2026.jpg",
        description:
          "Conversaciones con quienes toman decisiones dentro del grupo BiceCorp.",
        bullets: [
          "+14 episodios",
          "Serie interna activa",
          "Producido por Dekaelo Media",
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
          "Conversaciones sobre industria, tecnología y negocio con quienes están construyendo el futuro.",
        bullets: [
          "+6K visualizaciones acumuladas",
          "Generó contacto comercial con empresas relevantes",
          "Producido por Dekaelo Media",
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
          "Relación directa con líderes Chile–Asia",
          "Producido por Dekaelo Media",
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
          "Un registro que no existía. Historia, identidad y presente en una sola pieza.",
        bullets: [
          "Herramienta para generar confianza en nuevos apoderados",
          "Proyecto institucional clave",
          "Producido por Dekaelo Media",
        ],
      },

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
          "+390K vistas en los primeros 4 episodios",
          "Alcance orgánico real",
          "Producido por Dekaelo Media",
        ],
      },

      {
  client: "Tronx Media",
  name: "Reality Day",
  year: "2026",
  tag: "Serie documental",
  type: "video",
  youtube: "https://www.youtube.com/embed/_xtAoqqaaEQ",
  description:
    "Un día real de trabajo. Sin guión. Sin intervención.",
  bullets: [
    "T1 E2 — No era solo mantención",
    "Reality Day — Temporada 1",
    "Producido por Dekaelo Media",
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
          "+3.8 millones de visualizaciones",
          "Sigue generando comentarios hoy",
          "Producido por Dekaelo Media",
        ],
      },

      {
        client: "Pepper & Dreams SpA",
        name: "Yokai",
        year: "2014",
        tag: "Largometraje",
        type: "video",
        youtube: "https://www.youtube.com/embed/1bayIqD5hcs",
        description:
          "Selección en festivales internacionales como Sitges y Buenos Aires Rojo Sangre. Disponible en Amazon Prime.",
        bullets: [
          "Edición y postproducción por Dekaelo Media",
        ],
      },

      {
        client: "Proyecto original",
        name: "Donde Nos Conocimos",
        year: "En desarrollo",
        tag: "Cine",
        type: "image",
        image: "/Domo_portafolio_2026.jpg",
        description:
          "No todos los lugares te dejan ir.",
        bullets: [
          "Proyecto original de Dekaelo Media",
        ],
      },
    ],
  },
];

/* =========================
OTROS PROYECTOS
========================= */

const otherProjects = [
  {
    client: "Televisa Chile",
    name: "Revista Caras 25 años",
    youtube: "https://www.youtube.com/embed/hs6DLxIJ0jA",
  },
  {
    client: "Inchalam",
    name: "Video corporativo",
    youtube: "https://www.youtube.com/embed/FnHKIkDaHb4",
  },
  {
    client: "KGHM Chile / TAPP / Inducom",
    name: "Motion graphics reel",
    youtube: "https://www.youtube.com/embed/ilvi2u_c_a0",
  },
  {
    client: "Coesam",
    name: "Video internacional",
    youtube: "https://www.youtube.com/embed/b_sq_6TiwdE",
  },
  {
    client: "Exploflex",
    name: "Video corporativo sustentable",
    youtube: "https://www.youtube.com/embed/RF8kLsTZgsU",
  },
  {
    client: "HKLABA",
    name: "Video testimonial institucional",
    youtube: "https://www.youtube.com/embed/a1OcIDBTHgw",
  },
];

/* =========================
UI
========================= */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
      {children}
    </p>
  );
}

/* =========================
PAGE
========================= */

export default function PortafolioPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      {/* HERO */}
      <section className="container max-w-4xl pt-28 pb-20 md:pt-36">
        <Eyebrow>Portafolio</Eyebrow>

        <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Contenido que mueve decisiones
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/55 leading-relaxed">
          Vodcast, documentales, contenido corporativo y proyectos originales
          desarrollados por Dekaelo Media.
        </p>
      </section>

      {/* CASES */}
      {categories.map((category) => (
        <section
          key={category.id}
          className="border-t border-white/10 py-20"
        >
          <div className="container max-w-6xl">
            <Eyebrow>{category.label}</Eyebrow>

            <div className="mt-14 space-y-24">
              {category.items.map((item, i) => {
                const reverse = i % 2 === 1;

                return (
                  <article
                    key={item.name}
                    className="grid items-center gap-10 md:grid-cols-2"
                  >
                    {/* MEDIA */}
                    <div className={reverse ? "md:order-2" : ""}>
                      {item.type === "video" ? (
                        <div className="overflow-hidden bg-black">
                          <VideoEmbed
                            src={item.youtube}
                            title={item.name}
                          />
                        </div>
                      ) : (
                        <div className="overflow-hidden bg-black">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="aspect-video w-full object-cover"
                          />
                        </div>
                      )}
                    </div>

                    {/* TEXT */}
                    <div>
                      <div className="flex items-center justify-between text-xs text-white/30">
                        <span>{item.tag}</span>
                        <span>{item.year}</span>
                      </div>

                      <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                        {item.client} — {item.name}
                      </h2>

                      <p className="mt-5 text-white/60 leading-relaxed">
                        {item.description}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {item.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-white/40"
                          >
                            {bullet}
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

      {/* OTHER PROJECTS */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-6xl">
          <Eyebrow>Otros proyectos</Eyebrow>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {otherProjects.map((project, idx) => (
              <div key={idx}>
                <div className="overflow-hidden bg-black">
                  <VideoEmbed
                    src={project.youtube}
                    title={project.name}
                  />
                </div>

                <div className="mt-3">
                  <p className="text-sm text-white/35">
                    {project.client}
                  </p>

                  <h3 className="mt-1 text-base font-medium text-white/85">
                    {project.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-28">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Hablemos de tu proyecto
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/50">
            Cuéntanos qué necesitas. Respondemos con una propuesta clara y un
            alcance real.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white px-10 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Escribir por WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-10 py-4 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              Ver servicios
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
