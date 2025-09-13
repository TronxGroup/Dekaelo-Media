import Image from 'next/image';

const clients = [
  { src: '/logo_1.png', alt: 'Cliente 1' },
  { src: '/logo_2.png', alt: 'Cliente 2' },
  { src: '/logo_3.png', alt: 'Cliente 3' },
  { src: '/logo_4.png', alt: 'Cliente 4' },
  { src: '/logo_5.png', alt: 'Cliente 5' },
  { src: '/logo_6.png', alt: 'Cliente 6' },
];

export function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-black/60">
      <div className="container py-10">
        <p className="text-center text-white/50 text-sm mb-6">Confían en nosotros</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center">
          {clients.map((c) => (
            <div key={c.alt} className="opacity-70 hover:opacity-100 transition">
              <Image src={c.src} alt={c.alt} width={150} height={48} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
