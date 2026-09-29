import type { Office } from "@/types";

const shared = {
  phoneDisplay: "+49 157 39482762",
  phoneHref: "+4915739482762",
  email: "s@afii.eu",
};

export const offices: Office[] = [
  {
    slug: "frankfurt",
    city: "Frankfurt",
    country: "Germany",
    summary: "Office contact for enquiries in Germany.",
    ...shared,
    address: "Alfred-Herrhausen-Allee 3-5, 65760 Eschborn, Germany",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Alfred-Herrhausen-Allee+3-5%2C+65760+Eschborn%2C+Germany",
    image: { src: "/images/offices/frankfurt.jpg", alt: "Frankfurt skyline across the river Main" },
    imageCaption: "Representative city imagery, Frankfurt",
  },
  {
    slug: "london",
    city: "London",
    country: "United Kingdom",
    summary: "Office contact for enquiries in the United Kingdom.",
    ...shared,
    address: "Kemp House, 124-128 City Road, London EC1V 2NX, UK",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kemp+House%2C+124-128+City+Road%2C+London+EC1V+2NX%2C+UK",
    image: { src: "/images/offices/london.jpg", alt: "City of London skyline seen from the river Thames" },
    imageCaption: "Representative city imagery, London",
  },
  {
    slug: "zug",
    city: "Zug",
    country: "Switzerland",
    summary: "Office contact for enquiries in Switzerland.",
    ...shared,
    address: "Gotthardstrasse 14, 6300 Zug, Switzerland",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Gotthardstrasse+14%2C+6300+Zug%2C+Switzerland",
    image: { src: "/images/offices/zug.jpg", alt: "Lakeside promenade in Zug with Lake Zug and mountains" },
    imageCaption: "Representative city imagery, Zug",
  },
  {
    slug: "delhi",
    city: "Delhi",
    country: "India",
    summary: "Office contact for enquiries in India.",
    name: "India Back Office / Office of the India Representative",
    company: "AFII Corporate Advisors Limited",
    phoneDisplay: "+91 11 46003500",
    phoneHref: "+911146003500",
    address: "Madam Sara Mathew Lane, B1/14 Safdarjung Enclave, New Delhi 110029, India",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=B1%2F14+Safdarjung+Enclave%2C+New+Delhi+110029%2C+India",
    image: { src: "/images/offices/delhi.jpg", alt: "View over Connaught Place in New Delhi" },
    imageCaption: "Representative city imagery, New Delhi",
  },
];
