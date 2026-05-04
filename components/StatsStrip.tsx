"use client";

import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "2", label: "Brands Built" },
  { value: "9", label: "Certifications" },
  { value: "3+", label: "Years Building" },
  { value: "18", label: "Years Old" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function StatsStrip() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        background: "var(--text)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "2.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
        }}
        className="stats-strip"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.3rem",
              padding: "0.5rem 0",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
            }}
          >
            <span
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                letterSpacing: "-0.04em",
                color: "#fff",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 640px) {
          .stats-strip { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
