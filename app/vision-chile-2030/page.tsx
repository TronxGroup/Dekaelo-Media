import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Chile 2030 | Nuestra Visión | Dekaelo Media",
  description:
    "Una reflexión de Dekaelo Media sobre el futuro de Chile, las organizaciones y la transformación de las comunicaciones durante la próxima década.",
  alternates: {
    canonical: "https://www.dekaelomedia.com/vision-chile-2030",
  },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
      {children}
    </p>
  );
}

function Number({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`text-[10px] uppercase tracking-[0.2em] text-white/25 ${className}`}
    >
      {children}
    </span>
  );
}

export default function VisionChile2030Page() {
  return (
    <main className="bg-[#050505] text-white selection:bg-white selection:text-black">

      {/* =====================================================
    HERO
====================================================== */}

<section className="relative min-h-[92vh] overflow-hidden border-b border-white/10 px-5 pt-40 md:px-10 md:pt-48">

  {/* FOTO DE FONDO */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/BG_Servicios_Chile.jpg')",
    }}
  />

  {/* OVERLAY OSCURO */}
  <div className="absolute inset-0 bg-black/60" />

  {/* DEGRADADO INFERIOR */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/30 to-[#050505]" />


  {/* CONTENIDO */}
  <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-between">

    <div>

      <Eyebrow>Nuestra visión</Eyebrow>

      <h1 className="mt-7 max-w-7xl text-[clamp(4.5rem,13vw,13rem)] font-medium leading-[0.78] tracking-[-0.075em]">

        Chile
        <br />

        <span className="text-white/35">
          2030
        </span>

      </h1>

    </div>


    <div className="mt-20 grid gap-12 pb-16 md:grid-cols-12 md:items-end">

      <div className="md:col-span-7">

        <p className="max-w-3xl text-[clamp(1.5rem,3vw,2.7rem)] leading-[1.05] tracking-[-0.035em] text-white/85">
          Una década decisiva.
        </p>

      </div>


      <div className="md:col-span-5">

        <p className="max-w-lg text-sm leading-relaxed text-white/65 md:text-base">
          Una reflexión sobre el futuro de Chile, las organizaciones y
          la transformación de las comunicaciones durante la próxima
          década.
        </p>

      </div>

    </div>


    {/* INDICADOR */}
    <div className="absolute bottom-8 right-0 hidden md:block">
      <ArrowDownRight className="h-8 w-8 text-white/40" />
    </div>

  </div>

</section>


      {/* =====================================================
          APERTURA
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-12">

            <div className="md:col-span-4">
              <Eyebrow>El punto de partida</Eyebrow>
            </div>

            <div className="md:col-span-8">

              <p className="max-w-5xl text-[clamp(2rem,4.5vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.055em]">
                El mundo está cambiando.
                <br />
                <span className="text-white/30">
                  Chile también tendrá que hacerlo.
                </span>
              </p>

              <div className="mt-14 max-w-3xl space-y-6 text-base leading-relaxed text-white/45 md:text-lg">

                <p>
                  La inteligencia artificial, la transición energética, la
                  competencia global por talento y conocimiento y el creciente
                  protagonismo de Asia-Pacífico están redefiniendo la posición
                  de los países y las organizaciones.
                </p>

                <p>
                  La pregunta no es si estos cambios ocurrirán.
                </p>

                <p className="text-white">
                  La pregunta es cómo decidiremos enfrentarlos.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FRASE
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-28 md:px-10 md:py-44">

        <div className="mx-auto max-w-7xl">

          <Number>01 / Confianza</Number>

          <blockquote className="mt-8 max-w-6xl text-[clamp(2.8rem,7vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            Las organizaciones más relevantes de la próxima década
            <span className="text-white/30">
              {" "}
              no serán necesariamente las más grandes.
            </span>
          </blockquote>

          <p className="mt-12 max-w-3xl text-[clamp(1.5rem,3vw,2.8rem)] leading-[1.05] tracking-[-0.035em] text-white/60">
            Serán aquellas capaces de generar confianza.
          </p>

        </div>
      </section>


      {/* =====================================================
          CONTEXTO
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 md:grid-cols-12">

            <div className="md:col-span-4">

              <Eyebrow>El contexto</Eyebrow>

              <h2 className="mt-6 text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                Más rápido
                <br />
                de lo que
                <br />
                pensamos.
              </h2>

            </div>

            <div className="md:col-span-7 md:col-start-6">

              <div className="space-y-8 text-lg leading-relaxed text-white/45 md:text-xl">

                <p>
                  Durante gran parte de las últimas décadas Chile operó dentro
                  de un entorno relativamente estable. Los mercados
                  internacionales crecían, las reglas parecían claras y la
                  globalización avanzaba de forma constante.
                </p>

                <p>
                  Ese escenario está cambiando.
                </p>

                <p>
                  La inteligencia artificial transforma industrias completas.
                  La automatización redefine el trabajo. Las tensiones
                  geopolíticas modifican cadenas de suministro y relaciones
                  internacionales.
                </p>

                <p>
                  La competencia por talento, inversión y conocimiento se
                  intensifica.
                </p>

                <p className="pt-4 text-white">
                  El futuro ya no pertenece únicamente a quienes poseen
                  recursos.
                </p>

                <p className="text-white/70">
                  Pertenece a quienes son capaces de adaptarse más rápido.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CHILE
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 flex items-end justify-between">

            <div>
              <Number>02 / Chile</Number>

              <h2 className="mt-6 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.86] tracking-[-0.065em]">
                Un país pequeño.
                <br />
                <span className="text-white/30">
                  Una oportunidad histórica.
                </span>
              </h2>
            </div>

          </div>


          <div className="grid gap-10 md:grid-cols-2">

            <div className="border-t border-white/10 pt-8">
              <p className="text-sm uppercase tracking-[0.16em] text-white/30">
                Pacífico
              </p>

              <p className="mt-5 text-lg leading-relaxed text-white/50">
                Nuestra posición geográfica y la conexión natural con
                Asia-Pacífico representan una oportunidad estratégica.
              </p>
            </div>


            <div className="border-t border-white/10 pt-8">
              <p className="text-sm uppercase tracking-[0.16em] text-white/30">
                Energía
              </p>

              <p className="mt-5 text-lg leading-relaxed text-white/50">
                El potencial para generar energía limpia a gran escala puede
                convertirse en una ventaja para las próximas décadas.
              </p>
            </div>


            <div className="border-t border-white/10 pt-8">
              <p className="text-sm uppercase tracking-[0.16em] text-white/30">
                Conocimiento
              </p>

              <p className="mt-5 text-lg leading-relaxed text-white/50">
                Universidades, centros de investigación, talento e industrias
                estratégicas forman parte de una base que puede proyectarse
                hacia nuevos mercados.
              </p>
            </div>


            <div className="border-t border-white/10 pt-8">
              <p className="text-sm uppercase tracking-[0.16em] text-white/30">
                Proyección
              </p>

              <p className="mt-5 text-lg leading-relaxed text-white/50">
                Transformar capacidades en innovación, conocimiento,
                influencia y confianza será parte del desafío.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONFIANZA
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-28 md:px-10 md:py-44">

        <div className="mx-auto max-w-7xl">

          <Eyebrow>La nueva economía</Eyebrow>

          <h2 className="mt-7 max-w-6xl text-[clamp(3rem,8vw,8rem)] font-medium leading-[0.85] tracking-[-0.07em]">
            La confianza
            <br />
            <span className="text-white/30">
              se vuelve un activo.
            </span>
          </h2>


          <div className="mt-20 grid gap-12 md:grid-cols-12">

            <div className="md:col-span-5">

              <p className="text-2xl leading-tight tracking-[-0.03em] text-white/70 md:text-3xl">
                Credibilidad.
                <br />
                Reputación.
                <br />
                Influencia.
                <br />
                <span className="text-white">
                  Confianza.
                </span>
              </p>

            </div>

            <div className="md:col-span-6 md:col-start-7">

              <div className="space-y-7 text-base leading-relaxed text-white/45 md:text-lg">

                <p>
                  Durante décadas las organizaciones compitieron principalmente
                  por capital, infraestructura y escala.
                </p>

                <p>
                  Durante la próxima década competirán también por algo mucho
                  más difícil de construir.
                </p>

                <p>
                  La inteligencia artificial generará cantidades prácticamente
                  ilimitadas de contenido. La información será abundante.
                  La atención seguirá siendo escasa.
                </p>

                <p className="text-white">
                  La confianza se convertirá en uno de los activos más
                  valiosos para cualquier organización, institución o
                  territorio.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          NUEVOS CANALES
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 md:grid-cols-12">

            <div className="md:col-span-5">

              <Eyebrow>La transformación</Eyebrow>

              <h2 className="mt-6 text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                Sus propios
                <br />
                <span className="text-white/30">
                  canales.
                </span>
              </h2>

            </div>

            <div className="md:col-span-7">

              <div className="space-y-8 text-lg leading-relaxed text-white/45 md:text-xl">

                <p>
                  Durante gran parte del siglo XX las organizaciones dependían
                  de terceros para comunicar.
                </p>

                <p>
                  Medios tradicionales, campañas publicitarias, acciones
                  puntuales de marketing o comunicados esporádicos.
                </p>

                <p className="text-white">
                  Ese modelo está evolucionando.
                </p>

                <p>
                  Las organizaciones más relevantes de la próxima década no
                  solo comunicarán cuando tengan algo que anunciar.
                </p>

                <p>
                  Construirán canales propios, compartirán conocimiento y
                  mantendrán conversaciones permanentes con sus audiencias.
                </p>

              </div>

            </div>

          </div>


          <div className="mt-24 grid border-y border-white/10 md:grid-cols-3">

            {[
              "Series documentales",
              "Vodcast corporativo",
              "Contenido educativo",
              "Comunidades",
              "Espacios de conversación",
              "Audiencias internacionales",
            ].map((item, index) => (

              <div
                key={item}
                className="border-b border-white/10 px-6 py-8 last:border-b-0 md:border-r md:last:border-r-0"
              >

                <Number>0{index + 1}</Number>

                <p className="mt-5 text-xl tracking-[-0.02em] text-white/75">
                  {item}
                </p>

              </div>

            ))}

          </div>


          <div className="mt-16 grid gap-8 md:grid-cols-2">

            <p className="text-2xl leading-tight tracking-[-0.03em] text-white/60 md:text-3xl">
              La comunicación dejará de ser un evento puntual.
            </p>

            <p className="text-2xl leading-tight tracking-[-0.03em] text-white md:text-3xl">
              Se transformará en una capacidad estratégica.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTENIDO
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-28 md:px-10 md:py-44">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-12">

            <div className="md:col-span-4">

              <Number>03 / Contenido</Number>

            </div>

            <div className="md:col-span-8">

              <h2 className="text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.86] tracking-[-0.065em]">
                El contenido
                <br />
                dejará de ser
                <br />
                <span className="text-white/30">
                  marketing.
                </span>
              </h2>

              <p className="mt-14 text-[clamp(1.7rem,3vw,3rem)] leading-[1] tracking-[-0.04em] text-white">
                Se transformará en infraestructura.
              </p>

            </div>

          </div>


          <div className="mt-24 grid gap-16 md:grid-cols-12">

            <div className="md:col-span-5">

              <p className="text-sm uppercase tracking-[0.18em] text-white/30">
                Una nueva inversión
              </p>

            </div>

            <div className="md:col-span-7">

              <div className="space-y-7 text-base leading-relaxed text-white/45 md:text-lg">

                <p>
                  Así como las organizaciones invierten en tecnología, talento
                  o infraestructura física, durante la próxima década
                  invertirán cada vez más en infraestructura de comunicación.
                </p>

                <p>
                  Bibliotecas audiovisuales. Series documentales. Vodcasts
                  corporativos. Comunicación interna. Contenido multilingüe.
                  Formación digital. Transferencia de conocimiento.
                </p>

                <p>
                  El contenido dejará de ser un gasto de marketing para
                  transformarse en un activo estratégico de largo plazo.
                </p>

                <p className="text-white">
                  Las próximas décadas también exigirán nuevos liderazgos,
                  capaces de comunicar con transparencia, construir confianza
                  y movilizar conocimiento.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CHILE TIENE HISTORIAS
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-28 md:px-10 md:py-44">

        <div className="mx-auto max-w-7xl">

          <Eyebrow>Chile</Eyebrow>

          <h2 className="mt-7 max-w-6xl text-[clamp(3rem,8vw,8rem)] font-medium leading-[0.85] tracking-[-0.07em]">
            Chile tiene más
            <br />
            historias de las que
            <br />
            <span className="text-white/30">
              cuenta.
            </span>
          </h2>


          <div className="mt-20 grid gap-12 md:grid-cols-12">

            <div className="md:col-span-5">

              <p className="text-2xl leading-tight tracking-[-0.03em] text-white/65 md:text-3xl">
                Todos los días se desarrollan proyectos extraordinarios en
                distintos rincones del país.
              </p>

            </div>

            <div className="md:col-span-6 md:col-start-7">

              <div className="space-y-7 text-base leading-relaxed text-white/45 md:text-lg">

                <p>
                  Innovación tecnológica. Investigación científica. Desarrollo
                  territorial. Energía. Minería. Educación. Emprendimiento.
                  Cultura.
                </p>

                <p>
                  Sin embargo, gran parte de ese valor permanece invisible.
                </p>

                <p>
                  Muchas organizaciones generan impacto sin compartir sus
                  aprendizajes. Desarrollan conocimiento sin proyectarlo.
                  Construyen futuro sin contarlo.
                </p>

              </div>

            </div>

          </div>


          <div className="mt-24 grid gap-6 md:grid-cols-2">

            <div className="border border-white/10 p-8 md:p-12">

              <Number>La oportunidad</Number>

              <p className="mt-8 text-[clamp(2rem,4vw,4rem)] font-medium leading-[0.95] tracking-[-0.05em]">
                Chile no tiene un problema de talento.
              </p>

            </div>

            <div className="border border-white/10 p-8 md:p-12">

              <Number>El desafío</Number>

              <p className="mt-8 text-[clamp(2rem,4vw,4rem)] font-medium leading-[0.95] tracking-[-0.05em] text-white/35">
                Tiene un problema de visibilidad.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONVICCIÓN
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-28 md:px-10 md:py-44">

        <div className="mx-auto max-w-7xl">

          <Number>04 / Nuestra convicción</Number>

          <blockquote className="mt-10 max-w-6xl text-[clamp(2.8rem,7vw,7rem)] font-medium leading-[0.87] tracking-[-0.065em]">
            Una mejor comunicación contribuye a organizaciones más fuertes.
            <br />
            <span className="text-white/30">
              Organizaciones más fuertes contribuyen a un país más competitivo.
            </span>
          </blockquote>

        </div>
      </section>


      {/* =====================================================
          POR QUÉ DEKAELO
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 md:grid-cols-12">

            <div className="md:col-span-5">

              <Eyebrow>Por qué existe Dekaelo Media</Eyebrow>

              <h2 className="mt-6 text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                Transformar
                <br />
                experiencia
                <br />
                <span className="text-white/30">
                  en conexión.
                </span>
              </h2>

            </div>

            <div className="md:col-span-7">

              <div className="space-y-8 text-lg leading-relaxed text-white/45 md:text-xl">

                <p>
                  Creemos que comunicar no consiste únicamente en transmitir
                  información.
                </p>

                <p>
                  Comunicar consiste en generar entendimiento. Compartir
                  conocimiento. Construir confianza. Impulsar conversaciones
                  relevantes.
                </p>

                <p>
                  Nuestro trabajo consiste en ayudar a organizaciones,
                  instituciones y líderes a transformar experiencia en
                  contenido, conocimiento en conversación y propósito en
                  conexión.
                </p>

                <p className="text-white">
                  Porque creemos que las historias correctas pueden acercar
                  personas, fortalecer organizaciones, impulsar territorios y
                  abrir nuevas oportunidades.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CIERRE
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-32 md:px-10 md:py-52">

        <div className="mx-auto max-w-7xl">

          <Eyebrow>Mirando hacia adelante</Eyebrow>

          <h2 className="mt-8 max-w-6xl text-[clamp(3rem,8vw,8rem)] font-medium leading-[0.84] tracking-[-0.07em]">
            El futuro no pertenece a quienes tienen más información.
          </h2>

          <p className="mt-10 max-w-5xl text-[clamp(2rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.055em] text-white/25">
            Pertenece a quienes son capaces de transformarla en conocimiento,
            confianza y valor compartido.
          </p>

        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-5 py-28 md:px-10 md:py-40">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-12 md:items-end">

            <div className="md:col-span-8">

              <Eyebrow>Construyendo conversaciones para la próxima década</Eyebrow>

              <h2 className="mt-7 text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.84] tracking-[-0.07em]">
                Conversemos.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
                Si tu organización busca construir relevancia, confianza y
                una voz propia para los próximos años, conversemos.
              </p>

            </div>


            <div className="md:col-span-4 md:flex md:justify-end">

              <Link
                href="/#contacto"
                className="group inline-flex items-center gap-5 text-sm uppercase tracking-[0.18em]"
              >
                Hablemos

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition group-hover:border-[#f51b24] group-hover:bg-[#f51b24]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
