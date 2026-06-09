import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const waLink =
  "https://wa.me/56920080031?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto%20con%20Dekaelo%20Media.%0A%0AEmpresa%3A%0AQue%20necesito%3A%0AFecha%20tentativa%3A%0A%0AGracias";

export const metadata: Metadata = {
  title: "Chile 2030 | Nuestra Visión | Dekaelo Media",
  description:
    "Una reflexión sobre el futuro de Chile, las organizaciones y la transformación de las comunicaciones durante la próxima década.",
  alternates: {
    canonical: "https://www.dekaelomedia.com/vision-chile-2030",
  },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
      {children}
    </p>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10 py-24 md:py-32">
      <div className="container max-w-4xl">
        <Eyebrow>{eyebrow}</Eyebrow>

        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-white/60">
          {children}
        </div>
      </div>
    </section>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-t border-white/10 py-28 md:py-40">
      <div className="container max-w-5xl">
        <p className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
          {children}
        </p>
      </div>
    </section>
  );
}

export default function VisionChile2030Page() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      {/* HERO */}

      <section className="container max-w-5xl pt-32 pb-24 md:pt-44 md:pb-36">
        <Eyebrow>Nuestra visión</Eyebrow>

        <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
          Chile 2030
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/55 md:text-2xl">
          Una década decisiva.
        </p>

        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-white/55">
          Creemos que durante los próximos años Chile enfrentará una oportunidad
          histórica. La inteligencia artificial, la transición energética, la
          competencia global por talento y conocimiento, y el creciente
          protagonismo de Asia-Pacífico redefinirán la posición del país en el
          mundo.
        </p>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/55">
          La pregunta no es si estos cambios ocurrirán.
        </p>

        <p className="mt-2 max-w-3xl text-lg leading-relaxed text-white">
          La pregunta es cómo decidiremos enfrentarlos.
        </p>
      </section>

      {/* QUOTE */}

      <Quote>
        Las organizaciones más relevantes de la próxima década no serán
        necesariamente las más grandes.
        <br />
        <span className="text-white/35">
          Serán aquellas capaces de generar confianza.
        </span>
      </Quote>

      {/* CONTEXTO */}

      <Section
        eyebrow="El contexto"
        title="El mundo está cambiando más rápido de lo que pensamos"
      >
        <p>
          Durante gran parte de las últimas décadas Chile operó dentro de un
          entorno relativamente estable. Los mercados internacionales crecían,
          las reglas parecían claras y la globalización avanzaba de forma
          constante.
        </p>

        <p>
          Ese escenario está cambiando. La inteligencia artificial transforma
          industrias completas. La automatización redefine el trabajo. Las
          tensiones geopolíticas modifican cadenas de suministro y relaciones
          internacionales. La competencia por talento, inversión y conocimiento
          se intensifica.
        </p>

        <p>
          El futuro ya no pertenece únicamente a quienes poseen recursos.
          Pertenece a quienes son capaces de adaptarse más rápido.
        </p>
      </Section>

      {/* CHILE */}

      <Section
        eyebrow="Chile"
        title="Un país pequeño frente a una oportunidad histórica"
      >
        <p>
          Chile posee ventajas extraordinarias para enfrentar las próximas
          décadas.
        </p>

        <p>
  Nuestra posición en el Pacífico. La conexión natural con
  Asia-Pacífico. La capacidad de generar energía limpia a gran escala.
  El potencial científico y tecnológico de nuestras universidades y
  centros de investigación. La fortaleza de industrias estratégicas
  para la economía global. La capacidad de atraer talento, inversión y
  conocimiento.
</p>

<p>
  Chile posee ventajas que pocos países de su tamaño tienen al mismo
  tiempo.
</p>

        <p>
          Los países que prosperarán durante los próximos años serán aquellos
          capaces de transformar sus capacidades en innovación, conocimiento,
          influencia y confianza.
        </p>
      </Section>

      {/* CONFIANZA */}

      <Section
        eyebrow="Confianza"
        title="La nueva economía de la confianza"
      >
        <p>
          Durante décadas las organizaciones compitieron principalmente por
          capital, infraestructura y escala.
        </p>

        <p>
          Durante la próxima década competirán también por algo mucho más
          difícil de construir.
        </p>

        <p className="text-white text-xl">
          Credibilidad. Reputación. Influencia. Confianza.
        </p>

        <p>
          La inteligencia artificial generará cantidades prácticamente
          ilimitadas de contenido. La información será abundante. La atención
          seguirá siendo escasa.
        </p>

        <p>
          La confianza se convertirá en uno de los activos más valiosos para
          cualquier organización, institución o territorio.
        </p>
      </Section>

      {/* MEDIOS */}

<Section
  eyebrow="La transformación"
  title="Las organizaciones del futuro construirán sus propios canales de comunicación"
