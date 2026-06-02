import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AcademicPage from "@/components/AcademicPage";

export const metadata = {
  title: "Academic — Joseph Rolfe",
  description:
    "9 Cisco certifications, predicted DDD on OCR Level 3, and a Cyber Security BSc at Staffordshire University from Sept 2026. The full academic breakdown.",
};

export default function Academic() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "88px" }}>
        <AcademicPage />
      </main>
      <Footer />
    </>
  );
}
