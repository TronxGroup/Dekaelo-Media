"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "56920080031";
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola 👋 Quiero conversar sobre un proyecto con Dekaelo Media.\n\nEmpresa:\nQué necesito:\nFecha tentativa:\n\nGracias"
)}`;

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-50 md:hidden
        transition-transform duration-300
        ${visible ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <div className="h-6 bg-gradient-to-t from-black to-transparent" />
      <div className="bg-black px-4 pb-5 pt-2 flex gap-3">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black"
        >
          WhatsApp
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <Link
          href="/contacto"
          className="flex-1 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 py-3 text-sm text-white/70"
        >
          Cotizar
        </Link>
      </div>
    </div>
  );
}
