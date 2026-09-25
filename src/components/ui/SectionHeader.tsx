import Link from "next/link";

export function SectionHeader({
  title,
  intro,
  link,
  id,
}: {
  title: string;
  intro?: string;
  link?: { label: string; href: string; testId?: string };
  id?: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <h2 id={id} className="h2">
          {title}
        </h2>
        {intro && <p className="mt-3 leading-relaxed text-muted">{intro}</p>}
      </div>
      {link && (
        <Link href={link.href} className="link-arrow shrink-0" data-testid={link.testId}>
          {link.label} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
