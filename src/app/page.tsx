import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { MediaSection } from "@/components/home/MediaSection";
import { LeadershipGrid } from "@/components/leadership/LeadershipGrid";
import { PartnerLogo } from "@/components/partners/PartnerLogo";
import { PartnerMarquee } from "@/components/partners/PartnerMarquee";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ServiceRows } from "@/components/services/ServiceRows";
import { ContactCta } from "@/components/ui/ContactCta";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SourceNote } from "@/components/ui/SourceNote";
import { heroMedia } from "@/data/hero";
import { offices } from "@/data/offices";
import { clients, partners } from "@/data/partners";
import { PartnerLink } from "@/components/partners/PartnerLink";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { publicFileExists } from "@/lib/assets";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = pageMetadata({
  title: "AGENOVA | Engineering & EPCM",
  absoluteTitle: true,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  return (
    <>
      <Hero hasVideo={publicFileExists(heroMedia.video)} />

      <section className="section" aria-labelledby="intro-title" data-testid="home-intro">
        <Reveal className="container-site grid gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 id="intro-title" className="h2">
              {site.intro.title}
            </h2>
            <p className="mt-3 text-xl font-medium leading-snug text-navy md:text-2xl">{site.intro.lead}</p>
          </div>
          <div className="body-text lg:col-span-7 lg:pt-1">
            {site.intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Link href="/about" className="link-arrow mt-6" data-testid="home-about-link">
              More about AGENOVA <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section bg-surface" aria-labelledby="services-title" data-testid="home-services">
        <Reveal className="container-site">
          <SectionHeader id="services-title" title="Services" intro={site.pages.services.lead} link={{ label: "All services", href: "/services", testId: "home-all-services-link" }} />
          <ServiceRows services={services} />
        </Reveal>
      </section>

      <section className="section" aria-labelledby="projects-title" data-testid="home-projects">
        <Reveal className="container-site">
          <SectionHeader id="projects-title" title="Selected Projects" link={{ label: "All projects", href: "/projects", testId: "home-all-projects-link" }} />
          <SourceNote className="-mt-4 mb-8" />
          <div className="grid gap-x-6 gap-y-10 md:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section border-t border-line" aria-labelledby="offices-title" data-testid="home-offices">
        <Reveal className="container-site">
          <SectionHeader id="offices-title" title="Offices" link={{ label: "All offices", href: "/offices", testId: "home-all-offices-link" }} />
          <ul className="grid gap-6 sm:grid-cols-3">
            {offices.map((o) => (
              <li key={o.slug}>
                <Link href={`/offices#${o.slug}`} className="group block" data-testid={`home-office-${o.slug}`}>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-surface">
                    <Image src={o.image.src} alt={o.image.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="zoom-img object-cover" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-navy group-hover:underline">{o.city}</h3>
                  <p className="text-sm text-muted">{o.country}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section bg-surface" aria-labelledby="partners-title" data-testid="home-partners">
        <Reveal className="container-site">
          <SectionHeader
            id="partners-title"
            title={site.pages.partners.title}
            intro="Selected relationships of the AFII Group across engineering, energy, water and transport infrastructure."
            link={{ label: "View all", href: "/partners", testId: "home-partners-link" }}
          />
          <div className="space-y-6 md:hidden" data-testid="home-partner-logos">
            {[
              { label: "Partners", items: partners },
              { label: "Clients", items: clients },
            ].map((row) => (
              <div key={row.label}>
                <h3 className="mb-3 text-sm font-semibold text-navy">{row.label}</h3>
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {row.items.map((e) => (
                    <li key={e.slug} title={e.name}>
                      <PartnerLink entry={e} className="block">
                        <PartnerLogo entry={e} className="h-16" />
                        <p className="mt-1.5 truncate text-xs text-muted">{e.name}</p>
                      </PartnerLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="hidden space-y-6 md:block">
          <div>
            <h3 className="container-site mb-3 text-sm font-semibold text-navy">Partners</h3>
            <PartnerMarquee entries={partners} repeat={2} label="Partner logos" testId="home-partners-marquee" />
          </div>
          <div>
            <h3 className="container-site mb-3 text-sm font-semibold text-navy">Clients</h3>
            <PartnerMarquee entries={clients} repeat={1} reverse label="Client logos" testId="home-clients-marquee" />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="leadership-title" data-testid="home-leadership">
        <Reveal className="container-site">
          <SectionHeader id="leadership-title" title="Leadership" link={{ label: "Leadership", href: "/leadership", testId: "home-leadership-link" }} />
          <LeadershipGrid headingLevel="h3" compact />
        </Reveal>
      </section>

      <MediaSection hasVideo={publicFileExists(site.media.video)} />
      <ContactCta />
    </>
  );
}
