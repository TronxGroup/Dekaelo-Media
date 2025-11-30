import Image from 'next/image';

export const metadata = {
  title: 'Quiénes somos | Dekaelo Media',
  description:
    'Estudio audiovisual estratégico con más de una década de experiencia: cine, documentales y producciones para marcas, bancos, cámaras y empresas del Chile Central.',
};

export default function Page() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <h1 className="h2">Quiénes somos</h1>

        <div className="mt-4 flex flex-wrap gap-3 text-xs">
          <span className="badge">Selección Oficial · Sitges 2014</span>
          <span className="badge">Selección Oficial · Buenos Aires Rojo Sangre 2014</span>
          <span className="badge">+5.000.000 visualizaciones</span>
          <span className="badge">10+ años produciendo para marcas</span>
        </div>

        {/* Origen */}
        <p className="p mt-6">
          Somos un estudio audiovisual con enfoque estratégico. Unimos narrativa, dirección y técnica
          cinematográfica para que cada pieza no solo se vea impecable, sino que cumpla un rol claro
          en tu comunicación: explicar, inspirar, vender o fortalecer la cultura interna.
        </p>

        <div className="my-10">
          <Image
            src="/qs_dekaelo_3.png"
            alt="Primera etapa de Dekaelo Media en el cine independiente"
            width={1200}
            height={700}
            className="rounded-3xl border border-white/10 object-cover"
          />
          <p className="text-sm text-white/50 mt-2">
            Nuestros inicios en el cine independiente: años de aprendizaje intenso en narrativa,
            rodaje y dirección de actores.
          </p>
        </div>

        {/* Cine */}
        <p className="p mt-6">
          Nacimos en el cine con la película <strong>“Yokai”</strong>, seleccionada oficialmente en
          el Festival de Sitges y en Buenos Aires Rojo Sangre el 2014. Desde ahí fuimos ampliando el
          espectro: spots para televisión, tutoriales con millones de visualizaciones, cortos,
          documentales y piezas para distintas plataformas.
        </p>

        <div className="my-10 grid md:grid-cols-2 gap-6">
          <Image
            src="/qs_dekaelo_4.png"
            alt="Rodaje de la película Yokai"
            width={600}
            height={400}
            className="rounded-2xl border border-white/10 object-cover"
          />
          <Image
            src="/qs_dekaelo_1.png"
            alt="Producción de un spot para televisión"
            width={600}
            height={400}
            className="rounded-2xl border border-white/10 object-cover"
          />
        </div>

        {/* 10 años y marcas */}
        <p className="p mt-6">
          A lo largo de más de <strong>10 años</strong>, hemos acumulado más de{' '}
          <strong>5.000.000 de visualizaciones</strong> en proyectos propios y de clientes. Ese
          recorrido nos llevó a trabajar con bancos, cámaras empresariales, colegios, empresas de
          servicios y pymes que necesitaban elevar su comunicación en video.
        </p>
        <p className="p mt-4">
          Entendemos el lenguaje del mundo corporativo: directorios, gerencias y equipos de
          comunicaciones y marketing que requieren producción seria, plazos claros y material que
          pueda convivir tanto en YouTube y LinkedIn como en intranets, presentaciones o eventos.
        </p>

        <div className="my-10">
          <Image
            src="/qs_dekaelo_2.png"
            alt="Rodaje documental y corporativo en distintas ciudades"
            width={1200}
            height={700}
            className="rounded-3xl border border-white/10 object-cover"
          />
          <p className="text-sm text-white/50 mt-2">
            Rodajes documentales y corporativos en distintas ciudades y contextos.
          </p>
        </div>

        {/* Fundación Dekaelo y hoy */}
        <p className="p mt-6">
          El <strong>2023</strong>, una década después de nuestros primeros pasos, fundamos{' '}
          <strong>Dekaelo Media</strong> para consolidar todo ese recorrido y proyectarlo hacia
          producciones pensadas para el día a día de las marcas. No solo hacemos “un video”:
          diseñamos un sistema de contenido que se pueda mantener en el tiempo.
        </p>

        <p className="p mt-4">
          Hoy trabajamos bajo un modelo <strong>mensual</strong>, orientado a equipos de marketing y
          comunicaciones que necesitan un partner estable. Desde vodcasts internos y videos
          institucionales hasta cápsulas formativas y contenido para campañas, buscamos ser el
          estudio que entiende el contexto de tu organización y lo traduce en piezas audiovisuales
          claras, consistentes y medibles.
        </p>

        <p className="p mt-4">
          Nuestro objetivo es simple: que el video deje de ser “un pendiente” y se convierta en una
          herramienta concreta para tu marca, todos los meses.
        </p>
      </div>
    </section>
  );
}
