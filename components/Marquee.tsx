interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 28 }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "0.85rem 0",
        background: "var(--bg2)",
      }}
    >
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-heading), system-ui, sans-serif",
              fontWeight: 500,
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)",
              paddingRight: "2.5rem",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span
              style={{
                marginLeft: "2.5rem",
                color: "var(--border-h)",
                fontSize: "0.5rem",
              }}
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
