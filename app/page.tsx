import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import PainPoints from "@/components/PainPoints";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <PainPoints />
      <Process />
      <FinalCTA />
    </main>
  );
}
