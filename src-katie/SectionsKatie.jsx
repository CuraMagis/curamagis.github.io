/* global React, Eyebrow, Button, Reveal, Photo, Icon */
function KatieShell({ children, bg = "paper", pad = 104, id, style }) {
  const bgs = { paper: "var(--paper)", white: "var(--white)", paper2: "var(--paper-2)", navy: "var(--grad-navy)" };
  return (
    <section id={id} style={{ background: bgs[bg], padding: `${pad}px 0`, ...style }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>{children}</div>
    </section>);
}

// ---- Katie's bio, credentials, specializations ----
function KatieBio() {
  return (
    <KatieShell bg="white" id="background" style={{ paddingBottom: 68 }}>
      <div style={{ display: "grid", gridTemplateColumns: "0.72fr 1.28fr", gap: 64, alignItems: "start" }} className="cm-grid-2-lg">
        <Reveal>
          <Eyebrow>Background</Eyebrow>
          <dl style={{ margin: "24px 0 0", paddingTop: 24, borderTop: "1px solid var(--gold)", display: "flex", flexDirection: "column", gap: 16 }}>
            <h4 style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent-ink)", margin: 0 }}>Experience</h4>
            {[
              ["MIT", "Senior Assistant Director of Admission, Senior member of selection committee"],
              ["IvyWise", "Premier-level counselor"],
              ["Boston-area independent school", "Director of College and School Counseling"],
              ["Boston College", "Admissions Officer and Outside Reader"],
            ].map(([t, d]) => (
              <div key={t}>
                <dt style={{ fontFamily: "var(--font-body)", fontSize: 15.5, fontWeight: 600, color: "var(--navy)", marginBottom: 2 }}>{t}</dt>
                <dd style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.5, color: "var(--ink-soft)" }}>{d}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={120}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: "64ch" }}>
            <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,2.4vw,2rem)", fontWeight: 600, lineHeight: 1.3, color: "var(--navy)" }}>
              Katie has spent her career on both sides of college admissions, and that double vantage point shapes everything about how she works.
            </p>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 17.5, lineHeight: 1.65, color: "var(--ink-soft)" }}>
              A Boston College graduate with degrees in Human Development and Psychology, Katie went on to earn a Master's in Higher Education Administration before beginning her career in the BC Admissions Office. She then spent six years in the MIT Admissions Office as a senior member of the selection committee, reading applications from students across the globe. Between MIT and Boston College, she has evaluated more than twenty-six thousand applications. Few counselors have seen the inside of a highly selective admissions process at that depth and scale.
            </p>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 17.5, lineHeight: 1.65, color: "var(--ink-soft)" }}>
              After MIT, Katie served as Director of College and School Counseling at a Boston-area independent school before joining IvyWise as a Premier-level counselor, the top designation at the firm. She has worked one-on-one with students and families through every phase of the college process and has led training and professional development for counselors newer to the work.
            </p>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 17.5, lineHeight: 1.65, color: "var(--ink-soft)" }}>
              What she brings to each student is a precise sense of what actually moves a file forward in committee, built over years inside admissions offices and nearly a decade of guiding students and families through the process firsthand. That experience means she can read an application the way a committee does: she knows what feels authentic, and she knows what doesn't. The other half of the work is translating that knowledge into something a high school student can actually use; that, too, is something she has spent years developing.
            </p>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 17.5, lineHeight: 1.65, color: "var(--ink-soft)" }}>
              Katie's goal is to help each student grow into the best version of themselves and find the schools that are right for them, finding their voice on the page and coming out of the process as more than an applicant. She adapts to each family and commits fully to each student, serving as a trusted guide through every turn the process takes, steady, present, and in it together until the very end.
            </p>
          </div>
        </Reveal>
      </div>
      <Reveal delay={80} style={{ marginTop: 72 }}>
        <h4 style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent-ink)", margin: "0 0 20px" }}>Specializations</h4>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: 12 }}>
          {["STEM", "Makers & innovators", "Pre-med, health sciences & BS/MD", "Business & entrepreneurship", "Musicians, artists & performers", "Athletic recruitment", "Neurodivergent learners", "International & third culture kids", "Undecided", "Highly selective admissions", "Early guidance (8th\u201310th grade)"].map((sp) => (
            <li key={sp} style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--navy)", background: "var(--white)", border: "1px solid var(--line)", borderTop: "2px solid var(--gold)", borderRadius: "var(--radius-sm)", padding: "10px 18px", boxShadow: "var(--shadow-sm)" }}>{sp}</li>
          ))}
        </ul>
      </Reveal>
    </KatieShell>);
}

