import { imageCredits } from "@/data/credits";
import type { Project, ProjectGroup } from "@/types";

export const PROJECTS_SOURCE_URL = "https://afiicapital.com/transactions/";
export const PROJECTS_SOURCE_NOTE =
  "Engagements listed in the AFII Group published track record (afiicapital.com). Images are representative and do not show the project sites.";

type Input = Omit<Project, "image" | "imageCredit" | "sourceUrl"> & { imageSrc: string; imageAlt: string };

const project = ({ imageSrc, imageAlt, ...p }: Input): Project => ({
  ...p,
  image: { src: imageSrc, alt: imageAlt },
  imageCredit: imageCredits[imageSrc],
  sourceUrl: PROJECTS_SOURCE_URL,
});

export const projectGroups: { id: ProjectGroup; title: string; intro: string }[] = [
  {
    id: "mekorot",
    title: "Mekorot — Water & Environmental Infrastructure",
    intro: "Water, desalination, wastewater and water recycling engagements with Mekorot, Israel's national water company, as listed in the AFII Group published track record.",
  },
  {
    id: "energy",
    title: "Energy & Power",
    intro: "Renewable and thermal power engagements involving Israel Electric and Bajaj Hindusthan.",
  },
  {
    id: "rail",
    title: "Railways & Transport Infrastructure",
    intro: "Station redevelopment and railway infrastructure engagements with EuroStation, Belgian Railways and Gülsan Construction.",
  },
];

const valueSentence = (value: string) =>
  value === "Not specified"
    ? "The value is not specified in the AFII published track record."
    : value === "Confidential"
      ? "The value is listed as confidential in the AFII published track record."
      : `The AFII published track record lists a value of ${value}.`;

type Row = [slug: string, title: string, sector: string, partners: string[], region: string, value: string, summary: string, record: string, group: ProjectGroup, image: string, alt: string, featured?: boolean];

