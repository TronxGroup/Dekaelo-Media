"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Rutas que NO deben mostrar navbar/footer
  const isLanding =
    pathname === "/video-corporativo" ||
    pathname === "/video-corporativo-gracias" ||
    pathname.startsWith("/video-corporativo/");

  if (isLanding) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar />
      <StickyCTA />
      <main>{children}</main>
      <Footer />
    </>
  );
}
