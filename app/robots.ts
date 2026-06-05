import { siteConfig } from "@/lib/site-config";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/merci"],
      },
    ],
    sitemap: `https://${siteConfig.domain}/sitemap.xml`,
  };
}
