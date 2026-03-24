import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import PainPoints from "@/components/PainPoints";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import AboutSection from "@/components/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoría en Mercado Eléctrico Mexicano",
  description:
    "Consultoría energética en México para empresas: estudios de prefactibilidad, interconexión ante CFE y CENACE, integración fotovoltaica y capacitación especializada para tomar decisiones con datos.",
  keywords: [
    "Energía México",
    "consultoría energética en México",
    "mercado eléctrico mexicano",
    "mercado eléctrico mayorista",
    "MEM",
    "CFE",
    "CENACE",
    "estudios de prefactibilidad",
    "interconexión eléctrica",
    "integración fotovoltaica",
    "energía solar para empresas",
    "capacitación energética",
    "consultoría eléctrica industrial",
    "transición energética México",
  ],
  alternates: {
    canonical: "https://www.energia-mexico.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Consultoría en Mercado Eléctrico Mexicano | Energía México",
    description:
      "Consultoría, gestoría, integración fotovoltaica y capacitación para empresas en México.",
    url: "https://www.energia-mexico.com/",
    siteName: "Energía México",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://www.energia-mexico.com/imagen/hero/hero-energy.jpg",
        width: 1200,
        height: 630,
        alt: "Energía México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría en Mercado Eléctrico Mexicano | Energía México",
    description:
      "Prefactibilidad, interconexión, integración fotovoltaica y capacitación energética para empresas.",
    images: ["https://www.energia-mexico.com/imagen/hero/hero-energy.jpg"],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <AboutSection />
      <PainPoints />
      <Process />
      <FinalCTA />
    </main>
  );
}