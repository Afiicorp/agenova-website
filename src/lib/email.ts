import type { EnquiryRecord } from "@/types";

export type EmailResult = { status: "sent" | "not_configured" | "failed"; id?: string; error?: string };

const LABELS: [keyof EnquiryRecord, string][] = [
  ["reference", "Reference"],
  ["fullName", "Full Name"],
  ["company", "Company"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["country", "Country"],
  ["subject", "Subject"],
  ["service", "Service / Area of Interest"],
  ["project", "Project / Requirement"],
  ["message", "Message"],
  ["createdAt", "Submitted (UTC)"],
  ["source", "Source"],
];

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

export function buildEnquiryEmailText(r: EnquiryRecord) {
  const lines = LABELS.map(([key, label]) => `${label}: ${String(r[key] ?? "") || "-"}`);
  return ["NEW AGENOVA WEBSITE ENQUIRY", "", ...lines].join("\n");
}

export async function sendEnquiryEmail(r: EnquiryRecord): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.CONTACT_EMAIL;
  if (!apiKey || !from || !to) return { status: "not_configured" };
  const text = buildEnquiryEmailText(r);
  const html = `<pre style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(text)}</pre>`;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: r.email,
        subject: `New AGENOVA website enquiry: ${r.subject}`.slice(0, 200),
        text,
        html,
      }),
    });
    if (!res.ok) return { status: "failed", error: `Resend responded with ${res.status}` };
    const body = (await res.json()) as { id?: string };
    return { status: "sent", id: body.id };
  } catch (err) {
    return { status: "failed", error: err instanceof Error ? err.message : "Unknown error" };
  }
}
