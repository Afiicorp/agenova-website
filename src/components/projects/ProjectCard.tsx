import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

export function ProjectCard({ project, aspect = "aspect-[4/3]" }: { project: Project; aspect?: string }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group flex h-full flex-col" data-testid={`project-card-${project.slug}`}>
      <div className={`relative overflow-hidden rounded-sm bg-surface ${aspect}`}>
        <Image src={project.image.src} alt={project.image.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="zoom-img object-cover" />
      </div>
      <p className="mt-1.5 text-[11px] text-muted">Representative image</p>
      <p className="mt-2 text-sm text-muted">{project.sector}</p>
      <h3 className="mt-1 text-lg font-semibold leading-snug text-navy decoration-gold decoration-2 underline-offset-4 group-hover:underline">
        {project.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-ink">
        {project.partners.join(" & ")} · {project.countryRegion}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
    </Link>
  );
}
