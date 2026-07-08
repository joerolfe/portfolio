import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/StatsStrip";
import IncomeStreams from "@/components/sections/IncomeStreams";
import Experience from "@/components/sections/Experience";
import PersonalBrand from "@/components/sections/PersonalBrand";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <StatsStrip />
        <IncomeStreams />
        <Experience />
        <PersonalBrand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
