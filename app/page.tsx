// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Producción Audiovisual Estratégica | Dekaelo Media',
  description:
    'Plan Audiovisual Mensual para empresas en Chile: grabación profesional, video institucional, 4-5 reels, asesoría creativa y entregas optimizadas. Cupos limitados para un servicio realmente personalizado.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.dekaelomedia.com/' },
  openGraph: {
    type: 'website',
    title: 'Producción Audiovisual Estratégica | Dekaelo Media',
    description:
      'Plan Audiovisual Mensual para empresas. Nos encargamos de todo: ideas, guion, rodaje y entrega. Tu marca con presencia constante y profesional.',
    url: 'https://www.dekaelomedia.com/',
    images: ['https://www.dekaelomedia.com/og-cover.jpg'],
  },
  twitter: { card: 'summary_large_image' },
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col scroll-smooth">
      {/* Skip link accesibilidad */}
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-yellow-500 text-black px-3 py-2 rounded-md"
      >
        Saltar al contenido
      </a>

      {/* Navbar fija */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg shadow-md border-b border-gray-800">
        {/* 1) Checkbox controlador: hermano del menú móvil */}
        <input id="menu" type="checkbox" className="peer sr-only" />

        {/* Barra superior */}
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Principal">
          <a href="#inicio" className="flex items-center" aria-label="Inicio">
            <Image src="/2.Logo_White.png" alt="Dekaelo Media" width={120} height={48} priority />
          </a>

        {/* Botón hamburguesa */}
          <label
            htmlFor="menu"
            className="md:hidden cursor-pointer p-2 rounded-lg hover:bg-gray-800"
            aria-label="Abrir menú"
            aria-controls="menu-movil"
            aria-expanded={false}
          >
            ☰
          </label>

          {/* Menú desktop */}
          <ul className="hidden md:flex space-x-8 text-gray-400 text-sm">
            <li><a href="#inicio" className="hover:text-yellow-400">Inicio</a></li>
            <li><a href="#plan" className="hover:text-yellow-400">Plan</a></li>
            <li><a href="#planes" className="hover:text-yellow-400">Planes</a></li>
            <li><a href="#beneficios" className="hover:text-yellow-400">Beneficios</a></li>
            <li><a href="#clientes" className="hover:text-yellow-400">Clientes</a></li>
            <li><a href="#galeria" className="hover:text-yellow-400">Galería</a></li>
            <li><a href="#quienes" className="hover:text-yellow-400">Quiénes Somos</a></li>
            <li><a href="#extras" className="hover:text-yellow-400">Extras</a></li>
            <li><a href="#contacto" className="hover:text-yellow-400">Contacto</a></li>
          </ul>
        </nav>

        {/* 2) Menú móvil: aparece con peer-checked */}
        <div
          id="menu-movil"
          className="hidden peer-checked:block md:hidden absolute left-0 right-0 top-full z-50 border-t border-gray-800 bg-gray-950/95 max-h-[calc(100vh-64px)] overflow-y-auto"
        >
          <ul className="px-6 py-4 space-y-3 text-gray-300">
            {['inicio','plan','planes','beneficios','clientes','galeria','quienes','extras','contacto'].map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="block py-2 hover:text-yellow-400">
                  {id === 'inicio' ? 'Inicio' : id.charAt(0).toUpperCase()+id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Compensación por header fijo (≈80px) */}
      <main id="contenido" className="pt-20 flex-1">
        {/* Hero */}
        <section id="inicio" className="scroll-mt-20 text-center py-24 px-6 bg-gradient-to-b from-gray-950 to-black">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-yellow-500">
            Producción Audiovisual Estratégica
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-300">
            Contenido de calidad cinematográfica para tu marca, todos los meses. Nosotros nos encargamos de ideas,
            guion, rodaje y entrega; tu equipo se enfoca en crecer.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="aspect-video bg-gray-800 rounded-3xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/uul8LNP6BbQ?rel=0"
                title="Video YouTube 1"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="aspect-video bg-gray-800 rounded-3xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/550zTI8nEvY?rel=0"
                title="Video YouTube 2"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <a
            href="#contacto"
            className="mt-12 inline-block px-8 py-4 bg-gradient-to-r from-yellow-600 to-blue-700 hover:opacity-90 text-white rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Reserva tu cupo
          </a>
        </section>

        {/* Plan principal */}
        <section id="plan" className="scroll-mt-20 py-20 px-6 max-w-6xl mx-auto" data-testid="section-plan">
          <h2 className="text-4xl font-extrabold text-center mb-14 text-blue-400">Plan Audiovisual Mensual Estratégico</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-10 rounded-3xl shadow-xl border border-gray-800">
              <ul className="space-y-4 text-gray-300">
                <li>1 jornada de grabación profesional (hasta 8 horas)</li>
                <li>1 video largo institucional / YouTube / vodcast</li>
                <li>4 a 5 reels o cápsulas para redes</li>
                <li>Asesoría en publicaciones + guion creativo</li>
                <li>1 ronda de revisión incluida</li>
                <li>Entrega optimizada por plataforma</li>
                <li>Informe mensual con ideas y análisis básico</li>
              </ul>
              <div className="mt-8 p-4 rounded-2xl bg-gray-800/70 border border-gray-700 text-sm text-gray-300">
                <span className="text-yellow-400 font-semibold">Cupos limitados:</span> trabajamos con máximo 5 empresas al mes para asegurar calidad y personalización.
              </div>
            </div>
            <div className="flex flex-col justify-center text-gray-400 text-lg">
              <p className="mb-6 text-yellow-400 text-xl">“Invertir en video profesional ya no es opcional: es estratégico.”</p>
              <p>Nos convertimos en tu aliado creativo y técnico. Transformamos tu comunicación en visibilidad, confianza y liderazgo en tu industria.</p>
              <a href="#contacto" className="mt-10 inline-block px-8 py-4 bg-gradient-to-r from-yellow-600 to-blue-700 hover:opacity-90 text-white rounded-full shadow-xl">Quiero mi plan audiovisual</a>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="scroll-mt-20 py-24 px-6 bg-gray-950">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-blue-400">Beneficios para tu empresa</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { title: '📈 Presencia digital constante', text: 'Tu marca siempre activa y profesional, sin sobrecargar a tu equipo.' },
              { title: '🧠 Asesor creativo', text: 'Ideas frescas, guiones y propuestas estratégicas cada mes.' },
              { title: '⏱️ Ahorro de recursos', text: 'Nos encargamos de la producción completa para que te enfoques en el negocio.' },
              { title: '🎯 Resultados reales', text: 'Ventas, posicionamiento y confianza: contenido alineado a objetivos.' },
              { title: '🏥 Comunicación interna', text: 'Capacitaciones, inducción y cultura con videos claros y eficaces.' },
              { title: '🏆 Liderazgo en tu rubro', text: 'Consolidamos tu marca como referente en su industria.' },
            ].map((b, i) => (
              <div key={i} className="p-8 bg-gray-800 rounded-3xl shadow-md border border-gray-700">
                <h3 className="font-bold mb-3 text-yellow-400">{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <a href="#contacto" className="px-10 py-4 bg-gradient-to-r from-yellow-600 to-blue-700 hover:opacity-90 text-white rounded-full shadow-xl">Quiero mi plan audiovisual</a>
          </div>
        </section>

        {/* Clientes */}
        <section id="clientes" className="scroll-mt-20 py-16 px-6 bg-gray-900">
          <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-200">Algunos clientes y aliados</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-16 relative">
                <Image
                  src={`/logo_${i + 1}.png`}
                  alt={`Cliente ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 16vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Galería */}
        <section id="galeria" className="scroll-mt-20 py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-400">Galería de proyectos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((id) => (
              <div key={id} className="bg-gray-800 rounded-3xl aspect-video overflow-hidden shadow-md relative">
                <Image
                  src={`/proyecto_${id}.jpg`}
                  alt={`Proyecto ${id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Quiénes Somos */}
        <section id="quienes" className="scroll-mt-20 py-20 px-6 bg-gray-900 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-yellow-500">Quiénes Somos</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
            Más de una década creando contenido con impacto real: videos corporativos, comerciales de TV, documentales y producciones presentes en festivales internacionales y plataformas como Amazon Prime.
          </p>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mt-4">
            <span className="font-semibold text-blue-400">Más de 4.000.000 de visualizaciones</span> respaldan el trabajo de nuestro equipo y la confianza de nuestras alianzas.
          </p>
        </section>

        {/* Planes mensuales */}
        <section id="planes" className="scroll-mt-20 py-24 px-6 bg-gray-950" data-testid="section-planes">
          <h2 className="text-4xl font-extrabold text-center mb-4 text-yellow-500">Planes mensuales</h2>
          <p className="text-center text-gray-400 mb-12">Valores IVA incluido. Contrato mínimo sugerido: 3 meses.</p>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Básico */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-gray-700 to-gray-800">
              <div className="h-full w-full rounded-3xl bg-gray-900 border border-gray-800 p-8 flex flex-col" data-testid="card-basico">
                <h3 className="text-xl font-bold text-gray-200">Básico</h3>
                <p className="mt-1 text-sm text-gray-400">Para iniciar con presencia mensual</p>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold">$595.000</div>
                  <div className="text-sm text-gray-400">CLP / mes / IVA inc.</div>
                </div>
                <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                  <li>1 cápsula institucional (máx. 2 min)</li>
                  <li>2 reels/shorts/cápsulas</li>
                  <li>Grabación simple (1 cámara, hasta 3h)</li>
                  <li>Exportación para 1 plataforma</li>
                  <li>1 revisión</li>
                </ul>
                <a href="#contacto" className="mt-auto inline-block w-full text-center px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition">Quiero este plan</a>
              </div>
            </div>

            {/* Estándar */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-yellow-600 to-blue-700 shadow-2xl">
              <div className="h-full w-full rounded-3xl bg-gray-900 border border-gray-800 p-8 flex flex-col" data-testid="card-estandar">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">Recomendado</div>
                <h3 className="text-xl font-bold text-gray-200">Estándar</h3>
                <p className="mt-1 text-sm text-gray-300">Equilibrio perfecto para crecer</p>
                <div className="mt-6">
                  <div className="text-4xl font-extrabold">$952.000</div>
                  <div className="text-sm text-gray-400">CLP / mes / IVA inc.</div>
                </div>
                <ul className="mt-6 space-y-3 text-gray-200 text-sm">
                  <li>1 jornada de grabación (8 horas)</li>
                  <li>1 video largo institucional / YouTube / vodcast</li>
                  <li>4–5 reels/shorts/cápsulas</li>
                  <li>Asesoría + guion creativo</li>
                  <li>Entrega optimizada por plataforma</li>
                  <li>1 revisión</li>
                  <li>Informe mensual estratégico básico</li>
                </ul>
                <a href="#contacto" className="mt-auto inline-block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-600 to-blue-700 hover:opacity-90 transition">Quiero este plan</a>
              </div>
            </div>

            {/* Premium */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-gray-700 to-gray-800">
              <div className="h-full w-full rounded-3xl bg-gray-900 border border-gray-800 p-8 flex flex-col" data-testid="card-premium">
                <h3 className="text-xl font-bold text-gray-200">Premium</h3>
                <p className="mt-1 text-sm text-gray-400">Para campañas y mayor cobertura</p>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold">$1.450.000</div>
                  <div className="text-sm text-gray-400">CLP / mes / IVA inc.</div>
                </div>
                <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                  <li>2 jornadas de grabación (16 horas)</li>
                  <li>2 videos largos de campaña</li>
                  <li>8–10 reels/shorts/cápsulas</li>
                  <li>Asesoría estratégica avanzada</li>
                  <li>2 rondas de revisión</li>
                  <li>Entregas personalizadas + material adicional</li>
                  <li>Informe mensual con métricas y recomendaciones de pauta</li>
                </ul>
                <a href="#contacto" className="mt-auto inline-block w-full text-center px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition">Quiero este plan</a>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">* Cupos limitados (máximo 5 empresas/mes) para mantener la calidad.</p>
        </section>

        {/* Extras */}
        <section id="extras" className="scroll-mt-20 py-20 px-6 bg-gray-900 text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-blue-400">Servicios Adicionales</h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-400 leading-relaxed mb-10">Potencia tu plan con opciones extra a valores preferentes.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: '🎥 2ª cámara o dron', text: 'Mayor cobertura visual para tu proyecto (desde $150.000).'},
              { title: '🎙️ Locución y subtitulado', text: 'Voces profesionales y subtítulos listos para RRSS o TV.' },
              { title: '✨ Animación gráfica', text: 'Motion graphics para reforzar tu mensaje (logos, datos, transiciones).' },
              { title: '📦 Entregas extra', text: 'Reels adicionales o versiones extendidas según tus objetivos.' },
            ].map((s, i) => (
              <div key={i} className="p-8 bg-gray-800 rounded-3xl shadow-md border border-gray-700">
                <h3 className="font-bold mb-3 text-yellow-400">{s.title}</h3>
                <p className="text-gray-300">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-20 py-24 px-6 bg-black">
          <h2 className="text-4xl font-extrabold text-center mb-6 text-blue-400">Contáctanos</h2>

          <div className="text-center text-gray-300 mb-8 space-y-2">
            <p>
              📧{' '}
              <a
                href="mailto:info@dekaelomedia.com"
                className="underline decoration-yellow-500/60 underline-offset-4 hover:text-yellow-400"
              >
                info@dekaelomedia.com
              </a>
            </p>
            <p data-testid="contact-whatsapp">💬 WhatsApp: +56 9 2008 0031</p>
          </div>

          <form
            action="https://formspree.io/f/mjkepdaj"
            method="POST"
            className="max-w-3xl mx-auto bg-gray-900 p-10 rounded-3xl shadow-xl space-y-6 border border-gray-800"
          >
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Correo"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <textarea
              name="mensaje"
              rows={5}
              placeholder="Cuéntanos tu objetivo: ventas, posicionamiento, comunicación interna, etc."
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            {/* honeypot anti-spam */}
            <input type="text" name="_gotcha" className="hidden" aria-hidden={true} tabIndex={-1} />

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-yellow-600 to-blue-700 hover:opacity-90 transition duration-300"
            >
              Enviar
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-500 border-t border-gray-800 w-full">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center">© {new Date().getFullYear()} Dekaelo Media. Todos los derechos reservados.</p>
          <p className="mt-2 text-gray-400 text-sm text-center">Historias que inspiran en cada frame.</p>

          {/* Contacto + RRSS */}
          <div className="mt-3 flex flex-col items-center gap-2 text-sm md:flex-row md:flex-wrap md:justify-center">
            <a
              href="mailto:info@dekaelomedia.com"
              className="hover:text-yellow-400 break-all max-w-full"
            >
              info@dekaelomedia.com
            </a>

            <span className="hidden md:inline text-gray-700">|</span>

            <a
              href="https://wa.me/56920080031"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              WhatsApp +56 9 2008 0031
            </a>

            <span className="hidden md:inline text-gray-700">|</span>

            <a
              href="https://www.instagram.com/dekaelo_media/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>

            <span className="hidden md:inline text-gray-700">|</span>

            <a
              href="https://www.linkedin.com/company/dekaelo-media/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 break-all max-w-full"
            >
              LinkedIn
            </a>
          </div>

          {/* Legal */}
          <nav className="mt-4 flex items-center justify-center gap-3 text-xs text-gray-400">
            <Link href="/privacidad" className="hover:text-gray-200 underline underline-offset-4">
              Privacidad
            </Link>
            <span className="text-gray-700">/</span>
            <Link href="/condiciones" className="hover:text-gray-200 underline underline-offset-4">
              Condiciones
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
