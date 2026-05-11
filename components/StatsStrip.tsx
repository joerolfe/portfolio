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
    name: "FluxFUT",
    detail: "Content brand · Live",
    dot: true,
  },
  {
    label: "Studying",
    name: "BSDC",
    detail: "Level 3 Programming · Year 2",
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
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginRight: "0.75rem", flexShrink: 0 }}>
          Currently
        </span>

        {current.map((item, i) => (
          <motion.div key={item.name} variants={itemVariants} className="currently-item" style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "auto" }}>
            <div
              className="currently-pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "999px",
                padding: "0.45rem 0.9rem",
                width: "100%",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  flexShrink: 0,
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text)" }}>{item.name}</span>
              <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{item.detail}</span>
            </div>
            {i < current.length - 1 && (
              <span className="dot-sep" style={{ color: "var(--muted)", fontSize: "1rem", userSelect: "none", opacity: 0.4 }}>·</span>
            )}
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        @media (max-width: 640px) {
          .currently-strip { gap: 0.4rem !important; }
          .dot-sep { display: none !important; }
          .currently-item { width: 100% !important; }
          .currently-pill { width: 100% !important; }
        }
      `}</style>
    </div>
  );
}
