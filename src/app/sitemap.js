import { blogPosts, SITE_CONFIG } from "../data/content";

export default function sitemap() {
  const blogEntries = blogPosts.map((post) => ({
    url: `${SITE_CONFIG.domain}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE_CONFIG.domain,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...blogEntries,
  ];
}