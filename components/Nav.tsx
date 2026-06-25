"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Academic", href: "/academic" },
  { label: "Income", href: "/#income" },
  { label: "Experience", href: "/#experience" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const savedScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      savedScrollY.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${savedScrollY.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      return () => {
        document.documentElement.style.scrollBehavior = "auto";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo({ top: savedScrollY.current, behavior: "instant" as ScrollBehavior });
        requestAnimationFrame(() => {
          document.documentElement.style.scrollBehavior = "";
        });
      };
    }
  }, [open]);

  const handleClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      if (pathname !== "/") {
        window.location.href = href;
        return;
      }
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating pill nav — desktop */}
      <div
        className="nav-float"
        style={{
          position: "fixed",
          top: "1.25rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          padding: "0.45rem 0.55rem 0.45rem 0.75rem",
          background: scrolled ? "rgba(242,237,230,0.92)" : "rgba(242,237,230,0.78)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: "999px",
          border: "1px solid var(--border)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.10)" : "0 2px 12px rgba(0,0,0,0.06)",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          whiteSpace: "nowrap",
        }}
      >
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--text)", letterSpacing: "-0.02em", display: "flex", alignItems: "center", gap: "0.4rem", marginRight: "0.5rem" }}
        >
          <span style={{ width: "26px", height: "26px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "1.5px solid var(--border)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/joseph.jpg.PNG" alt="Joseph Rolfe" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </span>
          Joseph Rolfe
        </Link>

        <span style={{ width: "1px", height: "18px", background: "var(--border)", margin: "0 0.5rem", display: "inline-block", flexShrink: 0 }} />

        {navLinks.map((link) => (
          <NavItem key={link.href} link={link} onClick={handleClick} pathname={pathname} />
        ))}

        <Link
          href="/#contact"
          onClick={() => handleClick("/#contact")}
          style={{ background: "var(--accent)", color: "#fff", fontWeight: 600, fontSize: "0.78rem", padding: "0.45rem 1rem", borderRadius: "999px", display: "inline-flex", alignItems: "center", marginLeft: "0.25rem", transition: "opacity 0.2s ease" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          Get in touch →
        </Link>
      </div>

      {/* Mobile floating pill */}
      <div
        className="nav-mobile-pill"
        style={{
          position: "fixed",
          top: "1.25rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 110,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "0.3rem 0.45rem 0.3rem 0.6rem" : "0.45rem 0.55rem 0.45rem 0.75rem",
          background: scrolled ? "rgba(242,237,230,0.96)" : "rgba(242,237,230,0.78)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: "999px",
          border: "1px solid var(--border)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.10)" : "0 2px 12px rgba(0,0,0,0.06)",
          transition: "all 0.3s ease",
          width: scrolled ? "auto" : "calc(100% - 2.5rem)",
          maxWidth: "420px",
        }}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--text)", letterSpacing: "-0.02em", display: "flex", alignItems: "center", gap: "0.4rem" }}
        >
          <span style={{ width: "26px", height: "26px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "1.5px solid var(--border)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/joseph.jpg.PNG" alt="Joseph Rolfe" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </span>
          Joseph Rolfe
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "36px", height: "36px", gap: "5px", borderRadius: "999px", padding: 0 }}
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} transition={{ duration: 0.2 }} style={{ width: "16px", height: "1.5px", background: "var(--text)", borderRadius: "99px", display: "block", transformOrigin: "center" }} />
          <motion.span animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.15 }} style={{ width: "16px", height: "1.5px", background: "var(--text)", borderRadius: "99px", display: "block" }} />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} transition={{ duration: 0.2 }} style={{ width: "16px", height: "1.5px", background: "var(--text)", borderRadius: "99px", display: "block", transformOrigin: "center" }} />
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="nav-mobile-overlay"
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 105, background: "rgba(242,237,230,0.97)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", display: "flex", flexDirection: "column" }}
          >
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 2.5rem", gap: "0.25rem" }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {!link.href.startsWith("/#") ? (
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      style={{ display: "block", fontSize: "2.4rem", fontWeight: 800, letterSpacing: "-0.04em", color: pathname === link.href ? "var(--accent)" : "var(--text)", lineHeight: 1.2, padding: "0.3rem 0" }}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleClick(link.href)}
                      style={{ background: "none", border: "none", display: "block", fontSize: "2.4rem", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1.2, padding: "0.3rem 0", cursor: "pointer", textAlign: "left", width: "100%" }}
                    >
                      {link.label}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.35 }}
              style={{ padding: "2rem 2.5rem", borderTop: "1px solid var(--border)" }}
            >
              <a
                href="mailto:jrolfe477@gmail.com"
                onClick={() => setOpen(false)}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", padding: "1rem", borderRadius: "999px", background: "var(--accent)", color: "#fff", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "-0.01em" }}
              >
                Get in touch →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) {
          .nav-float { display: flex !important; }
          .nav-mobile-pill { display: none !important; }
          .nav-mobile-overlay { display: none !important; }
        }
        @media (max-width: 768px) {
          .nav-float { display: none !important; }
          .nav-mobile-pill { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function NavItem({
  link,
  onClick,
  pathname,
}: {
  link: { label: string; href: string };
  onClick: (href: string) => void;
  pathname: string;
}) {
  const isPageLink = link.href === "/about" || link.href === "/academic";
  const isActive = isPageLink && pathname === link.href;

  if (isPageLink) {
    return (
      <Link
        href={link.href}
        style={{ fontWeight: 500, fontSize: "0.82rem", color: isActive ? "var(--accent)" : "var(--muted)", padding: "0.35rem 0.65rem", borderRadius: "999px", transition: "background 0.15s ease, color 0.15s ease" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.05)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = isActive ? "var(--accent)" : "var(--muted)"; }}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <button
      onClick={() => onClick(link.href)}
      style={{ background: "none", border: "none", fontWeight: 500, fontSize: "0.82rem", color: "var(--muted)", cursor: "pointer", padding: "0.35rem 0.65rem", borderRadius: "999px", transition: "background 0.15s ease, color 0.15s ease" }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.05)"; e.currentTarget.style.color = "var(--text)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--muted)"; }}
    >
      {link.label}
    </button>
  );
}
