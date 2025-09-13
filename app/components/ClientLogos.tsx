import Image from 'next/image';
const logos = [
  { src: '/logo_1.png', alt: 'Cliente 1' },
  { src: '/logo_2.png', alt: 'Cliente 2' },
  { src: '/logo_3.png', alt: 'Cliente 3' },
  { src: '/logo_4.png', alt: 'Cliente 4' },
  { src: '/logo_5.png', alt: 'Cliente 5' },
  { src: '/logo_6.png', alt: 'Cliente 6' },
];

export function ClientLogos() {
  return (
    <section className="section border-y border-white/10 bg-white/5">
      <div className="container">
        <p className="text-center text-white/60 text-sm mb-8">Marcas con las que hemos trabajado</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center">
          {logos.map((l, i) => (
            <div key={i} className="opacity-80 hover:opacity-100 transition">
              <Image src={l.src} alt={l.alt} width={160} height={48} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
