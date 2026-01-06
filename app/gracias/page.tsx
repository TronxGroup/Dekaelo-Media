import Script from "next/script";

export const metadata = {
  title: "Gracias | Dekaelo Media",
};

export default function Page() {
  return (
    <>
      {/* Evento de conversión de Google Ads */}
      <Script id="ads-conversion-lead" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17760996045/hbWqCJ_vtccbEM2VjZVC'
          });
        `}
      </Script>

      <section className="section">
        <div className="container text-center max-w-xl">
          <h1 className="h2">¡Gracias por tu mensaje!</h1>
          <p className="mt-3 text-white/80">
            Hemoss recibido tu solicitud. Nuestro equipo te contactará en breve para coordinar los siguientes pasos.
          </p>
          <a href="/" className="btn mt-6">Volver al inicio</a>
        </div>
      </section>
    </>
  );
}
