import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Dekaelo Media | Productora Audiovisual y Contenido Digital",
  },
  description:
    "Productora audiovisual en Santiago de Chile. Creamos videos corporativos y comerciales, fotografía profesional, contenido para redes sociales, vodcasts y programas para YouTube.",
  alternates: { canonical: "/" },
};

/* ============================================================
   CONFIGURACIÓN
============================================================ */

const REEL_YOUTUBE_ID = "MY0sTHMoy1s";
const WHATSAPP_NUMBER = "56954100680";
const WHATSAPP_MESSAGE =
  "Hola, vi el sitio de Dekaelo Media y quiero conversar sobre un proyecto audiovisual.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

/* ============================================================
   CONTENIDO
============================================================ */

const milestones = [
  { value: "2013", label: "Produciendo contenido audiovisual" },
  { value: "+10 años", label: "De experiencia en dirección y producción" },
  { value: "70+ episodios realizados", label: "Programas, vodcasts y series audiovisuales para marcas e instituciones." },
  { value: "360°", label: "De la idea a la postproducción" },
];

const packs = [
  {
    name: "Esencial",
    price: "$449.000",
    description:
      "Una producción profesional para mostrar tu empresa, producto o servicio.",
    duration: "Hasta 2 horas de grabación",
    featured: false,
    items: [
      "1 video corporativo o comercial de hasta 60 segundos",
      "3 videos verticales de hasta 30 segundos",
      "10 fotografías profesionales editadas",
      "Edición, montaje y corrección de color",
      "Entrega digital de las piezas finales",
    ],
  },
  {
    name: "Empresa",
    price: "$599.000",
    description:
      "Una producción integral para comunicar lo que hace tu empresa y generar contenido para distintos canales.",
    duration: "Hasta 3 horas de grabación",
    featured: true,
    items: [
      "1 video corporativo o comercial de hasta 90 segundos",
      "5 videos verticales de hasta 45 segundos",
      "15 fotografías profesionales editadas",
      "1 entrevista o testimonio breve",
      "Edición, subtítulos y corrección de color",
      "Entrega digital de las piezas finales",
    ],
  },
  {
    name: "Premium",
    price: "$799.000",
    description:
      "Una producción de mayor alcance para mostrar tu empresa, equipo, instalaciones y servicios.",
    duration: "Hasta 4 horas de grabación",
    featured: false,
    items: [
      "1 video corporativo o comercial de hasta 2 minutos",
      "6 videos verticales de hasta 60 segundos",
      "25 fotografías profesionales editadas",
      "Hasta 2 entrevistas o testimonios",
      "Tomas aéreas con dron, sujetas a permisos y condiciones",
      "Edición, subtítulos y corrección de color",
      "Entrega digital de las piezas finales",
    ],
  },
];

const projects = [
  {
    slug: "bice",
    title: "BICE",
    category: "Comunicación interna · Cultura",
    client: "BICECORP",
    image: "/projects/bice/hero.png",
  },
  {
    slug: "lolosaurios",
    title: "LOLOSAURIOS",
    category: "Programa digital · YouTube",
    client: "José Luis Larraín",
    image: "/projects/lolosaurios/hero.png",
  },
  {
    slug: "futbol-y-parrilla",
    title: "FÚTBOL Y PARRILLA",
    category: "Deporte · Entretenimiento",
    client: "Ian Mac-Niven",
    image: "/projects/futbol-y-parrilla/hero.png",
  },
  {
    slug: "break-industrial",
    title: "BREAK INDUSTRIAL",
    category: "Contenido B2B · Industria",
    client: "iGromi",
    image: "/projects/break-industrial/hero.png",
  },
  {
    slug: "creando-lideres-para-asia",
    title: "CREANDO LÍDERES PARA ASIA",
    category: "Comunicación institucional · Internacional",
    client: "Cámara de Comercio Asia Pacífico · APCC",
    image: "/projects/creando-lideres-asia/hero.png",
  },
];

