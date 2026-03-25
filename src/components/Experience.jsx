import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiMapPin, FiCalendar } from "react-icons/fi";

const experiences = [
  {
    title: "Software Engineer",
    company: "Nextiva International Pvt. Ltd.",
    location: "Bengaluru, India",
    period: "Mar 2025 – Present",
    type: "Full-time",
    highlights: [
      "Built the Knowledge Base Management module supporting 5+ document formats (PDF, DOCX, CSV) with drag-and-drop batch upload and web crawling, cutting content onboarding from days to hours",
      "Developed an AI-powered Query Analyzer with conversational UI, multi-turn history, and cited source answers for KB retrieval validation",
      "Implemented the Integrations Marketplace module connecting 50+ SaaS apps (Salesforce, Teams, Google) with OAuth 2.0 pop-up auth and Workato iframe embedding",
      "Created 15+ reusable UI components (card/table views, paginated lists, debounced search, date-range filters) adopted across 4 product modules",
      "Configured connected app management with entitlement-based gating and role-aware permissions across 100+ enterprise accounts",
    ],
    tech: ["React.js", "TypeScript", "OAuth 2.0", "Workato", "REST APIs"],
  },
  {
    title: "Software Developer (Freelance)",
    company: "Cartagan Software Pvt. Ltd.",
    location: "Remote",
    period: "Oct 2024 – Dec 2024",
    type: "Freelance",
    highlights: [
      "Independently delivered a full-stack ERP application using Remix.js for a retail business, digitizing procurement, inventory, sales, and delivery workflows across 200+ SKUs",
    ],
    tech: ["Remix.js", "Full-stack", "ERP"],
  },
  {
    title: "Associate Software Developer",
    company: "Prodevans Technologies Pvt. Ltd.",
    location: "Bengaluru, India",
    period: "Feb 2024 – Aug 2024",
    type: "Full-time",
    highlights: [
      "Delivered an overdue payment recovery app with Next.js and multi-channel alerts (email, SMS, WhatsApp), recovering 30% of outstanding balances within 3 months",
      "Designed a React.js dashboard with role-based auth (Spring Security) for an insurance company, reducing manual workflow steps by 25%",
    ],
    tech: ["Next.js", "React.js", "Spring Security", "SMS/WhatsApp"],
  },
  {
    title: "Developer Intern",
    company: "Prodevans Technologies Pvt. Ltd.",
    location: "Bengaluru, India",
    period: "Aug 2023 – Feb 2024",
    type: "Internship",
    highlights: [
      "Integrated MessageBird chatbot handling 1,000+ monthly interactions, boosting lead generation by 50% and conversion rates by 30%",
      "Shipped a Task Management System using Next.js and Spring Boot, collaborating across 3 teams and shortening delivery timelines by 40%",
    ],
    tech: ["Next.js", "Spring Boot", "MessageBird"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-subtitle">My professional journey so far</p>
          <div className="glow-line" />
        </div>

        <div
          style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}
        >
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: "20px",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(to bottom, var(--accent), var(--border))",
            }}
            className="timeline-line"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                position: "relative",
                paddingLeft: "56px",
                marginBottom: i < experiences.length - 1 ? "40px" : 0,
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "6px",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: i === 0 ? "var(--accent)" : "var(--bg-card)",
                  border: `2px solid ${i === 0 ? "var(--accent)" : "var(--border-light)"}`,
                  zIndex: 1,
                  boxShadow: i === 0 ? "0 0 12px rgba(99,102,241,0.4)" : "none",
                }}
              />

              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px",
                  transition: "var(--transition)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "4px",
                  }}
                >
                  <h3 style={{ fontSize: "18px", fontWeight: 700 }}>
                    {exp.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "11px",
                      fontFamily: "'Fira Code', monospace",
                      padding: "4px 10px",
                      background:
                        i === 0 ? "var(--accent-glow)" : "var(--bg-secondary)",
                      color:
                        i === 0 ? "var(--accent-light)" : "var(--text-muted)",
                      borderRadius: "999px",
                      border: `1px solid ${i === 0 ? "var(--accent)" : "var(--border)"}`,
                    }}
                  >
                    {exp.type}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--accent-light)",
                    marginBottom: "8px",
                  }}
                >
                  {exp.company}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    marginBottom: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <FiCalendar /> {exp.period}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <FiMapPin /> {exp.location}
                  </span>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        paddingLeft: "16px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "10px",
                          width: "5px",
                          height: "5px",
                          background: "var(--accent)",
                          borderRadius: "50%",
                        }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "11px",
                        fontFamily: "'Fira Code', monospace",
                        padding: "3px 10px",
                        background: "var(--bg-secondary)",
                        color: "var(--text-muted)",
                        borderRadius: "4px",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
