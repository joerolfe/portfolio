"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const chapters = [
  {
    period: "2022 – 2026",
    title: "School & College",
    side: "right",
    body: [
      "At school I ran Code Club — teaching younger students, running workshops, watching 10+ kids ship their first projects. Left with grades I was proud of and a clear sense of direction.",
      "College is where it properly clicked. Two years on a Level 3 Programming & App Development course at BSDC — HTML, CSS, JS, then deeper into AI and automation. By 2026 I had nine Cisco certifications and a predicted DDD on the OCR Extended Diploma.",
      "Academic foundation built. Time to do something with it.",
    ],
    highlight: "Academic foundation built. Time to do something with it.",
    card: {
      type: "gcse",
      items: [
        { label: "English Literature", value: "9" },
        { label: "English Language", value: "8" },
        { label: "PE", value: "7" },
        { label: "Maths", value: "6" },
        { label: "Computer Science", value: "6" },
        { label: "Cisco Certs", value: "9" },
      ],
    },
  },
  {
    period: "2024 – Present",
    title: "Social Media Automation",
    side: "left",
    body: [
      "The summer I left school I launched FluxFUT — an EAFC gaming content brand across 3 TikToks, YouTube, and Instagram. That taught me how content works at scale. Then I took it further.",
      "Now I run multiple TikTok accounts and a TikTok Shop generating income on autopilot. Built systems for content scheduling, product fulfilment, and audience growth — money coming in while I focus on other things.",
      "I also built out the FluxFUT Discord with digital products that sell passively.",
      "Automated income before the age of 19.",
    ],
    highlight: "Automated income before the age of 19.",
    card: {
      type: "screenshot",
      href: "https://fluxfut.vercel.app/",
      site: "fluxfut.vercel.app",
      screenshot: "/fluxfut-preview.png.png",
    },
  },
  {
    period: "April 2026",
    title: "Rolfe Brand Scaling",
    side: "right",
    body: [
      "I didn't want to wait until university to work with real clients. So I launched Rolfe Brand Scaling — a digital agency offering websites, AI automations, and brand strategy to local businesses who want to grow online.",
      "I handle every project end to end: the brief, the design, the build, the deployment. No handoffs, no middlemen, no waiting for someone to give me the green light.",
      "Real clients, real work, before uni.",
    ],
    highlight: "Real clients, real work, before uni.",
    card: {
      type: "screenshot",
      href: "https://myagency-nine.vercel.app/",
      site: "myagency-nine.vercel.app",
      screenshot: "/agency-preview.png",
    },
  },
  {
    period: "2026 →",
    title: "What's Next",
    side: "left",
    body: [
      "Starting a Cyber Security BSc at Staffordshire University in September 2026. The degree matters — but it's one part of a bigger picture.",
      "The automation business keeps running. Rolfe Brand Scaling keeps growing. I also own the app Ritual, which I'm building out alongside everything else.",
      "Outside the work, I'm building the person behind it — gym every day, locking in on self-improvement, and building a personal brand around that journey. The plan is to document it and eventually help others do the same.",
      "The degree is one part of a bigger plan.",
    ],
    highlight: "The degree is one part of a bigger plan.",
    card: {
      type: "stat",
      items: [
        { label: "University", value: "Staffordshire" },
        { label: "Degree", value: "Cyber Security BSc" },
        { label: "App", value: "Ritual" },
        { label: "Ventures running", value: "3+" },
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
          Hey, I&apos;m Joseph. Here&apos;s my story.
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
          I&apos;m 18. I&apos;m from Burton on Trent. I&apos;ve been learning, building,
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

        {chapters.map((chapter, i) =>
          chapter.card.type === "screenshot" ? (
            <ScreenshotEntry key={i} chapter={chapter} index={i} />
          ) : (
            <TimelineEntry key={i} chapter={chapter} index={i} />
          )
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line { display: none; }
          .timeline-dot { display: none; }
          .screenshot-col { margin-right: 0 !important; padding-left: 0 !important; }
        }
      `}</style>
    </div>
  );
}

function ScreenshotEntry({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[0];
  index: number;
}) {
  const card = chapter.card as { type: "screenshot"; href: string; site: string; screenshot: string };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
      style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr", gap: "0", marginBottom: "6rem", alignItems: "center" }}
      className="timeline-entry"
    >
      {/* Left — text */}
      <div style={{ paddingRight: "2.5rem" }}>
        <TextContent chapter={chapter} />
      </div>

      {/* Center dot */}
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "0.5rem", position: "relative", zIndex: 2 }}>
        <div
          className="timeline-dot"
          style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--accent)", border: "2px solid var(--bg)", boxShadow: "0 0 0 2px var(--accent)", flexShrink: 0 }}
        />
        <span
          className="timeline-dot"
          style={{ position: "absolute", top: "1.6rem", fontWeight: 700, fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.05em", whiteSpace: "nowrap" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Right — screenshot (bleeds right) */}
      <motion.div
        className="timeline-col-card screenshot-col"
        style={{ paddingLeft: "1.5rem", marginRight: "-8rem" }}
        variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
      >
        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "block", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border)", transition: "box-shadow 0.2s ease, transform 0.2s ease" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.18)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.screenshot}
            alt="FluxFUT website"
            style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top" }}
          />
        </a>
      </motion.div>
    </motion.div>
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
      <div style={{ paddingRight: "2.5rem" }} className={isRight ? "timeline-col-card" : "timeline-col-text"}>
        {!isRight && <TextContent chapter={chapter} />}
        {isRight && <CardContent chapter={chapter} />}
      </div>

      {/* Center dot */}
      <div
        className="timeline-col-dot"
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
      <div style={{ paddingLeft: "2.5rem" }} className={isRight ? "timeline-col-text" : "timeline-col-card"}>
        {isRight && <TextContent chapter={chapter} />}
        {!isRight && <CardContent chapter={chapter} />}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-entry {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.5rem !important;
            margin-bottom: 3.5rem !important;
          }
          .timeline-col-dot { display: none !important; }
          .timeline-col-text { order: 1; padding: 0 !important; }
          .timeline-col-card { order: 2; padding: 0 !important; }
          .timeline-heading { text-align: left !important; }
          .timeline-para { text-align: left !important; }
          .timeline-blockquote { text-align: left !important; border-left: 3px solid var(--accent) !important; border-right: none !important; padding-left: 1rem !important; padding-right: 0 !important; }
        }
      `}</style>
    </motion.div>
  );
}

function WebsitePreviewButton({ preview }: { preview: { href: string; site: string; screenshot: string } }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <a
        href={preview.href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          fontSize: "0.8rem",
          fontWeight: 600,
          color: "var(--accent)",
          padding: "0.45rem 0.9rem",
          border: "1px solid rgba(196,98,45,0.3)",
          borderRadius: "999px",
          transition: "background 0.2s ease",
          background: hovered ? "rgba(196,98,45,0.06)" : "transparent",
          textDecoration: "none",
        }}
      >
        View website ↗
      </a>

      {hovered && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            left: "50%",
            transform: "translateX(-50%)",
            width: "280px",
            background: "var(--bg)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
            zIndex: 50,
            pointerEvents: "none",
            animation: "preview-in 0.15s ease",
          }}
        >
          {/* Screenshot */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview.screenshot}
            alt="Website preview"
            style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      )}

      <style>{`
        @keyframes preview-in {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
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
  const { card } = chapter;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
    >
      {/* GCSE grades card */}
      {card.type === "gcse" && "items" in card && (
        <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.75rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>GCSE Results</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {(card as { type: string; items: { label: string; value: string }[] }).items.map((item, i) => (
              <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.65rem 0", borderBottom: i < (card as { type: string; items: { label: string; value: string }[] }).items.length - 1 ? "1px solid var(--border)" : "none" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{item.label}</span>
                <span style={{
                  fontSize: "0.82rem", fontWeight: 700,
                  color: item.value === "9" || item.value === "8" ? "var(--accent)" : "var(--text)",
                }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Screenshot card */}
      {card.type === "screenshot" && "href" in card && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "block", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border)", transition: "box-shadow 0.2s ease, transform 0.2s ease", width: "100%", maxWidth: "480px" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.18)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={"screenshot" in card ? card.screenshot : ""}
              alt="FluxFUT website"
              style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top" }}
            />
          </a>
        </div>
      )}

      {/* Default stat card */}
      {card.type === "stat" && "items" in card && (() => {
        const statCard = card as { type: string; items: { label: string; value: string }[]; display?: string; preview?: { href: string; site: string; screenshot: string } };
        return (
          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.75rem" }}>
            {statCard.display === "pills" ? (
              <>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {statCard.items.map((item) => (
                    <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "0.1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "10px", padding: "0.6rem 0.9rem", flex: "1 1 calc(50% - 0.25rem)" }}>
                      <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.07em" }}>{item.label}</span>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text)" }}>{item.value}</span>
                    </div>
                  ))}
                </div>
                {statCard.preview && (
                  <div style={{ marginTop: "1.25rem" }}>
                    <WebsitePreviewButton preview={statCard.preview} />
                  </div>
                )}
              </>
            ) : (
              <>
                {statCard.items.map((item, i) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 0", borderBottom: i < statCard.items.length - 1 ? "1px solid var(--border)" : "none" }}>
                    <span style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{item.label}</span>
                    <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text)" }}>{item.value}</span>
                  </div>
                ))}
                {statCard.preview && (
                  <div style={{ marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border)" }}>
                    <WebsitePreviewButton preview={statCard.preview} />
                  </div>
                )}
              </>
            )}
          </div>
        );
      })()}
    </motion.div>
  );
}
