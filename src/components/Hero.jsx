import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { Link } from "react-scroll";

const roles = [
  "Software Engineer",
  "Frontend Developer",
  "Full Stack Developer",
  "React Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 0);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            currentRole.substring(
              0,
              isDeleting ? text.length - 1 : text.length + 1,
            ),
          );
        },
        isDeleting ? 40 : 80,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const socialLinks = [
    {
      icon: <FiGithub />,
      href: "https://github.com/Sanjanamahapatra01",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/sanjana-mahapatra-620b55188/",
      label: "LinkedIn",
    },
    {
      icon: <FiMail />,
      href: "mailto:sanjana101mahapatra@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "350px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Terminal-style greeting */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "999px",
              padding: "8px 20px",
              marginBottom: "32px",
              fontSize: "14px",
              fontFamily: "'Fira Code', monospace",
            }}
          >
            <span style={{ color: "var(--success)" }}>●</span>
            <span style={{ color: "var(--text-secondary)" }}>
              Available for opportunities
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "clamp(36px, 7vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "8px",
            letterSpacing: "-2px",
          }}
        >
          Hi, I'm{" "}
          <span
            style={{
              background: "var(--gradient-1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sanjana
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "clamp(20px, 3vw, 32px)",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: "24px",
            minHeight: "48px",
          }}
        >
          <span>{text}</span>
          <span
            style={{
              display: "inline-block",
              width: "3px",
              height: "1em",
              background: "var(--accent)",
              marginLeft: "2px",
              verticalAlign: "text-bottom",
              animation: "blink 1s step-end infinite",
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: "17px",
            color: "var(--text-muted)",
            maxWidth: "580px",
            margin: "0 auto 40px",
            lineHeight: 1.8,
          }}
        >
          2+ years building production-grade web apps with React, Next.js &
          Spring Boot. Currently working on Knowledge Base and Integrations
          Marketplace modules at Nextiva.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            style={{
              padding: "14px 32px",
              background: "var(--gradient-1)",
              color: "white",
              fontWeight: 600,
              fontSize: "15px",
              borderRadius: "var(--radius)",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
              transition: "var(--transition)",
            }}
          >
            Get In Touch
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            offset={-80}
            style={{
              padding: "14px 32px",
              background: "transparent",
              color: "var(--text-primary)",
              fontWeight: 600,
              fontSize: "15px",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border-light)",
              cursor: "pointer",
              transition: "var(--transition)",
            }}
          >
            View Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: "flex", gap: "16px", justifyContent: "center" }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              style={{
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--border)",
                borderRadius: "50%",
                color: "var(--text-secondary)",
                fontSize: "18px",
                transition: "var(--transition)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.background = "var(--accent-glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Link
            to="about"
            smooth
            duration={500}
            offset={-80}
            style={{ cursor: "pointer" }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ color: "var(--text-muted)", fontSize: "20px" }}
            >
              <FiArrowDown />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
