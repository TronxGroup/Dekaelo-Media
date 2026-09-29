import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros - Dekaelo Media",
  description:
    "Dekaelo Media es una productora audiovisual chilena. Desde 2013 desarrollamos formatos, producimos contenido y contamos historias para empresas, marcas y audiencias.",
  alternates: {
    canonical: "https://www.dekaelomedia.com/quienes-somos",
  },
};

const milestones = [
  {
    year: "2013–2015",
    title: "El comienzo",
    text: "Iniciamos nuestro recorrido en producción audiovisual con Yokai, largometraje seleccionado en Sitges Film Festival y Buenos Aires Rojo Sangre. Durante estos primeros años desarrollamos piezas comerciales y contenido digital para clientes como Editorial Televisa Chile, Hasbro, Agencia Pixelia —con proyectos para Quaker y Kodak—, Oximixo y Gran Logia de Chile. En esta etapa también alcanzamos más de 3.8M de visualizaciones orgánicas en YouTube.",
  },
  {
    year: "2016–2020",
    title: "Producción corporativa",
    text: "Producción y postproducción para empresas de industria, tecnología y educación. Desarrollo de contenido corporativo y postproducción para Ripley. Algunos clientes de la época fueron Grupo KGHM Chile, Trewhela's School, Acmanet, Molinera San Cristóbal, iCity Chile, Inducom, U-Payments, Tapp, Exploflex y Coesam.",
  },
  {
    year: "2020–2021",
    title: "Pausa",
    text: "El 11 de marzo de 2020, con la llegada de la pandemia, se interrumpieron la actividad presencial y la producción audiovisual, dando paso a una etapa de pausa.",
  },
  {
    year: "2022–2023",
    title: "Nuevos formatos",
    text: "Retomamos progresivamente la producción audiovisual con nuevas series de contenido para la Cámara de Comercio Asia Pacífico y el desarrollo y ejecución de formato para iGromi.",
  },
  {
    year: "2023–2026",
    title: "Formatos, vodcast y nuevos proyectos",
    text: "Desarrollo y producción de nuevos formatos audiovisuales, incluyendo Fútbol y Parrilla, cuyo primer episodio alcanza 160K vistas, y producción continua del vodcast institucional de BICECORP desde 2024. En 2026 se suma Lolosaurios, formato editorial de conversación y entretenimiento producido por Dekaelo Media desde junio. Durante este período también se desarrolla y consolida Tronx Media con Reality Day, serie documental original.",
  },
];
const capabilities = [
  {
    number: "01",
    title: "Formatos",
    text: "Vodcast, entrevistas, programas, series, conversación y contenido editorial.",
  },
  {
    number: "02",
    title: "Producción",
    text: "Preproducción, dirección, rodaje, realización y producción audiovisual.",
  },
  {
    number: "03",
    title: "Contenido corporativo",
    text: "Comunicación interna, institucional, capacitación, cultura y marca.",
  },
  {
    number: "04",
    title: "Postproducción",
    text: "Edición, color, sonido, motion graphics y versiones para distintas plataformas.",
  },
];

const values = [
  {
    number: "01",
    title: "Claridad antes que estética",
    text: "Si no se entiende, no sirve. El mensaje define el video.",
  },
  {
    number: "02",
    title: "Alcance definido desde el inicio",
    text: "Todo queda claro antes de comenzar. Sin ambigüedad.",
  },
  {
    number: "03",
    title: "Entrega funcional",
    text: "Cada pieza se entrega pensando en su uso real.",
  },
  {
    number: "04",
    title: "Procesos ordenados",
    text: "Plazos claros, comunicación directa y producción organizada.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
      {children}
    </p>
  );
}

