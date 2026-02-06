import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import PainPoints from "@/components/PainPoints";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import CasesSection from "@/components/CasesSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <AboutSection />
      <PainPoints />
      <Process />
      <CasesSection />
      <FinalCTA />
    </main>
  );
}