const clientLogos = [
  "/logo_2.png",
  "/logo_3.png",
  "/logo_4.png",
  "/logo_13.png",
  "/logo_5.png",
  "/logo_9.png",
  "/logo_1.png",
  "/logo_10.png",
  "/logo_15.png",
  "/logo_12.png",
];

const services = [
  "Programas y series para YouTube",
  "Videos corporativos y comerciales",
  "Contenido vertical para plataformas digitales",
  "Fotografía para empresas y marcas",
  "Podcasts y vodcasts",
  "Dirección creativa, producción y postproducción",
];

/* ============================================================
   HOME
============================================================ */

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[620px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/dekaelo-reel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/25" />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-8 md:px-10 md:pb-12">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-white/65">
                Productora audiovisual independiente · Desde 2013
              </p>
              <h1 className="max-w-6xl text-[clamp(2.8rem,7.5vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.06em]">
                Tienes una idea.
                <br />
                <span className="text-white/65">Nosotros la hacemos realidad.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/65 md:text-xl">
                Creamos y producimos programas, series y contenido audiovisual
                para empresas, marcas y plataformas digitales. Desde la idea
                inicial hasta la entrega final.
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-5 md:items-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border border-white/25 bg-black/30 px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:border-[#f51b24] hover:bg-[#f51b24]"
              >
                <MessageCircle className="h-4 w-4" />
                Escríbenos por WhatsApp
              </a>
              <a
                href="#proyectos"
                className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/75"
              >
                Explorar proyectos
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition group-hover:border-[#f51b24] group-hover:bg-[#f51b24]">
                  <ArrowDownRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRESENTACIÓN BREVE */}
      <section id="nosotros" className="border-b border-white/10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">Dekaelo Media</p>
            <h2 className="mt-5 text-[clamp(2.5rem,5.5vw,5.5rem)] font-medium leading-[0.94] tracking-[-0.06em]">
              Producción audiovisual <span className="text-white/35">con ideas, criterio y experiencia.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-base leading-relaxed text-white/50">
              Desarrollamos y realizamos proyectos audiovisuales para empresas,
              marcas e instituciones. Podemos ayudarte desde la construcción
              del concepto o sumarnos a una idea que ya tienes definida.
            </p>
            <Link href="/quienes-somos" className="mt-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/65 transition hover:text-white">
              Conocer Dekaelo <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TRAYECTORIA */}
      <section className="border-b border-white/10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">Trayectoria</p>
              <h2 className="mt-4 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-5xl">
                Más de una década <span className="text-white/35">produciendo contenido.</span>
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-white/45 md:justify-self-end">
              Experiencia en dirección y producción de formatos audiovisuales,
              programas, series y contenidos para empresas e instituciones.
              Acompañamos cada proyecto desde su desarrollo hasta la entrega.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-4">
            {milestones.map((item) => (
              <div key={item.value} className="border-b border-r border-white/10 px-5 py-7 md:px-8 md:py-9">
                <p className="text-2xl font-medium tracking-[-0.03em] md:text-4xl">{item.value}</p>
                <p className="mt-3 text-xs leading-relaxed text-white/40 md:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA DE FIN DE AÑO + PACKS */}
      <section id="packs-empresas" className="border-b border-white/10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 border-y border-white/10 bg-white/[0.025] px-6 py-8 md:px-10 md:py-10">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">Campaña especial · Fin de año 2026</p>
            <div className="mt-5 grid gap-6 md:grid-cols-2 md:items-end">
              <h2 className="max-w-2xl text-4xl font-medium leading-[0.95] tracking-[-0.055em] md:text-6xl">
                Cierra el año mostrando lo mejor de tu empresa.
              </h2>
              <div>
                <p className="max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
                  Reserva una producción audiovisual profesional con valores
                  especiales de fin de año. Videos corporativos, contenido
                  vertical y fotografía para empresas y marcas.
                </p>
                <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-white/45">
                  Reserva hasta el 31 de diciembre de 2026 · Cupos sujetos a disponibilidad
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">Producción audiovisual para empresas</p>
              <h2 className="mt-4 text-[clamp(2.7rem,5vw,5rem)] font-medium leading-[0.93] tracking-[-0.06em]">
                Tu empresa tiene <span className="text-white/35">una historia que contar.</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/45 md:justify-self-end md:text-base">
              Una jornada de producción puede convertirse en un video principal,
              piezas verticales y fotografías para tu sitio web, redes sociales
              y comunicación comercial.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {packs.map((pack, index) => (
              <article key={pack.name} className={`relative flex flex-col border p-6 md:p-8 ${pack.featured ? "border-[#f51b24]/70 bg-white/[0.045]" : "border-white/15"}`}>
                {pack.featured && (
                  <span className="mb-5 inline-flex w-fit border border-[#f51b24]/60 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#f51b24]">Recomendado</span>
                )}
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">Pack 0{index + 1}</p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em]">{pack.name}</h3>
                <div className="mt-7">
                  <p className="text-3xl font-medium tracking-[-0.05em] md:text-4xl">{pack.price}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/35">+ IVA</p>
                </div>
                <p className="mt-6 min-h-[64px] text-sm leading-relaxed text-white/45">{pack.description}</p>
                <p className="mt-5 border-y border-white/10 py-4 text-[10px] uppercase tracking-[0.16em] text-white/55">{pack.duration}</p>
                <ul className="mt-2 flex-1">
                  {pack.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 border-b border-white/10 py-3.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#f51b24]" />
                      <span className="text-sm leading-relaxed text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, vi el Pack ${pack.name} de Dekaelo Media y quiero cotizar una producción audiovisual para mi empresa.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex items-center justify-between gap-4 border px-5 py-4 text-[10px] uppercase tracking-[0.18em] transition ${pack.featured ? "border-[#f51b24] bg-[#f51b24] text-white hover:bg-transparent" : "border-white/20 text-white/75 hover:border-[#f51b24] hover:bg-[#f51b24] hover:text-white"}`}
                >
                  Cotizar este pack <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 border-t border-white/10 pt-7 md:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#f51b24]">Producción profesional</p>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Grabaciones con cámaras profesionales Sony FX30 o Sony FX3,
                según los requerimientos del proyecto, iluminación y equipo
                audiovisual de apoyo.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#f51b24]">Condiciones</p>
              <p className="mt-3 text-xs leading-relaxed text-white/40">
                Valores netos más IVA. Oferta válida para reservas realizadas
                hasta el 31 de diciembre de 2026. Packs para una locación en
                Santiago y coordinación previa. Incluyen hasta dos rondas de
                ajustes. No incluyen locución profesional, actores, modelos,
                arriendo de locaciones, publicación ni administración de redes
                sociales. Dron sujeto a permisos, normativa y clima. Extras se
                cotizan por separado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REEL */}
      <section className="border-b border-white/10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">Reel audiovisual</p>
              <h2 className="mt-4 text-[clamp(2.7rem,5.5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                Ideas que <span className="text-white/35">se hacen realidad.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/40 md:text-right">
              Una muestra de nuestros vodcasts, programas y proyectos audiovisuales. Producciones como Nos Une, Lolosaurios, Creando Líderes para Asia, Breaking Industrial y Fútbol y Parrilla reflejan nuestra experiencia creando contenidos para marcas, empresas e instituciones.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden bg-white/5">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${REEL_YOUTUBE_ID}`}
              title="Dekaelo Media — Reel audiovisual"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="mt-5 flex justify-end">
            <a href={`https://youtu.be/${REEL_YOUTUBE_ID}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/50 transition hover:text-white">
              Ver en YouTube <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="border-b border-white/10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">Nuestro trabajo</p>
              <h2 className="mt-4 text-5xl font-medium tracking-[-0.05em] md:text-7xl">Proyectos</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/40">
              Producciones para comunicación corporativa, entretenimiento,
              deporte, industria y contenido digital.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
            {projects.map((project, index) => (
              <Link key={project.slug} href={`/proyectos/${project.slug}`} className={`group ${index === projects.length - 1 ? "md:col-span-2" : ""}`}>
                <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category}, producción de Dekaelo Media para ${project.client}`}
                    fill
                    sizes={index === projects.length - 1 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/25" />
                  <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black opacity-0 transition duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.025em]">{project.title}</h3>
                    <p className="mt-1 text-xs text-white/35">{project.category}</p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/20">Cliente · {project.client}</p>
                  </div>
                  <span className="pt-1 text-[10px] text-white/20">0{index + 1}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex justify-end">
            <Link href="/proyectos" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/50 transition hover:text-white">
              Ver todos los proyectos <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="border-b border-white/10 px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">Experiencia compartida</p>
              <h2 className="mt-4 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-5xl">
                Marcas e instituciones <span className="text-white/35">que han confiado en nosotros.</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/40 md:justify-self-end">
              Cada colaboración es una oportunidad para contar una historia
              con una identidad y un propósito propios.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 md:grid-cols-5">
            {clientLogos.map((src, index) => (
              <div key={src} className="flex h-24 items-center justify-center border-b border-r border-white/10 px-6 py-5 md:h-28">
                <Image
                  src={src}
                  alt={`Marca cliente de Dekaelo Media ${index + 1}`}
                  width={180}
                  height={80}
                  className="max-h-12 w-auto max-w-[150px] object-contain opacity-60 transition duration-300 hover:opacity-100 md:max-h-14 md:max-w-[170px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS + VODCAST */}
      <section id="servicios" className="border-b border-white/10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">Servicios</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Una idea. <span className="text-white/35">Muchos formatos.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/40">
              Desarrollamos y producimos proyectos audiovisuales a la medida
              de cada empresa, marca, persona y plataforma.
            </p>
            <Link href="/servicios" className="mt-7 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/60 transition hover:text-white">
              Ver servicios <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="border-t border-white/15">
            {services.map((service, index) => (
              <Link key={service} href="/servicios" className="group flex items-center justify-between gap-5 border-b border-white/10 py-5 transition hover:px-2">
                <span className="flex items-center gap-5">
                  <span className="text-[10px] text-[#f51b24]">0{index + 1}</span>
                  <span className="text-base text-white/75 transition group-hover:text-white md:text-xl">{service}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/20 transition group-hover:text-[#f51b24]" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#f51b24]">Producciones especializadas</p>
              <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em]">Tu propio vodcast.</h3>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-white/50">
                Desarrollamos programas de conversación y entrevistas para
                YouTube y plataformas digitales. Podemos producir desde el
                concepto y la identidad audiovisual hasta los episodios,
                tráileres y piezas breves para difusión.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/70 transition hover:text-white">
                Cotizar un vodcast <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO FINAL */}
      <section className="relative overflow-hidden border-t border-white/10 px-5 py-24 md:px-10 md:py-36">
        <div className="absolute right-[-10%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#f51b24]/10 blur-[150px]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">Hablemos</p>
          <h2 className="mt-7 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em]">
            ¿Tienes una <span className="text-white/35">idea en mente?</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/40 md:text-lg">
            Cuéntanos qué necesitas producir. Conversemos sobre tu idea y
            encontremos el formato audiovisual adecuado para llevarla adelante.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 border border-[#f51b24] bg-[#f51b24] px-7 py-4 text-xs uppercase tracking-[0.18em] transition hover:bg-transparent">
              <MessageCircle className="h-4 w-4" /> Escríbenos por WhatsApp
            </a>
            <Link href="/contacto" className="inline-flex items-center gap-4 border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.18em] transition hover:border-[#f51b24] hover:bg-[#f51b24]">
              Cuéntanos tu idea <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-white/25">
            Dekaelo Media · Productora audiovisual independiente · Desde 2013
          </p>
        </div>
      </section>
    </main>
  );
}
