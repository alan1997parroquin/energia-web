export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.energia-mexico.com/sitemap.xml",
    host: "https://www.energia-mexico.com",
  };
}