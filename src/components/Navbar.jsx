import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled ? "var(--nav-bg-scrolled)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="hero" smooth duration={500} style={{ cursor: "pointer" }}>
          <span
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: "20px",
              fontWeight: 700,
              background: "var(--gradient-1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.5px",
            }}
          >
            sanjana.
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{ display: "flex", gap: "8px", alignItems: "center" }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              spy
              activeClass="nav-active"
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--text-secondary)",
                cursor: "pointer",
                borderRadius: "var(--radius-sm)",
                transition: "var(--transition)",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "var(--text-primary)";
                e.target.style.background = "var(--accent-glow)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "var(--text-secondary)";
                e.target.style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Sanjana_Mahapatra_Resume_OnePage.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "8px 20px",
              fontSize: "14px",
              fontWeight: 600,
              color: "white",
              background: "var(--gradient-1)",
              borderRadius: "var(--radius-sm)",
              marginLeft: "8px",
              transition: "var(--transition)",
            }}
          >
            Resume
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              color: "var(--text-primary)",
              fontSize: "16px",
              cursor: "pointer",
              marginLeft: "8px",
              transition: "var(--transition)",
            }}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          className="mobile-controls"
        >
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="mobile-toggle"
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              color: "var(--text-primary)",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle"
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "var(--text-primary)",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "var(--mobile-menu-bg)",
              borderTop: "1px solid var(--border)",
              overflow: "hidden",
            }}
            className="mobile-menu"
          >
            <div
              style={{
                padding: "16px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    padding: "12px 16px",
                    fontSize: "16px",
                    color: "var(--text-secondary)",
                    cursor: "pointer",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/Sanjana_Mahapatra_Resume_OnePage.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "12px 16px",
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
