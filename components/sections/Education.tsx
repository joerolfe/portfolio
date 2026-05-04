"use client";

import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const education = [
  {
    degree: "Cyber Security BSc (Hons)",
    institution: "Staffordshire University",
    period: "Starting Sept 2026",
    expected: "2029",
    modules: [
      "Digital Forensics",
      "Cyber Operations",
      "Ethical Hacking",
      "Virtualisation and Network Security",
      "Computer Architecture Networks and Cyber",
      "Pathway Project",
    ],
  },
  {
    degree: "OCR Level 3 Cambridge Technical Extended Diploma in IT",
    institution: "Burton South Derbyshire College",
    period: "2024–2026",
    expected: "DDD (Predicted)",
    modules: [
      "Software Development",
      "Big Data Analytics",
      "Cognitive Computing",
      "Project Management",
      "Games Development",
      "Computer Architecture Networks and Cyber",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Education() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="education"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: "var(--bg2)" }}
    >
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-label">
          Education
        </motion.div>

        <motion.div
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "var(--border)",
            borderRadius: "3px",
            overflow: "hidden",
          }}
          className="edu-grid"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.institution}
              variants={itemVariants}
              style={{
                background: "var(--bg2)",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-heading), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.25,
                  }}
                >
                  {edu.degree}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-heading), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.82rem",
                    color: "var(--accent)",
                  }}
                >
                  {edu.institution}
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-heading), system-ui, sans-serif",
                      fontWeight: 500,
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#444",
                    }}
                  >
                    {edu.period}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-heading), system-ui, sans-serif",
                      fontWeight: 500,
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#444",
                    }}
                  >
                    {edu.expected}
                  </span>
                </div>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "var(--font-heading), system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: "0.62rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: "0.75rem",
                  }}
                >
                  Key modules
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {edu.modules.map((mod) => (
                    <span key={mod} className="skill-tag">
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
