import { PartnerLink } from "@/components/partners/PartnerLink";
import { PartnerLogo } from "@/components/partners/PartnerLogo";
import type { PartnerEntry } from "@/types";

const TILE = 224;
const SPEED = 60;

export function PartnerMarquee({
  entries,
  testId,
  label,
  repeat = 1,
  reverse = false,
}: {
  entries: PartnerEntry[];
  testId: string;
  label: string;
  repeat?: number;
  reverse?: boolean;
}) {
  const half = Array.from({ length: repeat }, () => entries).flat();
  const duration = (half.length * TILE) / SPEED;
  return (
    <div className="marquee hidden md:block" data-testid={testId}>
      <div className="marquee-track" style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}>
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee-group" aria-hidden={copy === 1 ? true : undefined} aria-label={copy === 0 ? label : undefined}>
            {half.map((e, i) => {
              const dup = copy === 1 || i >= entries.length;
              return (
                <li key={`${e.slug}-${i}`} className={`w-[200px] shrink-0 ${dup ? "marquee-dup" : ""}`} title={e.name} aria-hidden={dup && copy === 0 ? true : undefined}>
                  <PartnerLink entry={e} className="block" hidden={dup}>
                    <PartnerLogo entry={e} className="h-[100px]" withTestId={!dup} />
                  </PartnerLink>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}
