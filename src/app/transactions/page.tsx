import Image from "next/image";
import type { Metadata } from "next";
import { ContactCta } from "@/components/ui/ContactCta";
import { PageHeader } from "@/components/ui/PageHeader";
import { TransactionsTable } from "@/components/transactions/TransactionsTable";

export const metadata: Metadata = {
  title: "Transactions",
  description:
    "Selected strategic advisory, investment, infrastructure, energy and development transactions from the AFII Group published track record.",
  alternates: {
    canonical: "/transactions",
  },
  openGraph: {
    title: "Transactions | AGENOVA",
    description:
      "Selected strategic advisory, investment, infrastructure, energy and development transactions from the AFII Group published track record.",
    url: "/transactions",
    siteName: "AGENOVA",
    type: "website",
    images: [
      {
        url: "/images/transactions/transactions-hero.jpg",
        width: 1264,
        height: 848,
      },
    ],
  },
};

export default function TransactionsPage() {
  return (
    <>
      <PageHeader
        title="AFII Group Transaction Track Record"
        lead="Selected strategic advisory, investment, infrastructure, energy and development transactions from the AFII Group's published track record."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Transactions" },
        ]}
      />

      <div className="container-site section">
        <div className="overflow-hidden rounded-sm border border-line bg-surface">
          <div className="relative aspect-[16/6] min-h-[220px]">
            <Image
              src="/images/transactions/transactions-hero.jpg"
              alt="Representative image of an infrastructure and industrial development environment"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
          <p className="px-4 py-2 text-[11px] text-muted md:px-5">
            Representative infrastructure image sourced from Unsplash.</p>
        </div>

        <div className="mt-10 md:mt-14">
          <TransactionsTable />
        </div>
      </div>

      <ContactCta />
    </>
  );
}
