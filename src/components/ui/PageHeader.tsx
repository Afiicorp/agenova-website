import Link from "next/link";

type Crumb = { label: string; href?: string };

export function PageHeader({
  title,
  lead,
  breadcrumbs,
  children,
}: {
  title: React.ReactNode;
  lead?: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-surface" data-testid="page-header">
      <div className="container-site py-10 md:py-14">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-navy hover:underline">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="h1 max-w-4xl" data-testid="page-title">
          {title}
        </h1>
        {lead && <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
