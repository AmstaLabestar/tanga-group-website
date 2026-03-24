import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

const routes = [
  "",
  "/about",
  "/contact",
  "/innovation",
  "/insights",
  "/privacy",
  "/products",
  "/projects",
  "/solutions",
  "/technology",
  "/terms",
];

const locales = ["fr", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const baseEntries = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
  }));

  const localizedEntries = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteConfig.url}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : ("monthly" as const),
      priority: route === "" ? 0.9 : 0.7,
    }))
  );

  return [...baseEntries, ...localizedEntries];
}
