"use client";

import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certs = [
  {
    name: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco Networking Academy",
    year: "2026",
    link: "https://www.credly.com/badges/e994953b-b7c6-435f-a246-5b34d9cfeed2/linked_in_profile",
  },
  {
    name: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    year: "2026",
    link: "https://www.credly.com/badges/b968623a-5b30-4faf-8126-3f8e69681ad1/linked_in_profile",
  },
  {
    name: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    year: "2026",
    link: "https://www.credly.com/badges/8a9a07d4-8fb0-467f-98ff-2c3856515d8a/linked_in_profile",
  },
  {
    name: "Network Defense",
    issuer: "Cisco Networking Academy",
    year: "2026",
    link: "https://www.credly.com/badges/ca6fc400-9d25-4971-bdf6-e1d513ab42ef/linked_in_profile",
  },
  {
    name: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    year: "2026",
    link: "https://www.credly.com/badges/fb637959-a6d1-4e26-83af-408a0385aff3/linked_in_profile",
  },
  {
    name: "Networking Devices and Initial Configuration",
    issuer: "Cisco Networking Academy",
    year: "2026",
    link: "https://www.credly.com/badges/4398f584-eeca-4598-9d48-1e5c8965cb7d/linked_in_profile",
  },
  {
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    year: "2026",
    link: "https://www.credly.com/badges/c9903bec-2237-4463-8eab-42dce1e7a6f9/linked_in_profile",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2026",
    link: "https://www.credly.com/badges/f179fbfe-a2b3-4cc4-9270-36d0bb3d7ff4/linked_in_profile",
  },
  {
    name: "Computer Hardware Basics",
    issuer: "Cisco",
    year: "2026",
    link: "https://www.credly.com/badges/b1e99398-9b2f-42fe-8c18-fca82782e723",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="certifications"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: "var(--bg)" }}
    >
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <span className="section-label">Credentials</span>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: "2.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            Certifications
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--accent)",
                background: "rgba(196,98,45,0.1)",
                border: "1px solid rgba(196,98,45,0.2)",
                borderRadius: "999px",
                padding: "0.15rem 0.65rem",
              }}
            >
              9
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.75rem",
          }}
          className="cert-grid"
        >
          {certs.map((cert) => (
            <CertCard key={cert.name} cert={cert} />
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .cert-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function CertCard({ cert }: { cert: typeof certs[0] }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
      }}
      style={{
        background: "var(--bg2)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "1rem 1.1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.3rem",
      }}
    >
      <h4
        style={{
          fontWeight: 600,
          fontSize: "0.875rem",
          color: "var(--text)",
          letterSpacing: "-0.01em",
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        {cert.name}
      </h4>
      <p style={{ fontSize: "0.78rem", color: "var(--muted)", margin: 0 }}>
        {cert.issuer} · {cert.year}
      </p>
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "0.72rem",
          fontWeight: 600,
          color: "var(--accent)",
          marginTop: "0.2rem",
          transition: "opacity 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        View Certificate ↗
      </a>
    </motion.div>
  );
}
