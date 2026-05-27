"use client";

import { motion, type Variants } from "framer-motion";
import Skills from "@/components/sections/Skills";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const gcses = [
  { label: "English Literature", value: "9" },
  { label: "English Language", value: "8" },
  { label: "PE", value: "7" },
  { label: "Maths", value: "6" },
  { label: "Computer Science", value: "6" },
  { label: "RE", value: "6" },
];

const collegeStats = [
  { label: "College", value: "BSDC" },
  { label: "Course", value: "L3 Programming & App Dev" },
  { label: "Duration", value: "2 years" },
  { label: "Predicted", value: "DDD" },
  { label: "Cisco Certs", value: "9" },
  { label: "Diploma", value: "OCR L3 Extended IT" },
];

const certs = [
  { name: "Junior Cybersecurity Analyst Career Path", issuer: "Cisco Networking Academy", year: "2026", link: "https://www.credly.com/badges/e994953b-b7c6-435f-a246-5b34d9cfeed2/linked_in_profile" },
  { name: "Ethical Hacker", issuer: "Cisco Networking Academy", year: "2026", link: "https://www.credly.com/badges/b968623a-5b30-4faf-8126-3f8e69681ad1/linked_in_profile" },
  { name: "Cyber Threat Management", issuer: "Cisco Networking Academy", year: "2026", link: "https://www.credly.com/badges/8a9a07d4-8fb0-467f-98ff-2c3856515d8a/linked_in_profile" },
  { name: "Network Defense", issuer: "Cisco Networking Academy", year: "2026", link: "https://www.credly.com/badges/ca6fc400-9d25-4971-bdf6-e1d513ab42ef/linked_in_profile" },
  { name: "Endpoint Security", issuer: "Cisco Networking Academy", year: "2026", link: "https://www.credly.com/badges/fb637959-a6d1-4e26-83af-408a0385aff3/linked_in_profile" },
  { name: "Networking Devices and Initial Configuration", issuer: "Cisco Networking Academy", year: "2026", link: "https://www.credly.com/badges/4398f584-eeca-4598-9d48-1e5c8965cb7d/linked_in_profile" },
  { name: "Networking Basics", issuer: "Cisco Networking Academy", year: "2026", link: "https://www.credly.com/badges/c9903bec-2237-4463-8eab-42dce1e7a6f9/linked_in_profile" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2026", link: "https://www.credly.com/badges/f179fbfe-a2b3-4cc4-9270-36d0bb3d7ff4/linked_in_profile" },
  { name: "Computer Hardware Basics", issuer: "Cisco", year: "2026", link: "https://www.credly.com/badges/b1e99398-9b2f-42fe-8c18-fca82782e723" },
];

export default function AcademicPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "5rem 2rem 4rem", textAlign: "center" }}>
        <motion.span className="section-label" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          Academic
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          style={{ fontWeight: 800, fontSize: "clamp(2.2rem, 5vw, 3.4rem)", letterSpacing: "-0.035em", color: "var(--text)", marginTop: "0.5rem", marginBottom: "1.25rem", lineHeight: 1.1 }}
        >
          The academic side.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, maxWidth: "480px", margin: "0 auto" }}
        >
          School, college, certifications, and the technical skills I&apos;ve built along the way — in programming, cybersecurity, and everything in between.
        </motion.p>
      </div>

      {/* School */}
      <Section bg="var(--bg2)">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <motion.div variants={itemVariants}>
            <span className="section-label">2022 – 2024</span>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.03em", color: "var(--text)", margin: "0.5rem 0 2rem" }}>
              Robert Sutton School
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="academic-grid">
            <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.8 }}>
                Left school with a strong set of GCSEs and a clear direction. I ran Code Club throughout my time there — teaching younger students to code, running workshops on web development and Python, and mentoring 10+ students through their first projects.
              </p>
              <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.8 }}>
                Computer Science was the standout subject. It confirmed what I already suspected — this was the direction.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.75rem" }}>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>GCSE Results</p>
              {gcses.map((g, i) => (
                <div key={g.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.65rem 0", borderBottom: i < gcses.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <span style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{g.label}</span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: g.value === "9" || g.value === "8" ? "var(--accent)" : "var(--text)" }}>{g.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* College */}
      <Section bg="var(--bg)">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <motion.div variants={itemVariants}>
            <span className="section-label">2024 – 2026</span>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.03em", color: "var(--text)", margin: "0.5rem 0 2rem" }}>
              Burton &amp; South Derbyshire College
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="academic-grid">
            <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.8 }}>
                Two years on a Level 3 Programming &amp; App Development course — the OCR Extended Diploma. Started with HTML, CSS, and JavaScript, then moved deeper into Python, AI, and automation.
              </p>
              <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.8 }}>
                In 2026 I stacked nine Cisco certifications to back up my skills with real credentials. Covering everything from networking basics to ethical hacking and cyber threat management.
              </p>
              <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.8 }}>
                Predicted DDD — the highest grade achievable on the diploma.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.75rem" }}>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>College Stats</p>
              {collegeStats.map((s, i) => (
                <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.65rem 0", borderBottom: i < collegeStats.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <span style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{s.label}</span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text)" }}>{s.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Skills — reuse homepage component */}
      <Skills />

      {/* Certs */}
      <Section bg="var(--bg)">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <motion.div variants={itemVariants}>
            <span className="section-label">Credentials</span>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.03em", color: "var(--text)", margin: "0.5rem 0 2rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              Cisco Certifications
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent)", background: "rgba(196,98,45,0.1)", border: "1px solid rgba(196,98,45,0.2)", borderRadius: "999px", padding: "0.15rem 0.65rem" }}>9</span>
            </h2>
          </motion.div>
          <motion.div variants={containerVariants} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }} className="cert-grid">
            {certs.map((cert) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.1rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}
              >
                <h4 style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--text)", letterSpacing: "-0.01em", lineHeight: 1.4, margin: 0 }}>{cert.name}</h4>
                <p style={{ fontSize: "0.78rem", color: "var(--muted)", margin: 0 }}>{cert.issuer} · {cert.year}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--accent)", marginTop: "0.2rem", transition: "opacity 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                  View Certificate ↗
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Next */}
      <Section bg="var(--bg2)">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} style={{ maxWidth: "700px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <motion.div variants={itemVariants}>
            <span className="section-label">Sept 2026</span>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.03em", color: "var(--text)", margin: "0.5rem 0 1rem" }}>
              Staffordshire University
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.8 }}>
              Starting a Cyber Security BSc in September 2026. The foundation is already there — nine certs, two years of hands-on programming, and a real understanding of how systems and threats work. The degree formalises it.
            </p>
          </motion.div>
        </motion.div>
      </Section>

      <style>{`
        @media (max-width: 768px) {
          .academic-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .cert-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function Section({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <div style={{ background: bg, padding: "5rem 0" }}>
      {children}
    </div>
  );
}
