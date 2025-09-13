import { Gallery } from '../components/Gallery';

export const metadata = {
  title: 'Portafolio | Dekaelo Media',
  description: 'Selección de trabajos y proyectos.',
};

export default function Page() {
  return (
    <section>
      <div className="section container">
        <h1 className="h2">Portafolio</h1>
        <p className="p mt-2">Una selección de piezas recientes. Solicita el reel completo o casos detallados en contacto.</p>
      </div>
      <Gallery />
    </section>
  );
}
