const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 30}s`,
  duration: `${20 + Math.random() * 20}s`,
  drift: `${-40 + Math.random() * 80}px`,
}));

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      <div className="orb orb-violet -top-48 -left-32" />
      <div className="orb orb-cyan top-1/3 -right-32" />
      <div className="orb orb-accent bottom-0 left-1/4" />
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: "-4px",
            "--duration": p.duration,
            "--delay": p.delay,
            "--drift": p.drift,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
