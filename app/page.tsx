import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { VideoEmbed } from "./components/VideoEmbed";
import { ClientLogos } from "./components/ClientLogos";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const waLink =
  "https://wa.me/56920080031?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto%20con%20Dekaelo%20Media.%0A%0AEmpresa%3A%0AQue%20necesito%3A%0AFecha%20tentativa%3A%0A%0AGracias";

export const metadata: Metadata = {
  title: "Dekaelo Media - Vodcast y video corporativo en Chile",
  description:
    "Mas de una decada produciendo vodcast y video corporativo en Chile. BICE, Camara de Comercio Asia Pacifico, iGromi y mas.",
};

const services = [
  {
    badge: "Especialidad principal",
    badgeClass: "bg-amber-500/15 text-amber-300 border border-amber-400/20",
    name: "Produccion completa",
    tagline:
      "Para empresas que quieren vodcast o series corporativas sin preocuparse de nada tecnico.",
    how: "Disenamos el formato, llegamos con equipo a tu oficina y producimos la temporada completa.",
    includes: [
      "Diseno de formato y pauta",
      "Grabacion profesional en tu oficina",
      "Direccion y conduccion tecnica",
      "Edicion, subtitulos y entrega lista para publicar",
    ],
    price: "Desde $650.000 / episodio",
    note: "+ IVA - temporada minima 4 episodios",
    href: "/servicios#produccion",
  },
  {
    badge: "Post-produccion",
    badgeClass: "bg-sky-500/15 text-sky-300 border border-sky-400/20",
    name: "Post-produccion",
    tagline:
      "Tu o tu empresa graban. Nosotros lo dejamos profesional y listo para LinkedIn o YouTube.",
    how: "Mandas el material en bruto. Nosotros editamos, corregimos audio y color y entregamos en el formato correcto.",
    includes: [
      "Correccion de audio y color",
      "Titulos, creditos y subtitulos",
      "Formato para redes y web",
      "Entrega en 5 dias habiles",
      "Pago 50% adelantado",
    ],
    price: "Desde $350.000",
    note: "+ IVA - pago unico por proyecto",
    href: "/servicios#postproduccion",
  },
];

const milestones = [
  { year: "2014", text: "Seleccion oficial Sitges Film Festival con Yokai. Comerciales para Editorial Televisa Chile." },
  { year: "2015", text: "Video para Oximixo supera 3.8M de vistas organicas en YouTube." },
  { year: "2024", text: "Diseno de formato y produccion de Futbol y Parrilla — ep. 1 con 158K vistas. Inicio de serie vodcast para Banco BICE." },
];

const biceImages = [
  { src: "/bice/bice-1.jpg", alt: "Set vodcast BICE episodio en produccion" },
  { src: "/bice/bice-2.jpg", alt: "Set vodcast BICE configuracion de camaras" },
  { src: "/bice/bice-3.jpg", alt: "Set vodcast BICE detalle de produccion" },
];

const cases = [
  {
    tag: "Vodcast corporativo",
    name: "iGromi - Industria 4.0 y nuevos negocios Ep. 8",
    desc: "Serie vodcast sobre tecnologia e industria. Produccion completa.",
    youtube: "https://www.youtube.com/embed/2G7oKXKjPl8?rel=0&modestbranding=1&playsinline=1",
  },
  {
    tag: "Evento corporativo - Figuras publicas",
    name: "HKLABA - Introduccion institucional",
    desc: "Produccion con Charles Kimber de Arauco, Eduardo Frei y Jorge Carey.",
    youtube: "https://www.youtube.com/embed/a1OcIDBTHgw?rel=0&modestbranding=1&playsinline=1",
  },
  {
    tag: "Vodcast - Serie original",
    name: "Futbol y Parrilla - Borghi, Paredes y Monje",
    desc: "Produccion completa de serie original. Mas de 357K vistas en los primeros 4 episodios.",
    youtube: "https://www.youtube.com/embed/PLSfbZU_asQ?rel=0&modestbranding=1&playsinline=1",
  },
  {
    tag: "Vodcast institucional - Camara de Comercio",
    name: "APCC Chamber - Hong Kong y Latinoamerica Ep. 2",
    desc: "Serie Asia-Pacifico para la Camara de Comercio. Mas de 20 episodios producidos.",
    youtube: "https://www.youtube.com/embed/byTylGKp-uI?rel=0&modestbranding=1&playsinline=1",
  },
];

