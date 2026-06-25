"use client";

import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const current = [
  {
    label: "Running",
    name: "Rolfe Brand Scaling",
    detail: "Digital agency · Live",
    dot: true,
  },
  {
    label: "Running",
    name: "TikTok Shop & Automation",
    detail: "Social media · Autopilot",
    dot: true,
  },
  {
    label: "Running",
    name: "FluxFUT",
    detail: "Content brand · Live",
    dot: true,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function StatsStrip() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Desktop layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="currently-strip"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "1.25rem 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginRight: "0.75rem", flexShrink: 0, display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", display: "inline-block", animation: "pulse-dot 2s ease-in-out infinite" }} />
          Right now
        </span>

        {current.map((item, i) => (
          <motion.div key={item.name} variants={itemVariants} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "999px",
                padding: "0.45rem 0.9rem",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", flexShrink: 0, animation: "pulse-dot 2s ease-in-out infinite" }} />
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text)" }}>{item.name}</span>
              <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{item.detail}</span>
            </div>
            {i < current.length - 1 && (
              <span style={{ color: "var(--muted)", fontSize: "1rem", userSelect: "none", opacity: 0.4 }}>·</span>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile marquee strip */}
      <div className="currently-mobile" style={{ display: "none", overflow: "hidden", padding: "0.85rem 0", position: "relative" }}>
        <div className="marquee-track">
          {[...current, ...current].map((item, i) => (
            <div
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "999px",
                padding: "0.4rem 0.85rem",
                whiteSpace: "nowrap",
                flexShrink: 0,
                marginRight: "0.6rem",
              }}
            >
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--accent)", flexShrink: 0, animation: "pulse-dot 2s ease-in-out infinite" }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text)" }}>{item.name}</span>
              <span style={{ fontSize: "0.72rem", color: "var(--muted)" }}>{item.detail}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: inline-flex;
          animation: marquee 12s linear infinite;
          padding-left: 1.25rem;
        }
        @media (max-width: 640px) {
          .currently-strip { display: none !important; }
          .currently-mobile { display: block !important; }
        }
      `}</style>
    </div>
  );
}