const rows: Row[] = [
  ["mekorot-desalination-projects", "Desalination Projects", "Water & Wastewater", ["Mekorot"], "Israel", "USD 150 Million", "AFII Group engagement with Mekorot, Israel's national water company, relating to desalination projects in Israel.", "Water & Wastewater · Desalination Projects · Mekorot · Israel · USD 150 Million", "mekorot", "mekorot-desalination", "Coastal desalination plant seen from above", true],
  ["mekorot-wastewater-treatment-plants", "Wastewater Treatment Plants", "Water & Wastewater", ["Mekorot"], "Israel", "USD 100 Million & USD 60 Million", "AFII Group engagement with Mekorot relating to wastewater treatment plants in Israel.", "Water & Wastewater · Wastewater Treatment Plants · Mekorot · Israel · USD 100 Million & USD 60 Million", "mekorot", "mekorot-wastewater", "Treatment basins at a wastewater treatment site"],
  ["mekorot-water-supply-projects", "Water Supply Projects", "Water & Wastewater", ["Mekorot"], "Israel", "USD 100 Million", "AFII Group engagement with Mekorot relating to water supply projects in Israel.", "Water & Wastewater · Water Supply Projects · Mekorot · Israel · USD 100 Million", "mekorot", "mekorot-water-supply", "Open water conveyance canal in a rural landscape"],
  ["mekorot-water-projects-rajasthan", "Water Projects in Rajasthan", "Water & Wastewater", ["Mekorot"], "Israel–India", "Not specified", "AFII Group engagement with Mekorot relating to water projects in the Indian state of Rajasthan, listed as an Israel–India engagement.", "Water & Wastewater · Water Projects in Rajasthan · Mekorot · Israel-India · Not Specified", "mekorot", "mekorot-water-rajasthan", "Lined irrigation canal in Rajasthan"],
  ["mekorot-water-projects-haryana", "Water Projects in Haryana", "Water & Wastewater", ["Mekorot"], "Israel–India", "Not specified", "AFII Group engagement with Mekorot relating to water projects in the Indian state of Haryana, listed as an Israel–India engagement.", "Water & Wastewater · Water Projects in Haryana · Mekorot · Israel-India · Not Specified", "mekorot", "mekorot-water-haryana", "River barrage and water channel"],
  ["mekorot-water-recycling-haryana", "Water Recycling Projects, Haryana", "Water", ["Mekorot"], "Haryana", "Confidential", "AFII Group engagement with Mekorot relating to water recycling projects in Haryana.", "Water · Water Recycling Projects · Mekorot, Haryana · Confidential · Confidential", "mekorot", "mekorot-recycling-haryana", "Aerial view of a sewage treatment plant next to a lake"],
  ["mekorot-water-recycling-rajasthan", "Water Recycling Projects, Rajasthan", "Water", ["Mekorot"], "Rajasthan", "Confidential", "AFII Group engagement with Mekorot relating to water recycling projects in Rajasthan.", "Water · Water Recycling Projects · Mekorot, Rajasthan · Confidential · Confidential", "mekorot", "mekorot-recycling-rajasthan", "Circular clarifier tank at a water treatment works"],
  ["israel-electric-8000-mw-solar-projects", "8000 MW Solar Projects", "Renewable Energy", ["Israel Electric"], "Israel–India", "Not specified", "AFII Group engagement with Israel Electric relating to solar power projects with a combined capacity of 8000 MW, listed as an Israel–India engagement.", "Renewable Energy · 8000Mw Solar Power · Israel Electric · Israel-India · Not Specified (also listed as “8000 MW Solar Projects · Israel Electric”)", "energy", "israel-electric-solar", "Solar thermal tower surrounded by a heliostat field", true],
  ["bajaj-israel-electric-660-mw-supercritical-tpp", "660 MW × 3 Supercritical TPP", "Thermal Power", ["Bajaj Hindusthan", "Israel Electric"], "India", "Not specified", "AFII Group engagement with Israel Electric and Bajaj Hindusthan relating to a supercritical thermal power plant (TPP) of three 660 MW units in India.", "General Infrastructure · 660Mw x3 Super Critical TPP · Israel Electric & Bajaj Hindustan · India · Not Specified (also listed under Thermal Power)", "energy", "bajaj-iec-thermal", "Thermal power station with cooling towers and chimney"],
  ["eurostation-station-redevelopment-engineering", "Station Redevelopment Engineering", "Railways & Metro", ["EuroStation"], "India", "Not specified", "AFII Group engagement with EuroStation relating to engineering for railway station redevelopment in India.", "Railways & Metro · Station Redevelopment Engineering · EuroStation · India · Not Specified", "rail", "eurostation-station-engineering", "Railway station platform with a covered concourse"],
  ["eurostation-station-redevelopment-engineering-services", "Station Redevelopment Engineering & Services", "Infrastructure", ["EuroStation"], "Confidential", "Confidential", "AFII Group engagement with EuroStation relating to engineering and services for station redevelopment. The country is listed as confidential.", "Infrastructure · Station Redevelopment Engineering & Services · EuroStation · Confidential · Confidential", "rail", "eurostation-station-services", "Modern railway station with a large arched canopy"],
  ["belgian-railways-station-redevelopment-phase-1", "Railway Station Redevelopment Phase 1", "Railways & Metro", ["Belgian Railways"], "India–Belgium", "EUR 5 Billion", "AFII Group engagement with Belgian Railways relating to phase 1 of a railway station redevelopment programme, listed as an India–Belgium engagement.", "Railways & Metro · Railway Station Redevelopment Phase 1 · Belgium Railways · India-Belgium · EUR 5 Billion", "rail", "belgian-railways-station", "Historic railway station train hall with a glass roof"],
  ["gulsan-dfcc-projects-jv", "DFCC Projects JV", "Railways", ["Gülsan Construction"], "Turkey", "USD 500 Million", "AFII Group engagement relating to a joint venture with Gülsan Construction for DFCC projects.", "General Infrastructure · JV for DFCC Projects · Gulsan Construction · Turkey · USD 500 Million (also listed under Railways as “DFCC Projects JV”)", "rail", "gulsan-dfcc", "Newly laid railway track on a freight corridor alignment", true],
];

export const projects: Project[] = rows.map(([slug, title, sector, partners, countryRegion, value, summary, sourceRecord, group, image, imageAlt, featured]) =>
  project({
    slug,
    title,
    sector,
    partners,
    countryRegion,
    value,
    summary,
    description: [summary, valueSentence(value)],
    sourceRecord,
    group,
    featured,
    imageSrc: `/images/projects/${image}.jpg`,
    imageAlt,
  }),
);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
