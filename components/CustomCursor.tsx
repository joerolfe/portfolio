"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const tick = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.15);
      current.current.y = lerp(current.current.y, pos.current.y, 0.15);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x - 3}px, ${current.current.y - 3}px)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background: "#ffffff",
        pointerEvents: "none",
        zIndex: 99999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
        willChange: "transform",
      }}
    />
  );
}
