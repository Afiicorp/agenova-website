import { PartnerLogo } from "@/components/partners/PartnerLogo";
import { allPartners } from "@/data/partners";

export function PartnerMarquee({ testId }: { testId: string }) {
  return (
    <div className="marquee hidden md:block" data-testid={testId}>
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee-group" aria-hidden={copy === 1 ? true : undefined} aria-label={copy === 0 ? "Partner logos" : undefined}>
            {allPartners.map((e) => (
              <li key={e.slug} className="w-[200px] shrink-0" title={e.name}>
                <PartnerLogo entry={e} className="h-[100px]" withTestId={copy === 0} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
