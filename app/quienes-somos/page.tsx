// app/quienes-somos/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quiénes somos | Dekaelo Media',
  description:
    'Estudio audiovisual estratégico en Chile. Unimos narrativa cinematográfica + estándar corporativo para videos institucionales, vodcasts y planes mensuales con entregas claras y consistencia.',
  alternates: { canonical: 'https://www.dekaelomedia.com/quienes-somos' },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        {/* HERO */}
        <header className="mb-8">
          <h1 className="h2">Quiénes somos</h1>

          <p className="p mt-4">
            Somos <strong>Dekaelo Media</strong>: un estudio audiovisual estratégico para empresas.
            Hacemos videos que se ven impecables, pero sobre todo <strong>se usan</strong>:
            para comunicar mejor, posicionar marca, fortalecer cultura interna y apoyar objetivos comerciales.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-xs">
            <span className="badge">Selección Oficial · Sitges 2014</span>
            <span className="badge">Selección Oficial · Buenos Aires Rojo Sangre 2014</span>
            <span className="badge">+5.000.000 visualizaciones</span>
            <span className="badge">10+ años produciendo para marcas</span>
          </div>

          {/* CTA quick */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contacto#form" className="btn" data-cta="about_form">
              Cotizar (sin llamada) →
            </Link>
            <Link href="/portafolio" className="btn-outline" data-cta="about_portfolio">
              Ver portafolio →
            </Link>
            <Link href="/servicios#planes" className="btn-outline" data-cta="about_plans">
              Ver planes mensuales →
            </Link>
          </div>

          <p className="mt-3 text-xs text-white/50">
            Trabajamos con alcance claro, revisiones acotadas y entregas por hitos. Si necesitas propuesta formal (área legal/compras),
            también la armamos.
          </p>
        </header>

        {/* PARA QUIÉN / CÓMO TRABAJAMOS */}
        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
            <h2 className="text-lg font-semibold text-white">Para quién trabajamos</h2>
            <p className="text-white/70 mt-2 text-sm">
              Equipos que necesitan producción seria, plazos claros y piezas listas para distintos canales.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Marketing y comunicaciones</li>
              <li>• Comunicación interna / RR.HH. / cultura</li>
              <li>• Directorios, gerencias y áreas institucionales</li>
              <li>• Bancos, cámaras, colegios, servicios y empresas B2B</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900 border border-white/10">
            <h2 className="text-lg font-semibold text-white">Qué nos diferencia</h2>
            <p className="text-white/70 mt-2 text-sm">
              No hacemos “videos sueltos”: construimos un sistema de contenido que tu equipo puede sostener.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>• Guion/pauta y dirección para que el mensaje salga claro y natural</li>
              <li>• Audio limpio + imagen cuidada (estándar cinematográfico aplicado a lo corporativo)</li>
              <li>• Entregas por plataforma (LinkedIn / YouTube / vertical / intranet)</li>
              <li>• Proceso ordenado: brief → guion → rodaje → edición → revisión → entrega</li>
            </ul>
          </div>
        </section>

        {/* IMAGEN 1 */}
        <div className="my-10">
          <Image
            src="/qs_dekaelo_3.png"
            alt="Primera etapa de Dekaelo Media en el cine independiente"
            width={1200}
            height={700}
            className="rounded-3xl border border-white/10 object-cover"
            priority
          />
          <p className="text-sm text-white/50 mt-2">
            Nuestros inicios en el cine independiente: narrativa, rodaje y dirección con estándares exigentes.
          </p>
        </div>

        {/* ORIGEN (CINE) PERO ORIENTADO A RESULTADO */}
        <section className="mt-8">
          <h2 className="text-xl md:text-2xl font-extrabold text-white">De la narrativa cinematográfica al estándar corporativo</h2>

          <p className="p mt-4">
            Nacimos en el cine con la película <strong>“Yokai”</strong>, seleccionada oficialmente en
            <strong> Sitges</strong> y en <strong>Buenos Aires Rojo Sangre</strong> (2014). Esa escuela nos dejó lo más valioso:
            estructura, ritmo, dirección y atención al detalle.
          </p>

          <p className="p mt-4">
            Con el tiempo ampliamos el espectro: spots, tutoriales con millones de visualizaciones, documentales y piezas
            pensadas para marcas. Hoy traducimos esa experiencia a un formato que el mundo corporativo necesita:
            <strong> claridad</strong>, <strong>plazos</strong> y <strong>material reutilizable</strong>.
          </p>

          <div className="my-10 grid md:grid-cols-2 gap-6">
            <Image
              src="/qs_dekaelo_4.png"
              alt="Rodaje de la película Yokai"
              width={600}
              height={400}
              className="rounded-2xl border border-white/10 object-cover"
            />
            <Image
              src="/qs_dekaelo_1.png"
              alt="Producción para marcas"
              width={600}
              height={400}
              className="rounded-2xl border border-white/10 object-cover"
            />
          </div>
        </section>

        {/* EXPERIENCIA + CORPORATIVO */}
        <section className="mt-8">
          <h2 className="text-xl md:text-2xl font-extrabold text-white">Experiencia real en piezas que se usan</h2>

          <p className="p mt-4">
            En más de <strong>10 años</strong> acumulamos +<strong>5.000.000 de visualizaciones</strong> en proyectos propios y de clientes.
            Ese recorrido nos llevó a trabajar con bancos, cámaras empresariales, colegios, empresas de servicios y pymes
            que necesitaban elevar su comunicación audiovisual.
          </p>

          <p className="p mt-4">
            Entendemos el lenguaje del mundo corporativo: directorios, gerencias y equipos de marketing/comunicaciones
            que requieren producción seria, revisiones acotadas y entregables listos para convivir en
            <strong> LinkedIn</strong>, <strong>YouTube</strong>, <strong>intranet</strong>, presentaciones y eventos.
          </p>

          <div className="my-10">
            <Image
              src="/qs_dekaelo_2.png"
              alt="Rodajes documentales y corporativos"
              width={1200}
              height={700}
              className="rounded-3xl border border-white/10 object-cover"
            />
            <p className="text-sm text-white/50 mt-2">
              Rodajes corporativos y documentales en distintos contextos: adaptabilidad sin perder estándar.
            </p>
          </div>
        </section>

        {/* 2023 + PLAN MENSUAL */}
        <section className="mt-8">
          <h2 className="text-xl md:text-2xl font-extrabold text-white">Dekaelo Media hoy</h2>

          <p className="p mt-4">
            En <strong>2023</strong> consolidamos Dekaelo Media para llevar ese recorrido a un modelo que las empresas realmente
            pueden sostener: <strong>planes mensuales</strong> y proyectos puntuales con alcance claro.
          </p>

          <p className="p mt-4">
            Nuestro objetivo es simple: que el video deje de ser un pendiente y se convierta en una herramienta estable.
            Nosotros nos encargamos del proceso completo (pauta/guion, rodaje, post y entregas).
            Tu equipo solo valida y aprueba.
          </p>
        </section>

        {/* CTA FINAL */}
        <section className="mt-12 p-8 md:p-10 rounded-3xl bg-black/60 border border-white/10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">¿Hacemos tu video (o tu plan mensual)?</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Envíanos objetivo, fecha, ciudad y referencias. Respondemos con propuesta clara (alcance, valor estimado, cronograma y próximos pasos).
          </p>

          <div className="mt-7 flex justify-center gap-3 flex-wrap">
            <Link href="/contacto#form" className="btn" data-cta="about_final_form">
              Cotizar (sin llamada) →
            </Link>
            <Link href="/servicios#planes" className="btn-outline" data-cta="about_final_plans">
              Ver planes →
            </Link>
            <Link href="/portafolio" className="btn-outline" data-cta="about_final_portfolio">
              Ver ejemplos →
            </Link>
          </div>

          <p className="mt-4 text-xs text-white/50">
            *Valores referenciales IVA incluido. Alcance definitivo se confirma en propuesta formal según calendario, locación y entregables.
          </p>
        </section>
      </div>
    </section>
  );
}
