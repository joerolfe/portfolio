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
    label: "Instagram",
    value: "@joerolffe",
    href: "https://www.instagram.com/joerolffe",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
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
            Looking to work with a new client, talk business, or just connect — reach out directly. I reply to everything.
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <motion.a
            href="mailto:jrolfe477@gmail.com"
            className="btn-primary"
            style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}
          >
            Send me an email →
          </motion.a>
          <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>jrolfe477@gmail.com</span>
        </motion.div>

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
          className="contact-cards"
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem", width: "100%", maxWidth: "400px" }}
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
      target="_blank"
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
        width: "100%",
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
