import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const doc = site.legal.terms;
export const metadata = pageMetadata({ title: doc.title, description: doc.description, path: "/terms" });

export default function TermsPage() {
  return <LegalPage doc={doc} />;
}
