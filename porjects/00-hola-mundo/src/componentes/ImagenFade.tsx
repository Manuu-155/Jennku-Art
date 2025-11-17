interface ImagenFadeProps {
  src: string;
  alt?: string;
}

export function ImagenFade({ src, alt = "" }: ImagenFadeProps) {
  return (
    <div className="w-50 h-[300px] overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_20%,black_50%,transparent)]">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
