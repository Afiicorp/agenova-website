import { PageHeader } from "@/components/ui/PageHeader";
import { imageCredits } from "@/data/credits";
import { allPartners } from "@/data/partners";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Image Credits", description: "Credits and licences for photographs and logos used on the AGENOVA website.", path: "/image-credits" });

export default function ImageCreditsPage() {
  return (
    <>
      <PageHeader
        title="Image Credits"
        lead="Photographs are openly licensed images from Wikimedia Commons, used as representative imagery. They do not show AGENOVA or AFII Group project sites."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Image Credits" }]}
      />
      <div className="container-site section">
        <h2 className="h2">Photographs</h2>
        <ul className="mt-6 divide-y divide-line border-y border-line text-sm" data-testid="photo-credits">
          {Object.entries(imageCredits).map(([src, c]) => (
            <li key={src} className="grid gap-1 py-3 md:grid-cols-[18rem_minmax(0,1fr)] md:gap-6">
              <span className="break-all text-muted">{src}</span>
              <span>
                <a href={c.source} target="_blank" rel="noopener noreferrer" className="font-medium text-navy hover:underline">
                  {c.title}
                </a>
                {` · ${c.author} · ${c.license}`}
              </span>
            </li>
          ))}
        </ul>
        <h2 className="h2 mt-14">Logos</h2>
        <p className="mt-3 max-w-3xl text-muted">Company names and logos are trademarks of their respective owners and are shown for identification only.</p>
        <ul className="mt-6 divide-y divide-line border-y border-line text-sm" data-testid="logo-credits">
          {allPartners.map((p) => (
            <li key={p.slug} className="grid gap-1 py-3 md:grid-cols-[18rem_minmax(0,1fr)] md:gap-6">
              <span className="font-medium text-ink">{p.name}</span>
              <span className="text-muted">{p.logoSource ? `Source: ${p.logoSource}` : "No logo file; neutral placeholder shown"}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
