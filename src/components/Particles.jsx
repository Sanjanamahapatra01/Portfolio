import { useMemo } from "react";

export default function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 20,
      opacity: Math.random() * 0.3 + 0.05,
    }));
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "var(--particle-color)",
            opacity: p.opacity,
            animation: `floatUp ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.2; }
          90% { opacity: 0.2; }
          100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