>
  <p>
    Durante gran parte del siglo XX las organizaciones dependieron de
    terceros para comunicar.
  </p>

  <p>
    Dependían de medios tradicionales, campañas publicitarias, acciones
    puntuales de marketing o comunicados esporádicos.
  </p>

  <p>
    Ese modelo está evolucionando.
  </p>

  <p>
    Las organizaciones más relevantes de la próxima década no solo
    comunicarán cuando tengan algo que anunciar. Construirán canales
    propios, compartirán conocimiento y mantendrán conversaciones
    permanentes con sus audiencias.
  </p>

  <p>
    Algunas ya están avanzando en esa dirección. Desarrollan series
    documentales, producen vodcasts, generan contenido educativo,
    construyen comunidades y crean espacios de conversación para
    clientes, colaboradores, inversionistas y audiencias
    internacionales.
  </p>

  <p>
    Ya no competirán únicamente por clientes. También competirán por
    atención, confianza y relevancia.
  </p>

  <p className="text-white">
    Comunicarán de forma más frecuente, directa y continua.
  </p>

  <p className="text-white">
    La comunicación dejará de ser un evento puntual para transformarse
    en una capacidad estratégica.
  </p>
</Section>

      {/* INFRAESTRUCTURA */}

      <Section
        eyebrow="Contenido"
        title="El contenido dejará de ser marketing"
      >
        <p className="text-white text-2xl">
          Se transformará en infraestructura.
        </p>

        <p>
          Así como las organizaciones invierten en tecnología, talento o
          infraestructura física, durante la próxima década invertirán cada vez
          más en infraestructura de comunicación.
        </p>

        <p>
  Bibliotecas audiovisuales. Series documentales. Vodcasts
  corporativos. Comunicación interna. Contenido multilingüe.
  Formación digital. Transferencia de conocimiento. Plataformas
  impulsadas por inteligencia artificial.
</p>

        <p>
  El contenido dejará de ser un gasto de marketing para transformarse
  en un activo estratégico de largo plazo.
</p>

<p>
  Las próximas décadas también exigirán nuevos liderazgos, capaces de
  comunicar con transparencia, construir confianza y movilizar
  conocimiento.
</p>
      </Section>

      {/* HISTORIAS */}

      <Section
        eyebrow="Chile"
        title="Chile tiene más historias de las que cuenta"
      >
        <p>
          Todos los días se desarrollan proyectos extraordinarios en distintos
          rincones del país.
        </p>

        <p>
          Innovación tecnológica. Investigación científica. Desarrollo
          territorial. Energía. Minería. Educación. Emprendimiento. Cultura.
        </p>

        <p>
          Sin embargo, gran parte de ese valor permanece invisible.
        </p>

        <p>
          Muchas organizaciones generan impacto sin compartir sus aprendizajes.
          Desarrollan conocimiento sin proyectarlo. Construyen futuro sin
          contarlo.
        </p>

        <p className="text-white text-xl">
          Chile no tiene un problema de talento.
        </p>

        <p className="text-white text-xl">
          Tiene un problema de visibilidad.
        </p>
      </Section>

      {/* CONVICCION */}

      <Quote>
        Una mejor comunicación contribuye a organizaciones más fuertes.
        <br />
        <span className="text-white/35">
          Organizaciones más fuertes contribuyen a un país más competitivo.
        </span>
      </Quote>

      <Section
        eyebrow="Nuestra convicción"
        title="Por qué existe Dekaelo Media"
      >
        <p>
          Creemos que comunicar no consiste únicamente en transmitir
          información.
        </p>

        <p>
          Comunicar consiste en generar entendimiento. Compartir conocimiento.
          Construir confianza. Impulsar conversaciones relevantes.
        </p>

        <p>
          Nuestro trabajo consiste en ayudar a organizaciones, instituciones y
          líderes a transformar experiencia en contenido, conocimiento en
          conversación y propósito en conexión.
        </p>

        <p>
          Porque creemos que las historias correctas pueden acercar personas,
          fortalecer organizaciones, impulsar territorios y abrir nuevas
          oportunidades.
        </p>
      </Section>

      {/* CIERRE */}

      <section className="border-t border-white/10 py-32 md:py-44">
        <div className="container max-w-5xl">
          <Eyebrow>Mirando hacia adelante</Eyebrow>

         <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-7xl">
  El futuro no pertenece a quienes tienen más información.
</h2>

<h3 className="mt-6 text-3xl font-semibold leading-tight text-white/35 md:text-6xl">
  Pertenece a quienes son capaces de transformarla en conocimiento,
  confianza y valor compartido.
</h3>
        </div>
      </section>

      {/* CTA */}

      <section className="border-t border-white/10 py-28">
        <div className="container max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Construyendo conversaciones para la próxima década
          </div>

          <h2 className="text-3xl font-semibold md:text-5xl">
            Conversemos
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/50 leading-relaxed">
            Si tu organización busca construir relevancia, confianza y una voz
            propia para los próximos años, conversemos.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white px-10 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Escribir por WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-10 py-4 text-sm text-white/55 transition hover:bg-white/10 hover:text-white"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
