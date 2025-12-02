import { VideoEmbed } from './components/VideoEmbed';
import { ClientLogos } from './components/ClientLogos';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <section>
      {/* HERO */}
      <div className="container pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge">Productora audiovisual para empresas</span>
            <h1 className="h1 mt-3">
              Videos corporativos y contenido audiovisual estratégico
            </h1>
            <p className="p mt-4">
              Producimos videos corporativos, institucionales y vodcasts en video para empresas en
              Chile, con calidad cinematográfica y una mirada estratégica en tus objetivos de
              comunicación, marketing y negocio.
            </p>

            {/* Franja de precio y modelo */}
            <p className="mt-4 text-sm text-white/70">
              <span className="font-semibold text-white">
                Proyectos puntuales y planes mensuales desde $595.000 CLP, IVA incluido.
              </span>{' '}
              Ideal para equipos de marketing, comunicaciones internas y directorios que necesitan
              videos profesionales para clientes, colaboradores o inversionistas.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contacto#form" className="btn">
                Cotizar video corporativo
              </Link>
              <Link href="#planes" className="btn-outline">
                Ver planes mensuales
              </Link>
            </div>

            {/* Nota / beneficio */}
            <div className="mt-6 flex items-center gap-4 text-white/70 text-sm">
              <Image
                src="/logo.png"
                alt="Dekaelo Media"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <p>
                Acompañamos a tu equipo desde el concepto y guion, hasta el rodaje y entrega final:
                institucional, cápsulas para campañas, vodcasts corporativos y contenido para
                comunicación interna.
              </p>
            </div>

            {/* Enlace rápido a portafolio (sutil) */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/70">
              <Link
                href="/portafolio"
                className="underline underline-offset-4 hover:text-white"
              >
                Ver trabajos recientes →
              </Link>
              <span className="hidden md:inline text-white/40">·</span>
              <span className="text-white/60">
                Proyectos para bancos, cámaras, colegios y empresas del Chile Central.
              </span>
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

      {/* DESTACADO: Plan audiovisual mensual */}
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
              Consistencia, calidad y estrategia: un partner creativo que produce y mide resultados
              para tu equipo. Ideal para marcas que necesitan contenido constante sin montar un
              departamento in-house ni coordinar una productora distinta cada vez.
            </p>

            <p className="mt-3 text-sm text-white/70">
              <span className="font-semibold text-white">
                Plan Estándar recomendado: $952.000 CLP / mes, IVA incluido.
              </span>{' '}
              Incluye una jornada completa de grabación y piezas suficientes para mantener tus
              canales activos durante el mes.
            </p>

            <ul className="mt-4 space-y-2 text-white/80">
              <li>• 1 jornada de grabación (hasta 8 hrs)</li>
              <li>• 1 video institucional / YouTube / vodcast</li>
              <li>• 4–5 reels o cápsulas para redes</li>
              <li>• Guion creativo + asesoría de publicaciones</li>
              <li>• Entregas optimizadas por plataforma</li>
              <li>• 1 revisión incluida e informe mensual básico</li>
            </ul>

            <div className="mt-6 flex gap-3 flex-wrap">
              <Link href="#planes" className="btn">
                Ver todos los planes
              </Link>
              <Link href="/contacto#form" className="btn-outline">
                Cotizar este plan
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BLOQUE: Proyectos puntuales */}
      <section className="bg-black/40 border-t border-b border-white/10">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2">¿Necesitas un solo video corporativo?</h2>
            <p className="text-white/70 mt-2">
              También realizamos proyectos puntuales: videos institucionales, cápsulas para campañas,
              vodcasts corporativos o piezas explicativas para clientes y proveedores. Te ayudamos a
              definir el formato y la duración según tu objetivo.
            </p>
            <p className="mt-3 text-sm text-white/70">
              Cuéntanos qué necesitas y en menos de 24 horas te enviamos una propuesta con valor
              estimado, tiempos y enfoque recomendado.
            </p>
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <Link href="/contacto#form" className="btn">
                Cotizar proyecto puntual
              </Link>
              <Link href="/portafolio" className="btn-outline">
                Ver ejemplos de videos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES MENSUALES */}
      <section id="planes" className="bg-black/40 border-t border-b border-white/10">
        <div className="container py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="h2">Planes audiovisuales mensuales</h2>
            <p className="text-white/70 mt-2">
              Valores IVA incluido. Contrato mínimo sugerido: 3 meses. Diseñados para equipos de
              marketing, comunicaciones internas, bancos, cámaras y empresas que necesitan contenido
              constante, profesional y alineado con sus objetivos de negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {/* Básico */}
            <div className="card p-6 flex flex-col justify-between border border-white/10">
              <div>
                <h3 className="font-semibold text-lg">Básico</h3>
                <p className="text-white/60 text-sm mt-1">
                  Para marcas que dan sus primeros pasos en contenido mensual en video.
                </p>
                <p className="mt-4 text-2xl font-bold">
                  $595.000
                  <span className="block text-xs text-white/60 font-normal">
                    CLP / mes · IVA incluido
                  </span>
                </p>
                <ul className="mt-4 space-y-2 text-white/80 text-sm">
                  <li>• 1 cápsula institucional (máx. 2 minutos)</li>
                  <li>• 2 reels / shorts / cápsulas</li>
                  <li>• Grabación simple (1 cámara, hasta 3 horas)</li>
                  <li>• Exportación para 1 plataforma</li>
                  <li>• 1 revisión incluida</li>
                  <li>• Publicación lista para YouTube, LinkedIn, Instagram o Intranet</li>
                </ul>
              </div>
              <div className="mt-6">
                <Link href="/contacto#form" className="btn w-full text-center">
                  Quiero este plan
                </Link>
              </div>
            </div>

            {/* Estándar */}
            <div className="card p-6 flex flex-col justify-between border border-cyan-400/40 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-cyan-400/60" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300 mb-2">
                  Recomendado
                </p>
                <h3 className="font-semibold text-lg">Estándar</h3>
                <p className="text-white/60 text-sm mt-1">
                  Para equipos con calendario de marketing activo y múltiples canales.
                </p>
                <p className="mt-4 text-2xl font-bold">
                  $952.000
                  <span className="block text-xs text-white/60 font-normal">
                    CLP / mes · IVA incluido
                  </span>
                </p>
                <ul className="mt-4 space-y-2 text-white/80 text-sm">
                  <li>• 1 jornada de grabación (8 horas)</li>
                  <li>• 1 video largo institucional / YouTube / vodcast</li>
                  <li>• 4–5 reels / shorts / cápsulas</li>
                  <li>• Asesoría + guion creativo</li>
                  <li>• Entregas optimizadas por plataforma</li>
                  <li>• 1 revisión incluida</li>
                  <li>• Informe mensual estratégico básico</li>
                </ul>
              </div>
              <div className="mt-6">
                <Link href="/contacto#form" className="btn w-full text-center">
                  Cotizar plan Estándar
                </Link>
              </div>
            </div>

            {/* Premium */}
            <div className="card p-6 flex flex-col justify-between border border-white/10">
              <div>
                <h3 className="font-semibold text-lg">Premium</h3>
                <p className="text-white/60 text-sm mt-1">
                  Para campañas, lanzamientos y mayor cobertura de marca durante el mes.
                </p>
                <p className="mt-4 text-2xl font-bold">
                  $1.450.000
                  <span className="block text-xs text-white/60 font-normal">
                    CLP / mes · IVA incluido
                  </span>
                </p>
                <ul className="mt-4 space-y-2 text-white/80 text-sm">
                  <li>• 2 jornadas de grabación (16 horas)</li>
                  <li>• 2 videos largos de campaña</li>
                  <li>• 8–10 reels / shorts / cápsulas</li>
                  <li>• Asesoría estratégica avanzada</li>
                  <li>• 2 rondas de revisión</li>
                  <li>• Entregas personalizadas + material adicional</li>
                  <li>• Informe mensual con métricas y recomendaciones de pauta</li>
                </ul>
              </div>
              <div className="mt-6">
                <Link href="/contacto#form" className="btn w-full text-center">
                  Conversar plan Premium
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-white/60">
            Todos los planes pueden adaptarse según necesidades específicas de tu equipo o campaña.
          </p>
        </div>
      </section>

      {/* Casos breves */}
      <section className="bg-black/40 border-t border-b border-white/10">
        <div className="container py-16">
          <h2 className="h2 text-center mb-12">Casos destacados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="font-semibold text-lg">Innova Talks — Banco BICE</h3>
              <p className="text-white/70 mt-2">
                Podcast corporativo en video con entrevistas a colaboradores clave.
                Un formato estratégico para posicionar la cultura, visibilizar iniciativas y generar
                networking de alto nivel.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-lg">Creando Líderes para Asia — APCC</h3>
              <p className="text-white/70 mt-2">
                Más de 20 episodios con referentes empresariales. Contenido diseñado para YouTube,
                LinkedIn y newsletters, además de clips cortos reutilizables para redes y eventos.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-lg">Documental 80 Años — Trewhela’s School</h3>
              <p className="text-white/70 mt-2">
                Pieza institucional que recorre origen, presente y futuro del colegio.
                Versión principal y cortes breves para marketing digital, admisión y redes sociales.
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
                “Muy profesionales y puntuales en cada jornada. El podcast no solo nos dio visibilidad,
                también se convirtió en una herramienta clave para generar nuevos negocios con
                nuestros invitados.”
              </p>
              <p className="mt-4 font-semibold">Víctor Ruz</p>
              <p className="text-sm text-white/60">CEO, IGROMI</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
              <p className="text-white/80 italic">
                “El video institucional que nos produjeron ha sido genial. A lo largo de los años lo
                seguimos utilizando porque un buen video es una inversión de largo plazo y de
                credibilidad.”
              </p>
              <p className="mt-4 font-semibold">William Barhoma</p>
              <p className="text-sm text-white/60">CEO, Exploflex</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
              <p className="text-white/80 italic">
                “Nos ayudaron a crear videos explicativos claros y profesionales para clientes y
                proveedores. Nuestro video principal estuvo 5 años en la portada oficial de la
                empresa.”
              </p>
              <p className="mt-4 font-semibold">Rodrigo González</p>
              <p className="text-sm text-white/60">Gerente Comercial, Acmanet</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO-FIRST / EDUCACIÓN */}
      <section id="video-first" className="bg-black/40 border-t border-b border-white/10">
        <div className="container py-16">
          <h2 className="h2 text-center">El futuro es video: claves 2025</h2>
          <p className="text-center text-white/70 max-w-3xl mx-auto mt-3">
            Síntesis del estudio Google/Kantar “Future of Video” (EE. UU., 2025). El consumo cambió:
            el video ahora informa, educa e impulsa la compra a lo largo de todo el viaje del cliente.
            Las marcas que piensan “video-first” construyen más confianza y deciden más rápido.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                n: '69%',
                d: 'prefiere aprender una habilidad con video antes que con texto o audio.',
              },
              {
                n: '70%',
                d: 'elige video para “cómo construir/hacer algo”; 63% para cocinar o seguir procesos.',
              },
              {
                n: 'Top',
                d: 'YouTube lidera en streaming, scroll/browsing y búsqueda de video entre Gen Z y adultos.',
              },
            ].map((k) => (
              <div
                key={k.n}
                className="p-6 rounded-2xl bg-gray-900 border border-white/10 text-center"
              >
                <div className="text-3xl font-extrabold text-white">{k.n}</div>
                <div className="text-white/70 mt-2 text-sm">{k.d}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {
                n: '83% Gen Z',
                d: 'prefiere a sus creadores favoritos por sobre shows o películas de estudio.',
              },
              {
                n: '82%',
                d: 'percibe a YouTube como la plataforma con creadores más confiables.',
              },
              {
                n: '81%',
                d: 'usa contenido de creadores en YouTube para investigar y descubrir productos al comprar.',
              },
            ].map((k) => (
              <div
                key={k.n}
                className="p-6 rounded-2xl bg-gray-900 border border-white/10 text-center"
              >
                <div className="text-xl font-extrabold text-white">{k.n}</div>
                <div className="text-white/70 mt-2 text-sm">{k.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-6 rounded-2xl bg-gray-900 border border-white/10 text-center">
            <p className="text-white/80">
              <strong>Dividendo de confianza:</strong> la influencia de YouTube acorta el ciclo de
              compra del comprador online de video en EE. UU. en <strong>~6 días</strong>. Para las
              marcas, adoptar una estrategia “video-first” y colaborar con estudios especializados
              significa decisiones más rápidas, más seguras y mejor uso del presupuesto.
            </p>
          </div>

          <p className="text-center text-white/50 text-xs mt-6">
            Fuente: Google/Kantar, <em>Future of Video</em>, EE. UU., 2025. Cifras resumidas para uso
            informativo.
          </p>

          <div className="text-center mt-10">
            <Link href="/contacto#form" className="btn">
              Diseñar mi estrategia video-first →
            </Link>
          </div>
        </div>
      </section>

      {/* CIERRE / CTA FINAL */}
      <section className="container py-16">
        <div className="text-center">
          <h2 className="h2 mb-3">¿Listo para grabar tu próximo video?</h2>
          <p className="text-white/70 mb-6">
            Cuéntanos tu proyecto y coordinamos una llamada. En menos de 24 horas tendrás una
            propuesta clara con valor estimado, cronograma y próximos pasos para tu video
            corporativo o plan audiovisual mensual.
          </p>
          <Link href="/contacto#form" className="btn">
            Cotizar / Agendar llamada →
          </Link>
        </div>
      </section>
    </section>
  );
}
