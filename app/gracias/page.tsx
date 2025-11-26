// app/gracias/page.tsx
export const metadata = {
  title: "Gracias | Dekaelo Media",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container text-center max-w-xl">
        <h1 className="h2">¡Gracias por tu mensaje!</h1>
        <p className="mt-3 text-white/80">
          Hemos recibido tu solicitud. Nuestro equipo te contactará en breve para coordinar los siguientes pasos.
        </p>
        <a href="/" className="btn mt-6">
          Volver al inicio
        </a>
      </div>
    </section>
  );
}
