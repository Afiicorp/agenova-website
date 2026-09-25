"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = (href: string) =>
    `relative py-2 text-[15px] transition-colors duration-200 hover:text-navy after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-navy after:transition-transform after:duration-200 ${
      isActive(pathname, href) ? "font-medium text-navy after:scale-x-100" : "text-ink after:scale-x-0"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white" data-testid="site-header">
      <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-[76px]">
        <Link href="/" aria-label="AGENOVA home" data-testid="header-logo-link" className="shrink-0">
          <Image
            src={site.brand.logo}
            alt="Agenova"
            width={site.brand.logoWidth}
            height={site.brand.logoHeight}
            priority
            unoptimized
            className="h-8 w-auto lg:h-10"
          />
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={linkClass(item.href)}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  data-testid={`nav-${item.label.toLowerCase()}-link`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href={site.cta.href} className="btn btn-primary hidden lg:inline-flex" data-testid="nav-contact-button">
          {site.cta.label}
        </Link>
        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
        >
          <MenuIcon open={open} />
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-white lg:hidden" data-testid="mobile-menu">
          <ul className="container-site py-3">
            {site.nav.map((item) => (
              <li key={item.href} className="border-b border-line last:border-0">
                <Link
                  href={item.href}
                  className={`block py-3 text-base ${isActive(pathname, item.href) ? "font-medium text-navy underline decoration-2 underline-offset-8" : "text-ink"}`}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  data-testid={`mobile-nav-${item.label.toLowerCase()}-link`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pb-2 pt-4">
              <Link href={site.cta.href} className="btn btn-primary w-full" data-testid="mobile-nav-contact-button">
                {site.cta.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
