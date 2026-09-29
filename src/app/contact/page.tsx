import { ContactForm } from "@/components/contact/ContactForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const page = site.pages.contact;
export const metadata = pageMetadata({ title: page.title, description: page.description, path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" lead={page.lead} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <div className="container-site section">
        <section
          aria-labelledby="contact-form-title"
          className="mx-auto max-w-3xl rounded-sm border border-line bg-white p-6 md:p-10"
          data-testid="contact-form-card"
        >
          <h2 id="contact-form-title" className="h2 mb-6">
            Contact Us
          </h2>
          <ContactForm />
        </section>
      </div>
    </>
  );
}
