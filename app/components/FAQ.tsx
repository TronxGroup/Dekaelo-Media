const faqs = [
  { q: '¿Qué incluye el plan mensual?', a: '1 jornada de grabación, 1 video largo, 4–5 reels, guion y asesoría, entregas optimizadas y 1 revisión.' },
  { q: '¿Plazos típicos?', a: 'Primer corte en 5–7 días hábiles; revisiones en 48–72h.' },
  { q: '¿Material del cliente?', a: 'Logos, brandbook, accesos a locaciones y voceros.' },
  { q: '¿Derechos de uso?', a: 'Entrega con derechos para RRSS y web del cliente; TV y paid media opcional.' },
];

export function FAQ() {
  return (
    <section className="section">
      <div className="container max-w-3xl">
        <h2 className="h2">Preguntas frecuentes</h2>
        <div className="mt-6 divide-y divide-white/10 border border-white/10 rounded-2xl">
          {faqs.map((f) => (
            <details key={f.q} className="p-5 open:bg-white/5">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="text-white/70 mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
