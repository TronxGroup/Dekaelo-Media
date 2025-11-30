// app/contacto/page.tsx
import ZohoLeadForm from "../components/ZohoLeadForm";

export const metadata = {
  title: "Contacto | Dekaelo Media",
  description:
    "Cotiza tu plan audiovisual mensual o agenda una llamada con el estudio. Respondemos todas las consultas en menos de 24–48 horas hábiles.",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container max-w-2xl">
        {/* ENCABEZADO */}
        <h1 className="h2">Contacto · Cotiza tu proyecto</h1>
        <p className="p mt-2 text-white/80">
          Cuéntanos brevemente qué necesitas y coordinamos una llamada para revisar tu proyecto.
          Respondemos dentro de{" "}
          <span className="font-semibold text-white">24–48 horas hábiles</span>.
        </p>

        {/* ATALLOS RÁPIDOS */}
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <a
            href="mailto:info@dekaelomedia.com?subject=Consulta%20Dekaelo%20Media"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center hover:bg-white/10 transition text-sm"
          >
            ✉️ Escribir a <span className="font-medium">info@dekaelomedia.com</span>
          </a>
          <a
            href="https://wa.me/56920080031"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white text-black px-4 py-3 text-center font-semibold hover:opacity-90 transition text-sm"
          >
            WhatsApp directo: +56 9 2008 0031
          </a>
        </div>

        {/* CONTEXTO BREVE */}
        <div className="mt-8 grid gap-4 text-sm text-white/70">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="font-semibold text-white">¿Qué tipo de proyectos atendemos?</p>
            <p className="mt-1">
              Planes audiovisuales mensuales para equipos de marketing, comunicaciones internas,
              bancos, cámaras, colegios y empresas de servicios. También proyectos puntuales:
              videos institucionales, vodcasts, cápsulas formativas y piezas para campañas
              específicas.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="font-semibold text-white">¿Qué pasa después de enviar el formulario?</p>
            <ol className="mt-1 list-decimal list-inside space-y-1">
              <li>Revisamos tu mensaje y, si es necesario, pedimos 1–2 datos adicionales.</li>
              <li>Coordinamos una llamada breve (20–30 minutos) para entender el alcance.</li>
              <li>
                Te enviamos una propuesta clara con plan sugerido, plazos y valores para avanzar.
              </li>
            </ol>
          </div>
        </div>

        {/* FORMULARIO ZOHO */}
        <div id="form" className="mt-10">
          <h2 className="text-lg font-semibold text-white mb-2">
            Formulario de contacto
          </h2>
          <p className="text-sm text-white/70 mb-4">
            Mientras más contexto nos des (tipo de proyecto, plazos, si es plan mensual o campaña
            específica), mejor podremos orientarte en la primera respuesta.
          </p>

          <ZohoLeadForm />
        </div>

        {/* REDES SOCIALES */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-white/60 text-sm mb-4">
            También puedes seguir nuestro trabajo y casos recientes en redes:
          </p>
          <div className="flex justify-center gap-6 text-white/80 text-sm">
            <a
              href="https://www.instagram.com/dekaelo_media"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              📸 Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/dekaelo-media"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@dekaelo_media"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              ▶️ YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
