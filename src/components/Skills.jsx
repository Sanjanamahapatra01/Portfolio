import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "JavaScript", "TypeScript", "Java", "HTML/CSS",
  "React.js", "Next.js", "Remix.js", "Redux / Zustand",
  "Spring Boot", "Node.js", "REST APIs", "Spring Security",
];

const tools = [
  "Docker", "Jenkins / CI/CD", "Git", 
  "Workato", "Jira", "VS Code",
];

const marqueeItems = [
  "React.js",
  "Next.js",
  "Remix.js",
  "TypeScript",
  "Java",
  "Spring Boot",
  "Redux",
  "Zustand",
  "React Query",
  "Node.js",
  "REST APIs",
  "PostgreSQL",
  "Docker",
  "Jenkins",
  "Git",
  "Jest",
  "JUnit",
  "Workato",
  "Jira",
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="section"
      ref={ref}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Skills</span>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">Tools & technologies in my toolkit</p>
          <div className="glow-line" />
        </div>

        {/* Skills & Tools */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            marginBottom: "64px",
          }}
          className="skills-grid"
        >
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "32px",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--accent-light)",
                marginBottom: "24px",
                fontFamily: "'Fira Code', monospace",
              }}
            >
              {"{ Skills }"}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "6px 14px",
                    fontSize: "13px",
                    fontFamily: "'Fira Code', monospace",
                    color: "var(--text-secondary)",
                    background: "var(--bg-secondary)",
                    borderRadius: "999px",
                    border: "1px solid var(--border)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "32px",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--accent-light)",
                marginBottom: "24px",
                fontFamily: "'Fira Code', monospace",
              }}
            >
              {"{ Tools }"}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {tools.map((tool) => (
                <span
                  key={tool}
                  style={{
                    padding: "6px 14px",
                    fontSize: "13px",
                    fontFamily: "'Fira Code', monospace",
                    color: "var(--text-secondary)",
                    background: "var(--bg-secondary)",
                    borderRadius: "999px",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Marquee Ticker */}
        <div
          style={{
            overflow: "hidden",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                style={{
                  padding: "8px 20px",
                  fontSize: "13px",
                  fontFamily: "'Fira Code', monospace",
                  color: "var(--text-muted)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "999px",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }

        .marquee-track {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
