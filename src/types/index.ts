export type NavItem = { label: string; href: string };

export type ImageAsset = { src: string; alt: string };

export type ImageCredit = { title: string; author: string; license: string; source: string };

export type HeroMedia = {
  slides: ImageAsset[];
  video: string;
  poster: string;
  intervalMs: number;
  fadeMs: number;
};

export type ContentSection = { id: string; title: string; paragraphs: string[] };

export type LegalDocument = {
  title: string;
  description: string;
  note: string;
  sections: ContentSection[];
};

export type SiteConfig = {
  name: string;
  url: string;
  description: string;
  brand: { logo: string; logoWhite: string; logoWidth: number; logoHeight: number };
  contact: {
    email: string;
    phoneDisplay: string;
    phoneHref: string;
    whatsappNumber: string;
    whatsappUrl: string;
  };
  nav: NavItem[];
  cta: NavItem;
  legalNav: NavItem[];
  hero: {
    title: string;
    subtitle: string;
    text: string;
    primary: NavItem;
    secondary: NavItem;
  };
  intro: { title: string; lead: string; paragraphs: string[] };
  media: { title: string; text: string; video: string; image: ImageAsset };
  contactCta: { title: string; text: string };
  footer: { description: string };
  about: {
    lead: string;
    sections: ContentSection[];
    images: ImageAsset[];
  };
  pages: Record<string, { title: string; description: string; lead: string }>;
  legal: Record<"privacy" | "imprint" | "terms", LegalDocument>;
};

export type Service = {
  slug: string;
  number: string;
  name: string;
  short: string;
  overview: string[];
  scope: string[];
  approach: string;
  image: ImageAsset;
};

export type ProjectGroup = "mekorot" | "energy" | "rail";

export type Project = {
  slug: string;
  title: string;
  sector: string;
  partners: string[];
  countryRegion: string;
  summary: string;
  description: string[];
  role?: string;
  value?: string;
  status?: string;
  image: ImageAsset;
  imageCredit: ImageCredit;
  sourceUrl: string;
  sourceRecord: string;
  group: ProjectGroup;
  featured?: boolean;
};

export type Office = {
  slug: string;
  city: string;
  country: string;
  summary: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  address: string;
  mapUrl: string;
  image: ImageAsset;
  imageCaption: string;
};

export type PartnerEntry = {
  slug: string;
  name: string;
  initials: string;
  country: string;
  focus: string;
  logo: string;
  logoBg?: "dark";
  logoSource?: string;
};

export type PartnerCategory = {
  slug: string;
  number: string;
  title: string;
  entries: PartnerEntry[];
};

export type Leader = {
  slug: string;
  name: string;
  title: string;
  initials: string;
  photo: string;
};

export type EnquiryRecord = {
  reference: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  service: string;
  project: string;
  message: string;
  source: string;
  createdAt: string;
  emailStatus: "pending" | "sent" | "not_configured" | "failed";
  emailError?: string;
};
