import { LeadershipGrid } from "@/components/leadership/LeadershipGrid";
import { ContactCta } from "@/components/ui/ContactCta";
import { PageHeader } from "@/components/ui/PageHeader";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

const page = site.pages.leadership;
export const metadata = pageMetadata({ title: page.title, description: page.description, path: "/leadership" });

export default function LeadershipPage() {
  return (
    <>
      <PageHeader title="Leadership" lead={page.lead} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Leadership" }]} />
      <div className="container-site section">
        <LeadershipGrid />
      </div>
      <ContactCta />
    </>
  );
}
