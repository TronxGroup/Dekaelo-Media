type VideoEmbedProps = {
  src: string;
  title?: string;
  className?: string;
};

export function VideoEmbed({
  src,
  title = "Video Dekaelo Media",
  className = "",
}: VideoEmbedProps) {
  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-black ${className}`}>
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default VideoEmbed;
