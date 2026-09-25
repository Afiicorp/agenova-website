import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectRow } from "@/components/projects/ProjectRow";
import { ContactCta } from "@/components/ui/ContactCta";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SourceNote } from "@/components/ui/SourceNote";
import { projectGroups, projects } from "@/data/projects";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const page = site.pages.projects;
export const metadata = pageMetadata({ title: page.title, description: page.description, path: "/projects", image: projects[0].image.src });

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" lead={page.lead} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}>
        <SourceNote className="mt-5" />
      </PageHeader>
      <div className="container-site section space-y-14 md:space-y-16">
        {projectGroups.map((g) => {
          const items = projects.filter((p) => p.group === g.id);
          return (
            <Reveal key={g.id}>
              <section aria-labelledby={`group-${g.id}`} data-testid={`project-group-${g.id}`}>
                <h2 id={`group-${g.id}`} className="h2">
                  {g.title}
                </h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted">{g.intro}</p>
                {g.id === "mekorot" ? (
                  <ul className="mt-6 border-t border-line">
                    {items.map((p) => (
                      <ProjectRow key={p.slug} project={p} />
                    ))}
                  </ul>
                ) : (
                  <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((p) => (
                      <ProjectCard key={p.slug} project={p} />
                    ))}
                  </div>
                )}
              </section>
            </Reveal>
          );
        })}
      </div>
      <ContactCta />
    </>
  );
}
