"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

// While the name-intro overlay plays (first hard load), hold the hero back
// so its reveal happens as the curtain lifts.
const introBase = () =>
  typeof window !== "undefined" && !window.__introDone ? 1.05 : 0;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

const headlineWords = ["Hey,", "I'm", "Joseph."];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joseph-rolfe-11791533a",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/joerolffe",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:jrolfe477@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const base = useRef(introBase()).current;
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: base + 0.1 } },
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--bg)",
        paddingTop: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient atmosphere — soft accent glow, top-left wash */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(600px 420px at 78% 38%, rgba(196,98,45,0.07), transparent 70%), radial-gradient(500px 380px at 12% 12%, rgba(196,98,45,0.05), transparent 70%)",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "4rem 2rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          position: "relative",
        }}
        className="hero-grid"
      >
        {/* Left — text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-text"
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem", y: textY, opacity: fade }}
        >
          <motion.span variants={itemVariants} className="section-label">
            TikTok Shop · Social Media Automation · Brand Scaling
          </motion.span>

          {/* Headline — words rise out of a clipping mask, one by one */}
          <h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(2.6rem, 5.5vw, 4rem)",
              letterSpacing: "-0.035em",
              color: "var(--text)",
              lineHeight: 1.08,
            }}
          >
            {headlineWords.map((word, i) => (
              <span
                key={i}
                style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", paddingBottom: "0.08em", marginBottom: "-0.08em" }}
              >
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: base + 0.15 + i * 0.09, ease: EASE }}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {word}
                  {i < headlineWords.length - 1 ? " " : ""}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "1.05rem",
              color: "var(--muted)",
              lineHeight: 1.75,
              maxWidth: "420px",
              fontWeight: 400,
            }}
          >
            I run Rolfe Brand Scaling — a digital agency helping businesses grow
            online through websites, AI automations, and strategy. Alongside
            that I&apos;ve built passive income through TikTok Shop, automated
            social media, and FluxFUT — a content brand with a Discord, digital
            products, and 20k+ followers. All of it built while still a student,
            heading to Staffordshire Uni in September.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="hero-buttons"
            style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}
          >
            <a
              href="#income"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("income");
                if (el) window.scrollTo({ top: el.offsetTop - 55, behavior: "smooth" });
              }}
            >
              See my work →
            </a>
            <Link href="/about" className="btn-ghost">
              My story →
            </Link>
          </motion.div>

          {/* Social icon links */}
          <motion.div
            variants={itemVariants}
            className="hero-socials"
            style={{ display: "flex", gap: "0.75rem", alignItems: "center", paddingTop: "0.25rem" }}
          >
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -4, scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 420, damping: 18 }}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  border: "1px solid var(--border)",
                  background: "var(--bg2)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--muted)",
                  transition: "color 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--accent)";
                  el.style.borderColor = "var(--accent)";
                  el.style.background = "rgba(196,98,45,0.06)";
                  el.style.boxShadow = "0 6px 16px rgba(196,98,45,0.16)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--muted)";
                  el.style.borderColor = "var(--border)";
                  el.style.background = "var(--bg2)";
                  el.style.boxShadow = "none";
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — photo with offset accent frame + parallax */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: base + 0.35, duration: 1, ease: EASE }}
          className="hero-photo"
          style={{ display: "flex", justifyContent: "center", y: photoY }}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: "420px" }} className="hero-photo-wrap">
            {/* Offset accent frame behind the photo */}
            <div
              aria-hidden
              className="hero-photo-frame"
              style={{
                position: "absolute",
                inset: 0,
                transform: "translate(14px, 14px)",
                borderRadius: "20px",
                border: "1px solid rgba(196,98,45,0.35)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                width: "100%",
                aspectRatio: "3/4",
                boxShadow: "0 24px 60px -18px rgba(28,25,23,0.28), 0 8px 24px rgba(0,0,0,0.08)",
                position: "relative",
                background: "var(--bg3)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src="/joseph.jpg.PNG"
                alt="Joseph Rolfe"
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ delay: base + 0.35, duration: 1.6, ease: EASE }}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: base + 1.2, duration: 0.6 }}
        className="scroll-indicator"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span style={{ fontSize: "0.65rem", fontWeight: 500, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "var(--muted)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
        @media (max-width: 768px) {
          .scroll-indicator { display: none !important; }

          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            padding: 1.5rem 1.25rem 3rem !important;
            text-align: center;
          }
          .hero-photo { order: -1; margin-bottom: 2rem; }
          .hero-photo-wrap { width: 180px !important; max-width: unset !important; margin: 0 auto; }
          .hero-photo-frame { transform: translate(9px, 9px) !important; }
          .hero-photo img { border-radius: 20px !important; width: 180px !important; height: 240px !important; aspect-ratio: 3/4 !important; object-position: center top !important; margin: 0 auto; }
          .hero-text { align-items: center !important; }
          .hero-text p { max-width: 100% !important; }
          .hero-text .section-label { text-align: center; }
          .hero-buttons { justify-content: center !important; }
          .hero-buttons .btn-primary { width: 100%; justify-content: center; }
          .hero-socials { justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
