import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Dekaelo Media es una productora audiovisual independiente. Creamos y producimos programas, series y contenido para YouTube, Instagram y plataformas digitales, desde la idea hasta la entrega final.",
  alternates: {
    canonical: "/quienes-somos",
  },
};

/* ============================================================
   CLIENTES / EXPERIENCIA
============================================================ */

const clients = [
  "BICECORP",
  "Ripley",
  "Hasbro",
  "Editorial Televisa Chile",
  "Grupo KGHM Chile",
  "Cámara de Comercio Asia Pacífico",
  "iGromi",
  "Prodalam",
  "Trewhela's School",
  "Acmanet",
  "Molinera San Cristóbal",
  "iCity Chile",
  "Inducom",
  "U-Payments",
  "Tapp",
  "Exploflex",
  "Coesam",
  "Lolosaurios",
];

/* ============================================================
   CRITERIO
============================================================ */

const values = [
  {
    number: "01",
    title: "Primero entendemos la idea",
    text: "Escuchamos qué quieres conseguir antes de decidir cómo debería verse o producirse.",
  },
  {
    number: "02",
    title: "El formato se construye contigo",
    text: "Te ayudamos a definir concepto, estructura, dinámica, identidad y ritmo, aunque partamos desde cero.",
  },
  {
    number: "03",
    title: "Una producción integral",
    text: "Acompañamos el proyecto desde el desarrollo creativo hasta la entrega de las piezas finales.",
  },
  {
    number: "04",
    title: "Flexibilidad con método",
    text: "Adaptamos el equipo y los recursos a cada proyecto, con comunicación directa y etapas bien coordinadas.",
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

        <div className="absolute inset-0">
          <Image
            src="/BG_Nosotros.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-[#050505]" />

        <div className="relative z-10 mx-auto flex min-h-[68vh] max-w-7xl flex-col justify-between">
          <div>

            <Eyebrow>Nosotros</Eyebrow>

            <div className="mt-6 grid gap-12 md:grid-cols-12 md:items-end">

              <div className="md:col-span-9">
                <h1 className="max-w-6xl text-[clamp(3.2rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                  Tienes una idea.
                  <br />
                  <span className="text-white/45">La hacemos realidad.</span>
                </h1>
              </div>

              <div className="md:col-span-3">
                <p className="text-sm leading-relaxed text-white/65 md:text-base">
                  Somos una productora audiovisual independiente que convierte ideas en programas, series y contenido para plataformas digitales.
                </p>

                <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Desarrollo · Producción · Postproducción
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUIÉNES SOMOS
      ====================================================== */}

      <section className="px-5 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 md:grid-cols-12 md:items-center">

            <div className="md:col-span-5">
              <Eyebrow>Quiénes somos</Eyebrow>

              <h2 className="mt-6 text-[clamp(2.7rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                No necesitas saber
                <br />
                <span className="text-white/35">cómo producirlo.</span>
              </h2>
            </div>

            <div className="md:col-span-7">

              <p className="text-xl leading-relaxed text-white/60 md:text-2xl">
                En Dekaelo transformamos una idea en un proyecto audiovisual concreto, bien pensado y profesional.
              </p>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
                Puedes llegar con un programa que quieres hacer para YouTube, una serie de videos para tu empresa, contenido para Instagram o simplemente una idea que todavía no sabes cómo desarrollar.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
                Desarrollamos el concepto, definimos el formato, la estructura, el ritmo y la identidad visual. Después planificamos, grabamos, editamos y preparamos las piezas para cada plataforma. No necesitas tener todas las respuestas antes de empezar: trabajamos contigo para encontrarlas.
              </p>

            </div>
          </div>

          <div className="mt-20 md:mt-28">
            <Image
              src="/qs_dekaelo_3.png"
              alt="Producción audiovisual Dekaelo Media"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* =====================================================
    ORIGEN
====================================================== */}

