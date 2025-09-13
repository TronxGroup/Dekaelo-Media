import Image from 'next/image';
export function Gallery() {
  const items = [
    { src: '/proyecto_1.jpg', alt: 'Proyecto 1' },
    { src: '/proyecto_2.jpg', alt: 'Proyecto 2' },
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2 text-center mb-10">Galería de proyectos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((g) => (
            <div key={g.src} className="relative rounded-3xl overflow-hidden aspect-video border border-white/10">
              <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
