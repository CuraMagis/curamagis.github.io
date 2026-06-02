/* global React, Eyebrow, Button */
function Hero({ onContact }) {
  return (
    <section style={{
      position: "relative", background: "var(--grad-navy)", overflow: "hidden",
      paddingTop: 178, paddingBottom: 120,
    }}>
      <img src="assets/icon-compass-white.png" alt=""
        style={{ position: "absolute", width: 720, opacity: 0.05, top: "-120px", right: "-160px", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <div style={{ maxWidth: 880 }}>
          <Eyebrow onNavy>Boutique college admissions counseling</Eyebrow>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 500, color: "#fff",
            fontSize: "clamp(3rem, 6.5vw, 5.5rem)", lineHeight: 1.04,
            letterSpacing: "-0.01em", margin: "22px 0 0", textWrap: "balance",
          }}>
            College admissions is a process,<br />
            <span style={{ color: "var(--gold-mid)", fontStyle: "italic", fontWeight: 500 }}>not a verdict.</span>
          </h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 21, lineHeight: 1.55,
            color: "var(--on-navy-soft)", margin: "30px 0 0", maxWidth: 620,
          }}>
            We partner with students and families to find the schools where they will
            genuinely thrive — with personalized, high-touch guidance and the calm of a
            trusted advisor who has sat on the other side of the table.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap" }}>
            <Button variant="onNavy" size="lg" onClick={onContact} icon="arrowRight">Start a conversation</Button>
            <Button variant="linkNavy" size="lg">Explore our approach</Button>
          </div>
          <div style={{ display: "flex", gap: 38, marginTop: 56, flexWrap: "wrap" }}>
            {[["Former", "MIT admissions officer"], ["Flat-rate", "no hourly surprises"], ["By referral", "from counselors & families"]].map(([a, b]) => (
              <div key={a} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: 16 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "#fff", fontWeight: 600, lineHeight: 1.1 }}>{a}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-navy-muted)", marginTop: 2 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
