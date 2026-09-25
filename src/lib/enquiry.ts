export const ENQUIRY_FIELDS = [
  "fullName",
  "company",
  "email",
  "phone",
  "country",
  "subject",
  "service",
  "project",
  "message",
] as const;

export type EnquiryField = (typeof ENQUIRY_FIELDS)[number];
export type EnquiryInput = Record<EnquiryField, string>;
export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

export const ENQUIRY_LIMITS: Record<EnquiryField, number> = {
  fullName: 120,
  company: 160,
  email: 254,
  phone: 40,
  country: 80,
  subject: 160,
  service: 120,
  project: 300,
  message: 5000,
};

export const REQUIRED_FIELDS: EnquiryField[] = ["fullName", "email", "subject", "message"];
const MULTILINE: EnquiryField[] = ["project", "message"];

const REQUIRED_MESSAGES: EnquiryErrors = {
  fullName: "Please enter your full name.",
  email: "Please enter your email address.",
  subject: "Please enter a subject.",
  message: "Please enter your message.",
};

const EMAIL_RE =
  /^[^\s@<>"',;:()[\]\\]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;
const PHONE_RE = /^[+()0-9\s./-]{5,40}$/;

export const emptyEnquiry = Object.fromEntries(ENQUIRY_FIELDS.map((f) => [f, ""])) as EnquiryInput;

export function sanitizeText(value: unknown, multiline: boolean): string {
  if (typeof value !== "string") return "";
  const noTags = value.replace(/<\/?[a-zA-Z][^>]*>/g, "");
  const clean = multiline
    ? noTags.replace(/\r\n?/g, "\n").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    : noTags.replace(/[\u0000-\u001F\u007F]+/g, " ");
  return clean.trim();
}

export function validateEnquiry(raw: Record<string, unknown>): { data: EnquiryInput; errors: EnquiryErrors } {
  const data = { ...emptyEnquiry };
  const errors: EnquiryErrors = {};
  for (const field of ENQUIRY_FIELDS) {
    const value = sanitizeText(raw[field], MULTILINE.includes(field));
    data[field] = value;
    if (!value) {
      if (REQUIRED_FIELDS.includes(field)) errors[field] = REQUIRED_MESSAGES[field];
      continue;
    }
    if (value.length > ENQUIRY_LIMITS[field]) {
      errors[field] = `Please keep this under ${ENQUIRY_LIMITS[field]} characters.`;
    }
  }
  if (!errors.fullName && data.fullName.length < 2) errors.fullName = REQUIRED_MESSAGES.fullName;
  if (!errors.email && !EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!errors.phone && data.phone && !PHONE_RE.test(data.phone)) errors.phone = "Please enter a valid phone number.";
  if (!errors.message && data.message.length < 10) errors.message = "Please enter at least 10 characters.";
  return { data, errors };
}