// ---- Brand line, attributed ----
function KatieQuote() {
  return (
    <KatieShell bg="navy" pad={96}>
      <Reveal style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
        <div style={{ color: "var(--gold-mid)", marginBottom: 22 }}><Icon name="quote" size={40} /></div>
        <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 500, fontSize: "clamp(1.9rem,3.4vw,2.8rem)", lineHeight: 1.32, color: "var(--white)", margin: 0, textWrap: "pretty" }}>
          Every student has a story worth telling —<br />our job is to help them find it.
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-mid)", margin: "28px 0 0" }}>Katie Burns</p>
      </Reveal>
    </KatieShell>);
}

// ---- Why CuraMagis (bridge into the brand) ----
function WhyCuraMagis() {
  return (
    <KatieShell bg="paper2" pad={96} id="curamagis">
      <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 64, alignItems: "start" }} className="cm-grid-2-lg">
        <Reveal>
          <Eyebrow>Why CuraMagis</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.4vw,2.9rem)", fontWeight: 600, color: "var(--navy)", margin: "16px 0 0", lineHeight: 1.12 }}>
            <em>Cura</em> is care. <em>Magis</em> is more.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: "62ch" }}>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.65, color: "var(--navy)" }}>
              After years inside admissions offices and at a large firm, Katie built CuraMagis to work the way she believes this work should be done: a small number of families at a time, a flat rate set before we begin, and no meter running on your family's questions.
            </p>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 17.5, lineHeight: 1.65, color: "var(--ink-soft)" }}>
              The name says what we hold to. Great guidance means caring more deeply and reaching for more &mdash; not just caring about where a student lands, but caring more about who they become on the journey there.
            </p>
            <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 21, fontStyle: "italic", lineHeight: 1.45, color: "var(--accent-ink)", paddingTop: 20, borderTop: "1px solid var(--gold)" }}>
              We don't chase rankings. We chase fit.
            </p>
          </div>
        </Reveal>
      </div>
    </KatieShell>);
}

// ---- How Katie works: 3 pillars ----
function ApproachKatie() {
  const pillars = [
    ["Know the student", "Everything starts with knowing the student — what's stressing them out and what genuinely excites them. When we follow what they care about, the right story unfolds."],
    ["Who they become", "What matters most to us is who a student becomes over these years, the self-knowledge and confidence they build. That growth is the real work, and it outlasts any decision letter."],
    ["Find your fit", "Many families come overwhelmed by the noise, convinced there's one right path. There isn't. We quiet that noise, guiding you through the process and toward the schools that genuinely fit your student."]];
  return (
    <KatieShell bg="paper" id="approach">
      <Reveal>
        <div style={{ maxWidth: 760 }}>
          <Eyebrow>How we work</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.4vw,2.9rem)", fontWeight: 600, color: "var(--navy)", margin: "16px 0 0", lineHeight: 1.12 }}>
            Three things we hold to with every student.
          </h2>
        </div>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28, marginTop: 48 }} className="cm-grid-pillars">
        {pillars.map(([t, d], i) =>
        <Reveal key={t} delay={i * 90}>
            <div style={{ background: "var(--white)", border: "1px solid var(--line)", borderTop: "3px solid var(--gold)", borderRadius: "var(--radius-md)", padding: "32px 30px", boxShadow: "var(--shadow-sm)", height: "100%", boxSizing: "border-box" }}>
              <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 22, color: "var(--accent-ink)", marginBottom: 8 }}>0{i + 1}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 600, color: "var(--navy)", margin: "0 0 10px" }}>{t}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0 }}>{d}</p>
            </div>
          </Reveal>
        )}
      </div>
    </KatieShell>);
}

// ---- Closing CTA ----
function CTABandKatie({ onContact }) {
  return (
    <section style={{ background: "var(--paper)", padding: "104px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <Reveal>
          <div style={{ background: "var(--grad-navy)", borderRadius: "var(--radius-lg)", padding: "72px 56px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div className="cm-watermark cm-watermark-cta" aria-hidden="true"></div>
            <div style={{ position: "relative" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.6vw,3rem)", fontWeight: 500, color: "var(--white)", margin: "0 0 16px", lineHeight: 1.12 }}>
                Let's find the right path, together.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55, color: "var(--on-navy-soft)", maxWidth: 560, margin: "0 auto 32px" }}>
                Tell us about your student, and we will take it from there.
              </p>
              <Button variant="onNavy" size="lg" onClick={onContact} icon="arrowRight">Start a conversation</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);
}

Object.assign(window, { KatieBio, KatieQuote, WhyCuraMagis, ApproachKatie, CTABandKatie });
