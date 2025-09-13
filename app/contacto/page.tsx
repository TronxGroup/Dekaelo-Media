export const metadata = {
  title: 'Contacto | Dekaelo Media',
  description: 'Agenda una llamada o cuéntanos sobre tu proyecto.',
};

export default function Page() {
  return (
    <section className="section">
      <div className="container max-w-2xl">
        <h1 className="h2">Contacto</h1>
        <p className="p mt-2">Cuéntanos brevemente tu necesidad y coordinamos una llamada.</p>
        <form
          className="mt-6 space-y-4"
          action="https://formspree.io/f/your-id"
          method="POST"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Nombre" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20" />
            <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20" />
          </div>
          <input name="company" placeholder="Empresa (opcional)" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20" />
          <textarea name="message" required placeholder="Cuéntanos sobre tu proyecto" rows={5} className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-white/20"></textarea>
          <button className="btn" type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
