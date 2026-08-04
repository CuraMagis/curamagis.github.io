/* global React, Logo, Divider */
function FooterKatie({ onContact }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: "smooth" });
  };
  const explore = [
    ["Why CuraMagis", () => scrollTo("curamagis")],
    ["About Katie", () => scrollTo("background")],
    ["Our Approach", () => scrollTo("approach")],
    ["From Families", () => scrollTo("families")],
    ["Our Programs", () => scrollTo("process")],
    ["Next Steps", () => scrollTo("engagements")],
  ];
  const cols = [
    ["Explore", explore, 2],
    ["Connect", [
      ["Start a conversation", () => onContact && onContact()],
      ["hello@curamagis.com", "mailto:hello@curamagis.com"],
    ]],
  ];
  return (
    <footer style={{ background: "var(--navy-deep)", padding: "72px 0 36px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 2fr 1fr", gap: 40 }} className="cm-foot-grid">
          <div>
            <Logo variant="white" height={30} />
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 20, lineHeight: 1.4, color: "var(--gold-mid)", margin: "20px 0 0", maxWidth: 300 }}>
              Every student has a story worth telling. Our job is to help them find it.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-navy-muted)", margin: "14px 0 0" }}>Katie Burns, Founder</p>
          </div>
          {cols.map(([h, items, sub]) => (
            <div key={h}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold-mid)", margin: "0 0 16px" }}>{h}</p>
              <div style={sub ? { display: "grid", gridAutoFlow: "column", gridTemplateRows: "repeat(3, auto)", gridTemplateColumns: "1fr 1fr", gap: "0 40px" } : undefined}>
              {items.map(([label, action]) => {
                const isMail = typeof action === "string";
                return (
                  <a key={label} href={isMail ? action : "#"}
                    onClick={isMail ? undefined : (e) => { e.preventDefault(); action(); }}
                    style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 16, color: "var(--on-navy-soft)", textDecoration: "none", padding: "5px 0", cursor: "pointer" }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--white)")}
                    onMouseLeave={(e) => (e.target.style.color = "var(--on-navy-soft)")}>{label}</a>
                );
              })}
              </div>
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
window.FooterKatie = FooterKatie;
