import Image from "next/image";
import { PartnerEntryCard } from "@/components/partners/PartnerEntryCard";
import { ContactCta } from "@/components/ui/ContactCta";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { partnerCategories, partnerImages } from "@/data/partners";
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
        {partnerCategories.map((c, i) => {
          const photo = i === 0 ? partnerImages[0] : i === 2 ? partnerImages[1] : undefined;
          return (
          <Reveal key={c.slug}>
            <section aria-labelledby={`${c.slug}-title`} data-testid={`partner-category-${c.slug}`}>
              <h2 id={`${c.slug}-title`} className="h2">
                <span className="mr-3 text-gold-dark">{c.number}</span>
                {c.title}
              </h2>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8 lg:grid-cols-4">
                {c.entries.map((e) => (
                  <PartnerEntryCard key={e.slug} entry={e} />
                ))}
              </ul>
            </section>
            {photo && (
              <figure className="mt-12 md:mt-14" data-testid={`partners-photo-${i}`}>
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-surface md:aspect-[21/7]">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
                </div>
                <CreditCaption src={photo.src} />
              </figure>
            )}
          </Reveal>
          );
        })}
      </div>
      <ContactCta />
    </>
  );
}
