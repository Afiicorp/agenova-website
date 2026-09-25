import { OfficeBlock } from "@/components/offices/OfficeBlock";
import { ContactCta } from "@/components/ui/ContactCta";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { offices } from "@/data/offices";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const page = site.pages.offices;
export const metadata = pageMetadata({ title: page.title, description: page.description, path: "/offices", image: offices[0].image.src });

export default function OfficesPage() {
  return (
    <>
      <PageHeader title="Offices" lead={page.lead} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Offices" }]} />
      <div className="container-site section space-y-14 md:space-y-20">
        {offices.map((o, i) => (
          <Reveal key={o.slug}>
            <OfficeBlock office={o} reverse={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
      <ContactCta />
    </>
  );
}
