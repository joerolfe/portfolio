"use client";

import { motion, type Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const chapters = [
  {
    period: "2022 – 2024",
    title: "Before Everything",
    side: "right",
    body: [
      "I didn't wait to be taught. While most kids my age were doing homework and moving on, I was teaching younger students to code at Code Club. Running workshops. Watching 10+ students build their first projects from scratch.",
      "That's when I realised something — I actually knew things worth sharing. And more importantly, I liked figuring things out and then explaining them to other people.",
      "At some point I thought... why am I not doing this for more people?",
    ],
    highlight: "At some point I thought... why am I not doing this for more people?",
    card: {
      type: "stat",
      items: [
        { label: "Students mentored", value: "10+" },
        { label: "Role", value: "Volunteer Tech Lead" },
        { label: "Location", value: "Robert Sutton School" },
      ],
    },
  },
  {
    period: "2024",
    title: "Going All In On Cyber",
    side: "left",
    body: [
      "I chose cybersecurity. Not because someone told me to — because I couldn't stop reading about it. How systems get compromised. How attackers think. How to build defences against things that haven't happened yet.",
      "I enrolled at Burton South Derbyshire College and started stacking Cisco certifications. Not to tick boxes. Because I wanted to actually understand the material front-to-back.",
      "Nine certifications later, I still hadn't stopped. And I was only just getting started.",
    ],
    highlight:
      "Nine certifications later, I still hadn't stopped.",
    card: {
      type: "stat",
      items: [
        { label: "Cisco certifications", value: "9" },
        { label: "Predicted grade", value: "DDD" },
        { label: "Diploma", value: "OCR L3 Extended IT" },
      ],
    },
  },
  {
    period: "2024",
    title: "Building FluxFUT",
    side: "right",
    body: [
      "At the same time, I was building something completely different. FluxFUT — a content brand in the EAFC gaming niche. I built the website. Grew a Discord server. Built a custom bot that pulled live player stats.",
      "And I started posting on TikTok. It wasn't perfect at first. But I kept going. Because the only way to get good at something is to actually do it, publicly, in real time.",
      "Multiple accounts. Multiple monetised. All while studying full time.",
    ],
    highlight: "The only way to get good at something is to actually do it — publicly, in real time.",
    card: {
      type: "stat",
      items: [
        { label: "TikTok accounts", value: "3+" },
        { label: "Status", value: "Monetised" },
        { label: "Platform built", value: "FluxFUT" },
      ],
    },
  },
  {
    period: "April 2026",
    title: "Rolfe Brand Scaling",
    side: "left",
    body: [
      "I didn't want to wait until university to start working with real clients. So I launched my own agency — Rolfe Brand Scaling. Web development, AI automations, brand strategy. For local businesses who want to grow online.",
      "I manage the full project — the brief, the design, the build, the deployment. No handoffs. No middlemen. Just me, delivering the work.",
      "This is what it looks like to build before you're ready.",
    ],
    highlight: "This is what it looks like to build before you're ready.",
    card: {
      type: "link",
      label: "See the agency",
      href: "https://myagency-nine.vercel.app/",
      items: [
        { label: "Services", value: "Web · AI · Brand" },
        { label: "Clients", value: "Local SMEs" },
        { label: "Status", value: "Live" },
      ],
    },
  },
  {
    period: "2026 →",
    title: "What's Next",
    side: "right",
    body: [
      "Staffordshire University. Cyber Security BSc. Starting September 2026.",
      "And in parallel — continuing to build. The brands, the agency, the content. All of it running while I study.",
      "The end goal isn't a job or even just a business. It's a platform. Content and tools that help other people start earlier, build faster, and get ahead before everyone else catches up. Everything I'm doing now is laying that foundation.",
    ],
    highlight:
      "The end goal isn't a job. It's a platform.",
    card: {
      type: "stat",
      items: [
        { label: "University", value: "Staffordshire" },
        { label: "Degree", value: "Cyber Security BSc" },
        { label: "Start", value: "Sept 2026" },
      ],
    },
  },
];

export default function AboutTimeline() {
  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Page hero */}
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "5rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Story
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          style={{
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            letterSpacing: "-0.035em",
            color: "var(--text)",
            marginTop: "0.5rem",
            marginBottom: "1.25rem",
            lineHeight: 1.1,
          }}
        >
          Building before everyone else.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          style={{
            fontSize: "1.05rem",
            color: "var(--muted)",
            lineHeight: 1.75,
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          I&apos;m 18. I&apos;m from Swadlincote. I&apos;ve been learning, building,
          and shipping — in public — since before most people my age decided what they
          wanted to do.
        </motion.p>
      </div>

      {/* Timeline */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 2rem 8rem",
          position: "relative",
        }}
      >
        {/* Center vertical line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: "1px",
            background: "var(--border)",
            transform: "translateX(-50%)",
          }}
          className="timeline-line"
        />

        {chapters.map((chapter, i) => (
          <TimelineEntry key={i} chapter={chapter} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line { display: none; }
          .timeline-dot { display: none; }
        }
      `}</style>
    </div>
  );
}

function TimelineEntry({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[0];
  index: number;
}) {
  const isRight = chapter.side === "right";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 40px 1fr",
        gap: "0",
        marginBottom: "6rem",
        alignItems: "start",
      }}
      className="timeline-entry"
    >
      {/* Left column */}
      <div style={{ paddingRight: "2.5rem" }}>
        {!isRight && <TextContent chapter={chapter} />}
        {isRight && <CardContent chapter={chapter} />}
      </div>

      {/* Center dot */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "0.5rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="timeline-dot"
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "var(--accent)",
            border: "2px solid var(--bg)",
            boxShadow: "0 0 0 2px var(--accent)",
            flexShrink: 0,
          }}
        />
        <span
          className="timeline-dot"
          style={{
            position: "absolute",
            top: "1.6rem",
            fontWeight: 700,
            fontSize: "0.6rem",
            color: "var(--muted)",
            letterSpacing: "0.05em",
            whiteSpace: "nowrap",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Right column */}
      <div style={{ paddingLeft: "2.5rem" }}>
        {isRight && <TextContent chapter={chapter} />}
        {!isRight && <CardContent chapter={chapter} />}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-entry {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            margin-bottom: 3.5rem !important;
          }
          .timeline-entry > div { padding: 0 !important; }
        }
      `}</style>
    </motion.div>
  );
}

function TextContent({ chapter }: { chapter: (typeof chapters)[0] }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <span className="section-label">{chapter.period}</span>
      <h2
        style={{
          fontWeight: 800,
          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
          letterSpacing: "-0.03em",
          color: "var(--text)",
          lineHeight: 1.15,
          textAlign: chapter.side === "right" ? "left" : "right",
        }}
        className="timeline-heading"
      >
        {chapter.title}
      </h2>

      <div
        style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}
      >
        {chapter.body.map((para, i) => {
          const isHighlight = para === chapter.highlight;
          if (isHighlight) {
            return (
              <blockquote
                key={i}
                style={{
                  margin: "0.25rem 0",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "var(--text)",
                  lineHeight: 1.6,
                  textAlign: chapter.side === "right" ? "left" : "right",
                  borderLeft: chapter.side === "right" ? "3px solid var(--accent)" : "none",
                  borderRight: chapter.side === "left" ? "3px solid var(--accent)" : "none",
                  paddingLeft: chapter.side === "right" ? "1rem" : "0",
                  paddingRight: chapter.side === "left" ? "1rem" : "0",
                }}
                className="timeline-blockquote"
              >
                {para}
              </blockquote>
            );
          }
          return (
            <p
              key={i}
              style={{
                fontSize: "0.92rem",
                color: "var(--muted)",
                lineHeight: 1.8,
                textAlign: chapter.side === "right" ? "left" : "right",
              }}
              className="timeline-para"
            >
              {para}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
}

function CardContent({ chapter }: { chapter: (typeof chapters)[0] }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
    >
      <div
        style={{
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          padding: "1.75rem",
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}
      >
        {chapter.card.items.map((item, i) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.75rem 0",
              borderBottom:
                i < chapter.card.items.length - 1
                  ? "1px solid var(--border)"
                  : "none",
            }}
          >
            <span style={{ fontSize: "0.78rem", color: "var(--muted)" }}>
              {item.label}
            </span>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text)" }}>
              {item.value}
            </span>
          </div>
        ))}

        {"href" in chapter.card && chapter.card.href && (
          <a
            href={chapter.card.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "1.25rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--accent)",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {chapter.card.label} ↗
          </a>
        )}
      </div>
    </motion.div>
  );
}
