import { PartnerLink } from "@/components/partners/PartnerLink";
import { PartnerLogo } from "@/components/partners/PartnerLogo";
import type { PartnerEntry } from "@/types";

export function PartnerEntryCard({ entry, headingLevel = "h3" }: { entry: PartnerEntry; headingLevel?: "h3" | "h4" }) {
  const Heading = headingLevel;
  return (
    <li className="flex min-w-0 flex-col" data-testid={`partner-${entry.slug}`}>
      <PartnerLink entry={entry} className="block" hidden>
        <PartnerLogo entry={entry} className="h-20 sm:h-24" />
      </PartnerLink>
      <Heading className="mt-3 break-words font-semibold leading-snug text-navy">
        <PartnerLink entry={entry} className="hover:underline">
          {entry.name}
        </PartnerLink>
      </Heading>
      <p className="mt-0.5 text-sm text-muted">{entry.country}</p>
      <p className="mt-0.5 text-sm text-ink">{entry.focus}</p>
    </li>
  );
}
