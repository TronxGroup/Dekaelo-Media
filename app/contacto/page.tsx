// app/contacto/page.tsx
import ZohoLeadForm from "@/components/ZohoLeadForm";

export const metadata = {
  title: "Contacto | Dekaelo Media",
  description: "Agenda una llamada o cuéntanos sobre tu proyecto.",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container max-w-2xl">
        <h1 className="h2">Contacto</h1>
        <p className="p mt-2 text-white/80">
          Cuéntanos brevemente tu necesidad y coordinamos una llamada. Respondemos dentro de 24–48h hábiles.
        </p>

        {/* Atajos */}
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <a
            href="mailto:info@dekaelomedia.com?subject=Consulta%20Dekaelo%20Media"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center hover:bg-white/10 transition"
          >
            ✉️ Escribir a info@dekaelomedia.com
          </a>
          <a
            href="https://wa.me/56920080031"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white text-black px-4 py-3 text-center font-semibold hover:opacity-90 transition"
          >
            WhatsApp: +56 9 2008 0031
          </a>
        </div>

        {/* Formulario Zoho (Client Component) */}
        <ZohoLeadForm />

        {/* Redes sociales */}
        <div className="mt-10 flex justify-center gap-6 text-white/80">
          <a href="https://www.instagram.com/dekaelo_media" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
          <a href="https://www.linkedin.com/company/dekaelo-media" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
          <a href="https://www.youtube.com/@dekaelo_media" target="_blank" rel="noopener noreferrer">▶️ YouTube</a>
        </div>
      </div>
    </section>
  );
}
