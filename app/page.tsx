// app/page.tsx
import { VideoEmbed } from './components/VideoEmbed';
import { ClientLogos } from './components/ClientLogos';
// import { Gallery } from './components/Gallery'; // ← removido
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

            {/* Nota / beneficio */}
            <div className="mt-6 flex items-center gap-4 text-white/70 text-sm">
              <Image src="/logo.png" alt="Dekaelo Media" width={28} height={28} className="rounded-lg" />
              <p>Plan mensual · 1 jornada · 1 video largo · 4–5 reels · Dirección y asesoría creativa</p>
            </div>

            {/* Enlace rápido a portafolio (sutil) */}
            <div className="mt-4">
              <Link href="/portafolio" className="text-white/70 underline underline-offset-4 hover:text-white">
                Ver trabajos recientes →
              </Link>
            </div>
          </div>

          {/* Reel principal (lo mejor) */}
          <VideoEmbed
            src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0&start=0&modestbranding=1&playsinline=1"
            title="Reel Dekaelo Media — Lo mejor"
          />
        </div>
      </div>

      {/* UNA sola franja de logos */}
      <section className="border-y border-white/10 bg-black/60">
        <div className="container py-10">
          <p className="text-center text-white/50 text-sm mb-6">Confían en nosotros</p>
          <ClientLogos />
        </div>
      </section>

      {/* DESTACADO */}
      <div className="container section">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Reel secundario (otras marcas) */}
          <VideoEmbed
            src="https://www.youtube.com/embed/LAaLA-spVH0?rel=0&start=0&modestbranding=1&playsinline=1"
            title="Reel Dekaelo Media — Otras marcas"
          />

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

      {/* Casos breves */}
      <section className="bg-black/40 border-t border-b border-white/10">
        <div className="container py-16">
          <h2 className="h2 text-center mb-12">Casos destacados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="font-semibold text-lg">Innova Talks — Banco BICE</h3>
              <p className="text-white/70 mt-2">
                Podcast corporativo en video con entrevistas a colaboradores clave.
                Un formato estratégico para posicionar la cultura y generar networking de alto nivel.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-lg">Creando Líderes para Asia — APCC</h3>
              <p className="text-white/70 mt-2">
                Más de 20 episodios con referentes empresariales.
                Contenido diseñado para YouTube, LinkedIn y newsletters, además de clips cortos para redes.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-lg">Documental 80 Años — Trewhela’s School</h3>
              <p className="text-white/70 mt-2">
                Pieza institucional que recorre origen, presente y futuro del colegio.
                Versión principal y cortes breves para marketing digital y RRSS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-black/60 border-t border-b border-white/10">
        <div className="container py-16">
          <h2 className="h2 text-center mb-12">Testimonios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
              <p className="text-white/80 italic">
                “Muy profesionales y puntuales en cada jornada. El podcast no solo nos dio visibilidad, también se convirtió en una herramienta clave para generar nuevos negocios con nuestros invitados.”
              </p>
              <p className="mt-4 font-semibold">Víctor Ruz</p>
              <p className="text-sm text-white/60">CEO, IGROMI</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
              <p className="text-white/80 italic">
                “El video institucional que nos produjeron ha sido genial. A lo largo de los años lo seguimos utilizando porque un buen video es una inversión de largo plazo y de credibilidad.”
              </p>
              <p className="mt-4 font-semibold">William Barhoma</p>
              <p className="text-sm text-white/60">CEO, Exploflex</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
              <p className="text-white/80 italic">
                “Nos ayudaron a crear videos explicativos claros y profesionales para clientes y proveedores. Nuestro video principal estuvo 5 años en la portada oficial de la empresa.”
              </p>
              <p className="mt-4 font-semibold">Rodrigo González</p>
              <p className="text-sm text-white/60">Gerente Comercial, Acmanet</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NUEVA SECCIÓN (reemplaza FAQ) --- */}
      <section id="video-first" className="bg-black/40 border-t border-b border-white/10">
        <div className="container py-16">
          <h2 className="h2 text-center">El futuro es video: claves 2025</h2>
          <p className="text-center text-white/70 max-w-3xl mx-auto mt-3">
            Síntesis del estudio Google/Kantar “Future of Video” (EE. UU., 2025). El consumo cambió:
            el video ahora informa, educa e impulsa la compra a lo largo de todo el viaje del cliente.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { n: '69%', d: 'prefiere aprender una habilidad con video antes que con texto o audio.' },
              { n: '70%', d: 'elige video para “cómo construir/hacer algo”; 63% para cocinar o seguir procesos.' },
              { n: 'Top', d: 'YouTube lidera en streaming, scroll/browsing y búsqueda de video entre Gen Z y adultos.' },
            ].map((k) => (
              <div key={k.n} className="p-6 rounded-2xl bg-gray-900 border border-white/10 text-center">
                <div className="text-3xl font-extrabold text-white">{k.n}</div>
                <div className="text-white/70 mt-2 text-sm">{k.d}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { n: '83% Gen Z', d: 'prefiere a sus creadores favoritos por sobre shows o películas de estudio.' },
              { n: '82%', d: 'percibe a YouTube como la plataforma con creadores más confiables.' },
              { n: '81%', d: 'usa contenido de creadores en YouTube para investigar y descubrir productos al comprar.' },
            ].map((k) => (
              <div key={k.n} className="p-6 rounded-2xl bg-gray-900 border border-white/10 text-center">
                <div className="text-xl font-extrabold text-white">{k.n}</div>
                <div className="text-white/70 mt-2 text-sm">{k.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-6 rounded-2xl bg-gray-900 border border-white/10 text-center">
            <p className="text-white/80">
              <strong>Dividendo de confianza:</strong> la influencia de YouTube acorta el ciclo de compra del
              comprador online de video en EE. UU. en <strong>~6 días</strong>. Para las marcas, pensar “video-first”
              y colaborar con creadores significa decisiones más rápidas y seguras.
            </p>
          </div>

          <p className="text-center text-white/50 text-xs mt-6">
            Fuente: Google/Kantar, <em>Future of Video</em>, EE. UU., 2025. Cifras resumidas para uso informativo.
          </p>

          <div className="text-center mt-10">
            <Link href="/contacto#form" className="btn">Diseñar mi estrategia video-first →</Link>
          </div>
        </div>
      </section>

      {/* Reemplazo orientado a conversión */}
      <section className="container py-16">
        <div className="text-center">
          <h2 className="h2 mb-3">¿Listo para empezar?</h2>
          <p className="text-white/70 mb-6">Cuéntanos tu proyecto y coordinamos una llamada.</p>
          <Link href="/contacto#form" className="btn">Cotizar / Agenda una llamada →</Link>
        </div>
      </section>
    </section>
  );
}
