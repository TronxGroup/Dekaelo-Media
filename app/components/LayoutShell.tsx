"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";

const LANDING_PREFIXES = ["/video-corporativo", "/video-corporativo-gracias"];

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = LANDING_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
  if (isLanding) return <>{children}</>;
  return (
    <>
      <Navbar />
      <StickyCTA />
      {children}
      <Footer />
    </>
  );
}
