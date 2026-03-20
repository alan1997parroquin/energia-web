import type { MetadataRoute } from "next";

const baseUrl = "https://www.energia-mexico.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Consultoría
    {
      url: `${baseUrl}/servicios/consultoria`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios/consultoria/prefactibilidad`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/consultoria/estudios-especificos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/consultoria/anticipacion`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Gestoría
    {
      url: `${baseUrl}/servicios/gestoria`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios/gestoria/cfe-baja-tension-y-media`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/gestoria/cenace-y-cfe-1mw`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Fotovoltaico
    {
      url: `${baseUrl}/servicios/fotovoltaico`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Capacitación
    {
      url: `${baseUrl}/servicios/capacitacion`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/capacitacion/mem`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicios/capacitacion/riesgos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicios/capacitacion/calliope`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicios/capacitacion/certificaciones`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicios/capacitacion/datos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Legales
    {
      url: `${baseUrl}/aviso-de-privacidad`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}