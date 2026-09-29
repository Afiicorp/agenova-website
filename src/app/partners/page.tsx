import Image from "next/image";
import { PartnerEntryCard } from "@/components/partners/PartnerEntryCard";
import { ContactCta } from "@/components/ui/ContactCta";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { clientSectors, partnerImages, partners } from "@/data/partners";
import { CreditCaption } from "@/components/ui/CreditCaption";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

const page = site.pages.partners;
export const metadata = pageMetadata({ title: page.title, description: page.description, path: "/partners", image: partnerImages[0].src });

export default function PartnersPage() {
  return (
    <>
      <PageHeader title={page.title} lead={page.lead} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Partners" }]} />
      <div className="container-site section space-y-12 md:space-y-14">
        <Reveal>
          <section aria-labelledby="partners-list-title" data-testid="partners-section">
            <h2 id="partners-list-title" className="h2">
              Partners
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted" data-testid="partners-section-intro">
              Organisations with which the AFII Group has collaborated on project development, engineering, technology, delivery and strategic initiatives.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8 lg:grid-cols-4">
              {partners.map((e) => (
                <PartnerEntryCard key={e.slug} entry={e} />
              ))}
            </ul>
          </section>
          <PartnerPhoto index={0} />
        </Reveal>
        <section aria-labelledby="clients-list-title" className="space-y-10 md:space-y-12" data-testid="clients-section">
          <div>
            <h2 id="clients-list-title" className="h2">
              Clients
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted" data-testid="clients-section-intro">
              Selected organisations for which the AFII Group has undertaken project development, advisory, engineering, transaction or related assignments.
            </p>
          </div>
          {clientSectors.map((c, i) => (
            <Reveal key={c.slug}>
              <div aria-labelledby={`${c.slug}-title`} role="group" data-testid={`partner-category-${c.slug}`}>
                <h3 id={`${c.slug}-title`} className="h3">
                  <span className="mr-3 text-gold-dark">{c.number}</span>
                  {c.title}
                </h3>
                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8 lg:grid-cols-4">
                  {c.entries.map((e) => (
                    <PartnerEntryCard key={e.slug} entry={e} headingLevel="h4" />
                  ))}
                </ul>
              </div>
              {i === 1 && <PartnerPhoto index={1} />}
            </Reveal>
          ))}
        </section>
      </div>
      <ContactCta />
    </>
  );
}

function PartnerPhoto({ index }: { index: number }) {
  const photo = partnerImages[index];
  return (
    <figure className="mt-12 md:mt-14" data-testid={`partners-photo-${index}`}>
      <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-surface md:aspect-[21/7]">
        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
      </div>
      <CreditCaption src={photo.src} />
    </figure>
  );
}
