import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse, type NextRequest } from "next/server";
import { sendEnquiryEmail } from "@/lib/email";
import { validateEnquiry } from "@/lib/enquiry";
import type { EnquiryRecord } from "@/types";

// Portable mirror of the FastAPI POST /api/contact. On the Emergent preview, /api/* is routed to FastAPI.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

async function append(line: object) {
  const file = process.env.ENQUIRY_STORE_PATH || path.join(process.cwd(), "data", "enquiries.jsonl");
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.appendFile(file, `${JSON.stringify(line)}\n`, "utf8");
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });

  const raw: unknown = await req.json().catch(() => null);
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }
  const body = raw as Record<string, unknown>;
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: false, error: "rejected" }, { status: 400 });
  }

  const { data, errors } = validateEnquiry(body);
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  const record: EnquiryRecord = {
    ...data,
    reference: randomUUID(),
    source: "AGENOVA website contact form",
    createdAt: new Date().toISOString(),
    emailStatus: "pending",
  };
  try {
    await append(record);
  } catch {
    return NextResponse.json({ ok: false, error: "persist_failed" }, { status: 500 });
  }

  const email = await sendEnquiryEmail(record);
  await append({ reference: record.reference, emailStatus: email.status, emailError: email.error, updatedAt: new Date().toISOString() }).catch(() => undefined);

  return NextResponse.json({ ok: true, reference: record.reference, emailStatus: email.status }, { status: 201 });
}
