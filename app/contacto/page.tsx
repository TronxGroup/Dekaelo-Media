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

        {/* FORMULARIO (2 columnas) → POST directo a Zoho */}
        <form
          className="mt-8 space-y-5"
          action="https://crm.zoho.com/crm/WebToLeadForm"
          method="POST"
        >
          {/* === Tokens obligatorios de Zoho (no tocar) === */}
          <input type="hidden" name="xnQsjsdp" value="ce62e73bed20037db6ee6838f49416e499734aff217562fa76a422e065326b90" />
          <input type="hidden" name="xmIwtLD"  value="db58bb9a738ed6cfe67bbaf363abb7342f2c174b973a23c8e85cdb2e07fc82d790fea1e3b812fad58176ae891950a449" />
          <input type="hidden" name="actionType" value="TGVhZHM=" />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          {/* Redirección post-envío */}
          <input type="hidden" name="returnURL" value="https://www.dekaelomedia.com/gracias" />

          {/* Marca (campo personalizado en Zoho) */}
          <input type="hidden" name="LEADCF5" value="Dekaelo" />

          {/* Origen dinámico (campo personalizado en Zoho) */}
          <input type="hidden" id="lead_origin" name="LEADCF9" value="dekaelomedia.com/contacto" />

          {/* Honeypot anti-spam (Zoho) */}
          <input type="text" style={{ display: 'none' }} name="aG9uZXlwb3Q" defaultValue="" />

          {/* Nombre / Apellido (Zoho requiere Last Name) */}
          <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
              <span className="sr-only">Nombre</span>
              <input
                name="First Name"
                placeholder="Nombre"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>
            <label className="block">
              <span className="sr-only">Apellidos</span>
              <input
                name="Last Name"
                required
                placeholder="Apellidos *"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>
          </div>

          {/* Empresa / Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
              <span className="sr-only">Empresa</span>
              <input
                name="Company"
                required
                placeholder="Empresa *"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>
            <label className="block">
              <span className="sr-only">Email</span>
              <input
                name="Email"
                type="email"
                placeholder="Email"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>
          </div>

          {/* Teléfono / Interés */}
          <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
              <span className="sr-only">Teléfono</span>
              <input
                name="Phone"
                type="tel"
                placeholder="Teléfono (opcional)"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>

            <label className="block">
              <span className="sr-only">Estoy interesado en…</span>
              <select
                name="LEADCF8"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
                defaultValue=""
                required
              >
                <option value="" disabled>Estoy interesado en…</option>
                <option value="Plan Audiovisual Mensual">Plan Audiovisual Mensual</option>
                <option value="Video Corporativo / Institucional">Video Corporativo / Institucional</option>
                <option value="Podcast en Video">Podcast en Video</option>
                <option value="Documental / Testimonial">Documental / Testimonial</option>
                <option value="Motion Graphics / Animación">Motion Graphics / Animación</option>
                <option value="Otro">Otro</option>
              </select>
            </label>
          </div>

          {/* Presupuesto (LEADCF7) */}
          <label className="block">
            <span className="sr-only">Presupuesto estimado</span>
            <select
              name="LEADCF7"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
              defaultValue=""
            >
              <option value="" disabled>Presupuesto estimado</option>
              <option value="$500.000 - $1.000.000 CLP">$500.000 – $1.000.000 CLP</option>
              <option value="$1.000.000 - $2.000.000 CLP">$1.000.000 – $2.000.000 CLP</option>
              <option value="$2.000.000 - $4.000.000 CLP">$2.000.000 – $4.000.000 CLP</option>
              <option value="$4.000.000+ CLP">$4.000.000+ CLP</option>
              <option value="No estoy seguro">No estoy seguro</option>
            </select>
          </label>

          {/* Mensaje (LEADCF3) */}
          <label className="block">
            <span className="sr-only">Mensaje</span>
            <textarea
              name="LEADCF3"
              required
              placeholder="Cuéntanos el objetivo, público y ejemplos de referencia."
              rows={6}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
            ></textarea>
          </label>

          {/* Checkbox de Privacidad & Condiciones (validación en cliente) */}
          <label className="flex items-start gap-3 text-sm text-white/70">
            <input
              type="checkbox"
              required
              className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5"
            />
            <span>
              He leído y acepto la{' '}
              <a href="/privacidad-condiciones" className="underline" target="_blank" rel="noopener noreferrer">
                Política de Privacidad y Condiciones
              </a>.
            </span>
          </label>

          <div className="flex items-center gap-3">
            <button className="btn" type="submit">Enviar</button>
            <p className="text-xs text-white/50">
              *Usaremos tus datos solo para coordinar y responder a tu solicitud.
            </p>
          </div>
        </form>

        {/* Script para setear ORIGEN dinámico (LEADCF9) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function () {
              try {
                var origen = (location.host + location.pathname).toLowerCase();
                var fld = document.getElementById('lead_origin');
                if (fld) fld.value = origen;
              } catch (e) {}
            })();
          `,
          }}
        />

        {/* Info adicional */}
        <div className="mt-10 rounded-2xl bg-gray-900 border border-white/10 p-5">
          <p className="text-sm text-white/70">
            <span className="font-semibold text-white">¿Qué sigue?</span> Te escribiremos para agendar una llamada
            breve, entender objetivos y proponerte el enfoque audiovisual correcto (plan mensual o proyecto puntual).
          </p>
        </div>
      </div>
    </section>
  );
}
