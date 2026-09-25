import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "epcm",
    number: "01",
    name: "EPCM",
    short: "Engineering, procurement and construction management delivered as an integrated service on behalf of the owner.",
    overview: [
      "Under an EPCM arrangement, AGENOVA acts on behalf of the owner to manage engineering, procurement and construction activities, while supply and construction contracts remain with the owner.",
      "The service is structured around clear interfaces, documented decisions and consistent reporting from early design through to commissioning and handover.",
    ],
    scope: [
      "Project execution strategy and contracting approach",
      "Management and coordination of engineering disciplines",
      "Procurement planning, tendering and contractor evaluation",
      "Construction management and site supervision",
      "Interface, change and risk management",
      "Commissioning coordination and handover support",
    ],
    approach:
      "We set up the project organisation, procedures and reporting at the start and keep them aligned with the owner's governance throughout delivery.",
    image: { src: "/images/services/epcm.jpg", alt: "Large industrial construction site with tower cranes" },
  },
  {
    slug: "engineering-management",
    number: "02",
    name: "Engineering Management",
    short: "Coordination of design disciplines, deliverables and technical interfaces across project phases.",
    overview: [
      "Engineering management ensures that design work from different disciplines and contractors fits together and progresses in line with the project schedule.",
      "We coordinate deliverables, reviews and technical decisions so that design information is available when procurement and construction need it.",
    ],
    scope: [
      "Engineering planning and deliverable registers",
      "Multidisciplinary design coordination",
      "Design reviews and technical queries",
      "Interface management between packages",
      "Document control and change tracking",
    ],
    approach:
      "We work with clear deliverable lists and review cycles, and we keep technical decisions traceable for the owner and the delivery team.",
    image: { src: "/images/services/engineering-management.jpg", alt: "Steel-framed industrial building under construction" },
  },
  {
    slug: "project-management",
    number: "03",
    name: "Project Management",
    short: "Planning, governance and coordination to keep scope, schedule and cost under control.",
    overview: [
      "Project management provides the structure a development needs to move from concept to completion: defined scope, realistic plans and clear responsibilities.",
      "We support owners with project set-up, governance, stakeholder coordination and regular reporting.",
    ],
    scope: [
      "Project set-up and execution planning",
      "Governance, roles and responsibilities",
      "Stakeholder and contractor coordination",
      "Risk and issue management",
      "Progress reporting to owners and investors",
    ],
    approach:
      "We focus on a small number of reliable controls and on regular, factual communication with all parties.",
    image: { src: "/images/services/project-management.jpg", alt: "Tower crane above a building under construction" },
  },
  {
    slug: "construction-management",
    number: "04",
    name: "Construction Management",
    short: "Site-level management of contractors, sequencing, quality and safety coordination.",
    overview: [
      "Construction management covers the day-to-day coordination of contractors on site, the sequencing of works and the monitoring of quality and safety.",
      "We represent the owner on site and keep construction aligned with design, contracts and schedule.",
    ],
    scope: [
      "Site organisation and logistics planning",
      "Contractor coordination and sequencing",
      "Quality inspections and non-conformance tracking",
      "Health, safety and environmental coordination",
      "Progress measurement and site reporting",
    ],
    approach:
      "Our site teams work closely with contractors while keeping a clear record of progress, quality and open issues.",
    image: { src: "/images/services/construction-management.jpg", alt: "Excavator working on a construction site" },
  },
  {
    slug: "procurement-support",
    number: "05",
    name: "Procurement Support",
    short: "Support with procurement strategy, tender documentation, bid evaluation and expediting.",
    overview: [
      "Procurement support helps owners select suitable suppliers and contractors and secure equipment and services in time for construction.",
      "We prepare and manage tender processes and follow up on orders through to delivery.",
    ],
    scope: [
      "Procurement strategy and package definition",
      "Tender documentation and bidder lists",
      "Technical and commercial bid evaluation",
      "Contract award support",
      "Expediting and delivery follow-up",
    ],
    approach:
      "We keep procurement transparent and documented, so that award decisions are well founded and easy to review.",
    image: { src: "/images/services/procurement-support.jpg", alt: "Heavy transformer delivery on a modular trailer" },
  },
  {
    slug: "technical-advisory",
    number: "06",
    name: "Technical Advisory",
    short: "Independent technical input on concepts, designs, risks and options for decision-makers.",
    overview: [
      "Technical advisory supports owners, developers and investors with independent input at key decision points.",
      "We review concepts, designs, schedules and budgets and set out options and risks in a clear, practical form.",
    ],
    scope: [
      "Concept and feasibility reviews",
      "Design and technical due diligence",
      "Option studies and risk assessments",
      "Schedule and budget plausibility checks",
      "Support for investment decisions",
    ],
    approach:
      "Our advice is factual and structured, so that decision-makers can compare options and understand the associated risks.",
    image: { src: "/images/services/technical-advisory.jpg", alt: "Power plant control panels and switchgear" },
  },
  {
    slug: "owners-engineer",
    number: "07",
    name: "Owner's Engineer",
    short: "Representation of the owner's technical interests during design, construction and commissioning.",
    overview: [
      "As owner's engineer, AGENOVA represents the owner's technical interests towards designers, suppliers and contractors.",
      "We review contractor deliverables, monitor progress and quality, and support the owner in technical and contractual matters.",
    ],
    scope: [
      "Review of contractor designs and documents",
      "Monitoring of manufacturing, construction and testing",
      "Assessment of changes and claims from a technical perspective",
      "Commissioning and performance test witnessing",
      "Reporting to owners, lenders and investors",
    ],
    approach:
      "We act independently of contractors and keep the owner informed with clear findings and recommendations.",
    image: { src: "/images/services/owners-engineer.jpg", alt: "Power transformer in a high-voltage substation" },
  },
  {
    slug: "project-controls",
    number: "08",
    name: "Project Controls",
    short: "Scheduling, cost control, progress measurement and reporting that support timely decisions.",
    overview: [
      "Project controls give owners and project teams a consistent view of schedule, cost and progress.",
      "We set up and maintain the planning, cost and reporting tools needed to identify deviations early.",
    ],
    scope: [
      "Baseline schedules and schedule updates",
      "Cost planning, budgets and forecasts",
      "Progress measurement and earned value",
      "Change control and trend management",
      "Management reporting",
    ],
    approach:
      "We keep controls proportionate to the project and focus on information that supports decisions.",
    image: { src: "/images/services/project-controls.jpg", alt: "Construction site seen from above" },
  },
];

export const serviceProjects: Record<string, string[]> = {
  epcm: ["bajaj-israel-electric-660-mw-supercritical-tpp", "israel-electric-8000-mw-solar-projects", "mekorot-desalination-projects"],
  "engineering-management": ["eurostation-station-redevelopment-engineering", "eurostation-station-redevelopment-engineering-services"],
  "project-management": ["belgian-railways-station-redevelopment-phase-1", "gulsan-dfcc-projects-jv"],
  "construction-management": ["mekorot-wastewater-treatment-plants", "mekorot-water-supply-projects"],
  "procurement-support": ["israel-electric-8000-mw-solar-projects", "bajaj-israel-electric-660-mw-supercritical-tpp"],
  "technical-advisory": ["mekorot-water-recycling-haryana", "mekorot-water-recycling-rajasthan"],
  "owners-engineer": ["mekorot-desalination-projects", "bajaj-israel-electric-660-mw-supercritical-tpp"],
  "project-controls": ["gulsan-dfcc-projects-jv", "belgian-railways-station-redevelopment-phase-1"],
};

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
