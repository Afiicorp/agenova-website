import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";

const STATIC_ROUTES = ["", "/about", "/services", "/projects", "/offices", "/partners", "/leadership", "/contact", "/privacy", "/imprint", "/terms", "/image-credits"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...STATIC_ROUTES, ...services.map((s) => `/services/${s.slug}`), ...projects.map((p) => `/projects/${p.slug}`)];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
