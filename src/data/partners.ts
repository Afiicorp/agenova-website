import type { PartnerCategory, PartnerEntry } from "@/types";

type Logo = { file: string; source: string; dark?: boolean };
type Base = Omit<PartnerEntry, "logo" | "logoBg" | "logoSource" | "category">;

const org = (category: PartnerEntry["category"], base: Base, logo?: Logo): PartnerEntry => ({
  ...base,
  category,
  logo: `/images/partners/${logo?.file ?? `${base.slug}.png`}`,
  logoBg: logo?.dark ? "dark" : undefined,
  logoSource: logo?.source,
});

export const partnerImages = [
  { src: "/images/general/partner-network.jpg", alt: "Aerial view of a motorway interchange" },
  { src: "/images/general/partner-network-2.jpg", alt: "Aerial view of a container port terminal" },
];

export const partners: PartnerEntry[] = [
  org("partner", { slug: "hamburg-port-consulting", name: "Hamburg Port Consulting", initials: "HPC", country: "Germany", focus: "Port and maritime consulting", sector: "Ports & Maritime", website: "https://www.hamburgportconsulting.com" }, { file: "hamburg-port-consulting.svg", source: "hamburgportconsulting.com" }),
  org("partner", { slug: "deutsche-bahn", name: "Deutsche Bahn", initials: "DB", country: "Germany", focus: "Railway operations and infrastructure", sector: "Railways", website: "https://int.bahn.de/en" }, { file: "deutsche-bahn.png", source: "Wikimedia Commons, Deutsche Bahn AG-Logo.svg (public domain)" }),
  org("partner", { slug: "belgian-railways", name: "Belgian Railways", initials: "BR", country: "Belgium", focus: "Railway infrastructure and station redevelopment", sector: "Railways", website: "https://www.belgiantrain.be" }, { file: "belgian-railways.png", source: "Wikimedia Commons, SNCB logo.svg (public domain)" }),
  org("partner", { slug: "israel-electric-corporation", name: "Israel Electric Corporation (IEC)", initials: "IEC", country: "Israel", focus: "Power generation, transmission and distribution", sector: "Energy & Power", website: "https://iec-global.com/" }, { file: "israel-electric-corporation.svg", source: "Hebrew Wikipedia (IsraelElectric.svg)" }),
  org("partner", { slug: "mekorot", name: "Mekorot", initials: "M", country: "Israel", focus: "Water supply, treatment, desalination and wastewater infrastructure", sector: "Water", website: "https://www.mekorot.co.il/" }, { file: "mekorot.png", source: "mekorot-int.com", dark: true }),
  org("partner", { slug: "obermeyer-group", name: "Obermeyer Group", initials: "OG", country: "Germany", focus: "Engineering and planning consultancy", sector: "Engineering", website: "https://www.obermeyer-group.com" }, { file: "obermeyer.svg", source: "obermeyer-group.com", dark: true }),
];

export const allClientSectors: PartnerCategory[] = [
  {
    slug: "engineering-infrastructure",
    number: "01",
    title: "Engineering & Infrastructure",
    entries: [
      org("client", { slug: "larsen-toubro", name: "Larsen & Toubro (L&T)", initials: "L&T", country: "India", focus: "Engineering and major infrastructure", sector: "Engineering & Infrastructure", website: "https://www.larsentoubro.com/" }, { file: "larsen-toubro.svg", source: "larsentoubro.com", dark: true }),
      org("client", { slug: "ds-constructions", name: "DS Constructions (DSC)", initials: "DSC", country: "India", focus: "Airport and infrastructure construction", sector: "Engineering & Infrastructure", website: "https://www.dsclimited.com/" }, { file: "dsc.png", source: "dsclimited.com" }),
      org("client", { slug: "shapoorji-pallonji", name: "Shapoorji Pallonji", initials: "SP", country: "India", focus: "Industrial and infrastructure construction", sector: "Engineering & Infrastructure", website: "https://www.shapoorjipallonji.com/" }, { file: "shapoorji-pallonji.svg", source: "shapoorjipallonji.com" }),
      org("client", { slug: "gulsan-construction", name: "Gülsan Construction", initials: "GC", country: "Türkiye", focus: "Railways, highways and civil infrastructure", sector: "Engineering & Infrastructure", website: "https://www.gulsanholding.com.tr/en" }, { file: "gulsan.svg", source: "gulsanholding.com.tr (Gülsan Holding)" }),
    ],
  },
  {
    slug: "energy-power-electrical",
    number: "02",
    title: "Energy & Power",
    entries: [
      org("client", { slug: "electra-elco", name: "Electra / Elco C&S", initials: "EE", country: "Israel", focus: "Electrical infrastructure, engineering and equipment", sector: "Energy, Power & Electrical Equipment", website: "https://www.electra.co.il/en/" }, { file: "electra-elco.png", source: "electra.co.il" }),
      org("client", { slug: "shirdi-sai-electricals", name: "Shirdi Sai Electricals (SSEL)", initials: "SSEL", country: "India", focus: "Transformers and electrical equipment", sector: "Energy, Power & Electrical Equipment", website: "https://ssel.in/" }, { file: "shirdi-sai-electricals.png", source: "ssel.in" }),
      org("client", { slug: "paramount-communications", name: "Paramount Communications (Paramount Cables)", initials: "PC", country: "India", focus: "Power and communication cables", sector: "Energy, Power & Electrical Equipment", website: "https://www.paramountcables.com/" }, { file: "paramount-communications.png", source: "paramountcables.com" }),
      org("client", { slug: "bajaj-power", name: "Bajaj Power", initials: "BP", country: "India", focus: "Power generation", sector: "Energy, Power & Electrical Equipment", website: "https://www.bajajpower.com/" }, { file: "bajaj-power.jpg", source: "bajajpower.com" }),
    ],
  },
];

export const clientSectors: PartnerCategory[] = allClientSectors
  .map((c) => ({ ...c, entries: c.entries.filter((e) => !e.hidden) }))
  .filter((c) => c.entries.length > 0);

export const clients = clientSectors.flatMap((c) => c.entries);
export const allPartners = [...partners, ...clients];


