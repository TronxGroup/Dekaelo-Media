import Image from 'next/image';

export const metadata = {
  title: 'Quiénes somos | Dekaelo Media',
  description:
    'Más de una década creando contenido con impacto real: cine, comerciales, documentales y producciones para marcas.',
};

export default function Page() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <h1 className="h2">Quiénes somos</h1>

        <div className="mt-4 flex flex-wrap gap-3 text-xs">
          <span className="badge">Selección Oficial • Sitges 2014</span>
          <span className="badge">Selección Oficial • Buenos Aires Rojo Sangre 2014</span>
          <span className="badge">+4.000.000 visualizaciones</span>
          <span className="badge">10+ años produciendo para marcas</span>
        </div>

        {/* Origen */}
        <p className="p mt-6">
          Somos un estudio audiovisual con enfoque estratégico. Unimos narrativa, dirección y técnica cinematográfica para que cada producción no solo se vea impecable, sino que genere impacto real en tu marca y en tu negocio.
        </p>

        <div className="my-10">
          <Image
            src="/foto_origen.jpg"
            alt="Primera etapa Dekaelo Media"
            width={1200}
            height={700}
            className="rounded-3xl border border-white/10 object-cover"
          />
          <p className="text-sm text-white/50 mt-2">Nuestros inicios en el cine independiente.</p>
        </div>

        {/* Cine */}
        <p className="p mt-6">
          Nacimos en el cine, con nuestra primera película <strong>“Yokai”</strong>, seleccionada oficialmente en el Festival de Sitges y en Buenos Aires Rojo Sangre el 2014. Desde entonces hemos creado spots para televisión, tutoriales con más de <strong>3 millones de visualizaciones</strong>, documentales, producciones corporativas, comerciales y series.
        </p>

        <div className="my-10 grid md:grid-cols-2 gap-6">
          <Image
            src="/foto_yokai.jpg"
            alt="Rodaje de Yokai"
            width={600}
            height={400}
            className="rounded-2xl border border-white/10 object-cover"
          />
          <Image
            src="/foto_tv.jpg"
            alt="Spot para televisión"
            width={600}
            height={400}
            className="rounded-2xl border border-white/10 object-cover"
          />
        </div>

        {/* 10 años */}
        <p className="p mt-6">
          A lo largo de más de <strong>10 años de trabajo</strong> junto a distintas marcas, acumulamos más de <strong>4.000.000 de visualizaciones</strong> en proyectos propios y de clientes. Nuestra experiencia se ha extendido a sectores como banca, retail, educación, tecnología y pymes.
        </p>

        <div className="my-10">
          <Image
            src="/foto_docu.jpg"
            alt="Producción documental"
            width={1200}
            height={700}
            className="rounded-3xl border border-white/10 object-cover"
          />
          <p className="text-sm text-white/50 mt-2">Rodajes documentales y corporativos en distintas ciudades.</p>
        </div>

        {/* Fundación Dekaelo */}
        <p className="p mt-6">
          El <strong>2023</strong>, una década después de nuestros primeros pasos en la producción, fundamos <strong>Dekaelo Media</strong> para consolidar todo ese recorrido y proyectarlo hacia el futuro. Con esta nueva etapa ofrecemos un servicio mensual único que va más allá de producir un video esporádico: queremos ser aliados de tu empresa, poniendo <em>cabeza y alma</em> en cada estrategia audiovisual para potenciar tu comunicación mes a mes.
        </p>
      </div>
    </section>
  );
}
