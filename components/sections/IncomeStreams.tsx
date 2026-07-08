"use client";

import { useRef, useState } from "react";
import { motion, type Variants, type Transition } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EASE = [0.16, 1, 0.3, 1] as const;

const streams = [
  {
    title: "Rolfe Brand Scaling",
    tagline: "Digital agency",
    description:
      "Founded and run a full-service digital agency helping local businesses grow online. Websites, AI automations, brand strategy, and client relationships. Real clients, real results.",
    tags: ["Web Design", "AI Automation", "Client Work", "SEO"],
    status: "Active",
    type: "Service",
    link: "https://myagency-nine.vercel.app/",
  },
  {
    title: "FluxFUT",
    tagline: "Content brand & community",
    description:
      "Built and grew a content brand in the EAFC gaming niche. Full website, Discord community, digital products (templates & guides), a custom bot, and content across TikTok, YouTube and Instagram — all generating revenue.",
    tags: ["Content", "Digital Products", "Discord", "TikTok"],
    status: "Active",
    type: "Brand",
    link: "https://fluxfut.vercel.app/",
  },
];

const passive = [
  {
    title: "TikTok Shop",
    description:
      "Automated product fulfilment through TikTok Shop. Content drives traffic, fulfilment runs without daily input.",
    tags: ["E-commerce", "TikTok Shop", "Automation"],
    type: "E-commerce",
  },
  {
    title: "Social Media Automation",
    description:
      "Automated accounts across TikTok, Instagram, and YouTube with content scheduling, growth systems, and audience funnels.",
    tags: ["TikTok", "Instagram", "YouTube"],
    type: "Content",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: EASE } as Transition },
};

export default function IncomeStreams() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="income"
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
          <span className="section-label">Revenue</span>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: "2.5rem",
            }}
          >
            Sources of income
          </h2>
        </motion.div>

        {/* Main two streams */}
        <motion.div
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.25rem",
            marginBottom: "1.25rem",
          }}
          className="income-featured-grid"
        >
          {streams.map((s) => (
            <FeaturedCard key={s.title} stream={s} revealed={isVisible} />
          ))}
        </motion.div>

        {/* Divider */}
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
            Passive streams
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            style={{ flex: 1, height: "1px", background: "var(--border)", transformOrigin: "left center" }}
          />
        </motion.div>

        {/* Passive income row */}
        <motion.div
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
            maxWidth: "760px",
            margin: "0 auto",
          }}
          className="income-passive-grid"
        >
          {passive.map((s) => (
            <SmallCard key={s.title} stream={s} />
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .income-featured-grid { grid-template-columns: 1fr !important; }
          .income-passive-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .income-passive-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function FeaturedCard({ stream, revealed }: { stream: typeof streams[0]; revealed: boolean }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={onMouseMove}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      style={{
        background: hovered ? "#fff" : "var(--bg)",
        border: "1px solid var(--border)",
        borderColor: hovered ? "rgba(196,98,45,0.25)" : "var(--border)",
        borderRadius: "20px",
        padding: "2.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "background 0.3s ease, box-shadow 0.35s ease, border-color 0.3s ease",
        boxShadow: hovered ? "0 20px 48px -16px rgba(28,25,23,0.18), 0 4px 16px rgba(0,0,0,0.06)" : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cursor-tracking spotlight */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          background: `radial-gradient(320px circle at ${spot.x}% ${spot.y}%, rgba(196,98,45,0.055), transparent 65%)`,
        }}
      />

      {/* Accent top bar — draws in on reveal */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={revealed ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
        style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--accent)", borderRadius: "20px 20px 0 0", transformOrigin: "left center" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", gap: "0.4rem" }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", background: "rgba(196,98,45,0.1)", borderRadius: "999px", padding: "0.2rem 0.6rem" }}>
            {stream.status}
          </span>
          <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", background: "var(--bg2)", borderRadius: "999px", padding: "0.2rem 0.6rem", border: "1px solid var(--border)" }}>
            {stream.type}
          </span>
        </div>
        {stream.link && (
          <a
            href={stream.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: "0.3rem", padding: "0.4rem 0.9rem", border: "1px solid rgba(196,98,45,0.3)", borderRadius: "999px", transition: "background 0.2s ease, transform 0.2s cubic-bezier(0.16,1,0.3,1), box-shadow 0.2s ease", textDecoration: "none", whiteSpace: "nowrap", position: "relative" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(196,98,45,0.08)";
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(196,98,45,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Visit ↗
          </a>
        )}
      </div>

      <div style={{ position: "relative" }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 500, color: "var(--muted)", marginBottom: "0.35rem", letterSpacing: "0.02em" }}>
          {stream.tagline}
        </p>
        <h3 style={{ fontWeight: 800, fontSize: "1.5rem", color: "var(--text)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          {stream.title}
        </h3>
      </div>

      <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.75, flex: 1, position: "relative" }}>
        {stream.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", position: "relative" }}>
        {stream.tags.map((tag) => (
          <span key={tag} className="skill-tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

function SmallCard({ stream }: { stream: typeof passive[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      style={{
        background: hovered ? "#fff" : "var(--bg)",
        border: "1px solid var(--border)",
        borderColor: hovered ? "rgba(196,98,45,0.22)" : "var(--border)",
        borderRadius: "14px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        transition: "background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        boxShadow: hovered ? "0 12px 32px -12px rgba(28,25,23,0.16)" : "none",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", letterSpacing: "-0.02em" }}>
          {stream.title}
        </h3>
        <span style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", background: "var(--bg2)", borderRadius: "999px", padding: "0.15rem 0.5rem", border: "1px solid var(--border)" }}>
          {stream.type}
        </span>
      </div>

      <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.65, flex: 1 }}>
        {stream.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
        {stream.tags.map((tag) => (
          <span key={tag} className="skill-tag" style={{ fontSize: "0.7rem" }}>{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}
