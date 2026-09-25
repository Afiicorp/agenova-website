import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ContactCta } from "@/components/ui/ContactCta";
import { CreditCaption } from "@/components/ui/CreditCaption";
import { PageHeader } from "@/components/ui/PageHeader";
import { getProject } from "@/data/projects";
import { getService, serviceProjects, services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMetadata({ title: service.name, description: service.short, path: `/services/${service.slug}`, image: service.image.src });
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const index = services.indexOf(service);
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];
  const related = (serviceProjects[service.slug] ?? []).map(getProject).filter((p) => p !== undefined);

  return (
    <>
      <PageHeader
        title={
          <>
            <span className="mr-3 text-gold-dark">{service.number}</span>
            {service.name}
          </>
        }
        lead={service.short}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]}
      />
      <div className="container-site section">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="h2">Overview</h2>
            <div className="body-text mt-4">
              {service.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <h2 className="h2 mt-10">Typical scope</h2>
            <ul className="mt-4 border-t border-line" data-testid="service-scope-list">
              {service.scope.map((item) => (
                <li key={item} className="border-b border-line py-3 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="h2 mt-10">How we work</h2>
            <p className="mt-4 leading-relaxed">{service.approach}</p>
          </div>
          <figure className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-surface lg:aspect-[4/5]">
                <Image src={service.image.src} alt={service.image.alt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
              <CreditCaption src={service.image.src} />
            </div>
          </figure>
        </div>

        {related.length > 0 && (
          <section className="mt-14 border-t border-line pt-10" aria-labelledby="related-title" data-testid="service-related-projects">
            <h2 id="related-title" className="h2">
              Related AFII Group engagements
            </h2>
            <p className="mt-3 max-w-3xl text-muted">Engagements in a matching sector, as listed in the AFII Group published track record.</p>
            <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </section>
        )}

        <nav aria-label="Service navigation" className="mt-14 grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
          <Link href={`/services/${prev.slug}`} className="group text-sm" data-testid="service-prev-link">
            <span className="text-muted">Previous service</span>
            <span className="mt-1 block font-semibold text-navy group-hover:underline">
              <span aria-hidden="true">← </span>
              {prev.number} {prev.name}
            </span>
          </Link>
          <Link href={`/services/${next.slug}`} className="group text-sm sm:text-right" data-testid="service-next-link">
            <span className="text-muted">Next service</span>
            <span className="mt-1 block font-semibold text-navy group-hover:underline">
              {next.number} {next.name}
              <span aria-hidden="true"> →</span>
            </span>
          </Link>
        </nav>
      </div>
      <ContactCta />
    </>
  );
}
