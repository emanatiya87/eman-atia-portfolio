import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // TODO: update to your real deployed domain
  const siteUrl = "https://eman-atia-portfolio.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