export default function QuienesSomosPage() {
  return (
    <main className="bg-[#050505] text-white selection:bg-white selection:text-black">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7">

          <Link href="/" aria-label="Dekaelo Media">
            <Image
              src="/dekaelo-logo.png"
              alt="Dekaelo Media"
              width={220}
              height={80}
              priority
              className="h-auto w-[135px] md:w-[165px]"
            />
          </Link>

          <nav className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] md:gap-10 md:text-[11px]">

            <Link
              href="/#proyectos"
              className="text-white/75 transition hover:text-white"
            >
              Proyectos
            </Link>

            <Link
              href="/quienes-somos"
              className="text-white"
            >
              Nosotros
            </Link>

            <Link
              href="/#capacidades"
              className="hidden text-white/75 transition hover:text-white sm:block"
            >
              Capacidades
            </Link>

            <Link
              href="/#contacto"
              className="text-white/75 transition hover:text-white"
            >
              Contacto
            </Link>

          </nav>

        </div>
      </header>


      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="border-b border-white/10 px-5 pb-24 pt-40 md:px-10 md:pb-36 md:pt-52">

        <div className="mx-auto max-w-7xl">

          <Eyebrow>Nosotros</Eyebrow>

          <div className="mt-6 grid gap-12 md:grid-cols-12 md:items-end">

            <div className="md:col-span-9">

              <h1 className="max-w-6xl text-[clamp(3.2rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">

                Empezamos
                <br />
                contando historias.
                <br />

                <span className="text-white/35">
                  Hoy desarrollamos formatos.
                </span>

              </h1>

            </div>

            <div className="md:col-span-3">

              <p className="text-sm leading-relaxed text-white/45 md:text-base">
                Dekaelo Media es una productora audiovisual chilena que
                desarrolla, produce y postproduce contenido para empresas,
                marcas y audiencias.
              </p>

              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-white/25">
                Desde 2013
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ORIGEN
      ====================================================== */}

      <section className="px-5 py-24 md:px-10 md:py-40">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 md:grid-cols-12 md:items-center">

            <div className="md:col-span-5">

              <Eyebrow>El origen</Eyebrow>

              <h2 className="mt-6 text-[clamp(2.7rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">

                Antes que una
                <br />
                productora,
                <br />

                <span className="text-white/35">
                  fuimos cine.
                </span>

              </h2>

            </div>


            <div className="md:col-span-7">

              <p className="text-xl leading-relaxed text-white/60 md:text-2xl">

                En 2013 comenzamos nuestro recorrido con{" "}
                <span className="text-white">Yokai</span>, largometraje
                seleccionado en Sitges Film Festival y Buenos Aires Rojo
                Sangre.

              </p>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">

                Ese origen marcó nuestra manera de entender la producción
                audiovisual: narrativa, ritmo, intención visual y una mirada
                propia.

              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">

                Hoy aplicamos esa misma forma de trabajar al contenido
                corporativo, los formatos editoriales y la producción
                audiovisual para empresas.

              </p>

            </div>

          </div>


          <div className="mt-20 md:mt-28">

            <Image
              src="/qs_dekaelo_3.png"
              alt="Rodaje Dekaelo Media"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          TRAYECTORIA
      ====================================================== */}

      <section className="border-y border-white/10 px-5 py-24 md:px-10 md:py-40">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-12">

            <div className="md:col-span-4">

              <Eyebrow>Trayectoria</Eyebrow>

              <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">

                El trabajo
                <br />

                <span className="text-white/35">
                  habla.
                </span>

              </h2>

            </div>


            <div className="md:col-span-8">

              {milestones.map((milestone, index) => (

                <div
                  key={`${milestone.year}-${milestone.title}`}
                  className={`grid grid-cols-[85px_1fr] gap-6 py-8 md:grid-cols-[120px_1fr] md:gap-10 ${
                    index !== milestones.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >

                  <p className="pt-1 text-sm font-medium text-white/25">
                    {milestone.year}
                  </p>

                  <div>

                    <h3 className="text-xl font-medium md:text-2xl">
                      {milestone.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/45 md:text-base">
                      {milestone.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DEKAELO HOY
      ====================================================== */}

      <section className="px-5 py-28 md:px-10 md:py-44">

        <div className="mx-auto max-w-7xl">

          <Eyebrow>Dekaelo hoy</Eyebrow>

          <div className="mt-6 grid gap-12 md:grid-cols-12 md:items-end">

            <div className="md:col-span-8">

              <h2 className="text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.065em]">

                Una productora.
                <br />

                <span className="text-white/35">
                  Distintos mundos.
                </span>

              </h2>

            </div>

            <div className="md:col-span-4">

              <p className="text-base leading-relaxed text-white/45 md:text-lg">

                El formato cambia según la historia, la audiencia y el
                objetivo. La producción mantiene el mismo estándar.

              </p>

            </div>

          </div>


          <div className="mt-20 grid border-t border-white/15 md:grid-cols-2">

            {capabilities.map((item) => (

              <div
                key={item.number}
                className="group border-b border-white/10 py-8 md:px-5 md:py-10"
              >

                <div className="flex items-start justify-between gap-8">

                  <div>

                    <span className="text-[10px] text-[#f51b24]">
                      {item.number}
                    </span>

                    <h3 className="mt-5 text-2xl font-medium md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-relaxed text-white/40 md:text-base">
                      {item.text}
                    </p>

                  </div>

                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/20 transition group-hover:text-[#f51b24]" />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          REEL DEKAELO
      ====================================================== */}

      <section className="border-y border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-12 md:items-end">

            <div className="md:col-span-5">

              <Eyebrow>Reel</Eyebrow>

              <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">

                Lo que
                <br />

                <span className="text-white/35">
                  hacemos.
                </span>

              </h2>

            </div>


            <div className="md:col-span-7">

              <p className="max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">

                Una selección de proyectos, producciones y formatos
                desarrollados por Dekaelo Media.

              </p>

            </div>

          </div>


          <div className="mt-16 md:mt-20">

            <div className="relative aspect-video w-full overflow-hidden bg-white/5">

              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/4jDNXBkv7vU"
                title="Dekaelo Media — Reel"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NÚMEROS
      ====================================================== */}

      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16">

            <Eyebrow>Experiencia</Eyebrow>

            <h2 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.06em]">

              El trabajo
              <br />

              <span className="text-white/35">
                habla por sí solo.
              </span>

            </h2>

          </div>


          <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">

            <div className="bg-[#050505] px-6 py-10 md:px-8 md:py-14">

              <p className="text-5xl font-medium tracking-[-0.05em] md:text-6xl">
                200+
              </p>

              <p className="mt-3 text-xs leading-relaxed text-white/35 md:text-sm">
                piezas producidas
              </p>

            </div>


            <div className="bg-[#050505] px-6 py-10 md:px-8 md:py-14">

              <p className="text-5xl font-medium tracking-[-0.05em] md:text-6xl">
                60+
              </p>

              <p className="mt-3 text-xs leading-relaxed text-white/35 md:text-sm">
                episodios de vodcast
              </p>

            </div>


            <div className="bg-[#050505] px-6 py-10 md:px-8 md:py-14">

              <p className="text-5xl font-medium tracking-[-0.05em] md:text-6xl">
                3.8M
              </p>

              <p className="mt-3 text-xs leading-relaxed text-white/35 md:text-sm">
                vistas en un video orgánico
              </p>

            </div>


            <div className="bg-[#050505] px-6 py-10 md:px-8 md:py-14">

              <p className="text-5xl font-medium tracking-[-0.05em] md:text-6xl">
                6+
              </p>

              <p className="mt-3 text-xs leading-relaxed text-white/35 md:text-sm">
                industrias
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CÓMO PENSAMOS
      ====================================================== */}

      <section className="px-5 py-28 md:px-10 md:py-44">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 md:grid-cols-12">

            <div className="md:col-span-4">

              <Eyebrow>Cómo pensamos</Eyebrow>

              <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">

                Criterio
                <br />

                <span className="text-white/35">
                  de trabajo.
                </span>

              </h2>

            </div>


            <div className="md:col-span-8">

              <div className="border-t border-white/15">

                {values.map((value) => (

                  <div
                    key={value.number}
                    className="grid grid-cols-[45px_1fr] gap-5 border-b border-white/10 py-8 md:grid-cols-[60px_1fr] md:gap-8"
                  >

                    <span className="text-[10px] text-[#f51b24]">
                      {value.number}
                    </span>

                    <div>

                      <h3 className="text-xl font-medium md:text-2xl">
                        {value.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/40 md:text-base">
                        {value.text}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESO
      ====================================================== */}

      <section className="border-y border-white/10 px-5 py-28 md:px-10 md:py-40">

        <div className="mx-auto max-w-7xl">

          <Eyebrow>Cómo trabajamos</Eyebrow>

          <div className="mt-6 grid gap-12 md:grid-cols-12 md:items-end">

            <div className="md:col-span-8">

              <h2 className="text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em]">

                Una idea.
                <br />
                Un formato.
                <br />

                <span className="text-white/35">
                  Una producción.
                </span>

              </h2>

            </div>


            <p className="md:col-span-4 text-base leading-relaxed text-white/40 md:text-lg">

              Nos involucramos desde el principio para que la idea, la
              producción y el resultado final hablen el mismo lenguaje.

            </p>

          </div>


          <div className="mt-20 grid gap-8 md:grid-cols-4">

            {[
              {
                n: "01",
                title: "Idea",
                text: "Entendemos qué quieres comunicar y para quién.",
              },
              {
                n: "02",
                title: "Formato",
                text: "Desarrollamos concepto, estructura, ritmo y dinámica.",
              },
              {
                n: "03",
                title: "Producción",
                text: "Grabamos, dirigimos y realizamos el proyecto.",
              },
              {
                n: "04",
                title: "Postproducción",
                text: "Editamos, trabajamos color y sonido y preparamos las entregas.",
              },
            ].map((step) => (

              <div key={step.n}>

                <p className="text-4xl font-medium text-white/10">
                  {step.n}
                </p>

                <h3 className="mt-5 text-xl font-medium">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/40">
                  {step.text}
                </p>

              </div>

            ))}

          </div>


          <div className="mt-20 grid gap-6 md:grid-cols-2">

            <Image
              src="/qs_dekaelo_4.png"
              alt="Producción audiovisual Dekaelo Media"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
              loading="lazy"
            />

            <Image
              src="/qs_dekaelo_1.png"
              alt="Rodaje Dekaelo Media"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          MIRADA HACIA ADELANTE
      ====================================================== */}

      <section className="px-5 py-28 md:px-10 md:py-44">

        <div className="mx-auto max-w-5xl">

          <Eyebrow>Lo que viene</Eyebrow>

          <h2 className="mt-7 text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em]">

            La comunicación
            <br />

            <span className="text-white/35">
              está cambiando.
            </span>

          </h2>


          <div className="mt-12 max-w-3xl">

            <p className="text-xl leading-relaxed text-white/55 md:text-2xl">

              Las organizaciones ya no solamente comunican cuando tienen algo
              que anunciar.

            </p>

            <p className="mt-6 text-base leading-relaxed text-white/40 md:text-lg">

              Construyen canales propios, comparten conocimiento y desarrollan
              conversaciones permanentes con sus audiencias.

            </p>

            <p className="mt-6 text-base leading-relaxed text-white/40 md:text-lg">

              Por eso entendemos el contenido como una herramienta para
              construir confianza, visibilidad y relevancia a largo plazo.

            </p>


            <Link
              href="/vision-chile-2030"
              className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/55 transition hover:text-white"
            >

              Conoce nuestra visión

              <ArrowRight className="h-4 w-4" />

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="border-t border-white/10 px-5 py-32 md:px-10 md:py-44">

        <div className="mx-auto max-w-5xl text-center">

          <Eyebrow>Hablemos</Eyebrow>

          <h2 className="mt-7 text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em]">

            Una idea puede
            <br />
            convertirse en
            <br />

            <span className="text-white/35">
              un formato.
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/40 md:text-lg">

            Cuéntanos qué quieres producir. Podemos ayudarte a convertirlo en
            una propuesta audiovisual.

          </p>


          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-white px-8 py-4 text-xs uppercase tracking-[0.18em] text-black transition hover:bg-white/90"
            >

              Solicitar propuesta

              <ArrowUpRight className="h-4 w-4" />

            </Link>


            <Link
              href="/servicios"
              className="inline-flex items-center gap-3 border border-white/15 bg-white/5 px-8 py-4 text-xs uppercase tracking-[0.18em] text-white/55 transition hover:bg-white/10 hover:text-white"
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


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-white/10 px-5 py-10 md:px-10 md:py-12">

        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

          {/* LOGO */}

          <div>

            <Image
              src="/dekaelo-logo.png"
              alt="Dekaelo Media"
              width={220}
              height={80}
              className="w-[140px]"
            />

            <p className="mt-5 text-xs text-white/30">
              Distintas voces, una misma producción.
            </p>

          </div>


          {/* CONTACTO + REDES */}

          <div className="flex flex-col gap-5 md:items-end">

            <a
              href="mailto:info@dekaelomedia.com"
              className="text-sm text-white/60 transition hover:text-white"
            >
              info@dekaelomedia.com
            </a>


            <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.18em]">

              <a
                href="https://www.instagram.com/dekaelo_media/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition hover:text-[#f51b24]"
              >
                Instagram
              </a>


              <a
                href="https://www.linkedin.com/company/dekaelo-media/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition hover:text-[#f51b24]"
              >
                LinkedIn
              </a>


              <Link
                href="/#proyectos"
                className="text-white/40 transition hover:text-white"
              >
                Proyectos
              </Link>


              <Link
                href="/quienes-somos"
                className="text-white transition hover:text-white"
              >
                Nosotros
              </Link>


              <Link
                href="/#capacidades"
                className="text-white/40 transition hover:text-white"
              >
                Capacidades
              </Link>


              <Link
                href="/#contacto"
                className="text-white/40 transition hover:text-white"
              >
                Contacto
              </Link>

            </div>

          </div>

        </div>


        <div className="mt-12 border-t border-white/10 pt-6 text-[10px] text-white/20">

          © {new Date().getFullYear()} Dekaelo Media

        </div>

      </footer>

    </main>
  );
}
