"use client";

import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "£1k+", label: "earned online / month" },
  { value: "3", label: "clients on Brand Scaling" },
  { value: "20k+", label: "followers on FluxFUT" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "2rem 1.25rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
        className="stats-grid"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.25rem",
              padding: "1.25rem",
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              textAlign: "center",
              position: "relative",
            }}
          >
            {i === 0 && (
              <span style={{ position: "absolute", top: "0.75rem", right: "0.75rem", width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", animation: "pulse-dot 2s ease-in-out infinite" }} />
            )}
            <span style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.4rem)", letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1 }}>
              {stat.value}
            </span>
            <span style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 500 }}>
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr) !important; padding: 1.25rem 1rem !important; gap: 0.5rem !important; }
          .stats-grid > div { padding: 0.85rem 0.5rem !important; border-radius: 12px !important; }
        }
      `}</style>
    </div>
  );
}
