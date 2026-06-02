/* global React, Eyebrow, Tag, Button, Divider, Reveal, Photo, Icon */
function SectionShell({ children, bg = "paper", pad = 104, id }) {
  const bgs = {
    paper: "var(--paper)", white: "var(--white)", paper2: "var(--paper-2)",
    navy: "var(--grad-navy)",
  };
  return (
    <section id={id} style={{ background: bgs[bg], padding: `${pad}px 0` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>{children}</div>
    </section>
  );
}

function Approach() {
  const pillars = [
    ["Care", "We work alongside families, not above them. Every engagement begins by listening — to the student first, the résumé second."],
    ["Precision", "Careful, specific guidance. No jargon, no hype. We help students tell their own story with clarity and calm."],
    ["Fit", "We don't chase rankings. We chase fit — the schools where your student will genuinely thrive and grow."],
  ];
  return (
    <SectionShell bg="paper">
      <Reveal>
        <div style={{ maxWidth: 720 }}>
          <Eyebrow>Our Approach</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.4vw,2.9rem)", fontWeight: 600, color: "var(--navy)", margin: "16px 0 0", lineHeight: 1.12 }}>
            Great guidance means caring more deeply and reaching higher.
          </h2>
        </div>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28, marginTop: 56 }} className="cm-grid-3">
        {pillars.map(([t, d], i) => (
          <Reveal key={t} delay={i * 90}>
            <div style={{ background: "var(--white)", border: "1px solid var(--line)", borderTop: "3px solid var(--gold)", borderRadius: "var(--radius-md)", padding: "32px 30px", boxShadow: "var(--shadow-sm)", height: "100%", boxSizing: "border-box" }}>
              <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 22, color: "var(--accent-ink)", marginBottom: 8 }}>0{i + 1}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 600, color: "var(--navy)", margin: "0 0 10px" }}>{t}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0 }}>{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function Process() {
  const steps = [
    ["Introduction", "A relaxed conversation to understand your student, your family, and what thriving looks like for you."],
    ["Discovery", "We map strengths, interests, and aspirations — building a college list grounded in genuine fit."],
    ["Storytelling", "We help your student find and shape their own narrative, essay by essay, with precision and care."],
    ["Submission", "Calm, organized support through applications and deadlines — no manufactured urgency."],
  ];
  return (
    <SectionShell bg="white">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="cm-grid-2">
        <Reveal>
          <Eyebrow>The Process</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.4vw,2.9rem)", fontWeight: 600, color: "var(--navy)", margin: "16px 0 30px", lineHeight: 1.12 }}>
            A clear path, walked together.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {steps.map(([t, d], i) => (
              <div key={t} style={{ display: "flex", gap: 20 }}>
                <div style={{ flex: "none", width: 42, height: 42, borderRadius: "50%", border: "1px solid var(--gold)", color: "var(--accent-ink)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600 }}>{i + 1}</div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "var(--navy)", margin: "6px 0 4px" }}>{t}</h4>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.55, color: "var(--ink-soft)", margin: 0 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Photo label="Student & counselor" ratio="4 / 5" />
        </Reveal>
      </div>
    </SectionShell>
  );
}

function QuoteBand() {
  return (
    <SectionShell bg="navy" pad={96}>
      <Reveal style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
        <div style={{ color: "var(--gold-mid)", marginBottom: 22 }}><Icon name="quote" size={40} /></div>
        <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 500, fontSize: "clamp(1.9rem,3.4vw,2.8rem)", lineHeight: 1.32, color: "#fff", margin: 0, textWrap: "balance" }}>
          Every student has a story worth telling — our job is to help them find it.
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--on-navy-muted)", marginTop: 28 }}>
          Katie Burns · Founder
        </p>
      </Reveal>
    </SectionShell>
  );
}

function Engagement({ onContact }) {
  const plans = [
    { name: "Single Application", price: "Flat rate", featured: false, desc: "For a focused, late-stage partnership.", points: ["One school, end to end", "Essay & narrative support", "Application review"] },
    { name: "Comprehensive", price: "Flat rate", featured: true, desc: "Our signature, full-journey engagement.", points: ["College list & strategy", "Unlimited essay guidance", "All applications & deadlines", "Interview preparation"] },
    { name: "Counselor Partner", price: "By referral", featured: false, desc: "Collegial support for school counselors.", points: ["Case consultation", "Essay second-reads", "Shared with your team"] },
  ];
  return (
    <SectionShell bg="paper2">
      <Reveal style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 14px" }}>
        <Eyebrow>Engagements</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.4vw,2.9rem)", fontWeight: 600, color: "var(--navy)", margin: "16px 0 12px", lineHeight: 1.12 }}>
          Flat-rate, with no hourly surprises.
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0 }}>
          Every family is different. We keep pricing transparent and the relationship personal — engagements are limited each year so each student has our full attention.
        </p>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 52, alignItems: "stretch" }} className="cm-grid-3">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 90} style={{ height: "100%" }}>
            <div style={{
              background: p.featured ? "var(--grad-navy)" : "var(--white)",
              border: p.featured ? "none" : "1px solid var(--line)",
              borderTop: p.featured ? "none" : "3px solid var(--gold)",
              borderRadius: "var(--radius-lg)", padding: "34px 30px",
              boxShadow: p.featured ? "var(--shadow-lg)" : "var(--shadow-sm)",
              height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column",
            }}>
              {p.featured && <div style={{ marginBottom: 14 }}><Tag tone="navy">Most chosen</Tag></div>}
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 27, fontWeight: 600, color: p.featured ? "#fff" : "var(--navy)", margin: "0 0 4px" }}>{p.name}</h3>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: p.featured ? "var(--gold-mid)" : "var(--accent-ink)", marginBottom: 14 }}>{p.price}</div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.55, color: p.featured ? "var(--on-navy-soft)" : "var(--ink-soft)", margin: "0 0 20px" }}>{p.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 26 }}>
                {p.points.map((pt) => (
                  <div key={pt} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: p.featured ? "var(--gold-mid)" : "var(--gold)", marginTop: 1, flex: "none" }}><Icon name="check" size={18} /></span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 16, color: p.featured ? "#dbe6ee" : "var(--ink-soft)" }}>{pt}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "auto" }}>
                <Button variant={p.featured ? "onNavy" : "ghost"} onClick={onContact}>Request an introduction</Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function Founder({ onContact }) {
  return (
    <SectionShell bg="white">
      <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 64, alignItems: "center" }} className="cm-grid-2">
        <Reveal><Photo label="Katie Burns" ratio="1 / 1" src="assets/katie-headshot.png" alt="Katie Burns, Founder of CuraMagis" /></Reveal>
        <Reveal delay={120}>
          <Eyebrow>About Katie</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.2vw,2.7rem)", fontWeight: 600, color: "var(--navy)", margin: "16px 0 22px", lineHeight: 1.14 }}>
            A counselor who has read the applications.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.62, color: "var(--ink-soft)", margin: "0 0 18px" }}>
            CuraMagis was founded by Katie Burns — a former MIT admissions officer and IvyWise
            counselor. She has sat on both sides of the table, and she brings that perspective
            to every family she works with.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.62, color: "var(--ink-soft)", margin: "0 0 30px" }}>
            Her style is collaborative and exploratory: partnering with students, never
            prescribing to them. The work is personal, and the engagements are few by design.
          </p>
          <Button variant="ghost" onClick={onContact} icon="arrowRight">Start a conversation</Button>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function CTABand({ onContact }) {
  return (
    <section style={{ background: "var(--paper)", padding: "0 0 104px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <Reveal>
          <div style={{ background: "var(--grad-navy)", borderRadius: "var(--radius-lg)", padding: "72px 56px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <img src="assets/icon-compass-white.png" alt="" style={{ position: "absolute", width: 460, opacity: 0.05, left: "-120px", bottom: "-160px" }} />
            <div style={{ position: "relative" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.6vw,3rem)", fontWeight: 500, color: "#fff", margin: "0 0 16px", lineHeight: 1.12 }}>
                Let's find the right path — together.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55, color: "var(--on-navy-soft)", maxWidth: 560, margin: "0 auto 32px" }}>
                We read every note personally. Tell us a little about your student, and Katie will reply within two business days.
              </p>
              <Button variant="onNavy" size="lg" onClick={onContact} icon="arrowRight">Start a conversation</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Approach, Process, QuoteBand, Engagement, Founder, CTABand });
