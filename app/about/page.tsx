import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AboutTimeline from "@/components/AboutTimeline";

export const metadata = {
  title: "About — Joseph Rolfe",
  description:
    "The story of how an 18-year-old from Swadlincote started building before everyone else.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "88px" }}>
        <AboutTimeline />
      </main>
      <Footer />
    </>
  );
}
