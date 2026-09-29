import type { Metadata, Viewport } from "next";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    site.url || "https://agenova-website-3ltu.vercel.app"
  ),
  title: {
    default: "AGENOVA | Engineering & EPCM",
    template: "%s | AGENOVA",
  },
  description: site.description,
  applicationName: "AGENOVA",
  openGraph: {
    type: "website",
    siteName: "AGENOVA",
    locale: "en_GB",
    title: "AGENOVA | Engineering & EPCM",
    description: site.description,
    images: [
      {
        url: "/images/hero/hero-01.jpg",
        width: 1264,
        height: 848,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2A4A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js')",
          }}
        />
      </head>

      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-[60] bg-navy px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          data-testid="skip-to-content"
        >
          Skip to content
        </a>

        <Header />

        <main id="main" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}