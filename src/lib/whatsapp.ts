import { site } from "@/data/site";
import type { EnquiryInput } from "@/lib/enquiry";

export function whatsappUrl(text?: string) {
  const base = site.contact.whatsappUrl;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function enquiryWhatsappMessage(d: EnquiryInput, reference?: string) {
  const lines = [
    "Hello AGENOVA,",
    "",
    "I would like to make an enquiry.",
    "",
    `Name: ${d.fullName}`,
    `Company: ${d.company}`,
    `Email: ${d.email}`,
    `Phone: ${d.phone}`,
    `Service: ${d.service}`,
    `Project: ${d.project}`,
    `Message: ${d.message}`,
  ];
  if (reference) lines.push(`Reference: ${reference}`);
  return lines.join("\n");
}
