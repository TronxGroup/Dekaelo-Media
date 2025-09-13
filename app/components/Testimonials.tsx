export function Testimonials() {
  const items = [
    { q: '“Transformaron nuestra comunicación interna en 60 días.”', a: 'Gerenta de Personas — Banco' },
    { q: '“Contenido consistente, resultados medibles. Aliados de verdad.”', a: 'CMO — Retail' },
  ];
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <h2 className="h2 text-center">Testimonios</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((t) => (
            <div key={t.a} className="card">
              <p className="text-lg">{t.q}</p>
              <p className="text-white/50 mt-3">{t.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
