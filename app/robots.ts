import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://davillaconsultoria.com.br/sitemap.xml", // Confirme se o domínio está correto
  };
}
