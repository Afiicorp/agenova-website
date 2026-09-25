import Link from "next/link";
import type { Service } from "@/types";

export function ServiceRows({ services }: { services: Service[] }) {
  return (
    <ul className="border-t border-line" data-testid="service-rows">
      {services.map((s) => (
        <li key={s.slug} className="border-b border-line">
          <Link
            href={`/services/${s.slug}`}
            className="group grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-4 gap-y-1.5 py-5 transition-colors duration-200 hover:bg-surface md:grid-cols-[4rem_minmax(0,15rem)_minmax(0,1fr)_auto] md:items-baseline md:gap-x-6 md:px-3 md:py-6"
            data-testid={`service-row-${s.slug}`}
          >
            <span className="text-xl font-semibold tabular-nums text-gold-dark">{s.number}</span>
            <span className="text-lg font-semibold text-navy">{s.name}</span>
            <span className="col-start-2 leading-relaxed text-muted md:col-start-auto">{s.short}</span>
            <span className="col-start-2 whitespace-nowrap text-sm font-medium text-navy decoration-gold decoration-2 underline-offset-4 group-hover:underline md:col-start-auto">
              View service <span aria-hidden="true">→</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
