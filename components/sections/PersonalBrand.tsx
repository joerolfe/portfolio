"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const pillars = [
  {
    label: "£10k/month by 21",
    detail: "The target is £10k a month from online income before I turn 21. TikTok Shop, automation, the agency — all of it compounds toward that number.",
  },
  {
    label: "Gym & fitness",
    detail: "Training every day. Being in good shape isn't separate from success — discipline in the gym carries into everything else.",
  },
  {
    label: "Relationships",
    detail: "Understanding people better. How to communicate, how to lead, how to build trust. The soft skills that actually move things forward.",
  },
  {
    label: "Best version of myself",
    detail: "The real goal behind all of it. Not just money or fitness — becoming someone I'm genuinely proud of, across every area of life.",
  },
  {
    label: "Then helping others",
    detail: "Once the social proof is there — the numbers, the results, the proof it works — the plan is to help others do the same. No one takes advice from someone who hasn't done it.",
  },
];

export default function PersonalBrand() {
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState(0);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Heading */}
        <motion.div variants={itemVariants} style={{ marginBottom: "2.5rem" }}>
          <span className="section-label">Personal brand</span>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.035em", color: "var(--text)", lineHeight: 1.1, margin: "0.5rem 0 0" }}>
            Building more than a business.
          </h2>
        </motion.div>

        {/* Interactive layout */}
        <motion.div
          variants={itemVariants}
          className="pb-layout"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}
        >
          {/* Left — pillar list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {pillars.map((pillar, i) => (
              <button
                key={pillar.label}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: active === i ? "var(--bg2)" : "transparent",
                  border: active === i ? "1px solid var(--border)" : "1px solid transparent",
                  borderRadius: "12px",
                  padding: "0.9rem 1.1rem",
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: active === i ? "var(--accent)" : "var(--border)",
                    flexShrink: 0,
                    transition: "background 0.2s ease",
                  }}
                />
                <span
                  style={{
                    fontWeight: active === i ? 700 : 500,
                    fontSize: "0.88rem",
                    color: active === i ? "var(--text)" : "var(--muted)",
                    transition: "color 0.2s ease, font-weight 0.2s ease",
                  }}
                >
                  {pillar.label}
                </span>
                {active === i && (
                  <span style={{ marginLeft: "auto", color: "var(--accent)", fontSize: "0.8rem" }}>→</span>
                )}
              </button>
            ))}
          </div>

          {/* Right — detail panel */}
          <div
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "2rem",
              minHeight: "160px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                  {String(active + 1).padStart(2, "0")} / {String(pillars.length).padStart(2, "0")}
                </p>
                <h3 style={{ fontWeight: 800, fontSize: "1.15rem", color: "var(--text)", margin: "0 0 0.75rem", letterSpacing: "-0.02em" }}>
                  {pillars[active].label}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
                  {pillars[active].detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 640px) {
          .pb-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
