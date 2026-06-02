"use client";

import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const techExperiences = [
  {
    role: "Founder",
    company: "Rolfe Brand Scaling",
    type: "Self-employed",
    period: "Apr 2026 – Present",
    description: "Founded and run a digital agency helping local businesses grow online. Build websites, AI automations, and brand strategies end-to-end.",
    link: "https://rolfebrandscaling.com",
  },
  {
    role: "Founder & Content Creator",
    company: "FluxFUT",
    type: "Self-employed",
    period: "2024 – Present",
    description: "Built and grew a content brand in the EAFC gaming niche. Developed the brand website, grew a Discord community, and built a custom bot.",
    link: "https://fluxfut.vercel.app/",
  },
  {
    role: "Volunteer Tech Lead",
    company: "Code Club, Robert Sutton School",
    type: "Volunteer",
    period: "2022 – 2024",
    description: "Taught coding to younger students. Ran workshops on web development and Python. Mentored 10+ students through first projects.",
  },
];

const otherExperiences = [
  {
    role: "Customer Advisor",
    company: "B&Q",
    type: "Contract",
    period: "Mar 2026 – Present",
    description: "Customer-facing retail role in a fast-paced environment.",
  },
  {
    role: "Kitchen Assistant",
    company: "Admiral & Co Fish Bar",
    type: "Part-time",
    period: "Dec 2024 – Dec 2025",
    description: "Delivered customer service during busy periods. Handled cash and card payments.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: "var(--bg2)" }}
    >
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <span className="section-label">Experience</span>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: "2.5rem",
            }}
          >
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {techExperiences.map((exp, i) => (
            <ExperienceRow key={i} exp={exp} last={i === techExperiences.length - 1} />
          ))}
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "2rem 0" }}
        >
          <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            Other work
          </span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {otherExperiences.map((exp, i) => (
            <ExperienceRow key={i} exp={exp} last={i === otherExperiences.length - 1} />
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 640px) {
          .exp-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
      `}</style>
    </section>
  );
}

type Exp = { role: string; company: string; type: string; period: string; description: string; link?: string };

function ExperienceRow({ exp, last }: { exp: Exp; last: boolean }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
      }}
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gap: "2rem",
        padding: "1.75rem 1rem",
        borderBottom: !last ? "1px solid var(--border)" : "none",
        alignItems: "start",
        borderRadius: "12px",
        transition: "background 0.2s ease",
        margin: "0 -1rem",
      }}
      className="exp-row"
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      {/* Left */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)" }}>{exp.period}</span>
        <span style={{ fontSize: "0.75rem", color: "var(--muted)", fontWeight: 400 }}>{exp.type}</span>
      </div>

      {/* Right */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text)" }}>{exp.role}</span>
          <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>·</span>
          <span style={{ fontSize: "0.85rem", color: "var(--muted)", fontWeight: 500 }}>{exp.company}</span>
          {exp.link && (
            <a href={exp.link} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "0.78rem", color: "var(--accent)", fontWeight: 600, transition: "opacity 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >↗</a>
          )}
        </div>
        <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7 }}>{exp.description}</p>
      </div>
    </motion.div>
  );
}
