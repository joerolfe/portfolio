"use client";

import { useState } from "react";
import { motion, type Variants, type Transition } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const featured = [
  {
    title: "Rolfe Brand Scaling",
    tagline: "My digital agency",
    description:
      "Founded and run a full-service digital agency helping local businesses grow online. I handle everything — websites, AI automations, brand strategy, and client relationships. Real clients, real results.",
    tags: ["Next.js", "Web Design", "AI Automation", "Client Work"],
    status: "Live",
    link: "https://myagency-nine.vercel.app/",
    accent: "#c4622d",
  },
  {
    title: "FluxFUT",
    tagline: "Content brand & community",
    description:
      "Built and grew a content brand in the EAFC gaming niche from scratch. Developed the brand website, grew a Discord community, built a custom bot, and created content across multiple platforms.",
    tags: ["Next.js", "Discord.js", "Content", "Community"],
    status: "Live",
    link: "https://fluxfut.vercel.app/",
    accent: "#c4622d",
  },
];

const other = [
  {
    title: "FluxBot",
    description:
      "Custom Discord bot for the FluxFUT server. Handles moderation and slash commands for EAFC player stats, prices, and data.",
    tags: ["JavaScript", "Discord.js", "Bot"],
    status: "Live",
  },
  {
    title: "FluxSell",
    description:
      "Full-stack reseller dashboard for tracking Vinted sales, managing inventory, and analysing pricing trends with revenue visualisations.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    status: "Live",
  },
  {
    title: "Content Dashboard",
    description:
      "Personal content management dashboard centralising content tracking and scheduling across platforms.",
    tags: ["Next.js", "TypeScript", "Shadcn UI"],
    status: "Live",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } as Transition },
};

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
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
          <span className="section-label">Featured work</span>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: "2.5rem",
            }}
          >
            What I&apos;ve built
          </h2>
        </motion.div>

        {/* Featured two-up */}
        <motion.div
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.25rem",
            marginBottom: "1.25rem",
          }}
          className="featured-grid"
        >
          {featured.map((project) => (
            <FeaturedCard key={project.title} project={project} />
          ))}
        </motion.div>

        {/* Divider label */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1.25rem",
          }}
        >
          <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Also built
          </span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </motion.div>

        {/* Other projects row */}
        <motion.div
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
          className="other-grid"
        >
          {other.map((project) => (
            <SmallCard key={project.title} project={project} />
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr !important; }
          .other-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .other-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function FeaturedCard({ project }: { project: typeof featured[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fff" : "var(--bg)",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        padding: "2.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "background 0.2s ease, box-shadow 0.2s ease",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.09)" : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "var(--accent)",
          borderRadius: "20px 20px 0 0",
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              background: "rgba(196,98,45,0.1)",
              borderRadius: "999px",
              padding: "0.2rem 0.6rem",
              alignSelf: "flex-start",
            }}
          >
            {project.status}
          </span>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "var(--accent)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
              padding: "0.4rem 0.9rem",
              border: "1px solid rgba(196,98,45,0.3)",
              borderRadius: "999px",
              transition: "background 0.2s ease",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(196,98,45,0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            Visit ↗
          </a>
        )}
      </div>

      <div>
        <p style={{ fontSize: "0.72rem", fontWeight: 500, color: "var(--muted)", marginBottom: "0.35rem", letterSpacing: "0.02em" }}>
          {project.tagline}
        </p>
        <h3
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            color: "var(--text)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </h3>
      </div>

      <p
        style={{
          fontSize: "0.88rem",
          color: "var(--muted)",
          lineHeight: 1.75,
          flex: 1,
        }}
      >
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
        {project.tags.map((tag) => (
          <span key={tag} className="skill-tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

function SmallCard({ project }: { project: typeof other[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fff" : "var(--bg)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        transition: "background 0.2s ease, box-shadow 0.2s ease",
        boxShadow: hovered ? "0 4px 20px rgba(0,0,0,0.07)" : "none",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3
          style={{
            fontWeight: 700,
            fontSize: "0.95rem",
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h3>
        <span
          style={{
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--accent)",
            background: "rgba(196,98,45,0.1)",
            borderRadius: "999px",
            padding: "0.15rem 0.5rem",
          }}
        >
          {project.status}
        </span>
      </div>

      <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.65, flex: 1 }}>
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
        {project.tags.map((tag) => (
          <span key={tag} className="skill-tag" style={{ fontSize: "0.7rem" }}>{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}
