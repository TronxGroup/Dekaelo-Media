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

        {/* Alternativas rápidas */}
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

        <form
          className="mt-8 space-y-5"
          action="https://formspree.io/f/your-id"  // ← reemplaza con tu ID real
          method="POST"
        >
          {/* anti-spam honeypot */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          {/* metadata opcional */}
          <input type="hidden" name="source" value="Contacto Web Dekaelo" />

          <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
              <span className="sr-only">Nombre</span>
              <input
                name="name"
                required
                placeholder="Nombre"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>
            <label className="block">
              <span className="sr-only">Email</span>
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
              <span className="sr-only">Empresa</span>
              <input
                name="company"
                placeholder="Empresa (opcional)"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>
            <label className="block">
              <span className="sr-only">Teléfono</span>
              <input
                name="phone"
                type="tel"
                placeholder="Teléfono (opcional)"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
              <span className="sr-only">Interés</span>
              <select
                name="service_interest"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
                defaultValue=""
                required
              >
                <option value="" disabled>Estoy interesado en…</option>
                <option>Plan Audiovisual Mensual</option>
                <option>Video Corporativo / Institucional</option>
                <option>Podcast en Video</option>
                <option>Documental / Testimonial</option>
                <option>Motion Graphics / Animación</option>
                <option>Otro</option>
              </select>
            </label>
            <label className="block">
              <span className="sr-only">Presupuesto estimado</span>
              <select
                name="budget"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
                defaultValue=""
              >
                <option value="" disabled>Presupuesto estimado</option>
                <option>$500.000 – $1.000.000 CLP</option>
                <option>$1.000.000 – $2.000.000 CLP</option>
                <option>$2.000.000 – $4.000.000 CLP</option>
                <option>$4.000.000+ CLP</option>
                <option>No estoy seguro</option>
              </select>
            </label>
          </div>

          <label className="block">
            <span className="sr-only">Mensaje</span>
            <textarea
              name="message"
              required
              placeholder="Cuéntanos el objetivo, público y ejemplos de referencia."
              rows={6}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"
            ></textarea>
          </label>

          {/* Checkbox de Privacidad & Condiciones */}
          <label className="flex items-start gap-3 text-sm text-white/70">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5"
            />
            <span>
              He leído y acepto la{' '}
              <a href="/privacidad-condiciones" className="underline" target="_blank" rel="noopener noreferrer">
                Política de Privacidad y Condiciones
              </a>
              .
            </span>
          </label>

          <div className="flex items-center gap-3">
            <button className="btn" type="submit">Enviar</button>
            <p className="text-xs text-white/50">
              *Usaremos tus datos solo para coordinar y responder a tu solicitud.
            </p>
          </div>
        </form>

        {/* Información adicional */}
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
