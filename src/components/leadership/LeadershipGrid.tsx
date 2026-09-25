import Image from "next/image";
import { leadership } from "@/data/leadership";
import { publicFileExists } from "@/lib/assets";

export function LeadershipGrid({ headingLevel = "h2", compact = false }: { headingLevel?: "h2" | "h3"; compact?: boolean }) {
  const Heading = headingLevel;
  return (
    <ul className={compact ? "grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4 lg:gap-x-6" : "grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4"} data-testid="leadership-grid">
      {leadership.map((person) => {
        const hasPhoto = publicFileExists(person.photo);
        return (
          <li key={person.slug} className={compact ? "max-w-[200px]" : "max-w-[260px] sm:max-w-none"} data-testid={`leader-${person.slug}`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-placeholder">
              {hasPhoto ? (
                <Image src={person.photo} alt={`Portrait of ${person.name}`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 320px" className="object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center" data-testid={`leader-${person.slug}-placeholder`}>
                  <span className={`${compact ? "text-2xl" : "text-4xl"} font-semibold tracking-wide text-navy`} aria-hidden="true">
                    {person.initials}
                  </span>
                </div>
              )}
            </div>
            <Heading className={`mt-3 font-semibold text-navy ${compact ? "text-base" : "text-lg"}`}>{person.name}</Heading>
            <p className="mt-1 text-sm text-muted">{person.title}</p>
          </li>
        );
      })}
    </ul>
  );
}
