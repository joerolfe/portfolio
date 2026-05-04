"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    num: "01",
    title: "Rolfe Brand Scaling",
    body: "Websites, AI automations, and digital strategy for SMEs that want to grow online the right way.",
  },
  {
    num: "02",
    title: "Personal Brand",
    body: "Multiple monetised TikTok accounts, a Discord community, and social automation — all built and run by me.",
  },
  {
    num: "03",
    title: "Cybersecurity",
    body: "OCR L3 IT diploma, 9 Cisco certifications, heading to Staffordshire University for a Cyber Security BSc in 2026.",
  },
  {
    num: "04",
    title: "Self-Improvement",
    body: "Gym, relationships, mindset. Levelling up every area — and eventually documenting the full journey publicly.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [active, target, duration]);

  return value;
}

function AnimatedStat({
  value,
  label,
  isNumeric,
  active,
}: {
  value: string;
  label: string;
  isNumeric: boolean;
  active: boolean;
}) {
  const numericTarget = isNumeric ? parseInt(value.replace(/\D/g, ""), 10) : 0;
  const counted = useCountUp(numericTarget, active && isNumeric);
  const suffix = isNumeric ? value.replace(/[0-9]/g, "") : "";
  const display = isNumeric ? `${counted}${suffix}` : value;

  return (
    <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      <div
        style={{
          fontFamily: "var(--font-heading), system-ui, sans-serif",
          fontWeight: 700,
          fontSize: "2.2rem",
          color: "#ffffff",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        {display}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body), system-ui, sans-serif",
          fontSize: "0.78rem",
          color: "var(--muted)",
          fontWeight: 300,
          lineHeight: 1.4,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function PillarCard({ pillar }: { pillar: { num: string; title: string; body: string } }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--bg3)" : "var(--bg2)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        transition: "background 0.2s ease",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-heading), system-ui, sans-serif",
          fontWeight: 600,
          fontSize: "0.6rem",
          letterSpacing: "0.18em",
          color: hovered ? "var(--accent)" : "#333",
          transition: "color 0.2s ease",
          textTransform: "uppercase",
        }}
      >
        {pillar.num}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-heading), system-ui, sans-serif",
          fontWeight: 600,
          fontSize: "1rem",
          color: "#ffffff",
          letterSpacing: "-0.02em",
        }}
      >
        {pillar.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body), system-ui, sans-serif",
          fontWeight: 300,
          fontSize: "0.85rem",
          color: "var(--muted)",
          lineHeight: 1.7,
        }}
      >
        {pillar.body}
      </p>
    </motion.div>
  );
}

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { value: "3+", label: "TikTok accounts monetised", isNumeric: true },
    { value: "Live", label: "Rolfe Brand Scaling", isNumeric: false },
    { value: "9", label: "Cisco certifications", isNumeric: true },
    { value: "2026", label: "University start date", isNumeric: true },
  ];

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: "var(--bg2)" }}
    >
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-label">
          About
        </motion.div>

        <motion.div
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            marginBottom: "5rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left */}
          <motion.div variants={itemVariants}>
            <h2
              style={{
                fontFamily: "var(--font-heading), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                letterSpacing: "-0.03em",
                color: "#ffffff",
                marginBottom: "2.5rem",
                lineHeight: 1.1,
              }}
            >
              18 years old.{" "}
              <span style={{ color: "var(--muted)" }}>Already in the game.</span>
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                border: "1px solid var(--border)",
                borderRadius: "3px",
                overflow: "hidden",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                    borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <AnimatedStat
                    value={stat.value}
                    label={stat.label}
                    isNumeric={stat.isNumeric}
                    active={isVisible}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.4rem",
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.85,
              paddingTop: "0.25rem",
            }}
          >
            <p>
              I&apos;m 18, studying Cybersecurity at college while building
              toward a Cyber Security BSc at Staffordshire University. But
              I&apos;m not waiting for a qualification to start.
            </p>
            <p>
              I run Rolfe Brand Scaling, helping businesses grow through
              websites, AI automations, and digital strategy. I run multiple
              monetised TikTok accounts. I&apos;m building a Discord community.
              I&apos;m learning every high-income skill I can — in public, in
              real time.
            </p>
            <p>
              My path is deliberate. Master the technical side. Build real
              commercial experience. Then create a platform to help others do
              the same.
            </p>
          </motion.div>
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "var(--border)",
            borderRadius: "3px",
            overflow: "hidden",
          }}
          className="pillars-grid"
        >
          {pillars.map((p) => (
            <PillarCard key={p.num} pillar={p} />
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
