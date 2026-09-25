import Link from "next/link";
import { site } from "@/data/site";

export function ContactCta() {
  return (
    <section className="bg-navy text-white" aria-labelledby="contact-cta-title" data-testid="contact-cta">
      <div className="container-site grid items-center gap-6 py-12 md:py-14 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 id="contact-cta-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
            {site.contactCta.title}
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-white/80">{site.contactCta.text}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
          <Link href="/contact" className="btn btn-gold" data-testid="cta-enquire-button">
            Enquire Now
          </Link>
          <a
            href={site.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
            data-testid="cta-whatsapp-button"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
