import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mailto link as fallback
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.open(
      `mailto:sanjana101mahapatra@gmail.com?subject=${subject}&body=${body}`,
    );
    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(null), 3000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: "Email",
      value: "sanjana101mahapatra@gmail.com",
      href: "mailto:sanjana101mahapatra@gmail.com",
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: "Bengaluru, India",
    },
    {
      icon: <FiGithub />,
      label: "GitHub",
      value: "Sanjanamahapatra01",
      href: "https://github.com/Sanjanamahapatra01",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      value: "SanjanaMahapatra",
      href: "https://www.linkedin.com/in/sanjana-mahapatra-620b55188/",
    },
  ];

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </p>
          <div className="glow-line" />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "48px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
          className="contact-grid"
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              Get in touch
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-secondary)",
                marginBottom: "32px",
                lineHeight: 1.7,
              }}
            >
              I'm currently open to new opportunities and interesting projects.
              Whether you have a question or just want to say hi, my inbox is
              always open.
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "var(--accent-glow)",
                      borderRadius: "var(--radius-sm)",
                      color: "var(--accent)",
                      fontSize: "18px",
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        marginBottom: "2px",
                      }}
                    >
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "var(--text-primary)",
                        }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div style={{ fontSize: "14px", fontWeight: 500 }}>
                        {info.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  marginBottom: "8px",
                }}
              >
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, name: e.target.value }))
                }
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  color: "var(--text-primary)",
                  fontSize: "14px",
                  outline: "none",
                  transition: "var(--transition)",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  marginBottom: "8px",
                }}
              >
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, email: e.target.value }))
                }
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  color: "var(--text-primary)",
                  fontSize: "14px",
                  outline: "none",
                  transition: "var(--transition)",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  marginBottom: "8px",
                }}
              >
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, message: e.target.value }))
                }
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  color: "var(--text-primary)",
                  fontSize: "14px",
                  outline: "none",
                  transition: "var(--transition)",
                  fontFamily: "inherit",
                  resize: "vertical",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              style={{
                padding: "14px 32px",
                background: "var(--gradient-1)",
                color: "white",
                fontWeight: 600,
                fontSize: "15px",
                border: "none",
                borderRadius: "var(--radius-sm)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "var(--transition)",
                fontFamily: "inherit",
              }}
            >
              {status === "sent" ? (
                "✓ Opening Mail Client"
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
