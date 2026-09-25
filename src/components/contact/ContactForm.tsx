"use client";

import { useRef, useState, type FormEvent } from "react";
import { services } from "@/data/services";
import {
  ENQUIRY_LIMITS,
  emptyEnquiry,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryField,
  type EnquiryInput,
} from "@/lib/enquiry";
import { enquiryWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";

type Status = "idle" | "sending" | "success" | "error";
type FieldDef = {
  name: EnquiryField;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  kind?: "select" | "textarea";
  half?: boolean;
};

const FIELDS: FieldDef[] = [
  { name: "fullName", label: "Full Name", required: true, autoComplete: "name", half: true },
  { name: "company", label: "Company", autoComplete: "organization", half: true },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", half: true },
  { name: "country", label: "Country", autoComplete: "country-name", half: true },
  { name: "subject", label: "Subject", required: true, half: true },
  { name: "service", label: "Service / Area of Interest", kind: "select" },
  { name: "project", label: "Project / Requirement" },
  { name: "message", label: "Message", required: true, kind: "textarea" },
];

export const MESSAGES = {
  sending: "Sending enquiry...",
  success: "Thank you. Your enquiry has been received. Our team will contact you shortly.",
  error: "We could not send your enquiry right now. Please try again or contact us directly.",
};

export function ContactForm() {
  const [values, setValues] = useState<EnquiryInput>(emptyEnquiry);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitted, setSubmitted] = useState<EnquiryInput | null>(null);
  const [reference, setReference] = useState<string | undefined>();
  const [honeypot, setHoneypot] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const update = (name: EnquiryField, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors(({ [name]: _removed, ...rest }) => rest);
  };

  const focusFirst = (errs: EnquiryErrors) => {
    const first = FIELDS.find((f) => errs[f.name]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first.name}"]`)?.focus();
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const { data, errors: found } = validateEnquiry(values);
    if (Object.keys(found).length) {
      setErrors(found);
      setStatus("idle");
      focusFirst(found);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: honeypot }),
      });
      const body = await res.json().catch(() => null);
      if (res.ok && body?.ok) {
        setSubmitted(data);
        setReference(typeof body.reference === "string" ? body.reference : undefined);
        setValues(emptyEnquiry);
        setStatus("success");
        return;
      }
      if (res.status === 422 && body?.errors) {
        setErrors(body.errors);
        focusFirst(body.errors);
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success" && submitted) {
    return (
      <div className="rounded-sm border border-line bg-surface p-6 md:p-8" role="status" data-testid="contact-success">
        <h2 className="h3">Enquiry received</h2>
        <p className="mt-3 leading-relaxed" data-testid="contact-success-message">
          {MESSAGES.success}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={whatsappUrl(enquiryWhatsappMessage(submitted, reference))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            data-testid="contact-whatsapp-continue-button"
          >
            Continue on WhatsApp
          </a>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              setSubmitted(null);
              setStatus("idle");
            }}
            data-testid="contact-send-another-button"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="relative" aria-label="Enquiry form" data-testid="contact-form">
      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <FormField key={f.name} def={f} value={values[f.name]} error={errors[f.name]} onChange={update} />
        ))}
      </div>
      <div className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>
      <div aria-live="polite" className="mt-6 space-y-3">
        {hasErrors && status !== "error" && (
          <p className="text-sm text-red-700" data-testid="contact-validation-summary">
            Please check the highlighted fields.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" data-testid="contact-error-message">
            {MESSAGES.error}
          </p>
        )}
      </div>
      <button type="submit" className="btn btn-primary mt-4 w-full sm:w-auto" disabled={status === "sending"} data-testid="contact-submit-button">
        {status === "sending" ? MESSAGES.sending : "Send Enquiry"}
      </button>
    </form>
  );
}

function FormField({
  def,
  value,
  error,
  onChange,
}: {
  def: FieldDef;
  value: string;
  error?: string;
  onChange: (name: EnquiryField, value: string) => void;
}) {
  const id = `field-${def.name}`;
  const errorId = `${id}-error`;
  const common = {
    id,
    name: def.name,
    value,
    required: def.required,
    maxLength: ENQUIRY_LIMITS[def.name],
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    "data-testid": `contact-${def.name}-input`,
    className: `field ${error ? "border-red-700" : "border-line hover:border-[#c3ccd4]"}`,
  };
  return (
    <div className={def.half ? "" : "sm:col-span-2"}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {def.label}
        {def.required && (
          <>
            <span aria-hidden="true" className="text-gold-dark"> *</span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>
      {def.kind === "select" ? (
        <select {...common} onChange={(e) => onChange(def.name, e.target.value)}>
          <option value="">Select a service (optional)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.number} {s.name}
            </option>
          ))}
          <option value="General enquiry">General enquiry</option>
        </select>
      ) : def.kind === "textarea" ? (
        <textarea {...common} rows={6} onChange={(e) => onChange(def.name, e.target.value)} />
      ) : (
        <input {...common} type={def.type ?? "text"} autoComplete={def.autoComplete} onChange={(e) => onChange(def.name, e.target.value)} />
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-700" data-testid={`contact-${def.name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
