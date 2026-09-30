import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Dekaelo Media es una productora audiovisual chilena. Desde 2013 desarrollamos formatos, producimos contenido y contamos historias para empresas, marcas y audiencias.",
  alternates: {
    canonical: "https://www.dekaelomedia.com/quienes-somos",
  },
};


/* ============================================================
   TRAYECTORIA
============================================================ */

const milestones = [
  {
    year: "2013–2015",
    title: "El comienzo",
    text: "Iniciamos nuestro recorrido en producción audiovisual con Yokai, largometraje seleccionado en Sitges Film Festival y Buenos Aires Rojo Sangre. Durante estos primeros años desarrollamos piezas comerciales y contenido digital para clientes como Editorial Televisa Chile, Hasbro, Agencia Pixelia —con proyectos para Quaker y Kodak—, Oximixo y Gran Logia de Chile.",
  },
  {
    year: "2016–2020",
    title: "Producción corporativa",
    text: "Producción y postproducción para empresas de industria, tecnología y educación. Desarrollo de contenido corporativo y postproducción para Ripley. Algunos clientes de la época fueron Grupo KGHM Chile, Trewhela's School, Acmanet, Molinera San Cristóbal, iCity Chile, Inducom, U-Payments, Tapp, Exploflex y Coesam.",
  },
  {
    year: "2020–2022",
    title: "Retomar y desarrollar",
    text: "Tras la interrupción de la actividad presencial provocada por la pandemia, retomamos progresivamente la producción audiovisual con nuevas series de contenido para la Cámara de Comercio Asia Pacífico y el desarrollo y ejecución de formato para iGromi.",
  },
  {
    year: "2023–2026",
    title: "Formatos y nuevos proyectos",
    text: "Desarrollo y producción de nuevos formatos audiovisuales, incluyendo Fútbol y Parrilla, cuyo primer episodio alcanza 160K vistas, y producción continua del vodcast institucional de BICECORP desde 2024. En 2026 se suma Lolosaurios, formato editorial de conversación y entretenimiento producido por Dekaelo Media desde el 12 de julio.",
  },
];


/* ============================================================
   CRITERIO
============================================================ */

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


/* ============================================================
   EYEBROW
============================================================ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
      {children}
    </p>
  );
}


/* ============================================================
   PAGE
============================================================ */

