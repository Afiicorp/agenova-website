import { PROJECTS_SOURCE_NOTE } from "@/data/projects";

export function SourceNote({ className = "", text = PROJECTS_SOURCE_NOTE }: { className?: string; text?: string }) {
  return (
    <p role="note" className={`max-w-3xl text-sm leading-relaxed text-muted ${className}`} data-testid="projects-source-note">
      {text}
    </p>
  );
}
