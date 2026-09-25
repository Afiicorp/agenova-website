import type { SiteConfig } from "@/types";

const phoneHref = "+4915739482762";
const whatsappNumber = "4915739482762";

export const site: SiteConfig = {
  name: "AGENOVA",
  url: process.env.NEXT_PUBLIC_SITE_URL as string,
  description:
    "Engineering, project management and delivery support for industrial, energy and infrastructure developments.",
  brand: {
    logo: "/images/brand/logo.svg",
    logoWhite: "/images/brand/logo-white.svg",
    logoWidth: 290,
    logoHeight: 67,
  },
  contact: {
    email: "s@afii.eu",
    phoneDisplay: "+49 157 39482762",
    phoneHref,
    whatsappNumber,
    whatsappUrl: `https://wa.me/${whatsappNumber}`,
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Offices", href: "/offices" },
    { label: "Partners", href: "/partners" },
    { label: "Leadership", href: "/leadership" },
  ],
  cta: { label: "Contact", href: "/contact" },
  legalNav: [
    { label: "Privacy", href: "/privacy" },
    { label: "Imprint", href: "/imprint" },
    { label: "Terms", href: "/terms" },
  ],
  hero: {
    title: "AGENOVA",
    subtitle: "Engineering & EPCM for Complex Developments",
    text: "Engineering, project management and delivery support for industrial, energy and infrastructure developments.",
    primary: { label: "Our Services", href: "/services" },
    secondary: { label: "Enquire Now", href: "/contact" },
  },
  intro: {
    title: "About AGENOVA",
    lead: "Engineering expertise with a clear focus on delivery.",
    paragraphs: [
      "AGENOVA supports owners, developers and investors in delivering industrial, energy and infrastructure projects.",
      "We combine engineering, EPCM and project management services with a practical focus on scope, schedule, cost and quality, from early definition through to handover.",
    ],
  },
  media: {
    title: "Company Overview",
    text: "A short overview of how AGENOVA works alongside project owners: structured engineering, coordinated procurement and disciplined construction management.",
    video: "/videos/company-overview.mp4",
    image: {
      src: "/images/general/company-overview.jpg",
      alt: "Aerial view of a container port and industrial waterfront",
    },
  },
  contactCta: {
    title: "Discuss your next development",
    text: "Send us a short description of your project or requirement and our team will get back to you.",
  },
  footer: {
    description: "Engineering, EPCM and project delivery support for industrial, energy and infrastructure developments.",
  },
  about: {
    lead: "AGENOVA provides engineering, EPCM and project delivery support for industrial, energy and infrastructure developments.",
    sections: [
      {
        id: "who-we-are",
        title: "Who We Are",
        paragraphs: [
          "AGENOVA is an engineering and project management company supporting owners, developers and investors on complex developments.",
          "We work from early definition through to handover, combining technical understanding with structured, practical project delivery.",
        ],
      },
      {
        id: "engineering-epcm",
        title: "Engineering & EPCM",
        paragraphs: [
          "Our engineering and EPCM services cover the coordination of design disciplines, the management of procurement packages and the supervision of construction on behalf of the owner.",
          "The service model is adapted to each project, from a full EPCM mandate to targeted engineering management or owner's engineer support.",
        ],
      },
      {
        id: "project-management",
        title: "Project Management",
        paragraphs: [
          "Project management gives a development its structure: defined scope, realistic plans, clear responsibilities and regular reporting.",
          "We support owners with project set-up, governance, risk management and the coordination of designers, suppliers and contractors.",
        ],
      },
      {
        id: "delivery-support",
        title: "Delivery Support",
        paragraphs: [
          "Delivery depends on planning, coordination and control. We support project teams with scheduling, cost control, change management and site coordination.",
          "Our focus is on practical solutions that keep the project moving while protecting quality, safety and the owner's commercial position.",
        ],
      },
      {
        id: "sectors",
        title: "Industrial, Energy & Infrastructure",
        paragraphs: [
          "Our work is oriented towards industrial facilities, energy and power, water and transport infrastructure: sectors where technical interfaces, long-lead equipment and multiple contractors require careful coordination.",
        ],
      },
      {
        id: "international-orientation",
        title: "International Orientation",
        paragraphs: [
          "With offices in Frankfurt, London and Zug, AGENOVA works with clients and project teams across borders, languages and regulatory environments.",
        ],
      },
      {
        id: "afii-group",
        title: "The AFII Group Ecosystem",
        paragraphs: [
          "AGENOVA is part of the wider AFII Group ecosystem. According to its published track record, the AFII Group has advised on and executed strategic engagements across infrastructure, energy, water and other sectors.",
          "This ecosystem gives AGENOVA access to regional knowledge and established relationships in the markets where our clients develop projects.",
        ],
      },
    ],
    images: [
      { src: "/images/general/about-01.jpg", alt: "Aerial view of an industrial gas processing facility" },
      { src: "/images/general/about-02.jpg", alt: "Storage tanks and pipework at an industrial site" },
    ],
  },
  pages: {
    about: {
      title: "About",
      description: "AGENOVA provides engineering, EPCM and project delivery support for industrial, energy and infrastructure developments.",
      lead: "Engineering, EPCM and project delivery support for industrial, energy and infrastructure developments.",
    },
    services: {
      title: "Services",
      description: "Engineering, EPCM, project management, construction management, procurement support, technical advisory, owner's engineer and project controls services.",
      lead: "Eight service lines covering the project lifecycle, from early technical advice to construction and handover.",
    },
    projects: {
      title: "Projects",
      description: "Selected AFII Group engagements across water, energy, power and railway infrastructure.",
      lead: "Selected engineering, infrastructure, energy and industrial engagements.",
    },
    offices: {
      title: "Offices",
      description: "AGENOVA offices in Frankfurt, London and Zug.",
      lead: "Contact our offices in Frankfurt, London and Zug.",
    },
    partners: {
      title: "Selected AFII Group Relationships",
      description: "Selected relationships of the AFII Group across engineering, energy, water and transport infrastructure.",
      lead: "The organisations below illustrate selected relationships of the AFII Group across engineering, energy, water and transport infrastructure. Listing is for information only; names and logos belong to their respective owners.",
    },
    leadership: {
      title: "Leadership",
      description: "The leadership team of AGENOVA.",
      lead: "The leadership team of AGENOVA.",
    },
    contact: {
      title: "Contact",
      description: "Send an enquiry to AGENOVA or contact us by email, phone or WhatsApp.",
      lead: "Tell us about your project or requirement. Fields marked with * are required.",
    },
  },
  legal: {
    privacy: {
      title: "Privacy Policy",
      description: "How AGENOVA processes personal data submitted through this website.",
      note: "Draft text. To be reviewed and completed by legal counsel before publication.",
      sections: [
        {
          id: "controller",
          title: "Controller",
          paragraphs: [
            "The controller responsible for data processing on this website is AGENOVA. Full company details are provided in the Imprint.",
            "Contact: s@afii.eu, +49 157 39482762.",
          ],
        },
        {
          id: "enquiries",
          title: "Enquiries via the contact form",
          paragraphs: [
            "When you submit an enquiry, we process the information you provide (such as name, company, email address, phone number, country, subject and message) in order to respond to your request.",
            "Enquiries are stored securely and forwarded to our team by email. The data is retained only as long as necessary to handle the enquiry and any resulting business relationship, or as required by law.",
          ],
        },
        {
          id: "server-logs",
          title: "Server logs",
          paragraphs: [
            "When you visit this website, technical information such as IP address, date and time of access and browser type may be processed to operate the website securely and to prevent abuse.",
          ],
        },
        {
          id: "rights",
          title: "Your rights",
          paragraphs: [
            "You have the right to access, rectify and erase your personal data, to restrict or object to its processing and to data portability. You may also lodge a complaint with a supervisory authority.",
            "To exercise your rights, please contact s@afii.eu.",
          ],
        },
      ],
    },
    imprint: {
      title: "Imprint",
      description: "Legal information about AGENOVA.",
      note: "Draft text. Company details to be confirmed before publication.",
      sections: [
        {
          id: "company",
          title: "Company information",
          paragraphs: [
            "AGENOVA",
            "Registered address: to be confirmed.",
            "Legal form, commercial register entry, VAT identification number and authorised representatives: to be confirmed.",
          ],
        },
        {
          id: "contact",
          title: "Contact",
          paragraphs: ["Email: s@afii.eu", "Phone: +49 157 39482762"],
        },
        {
          id: "liability",
          title: "Liability for content",
          paragraphs: [
            "The content of this website has been prepared with care. However, no guarantee is given for the accuracy, completeness or timeliness of the information provided.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      description: "Terms governing the use of the AGENOVA website.",
      note: "Draft text. To be reviewed and completed by legal counsel before publication.",
      sections: [
        {
          id: "scope",
          title: "Scope",
          paragraphs: [
            "These terms apply to the use of this website. By using the website you accept these terms.",
          ],
        },
        {
          id: "information",
          title: "Information on this website",
          paragraphs: [
            "The information on this website is provided for general information purposes only and does not constitute an offer or professional advice. Project examples are illustrative unless stated otherwise.",
          ],
        },
        {
          id: "intellectual-property",
          title: "Intellectual property",
          paragraphs: [
            "Texts, images and graphics on this website are protected by copyright. Company names and logos of third parties belong to their respective owners.",
          ],
        },
        {
          id: "law",
          title: "Applicable law",
          paragraphs: ["Applicable law and place of jurisdiction: to be confirmed."],
        },
      ],
    },
  },
};
