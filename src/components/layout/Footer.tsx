import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  const { contact } = site;
  return (
    <footer className="bg-navy-dark text-sm text-white/75" data-testid="site-footer">
      <div className="container-site py-8">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" aria-label="AGENOVA home" className="inline-block" data-testid="footer-logo-link">
              <Image src={site.brand.logoWhite} alt="Agenova" width={site.brand.logoWidth} height={site.brand.logoHeight} unoptimized className="h-7 w-auto" />
            </Link>
            <p className="mt-3 max-w-sm leading-relaxed">{site.footer.description}</p>
          </div>
          <nav aria-label="Footer" className="md:col-span-4">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5">
              {[...site.nav, site.cta].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white" data-testid={`footer-${item.label.toLowerCase()}-link`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="space-y-1.5 md:col-span-3">
            <li>
              <a href={`tel:${contact.phoneHref}`} className="hover:text-white" data-testid="footer-phone-link">
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-white" data-testid="footer-email-link">
                {contact.email}
              </a>
            </li>
            <li>
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white" data-testid="footer-whatsapp-link">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-white/10 pt-4 text-xs" data-testid="footer-bottom">
          <span data-testid="footer-copyright">© {new Date().getFullYear()} Agenova</span>
          {[...site.legalNav, { label: "Image credits", href: "/image-credits" }].map((item) => (
            <span key={item.href} className="flex items-center gap-2">
              <span aria-hidden="true">·</span>
              <Link href={item.href} className="hover:text-white" data-testid={`footer-${item.label.toLowerCase().replace(/\s+/g, "-")}-link`}>
                {item.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
