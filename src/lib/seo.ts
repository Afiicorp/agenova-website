import type { Metadata } from "next";

type Options = { title: string; description: string; path: string; absoluteTitle?: boolean; image?: string };

export function pageMetadata({ title, description, path, absoluteTitle, image }: Options): Metadata {
  const ogTitle = absoluteTitle ? title : `${title} | AGENOVA`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName: "AGENOVA",
      type: "website",
      images: [{ url: image ?? "/images/hero/hero-01.jpg", width: 1264, height: 848 }],
    },
  };
}