export default function QuienesSomosPage() {
  return (
    <main className="bg-[#050505] text-white selection:bg-white selection:text-black">


      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[88vh] overflow-hidden border-b border-white/10 px-5 pb-24 pt-40 md:px-10 md:pb-36 md:pt-52">

        {/* FOTO DE FONDO */}

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/BG_Nosotros.jpg')",
          }}
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/60" />

        {/* DEGRADADO */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-[#050505]" />


        {/* CONTENIDO */}

        <div className="relative z-10 mx-auto flex min-h-[68vh] max-w-7xl flex-col justify-between">

          <div>

            <Eyebrow>Nosotros</Eyebrow>

            <div className="mt-6 grid gap-12 md:grid-cols-12 md:items-end">

              <div className="md:col-span-9">

                <h1 className="max-w-6xl text-[clamp(3.2rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">

                  Empezamos
                  <br />
                  contando historias.
                  <br />

                  <span className="text-white/45">
                    Hoy desarrollamos formatos.
                  </span>

                </h1>

              </div>


              <div className="md:col-span-3">

                <p className="text-sm leading-relaxed text-white/65 md:text-base">
                  Dekaelo Media es una productora audiovisual chilena que
                  desarrolla, produce y postproduce contenido para empresas,
                  marcas y audiencias.
                </p>

                <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Desde 2013
                </p>

              </div>

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


            {/* TITULO */}

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


            {/* TEXTO */}

            <div className="md:col-span-7">

              <p className="text-xl leading-relaxed text-white/60 md:text-2xl">

                En 2013 comenzamos nuestro recorrido con{" "}
                <span className="text-white">
                  Yokai
                </span>
                , largometraje seleccionado en Sitges Film Festival y Buenos
                Aires Rojo Sangre.

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


          {/* IMAGEN */}

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
          FUNDADOR
      ====================================================== */}

      <section className="border-y border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-12 md:items-center">


            {/* FOTO */}

            <div className="md:col-span-5">

              <div className="relative aspect-[4/5] overflow-hidden bg-white/5">

                <Image
                  src="/ceo.jpeg"
                  alt="Tomás Echeverría, fundador y director general de Dekaelo Media"
                  fill
                  className="object-cover object-[center_38%]"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />

              </div>

            </div>


            {/* INFORMACIÓN */}

            <div className="md:col-span-7 md:pl-8">

              <Eyebrow>Quién está detrás</Eyebrow>


              <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">

                Tomás
                <br />

                <span className="text-white/35">
                  Echeverría.
                </span>

              </h2>


              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/40">
                Fundador y Director General
              </p>


              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/25">
                Más de 15 años de experiencia audiovisual
              </p>


              {/* TEXTO */}

              <div className="mt-10 max-w-2xl">

                <p className="text-xl leading-relaxed text-white/70 md:text-2xl">

                  En Dekaelo, cada proyecto lo dirige personalmente Tomás.
                  Quien define el formato es el mismo que está en el rodaje
                  y en la sala de edición.

                </p>


                <p className="mt-7 text-base leading-relaxed text-white/40 md:text-lg">

                  Esa cercanía permite tomar decisiones más rápido, mantener
                  una misma mirada durante todo el proceso y trabajar
                  directamente con quien está a cargo de la producción.

                </p>


                <p className="mt-5 text-base leading-relaxed text-white/40 md:text-lg">

                  Desde 2013, esa forma de trabajar ha acompañado proyectos
                  para empresas, marcas y organizaciones de distintas
                  industrias.

                </p>

              </div>


              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/tomasechebol/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/45 transition hover:text-white"
              >

                LinkedIn

                <ArrowUpRight className="h-4 w-4" />

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRAYECTORIA
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-40">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-12">


            {/* TITULO */}

            <div className="md:col-span-4">

              <Eyebrow>Trayectoria</Eyebrow>

              <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">

                Una historia
                <br />

                <span className="text-white/35">
                  construida.
                </span>

              </h2>

            </div>


            {/* TIMELINE */}

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
          REEL
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">

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
          EXPERIENCIA
      ====================================================== */}

      <section className="border-b border-white/10 bg-white/[0.02] px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">


          {/* TITULO */}

          <div className="mb-16">

            <Eyebrow>Experiencia</Eyebrow>

            <h2 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.06em]">

              Una trayectoria
              <br />

              <span className="text-white/35">
                que se mide en trabajo.
              </span>

            </h2>

          </div>


          {/* NUMEROS */}

          <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">


            {/* 200+ */}

            <div className="bg-[#050505] px-6 py-10 md:px-8 md:py-14">

              <p className="text-5xl font-medium tracking-[-0.05em] md:text-6xl">
                200+
              </p>

              <p className="mt-3 text-xs leading-relaxed text-white/35 md:text-sm">
                piezas producidas
              </p>

            </div>


            {/* 60+ */}

            <div className="bg-[#050505] px-6 py-10 md:px-8 md:py-14">

              <p className="text-5xl font-medium tracking-[-0.05em] md:text-6xl">
                60+
              </p>

              <p className="mt-3 text-xs leading-relaxed text-white/35 md:text-sm">
                episodios de vodcast
              </p>

            </div>


            {/* 3.8M */}

            <div className="bg-[#050505] px-6 py-10 md:px-8 md:py-14">

              <p className="text-5xl font-medium tracking-[-0.05em] md:text-6xl">
                3.8M
              </p>

              <p className="mt-3 text-xs leading-relaxed text-white/35 md:text-sm">
                vistas en un solo video orgánico
              </p>


              <a
                href="https://www.youtube.com/watch?v=f7BpYpTSPLk"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/35 transition hover:text-white"
              >

                Ver video

                <ArrowUpRight className="h-3 w-3" />

              </a>

            </div>


            {/* 6+ */}

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


            {/* TITULO */}

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


            {/* VALORES */}

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
          LO QUE VIENE
      ====================================================== */}

      <section className="border-y border-white/10 px-5 py-28 md:px-10 md:py-44">

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

            {/* CONTACTO */}

            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-white px-8 py-4 text-xs uppercase tracking-[0.18em] text-black transition hover:bg-white/90"
            >

              Solicitar propuesta

              <ArrowUpRight className="h-4 w-4" />

            </Link>


            {/* SERVICIOS */}

            <Link
              href="/servicios"
              className="inline-flex items-center gap-3 border border-white/15 bg-white/5 px-8 py-4 text-xs uppercase tracking-[0.18em] text-white/55 transition hover:bg-white/10 hover:text-white"
            >

              Ver servicios

              <ArrowRight className="h-4 w-4" />

            </Link>

          </div>


          <p className="mt-6 text-xs text-white/25">
            Respuesta en 24 horas hábiles. Sin compromiso.
          </p>

        </div>

      </section>


    </main>
  );
}
