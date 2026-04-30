import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { VideoEmbed } from "../components/VideoEmbed";

/* =========================
   META
========================= */
export const metadata: Metadata = {
  title: "Portafolio - Dekaelo Media | Video corporativo en Chile",
  description:
    "Trabajos seleccionados de Dekaelo Media. Vodcast corporativo, documentales y contenido estratégico.",
  alternates: { canonical: "https://www.dekaelomedia.com/portafolio" },
};

const waLink =
  "https://wa.me/56920080031?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto%20con%20Dekaelo%20Media.%0A%0AEmpresa%3A%0AQue%20necesito%3A%0AFecha%20tentativa%3A%0A%0AGracias";

/* =========================
   TYPES (evita error TS)
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
    id: "vodcast",
    label: "Vodcast y series",
    items: [
      {
        client: "BiceCorp",
        name: "Nos Une",
        year: "2024 - 2026 ",
        tag: "Vodcast interno",
        type: "image",
        image: "/images/bice.jpg",
        description:
          "Conversaciones con quienes toman decisiones dentro del banco. Un espacio para alinear visión, experiencia y cultura desde adentro.",
        bullets: [
          "+14 episodios realizados",
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
        youtube:
          "https://www.youtube.com/embed/2G7oKXKjPl8?rel=0&modestbranding=1&playsinline=1",
        description:
          "Conversaciones sobre industria, tecnología y negocio con quienes están construyendo el futuro en la práctica.",
        bullets: [
          "+8 episodios producidos",
          "+20 líderes entrevistados",
          "+6K visualizaciones acumuladas",
          "Producido por Dekaelo Media",
        ],
      },
      {
        client: "Asia Pacific Chamber of Commerce APCC",
        name: "Creando Líderes para Asia",
        year: "2023 - 2024",
        tag: "Serie",
        type: "video",
        youtube:
          "https://www.youtube.com/embed/byTylGKp-uI?rel=0&modestbranding=1&playsinline=1",
        description:
          "Un puente entre Chile y Asia a través de conversaciones sobre comercio, cultura e innovación.",
        bullets: [
          "+25 episodios",
          "Líderes de Chile y Asia",
          "Producido por Dekaelo Media",
        ],
      },
      {
        client: "Fútbol y Parrilla",
        name: "Serie original",
        year: "2024",
        tag: "Serie",
        type: "video",
        youtube:
          "https://www.youtube.com/embed/PLSfbZU_asQ?rel=0&modestbranding=1&playsinline=1",
        description:
          "Fútbol, conversación y fuego. Un espacio donde las historias aparecen sin pauta.",
        bullets: [
          "+390K vistas en los primeros 4 episodios",
          "Producido por Dekaelo Media",
        ],
      },
    ],
  },
  {
    id: "documental",
    label: "Documentales y contenido",
    items: [
      {
        client: "Tronx TV",
        name: "Reality Day",
        year: "2026",
        tag: "Serie documental",
        type: "video",
        youtube:
          "https://www.youtube.com/embed/acC3dyDKqe8?rel=0&modestbranding=1&playsinline=1",
        description:
          "Un día real de trabajo. Sin guión, sin intervención.",
        bullets: [
          "Episodio 1 disponible",
          "Temporada en desarrollo",
          "Producido por Dekaelo Media",
        ],
      },
      {
        client: "Trewhela’s School",
        name: "80 años",
        year: "2017",
        tag: "Documental institucional",
        type: "video",
        youtube:
          "https://www.youtube.com/embed/JKsSN2lo_RU?rel=0&modestbranding=1&playsinline=1",
        description:
          "Un registro que no existía. Historia, identidad y presente en una sola pieza.",
        bullets: [
          "Herramienta clave para nuevos apoderados",
          "El colegio fue vendido posteriormente",
          "Producido por Dekaelo Media",
        ],
      },
      {
        client: "Oximixo",
        name: "Contenido evergreen",
        year: "2014",
        tag: "Tutorial",
        type: "video",
        youtube:
          "https://www.youtube.com/embed/f7BpYpTSPLk?rel=0&modestbranding=1&playsinline=1",
        description:
          "Un video útil. Sin campaña. Sin pauta. Sigue trabajando solo.",
        bullets: [
          "+3.8 millones de visualizaciones",
          "Sigue generando comentarios hoy",
          "Producido por Dekaelo Media",
        ],
      },
    ],
  },
  {
    id: "cine",
    label: "Cine y proyectos originales",
    items: [
      {
        client: "Pepper & Dreams SpA",
        name: "Yokai",
        year: "2014",
        tag: "Largometraje",
        type: "video",
        youtube:
          "https://www.youtube.com/embed/1bayIqD5hcs?rel=0&modestbranding=1&playsinline=1",
        description:
          "Una película que recorrió festivales internacionales. Actualmente en Amazon Prime.",
        bullets: ["Edición y postproducción por Dekaelo Media"],
      },
      {
        client: "Proyecto original",
        name: "Domo",
        year: "En desarrollo",
        tag: "Cine",
        type: "image",
        image: "/images/domo.jpg",
        description: "No todos los lugares te dejan ir.",
        bullets: ["Proyecto original de Dekaelo Media"],
      },
    ],
  },
];

/* =========================
   UI HELPERS
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
      <section className="container max-w-4xl pt-28 pb-16 md:pt-36 md:pb-20">
        <Eyebrow>Portafolio</Eyebrow>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Trabajos seleccionados
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/55 leading-relaxed">
          Contenido que no solo se ve. Se usa, se comparte y mueve decisiones.
        </p>
      </section>

      {/* SECCIONES */}
      {categories.map((cat) => (
        <section key={cat.id} className="border-t border-white/10 py-20">
          <div className="container max-w-6xl">
            <Eyebrow>{cat.label}</Eyebrow>

            <div className="mt-12 space-y-20">
              {cat.items.map((item, i) => {
                const isReverse = i % 2 === 1;

                return (
                  <article
                    key={item.name}
                    className="grid gap-10 md:grid-cols-2 items-center"
                  >
                    {/* MEDIA */}
                    <div
                      className={`relative aspect-video bg-black overflow-hidden ${
                        isReverse ? "md:order-2" : ""
                      }`}
                    >
                      {item.type === "video" ? (
                        <VideoEmbed
                          src={item.youtube}
                          title={`${item.client} — ${item.name}`}
                        />
                      ) : (
                        <>
                          <img
                            src={item.image}
                            alt={`${item.client} — ${item.name}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                            <span className="text-xs text-white/60">
                              {item.name === "Nos Une"
                                ? "Contenido interno"
                                : "Proyecto en desarrollo"}
                            </span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* TEXTO */}
                    <div>
                      <div className="flex items-center justify-between text-xs text-white/30">
                        <span>{item.tag}</span>
                        <span>{item.year}</span>
                      </div>

                      <h3 className="mt-2 text-xl font-semibold">
                        {item.client} — {item.name}
                      </h3>

                      <p className="mt-4 text-white/60 leading-relaxed">
                        {item.description}
                      </p>

                      <ul className="mt-4 space-y-1">
                        {item.bullets.map((b, idx) => (
                          <li key={idx} className="text-sm text-white/40">
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
      <section className="border-t border-white/10 py-28">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Hablemos de tu proyecto
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/50">
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
              Escribir por WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>

            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-10 py-4 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              Ver servicios <ArrowUpRight className="h-4 w-4" />
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
