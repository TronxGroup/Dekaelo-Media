import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const waLink =
  "https://wa.me/56920080031?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto%20con%20Dekaelo%20Media.%0A%0AEmpresa%3A%0AQue%20necesito%3A%0AFecha%20tentativa%3A%0A%0AGracias";

export const metadata: Metadata = {
  title: "Nuestra Visión para Chile 2030 | Dekaelo Media",
  description:
    "Una reflexión sobre los desafíos, oportunidades y transformaciones que definirán la próxima década para Chile y las organizaciones que buscan construir relevancia en un mundo cada vez más competitivo.",
  alternates: {
    canonical: "https://www.dekaelomedia.com/vision-chile-2030",
  },
};

function Eyebrow(props: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
      {props.children}
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
    <section className="border-t border-white/10 py-24">
      <div className="container max-w-4xl">
        <Eyebrow>{eyebrow}</Eyebrow>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>

        <div className="mt-8 space-y-6 text-white/60 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function VisionChile2030Page() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      {/* HERO */}
      <section className="container max-w-4xl pt-28 pb-20 md:pt-36 md:pb-28">
        <Eyebrow>Nuestra visión</Eyebrow>

        <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Chile 2030
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/55 md:text-xl">
          Una reflexión sobre los desafíos, oportunidades y transformaciones
          que definirán la próxima década para Chile y las organizaciones que
          buscan construir relevancia en un mundo cada vez más competitivo.
        </p>
      </section>

      {/* INTRO */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-4xl">
          <p className="text-2xl font-medium leading-relaxed text-white/90 md:text-3xl">
            Creemos que Chile enfrenta una de las décadas más importantes de su
            historia reciente.
          </p>

          <p className="mt-8 text-lg leading-relaxed text-white/60">
            Los cambios que estamos observando no son aislados. Son parte de una
            transformación global que está redefiniendo la forma en que los
            países compiten, colaboran y construyen su futuro.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-white/60">
            La inteligencia artificial, la transición energética, la
            automatización, el desarrollo científico, la competencia por talento
            y la creciente importancia del conocimiento están modificando las
            reglas del juego para gobiernos, empresas, instituciones y
            territorios.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Frente a este escenario, la pregunta ya no es solamente cómo crecer.
            La pregunta es cómo construir relevancia.
          </p>
        </div>
      </section>

      {/* CONTEXTO */}
      <Section
        eyebrow="El contexto"
        title="El mundo está cambiando más rápido de lo que pensamos"
      >
        <p>
          Durante gran parte de las últimas décadas, Chile operó dentro de un
          sistema relativamente estable. La globalización avanzaba, las cadenas
          de suministro funcionaban con normalidad y las reglas del comercio
          internacional parecían relativamente claras.
        </p>

        <p>
          Hoy vivimos una realidad distinta. Las tensiones geopolíticas, el
          avance tecnológico, la transformación de los mercados laborales y la
          creciente competencia global están redefiniendo el entorno en el que
          operan las organizaciones.
        </p>

        <p>
          Las decisiones que antes podían planificarse a diez años hoy deben
          revisarse constantemente. La velocidad del cambio se ha convertido en
          un factor estratégico.
        </p>
      </Section>

      {/* CHILE */}
      <Section
        eyebrow="Chile"
        title="Un país pequeño frente a una oportunidad histórica"
      >
        <p>
          Chile posee condiciones excepcionales para enfrentar las próximas
          décadas.
        </p>

        <p>
          Nuestra posición estratégica en el Pacífico. La cercanía con la
          Antártica. El liderazgo en energías renovables. Los minerales críticos
          para la transición energética global. La capacidad de vincular América
          Latina con Asia. El talento de nuestras universidades, centros de
          investigación, empresas y emprendedores.
        </p>

        <p>
          Sin embargo, ninguna ventaja es permanente. Las oportunidades
          históricas no permanecen abiertas para siempre.
        </p>

        <p>
          Los países que prosperarán durante los próximos años serán aquellos
          capaces de transformar sus capacidades en conocimiento, innovación,
          influencia y confianza.
        </p>
      </Section>

      {/* CONFIANZA */}
      <Section
        eyebrow="Confianza"
        title="El recurso más escaso de la próxima década"
      >
        <p>
          La inteligencia artificial producirá cantidades prácticamente
          ilimitadas de contenido.
        </p>

        <p>
          La información será abundante. La atención seguirá siendo limitada.
        </p>

        <p>
          En ese escenario, la confianza se transformará en uno de los activos
          más valiosos para cualquier organización, institución o territorio.
        </p>

        <p>
          Las personas buscarán referentes creíbles. Las comunidades buscarán
          liderazgo. Los mercados buscarán estabilidad. Los inversionistas
          buscarán señales claras sobre el futuro.
        </p>

        <p>
          La confianza no se construye mediante volumen. Se construye mediante
          consistencia, conocimiento y capacidad de generar conversaciones
          significativas.
        </p>
      </Section>

      {/* VISIBILIDAD */}
      <Section
        eyebrow="Visibilidad"
        title="Chile tiene más historias de las que cuenta"
      >
        <p>
          Todos los días se desarrollan proyectos extraordinarios en distintos
          lugares del país.
        </p>

        <p>
          Innovación tecnológica. Investigación científica. Desarrollo
          territorial. Emprendimiento. Cultura. Educación. Energía. Industria.
        </p>

        <p>
          Sin embargo, gran parte de ese valor permanece invisible.
        </p>

        <p>
          Muchas organizaciones generan impacto sin contar sus historias.
          Construyen conocimiento sin compartirlo. Desarrollan soluciones sin
          proyectarlas hacia audiencias más amplias.
        </p>

        <p>
          Creemos que Chile tiene mucho más que mostrar de lo que actualmente
          muestra. Mucho más que aportar de lo que actualmente comunica.
        </p>
      </Section>

      {/* RELEVANCIA */}
      <Section
        eyebrow="2030"
        title="La próxima década será una competencia por relevancia"
      >
        <p>
          Durante gran parte del siglo XX las organizaciones competían
          principalmente por infraestructura, capital y escala.
        </p>

        <p>
          Durante las próximas décadas competirán también por credibilidad,
          reputación, influencia y capacidad de inspirar.
        </p>

        <p>
          Competirán por atraer talento. Por generar confianza. Por construir
          comunidades. Por proyectar una visión clara sobre el futuro.
        </p>

        <p>
          Las organizaciones más relevantes no serán necesariamente las más
          grandes. Serán aquellas capaces de explicar quiénes son, qué aportan y
          por qué importan.
        </p>
      </Section>

      {/* CONVICCIÓN */}
      <Section
        eyebrow="Nuestra convicción"
        title="Una mejor comunicación contribuye a un mejor país"
      >
        <p>
          En Dekaelo Media creemos que comunicar no consiste únicamente en
          transmitir información.
        </p>

        <p>
          Comunicar consiste en generar entendimiento. Compartir conocimiento.
          Construir confianza. Impulsar conversaciones relevantes.
        </p>

        <p>
          Creemos que las organizaciones que fortalecen su capacidad de
          comunicar fortalecen también su capacidad de liderar.
        </p>

        <p>
          Y creemos que una sociedad donde las buenas ideas encuentran espacios
          para ser escuchadas es una sociedad mejor preparada para enfrentar los
          desafíos del futuro.
        </p>

        <p>
          Nuestro trabajo consiste en ayudar a transformar experiencia en
          contenido, conocimiento en conversación y propósito en conexión.
        </p>
      </Section>

      {/* CIERRE */}
      <section className="border-t border-white/10 py-28">
        <div className="container max-w-4xl">
          <Eyebrow>Mirando hacia adelante</Eyebrow>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Las próximas décadas estarán definidas por quienes sean capaces de
            generar confianza, compartir conocimiento y proyectar una visión
            clara sobre el mundo que quieren construir.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/55">
            En Dekaelo Media creemos que esa conversación ya comenzó.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-28">
        <div className="container max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Construyendo conversaciones para la próxima década
          </div>

          <h2 className="text-3xl font-semibold md:text-4xl">
            Conversemos sobre tu proyecto
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

          <p className="mt-6 text-xs text-white/25">
            Respuesta el mismo día hábil. Sin compromiso.
          </p>
        </div>
      </section>
    </main>
  );
}
