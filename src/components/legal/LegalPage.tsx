import { PageHeader } from "@/components/ui/PageHeader";
import type { LegalDocument } from "@/types";

export function LegalPage({ doc }: { doc: LegalDocument }) {
  return (
    <>
      <PageHeader title={doc.title} breadcrumbs={[{ label: "Home", href: "/" }, { label: doc.title }]} />
      <div className="container-site section">
        <div className="max-w-3xl">
          <p className="rounded-sm border border-line bg-surface px-4 py-3 text-sm text-muted" role="note" data-testid="legal-draft-note">
            {doc.note}
          </p>
          {doc.sections.map((s) => (
            <section key={s.id} className="mt-10" aria-labelledby={s.id}>
              <h2 id={s.id} className="h3">
                {s.title}
              </h2>
              <div className="body-text mt-3">
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
