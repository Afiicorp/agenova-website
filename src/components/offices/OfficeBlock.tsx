import Image from "next/image";
import { CreditCaption } from "@/components/ui/CreditCaption";
import type { Office } from "@/types";

export function OfficeBlock({ office, reverse }: { office: Office; reverse: boolean }) {
  return (
    <article id={office.slug} className="grid scroll-mt-24 items-center gap-6 lg:grid-cols-2 lg:gap-12" data-testid={`office-${office.slug}`}>
      <figure className={reverse ? "lg:order-2" : ""}>
        <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-surface">
          <Image src={office.image.src} alt={office.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <CreditCaption src={office.image.src} prefix={office.imageCaption} />
      </figure>
      <div>
        <h2 className="h2">{office.city}</h2>
        <p className="mt-1 text-muted">{office.country}</p>
        <p className="mt-4 leading-relaxed">{office.summary}</p>
        <dl className="mt-6 divide-y divide-line border-y border-line text-[15px]">
          <div className="grid grid-cols-[6rem_1fr] gap-4 py-3">
            <dt className="text-muted">Phone</dt>
            <dd>
              <a href={`tel:${office.phoneHref}`} className="text-navy hover:underline" data-testid={`office-${office.slug}-phone`}>
                {office.phoneDisplay}
              </a>
            </dd>
          </div>
          <div className="grid grid-cols-[6rem_1fr] gap-4 py-3">
            <dt className="text-muted">Email</dt>
            <dd>
              <a href={`mailto:${office.email}`} className="text-navy hover:underline" data-testid={`office-${office.slug}-email`}>
                {office.email}
              </a>
            </dd>
          </div>
          <div className="grid grid-cols-[6rem_1fr] gap-4 py-3">
            <dt className="text-muted">Address</dt>
            <dd data-testid={`office-${office.slug}-address`}>{office.address}</dd>
          </div>
        </dl>
        <a
          href={office.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-arrow mt-6"
          data-testid={`office-${office.slug}-map-link`}
        >
          View {office.city} on Google Maps <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
