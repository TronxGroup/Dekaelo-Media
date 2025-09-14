import Image from 'next/image';
import { VideoEmbed } from '../components/VideoEmbed';

export const metadata = {
  title: 'Portafolio | Dekaelo Media',
  description: 'Selección de trabajos y proyectos.',
};

type Project = {
  title: string;
  youtube: string; // URL embebida de YouTube (formato /embed/)
  logo: string;    // ruta en /public
  year: string;
  desc: string;
};

const projects: Project[] = [
  {
    title: 'Innova Talks — Banco BICE',
    youtube: 'https://www.youtube.com/embed/lyt5wWzPCg8?rel=0',
    logo: '/logo_2.png',
    year: '2025',
    desc: 'Podcast en video con entrevistas a colaboradores clave del banco. Concepto, dirección y producción técnica para un formato corporativo cercano y de alto estándar.',
  },
  {
    title: 'Break Industrial — IGROMI (CORFO)',
    youtube: 'https://www.youtube.com/embed/hAyZFw0-55o?rel=0',
    logo: '/logo_1.png',
    year: '2024',
    desc: 'Podcast de video financiado por CORFO y auspiciado por U. Andrés Bello y Coderhouse. Conversaciones con referentes de tecnología/industria en Chile. Producción integral y delivery multiplataforma.',
  },
  {
    title: 'Fútbol y Parrilla — Independiente',
    youtube: 'https://www.youtube.com/embed/6YZHDcwYZfo?rel=0',
    logo: '/logo_3.png',
    year: '2024',
    desc: 'Producción de los 4 primeros episodios de este formato editorial. +300.000 vistas acumuladas en YouTube. Diseño de dinámica, registro multicámara y edición ágil.',
  },
  {
    title: "Documental 80 Años — Trewhela's School",
    youtube: 'https://www.youtube.com/embed/_L1MKLIp9yw?rel=0',
    logo: '/logo_5.png',
    year: '2023',
    desc: 'Documental institucional que recorre origen, presente y futuro del colegio. Pieza principal + cortes breves para marketing y RRSS.',
  },
  {
    title: 'Tutorial — Better Life (A/C)',
    youtube: 'https://www.youtube.com/embed/f7BpYpTSPLk?rel=0',
    logo: '/logo_4.png',
    year: '2015',
    desc: 'Tutorial de instalación de aire acondicionado que sigue vigente en YouTube. +3.000.000 de vistas, +18k me gusta y comentarios orgánicos hasta hoy.',
  },
  {
    title: 'Creando Líderes para Asia — APCC',
    youtube: 'https://www.youtube.com/embed/byTylGKp-uI?rel=0',
    logo: '/logo_6.png',
    year: '2023–2025',
    desc: 'Podcast de video de la Cámara de Comercio Asia Pacífico. 20+ episodios con empresarios y referentes, pensados para YouTube, LinkedIn y clipping corto.',
  },
  {
    title: 'Cine y Series — Yokai / La Horrible / Danny Wang',
    youtube: 'https://www.youtube.com/embed/550zTI8nEvY?rel=0',
    logo: '/logo_cine.png',
    year: '2014–2022',
    desc: 'Largometraje “Yokai” (Selección Oficial Sitges y BARS). Serie “La Horrible” (con Sigrid Alegría y Liliana Ross QEPD). Proyecto premiado en Corea: “Danny Wang”.',
  },
  {
    title: 'Motion Graphics — KGHM, Inducom, TAPP',
    youtube: 'https://www.youtube.com/embed/ilvi2u_c_a0?rel=0',
    logo: '/logo_motion.png',
    year: '2023–2025',
    desc: 'Animaciones gráficas para marcas B2B y corporativas: lower thirds, key visuals, data-visual y brand animations para campañas y piezas institucionales.',
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

              {/* CTA */}
              <div className="mt-4">
                <a
                  href="/contacto"
                  className="btn inline-block"
                >
                  Cotizar este proyecto →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
