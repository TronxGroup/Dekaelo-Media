import Image from "next/image";

const logos = [
  { src: "/logo_2.png", alt: "BICE CORP" },
  { src: "/logo_14.png", alt: "Inchalam" },
  { src: "/logo_3.png", alt: "KGHM Chile" },
  { src: "/logo_13.png", alt: "Molinera San Cristobal" },
  { src: "/logo_15.png", alt: "iCity" },
  { src: "/logo_9.png", alt: "APCC Chamber" },
];

export function ClientLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center">
      {logos.map((l, i) => (
        <div key={i} className="opacity-60 hover:opacity-100 transition">
          <Image src={l.src} alt={l.alt} width={160} height={48} />
        </div>
      ))}
    </div>
  );
}
