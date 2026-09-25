import type { PartnerCategory, PartnerEntry } from "@/types";

type Logo = { file: string; source: string; dark?: boolean };

const entry = (slug: string, name: string, initials: string, country: string, focus: string, logo?: Logo): PartnerEntry => ({
  slug,
  name,
  initials,
  country,
  focus,
  logo: `/images/partners/${logo?.file ?? `${slug}.png`}`,
  logoBg: logo?.dark ? "dark" : undefined,
  logoSource: logo?.source,
});

export const partnerImages = [
  { src: "/images/general/partner-network.jpg", alt: "Aerial view of a motorway interchange" },
  { src: "/images/general/partner-network-2.jpg", alt: "Aerial view of a container port terminal" },
];

export const partnerCategories: PartnerCategory[] = [
  {
    slug: "engineering-infrastructure",
    number: "01",
    title: "Engineering & Infrastructure",
    entries: [
      entry("larsen-toubro", "Larsen & Toubro (L&T)", "L&T", "India", "Engineering and major infrastructure", { file: "larsen-toubro.svg", source: "larsentoubro.com", dark: true }),
      entry("ds-constructions", "DS Constructions (DSC)", "DSC", "India", "Airport and infrastructure construction", { file: "dsc.png", source: "dsclimited.com" }),
      entry("shapoorji-pallonji", "Shapoorji Pallonji", "SP", "India", "Industrial and infrastructure construction", { file: "shapoorji-pallonji.svg", source: "shapoorjipallonji.com" }),
      entry("gulsan-construction", "Gülsan Construction", "GC", "Türkiye", "Railways, highways and civil infrastructure", { file: "gulsan-construction.png", source: "gulsan.com.tr", dark: true }),
    ],
  },
  {
    slug: "energy-power-electrical",
    number: "02",
    title: "Energy, Power & Electrical Equipment",
    entries: [
      entry("israel-electric-corporation", "Israel Electric Corporation (IEC)", "IEC", "Israel", "Power generation, transmission and distribution", { file: "israel-electric-corporation.svg", source: "Hebrew Wikipedia (IsraelElectric.svg)" }),
      entry("electra-elco", "Electra / Elco C&S", "EE", "Israel", "Electrical infrastructure, engineering and equipment", { file: "electra-elco.png", source: "electra.co.il" }),
      entry("shirdi-sai-electricals", "Shirdi Sai Electricals (SSEL)", "SSEL", "India", "Transformers and electrical equipment", { file: "shirdi-sai-electricals.png", source: "ssel.in" }),
      entry("paramount-communications", "Paramount Communications (Paramount Cables)", "PC", "India", "Power and communication cables", { file: "paramount-communications.png", source: "paramountcables.com" }),
      entry("bajaj-hindusthan", "Bajaj Hindusthan", "BH", "India", "Industrial power generation", { file: "bajaj-hindusthan.png", source: "bajajhindusthan.com" }),
    ],
  },
  {
    slug: "water-environmental",
    number: "03",
    title: "Water & Environmental Infrastructure",
    entries: [
      entry("mekorot", "Mekorot", "M", "Israel", "Water supply, treatment, desalination and wastewater infrastructure", { file: "mekorot.png", source: "mekorot-int.com", dark: true }),
    ],
  },
  {
    slug: "railways-airports-transport",
    number: "04",
    title: "Railways, Airports & Transport Infrastructure",
    entries: [
      entry("belgian-railways", "Belgian Railways", "BR", "Belgium", "Railway infrastructure and station redevelopment", { file: "belgian-railways.png", source: "Wikimedia Commons, SNCB logo.svg (public domain)" }),
      entry("eurostation-euro-immo-star", "EuroStation / Euro Immo Star", "ES", "Belgium", "Railway engineering and station redevelopment", { file: "eurostation.png", source: "eurostation.be (official site, Internet Archive snapshot 2017)" }),
      entry("munich-airport", "Munich Airport", "MA", "Germany", "Airport infrastructure and operations", { file: "munich-airport.png", source: "Wikimedia Commons, Flughafen munchen logo.png (public domain)" }),
    ],
  },
];

export const allPartners = partnerCategories.flatMap((c) => c.entries);
