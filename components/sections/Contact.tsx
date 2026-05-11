"use client";

import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const methods = [
  {
    label: "LinkedIn",
    value: "joseph-rolfe",
    href: "https://www.linkedin.com/in/joseph-rolfe-11791533a",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "joerolfe",
    href: "https://github.com/joerolfe",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "7rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "2.5rem",
        }}
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "rgba(196,98,45,0.08)",
            border: "1px solid rgba(196,98,45,0.2)",
            borderRadius: "999px",
            padding: "0.5rem 1rem",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "var(--accent)",
              animation: "pulse-dot 2s ease-in-out infinite",
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--accent)" }}>
            Looking for new clients
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              letterSpacing: "-0.04em",
              color: "var(--text)",
              lineHeight: 1.05,
            }}
          >
            Let&apos;s build<br />something real.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, maxWidth: "460px", margin: "0 auto" }}>
            Open to web projects, brand scaling, and interesting conversations. Drop me a message — I reply to everything.
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.a
          variants={itemVariants}
          href="mailto:jrolfe477@gmail.com"
          className="btn-primary"
          style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}
        >
          Send me an email →
        </motion.a>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", maxWidth: "400px" }}
        >
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>or find me on</span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={itemVariants}
          style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center", width: "100%" }}
        >
          {methods.map((m) => (
            <ContactCard key={m.label} method={m} />
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
      `}</style>
    </section>
  );
}

function ContactCard({ method }: { method: typeof methods[0] }) {
  return (
    <a
      href={method.href}
      target={method.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.85rem",
        padding: "1rem 1.5rem",
        background: "var(--bg2)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        textDecoration: "none",
        transition: "border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
        flex: "1 1 180px",
        minWidth: "180px",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(196,98,45,0.5)";
        el.style.transform = "translateY(-2px)";
        el.style.boxShadow = "0 8px 24px rgba(196,98,45,0.1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      <span
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "10px",
          background: "rgba(196,98,45,0.1)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--accent)",
          flexShrink: 0,
        }}
      >
        {method.icon}
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.1rem", textAlign: "left" }}>
        <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {method.label}
        </span>
        <span style={{ fontSize: "0.83rem", fontWeight: 600, color: "var(--text)" }}>
          {method.value}
        </span>
      </div>
      <span style={{ marginLeft: "auto", color: "var(--muted)", fontSize: "0.85rem" }}>↗</span>
    </a>
  );
}
