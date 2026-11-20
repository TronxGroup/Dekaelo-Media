import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Quiénes somos | Dekaelo Media",
  description:
    "Dekaelo Media es una productora audiovisual independiente. Desarrollamos y producimos programas, series, vodcasts y contenido audiovisual para marcas, empresas e instituciones.",
  alternates: {
    canonical: "/quienes-somos",
  },
};

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

const principles = [
  {
    number: "01",
    title: "Entender antes de producir",
    text: "Partimos por escuchar. Conocemos tus objetivos, tu audiencia y el mensaje que quieres transmitir. No necesitas llegar con el proyecto resuelto: podemos ayudarte a definirlo.",
  },
  {
    number: "02",
    title: "Encontrar el formato adecuado",
    text: "Desarrollamos la idea y su lenguaje audiovisual. Puede ser un programa, una serie, un vodcast, una pieza corporativa o contenido para plataformas digitales.",
  },
  {
    number: "03",
    title: "Cuidar el proceso completo",
    text: "Acompañamos cada etapa: dirección creativa, planificación, producción, grabación, edición y postproducción. Buscamos coherencia entre la idea y el resultado.",
  },
  {
    number: "04",
    title: "Armar el equipo que cada proyecto necesita",
    text: "Trabajamos con una estructura flexible y convocamos los recursos y profesionales adecuados según la escala y los requerimientos de cada producción.",
  },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-6 text-[clamp(2.7rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
        {children}
      </h2>
    </div>
  );
}

export default function QuienesSomosPage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* HERO */}
      <section className="relative flex min-h-[82vh] items-end overflow-hidden border-b border-white/10 px-5 pb-20 pt-40 md:min-h-[88vh] md:px-10 md:pb-28 md:pt-48">
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
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-black/25" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Eyebrow>Quiénes somos · Dekaelo Media</Eyebrow>

          <div className="mt-7 grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-9">
              <h1 className="max-w-6xl text-[clamp(3.2rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                Tienes una idea.
                <br />
                <span className="text-white/45">La hacemos realidad.</span>
              </h1>
            </div>

            <div className="md:col-span-3">
              <p className="text-sm leading-relaxed text-white/70 md:text-base">
                Somos una productora audiovisual independiente. Creamos y
                producimos programas, series y contenido para marcas,
                empresas e instituciones.
              </p>
              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-white/45">
                Dirección creativa · Producción · Postproducción
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRESENTACIÓN */}
      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <SectionHeading eyebrow="Qué hacemos">
                No necesitas saber
                <br />
                <span className="text-white/35">cómo producirlo.</span>
              </SectionHeading>
            </div>

            <div className="md:col-span-7">
              <p className="text-xl leading-relaxed text-white/75 md:text-2xl">
                En Dekaelo transformamos ideas en contenidos audiovisuales con
                identidad, propósito y una mirada propia.
              </p>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
                Puedes llegar con un programa que quieres desarrollar para
                YouTube, una serie de videos para tu empresa, un vodcast, una
                pieza institucional o simplemente una idea que todavía no
                sabes cómo llevar a la pantalla.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
                Nos involucramos desde el desarrollo del concepto y el
                formato hasta la dirección, realización, edición y
                postproducción. Nos importa tanto lo que quieres comunicar
                como la manera en que ese contenido llega a las personas.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
                No necesitas tener todas las respuestas antes de empezar.
                Podemos ayudarte a ordenar la idea y construir el proyecto
                contigo.
              </p>
            </div>
          </div>

          <div className="mt-16 md:mt-24">
            <Image
              src="/qs_dekaelo_3.png"
              alt="Equipo y producción audiovisual de Dekaelo Media"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ORIGEN */}
      <section className="border-y border-white/10 px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <SectionHeading eyebrow="De dónde venimos">
              Una trayectoria
              <br />
              que viene del
              <br />
              <span className="text-white/35">cine independiente.</span>
            </SectionHeading>
          </div>

          <div className="md:col-span-7">
            <p className="text-xl leading-relaxed text-white/70 md:text-2xl">
              Nuestra historia está ligada a la creación audiovisual y a la
              experiencia de hacer realidad proyectos desde cero.
            </p>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
              En 2013 participamos en la producción de <em>Yokai</em>, un
              largometraje independiente realizado con recursos mínimos,
              seleccionado en Sitges Film Festival y Buenos Aires Rojo Sangre,
              y disponible en Amazon Prime Video.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
              Esa experiencia nos enseñó a resolver, construir equipos y
              encontrar caminos para llevar una idea desde el concepto hasta
              la pantalla. Una manera de trabajar que después trasladamos a
              proyectos comerciales, corporativos y editoriales.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
              Dekaelo Media recoge ese aprendizaje y lo pone al servicio de
              nuevas historias, marcas y organizaciones.
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionHeading eyebrow="Nuestra manera de trabajar">
                Una misma
                <br />
                <span className="text-white/35">mirada de principio a fin.</span>
              </SectionHeading>
              <p className="mt-8 max-w-sm text-base leading-relaxed text-white/45 md:text-lg">
                Cada proyecto es distinto. Nuestro trabajo es encontrar la
                forma adecuada de desarrollarlo y cuidar que cada etapa
                responda a una misma visión.
              </p>
            </div>

            <div className="md:col-span-8">
              <div className="border-t border-white/15">
                {principles.map((item) => (
                  <div
                    key={item.number}
                    className="grid grid-cols-[38px_1fr] gap-5 border-b border-white/10 py-8 md:grid-cols-[54px_1fr] md:gap-8 md:py-9"
                  >
                    <span className="pt-1 text-[10px] tracking-wider text-[#f51b24]">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/45 md:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-24">
            <Image
              src="/BG_Nosotros.jpg"
              alt="Trabajo de producción audiovisual de Dekaelo Media"
              width={1600}
              height={900}
              className="h-auto max-h-[680px] w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <SectionHeading eyebrow="Experiencia">
                La confianza
                <br />
                <span className="text-white/35">se construye trabajando.</span>
              </SectionHeading>
              <p className="mt-7 max-w-md text-base leading-relaxed text-white/45 md:text-lg">
                Hemos desarrollado proyectos para empresas, marcas,
                instituciones y equipos de distintas industrias. Cada
                colaboración suma experiencia y nuevas formas de contar.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-3">
                {clients.map((client) => (
                  <div
                    key={client}
                    className="flex min-h-[76px] items-center border-b border-r border-white/10 px-4 py-5 md:min-h-[92px] md:px-6"
                  >
                    <p className="text-xs font-medium leading-snug text-white/60 md:text-sm">
                      {client}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[10px] leading-relaxed text-white/30">
                Marcas, empresas e instituciones con las que hemos trabajado
                en distintos proyectos y etapas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REEL */}
      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <SectionHeading eyebrow="Reel 2026">
                Ideas que
                <br />
                <span className="text-white/35">toman forma.</span>
              </SectionHeading>
            </div>
            <div className="md:col-span-7">
              <p className="max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
                Una muestra de nuestros programas, vodcasts y producciones
                audiovisuales para marcas, empresas e instituciones. Proyectos
                que reflejan nuestra experiencia desarrollando contenidos y
                dando vida a nuevas ideas.
              </p>
            </div>
          </div>

          <div className="mt-14 md:mt-20">
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

      {/* CIFRAS */}
      <section className="border-y border-white/10 px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <SectionHeading eyebrow="Experiencia en cifras">
                El trabajo
                <br />
                <span className="text-white/35">también se cuenta.</span>
              </SectionHeading>
            </div>
            <div className="md:col-span-7">
              <p className="max-w-2xl text-base leading-relaxed text-white/45 md:text-lg">
                Algunos datos que muestran la escala y diversidad de los
                contenidos en los que hemos participado.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px bg-white/10 md:mt-20 md:grid-cols-4">
            <div className="bg-[#050505] px-5 py-9 md:px-8 md:py-12">
              <p className="text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                200+
              </p>
              <p className="mt-3 max-w-[150px] text-xs leading-relaxed text-white/40 md:text-sm">
                piezas audiovisuales producidas
              </p>
            </div>

            <div className="bg-[#050505] px-5 py-9 md:px-8 md:py-12">
              <p className="text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                60+
              </p>
              <p className="mt-3 max-w-[150px] text-xs leading-relaxed text-white/40 md:text-sm">
                episodios de vodcast producidos
              </p>
            </div>

            <div className="bg-[#050505] px-5 py-9 md:px-8 md:py-12">
              <p className="text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                3.8M
              </p>
              <p className="mt-3 max-w-[170px] text-xs leading-relaxed text-white/40 md:text-sm">
                visualizaciones en un video orgánico
              </p>
              <a
                href="https://www.youtube.com/watch?v=f7BpYpTSPLk"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/45 transition hover:text-white"
              >
                Ver video
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>

            <div className="bg-[#050505] px-5 py-9 md:px-8 md:py-12">
              <p className="text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                6+
              </p>
              <p className="mt-3 max-w-[150px] text-xs leading-relaxed text-white/40 md:text-sm">
                industrias y sectores
              </p>
            </div>
          </div>
          <p className="mt-4 text-[10px] leading-relaxed text-white/30">
            Cifras referenciales basadas en el registro de proyectos de
            Dekaelo Media. Verifica y actualiza estos datos antes de publicar.
          </p>
        </div>
      </section>

      {/* CIERRE EDITORIAL */}
      <section className="px-5 py-28 md:px-10 md:py-44">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Lo que nos mueve</Eyebrow>
          <h2 className="mt-7 max-w-4xl text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
            No se trata solo
            <br />
            de hacer videos.
            <br />
            <span className="text-white/35">Se trata de contar mejor.</span>
          </h2>
          <div className="mt-10 max-w-3xl">
            <p className="text-xl leading-relaxed text-white/65 md:text-2xl">
              Creemos en el contenido que tiene algo que decir y encuentra
              una buena manera de hacerlo.
            </p>
            <p className="mt-6 text-base leading-relaxed text-white/45 md:text-lg">
              Por eso nos interesan los proyectos que construyen identidad,
              comparten conocimiento, abren conversaciones y conectan a las
              organizaciones con sus audiencias. Nuestro rol es aportar
              creatividad, oficio y capacidad de producción para convertir
              esas ideas en experiencias audiovisuales.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>Hablemos</Eyebrow>
          <h2 className="mt-7 text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em]">
            ¿Qué tienes
            <br />
            en mente?
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/45 md:text-lg">
            Cuéntanos qué quieres desarrollar. Podemos ayudarte a encontrar
            el formato, construir el proyecto y producirlo de principio a fin.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-white px-8 py-4 text-xs uppercase tracking-[0.18em] text-black transition hover:bg-white/90"
            >
              Hablemos de tu proyecto
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-3 border border-white/15 bg-white/5 px-8 py-4 text-xs uppercase tracking-[0.18em] text-white/65 transition hover:bg-white/10 hover:text-white"
            >
              Conocer servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/30">
            Cuéntanos tu idea. La primera conversación es sin compromiso.
          </p>
        </div>
      </section>
    </main>
  );
}
