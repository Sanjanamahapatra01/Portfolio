import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

const projects = [
  {
    title: "Knowledge Base Management",
    description:
      "Product module supporting 5+ document formats with drag-and-drop batch upload, web crawling, and an AI-powered Query Analyzer with conversational UI and cited source answers.",
    tech: ["React.js", "TypeScript", "REST APIs", "AI/NLP"],
    category: "featured",
    highlights: [
      "Content onboarding reduced from days to hours",
      "Multi-turn conversation history",
      "Cited source answers",
    ],
  },
  {
    title: "Integrations Marketplace",
    description:
      "Product module connecting 50+ SaaS apps (Salesforce, Teams, Google) with multi-step install wizard, OAuth 2.0 pop-up authentication, and Workato iframe embedding.",
    tech: ["React.js", "OAuth 2.0", "Workato", "REST APIs"],
    category: "featured",
    highlights: [
      "50+ SaaS integrations",
      "Entitlement-based gating",
      "Role-aware permissions",
    ],
  },
  {
    title: "ERP Application",
    description:
      "Full-stack ERP for Airin Abaya's Boutique using Remix.js — digitizing procurement, inventory, sales, and delivery workflows across 200+ SKUs.",
    tech: ["Remix.js", "Full Stack", "ERP"],
    category: "featured",
    highlights: ["200+ SKUs managed", "End-to-end retail digitization"],
  },
  {
    title: "RecoveBird – Payment Recovery",
    description:
      "Overdue payment recovery app with Next.js and multi-channel alerts (email, SMS, WhatsApp). Recovered 30% of outstanding balances within 3 months of launch.",
    tech: ["Next.js", "SMS", "WhatsApp API", "Email"],
    category: "fullstack",
    highlights: [
      "30% balance recovery",
      "10,000+ users",
      "Multi-channel alerts",
    ],
  },
  {
    title: "Policy Management Dashboard",
    description:
      "React.js dashboard with role-based auth (Spring Security) for an insurance company, reducing manual workflow steps by 25%.",
    tech: ["React.js", "Spring Security", "RBAC"],
    category: "fullstack",
  },
  {
    title: "Task Management System",
    description:
      "CRUD-based task management platform with Keycloak SSO, supporting events and team collaboration across 3 teams.",
    tech: ["Java", "Spring Boot", "Keycloak SSO", "PostgreSQL", "Thymeleaf"],
    github: "https://github.com/Sanjanamahapatra01",
    category: "fullstack",
  },
  {
    title: "CI/CD Pipeline Setup",
    description:
      "Automated build-test-deploy pipeline with Jenkins, GitHub webhooks, SonarQube static analysis, and Docker containerization.",
    tech: ["Jenkins", "Docker", "SonarQube", "GitHub Webhooks"],
    category: "devops",
  },
  {
    title: "Blogging Application",
    description:
      "Photo blogging platform built with Next.js enabling users to create, explore photographs and publish posts.",
    tech: ["Next.js", "React.js"],
    github: "https://github.com/Sanjanamahapatra01",
    category: "fullstack",
  },
  {
    title: "CRM System",
    description:
      "Customer Relation Management system using Spring Boot and MongoDB to manage events and customer data.",
    tech: ["Java", "Spring Boot", "Spring Security", "MongoDB"],
    github: "https://github.com/Sanjanamahapatra01",
    category: "fullstack",
  },
  {
    title: "Developer Portfolio",
    description:
      "Personal portfolio built with React.js and Vite, featuring light/dark mode toggle, animated marquee, Framer Motion transitions, and deployed on Vercel.",
    tech: ["React.js", "Vite", "Framer Motion", "Vercel"],
    github: "https://github.com/Sanjanamahapatra01",
    category: "fullstack",
    highlights: [
      "Light & dark theme with localStorage",
      "Animated marquee ticker",
      "Responsive design",
    ],
  },
];

const filters = ["all", "featured", "fullstack", "devops"];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="section"
      ref={ref}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Projects</span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">
            A selection of projects from work and personal experiments
          </p>
          <div className="glow-line" />
        </div>

        {/* Filters */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: "8px 20px",
                fontSize: "13px",
                fontFamily: "'Fira Code', monospace",
                background:
                  activeFilter === f ? "var(--accent-glow)" : "var(--bg-card)",
                color:
                  activeFilter === f
                    ? "var(--accent-light)"
                    : "var(--text-muted)",
                border: `1px solid ${activeFilter === f ? "var(--accent)" : "var(--border)"}`,
                borderRadius: "999px",
                cursor: "pointer",
                transition: "var(--transition)",
                textTransform: "capitalize",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              layout
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                transition: "var(--transition)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(99,102,241,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "16px",
                }}
              >
                <FiFolder
                  style={{ fontSize: "28px", color: "var(--accent)" }}
                />
                <div style={{ display: "flex", gap: "12px" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--text-muted)", fontSize: "18px" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                      }
                    >
                      <FiGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--text-muted)", fontSize: "18px" }}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  marginBottom: "10px",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "16px",
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              {project.highlights && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "16px",
                  }}
                >
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      style={{
                        fontSize: "11px",
                        padding: "3px 8px",
                        background: "rgba(34, 197, 94, 0.1)",
                        color: "#4ade80",
                        borderRadius: "4px",
                        border: "1px solid rgba(34, 197, 94, 0.2)",
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginTop: "auto",
                }}
              >
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "11px",
                      fontFamily: "'Fira Code', monospace",
                      color: "var(--text-muted)",
                    }}
                  >
                    {t}
                    {project.tech.indexOf(t) < project.tech.length - 1
                      ? " · "
                      : ""}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
