/* global React */
const { useState, useEffect, useRef } = React;

const ICONS = {
  menu: "M4 6h16M4 12h16M4 18h16",
  x: "M6 6l12 12M18 6L6 18",
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  arrowUpRight: "M7 17L17 7M8 7h9v9",
  check: "M20 6L9 17l-5-5",
  compass: "M12 12l4-8-8 4 4 4z",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  phone: "M5 4h4l2 5-3 2a14 14 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z",
  star: "M12 3l2.6 5.6L21 9.3l-4.5 4.3L17.6 21 12 17.8 6.4 21l1.1-7.4L3 9.3l6.4-.7L12 3z",
  quote: "M7 7h4v4a4 4 0 01-4 4M13 7h4v4a4 4 0 01-4 4",
};
function Icon({ name, size = 22, stroke = "currentColor", width = 1.5, style }) {
  const d = ICONS[name] || "";
  const fill = name === "compass" || name === "star" ? "currentColor" : "none";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}
      stroke={fill === "none" ? stroke : "none"} strokeWidth={width}
      strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

function Logo({ variant = "navy", height = 34 }) {
  const src = variant === "white"
    ? "assets/logo-horizontal-white.png"
    : "assets/logo-horizontal-navy.png";
  return <img src={src} alt="CuraMagis" style={{ height, width: "auto", display: "block" }} />;
}

function Eyebrow({ children, onNavy, style }) {
  return (
    <p style={{
      fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
      letterSpacing: "0.18em", textTransform: "uppercase",
      color: onNavy ? "var(--gold-mid)" : "var(--accent-ink)",
      margin: 0, ...style,
    }}>{children}</p>
  );
}

function Tag({ children, tone = "gold" }) {
  const tones = {
    gold: { background: "rgba(206,162,47,.14)", color: "#8A6A14" },
    navy: { background: "var(--navy)", color: "var(--gold-mid)" },
    outline: { background: "transparent", color: "var(--ink-soft)", border: "1px solid var(--line-strong)" },
  };
  return (
    <span style={{
      fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
      letterSpacing: "0.1em", textTransform: "uppercase",
      padding: "5px 13px", borderRadius: 999, display: "inline-block",
      ...tones[tone],
    }}>{children}</span>
  );
}

function Button({ children, variant = "primary", size = "md", onClick, icon, type = "button" }) {
  const [hover, setHover] = useState(false);
  const sizes = {
    sm: { padding: "8px 16px", fontSize: 14 },
    md: { padding: "12px 24px", fontSize: 15 },
    lg: { padding: "15px 32px", fontSize: 17 },
  };
  const base = {
    fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.01em",
    borderRadius: "var(--radius-sm)", border: "1px solid transparent",
    cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 9,
    transition: "all var(--dur) var(--ease-out)", ...sizes[size],
  };
  const variants = {
    primary: { background: hover ? "#bd9128" : "var(--gold)", color: "#3a2c05", boxShadow: hover ? "0 10px 28px rgba(206,162,47,.3)" : "var(--shadow-gold)" },
    navy: { background: hover ? "#0f4f74" : "var(--navy)", color: "#fff", fontWeight: 500 },
    ghost: { background: "transparent", color: "var(--navy)", borderColor: hover ? "var(--navy)" : "var(--line-strong)", fontWeight: 500 },
    onNavy: { background: hover ? "#f4d878" : "var(--gold-mid)", color: "#2c2106", fontWeight: 600 },
    linkNavy: { background: "transparent", color: hover ? "#fff" : "var(--gold-mid)", fontWeight: 600, padding: "12px 4px", border: 0 },
  };
  return (
    <button type={type} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant] }}>
      {children}{icon && <Icon name={icon} size={size === "lg" ? 19 : 17} />}
    </button>
  );
}

function Divider({ ornament = true, onNavy }) {
  const line = onNavy ? "var(--navy-line)" : "var(--line-strong)";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <span style={{ height: 1, background: line, flex: 1 }} />
      {ornament && <span style={{ color: "var(--gold)", fontSize: 11 }}>◆</span>}
      <span style={{ height: 1, background: line, flex: 1 }} />
    </div>
  );
}

function Field({ label, type = "text", placeholder, value, onChange, hint, multiline, required }) {
  const [focus, setFocus] = useState(false);
  const sharedStyle = {
    width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body)",
    fontSize: 16, padding: "11px 14px", color: "var(--navy)",
    border: `1px solid ${focus ? "var(--gold)" : "var(--line-strong)"}`,
    borderRadius: "var(--radius-sm)", background: "var(--white)",
    boxShadow: focus ? "0 0 0 3px rgba(206,162,47,.2)" : "none",
    outline: "none", transition: "all var(--dur-fast) var(--ease-out)",
  };
  return (
    <div>
      <label style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "var(--navy)", marginBottom: 6 }}>
        {label}{required && <span style={{ color: "var(--gold)" }}> ·</span>}
      </label>
      {multiline
        ? <textarea rows={4} placeholder={placeholder} value={value}
            onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            style={{ ...sharedStyle, resize: "vertical" }} />
        : <input type={type} placeholder={placeholder} value={value}
            onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            style={sharedStyle} />}
      {hint && <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-muted)", margin: "5px 0 0" }}>{hint}</p>}
    </div>
  );
}

function Reveal({ children, delay = 0, as = "div", style }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : "translateY(14px)",
      transition: `opacity var(--dur-slow) var(--ease-out) ${delay}ms, transform var(--dur-slow) var(--ease-out) ${delay}ms`,
      ...style,
    }}>{children}</Tag>
  );
}

function Photo({ label = "Photography", ratio = "4 / 3", src, alt, style }) {
  return (
    <div style={{
      aspectRatio: ratio, width: "100%", borderRadius: "var(--radius-md)",
      background: "linear-gradient(160deg,#163C56,#0C4160)", position: "relative",
      overflow: "hidden", boxShadow: "var(--shadow-md)", display: "flex",
      alignItems: "center", justifyContent: "center", ...style,
    }}>
      {src ? (
        <img src={src} alt={alt || label}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <React.Fragment>
          <img src="assets/icon-compass-white.png" alt=""
            style={{ position: "absolute", width: "62%", opacity: 0.06, right: "-12%", bottom: "-14%" }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>{label}</span>
        </React.Fragment>
      )}
    </div>
  );
}

Object.assign(window, { Icon, Logo, Eyebrow, Tag, Button, Divider, Field, Reveal, Photo });
