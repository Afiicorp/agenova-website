import { credit } from "@/data/credits";

export function CreditCaption({ src, prefix = "Representative image", className = "" }: { src: string; prefix?: string; className?: string }) {
  const c = credit(src);
  return (
    <figcaption className={`mt-1.5 text-[11.5px] leading-relaxed text-muted ${className}`} data-testid="image-credit">
      {prefix}
      {c && (
        <>
          {" · Photo: "}
          <a href={c.source} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
            {c.author}
          </a>
          {`, ${c.license}`}
        </>
      )}
    </figcaption>
  );
}
