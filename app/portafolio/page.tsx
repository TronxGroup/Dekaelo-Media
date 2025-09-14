import Image from 'next/image';
import { VideoEmbed } from '../components/VideoEmbed';

export const metadata = {
  title: 'Portafolio | Dekaelo Media',
  description: 'Selección de trabajos y proyectos.',
};

type Project = {
  title: string;
  youtube: string; // URL embebida de YouTube (formato /embed/)
  logo: string;    // ruta en /public (cámbialo por tu logo real)
  year: string;
  desc: string;
  link?: string;   // link público de YouTube (opcional)
};

const projects: Project[] = [
  {
    title: 'Innova Talks — Banco BICE',
    youtube: 'https://www.youtube.com/embed/lyt5wWzPCg8?rel=0', // REEMPLAZAR
    logo: '/logo_2.png', // REEMPLAZAR (ej: /bice.png)
    year: '2025',
    desc: 'Podcast en video con entrevistas a colaboradores clave del banco. Concepto, dirección y producción técnica para un formato corporativo cercano y de alto estándar.',
    link: 'https://www.youtube.com/watch?v=uul8LNP6BbQ',
  },
  {
    title: 'Break Industrial — IGROMI (CORFO)',
    youtube: 'https://www.youtube.com/embed/uul8LNP6BbQ?rel=0', // REEMPLAZAR
    logo: '/logo_1.png', // REEMPLAZAR (ej: /igromi.png)
    year: '2024',
    desc: 'Podcast de video financiado por CORFO y auspiciado por U. Andrés Bello y Coderhouse. Conversaciones con referentes de tecnología/industria en Chile. Producción integral y delivery multiplataforma.',
    link: 'https://www.youtube.com/watch?v=uul8LNP6BbQ',
  },
  {
    title: 'Fútbol y Parrilla — Independiente',
    youtube: 'https://www.youtube.com/embed/uul8LNP6BbQ?rel=0', // REEMPLAZAR
    logo: '/logo_3.png', // REEMPLAZAR
    year: '2024',
    desc: 'Producción de los 4 primeros episodios de este formato editorial. +300.000 vistas acumuladas en YouTube. Diseño de dinámica, registro multicámara y edición ágil.',
    link: 'https://www.youtube.com/watch?v=uul8LNP6BbQ',
  },
  {
    title: "Documental 80 Años — Trewhela's School",
    youtube: 'https://www.youtube.com/embed/uul8LNP6BbQ?rel=0', // REEMPLAZAR
    logo: '/logo_5.png', // REEMPLAZAR (ej: /trewhela.png)
    year: '2023',
    desc: 'Documental institucional que recorre origen, presente y futuro del colegio. Pieza principal + cortes breves para marketing y RRSS.',
    link: 'https://www.youtube.com/watch?v=uul8LNP6BbQ',
  },
  {
    title: 'Tutorial — Better Life (A/C)',
    youtube: 'https://www.youtube.com/embed/uul8LNP6BbQ?rel=0', // REEMPLAZAR
    logo: '/logo_4.png', // REEMPLAZAR
    year: '2015',
    desc: 'Tutorial de instalación de aire acondicionado que sigue vigente en YouTube. +3.000.000 de vistas y comentarios orgánicos hasta hoy.',
    link: 'https://www.youtube.com/watch?v=uul8LNP6BbQ',
  },
  {
    title: 'Creando Líderes para Asia — APCC',
    youtube: 'https://www.youtube.com/embed/uul8LNP6BbQ?rel=0', // REEMPLAZAR
    logo: '/logo_6.png', // REEMPLAZAR (ej: /apcc.png)
    year: '2023–2025',
    desc: 'Podcast de video de la Cámara de Comercio Asia Pacífico. 20+ episodios con empresarios y referentes, pensados para YouTube, LinkedIn y clipping corto.',
    link: 'https://www.youtube.com/watch?v=uul8LNP6BbQ',
  },
  {
    title: 'Cine y Series — Yokai / La Horrible / Danny Wang',
    youtube: 'https://www.youtube.com/embed/uul8LNP6BbQ?rel=0', // REEMPLAZAR (trailer)
    logo: '/logo_cine.png', // SUBE un logo genérico de cine, ej: /logo_cine.png
    year: '2014–2022',
    desc: 'Largometraje “Yokai” (Selección Oficial Sitges y BARS). Serie “La Horrible” (con Sigrid Alegría y Liliana Ross QEPD). Proyecto premiado en Corea: “Danny Wang”.',
    link: 'https://www.youtube.com/watch?v=uul8LNP6BbQ',
  },
  {
    title: 'Motion Graphics — KGHM, Inducom, TAPP',
    youtube: 'https://www.youtube.com/embed/ilvi2u_c_a0?rel=0', // REEMPLAZAR (reel MG)
    logo: '/logo_motion.png', // SUBE un ícono/iso de motion, ej: /logo_motion.png
    year: '2023–2025',
    desc: 'Animaciones gráficas para marcas B2B y corporativas: lower thirds, key visuals, data-visual y brand animations para campañas y piezas institucionales.',
    link: 'https://www.youtube.com/watch?v=uul8LNP6BbQ',
  },
];

export default function Page() {
  return (
    <section>
      <div className="section container">
        <h1 className="h2">Portafolio</h1>
        <p className="p mt-2">
          Una selección de piezas recientes. Solicita el reel completo o casos detallados en contacto.
        </p>
      </div>

      <div className="container pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <article key={p.title} className="card">
              {/* Video */}
              <VideoEmbed src={p.youtube} title={p.title} />

              {/* Meta */}
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={p.logo}
                    alt={p.title}
                    width={120}
                    height={36}
                    className="object-contain opacity-90"
                  />
                </div>
                <span className="text-xs text-white/60 border border-white/10 rounded-full px-3 py-1">
                  {p.year}
                </span>
              </div>

              {/* Texto */}
              <h3 className="mt-4 font-semibold text-lg">{p.title}</h3>
              <p className="text-white/70 mt-2">{p.desc}</p>

              {/* CTA opcional */}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link mt-3 inline-block"
                >
                  Ver en YouTube →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
