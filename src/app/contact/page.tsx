import { ContactForm } from "@/components/contact/ContactForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { offices } from "@/data/offices";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const page = site.pages.contact;
export const metadata = pageMetadata({ title: page.title, description: page.description, path: "/contact" });

export default function ContactPage() {
  const { contact } = site;
  const details = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, testId: "contact-email-link" },
    { label: "Phone", value: contact.phoneDisplay, href: `tel:${contact.phoneHref}`, testId: "contact-phone-link" },
    { label: "WhatsApp", value: "Message us on WhatsApp", href: contact.whatsappUrl, testId: "contact-whatsapp-link", external: true },
  ];
  return (
    <>
      <PageHeader title="Contact" lead={page.lead} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <div className="container-site section grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 className="h2 mb-6">Send an enquiry</h2>
          <ContactForm />
        </div>
        <aside className="lg:col-span-4" aria-labelledby="direct-contact-title">
          <div className="rounded-sm border border-line bg-surface p-6">
            <h2 id="direct-contact-title" className="h3">
              Direct contact
            </h2>
            <dl className="mt-4 space-y-4 text-[15px]">
              {details.map((d) => (
                <div key={d.label}>
                  <dt className="text-sm text-muted">{d.label}</dt>
                  <dd className="mt-0.5">
                    <a
                      href={d.href}
                      className="font-medium text-navy hover:underline"
                      data-testid={d.testId}
                      {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {d.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
            <h2 className="h3 mt-8">Offices</h2>
            <ul className="mt-3 space-y-1.5 text-[15px]">
              {offices.map((o) => (
                <li key={o.slug}>
                  {o.city}, {o.country}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-muted">Addresses on request.</p>
          </div>
        </aside>
      </div>
    </>
  );
}
