"use client";

import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  { title: "Languages", skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"] },
  { title: "Frameworks", skills: ["React", "Next.js", "Node.js", "Tailwind CSS"] },
  { title: "Tools & Platforms", skills: ["Git", "VS Code", "Figma", "Supabase", "Vercel"] },
  { title: "Cyber Security", skills: ["Threat Detection", "Network Defense", "Endpoint Security", "Ethical Hacking"] },
  { title: "Cloud & DevOps", skills: ["GitHub Actions", "AWS", "CI/CD"] },
  { title: "Design & Creative", skills: ["Brand Identity", "UI Design", "Video Editing", "Graphic Design"] },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="skills"
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
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
          className="skills-grid"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "var(--text)",
                  letterSpacing: "-0.01em",
                }}
              >
                {cat.title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
