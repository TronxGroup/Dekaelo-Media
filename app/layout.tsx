export const metadata = {
  title: "Dekaelo Media",
  description: "Plan audiovisual mensual estratégico — Dekaelo Media",
  icons: {
    icon: "/dekaelo_favicon_250px.png", 
  },
};

import "./../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
