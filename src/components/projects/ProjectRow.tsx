import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="border-b border-line">
      <Link
        href={`/projects/${project.slug}`}
        className="group grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-4 py-4 transition-colors duration-200 hover:bg-surface sm:grid-cols-[9rem_minmax(0,1fr)_auto] sm:gap-6 md:px-3"
        data-testid={`project-row-${project.slug}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-surface">
          <Image src={project.image.src} alt={project.image.alt} fill sizes="144px" className="zoom-img object-cover" />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold leading-snug text-navy decoration-gold decoration-2 underline-offset-4 group-hover:underline md:text-lg">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">
            {project.sector} · {project.countryRegion}
          </p>
          {project.value && <p className="mt-1 text-sm text-ink">Value: {project.value}</p>}
        </div>
        <span className="col-start-2 whitespace-nowrap text-sm font-medium text-navy sm:col-start-auto">
          View engagement <span aria-hidden="true">→</span>
        </span>
      </Link>
    </li>
  );
}
