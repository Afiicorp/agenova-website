import { PartnerLogo } from "@/components/partners/PartnerLogo";
import type { PartnerEntry } from "@/types";

export function PartnerEntryCard({ entry }: { entry: PartnerEntry }) {
  return (
    <li className="flex min-w-0 flex-col" data-testid={`partner-${entry.slug}`}>
      <PartnerLogo entry={entry} className="h-20 sm:h-24" />
      <h3 className="mt-3 break-words font-semibold leading-snug text-navy">{entry.name}</h3>
      <p className="mt-0.5 text-sm text-muted">{entry.country}</p>
      <p className="mt-0.5 text-sm text-ink">{entry.focus}</p>
    </li>
  );
}
