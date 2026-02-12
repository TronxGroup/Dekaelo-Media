import Image from "next/image";
import Link from "next/link";
import { VideoEmbed } from "../components/VideoEmbed";

export const metadata = {
  title: "Portafolio — Dekaelo Media",
  description:
    "Vodcast corporativo, contenido institucional y series editoriales. Más de 58 episodios producidos para banca, gremios, salud y tecnología.",
};

/* ---------------------------------- utils --------------------------------- */

const toEmbed = (url: string) => {
  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /shorts\/([a-zA-Z0-9_-]{11})/,
    /embed\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const p of patterns) {
    const m = url.match(p);
    if (m?.[1]) return `https://www.youtube.com/embed/${m[1]}?rel=0&modestbranding=1&playsinline=1`;
  }

  return url;
};

type Project = {
  title: string;
  youtube: string;
  logo: string;
  desc: string;
  tag: string;
};

/* ------------------------------ CASOS CLAVE ------------------------------ */
/* SOLO 3–4 que te posicionan fuerte */

const featured: Project[] = [
  {
    title: "Banco nacional — Serie institucional (contenido interno)",
    youtube: toEmbed("https://www.youtube.com/watch?v=lyt5wWzPCg8"),
    logo: "/logo_2.png",
    tag: "Vodcast",
    desc:
      "Serie continua de vodcast corporativo para liderazgo y cultura organizacional. Producción multicámara, dirección editorial y operación completa.",
  },
  {
    title: "APCC — Ciclo de entrevistas",
    youtube: toEmbed("https://www.youtube.com/watch?v=byTylGKp-uI"),
    logo: "/logo_9.png",
    tag: "Vodcast",
    desc:
      "Más de 20 episodios consecutivos para LinkedIn y YouTube. Formato estable y sostenible para comunicación institucional.",
  },
  {
    title: "Reality Day — Tronx TV",
    youtube: toEmbed("https://youtu.be/4xe4CtPW4lI?si=7kAElTNXlME8AYnb"),
    logo: "/logo_cine.png",
    tag: "Serie",
    desc:
      "Serie documental original. Narrativa observacional y estándar cinematográfico aplicado a historias reales de trabajo.",
  },
];

/* ------------------------------ GRID GENERAL ------------------------------ */

const projects: Project[] = [
  {
    title: "Fútbol y Parrilla",
    youtube: toEmbed("https://www.youtube.com/watch?v=PLSfbZU_asQ"),
    logo: "/logo_11.png",
    tag: "Vodcast",
    desc: "+300.000 vistas acumuladas. Conversación multicámara con invitados profesionales.",
  },
  {
    title: "Exploflex — Corporativo",
    youtube: toEmbed("https://www.youtube.com/watch?v=RF8kLsTZgsU"),
    logo: "/logo_7.png",
    tag: "Corporativo",
    desc: "Video institucional industrial con entregas para web y presentaciones.",
  },
  {
    title: "U-Payments — Corporate",
    youtube: toEmbed("https://www.youtube.com/watch?v=BAN7i2d01W8"),
    logo: "/logo_6.png",
    tag: "Corporativo",
    desc: "Pieza orientada a confianza y posicionamiento internacional.",
  },
  {
    title: "Motion Graphics",
    youtube: toEmbed("https://www.youtube.com/watch?v=ilvi2u_c_a0"),
    logo: "/logo_motion.png",
    tag: "Motion",
    desc: "Lower thirds, gráficos animados y sistemas visuales de marca.",
  },
];

/* -------------------------------------------------------------------------- */

export default function Page() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="container max-w-4xl py-28">
        <h1 className="text-4xl md:text-5xl font-semibold">Portafolio</h1>

        <p className="mt-6 text-white/65 leading-relaxed">
          Desde 2023 hemos producido más de <strong>58 episodios</strong> de vodcast y
          contenido institucional para banca, gremios empresariales, salud y tecnología.
          <br />
          Trabajamos principalmente en formatos de <strong>serie y continuidad</strong>,
          no piezas aisladas.
        </p>
      </section>


      {/* EXPERIENCIA NUMÉRICA */}
      <section className="container border-t border-white/10 py-20">
        <div className="grid md:grid-cols-3 gap-14 text-center">

          <div>
            <div className="text-5xl font-semibold">58+</div>
            <p className="text-white/50 text-sm mt-3">episodios producidos</p>
          </div>

          <div>
            <div className="text-5xl font-semibold">6</div>
            <p className="text-white/50 text-sm mt-3">industrias distintas</p>
          </div>

          <div>
            <div className="text-5xl font-semibold">3+</div>
            <p className="text-white/50 text-sm mt-3">años de series continuas</p>
          </div>

        </div>
      </section>


      {/* CASOS DESTACADOS */}
      <section className="container border-t border-white/10 py-28">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Casos destacados
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {featured.map((p) => (
            <article key={p.title}>
              <VideoEmbed src={p.youtube} title={p.title} />

              <div className="mt-4 flex items-center gap-3">
                <Image src={p.logo} alt="" width={90} height={28} className="opacity-80" />
                <span className="text-xs text-white/50">{p.tag}</span>
              </div>

              <h3 className="mt-3 text-white font-medium">{p.title}</h3>
              <p className="text-white/60 text-sm mt-2">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>


      {/* GRID COMPLETO */}
      <section className="container border-t border-white/10 py-28">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-16">
          Otros proyectos
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p) => (
            <article key={p.title}>
              <VideoEmbed src={p.youtube} title={p.title} />

              <h3 className="mt-3 text-white font-medium">{p.title}</h3>
              <p className="text-white/60 text-sm mt-2">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>


      {/* CTA FINAL */}
      <section className="container border-t border-white/10 py-28 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          ¿Necesitas producir una serie o vodcast similar?
        </h2>

        <Link
          href="/contacto"
          className="border border-white/30 px-8 py-3 text-sm hover:bg-white hover:text-black transition"
        >
          Conversar proyecto
        </Link>
      </section>

    </main>
  );
}
