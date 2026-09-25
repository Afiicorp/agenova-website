import Image from "next/image";
import Link from "next/link";
import { ContactCta } from "@/components/ui/ContactCta";
import { CreditCaption } from "@/components/ui/CreditCaption";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const page = site.pages.about;
export const metadata = pageMetadata({ title: page.title, description: page.description, path: "/about" });

export default function AboutPage() {
  const { about } = site;
  return (
    <>
      <PageHeader title="About AGENOVA" lead={about.lead} breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <div className="container-site section space-y-14 md:space-y-16">
        {about.sections.map((s, i) => {
          const img = i % 2 === 0 ? about.images[i / 2] : undefined;
          return (
          <Reveal key={s.id}>
            <section id={s.id} aria-labelledby={`${s.id}-title`} className="grid gap-4 border-t border-line pt-8 lg:grid-cols-12 lg:gap-12" data-testid={`about-${s.id}`}>
              <h2 id={`${s.id}-title`} className="h2 lg:col-span-4">
                {s.title}
              </h2>
              <div className="body-text lg:col-span-8">
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.id === "afii-group" && (
                  <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                    <Link href="/projects" className="link-arrow" data-testid="about-projects-link">
                      AFII Group engagements <span aria-hidden="true">→</span>
                    </Link>
                    <Link href="/partners" className="link-arrow" data-testid="about-partners-link">
                      Selected AFII Group relationships <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                )}
              </div>
            </section>
            {img && (
              <figure className="mt-12">
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-surface md:aspect-[21/9]">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
                </div>
                <CreditCaption src={img.src} />
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
