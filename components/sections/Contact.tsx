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

const inputStyle: React.CSSProperties = {
  background: "var(--bg)",
  border: "1px solid var(--border)",
  borderRadius: "10px",
  color: "var(--text)",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  fontWeight: 400,
  fontSize: "0.9rem",
  padding: "0.85rem 1rem",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  width: "100%",
};

const contactMethods = [
  {
    label: "Email",
    value: "jrolfe477@gmail.com",
    href: "mailto:jrolfe477@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "joseph-rolfe",
    href: "https://www.linkedin.com/in/joseph-rolfe-11791533a",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "joerolfe",
    href: "https://github.com/joerolfe",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
      style={{ background: "var(--bg2)", padding: 0 }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "6rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "end",
        }}
        className="contact-grid"
      >
        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <span className="section-label">Connect</span>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "-0.035em",
                color: "var(--text)",
                lineHeight: 1.05,
              }}
            >
              Let&apos;s build<br />something great.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.75, maxWidth: "380px" }}>
              Open to web projects, brand scaling clients, and interesting conversations. I reply to everything.
            </p>
          </motion.div>

          {/* Contact method cards */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {contactMethods.map((method) => (
              <ContactMethodCard key={method.label} method={method} />
            ))}
          </motion.div>

          {/* Availability badge */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "rgba(196,98,45,0.08)",
              border: "1px solid rgba(196,98,45,0.2)",
              borderRadius: "999px",
              padding: "0.55rem 1rem",
              alignSelf: "flex-start",
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
        </div>

        {/* Right — form */}
        <motion.div
          variants={itemVariants}
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            padding: "2.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
            <Field label="Name">
              <input type="text" name="name" placeholder="Your name" style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
            </Field>
            <Field label="Email">
              <input type="email" name="email" placeholder="you@example.com" style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
            </Field>
          </div>

          <Field label="Subject">
            <input type="text" name="subject" placeholder="What's this about?" style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
          </Field>

          <Field label="Message">
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={focusIn}
              onBlur={focusOut}
            />
          </Field>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center", marginTop: "0.25rem" }}
          >
            Send message →
          </button>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ContactMethodCard({ method }: { method: typeof contactMethods[0] }) {
  return (
    <a
      href={method.href}
      target={method.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem 1.25rem",
        background: "var(--bg)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(196,98,45,0.4)";
        el.style.boxShadow = "0 4px 16px rgba(196,98,45,0.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "none";
      }}
    >
      <span
        style={{
          width: "38px",
          height: "38px",
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
      <div style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {method.label}
        </span>
        <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text)" }}>
          {method.value}
        </span>
      </div>
      <span style={{ marginLeft: "auto", fontSize: "0.9rem", color: "var(--muted)" }}>↗</span>
    </a>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>{label}</label>
      {children}
    </div>
  );
}

function focusIn(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = "var(--accent)";
  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(196,98,45,0.12)";
}

function focusOut(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = "var(--border)";
  e.currentTarget.style.boxShadow = "none";
}
