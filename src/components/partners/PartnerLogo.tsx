import Image from "next/image";
import { publicFileExists } from "@/lib/assets";
import type { PartnerEntry } from "@/types";

export function PartnerLogo({ entry, className = "h-20", withTestId = true }: { entry: PartnerEntry; className?: string; withTestId?: boolean }) {
  const hasLogo = publicFileExists(entry.logo);
  const dark = hasLogo && entry.logoBg === "dark";
  return (
    <div
      className={`relative flex w-full items-center justify-center rounded-sm border ${dark ? "border-navy bg-navy" : "border-line bg-white"} ${className}`}
      data-testid={withTestId ? `partner-${entry.slug}-logo${hasLogo ? "" : "-placeholder"}` : undefined}
    >
      {hasLogo ? (
        <Image src={entry.logo} alt={`${entry.name} logo`} fill unoptimized sizes="240px" className="object-contain p-3" />
      ) : (
        <span className="text-base font-semibold tracking-wide text-navy" title={entry.name}>
          {entry.initials}
        </span>
      )}
    </div>
  );
}
