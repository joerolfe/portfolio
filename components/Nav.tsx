"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Academic", href: "/academic" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
];
// Skills + Certifications live on /academic, not the homepage

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          background: scrolled
            ? "rgba(242,237,230,0.92)"
            : "rgba(242,237,230,0.78)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: "999px",
          border: "1px solid var(--border)",
          boxShadow: scrolled
            ? "0 4px 24px rgba(0,0,0,0.10)"
            : "0 2px 12px rgba(0,0,0,0.06)",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          whiteSpace: "nowrap",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontWeight: 700,
            fontSize: "0.85rem",
            color: "var(--text)",
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            marginRight: "0.5rem",
          }}
        >
          <span
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "0.65rem",
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            JR
          </span>
          Joseph Rolfe
        </Link>

        {/* Divider */}
        <span
          style={{
            width: "1px",
            height: "18px",
            background: "var(--border)",
            margin: "0 0.5rem",
            display: "inline-block",
            flexShrink: 0,
          }}
        />

        {/* Links */}
        {navLinks.map((link) => (
          <NavItem key={link.href} link={link} onClick={handleClick} pathname={pathname} />
        ))}

        {/* CTA */}
        <Link
          href="/#contact"
          onClick={() => handleClick("/#contact")}
          style={{
            background: "var(--accent)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.78rem",
            padding: "0.45rem 1rem",
            borderRadius: "999px",
            display: "inline-flex",
            alignItems: "center",
            marginLeft: "0.25rem",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          Get in touch →
        </Link>
      </div>

      {/* Mobile pill nav */}
      <div
        className="nav-mobile-pill"
        style={{
          position: "fixed",
          top: "1.25rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.45rem 0.45rem 0.45rem 0.75rem",
          background: scrolled ? "rgba(242,237,230,0.92)" : "rgba(242,237,230,0.78)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: "999px",
          border: "1px solid var(--border)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.10)" : "0 2px 12px rgba(0,0,0,0.06)",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          width: "calc(100% - 2.5rem)",
          maxWidth: "420px",
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 700,
            fontSize: "0.85rem",
            color: "var(--text)",
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "0.65rem",
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            JR
          </span>
          Joseph Rolfe
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            background: open ? "var(--accent)" : "rgba(0,0,0,0.06)",
            border: "none",
            color: open ? "#fff" : "var(--text)",
            cursor: "pointer",
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.2s ease, color 0.2s ease",
            fontSize: "0.75rem",
            fontWeight: 700,
          }}
        >
          {open ? "✕" : "≡"}
        </button>
      </div>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "rgba(242,237,230,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.22, delay: 0.05 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.35rem", width: "100%", padding: "0 2rem" }}
            >
              {navLinks.map((link) =>
                !link.href.startsWith("/#") ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={{
                      fontWeight: 700,
                      fontSize: "clamp(1.6rem, 6vw, 2.2rem)",
                      color: pathname === link.href ? "var(--accent)" : "var(--text)",
                      letterSpacing: "-0.03em",
                      textAlign: "center",
                      padding: "0.4rem 0",
                      width: "100%",
                    }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      fontWeight: 700,
                      fontSize: "clamp(1.6rem, 6vw, 2.2rem)",
                      color: "var(--text)",
                      letterSpacing: "-0.03em",
                      textAlign: "center",
                      cursor: "pointer",
                      padding: "0.4rem 0",
                      width: "100%",
                    }}
                  >
                    {link.label}
                  </button>
                )
              )}

              <Link
                href="/#contact"
                onClick={() => handleClick("/#contact")}
                style={{
                  marginTop: "1.5rem",
                  background: "var(--accent)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "0.85rem 2.5rem",
                  borderRadius: "999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                Get in touch →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) {
          .nav-float { display: flex !important; }
          .nav-mobile-pill { display: none !important; }
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
        style={{
          fontWeight: 500,
          fontSize: "0.82rem",
          color: isActive ? "var(--accent)" : "var(--muted)",
          padding: "0.35rem 0.65rem",
          borderRadius: "999px",
          transition: "background 0.15s ease, color 0.15s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.05)";
          (e.currentTarget as HTMLElement).style.color = "var(--text)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "transparent";
          (e.currentTarget as HTMLElement).style.color = isActive ? "var(--accent)" : "var(--muted)";
        }}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <button
      onClick={() => onClick(link.href)}
      style={{
        background: "none",
        border: "none",
        fontWeight: 500,
        fontSize: "0.82rem",
        color: "var(--muted)",
        cursor: "pointer",
        padding: "0.35rem 0.65rem",
        borderRadius: "999px",
        transition: "background 0.15s ease, color 0.15s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(0,0,0,0.05)";
        e.currentTarget.style.color = "var(--text)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "var(--muted)";
      }}
    >
      {link.label}
    </button>
  );
}
