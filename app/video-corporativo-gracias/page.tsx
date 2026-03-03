import Link from "next/link";

export const metadata = {
  title: "Solicitud enviada | Dekaelo Media",
  description:
    "Hemos recibido tu solicitud. Te responderemos en menos de 24 horas.",
};

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen flex items-center">
      <section className="container max-w-3xl text-center py-32">

        <h1 className="text-4xl md:text-5xl font-semibold">
          Solicitud recibida
        </h1>

        <p className="mt-8 text-white/70 text-lg">
          Gracias por confiar en Dekaelo Media.
        </p>

        <p className="mt-4 text-white/60">
          Revisaremos tu información y te responderemos
          en menos de 24 horas con una propuesta clara.
        </p>

        <div className="mt-10 border-t border-white/10 pt-10 text-white/60 text-sm space-y-3">
          <p>✔ Propuesta estructurada</p>
          <p>✔ Alcance claro y presupuesto definido</p>
          <p>✔ Calendario de producción estimado</p>
        </div>

        <div className="mt-14">
          <Link
            href="/"
            className="border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition"
          >
            Volver al inicio
          </Link>
        </div>

      </section>
    </main>
  );
}
