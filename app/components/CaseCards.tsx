import Link from 'next/link';

const cases = [
  {
    title: 'Banco — Serie cápsulas RRHH',
    goal: 'Mejorar atracción de talento',
    work: '1 video largo + 5 reels',
    result: '85.000 reproducciones en 30 días',
  },
  {
    title: 'Retail — Lanzamiento campaña',
    goal: 'Brand awareness y tráfico',
    work: 'Spot 30s TV + 4 assets sociales',
    result: '+2.3M impresiones campaña',
  },
  {
    title: 'EdTech — Curso online',
    goal: 'Conversiones al curso',
    work: 'Trailer + testimoniales',
    result: 'CTR orgánico 3.7%',
  },
];

export function CaseCards() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Casos breves</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {cases.map((c) => (
            <div key={c.title} className="card">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-white/70 mt-2"><strong>Objetivo:</strong> {c.goal}</p>
              <p className="text-white/70"><strong>Trabajo:</strong> {c.work}</p>
              <p className="text-yellow-400 mt-3 text-sm"><strong>Resultado:</strong> {c.result}</p>
              <Link href="/portafolio" className="link mt-4 inline-block">Ver más →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
