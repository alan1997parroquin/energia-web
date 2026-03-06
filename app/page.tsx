import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import PainPoints from "@/components/PainPoints";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import AboutSection from "@/components/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoría en Mercado Eléctrico Mayorista México | Energia México",
  description:
    "Expertos en el Mercado Eléctrico Mayorista (MEM). Ofrecemos estudios de prefactibilidad, gestión de interconexión ante CFE/CENACE y análisis de precios marginales.",
  keywords: ["mercado eléctrico mayorista", "cfe", "cenace", "estudios de prefactibilidad", "MEM","interconexión"],
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




