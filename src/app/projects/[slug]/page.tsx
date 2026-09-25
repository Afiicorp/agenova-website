import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/ui/ContactCta";
import { CreditCaption } from "@/components/ui/CreditCaption";
import { PageHeader } from "@/components/ui/PageHeader";
import { getProject, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) return {};
  return pageMetadata({ title: project.title, description: project.summary, path: `/projects/${project.slug}`, image: project.image.src });
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const facts: [string, string | undefined][] = [
    ["Sector", project.sector],
    [project.partners.length > 1 ? "Partners" : "Partner", project.partners.join(", ")],
    ["Country / Region", project.countryRegion],
    ["Value", project.value],
    ["Role", project.role],
    ["Status", project.status],
  ];

  return (
    <>
      <PageHeader title={project.title} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }, { label: project.title }]} />
      <div className="container-site section">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <figure className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-surface">
              <Image src={project.image.src} alt={project.image.alt} fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
            </div>
            <CreditCaption src={project.image.src} prefix="Representative image, not the project site" />
          </figure>
          <div className="lg:col-span-5">
            <dl className="divide-y divide-line border-y border-line text-[15px]" data-testid="project-facts">
              {facts
                .filter(([, value]) => value)
                .map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[8.5rem_1fr] gap-4 py-3">
                    <dt className="text-muted">{label}</dt>
                    <dd className="text-ink">{value}</dd>
                  </div>
                ))}
            </dl>
            <h2 className="h3 mt-8">Overview</h2>
            <div className="body-text mt-3">
              {project.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-8 rounded-sm border border-line bg-surface p-4 text-sm leading-relaxed text-muted" data-testid="project-source">
              <p>
                Source:{" "}
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-navy hover:underline">
                  AFII Capital, published track record
                </a>
              </p>
              <p className="mt-1">Record: {project.sourceRecord}</p>
            </div>
          </div>
        </div>

        <nav aria-label="Project navigation" className="mt-14 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/projects" className="link-arrow" data-testid="project-back-link">
            <span aria-hidden="true">←</span> All projects
          </Link>
          <Link href={`/projects/${next.slug}`} className="group text-sm sm:text-right" data-testid="project-next-link">
            <span className="text-muted">Next engagement</span>
            <span className="mt-1 block font-semibold text-navy group-hover:underline">
              {next.title} <span aria-hidden="true">→</span>
            </span>
          </Link>
        </nav>
      </div>
      <ContactCta />
    </>
  );
}
