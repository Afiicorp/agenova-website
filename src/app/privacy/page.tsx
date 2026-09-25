import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const doc = site.legal.privacy;
export const metadata = pageMetadata({ title: doc.title, description: doc.description, path: "/privacy" });

export default function PrivacyPage() {
  return <LegalPage doc={doc} />;
}
