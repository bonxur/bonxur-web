import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/torre", "/simulador", "/cultivos", "/soluciones", "/proyecto", "/cuestionario"];
  return routes.map((route) => ({
    url: `https://bonxur.gal${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
