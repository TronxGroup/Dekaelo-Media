export function VideoEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="pt-[56.25%]" />
      <iframe
        className="absolute inset-0 w-full h-full"
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
