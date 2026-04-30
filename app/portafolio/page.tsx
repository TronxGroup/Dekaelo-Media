import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { VideoEmbed } from "../components/VideoEmbed";

export const metadata: Metadata = {
  title: "Portafolio - Dekaelo Media",
  description:
    "Contenido audiovisual que conecta, posiciona y genera impacto real.",
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
  items: PortfolioItem[];
};

/* ================= DATA PRINCIPAL ================= */

const categories: Category[] = [
  {
    id: "main",
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
          "Conversaciones con quienes toman decisiones dentro del grupo.",
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
          "Conversaciones sobre industria y negocio con quienes están construyendo el futuro.",
        bullets: [
          "+8 episodios",
          "Contacto comercial con empresas relevantes",
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
    "Proyecto institucional clave que acompañó un proceso de transformación",
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
        client: "Tronx TV",
        name: "Reality Day",
        year: "2026",
        tag: "Serie documental",
        type: "video",
        youtube: "https://www.youtube.com/embed/acC3dyDKqe8",
        description:
          "Un día real de trabajo. Sin guión. Sin intervención.",
        bullets: ["Temporada en desarrollo"],
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
        bullets: ["+3.8M vistas", "Sigue generando comentarios hoy"],
      },
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
    "Selección en festivales como Sitges y Buenos Aires Rojo Sangre. Disponible en Amazon Prime.",
  ],
},
      {
        client: "Proyecto original",
        name: "Domo",
        year: "En desarrollo",
        tag: "Cine",
        type: "image",
        image: "/Domo_portafolio_2026.jpg",
        description: "No todos los lugares te dejan ir.",
        bullets: ["Proyecto original de Dekaelo Media"],
      },
    ],
  },
];

/* ================= OTROS PROYECTOS ================= */

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
    client: "KGHM / TAPP / Inducom",
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
    name: "Video sustentable",
    youtube: "https://www.youtube.com/embed/RF8kLsTZgsU",
  },
  {
    client: "HKLABA",
    name: "Video institucional",
    youtube: "https://www.youtube.com/embed/a1OcIDBTHgw",
  },
];

/* ================= UI ================= */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
      {children}
    </p>
  );
}

/* ================= PAGE ================= */

export default function Page() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="container max-w-4xl pt-32 pb-20">
        <Eyebrow>Portafolio</Eyebrow>
        <h1 className="mt-4 text-5xl font-semibold">
          Contenido que mueve decisiones
        </h1>
        <p className="mt-6 text-white/60">
          Vodcast, documentales y contenido estratégico para empresas.
        </p>
      </section>

      {/* CASOS PRINCIPALES */}
      {categories.map((cat) => (
        <section key={cat.id} className="border-t border-white/10 py-20">
          <div className="container max-w-6xl">
            <Eyebrow>{cat.label}</Eyebrow>

            <div className="mt-16 space-y-24">
              {cat.items.map((item, i) => {
                const reverse = i % 2 === 1;

                return (
                  <div
                    key={item.name}
                    className="grid md:grid-cols-2 gap-10 items-center"
                  >
                    {/* MEDIA */}
                    <div className={reverse ? "md:order-2" : ""}>
                      {item.type === "video" ? (
                        <VideoEmbed src={item.youtube} title={item.name} />
                      ) : (
                        <img
                          src={item.image}
                          className="w-full aspect-video object-cover"
                        />
                      )}
                    </div>

                    {/* TEXTO */}
                    <div>
                      <p className="text-xs text-white/40">
                        {item.tag} — {item.year}
                      </p>

                      <h3 className="text-2xl mt-2 font-semibold">
                        {item.client} — {item.name}
                      </h3>

                      <p className="mt-4 text-white/60">
                        {item.description}
                      </p>

                      <ul className="mt-4 text-white/40 text-sm space-y-1">
                        {item.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* OTROS PROYECTOS */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-6xl">
          <Eyebrow>Otros proyectos</Eyebrow>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {otherProjects.map((item, i) => (
              <div key={i}>
                <VideoEmbed src={item.youtube} title={item.name} />
                <p className="mt-2 text-sm text-white/50">
                  {item.client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-28 text-center">
        <h2 className="text-3xl font-semibold">
          Hablemos de tu proyecto
        </h2>

        <a
          href={waLink}
          target="_blank"
          className="inline-block mt-8 bg-white text-black px-10 py-4"
        >
          Escribir por WhatsApp
        </a>
      </section>
    </main>
  );
}
