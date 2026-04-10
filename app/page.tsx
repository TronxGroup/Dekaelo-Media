import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { VideoEmbed } from "./components/VideoEmbed";
import { ClientLogos } from "./components/ClientLogos";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const waLink = "https://wa.me/56920080031?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto%20con%20Dekaelo%20Media.%0A%0AEmpresa%3A%0AQue%20necesito%3A%0AFecha%20tentativa%3A%0A%0AGracias";

export const metadata: Metadata = {
  title: "Dekaelo Media - Vodcast y video corporativo en Chile",
  description: "Mas de una decada produciendo vodcast y video corporativo en Chile. BICE, Camara de Comercio Asia Pacifico, iGromi y mas.",
};

const services = [
  {
    badge: "Especialidad principal",
    badgeClass: "bg-amber-500/15 text-amber-300 border border-amber-400/20",
    name: "Produccion completa",
    tagline: "Para empresas que quieren vodcast o series corporativas sin preocuparse de nada tecnico.",
    how: "Disenamos el formato, llegamos con equipo a tu oficina y producimos la temporada completa.",
    includes: [
      "Diseno de formato y pauta",
      "Grabacion profesional en tu oficina",
      "Direccion y conduccion tecnica",
      "Edicion, subtitulos y entrega lista para publicar",
      "Referencia: BICE (2024-2026)",
    ],
    price: "Desde $1.200.000 / temporada",
    note: "+ IVA - desde 4 episodios",
    href: "/servicios#produccion",
  },
  {
    badge: "Post-produccion",
    badgeClass: "bg-sky-500/15 text-sky-300 border border-sky-400/20",
    name: "Post-produccion",
    tagline: "Tu o tu empresa graban. Nosotros lo dejamos profesional y listo para LinkedIn o YouTube.",
    how: "Mandas el material en bruto. Nosotros editamos, corregimos audio y color y entregamos en el formato correcto.",
    includes: [
      "Correccion de audio y color",
      "Titulos, creditos y subtitulos",
      "Formato para redes y web",
      "Entrega en 5 dias habiles",
      "Pago 50% adelantado",
    ],
    price: "$400.000 - $650.000",
    note: "+ IVA - pago unico por proyecto",
    href: "/servicios#postproduccion",
  },
];

const milestones = [
  { year: "2014", text: "Seleccion oficial a Sitges Film Festival y BARS con Yokai. Comerciales para Editorial Televisa Chile — Revista Caras." },
  { year: "2015", text: "Video tutorial para Oximixo supera 3.8M de vistas en YouTube con 18K likes. Organico, sin pauta." },
  { year: "2016-2022", text: "Videos corporativos para industria, tecnologia y educacion. Post-produccion para contenido interno de Ripley." },
  { year: "2023", text: "Mas de 20 episodios para la Camara de Comercio Asia Pacifico y serie para iGromi." },
  { year: "2024", text: "4 episodios de Futbol y Parrilla con mas de 357K vistas acumuladas. Inicio de serie vodcast institucional para BICE." },
  { year: "2025-2026", text: "Produccion continua para BICE. Temporada activa en curso." },
];

const stats = [
  { value: "100+", label: "videos producidos desde 2013" },
  { value: "3.8M", label: "vistas en un solo video organico" },
  { value: "357K+", label: "vistas en serie Futbol y Parrilla" },
  { value: "60+", label: "episodios vodcast corporativos" },
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

      <section className="container max-w-5xl pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/50">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          BICE - Serie vodcast institucional 2024-2026
        </div>

        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          Video corporativo que{" "}
          <span className="text-white/35">habla por si solo.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
          Mas de una decada produciendo vodcast, series institucionales y video corporativo
          para empresas en Chile. Sin el ego ni el precio de una agencia grande.
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
            Cuentanos tu proyecto por WhatsApp <ArrowUpRight className="h-4 w-4" />
          </a>

          <Link
            href="/portafolio"
            className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 px-8 py-3.5 text-sm text-white/65 transition hover:bg-white/10 hover:text-white"
          >
            Ver trabajos realizados <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* resto intacto */}

    </main>
  );
}
