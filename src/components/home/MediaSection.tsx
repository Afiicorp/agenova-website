import Image from "next/image";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { CreditCaption } from "@/components/ui/CreditCaption";

export function MediaSection({ hasVideo }: { hasVideo: boolean }) {
  const { media } = site;
  return (
    <section className="section" aria-labelledby="media-title" data-testid="media-section">
      <Reveal className="container-site grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <figure className="lg:col-span-7">
          <div className="relative aspect-video overflow-hidden rounded-sm bg-surface">
            {hasVideo ? (
              <video className="h-full w-full object-cover" src={media.video} poster={media.image.src} controls preload="none" data-testid="media-video" />
            ) : (
              <Image src={media.image.src} alt={media.image.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" data-testid="media-image" />
            )}
          </div>
          {!hasVideo && <CreditCaption src={media.image.src} />}
        </figure>
        <div className="lg:col-span-5">
          <h2 id="media-title" className="h2">
            {media.title}
          </h2>
          <p className="mt-4 leading-relaxed text-ink">{media.text}</p>
        </div>
      </Reveal>
    </section>
  );
}
