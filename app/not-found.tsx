import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-black text-white min-h-[60vh] flex items-center">
      <div className="container max-w-2xl py-28 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35 mb-4">404</p>
        <h1 className="text-4xl font-semibold text-white mb-4">Página no encontrada</h1>
        <p className="text-white/50 leading-relaxed mb-10">La página que buscas no existe o fue movida.</p>
        <Link href="/" className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-8 py-3.5 text-sm text-white/70 transition hover:bg-white/10 hover:text-white">
          <ArrowLeft className="h-4 w-4" />Volver al inicio
        </Link>
      </div>
    </main>
  );
}
