/* global React, Logo, Divider */
function Footer() {
  const cols = [
    ["Engagements", ["Single Application", "Comprehensive", "Counselor Partner"]],
    ["Firm", ["Our Approach", "The Process", "About Katie"]],
    ["Connect", ["Start a conversation", "For counselors", "Email us"]],
  ];
  return (
    <footer style={{ background: "var(--navy-deep)", padding: "72px 0 36px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40 }} className="cm-foot-grid">
          <div>
            <Logo variant="white" height={30} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--on-navy-soft)", margin: "20px 0 0", maxWidth: 280 }}>
              Boutique college admissions counseling. Caring more, reaching higher.
            </p>
          </div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold-mid)", margin: "0 0 16px" }}>{h}</p>
              {items.map((it) => (
                <a key={it} style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 16, color: "var(--on-navy-soft)", textDecoration: "none", padding: "5px 0", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--on-navy-soft)")}>{it}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ margin: "44px 0 24px" }}><Divider onNavy ornament /></div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-navy-muted)", margin: 0 }}>© 2026 CuraMagis. All rights reserved.</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-navy-muted)", margin: 0 }}>Cura · care &nbsp;·&nbsp; Magis · more</p>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
