export const metadata = {
  title: 'Servicios | Dekaelo Media',
  description: 'Producción integral, plan mensual, piezas corporativas, reels y cobertura de eventos.',
};

const servicios = [
  {
    title: 'Plan Audiovisual Mensual',
    items: [
      '1 jornada de rodaje mensual (hasta 8 hrs)',
      '1 video largo + 4–5 reels',
      'Guion creativo y asesoría de contenidos',
      'Entrega por plataforma (IG, YT, LinkedIn)',
    ],
  },
  {
    title: 'Video Corporativo / Institucional',
    items: ['Guion y dirección', 'Rodaje multicámara', 'Entrevistas y B-roll', 'Animación de títulos/brand'],
  },
  {
    title: 'Cobertura de Eventos',
    items: ['Registro full-day', 'Clip destacado 60–90s', 'Reels para redes', 'Entrega 48–72 hrs (opcional)'],
  },
];

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Servicios</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {servicios.map(s => (
            <div key={s.title} className="card">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <ul className="mt-4 space-y-2 text-white/80">
                {s.items.map(it => <li key={it}>• {it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