const forWho = [
  "Quieres posicionar a tus lideres con un vodcast corporativo",
  "Tu empresa hace cosas importantes pero nadie lo sabe porque no publican",
  "Grabaste algo en un evento y lleva meses sin editar",
  "Necesitas un video institucional antes de una reunion o licitacion",
];

const notForWho = [
  "Necesitas produccion de TV o publicidad masiva",
  "Buscas el precio mas bajo del mercado",
  "No tienes claro que quieres comunicar",
];

function Chip(props: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/55">
      {props.children}
    </span>
  );
}

function Eyebrow(props: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
      {props.children}
    </p>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l3.5 3.5L13 4" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-white/20" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <Image
          src="/bg_dekaelo.png"
          alt=""
          fill
          className="object-cover object-center opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
        <div className="relative container max-w-5xl pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Estudio de Produccion Audiovisual
          </div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Contenido corporativo{" "}
            <span className="text-white/35">que posiciona tu empresa.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
            Mas de una decada produciendo vodcast y video corporativo para empresas en Chile.
            Estudio independiente, sin estructura de agencia ni sus costos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Chip>Especialistas en vodcast corporativo</Chip>
            <Chip>Entrega en 5 dias habiles</Chip>
            <Chip>Santiago, Chile</Chip>
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Cuentanos tu proyecto por WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/portafolio"
              className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 px-8 py-3.5 text-sm text-white/65 transition hover:bg-white/10 hover:text-white"
            >
              Ver trabajos realizados
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REEL */}
      <section className="container max-w-5xl pb-24">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Eyebrow>Reel corporativo</Eyebrow>
          <Link href="/portafolio" className="text-sm text-white/35 transition hover:text-white">
            Ver todos los casos
          </Link>
        </div>
        <VideoEmbed
          src="https://www.youtube.com/embed/4jDNXBkv7vU?rel=0&modestbranding=1&playsinline=1"
          title="Dekaelo Media Reel Corporativo"
        />
      </section>

      {/* LOGOS */}
      <section className="border-t border-white/10 py-16">
        <div className="container">
          <p className="mb-10 text-center text-xs uppercase tracking-widest text-white/25">
            Algunas empresas e instituciones con las que hemos trabajado
          </p>
          <ClientLogos />
        </div>
      </section>

      {/* STATS */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Experiencia y resultados</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Contenido que ya esta generando impacto.
              </h2>
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-sm text-white/40">
                +10 anos produciendo contenido audiovisual en Chile
              </p>
              <Link
                href="/quienes-somos"
                className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                Ver quienes somos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            <div className="bg-black px-8 py-10">
              <p className="text-4xl font-semibold md:text-5xl">200+</p>
              <p className="mt-2 text-sm text-white/40">piezas producidas</p>
            </div>
            <div className="bg-black px-8 py-10">
              <p className="text-4xl font-semibold md:text-5xl">3.8M</p>
              <p className="mt-2 text-sm text-white/40">visualizaciones organicas</p>
            </div>
            <div className="bg-black px-8 py-10">
              <p className="text-4xl font-semibold md:text-5xl">60+</p>
              <p className="mt-2 text-sm text-white/40">episodios de vodcast corporativo</p>
            </div>
            <div className="bg-black px-8 py-10">
              <p className="text-4xl font-semibold md:text-5xl">Series activas</p>
              <p className="mt-2 text-sm text-white/40">con empresas como BICE</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASO BICE */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <Eyebrow>Caso destacado</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">BICE</h2>
              <p className="mt-3 max-w-xl text-white/50 leading-relaxed">
                Serie vodcast institucional en produccion continua desde 2024. Temporada activa con mas capitulos en camino.
              </p>
            </div>
            <span className="hidden shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/35 sm:inline-flex">
              2024 - 2026
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {biceImages.map((img, i) => (
              <div
                key={i}
                className={"relative overflow-hidden rounded-xl bg-white/5 " + (i === 0 ? "col-span-3 aspect-video md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[320px]" : "col-span-3 aspect-video md:col-span-1")}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                />
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Chip>Vodcast ejecutivo</Chip>
            <Chip>Produccion completa</Chip>
            <Chip>Temporada en curso</Chip>
          </div>
        </div>
      </section>

      {/* INDUSTRIAS */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Experiencia en distintas industrias</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Desde banca hasta contenido original.
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 text-sm text-white/60">
            <div>BICE — Serie vodcast institucional</div>
            <div>APCC — +25 episodios internacionales</div>
            <div>iGromi — Industria y tecnologia</div>
            <div>Futbol y Parrilla — +390K vistas</div>
            <div>Trewhela School — documental institucional</div>
            <div>Oximixo — +3.8M vistas organicas</div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="container border-t border-white/10 py-24 max-w-5xl">
        <div className="mb-14 flex items-end justify-between gap-4">
          <div>
            <Eyebrow>Servicios</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Dos formas de trabajar juntos</h2>
          </div>
          <Link href="/servicios" className="hidden text-sm text-white/35 transition hover:text-white sm:block">
            Ver detalle completo
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20"
            >
              <span className={"mb-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium " + s.badgeClass}>
                {s.badge}
              </span>
              <h3 className="text-xl font-semibold text-white leading-snug">{s.name}</h3>
              <p className="mt-3 text-sm text-white/55 leading-relaxed">{s.tagline}</p>
              <p className="mt-4 text-xs text-white/35 leading-relaxed italic">{s.how}</p>
              <ul className="mt-5 flex-1 space-y-2">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-base font-semibold text-white">{s.price}</p>
                <p className="mt-0.5 text-xs text-white/35">{s.note}</p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-sm text-white/35 transition group-hover:text-white/60">
                Ver detalle <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-8 py-3.5 text-sm text-white/70 transition hover:bg-white hover:text-black"
          >
            No estas seguro cual necesitas - escribenos y te orientamos{" "}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* TRABAJOS */}
      <section className="container border-t border-white/10 py-24 max-w-6xl">
        <div className="mb-14 flex items-end justify-between gap-4">
          <div>
            <Eyebrow>Trabajos seleccionados</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Lo que hemos producido</h2>
          </div>
          <Link href="/portafolio" className="hidden text-sm text-white/35 transition hover:text-white sm:block">
            Ver portafolio completo
          </Link>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {cases.map((c) => (
            <article key={c.name}>
              <VideoEmbed src={c.youtube} title={c.name} />
              <div className="mt-5">
                <p className="text-xs text-white/35">{c.tag}</p>
                <h3 className="mt-1.5 text-base font-semibold text-white leading-snug">{c.name}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-2 border border-white/15 px-8 py-3 text-sm text-white/55 transition hover:border-white/30 hover:text-white"
          >
            Ver portafolio completo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* PARA QUIEN ES */}
      <section className="border-t border-white/10 py-24">
        <div className="container max-w-5xl">
          <Eyebrow>Para quien es</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Esto es para ti?</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="mb-5 text-sm font-semibold text-white">Si es para ti si...</p>
              <ul className="space-y-3">
                {forWho.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/60">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="mb-5 text-sm font-semibold text-white">No es para ti si...</p>
              <ul className="space-y-3">
                {notForWho.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/40">
                    <CrossIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm leading-relaxed text-white/50">
                  Si no estas seguro, escribenos igual. Si no somos la mejor opcion, te lo decimos sin rodeos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-white/10 py-28">
        <div className="container max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            BICE - Camara de Comercio Asia Pacifico - iGromi - Coesam - Exploflex
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Conversamos tu proyecto?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/55">
            Cuentanos que necesitas. Te respondemos con un alcance claro y un precio concreto en menos de 24 horas habiles.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white px-10 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Escribenos por WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-10 py-4 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              O usa el formulario de contacto <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/25">
            Respondemos el mismo dia habil. Sin compromiso.
          </p>
        </div>
      </section>

    </main>
  );
}
