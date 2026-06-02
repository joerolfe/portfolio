"use client";

import { useEffect, useRef, useState } from "react";

type Cert = {
  name: string;
  issuer: string;
  year: string;
  link: string;
};

export default function CertCarousel({ certs }: { certs: Cert[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const isPaused = useRef(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Clone last + first for infinite feel: [last, ...certs, first]
  const items = [certs[certs.length - 1], ...certs, certs[0]];
  const total = items.length;

  const scrollTo = (index: number, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (!card) return;
    const offset = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
    track.scrollTo({ left: offset, behavior: smooth ? "smooth" : "instant" });
  };

  // Start at index 1 (first real card) instantly
  useEffect(() => {
    scrollTo(1, false);
  }, []);

  // After smooth scroll, check if we need to jump to real clone
  const handleScrollEnd = () => {
    const track = trackRef.current;
    if (!track) return;
    // Find which card is closest to center
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const cardCenter = el.offsetLeft + el.clientWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < minDist) { minDist = dist; closest = i; }
    });

    setActive(closest === 0 ? total - 2 : closest === total - 1 ? 1 : closest);

    // Jump clones silently
    if (closest === 0) {
      scrollTo(total - 2, false);
    } else if (closest === total - 1) {
      scrollTo(1, false);
    }
  };

  // Auto-advance
  const startAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      if (isPaused.current) return;
      const track = trackRef.current;
      if (!track) return;
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      Array.from(track.children).forEach((child, i) => {
        const el = child as HTMLElement;
        const dist = Math.abs(el.offsetLeft + el.clientWidth / 2 - center);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      const next = closest >= total - 1 ? 0 : closest + 1;
      scrollTo(next);
    }, 3000);
  };

  useEffect(() => {
    startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, []);

  const realIndex = (i: number) => {
    if (i === 0) return certs.length - 1;
    if (i === total - 1) return 0;
    return i - 1;
  };

  return (
    <div
      style={{ margin: "0 -2rem", position: "relative" }}
      onTouchStart={() => { isPaused.current = true; }}
      onTouchEnd={() => {
        setTimeout(() => { isPaused.current = false; }, 4000);
        handleScrollEnd();
      }}
    >
      <div
        ref={trackRef}
        onScroll={() => {}}
        style={{
          display: "flex",
          gap: "0.75rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch" as never,
          padding: "0.5rem 0 1.25rem",
          scrollbarWidth: "none",
        }}
      >
        {items.map((cert, i) => (
          <div
            key={`${cert.name}-${i}`}
            style={{
              flex: "0 0 75vw",
              maxWidth: "280px",
              scrollSnapAlign: "center",
              background: "var(--bg2)",
              border: `1px solid ${i === active ? "var(--accent)" : "var(--border)"}`,
              borderRadius: "14px",
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              transition: "border-color 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
              opacity: i === active ? 1 : 0.55,
              transform: i === active ? "scale(1)" : "scale(0.96)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {String(realIndex(i) + 1).padStart(2, "0")} / {String(certs.length).padStart(2, "0")}
              </span>
              <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "var(--muted)", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "999px", padding: "0.15rem 0.5rem" }}>
                {cert.year}
              </span>
            </div>
            <h4 style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.4, margin: "0 0 0.4rem", letterSpacing: "-0.01em" }}>{cert.name}</h4>
            <p style={{ fontSize: "0.75rem", color: "var(--muted)", margin: "0 0 auto" }}>{cert.issuer}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", marginTop: "1rem", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
            >
              View Certificate ↗
            </a>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.4rem", paddingBottom: "0.25rem" }}>
        {certs.map((_, i) => (
          <button
            key={i}
            onClick={() => { scrollTo(i + 1); setActive(i + 1); }}
            style={{
              width: active === i + 1 ? "18px" : "6px",
              height: "6px",
              borderRadius: "999px",
              background: active === i + 1 ? "var(--accent)" : "var(--border)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "width 0.3s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
