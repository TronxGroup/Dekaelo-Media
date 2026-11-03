import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

// WhatsApp: número en formato internacional, sin "+" ni espacios.
const WHATSAPP_NUMBER = "569XXXXXXXX";
const whatsappUrl = (mensaje: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

export const metadata: Metadata = {
  title: "Servicios | Dekaelo Media",
  description:
    "Creamos y producimos programas para YouTube, vodcasts, series de videos y contenido audiovisual para empresas y marcas. Desde la idea hasta la entrega final.",
  alternates: {
    canonical: "/servicios",
  },
};

const servicios = [
  {
    numero: "01",
    titulo: "Programas para YouTube",
    descripcion:
      "Creamos y producimos programas audiovisuales. Podemos ayudarte a desarrollar el concepto y el formato desde cero o trabajar sobre una idea que ya tienes definida.",
    ejemplos: "Programas de conversación · Entrevistas · Paneles · Series",
    proyecto: { slug: "lolosaurios", nombre: "Lolosaurios" },
  },
  {
    numero: "02",
    titulo: "Series de videos",
    descripcion:
      "Producimos series audiovisuales para comunicar ideas, contar historias o desarrollar temas en distintos episodios, con una identidad y una línea visual coherentes.",
    ejemplos: "Series corporativas · Documentales · Contenido editorial",
    proyecto: {
      slug: "creando-lideres-para-asia",
      nombre: "Creando Líderes para Asia",
    },
  },
  {
    numero: "03",
    titulo: "Contenido para redes sociales",
    descripcion:
      "Producimos videos pensados para conectar con las audiencias en plataformas digitales, aprovechando cada producción para generar distintas piezas.",
    ejemplos: "Reels · Shorts · Videos verticales · Cápsulas",
    proyecto: { slug: "lolosaurios", nombre: "Lolosaurios" },
  },
  {
    numero: "04",
    titulo: "Podcasts y vodcasts",
    descripcion:
      "Realizamos conversaciones en formato audiovisual o sonoro. Nos encargamos de la dirección, identidad audiovisual, grabación, edición y postproducción de los episodios.",
    ejemplos: "Vodcast corporativo · Podcast · Conversaciones · Entrevistas",
    proyecto: { slug: "bice", nombre: "BICE · Nos Une" },
  },
  {
    numero: "05",
    titulo: "Dirección creativa e identidad audiovisual",
    descripcion:
      "Damos forma visual y sonora a cada proyecto. Trabajamos su identidad, lenguaje audiovisual, ritmo y recursos gráficos para construir una experiencia reconocible.",
    ejemplos:
      "Identidad visual · Selección musical · Intro · Gráficas · Dirección",
    proyecto: { slug: "break-industrial", nombre: "Break Industrial" },
  },
  {
    numero: "06",
    titulo: "Producción y postproducción",
    descripcion:
      "Nos hacemos cargo de la realización audiovisual y de todo el trabajo posterior para entregar piezas terminadas y listas para publicar.",
    ejemplos: "Planificación · Grabación · Dirección · Edición · Sonido · Color",
    proyecto: { slug: "futbol-y-parrilla", nombre: "Fútbol y Parrilla" },
  },
];

const aplicaciones = [
  "Quiero tener un programa en YouTube",
  "Quiero crear contenido para mi empresa",
  "Quiero producir contenido para Instagram",
  "Tengo una idea, pero no sé cómo hacerla",
  "Necesito una serie de videos para mi marca",
];

const etapas = [
  {
    numero: "01",
    titulo: "Conversamos",
    descripcion:
      "Nos cuentas qué tienes en mente. No necesitas llegar con un proyecto definido ni saber cómo producirlo.",
  },
  {
    numero: "02",
    titulo: "Definimos",
    descripcion:
      "Entendemos lo que necesitas y definimos el formato, el alcance, los recursos y la forma de trabajo.",
  },
  {
    numero: "03",
    titulo: "Producimos",
    descripcion:
      "Organizamos y realizamos la producción audiovisual, coordinando los recursos y el equipo necesarios.",
  },
  {
    numero: "04",
    titulo: "Entregamos",
    descripcion:
      "Editamos, finalizamos y entregamos el contenido en los formatos necesarios para su publicación.",
  },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.25em] text-[#f51b24]">
      {children}
    </p>
  );
}

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-white/10 px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-48">

        <div className="absolute inset-0">
          <Image
            src="/BG_Servicios.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">

          <Eyebrow>Qué hacemos</Eyebrow>

          <h1 className="mt-7 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.85] tracking-[-0.07em]">
            Programas, series
            <br />
            <span className="text-white/35">
              y vodcasts.
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Creamos y producimos programas, series de videos y contenido
            audiovisual para YouTube, Instagram y otras plataformas.
            Desde la idea inicial hasta la entrega final.
          </p>

          <Link
            href="/contacto"
            className="group mt-10 inline-flex items-center gap-5 border-b border-white/40 pb-3 text-xs uppercase tracking-[0.18em] transition hover:border-[#f51b24]"
          >
            Cuéntanos tu idea

            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

        </div>
      </section>

      {/* =====================================================
          INTRODUCCIÓN
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">

          <div className="md:col-span-5">
            <Eyebrow>De la idea a la pantalla</Eyebrow>

            <h2 className="mt-6 text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              No necesitas
              <br />
              saber cómo
              <br />
              <span className="text-white/35">
                producirlo.
              </span>
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7">

            <p className="text-lg leading-relaxed text-white/65 md:text-xl">
              Puedes llegar con un programa que quieres lanzar, una serie
              de videos que te gustaría producir o simplemente una idea
              que todavía no sabes cómo llevar a cabo.
            </p>

            <p className="mt-6 text-base leading-relaxed text-white/40">
              Podemos ayudarte a desarrollar el concepto y encontrar
              el formato, o trabajar sobre un proyecto que ya tienes
              definido. Nos encargamos de la dirección creativa,
              producción, edición y postproducción para convertirlo
              en una pieza audiovisual profesional.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          PACK LANZAMIENTO DE VODCAST
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 md:grid-cols-12">

            {/* Presentación */}

            <div className="md:col-span-5">

              <Eyebrow>Una solución completa</Eyebrow>

              <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                Tu propio
                <br />
                <span className="text-white/35">
                  programa.
                </span>
              </h2>

              <p className="mt-8 max-w-md text-base leading-relaxed text-white/45 md:text-lg">
                ¿Quieres lanzar un vodcast, pero no sabes por dónde
                empezar? Podemos ayudarte a darle forma y producir
                tu programa, con todo lo necesario para comenzar
                a publicar.
              </p>

              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/30">
                Desarrollo · Producción · Contenido digital
              </p>

            </div>

            {/* Contenido del pack */}

            <div className="md:col-span-7">

              <div className="border border-white/15 p-7 md:p-10">

                <p className="text-[10px] uppercase tracking-[0.25em] text-[#f51b24]">
                  Pack lanzamiento de vodcast
                </p>

                <h3 className="mt-5 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                  Todo comienza con una conversación.
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/45 md:text-base">
                  Una producción pensada para lanzar un programa
                  audiovisual y generar contenido para YouTube e
                  Instagram a partir de una misma producción.
                </p>

                {/* Entregables */}

                <div className="mt-10 grid grid-cols-2 gap-6 border-y border-white/10 py-8">

                  <div>
                    <p className="text-5xl font-medium tracking-[-0.06em]">
                      04
                    </p>
                    <p className="mt-2 text-xs text-white/40">
                      Episodios de vodcast
                    </p>
                  </div>

                  <div>
                    <p className="text-5xl font-medium tracking-[-0.06em]">
                      12
                    </p>
                    <p className="mt-2 text-xs text-white/40">
                      Reels para redes sociales
                    </p>
                  </div>

                  <div>
                    <p className="text-5xl font-medium tracking-[-0.06em]">
                      01
                    </p>
                    <p className="mt-2 text-xs text-white/40">
                      Tráiler de lanzamiento
                    </p>
                  </div>

                  <div>
                    <p className="text-5xl font-medium tracking-[-0.06em]">
                      01
                    </p>
                    <p className="mt-2 text-xs text-white/40">
                      Identidad audiovisual
                    </p>
                  </div>

                </div>

                {/* Qué incluye */}

                <div className="mt-8">

                  <p className="text-sm font-medium">
                    Nos encargamos de todo:
                  </p>

                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">

                    {[
                      "Desarrollo del concepto",
                      "Nombre e identidad gráfica",
                      "Diseño del formato",
                      "Estructura de episodios",
                      "Producción y grabación",
                      "Edición y postproducción",
                      "Diseño sonoro y color",
                      "Contenido listo para publicar",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-xs text-white/45"
                      >
                        <span className="h-1 w-1 rounded-full bg-[#f51b24]" />
                        {item}
                      </li>
                    ))}

                  </ul>

                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  <a
                    href={whatsappUrl(
                      "Hola, me interesa el Pack lanzamiento de vodcast de Dekaelo Media.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between border border-[#f51b24] bg-[#f51b24] px-6 py-5 text-xs uppercase tracking-[0.16em] transition hover:bg-transparent"
                  >
                    Cotizar por WhatsApp
                    <MessageCircle className="h-4 w-4" />
                  </a>

                  <Link
                    href="/contacto"
                    className="group inline-flex items-center justify-between border border-white/20 px-6 py-5 text-xs uppercase tracking-[0.16em] transition hover:border-[#f51b24] hover:bg-[#f51b24]"
                  >
                    Quiero crear mi programa

                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICIOS
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <Eyebrow>Servicios</Eyebrow>

            <h2 className="mt-6 text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Lo que necesitas
              <br />
              para hacerlo
              <span className="text-white/35"> realidad.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/45 md:text-lg">
              Podemos participar en una etapa específica o hacernos cargo
              de todo el proyecto. Adaptamos el equipo y la producción
              según lo que cada idea necesita.
            </p>

          </div>

          <div className="mt-20 border-t border-white/10">

            {servicios.map((servicio) => (
              <div
                key={servicio.numero}
                className="grid gap-5 border-b border-white/10 py-9 md:grid-cols-12 md:gap-8 md:py-12"
              >

                <div className="text-xs text-white/30 md:col-span-1">
                  {servicio.numero}
                </div>

                <div className="md:col-span-4">
                  <h3 className="text-2xl font-medium tracking-[-0.04em] md:text-3xl">
                    {servicio.titulo}
                  </h3>
                </div>

                <div className="md:col-span-5">

                  <p className="text-sm leading-relaxed text-white/50 md:text-base">
                    {servicio.descripcion}
                  </p>

                  <p className="mt-5 text-[10px] uppercase leading-relaxed tracking-[0.12em] text-white/30">
                    {servicio.ejemplos}
                  </p>

                </div>

                <div className="md:col-span-2 md:flex md:justify-end">
                  <Link
                    href={`/proyectos/${servicio.proyecto.slug}`}
                    className="group inline-flex items-start gap-2 text-[10px] uppercase leading-relaxed tracking-[0.14em] text-white/35 transition hover:text-white md:text-right"
                  >
                    <span>
                      Ver ejemplo
                      <br />
                      <span className="text-white/20 group-hover:text-white/60">
                        {servicio.proyecto.nombre}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          APLICACIONES
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">

          <div className="md:col-span-5">

            <Eyebrow>¿Qué tienes en mente?</Eyebrow>

            <h2 className="mt-6 text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Podemos
              <br />
              partir desde
              <br />
              <span className="text-white/35">
                cualquier idea.
              </span>
            </h2>

          </div>

          <div className="md:col-span-6 md:col-start-7">

            <ul className="border-t border-white/10">

              {aplicaciones.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center justify-between gap-5 border-b border-white/10 py-6"
                >

                  <span className="text-base text-white/65 md:text-lg">
                    {item}
                  </span>

                  <span className="text-xs text-white/25">
                    0{index + 1}
                  </span>

                </li>
              ))}

            </ul>

            <p className="mt-8 text-sm leading-relaxed text-white/35">
              No importa si eres una empresa, una organización,
              un profesional o un creador. Lo importante es tener
              algo que quieras comunicar.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          PROCESO
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <Eyebrow>Cómo trabajamos</Eyebrow>

          <h2 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
            De la primera
            <br />
            conversación a la
            <br />
            <span className="text-white/35">
              entrega final.
            </span>
          </h2>

          <div className="mt-20 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-4">

            {etapas.map((etapa) => (
              <div key={etapa.numero}>

                <p className="text-xs text-[#f51b24]">
                  {etapa.numero}
                </p>

                <h3 className="mt-7 text-2xl font-medium tracking-[-0.04em]">
                  {etapa.titulo}
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-white/40">
                  {etapa.descripcion}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          EXPERIENCIA
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">

          <div className="md:col-span-5">

            <Eyebrow>Experiencia en producción</Eyebrow>

            <h2 className="mt-6 text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Sabemos lo que
              <br />
              implica crear
              <br />
              <span className="text-white/35">
                un programa.
              </span>
            </h2>

          </div>

          <div className="md:col-span-6 md:col-start-7">

            <p className="text-lg leading-relaxed text-white/60">
              Hemos creado y producido programas de conversación,
              vodcasts corporativos y series para organizaciones,
              marcas y creadores.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-white/40">
              Desde 2024 estamos a cargo de la dirección creativa y la
              realización de “Nos Une”, el vodcast interno de BICECORP
              para más de 6.000 colaboradores: identidad audiovisual,
              grabación, edición y postproducción de cada episodio.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-y border-white/10 py-8">
              {[
                ["14+", "episodios de Nos Une"],
                ["217K", "vistas de Lolosaurios en 3 meses"],
                ["24", "episodios para la Cámara Asia Pacífico"],
              ].map(([numero, texto]) => (
                <div key={texto}>
                  <p className="text-2xl font-medium tracking-[-0.04em] md:text-4xl">
                    {numero}
                  </p>
                  <p className="mt-2 text-[10px] uppercase leading-relaxed tracking-[0.12em] text-white/35">
                    {texto}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/proyectos/bice"
              className="group mt-9 inline-flex items-center gap-4 border-b border-white/30 pb-3 text-xs uppercase tracking-[0.16em] transition hover:border-[#f51b24]"
            >
              Conocer el proyecto

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA FINAL
      ====================================================== */}

      <section className="px-5 py-24 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <Eyebrow>Empecemos</Eyebrow>

          <h2 className="mt-7 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.88] tracking-[-0.07em]">
            ¿Qué te gustaría
            <br />
            <span className="text-white/35">
              producir?
            </span>
          </h2>

          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end">

            <p className="max-w-md text-base leading-relaxed text-white/45">
              Cuéntanos qué te gustaría crear. Nosotros te ayudamos
              a encontrar el formato y hacerlo realidad.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl(
                  "Hola, vi los servicios de Dekaelo Media y quiero conversar sobre un proyecto.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-12 border border-[#f51b24] bg-[#f51b24] px-7 py-5 text-xs uppercase tracking-[0.16em] transition hover:bg-transparent"
              >
                Escríbenos por WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>

              <Link
                href="/contacto"
                className="group inline-flex items-center justify-between gap-12 border border-white/25 px-7 py-5 text-xs uppercase tracking-[0.16em] transition hover:border-[#f51b24] hover:bg-[#f51b24]"
              >
                Hablemos de tu proyecto

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
