import { PROJECTS_SOURCE_NOTE } from "@/data/projects";

export function SourceNote({ className = "" }: { className?: string }) {
  return (
    <p role="note" className={`max-w-3xl text-sm leading-relaxed text-muted ${className}`} data-testid="projects-source-note">
      {PROJECTS_SOURCE_NOTE}
    </p>
  );
}
