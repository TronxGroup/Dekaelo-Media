// app/contacto/page.tsx
export const metadata = {
  title: 'Contacto | Dekaelo Media',
  description: 'Agenda una llamada o cuéntanos sobre tu proyecto.',
};

export default function Page() {
  return (
    <section className="section">
      <div className="container max-w-2xl">
        <h1 className="h2">Contacto</h1>
        <p className="p mt-2 text-white/80">
          Cuéntanos brevemente tu necesidad y coordinamos una llamada. Respondemos dentro de 24–48h hábiles.
        </p>

        {/* Formulario Zoho integrado */}
        <div
          id="crmWebToEntityForm"
          className="zcwf_lblLeft crmWebToEntityForm mt-8 rounded-2xl bg-white/5 border border-white/10 p-6"
          style={{ maxWidth: "100%" }}
        >
          <form
            id="webform6988454000000608102"
            action="https://crm.zoho.com/crm/WebToLeadForm"
            name="WebToLeads6988454000000608102"
            method="POST"
            acceptCharset="UTF-8"
          >
            {/* Tokens ocultos */}
            <input type="hidden" name="xnQsjsdp" value="c1decf9b255b45483881cded17cb62aa469c1838dc5da8f4d700dca6fb78e1b3" />
            <input type="hidden" name="xmIwtLD" value="8f5a31310683b83674afa3197fe3a841b16c7a92f18c214c683dcd4da3b687eecc97035a64782d7f68637f65e654562a" />
            <input type="hidden" name="actionType" value="TGVhZHM=" />
            <input type="hidden" name="returnURL" value="https://www.dekaelomedia.com/gracias" />
            <input type="hidden" name="LEADCF5" value="Dekaelo" />
            <input type="hidden" name="LEADCF9" value="dekaelomedia.com/contacto" />

            {/* Campos */}
            <div className="grid md:grid-cols-2 gap-4">
              <input name="First Name" placeholder="Nombre" className="input" />
              <input name="Last Name" placeholder="Apellidos *" required className="input" />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input name="Company" placeholder="Empresa *" required className="input" />
              <input name="Email" type="email" placeholder="Email" className="input" />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input name="Phone" type="tel" placeholder="Teléfono (opcional)" className="input" />
              <select name="LEADCF8" required className="input">
                <option value="">Estoy interesado en…</option>
                <option value="Plan Audiovisual Mensual">Plan Audiovisual Mensual</option>
                <option value="Video Corporativo / Institucional">Video Corporativo / Institucional</option>
                <option value="Podcast en Video">Podcast en Video</option>
                <option value="Documental / Testimonial">Documental / Testimonial</option>
                <option value="Motion Graphics / Animación">Motion Graphics / Animación</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <select name="LEADCF7" className="input mt-4">
              <option value="">Presupuesto estimado</option>
              <option value="$500.000 - $1.000.000 CLP">$500.000 – $1.000.000 CLP</option>
              <option value="$1.000.000 - $2.000.000 CLP">$1.000.000 – $2.000.000 CLP</option>
              <option value="$2.000.000 - $4.000.000 CLP">$2.000.000 – $4.000.000 CLP</option>
              <option value="$4.000.000+ CLP">$4.000.000+ CLP</option>
              <option value="No estoy seguro">No estoy seguro</option>
            </select>

            <textarea
              name="LEADCF3"
              placeholder="Cuéntanos el objetivo, público y ejemplos de referencia."
              rows={6}
              required
              className="input mt-4"
            ></textarea>

            {/* Checkbox Privacidad */}
            <label className="flex items-start gap-3 text-sm text-white/70 mt-4">
              <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5" />
              <span>
                He leído y acepto la{" "}
                <a href="/privacidad-condiciones" className="underline" target="_blank" rel="noopener noreferrer">
                  Política de Privacidad y Condiciones
                </a>.
              </span>
            </label>

            {/* Captcha */}
            <div className="mt-4">
              <div className="g-recaptcha" data-sitekey="6LcB_M4rAAAAAJNy3AGA9wOt5ltN1EL23e8Q49H2" data-theme="dark"></div>
            </div>

            {/* Botón */}
            <button type="submit" className="btn mt-4">
              Enviar
            </button>
          </form>
        </div>

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

// estilos reutilizables
const input = "w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20";
