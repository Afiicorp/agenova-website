import type { PartnerEntry } from "@/types";

export function PartnerLink({
  entry,
  children,
  className = "",
  hidden = false,
}: {
  entry: PartnerEntry;
  children: React.ReactNode;
  className?: string;
  hidden?: boolean;
}) {
  if (!entry.website) return <span className={className}>{children}</span>;
  return (
    <a
      href={entry.website}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      tabIndex={hidden ? -1 : undefined}
      data-testid={hidden ? undefined : `partner-${entry.slug}-link`}
    >
      {children}
    </a>
  );
}
