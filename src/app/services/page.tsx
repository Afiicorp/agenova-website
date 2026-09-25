import { ServiceRows } from "@/components/services/ServiceRows";
import { ContactCta } from "@/components/ui/ContactCta";
import { PageHeader } from "@/components/ui/PageHeader";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const page = site.pages.services;
export const metadata = pageMetadata({ title: page.title, description: page.description, path: "/services" });

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" lead={page.lead} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <div className="container-site section">
        <ServiceRows services={services} />
      </div>
      <ContactCta />
    </>
  );
}
