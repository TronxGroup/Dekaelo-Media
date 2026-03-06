"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Aquí defines qué rutas son "landing sin menú"
  const isLanding =
    pathname === "/video-corporativo" ||
    pathname.startsWith("/video-corporativo/");

  if (isLanding) {
    // Sin navbar / sticky / footer
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
