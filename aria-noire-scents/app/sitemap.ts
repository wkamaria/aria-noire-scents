import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

// Add real routes here as they are created (e.g. /collection/[slug]).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}
