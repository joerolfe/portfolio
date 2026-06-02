"use client";

import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const groups = [
  {
    label: "Languages",
    skills: [
      { name: "JavaScript", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "HTML / CSS", level: 5 },
      { name: "Python", level: 4 },
      { name: "SQL", level: 3 },
    ],
  },
  {
    label: "Frameworks & Tools",
    skills: [
      { name: "Next.js", level: 4 },
      { name: "React", level: 4 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Node.js", level: 3 },
      { name: "Vercel", level: 5 },
      { name: "Supabase", level: 3 },
      { name: "Git", level: 4 },
      { name: "Figma", level: 3 },
    ],
  },
  {
    label: "Cyber Security",
    skills: [
      { name: "Network Defense", level: 4 },
      { name: "Threat Detection", level: 3 },
      { name: "Endpoint Security", level: 3 },
      { name: "Ethical Hacking", level: 3 },
      { name: "OSINT", level: 3 },
    ],
  },
  {
    label: "Creative & Brand",
    skills: [
      { name: "Brand Identity", level: 5 },
      { name: "UI Design", level: 4 },
      { name: "Video Editing", level: 4 },
      { name: "Content Strategy", level: 4 },
    ],
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

function Dots({ level }: { level: number }) {
  return (
    <span style={{ display: "flex", gap: "3px", alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: i <= level ? "var(--accent)" : "var(--border)",
            flexShrink: 0,
          }}
        />
      ))}
    </span>
  );
}

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}
    >
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <span className="section-label">Tech I work with</span>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: "2.5rem",
            }}
          >
            Skills &amp; tools
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
        >
          {groups.map((group) => (
            <motion.div key={group.label} variants={itemVariants}>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.9rem" }}>
                {group.label}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                      borderRadius: "999px",
                      padding: "0.45rem 0.9rem",
                    }}
                  >
                    <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text)" }}>
                      {skill.name}
                    </span>
                    <Dots level={skill.level} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
