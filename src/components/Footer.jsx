import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 0",
        borderTop: "1px solid var(--border)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          {[
            {
              icon: <FiGithub />,
              href: "https://github.com/Sanjanamahapatra01",
            },
            {
              icon: <FiLinkedin />,
              href: "https://www.linkedin.com/in/sanjana-mahapatra-620b55188/",
            },
            { icon: <FiMail />, href: "mailto:sanjana101mahapatra@gmail.com" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--text-muted)",
                fontSize: "18px",
                transition: "var(--transition)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p
          style={{
            fontSize: "13px",
            color: "var(--text-muted)",
            fontFamily: "'Fira Code', monospace",
          }}
        >
          Designed & Built by Sanjana Mahapatra
        </p>

        <p
          style={{
            fontSize: "12px",
            color: "var(--text-muted)",
            marginTop: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
            opacity: 0.6,
          }}
        >
          Made with <FiHeart style={{ color: "#ef4444", fontSize: "12px" }} />{" "}
          using React
        </p>
      </div>
    </footer>
  );
}
