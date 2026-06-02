/* global React, Logo, Button, Icon */
const { useState: useStateH, useEffect: useEffectH } = React;

function Header({ onContact }) {
  const [scrolled, setScrolled] = useStateH(false);
  const [menuOpen, setMenuOpen] = useStateH(false);
  useEffectH(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Our Approach", "The Process", "Engagements", "About Katie"];
  const linkStyle = (onDark) => ({
    fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 500,
    color: onDark ? "var(--on-navy-soft)" : "var(--ink-soft)",
    textDecoration: "none", letterSpacing: "0.01em", cursor: "pointer",
    transition: "color var(--dur) var(--ease-out)",
  });

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all var(--dur) var(--ease-out)",
      background: scrolled ? "rgba(8,47,71,0.92)" : "transparent",
      backdropFilter: scrolled ? "saturate(140%) blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 78,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Logo variant="white" height={32} />
        <nav className="cm-desktop-nav" style={{ display: "flex", alignItems: "center", gap: 34 }}>
          {links.map((l) => (
            <a key={l} style={linkStyle(true)}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "var(--on-navy-soft)")}>{l}</a>
          ))}
          <Button variant="onNavy" size="sm" onClick={onContact}>Start a conversation</Button>
        </nav>
        <button className="cm-menu-btn" onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: 0, color: "#fff", cursor: "pointer", padding: 6 }}>
          <Icon name={menuOpen ? "x" : "menu"} size={26} />
        </button>
      </div>

      {menuOpen && (
        <div className="cm-mobile-menu" style={{
          background: "var(--navy-deep)", padding: "8px 32px 26px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}>
          {links.map((l) => (
            <a key={l} style={{ ...linkStyle(true), display: "block", padding: "13px 0", fontSize: 19, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>{l}</a>
          ))}
          <div style={{ marginTop: 18 }}>
            <Button variant="onNavy" onClick={() => { setMenuOpen(false); onContact(); }}>Start a conversation</Button>
          </div>
        </div>
      )}
    </header>
  );
}

window.Header = Header;
