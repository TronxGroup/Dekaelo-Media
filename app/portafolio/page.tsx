import Image from 'next/image';
import { VideoEmbed } from '../components/VideoEmbed';

export const metadata = {
  title: 'Portafolio | Dekaelo Media',
  description:
    'Selección de videos corporativos, podcasts, institucionales y proyectos audiovisuales recientes producidos por Dekaelo Media.',
};

const toEmbed = (url: string) => {
  const match = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  const id = match ? match[1] : url.split('/').pop()?.split('?')[0] || '';
  return `https://www.youtube.com/embed/${id}?rel=0&start=0&modestbranding=1&playsinline=1`;
};

type Project = {
  title: string;
  youtube: string;
  logo: string;
  desc: string;
};

const projects: Project[] = [
  {
    title: 'U-Payments — Corporate Spot',
    youtube: toEmbed('https://www.youtube.com/watch?v=BAN7i2d01W8'),
    logo: '/logo_6.png',
    desc: 'Pieza corporativa con foco en confianza, usabilidad y presencia global. Guion técnico, dirección y entregas en múltiples formatos.',
  },
  {
    title: 'Innova Talks — Banco BICE',
    youtube: toEmbed('https://www.youtube.com/watch?v=lyt5wWzPCg8'),
    logo: '/logo_2.png',
    desc: 'Podcast corporativo en video, entrevistas clave y producción técnica completa para un formato de alto estándar.',
  },
  {
    title: 'Exploflex — Video Corporativo',
    youtube: toEmbed('https://www.youtube.com/watch?v=RF8kLsTZgsU'),
    logo: '/logo_7.png',
    desc: 'Institucional de industria. Grabación multicámara, motion graphics y versiones para web, RRSS y presentaciones.',
  },
  {
    title: 'Coesam — Video Corporativo',
    youtube: toEmbed('https://www.youtube.com/watch?v=b_sq_6TiwdE'),
    logo: '/logo_8.png',
    desc: 'Video B2B orientado a posicionamiento comercial internacional. Material optimizado para web, ferias y clientes globales.',
  },
  {
    title: 'Creando Líderes para Asia — APCC',
    youtube: toEmbed('https://www.youtube.com/watch?v=byTylGKp-uI'),
    logo: '/logo_9.png',
    desc: '+20 episodios para LinkedIn y newsletters. Podcast institucional de la Cámara de Comercio Asia Pacífico.',
  },
  {
    title: 'IGROMI — Industria 4.0',
    youtube: toEmbed('https://www.youtube.com/watch?v=2G7oKXKjPl8'),
    logo: '/logo_1.png',
    desc: 'Capítulo del podcast BREAK INDUSTRIAL. Financiamiento CORFO, referentes tecnológicos y distribución multiplataforma.',
  },
  {
    title: 'Revista CARAS — 25° Aniversario',
    youtube: toEmbed('https://www.youtube.com/watch?v=hs6DLxIJ0jA'),
    logo: '/logo_10.png',
    desc: 'Video conmemorativo por los 25 años de CARAS. Edición dinámica, musicalización y piezas derivadas.',
  },
  {
    title: 'Fútbol y Parrilla — Independiente',
    youtube: toEmbed('https://www.youtube.com/watch?v=PLSfbZU_asQ'),
    logo: '/logo_11.png',
    desc: '+300.000 vistas. Producción de 4 episodios, registro multicámara y edición para crecimiento orgánico.',
  },
  {
    title: "Trewhela's School — Documental 80 Años",
    youtube: toEmbed('https://www.youtube.com/watch?v=JKsSN2lo_RU'),
    logo: '/logo_5.png',
    desc: 'Documental institucional. Cobertura histórica, producción cinematográfica y cortes breves para marketing.',
  },
  {
    title: 'Motion Graphics — KGHM, Inducom, TAPP',
    youtube: toEmbed('https://www.youtube.com/watch?v=ilvi2u_c_a0'),
    logo: '/logo_motion.png',
    desc: 'Animaciones B2B: lower thirds, key visuals, data-visual y brand animations para campañas y presentaciones.',
  },
  {
    title: 'Reel Cine y Series — Yokai / La Horrible / Danny Wang',
    youtube: toEmbed('https://www.youtube.com/watch?v=550zTI8nEvY'),
    logo: '/logo_cine.png',
    desc: 'Largometraje “Yokai” (Sitges, BARS), serie “La Horrible” y proyecto premiado “Danny Wang”.',
  },
  {
    title: 'ACManet — Tutorial Better Life',
    youtube: toEmbed('https://www.youtube.com/watch?v=f7BpYpTSPLk'),
    logo: '/logo_12.png',
    desc: 'Tutorial con más de 3.000.000 de visualizaciones. Alto posicionamiento orgánico y autoridad en el rubro.',
  },
];

export default function Page() {
  return (
    <section>
      {/* HEADER */}
      <div className="section container">
        <h1 className="h2">Portafolio</h1>
        <p className="p mt-2 text-white/70 max-w-2xl">
          Selección de videos corporativos, institucionales y series para marcas, bancos,
          cámaras y empresas de Chile. Si necesitas un caso detallado, contáctanos.
        </p>
      </div>

      {/* GRID DE PROYECTOS */}
      <div className="container pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <VideoEmbed src={p.youtube} title={p.title} />

              <div className="mt-5 flex items-center gap-3">
                <Image
                  src={p.logo}
                  alt={p.title}
                  width={90}
                  height={30}
                  className="object-contain opacity-80"
                />
              </div>

              <h3 className="mt-4 font-semibold text-lg text-white">{p.title}</h3>
              <p className="text-white/70 mt-2">{p.desc}</p>

              <div className="mt-4">
                <a href="/contacto#form" className="btn inline-block">
                  Cotizar este tipo de proyecto →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@dekaelo_media"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Ver más en YouTube →
          </a>
        </div>
      </div>
    </section>
  );
}
