"use client";

import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Vision() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="vision"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: "var(--bg)" }}
    >
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-label">
          The vision
        </motion.div>

        <motion.div
          variants={itemVariants}
          style={{
            border: "1px solid var(--border)",
            borderRadius: "3px",
            padding: "4rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            background: "var(--bg2)",
            position: "relative",
            overflow: "hidden",
          }}
          className="vision-box"
        >
          {/* Accent corner */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "3px",
              height: "100%",
              background: "var(--accent)",
              opacity: 0.6,
            }}
          />

          <div style={{ paddingLeft: "1rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                letterSpacing: "-0.03em",
                color: "#ffffff",
                lineHeight: 1.15,
              }}
            >
              Build the skills. Build the brand.
            </h2>
            <h2
              style={{
                fontFamily: "var(--font-heading), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                letterSpacing: "-0.03em",
                color: "var(--muted)",
                lineHeight: 1.15,
              }}
            >
              Then help others build theirs.
            </h2>
          </div>

          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              color: "var(--muted)",
              maxWidth: "580px",
              lineHeight: 1.85,
              paddingLeft: "1rem",
            }}
          >
            The end goal isn&apos;t just a business — it&apos;s a platform.
            I&apos;m building toward creating content and tools that help other
            people start making money online, develop themselves, and eventually
            build something of their own. Everything I&apos;m doing now is
            laying that foundation.
          </p>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .vision-box { padding: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
