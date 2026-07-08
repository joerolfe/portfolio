"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useReducedMotion, type Variants } from "framer-motion";
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
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Renders "£1k+" style values, counting the numeric part up from 0 when revealed. */
function CountUpValue({ value, start }: { value: string; start: boolean }) {
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : "";
  const [display, setDisplay] = useState(match ? 0 : null);
  const reduceMotion = useReducedMotion();
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current || !match) return;
    started.current = true;
    if (reduceMotion) {
      setDisplay(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, target, reduceMotion]);

  if (display === null) return <>{value}</>;
  return (
    <>
      {prefix}
      {display}
      {suffix}
    </>
  );
}

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
      {/* Desktop — stat cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="stats-grid"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "2rem 1.25rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
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
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "0 10px 30px -8px rgba(28,25,23,0.14)";
              el.style.borderColor = "rgba(196,98,45,0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "none";
              el.style.borderColor = "var(--border)";
            }}
          >
            {i === 0 && (
              <span style={{ position: "absolute", top: "0.75rem", right: "0.75rem", width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", animation: "pulse-dot 2s ease-in-out infinite" }} />
            )}
            <span style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.4rem)", letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
              <CountUpValue value={stat.value} start={isVisible} />
            </span>
            <span style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 500 }}>
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile — auto-scrolling marquee */}
      <div className="stats-marquee" style={{ display: "none", overflow: "hidden", padding: "0.85rem 0" }}>
        <div className="marquee-track">
          {[...stats, ...stats].map((stat, i) => (
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
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em" }}>{stat.value}</span>
              <span style={{ fontSize: "0.72rem", color: "var(--muted)" }}>{stat.label}</span>
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
          animation: marquee 10s linear infinite;
          padding-left: 1.25rem;
        }
        @media (max-width: 640px) {
          .stats-grid { display: none !important; }
          .stats-marquee { display: block !important; }
        }
      `}</style>
    </div>
  );
}
