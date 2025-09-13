import Image from 'next/image';
import { VideoEmbed } from '../components/VideoEmbed';

export const metadata = {
  title: 'Portafolio | Dekaelo Media',
  description: 'Selección de trabajos y proyectos.',
};

type Project = {
  title: string;
  youtube: string;       // URL embebida de YouTube (usa el formato /embed/)
  logo: string;          // ruta en /public
  year: string;
  desc: string;
  link?: string;         // link a YouTube normal (opcional)
};

const projects: Project[] = [
  {
    title: 'Reel Dekaelo Media',
    youtube: 'https://www.youtube.com/embed/uul8LNP6BbQ?rel=0', // REEMPLAZA si quieres
    logo: '/logo_1.png',
    year: '2025',
    desc: 'Selección de tomas, piezas corporativas y comerciales recientes. Dirección, cámara y edición.',
    link: 'https://www.youtube.com/watch?v=uul8LNP6BbQ',
  },
  {
    title: 'Campaña Corporativa',
    youtube: 'https://www.youtube.com/embed/uul8LNP6BbQ?rel=0', // REEMPLAZA
    logo: '/logo_2.png',
    year: '2024',
    desc: 'Spot de campaña con testimoniales y B-roll de operaciones. Entregas para RRSS y web.',
    link: 'https://www.youtube.com/watch?v=uul8LNP6BbQ',
  },
  {
    title: 'Serie de Reels · Employer Branding',
    youtube: 'https://www.youtube.com/embed/uul8LNP6BbQ?rel=0', // REEMPLAZA
    logo: '/logo_3.png',
    year: '2024',
    desc: '4–5 cápsulas mensuales para atracción de talento. Guion, rodaje y edición optimizada vertical.',
    link: 'https://www.youtube.com/watch?v=uul8LNP6BbQ',
  },
  {
    title: 'Documental Corto de Marca',
    youtube: 'https://www.youtube.com/embed/uul8LNP6BbQ?rel=0', // REEMPLAZA
    logo: '/logo_4.png',
    year: '2023',
    desc: 'Historia de clientes y procesos internos. Pieza de 6 min + versiones de 60–90s.',
    link: 'https://www.youtube.com/watch?v=uul8LNP6BbQ',
  },
  {
    title: 'Lanzamiento Producto · Spot 30s',
    youtube: 'https://www.youtube.com/embed/uul8LNP6BbQ?rel=0', // REEMPLAZA
    logo: '/logo_5.png',
    year: '2023',
    desc: 'Spot principal 30s + adaptaciones para Instagram y YouTube. Animación de títulos y supers.',
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
