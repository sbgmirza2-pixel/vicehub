import { SITE_CONFIG } from "../data/content";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_CONFIG.domain}/sitemap.xml`,
  };
}