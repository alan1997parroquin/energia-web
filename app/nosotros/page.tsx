import type { Metadata } from "next";
import NosotrosClient from "./NosotrosClient";

export const metadata: Metadata = {
  title: "Nosotros | Consultoría Energética en México | Energía México",
  description:
    "Conoce a Energía México, firma de consultoría energética especializada en mercado eléctrico mexicano, interconexión, nuevas cargas, prefactibilidad y estrategia técnico-regulatoria.",
  keywords: [
    "Energía México",
    "Nosotros Energía México",
    "consultoría energética en México",
    "mercado eléctrico mexicano",
    "consultoría energética",
    "interconexión CFE",
    "interconexión CENACE",
    "nuevas cargas eléctricas",
    "prefactibilidad energética",
    "consultoría MEM",
    "Mercado Eléctrico Mexicano",
    "transición energética México",
    "estrategia energética",
    "viabilidad energética",
    "consultoría eléctrica industrial",
    "proyectos de generación",
    "energía fotovoltaica México",
  ],
  alternates: {
    canonical: "https://www.energia-mexico.com/nosotros",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nosotros | Energía México",
    description:
      "Equipo de consultoría energética con experiencia en mercado eléctrico mexicano, interconexión, nuevas cargas y viabilidad de proyectos.",
    url: "https://www.energia-mexico.com/nosotros",
    siteName: "Energía México",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://www.energia-mexico.com/imagen/services/tom1.jpg",
        width: 1200,
        height: 630,
        alt: "Energía México — Nosotros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros | Energía México",
    description:
      "Conoce a Energía México y su enfoque técnico, regulatorio y financiero para decisiones energéticas en México.",
    images: ["https://www.energia-mexico.com/imagen/services/tom1.jpg"],
  },
};

export default function Page() {
  return <NosotrosClient />;
}