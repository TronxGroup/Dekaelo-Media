import { VideoEmbed } from './components/VideoEmbed';
import { ClientLogos } from './components/ClientLogos';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { CaseCards } from './components/CaseCards';
import { FAQ } from './components/FAQ';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <section>
      {/* HERO */}
      <div className="container pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge">Estudio audiovisual</span>
            <h1 className="h1 mt-3">Producción Audiovisual Estratégica</h1>
            <p className="p mt-4">
              Contenido con calidad cinematográfica para tu marca, todos los meses.
              Nos encargamos de ideas, guion, rodaje y entrega; tu equipo se enfoca en crecer.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/servicios" className="btn">Ver servicios</Link>
              <Link href="/contacto#form" className="btn-outline">Agenda una llamada</Link>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/70 text-sm">
              <Image src="/logo.png" alt="Dekaelo Media" width={28} height={28} className="rounded-lg" />
              <p>Plan mensual · 1 jornada · 1 video largo · 4–5 reels · Dirección y asesoría creativa</p>
            </div>
          </div>
          <VideoEmbed src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0" title="Reel Dekaelo Media" />
        </div>
      </div>

      {/* UNA sola franja de logos (sin duplicados) */}
      <section className="border-y border-white/10 bg-black/60">
        <div className="container py-10">
          <p className="text-center text-white/50 text-sm mb-6">Confían en nosotros</p>
          <ClientLogos />
        </div>
      </section>

      {/* DESTACADO */}
      <div className="container section">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <VideoEmbed src="https://www.youtube.com/embed/LAaLA-spVH0?rel=0" title="Video destacado" />
          <div>
            <h2 className="h2">Plan Audiovisual Mensual</h2>
            <p className="text-white/70 mt-2">
              Consistencia, calidad y estrategia: un partner creativo que produce y mide resultados.
            </p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• 1 jornada de grabación (hasta 8 hrs)</li>
              <li>• 1 video institucional / YouTube / vodcast</li>
              <li>• 4–5 reels o cápsulas para redes</li>
              <li>• Guion creativo + asesoría de publicaciones</li>
              <li>• Entregas optimizadas por plataforma</li>
              <li>• Informe mensual con ideas y análisis básico</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/portafolio" className="btn-outline">Ver portafolio</Link>
              <Link href="/contacto#form" className="btn">Cotizar</Link>
            </div>
          </div>
        </div>
      </div>

      <CaseCards />
      <Testimonials />
      <FAQ />
      <Gallery />
    </section>
  );
}
