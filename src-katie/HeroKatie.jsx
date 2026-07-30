/* global React, Button, Logo, Photo */
function HeroKatie({ onContact }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const rail = [["26,000+", "applications\u00A0read"], ["Former MIT", "Admissions\u00A0Officer"], ["Former IvyWise", "Premier\u00A0Counselor"], ["18 years", "guiding\u00A0students"]];
  return (
    <section id="katie" style={{ position: "relative", background: "var(--grad-navy)", overflow: "hidden", paddingTop: 116, paddingBottom: 104 }}>
      <div className="cm-watermark cm-watermark-hero" aria-hidden="true"></div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <div className="cm-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.22fr 0.78fr", gap: 72, alignItems: "center" }}>
          <div className="cm-hero-text" style={{ minWidth: 0 }}>
            <div className="cm-hero-lede">
              <div style={{ opacity: scrolled ? 0 : 1, transform: scrolled ? "translateY(-10px)" : "none", transition: "opacity var(--dur) var(--ease-out), transform var(--dur) var(--ease-out)", marginBottom: 22 }}>
              <Logo variant="white" height="min(52px, 12vw)" />
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--white)", fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1.04, letterSpacing: "-0.01em", margin: 0 }}>
              Meet Katie
            </h1>
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 500, color: "var(--gold-mid)", fontSize: "clamp(1.75rem, 3.2vw, 2.9rem)", lineHeight: 1.2, margin: "20px 0 0", maxWidth: "21ch" }}>
              She&rsquo;s reviewed more than 26,000 applications.<br />Now she&rsquo;s on your team.
            </p>
            </div>
            <div className="cm-hero-body">
            <p style={{ fontFamily: "var(--font-body)", fontSize: 21, lineHeight: 1.55, color: "var(--on-navy-soft)", margin: "30px 0 0", maxWidth: 640 }}>
              Katie Burns has spent eighteen years on every side of this process: reading and evaluating more than twenty-six thousand applications at MIT and Boston College, six of them as a senior member of the MIT selection committee; guiding students as Director of College and School Counseling at an independent school; and, for the last eight years, working one-on-one with families, most recently as a Premier counselor at IvyWise. She knows what makes an application work. She also knows the application is the last part of the story &mdash; the real work is who a student becomes along the way, and helping them tell it.
            </p>
            <div className="cm-hero-cta" style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
              <Button variant="onNavy" size="lg" onClick={onContact} icon="arrowRight">Start a conversation</Button>
            </div>
            <div className="cm-hero-rail" style={{ display: "flex", gap: "clamp(14px, 2vw, 22px)", flexWrap: "nowrap", marginTop: 44 }}>
              {rail.map(([a, b]) => (
                <div key={a} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "clamp(10px, 1vw, 14px)" }}>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "clamp(14px, 1.3vw, 16px)", fontWeight: 700, color: "var(--white)", lineHeight: 1.4 }}>{a}<br />{b}</div>
                </div>
              ))}
            </div>
            </div>
          </div>
          <div className="cm-hero-photo">
            <Photo label="Katie Burns" ratio="4 / 5" pos="center" src="assets/katie-headshot-crop.png" alt="Katie Burns, Founder of CuraMagis" />
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-mid)", lineHeight: 1.5, margin: "18px 0 0" }}>
              Katie Burns<br /><span style={{ fontWeight: 500, color: "var(--on-navy-soft)" }}>Founder &amp; Lead Counselor</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
window.HeroKatie = HeroKatie;
