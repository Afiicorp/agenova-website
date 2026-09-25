import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const doc = site.legal.imprint;
export const metadata = pageMetadata({ title: doc.title, description: doc.description, path: "/imprint" });

export default function ImprintPage() {
  return <LegalPage doc={doc} />;
}
