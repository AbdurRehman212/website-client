import type { MetadataRoute } from "next";
import { seo } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = seo.siteUrl ?? "https://example.com";

  return ["", "/about", "/services", "/contact"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
