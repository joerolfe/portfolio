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

      {/* Mobile nav bar */}
      <header
        className="nav-mobile"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(242,237,230,0.95)" : "rgba(242,237,230,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            padding: "0 1.25rem",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 700,
              fontSize: "0.9rem",
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
              background: "none",
              border: "none",
              color: "var(--text)",
              fontSize: "1.3rem",
              cursor: "pointer",
              padding: "0.25rem",
              lineHeight: 1,
            }}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              style={{
                overflow: "hidden",
                borderTop: "1px solid var(--border)",
                background: "var(--bg)",
              }}
            >
              <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {navLinks.map((link) =>
                  !link.href.startsWith("/#") ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      style={{ fontWeight: 500, fontSize: "0.95rem", color: "var(--muted)" }}
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
                        fontWeight: 500,
                        fontSize: "0.95rem",
                        color: "var(--muted)",
                        textAlign: "left",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      {link.label}
                    </button>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <style>{`
        @media (min-width: 769px) {
          .nav-float { display: flex !important; }
          .nav-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .nav-float { display: none !important; }
          .nav-mobile { display: block !important; }
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
