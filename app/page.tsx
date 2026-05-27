import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/StatsStrip";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import PersonalBrand from "@/components/sections/PersonalBrand";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <Projects />
        <Experience />
        <PersonalBrand />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