<section className="border-y border-white/10 px-5 py-24 md:px-10 md:py-40">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-14 md:grid-cols-12 md:items-center">

      <div className="md:col-span-5">
        <Eyebrow>El origen</Eyebrow>

        <h2 className="mt-6 text-[clamp(2.7rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
          Una trayectoria
          <br />
          que viene del
          <br />
          <span className="text-white/35">
            cine independiente.
          </span>
        </h2>
      </div>

      <div className="md:col-span-7">

        <p className="text-xl leading-relaxed text-white/60 md:text-2xl">
          Antes de Dekaelo, hubo años de producción audiovisual y una
          experiencia que comenzó en el cine independiente.
        </p>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
          En 2013 se produjo Yokai, un largometraje independiente
          realizado con recursos mínimos, que fue seleccionado en Sitges
          Film Festival y Buenos Aires Rojo Sangre y hoy está disponible
          en Amazon Prime Video.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
          Esa etapa permitió desarrollar una forma de entender la
          producción basada en resolver, construir equipos y llevar una
          idea desde el concepto hasta la pantalla.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
          Con el tiempo, esa experiencia se trasladó a proyectos
          comerciales, corporativos y editoriales, hasta convertirse en
          la base sobre la que se funda Dekaelo Media.
        </p>

      </div>
    </div>

  </div>
</section>

      {/* =====================================================
          FORMA DE TRABAJO
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <Eyebrow>Una forma de trabajar cercana</Eyebrow>
              <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                Una misma
                <br />
                <span className="text-white/35">mirada de principio a fin.</span>
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-xl leading-relaxed text-white/70 md:text-2xl">
                Trabajamos directamente contigo. Escuchamos lo que tienes en mente y te ayudamos a encontrar la mejor manera de hacerlo realidad.
              </p>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
                Mantenemos una dirección creativa y de producción coherente durante todo el proceso. Así evitamos que tu idea se pierda entre distintos proveedores, decisiones desconectadas o etapas sin coordinación.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
                Armamos el equipo y los recursos que cada proyecto necesita. Una estructura flexible nos permite adaptarnos a distintas escalas, sin cargar la producción con estructuras innecesarias.
              </p>
            </div>
          </div>
          <div className="mt-16">
            <Image
              src="/BG_Nosotros.jpg"
              alt="Equipo trabajando en una producción audiovisual de Dekaelo Media"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCIA / CLIENTES
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 md:grid-cols-12 md:items-start">

            {/* TITULO */}

            <div className="md:col-span-5">

              <Eyebrow>Experiencia</Eyebrow>

              <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                Una experiencia
                <br />
                <span className="text-white/35">
                  construida en proyectos.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-base leading-relaxed text-white/40 md:text-lg">
                Más de una década de experiencia audiovisual que hoy forma
                parte de la base de Dekaelo Media.
              </p>

            </div>

            {/* CLIENTES */}

            <div className="md:col-span-7">

              <div className="grid grid-cols-2 border-t border-white/10 md:grid-cols-3">

                {clients.map((client) => (
                  <div
                    key={client}
                    className="border-b border-white/10 px-5 py-6 md:px-6 md:py-8"
                  >
                    <p className="text-sm font-medium text-white/55 md:text-base">
                      {client}
                    </p>
                  </div>
                ))}

              </div>

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
              <Eyebrow>Reel 2026</Eyebrow>

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
                src="https://www.youtube.com/embed/LAaLA-spVH0"
                title="Dekaelo Media — Reel 2026"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          EXPERIENCIA MEDIDA
      ====================================================== */}

      <section className="border-b border-white/10 bg-white/[0.02] px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16">

            <Eyebrow>Proyectos en números</Eyebrow>

            <h2 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Experiencia
              <br />
              <span className="text-white/35">
                que se mide en trabajo.
              </span>
            </h2>

          </div>

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
            Respuesta en 24 horas hábiles. Sin compromiso.
          </p>

        </div>
      </section>

    </main>
  );
}
