import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AcademicPage from "@/components/AcademicPage";

export const metadata = {
  title: "Academic — Joseph Rolfe",
  description:
    "School, college, Cisco certifications, and the programming and cybersecurity skills Joseph Rolfe has built from 2022 to present.",
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
