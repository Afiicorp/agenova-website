import type { PartnerEntry } from "@/types";

type Logo = {
  file: string;
  source: string;
  dark?: boolean;
};

const entry = (
  slug: string,
  name: string,
  initials: string,
  country: string,
  focus: string,
  logo?: Logo,
): PartnerEntry => {
  const logoFile = logo?.file ?? `${slug}.png`;

  return {
    slug,
    name,
    initials,
    country,
    focus,
    sector: focus,
    category: "partner",
    logo: `/images/partners/${logoFile}`,
    logoBg: logo?.dark ? "dark" : undefined,
    logoSource: logo?.source,
  };
};

export const partnerImages = [
  {
    src: "/images/general/partner-network.jpg",
    alt: "Aerial view of a motorway interchange",
  },
  {
    src: "/images/general/partner-network-2.jpg",
    alt: "Aerial view of a container port terminal",
  },
];

/**
 * Strategic Partners
 *
 * Exactly 6 partners as defined for the Agenova website.
 */
export const partners: PartnerEntry[] = [
  entry(
    "hamburg-port-consulting",
    "Hamburg Port Consulting",
    "HPC",
    "Germany",
    "Port consulting, infrastructure and logistics",
    {
      file: "hamburg-port-consulting.svg",
      source: "hamburgportconsulting.com",
    },
  ),

  entry(
    "deutsche-bahn",
    "Deutsche Bahn",
    "DB",
    "Germany",
    "Railway infrastructure and transport",
    {
      file: "deutsche-bahn.png",
      source: "int.bahn.de",
    },
  ),

  entry(
    "belgian-railways",
    "Belgian Railways",
    "BR",
    "Belgium",
    "Railway infrastructure and station redevelopment",
    {
      file: "belgian-railways.png",
      source: "Belgian Railways",
    },
  ),

  entry(
    "israel-electric-corporation",
    "Israel Electric Corporation (IEC)",
    "IEC",
    "Israel",
    "Power generation, transmission and distribution",
    {
      file: "israel-electric-corporation.svg",
      source: "iec-global.com",
    },
  ),

  entry(
    "mekorot",
    "Mekorot",
    "M",
    "Israel",
    "Water supply, treatment, desalination and wastewater infrastructure",
    {
      file: "mekorot.png",
      source: "mekorot-int.com",
      dark: true,
    },
  ),

  entry(
    "obermeyer",
    "Obermeyer Group",
    "OG",
    "Germany",
    "Engineering, infrastructure and technical services",
    {
      file: "obermeyer.svg",
      source: "obermeyer-group.com",
    },
  ),
];

/**
 * Clients
 *
 * Organizations presented as clients rather than strategic partners.
 */
export const clients: PartnerEntry[] = [
  entry(
    "larsen-toubro",
    "Larsen & Toubro (L&T)",
    "L&T",
    "India",
    "Engineering and major infrastructure",
    {
      file: "larsen-toubro.svg",
      source: "larsentoubro.com",
      dark: true,
    },
  ),

  entry(
    "ds-constructions",
    "DS Constructions (DSC)",
    "DSC",
    "India",
    "Airport and infrastructure construction",
    {
      file: "dsc.png",
      source: "dsclimited.com",
    },
  ),

  entry(
    "shapoorji-pallonji",
    "Shapoorji Pallonji",
    "SP",
    "India",
    "Industrial and infrastructure construction",
    {
      file: "shapoorji-pallonji.svg",
      source: "shapoorjipallonji.com",
    },
  ),

  entry(
    "gulsan-construction",
    "Gülsan Construction",
    "GC",
    "Türkiye",
    "Railways, highways and civil infrastructure",
    {
      file: "gulsan.svg",
      source: "gulsan.com.tr",
      dark: true,
    },
  ),

  entry(
    "electra-elco",
    "Electra / Elco C&S",
    "EE",
    "Israel",
    "Electrical infrastructure, engineering and equipment",
    {
      file: "electra-elco.png",
      source: "electra.co.il",
    },
  ),

  entry(
    "shirdi-sai-electricals",
    "Shirdi Sai Electricals (SSEL)",
    "SSEL",
    "India",
    "Transformers and electrical equipment",
    {
      file: "shirdi-sai-electricals.png",
      source: "ssel.in",
    },
  ),

  entry(
    "paramount-communications",
    "Paramount Communications (Paramount Cables)",
    "PC",
    "India",
    "Power and communication cables",
    {
      file: "paramount-communications.png",
      source: "paramountcables.com",
    },
  ),

  entry(
    "bajaj-power",
    "Bajaj Power",
    "BP",
    "India",
    "Power generation and infrastructure",
    {
      file: "bajaj-power.jpg",
      source: "bajajpower.com",
    },
  ),

  entry(
    "eurostation-euro-immo-star",
    "EuroStation / Euro Immo Star",
    "ES",
    "Belgium",
    "Railway engineering and station redevelopment",
    {
      file: "eurostation.png",
      source: "eurostation.be",
    },
  ),

  entry(
    "munich-airport",
    "Munich Airport",
    "MA",
    "Germany",
    "Airport infrastructure and operations",
    {
      file: "munich-airport.png",
      source: "munich-airport.de",
    },
  ),
];

/**
 * Client sector categories used on the Partners & Clients page.
 *
 * These are derived from the clients list above.
 */
export const clientSectors = [
  {
    slug: "engineering-infrastructure",
    number: "01",
    title: "Engineering & Infrastructure",
    entries: clients.filter((client) =>
      [
        "larsen-toubro",
        "ds-constructions",
        "shapoorji-pallonji",
        "gulsan-construction",
      ].includes(client.slug),
    ),
  },

  {
    slug: "energy-power",
    number: "02",
    title: "Energy & Power",
    entries: clients.filter((client) =>
      [
        "electra-elco",
        "shirdi-sai-electricals",
        "paramount-communications",
        "bajaj-power",
      ].includes(client.slug),
    ),
  },

  {
    slug: "water-environment",
    number: "03",
    title: "Water & Environment",
    entries: [],
  },

  {
    slug: "railways-airports-transport",
    number: "04",
    title: "Railways, Airports & Transport",
    entries: clients.filter((client) =>
      [
        "eurostation-euro-immo-star",
        "munich-airport",
      ].includes(client.slug),
    ),
  },
];

/**
 * Combined list for components that need every organization.
 */
export const allPartners: PartnerEntry[] = [...partners, ...clients];