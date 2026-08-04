/* global React, Logo, Button, Icon */
function HeaderKatie({ onContact }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Why CuraMagis", "curamagis"],
    ["About Katie", "background"],
    ["Our Approach", "approach"],
    ["From Families", "families"],
    ["Our Programs", "process"],
    ["Next Steps", "engagements"],
  ];
  const goTo = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: "smooth" });
  };
  const linkStyle = { fontFamily: "var(--font-body)", fontSize: 15.5, fontWeight: 500, color: "var(--on-navy-soft)", textDecoration: "none", letterSpacing: "0.01em", cursor: "pointer", whiteSpace: "nowrap", transition: "color var(--dur) var(--ease-out)" };
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, transition: "all var(--dur) var(--ease-out)", background: scrolled ? "rgba(8,47,71,0.92)" : "transparent", backdropFilter: scrolled ? "saturate(140%) blur(10px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 78, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ opacity: scrolled ? 1 : 0, pointerEvents: scrolled ? "auto" : "none", transition: "opacity var(--dur) var(--ease-out)" }}>
          <Logo variant="white" height={40} />
        </div>
        <nav className="cm-desktop-nav" style={{ display: "flex", alignItems: "center", gap: 17 }}>
          {links.map(([l, id]) => (
            <a key={l} href={"#" + id} onClick={goTo(id)} style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--on-navy-soft)")}>{l}</a>
          ))}
          <Button variant="onNavy" size="sm" onClick={onContact}>Start a conversation</Button>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span className="cm-cta-compact" style={{ display: "none" }}>
            <Button variant="onNavy" size="sm" onClick={onContact}>Start a conversation</Button>
          </span>
          <button className="cm-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
            style={{ display: "none", background: "none", border: 0, color: "var(--white)", cursor: "pointer", padding: 6 }}>
            <Icon name={menuOpen ? "x" : "menu"} size={26} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div style={{ background: "var(--navy-deep)", padding: "8px 32px 26px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {links.map(([l, id]) => (
            <a key={l} href={"#" + id} onClick={goTo(id)} style={{ ...linkStyle, display: "block", padding: "13px 0", fontSize: 19, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>{l}</a>
          ))}
          <div style={{ marginTop: 18 }}>
            <Button variant="onNavy" onClick={() => { setMenuOpen(false); onContact(); }}>Start a conversation</Button>
          </div>
        </div>
      )}
    </header>
  );
}
window.HeaderKatie = HeaderKatie;
