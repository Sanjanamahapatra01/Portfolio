import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase, FiCode, FiLayers, FiZap } from "react-icons/fi";

const stats = [
  { icon: <FiBriefcase />, value: "2+", label: "Years Experience" },
  { icon: <FiCode />, value: "15+", label: "Projects Built" },
  { icon: <FiLayers />, value: "50+", label: "Integrations Shipped" },
  { icon: <FiZap />, value: "3", label: "Companies Served" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="glow-line" />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left - Terminal style */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
              }}
            >
              {/* Terminal header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 20px",
                  borderBottom: "1px solid var(--border)",
                  background: "var(--bg-secondary)",
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "var(--terminal-red)",
                  }}
                />
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "var(--terminal-yellow)",
                  }}
                />
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "var(--terminal-green)",
                  }}
                />
                <span
                  style={{
                    marginLeft: "12px",
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "12px",
                    color: "var(--text-muted)",
                  }}
                >
                  about-sanjana.js
                </span>
              </div>

              {/* Terminal body */}
              <div
                style={{
                  padding: "24px",
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "13px",
                  lineHeight: 2,
                }}
              >
                <div>
                  <span style={{ color: "var(--code-purple)" }}>const</span>{" "}
                  <span style={{ color: "var(--code-blue)" }}>sanjana</span> ={" "}
                  {"{"}
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "var(--code-green)" }}>role</span>:{" "}
                  <span style={{ color: "var(--code-yellow)" }}>
                    "Software Engineer"
                  </span>
                  ,
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "var(--code-green)" }}>experience</span>
                  :{" "}
                  <span style={{ color: "var(--code-yellow)" }}>
                    "2+ years"
                  </span>
                  ,
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "var(--code-green)" }}>location</span>:{" "}
                  <span style={{ color: "var(--code-yellow)" }}>
                    "Bengaluru, India"
                  </span>
                  ,
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "var(--code-green)" }}>education</span>:{" "}
                  <span style={{ color: "var(--code-yellow)" }}>
                    "B.Tech CSE, NIST"
                  </span>
                  ,
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "var(--code-green)" }}>cgpa</span>:{" "}
                  <span style={{ color: "var(--code-pink)" }}>8.94</span>,
                </div>
                {/* <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "var(--code-green)" }}>passion</span>:{" "}
                  <span style={{ color: "var(--code-yellow)" }}>
                    "Building scalable UIs"
                  </span>
                  ,
                </div> */}
                <div>{"}"};</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Description + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                marginBottom: "16px",
              }}
            >
              I'm a Software Engineer with{" "}
              <strong style={{ color: "var(--text-primary)" }}>2+ years</strong>{" "}
              of experience building and shipping frontend-heavy web
              applications. At{" "}
              <strong style={{ color: "var(--accent-light)" }}>Nextiva</strong>,
              I worked on two product modules — Knowledge Base Management and
              Integrations Marketplace — connecting 50+ SaaS apps end-to-end.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                marginBottom: "32px",
              }}
            >
              Comfortable with{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                OAuth 2.0, REST APIs, CI/CD
              </strong>
              , and writing tested, review-ready code in an Agile team. I love
              turning complex problems into clean, intuitive interfaces.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    padding: "20px",
                    textAlign: "center",
                    transition: "var(--transition)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      color: "var(--accent)",
                      fontSize: "20px",
                      marginBottom: "8px",
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      marginTop: "4px",
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
