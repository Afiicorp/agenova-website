import type { Office } from "@/types";

const shared = {
  phoneDisplay: "+49 157 39482762",
  phoneHref: "+4915739482762",
  email: "s@afii.eu",
  address: "Address on request",
};

export const offices: Office[] = [
  {
    slug: "frankfurt",
    city: "Frankfurt",
    country: "Germany",
    summary: "Office contact for enquiries in Germany.",
    ...shared,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Frankfurt%20am%20Main%2C%20Germany",
    image: { src: "/images/offices/frankfurt.jpg", alt: "Frankfurt skyline across the river Main" },
    imageCaption: "Representative city imagery, Frankfurt",
  },
  {
    slug: "london",
    city: "London",
    country: "United Kingdom",
    summary: "Office contact for enquiries in the United Kingdom.",
    ...shared,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=London%2C%20United%20Kingdom",
    image: { src: "/images/offices/london.jpg", alt: "City of London skyline seen from the river Thames" },
    imageCaption: "Representative city imagery, London",
  },
  {
    slug: "zug",
    city: "Zug",
    country: "Switzerland",
    summary: "Office contact for enquiries in Switzerland.",
    ...shared,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Zug%2C%20Switzerland",
    image: { src: "/images/offices/zug.jpg", alt: "Lakeside promenade in Zug with Lake Zug and mountains" },
    imageCaption: "Representative city imagery, Zug",
  },
];
