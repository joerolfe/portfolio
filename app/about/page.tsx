import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AboutTimeline from "@/components/AboutTimeline";

export const metadata = {
  title: "About — Joseph Rolfe",
  description:
    "From Code Club at school to running a digital agency, TikTok Shop, and automated social media — all before uni. Here's the full story.",
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
