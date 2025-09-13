import Link from 'next/link';
export function StickyCTA() {
  return (
    <div className="fixed bottom-4 left-0 right-0 px-4 md:hidden z-50">
      <div className="rounded-2xl bg-yellow-500 text-black font-semibold text-center py-3 shadow-lg">
        <Link href="/contacto#form">Cotizar ahora</Link>
      </div>
    </div>
  );
}
