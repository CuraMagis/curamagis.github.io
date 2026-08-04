/* global React, Eyebrow, Tag, Button, Divider, Reveal, Icon */
function SectionShell({ children, bg = "paper", pad = 104, id, style }) {
  const bgs = {
    paper: "var(--paper)", white: "var(--white)", paper2: "var(--paper-2)",
    navy: "var(--grad-navy)"
  };
  return (
    <section id={id} style={{ background: bgs[bg], padding: `${pad}px 0`, ...style }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>{children}</div>
    </section>);

}

// ---- Process: four chapters (accordion) ----
function ProcessMap({ open, setOpen, steps }) {
  const tracks = [
  ["Academic Planning", 1, 4], ["Involvement & Experiences", 1, 4], ["Testing", 2, 4],
  ["College Exploration", 2, 4], ["Narrative", 3, 4], ["Applications & Decisions", 4, 4]];

  const cols = "minmax(150px,0.9fr) repeat(4, minmax(120px,1fr))";
  return (
    <div className="cm-map-scroll" style={{ marginBottom: 56 }}>
      <div style={{ minWidth: 700 }}>
        <div style={{ display: "grid", gridTemplateColumns: cols, gap: 10, alignItems: "end" }}>
          <div />
          {steps.map(([t, grade], i) => {
            const on = open === i;
            return (
              <button key={t} onClick={() => setOpen(on ? -1 : i)} style={{ appearance: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit", background: on ? "var(--navy)" : "var(--paper)", border: "1px solid " + (on ? "var(--navy)" : "var(--line)"), borderTop: "3px solid var(--gold)", borderRadius: "var(--radius-sm)", padding: "14px 16px 16px", transition: "background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)" }}>
                <span style={{ display: "block", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 15, color: on ? "var(--gold-mid)" : "var(--accent-ink)", marginBottom: 2 }}>0{i + 1}</span>
                <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, lineHeight: 1.1, color: on ? "var(--white)" : "var(--navy)" }}>{t}</span>
                <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 11.5, letterSpacing: "0.14em", textTransform: "uppercase", color: on ? "var(--gold-mid)" : "var(--accent-ink)", marginTop: 6 }}>{grade}</span>
              </button>);

          })}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: cols, gap: 10, alignItems: "center", margin: "18px 0 14px" }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-ink)" }}>The work</div>
          {[0, 1, 2, 3].map((i) =>
          <div key={i} style={{ position: "relative", height: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ position: "absolute", left: i === 0 ? "50%" : "-5px", right: i === 3 ? "50%" : "-5px", height: 2, background: "var(--gold)", opacity: 0.5 }} />
              <span style={{ position: "relative", width: 10, height: 10, borderRadius: "50%", background: "var(--gold)" }} />
            </div>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {tracks.map(([label, start, end]) =>
          <div key={label} style={{ display: "grid", gridTemplateColumns: cols, gap: 10, alignItems: "center" }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.35, color: "var(--navy)", paddingRight: 8 }}>{label}</div>
              {[1, 2, 3, 4].map((c) => {
              const active = c >= start && c <= end;
              return (
                <div key={c} style={{ height: 30, borderRadius: 15, background: active ? open === c - 1 ? "var(--gold)" : "color-mix(in srgb, var(--gold) 34%, var(--white))" : "var(--paper-2)", border: active ? "none" : "1px dashed var(--line)", boxSizing: "border-box", transition: "background var(--dur) var(--ease-out)" }} />);

            })}
            </div>
          )}
        </div>
      </div>
    </div>);

}

function Process() {
  const [open, setOpen] = React.useState(0);
  const steps = [
  ["Explore", "9th grade", "The beginning of the story. With four years ahead, the work this year is paying attention to who a student is, what a student enjoys, and where a student surprises themselves. There is no application to prepare yet. This is the year to build the habits, the academic footing, and begin developing the self-knowledge that everything else rests on.", [
  ["Academic Planning", "A four-year course plan built around where a student hopes to end up, so each choice makes sense in sequence rather than being decided one year at a time. Alongside that, we support building the practical skills that carry a student successfully through high school: how to study, how to keep track of long-term work, how to manage a week, and how to ask for help before something becomes a problem."],
  ["Involvement & Experiences", "Exploration, but with purpose. We map out the year's involvement alongside the coursework, so activities, school, and summer are building toward the same direction. Real exposure to the subjects and interests that pull at a student, at school and beyond it, is how they begin to discover what they actually like and what they don't."],
  ["Big Picture", "Conversations and early guidance to take stress out of the process. We talk about how high school actually works and what colleges look at, what is worth paying attention to now and what can wait. We're developing an early sense of the academic interests and possible fields a student might grow toward, so the next four years have a direction rather than a destination."]]],

  ["Discover", "10th grade", "Sophomore year is about taking stock. A year in, we know more about how a student learns, what a student likes, and who a student is becoming. Now we start building on that.", [
  ["Academic Planning", "We look at how freshman year turned out, where a student is thriving now and where they are stretched too thin, and use that to plan junior and senior year coursework that is ambitious but realistic."],
  ["Involvement & Experiences", "Not narrowing yet, but noticing. Which activities a student keeps showing up for, and which ones they have outgrown? This is also when we start talking about impact: moving from taking part in something to actually contributing to it, and thinking about what a student wants to leave better than they found it. Summer gets real attention here. We find the programs, jobs, and projects worth pursuing, work through the applications, and decide together which ones are actually the best use of the months off."],
  ["Testing", "This is the year we start digging into testing. A practice SAT and a practice ACT tell us which test suits a student better, and from there we build a testing timeline that fits the student's schedule rather than one built around a generic calendar."],
  ["Big Picture", "A good time to start seeing colleges. No agenda, no pressure, just getting a feel for different kinds of campuses. A first working list begins here and keeps changing as the student does."]]],

  ["Deepen", "11th grade", "Junior year is the hardest year of high school and one of the most important. This is where the academic record, the activities, and the sense of where a student is headed all start to come together.", [
  ["Academic Planning", "Junior year coursework carries the most weight of any year.", ["A schedule that is rigorous where it counts and realistic everywhere else", "Regular check-ins on grades before a semester gets away from the student", "Senior year course selection, chosen with applications in mind"]],
  ["Involvement & Experiences", "Fewer things, done more seriously.", ["Deciding what to commit to and what to let go of", "Leadership roles and taking on real responsibility", "The summer after junior year, built deliberately: finding the right programs or projects, getting the applications in, and choosing among them"]],
  ["Testing", "The goal is scores in hand by the end of junior year, so senior fall can be about applications and nothing else.", ["A testing calendar built around the student's schedule and season", "A read on whether to retake, and when to stop"]],
  ["College Exploration", "Visits get more purposeful and the questions get more specific.", ["Researching schools together, beyond what the rankings say", "What to look for on a visit and what to ask while there", "A working list that is balanced and genuinely the student's own", "Early conversations about list strategy"]],
  ["Narrative", "Two years of conversation start to point somewhere.", ["Naming what a student is actually about, in the student's own words", "How a student's academics, activities, and interests read together as one story", "Where the gaps are, and what junior spring and summer can still add", "Which teachers know that story well enough to write it"]]]],

  ["Become", "12th grade", "By senior year a student has done the work. This year is about turning it into applications a student is proud of, and getting through the waiting and the decisions in one piece.", [
  ["Academics & Testing", "Colleges still see this year, and offers are conditional on finishing it well.", ["Steady support in keeping the record strong through both semesters", "A decision on which scores to send, school by school"]],
  ["Involvement & Experiences", "A chance for a student to finish what they started.", ["Senior leadership roles and final projects", "Any last additions worth making to the activities record"]],
  ["Narrative", "Writing begins in summer and is finished by fall.", ["Personal statement, from brainstorm through final draft", "Every supplemental essay, unlimited rounds of feedback", "A deliberate plan across every school's supplements, so each essay adds a different side of the student rather than repeating one", "Supplemental portfolios in arts, maker, or research, when a student's work deserves its own submission"]],
  ["College List & Applications", "Finalized the summer before senior year, then worked steadily so nothing comes down to the last night.", ["Final balanced college list, school by school", "Early decision and early action strategy", "Support with every platform from the Common App and/or Coalition to the University of California and MIT application portals. Support with international application systems as well including UCAS", "Support crafting the activities and honors sections, since limited space makes every line count, plus development of a résumé", "Recommendation Letter strategy", "Interview preparation, including any recorded video responses", "A working timeline with internal deadlines and checklists, so the real deadlines arrive without last minute stress"]],
  ["Through Decisions", "Support does not stop at submission.", ["Deferral and waitlist letters when they are needed", "A steady presence until the student has made their choice"]]]]];


  const terms = [
  ["One flat rate", "It covers a student's entire journey with us, however many years that is, and is set before any work begins."],
  ["Pricing shared when we meet", "The rate depends on when a student starts, so we quote once we know where your family is beginning."],
  ["No hourly billing", "No meter running, no per-essay charges, no surprises later. Families should never have to weigh whether a question is worth the cost."],
  ["Available when it matters", "Meetings run on a regular cadence, and a good deal of the work happens between them: drafts read and marked up, questions answered, decisions thought through as they come. We take on a small number of students each year so that we can be there when you need us."]];

  return (
    <SectionShell bg="white" id="process">
      <Reveal style={{ maxWidth: 680, marginBottom: 48 }}>
        <Eyebrow>Our Programs</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.4vw,2.9rem)", fontWeight: 600, color: "var(--navy)", margin: "16px 0 10px", lineHeight: 1.12 }}>
          Four chapters. One story.
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0 }}>
          CuraMagis offers four programs, each designed for a different stage of a student's high school journey. Every program is comprehensive, flat-fee, and built around the individual student.
        </p>
      </Reveal>
      <Reveal delay={60}>
        <ProcessMap open={open} setOpen={setOpen} steps={steps} />
      </Reveal>
      <Reveal delay={80}>
        <div style={{ borderTop: "1px solid var(--line)" }}>
          {steps.map(([t, grade, d, items], i) => {
            const isOpen = open === i;
            const stacked = items.length >= 3;
            return (
              <div key={t} style={{ borderBottom: "1px solid var(--line)" }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: "100%", background: "none", border: 0, padding: "26px 0", display: "flex", alignItems: "center", gap: 22, cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}>
                  <span style={{ flex: "none", width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--gold)", color: "var(--accent-ink)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600 }}>{i + 1}</span>
                  <span style={{ display: "flex", alignItems: "baseline", gap: 14, flex: 1, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 27, fontWeight: 600, color: "var(--navy)", lineHeight: 1.1 }}>{t}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-ink)" }}>{grade}</span>
                  </span>
                  <span style={{ flex: "none", color: "var(--accent-ink)", display: "flex", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform var(--dur) var(--ease-out)" }}>
                    <Icon name="chevronDown" size={22} />
                  </span>
                </button>
                <div style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows 420ms var(--ease-out), opacity var(--dur) var(--ease-out)", opacity: isOpen ? 1 : 0 }}>
                  <div style={{ overflow: "hidden" }}>
                  <div style={stacked ? { padding: "0 0 34px 62px" } : { display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 56, padding: "0 0 34px 62px" }} className={stacked ? "cm-acc-body" : "cm-grid-2-md cm-acc-body"}>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.62, color: "var(--ink-soft)", margin: stacked ? "0 0 26px" : 0, maxWidth: stacked ? "none" : "70ch", fontStyle: "italic" }}>{d}</p>
                    <dl style={stacked ? { margin: 0, columnCount: 2, columnGap: 56 } : { margin: 0, display: "flex", flexDirection: "column", gap: 18 }} className={stacked ? "cm-cols-2-md" : undefined}>
                      {items.map(([label, text, bullets], j) =>
                        <div key={label} style={stacked ? { breakInside: "avoid", marginBottom: j === items.length - 1 ? 0 : 20 } : undefined}>
                          <dt style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-ink)", marginBottom: 5 }}>{label}</dt>
                          <dd style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.55, color: "var(--ink-soft)" }}>{text}</dd>
                          {bullets &&
                          <ul style={{ listStyle: "none", margin: "9px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                              {bullets.map((b) =>
                            <li key={b} style={{ display: "grid", gridTemplateColumns: "10px 1fr", gap: 10, alignItems: "start", fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.5, color: "var(--ink-soft)" }}>
                                  <span style={{ color: "var(--gold)", fontSize: 8, lineHeight: 1, height: 23, display: "flex", alignItems: "center" }}>◆</span>
                                  <span>{b}</span>
                                </li>
                            )}
                            </ul>
                          }
                        </div>
                        )}
                    </dl>
                  </div>
                  </div>
                </div>
              </div>);

          })}
        </div>
      </Reveal>
      <Reveal delay={140}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,2.5vw,2.05rem)", fontWeight: 500, lineHeight: 1.42, color: "var(--navy)", margin: "52px auto 0", paddingTop: 36, borderTop: "1px solid var(--gold)", maxWidth: "46ch", textAlign: "center", textWrap: "pretty" }}>
          A family who begins in ninth grade moves through all four chapters with us, not one. A family who joins later steps in where they are, and we carry forward what the earlier years would have set in place. <em style={{ color: "var(--accent-ink)" }}>The earlier we start, the more we can do.</em>
        </p>
      </Reveal>
      <Reveal delay={180}>
        <div style={{ marginTop: 64, background: "var(--paper-2)", border: "1px solid var(--line)", borderTop: "3px solid var(--gold)", borderRadius: "var(--radius-lg)", padding: "40px 40px 44px", boxShadow: "var(--shadow-sm)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,2.4vw,2rem)", fontWeight: 600, color: "var(--navy)", margin: "0 0 28px", lineHeight: 1.2 }}>How our engagements work</h3>
          <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "26px 56px" }} className="cm-grid-2-md">
            {terms.map(([t, d]) =>
            <div key={t}>
                <dt style={{ display: "flex", gap: 10, alignItems: "flex-start", fontFamily: "var(--font-body)", fontSize: 17.5, fontWeight: 600, color: "var(--navy)", marginBottom: 6 }}>
                  <span style={{ color: "var(--gold)", flex: "none", marginTop: 2 }}><Icon name="check" size={18} /></span>
                  <span>{t}</span>
                </dt>
                <dd style={{ margin: 0, paddingLeft: 28, fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.58, color: "var(--ink-soft)" }}>{d}</dd>
              </div>
            )}
          </dl>
        </div>
      </Reveal>
    </SectionShell>);

}

// ---- Testimonials (placeholder copy — swap in real family quotes) ----
function Testimonials({ onContact }) {
  const quotes = [
  ["Katie believed in me and encouraged me. She taught me to always dream bigger, to stay true to my identity, and to build unshakable confidence \u2014 and that we shouldn't be so hard on ourselves, that we deserve to be proud of ourselves. I will forever carry these lessons with me.", "Student, Class of 2026", "Harvard University"],
  ["As an international family navigating U.S. college admissions, we always felt our sons were in the best possible hands. Katie combined exceptional strategic expertise with genuine care for our family, providing clarity, honesty, and thoughtful guidance throughout a highly competitive admissions journey. What truly set her apart was her ability to balance high-level admissions knowledge with a personal commitment to our children's success and well-being.", "Parent of twins, Class of 2025", "Duke University"],
  ["Katie brings a depth of knowledge about the admissions process that is hard to find, and what surprised us most was how she delivered it. The process felt organized and calm from the start; we had a clear plan, and the execution was smooth. She was always accessible, never added stress, and genuinely connected with our student in a way we didn't expect. We couldn't recommend her more strongly to any family navigating this process.", "Parent, Class of 2023", "University of Southern California"],
  ["Working with Katie was one of the best decisions we made for our family. She guided us through every part of the process, the straightforward moments and the harder ones, and always seemed to understand exactly what was happening and what to do next. Her advice was thoughtful and grounded, and we never felt alone in navigating it. We are so grateful for everything she did for our children.", "Parent, Classes of 2024 and 2025", "University of Chicago and Fordham University"],
  ["Katie truly cared about helping me submit the strongest application possible. She never settled for \u2018good enough\u2019 \u2014 she pushed me to think deeper, refine every detail, and only submit work that genuinely reflected my best. At the same time, I always felt that she had my best interests at heart. Her dedication, honesty, and commitment made me a stronger applicant, and I\u2019m incredibly grateful to have had her guidance throughout the college application process.", "Student, Class of 2026", "Northwestern University"],
  ["Katie's expertise gave us the confidence to step back and trust the process completely and that was such a gift as parents. But what we didn't expect was how much she would become part of our family through this experience. She was a true partner to our son every step of the way, and we are so grateful she was with us for this chapter.", "Parent, Class of 2025", "Stanford University"]];

  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % quotes.length), 8000);
    return () => clearTimeout(t);
  }, [active, paused, quotes.length]);

  const colleges = [
  "Amherst College", "Boston College", "Boston University", "Bowdoin College", "Brown University",
  "California Institute of Technology", "Carnegie Mellon University", "Case Western Reserve University",
  "Columbia University",
  "Cornell University", "Dartmouth College", "Duke University", "Georgetown University",
  "Georgia Institute of Technology",
  "Harvard University", "Johns Hopkins University", "Massachusetts Institute of Technology",
  "New York University", "Northeastern University", "Northwestern University",
  "Princeton University", "Rice University", "Stanford University", "Tufts University",
  "Tulane University",
  "University of California, Berkeley", "University of California, Los Angeles",
  "University of Chicago", "University of Illinois Urbana-Champaign", "University of Miami",
  "University of Michigan",
  "University of North Carolina at Chapel Hill", "University of Notre Dame",
  "University of Oxford",
  "University of Pennsylvania", "University of Southern California",
  "University of Texas at Austin", "University of Virginia", "University of Washington",
  "Vanderbilt University", "Wake Forest University",
  "Washington University in St. Louis", "Yale University"];

  const rows = Array.from({ length: 15 }, (_, r) => {
    const k = r * 7 % colleges.length;
    return {
      text: colleges.slice(k).concat(colleges.slice(0, k)).join("  \u00B7  "),
      dir: r % 2 ? "cmMarqueeR" : "cmMarqueeL",
      dur: (30 + r % 5 * 3.4 + (r % 3 ? 1.7 : 0)) * 8
    };
  });

  return (
    <SectionShell bg="navy" id="families" style={{ position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" className="cm-wallpaper"
        style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", opacity: 0.42, pointerEvents: "none", userSelect: "none", zIndex: 0 }}>
        {rows.map((row, r) =>
        <div key={r} style={{ overflow: "hidden", display: "flex" }}>
            <div className="cm-wallpaper-row" style={{ display: "flex", flex: "0 0 auto", whiteSpace: "nowrap", fontFamily: "var(--font-body)", fontSize: "var(--fs-caption)", letterSpacing: "var(--tracking-eyebrow)", color: "var(--gold-mid)", animation: `${row.dir} ${row.dur}s linear infinite` }}>
              <span style={{ paddingRight: "2.5em" }}>{row.text}</span>
              <span style={{ paddingRight: "2.5em" }}>{row.text}</span>
            </div>
          </div>
        )}
      </div>
      <Reveal delay={80} style={{ maxWidth: 980, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
          style={{ background: "var(--white)", border: "1px solid var(--line)", borderTop: "3px solid var(--gold)", borderRadius: "var(--radius-md) var(--radius-md) 0 0", boxShadow: "var(--shadow-md)", padding: "38px 52px 26px" }}>
          <div style={{ textAlign: "center", marginBottom: 30 }}><Eyebrow>From Families</Eyebrow></div>
          <div style={{ display: "grid" }}>
            {quotes.map(([q, who, where], i) =>
            <figure key={who + where} id={`cm-quote-${i}`} aria-hidden={i !== active}
              style={{ gridArea: "1 / 1", margin: 0, display: "flex", flexDirection: "column", justifyContent: "center", opacity: i === active ? 1 : 0, transform: i === active ? "translateY(0)" : "translateY(8px)", transition: "opacity 420ms var(--ease-out), transform 420ms var(--ease-out)", pointerEvents: i === active ? "auto" : "none" }}>
                <blockquote style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.62, color: "var(--ink-soft)", textWrap: "pretty" }}>“{q}”</blockquote>
                <figcaption style={{ marginTop: 26, paddingTop: 20, borderTop: "1px solid var(--line)", flex: "0 0 auto" }}>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-ink)" }}>{who}</div>
                  {where && <div style={{ fontFamily: "var(--font-body)", fontSize: 14.5, color: "var(--ink-muted, var(--ink-soft))", marginTop: 4 }}>{where}</div>}
                </figcaption>
              </figure>
            )}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
            <span style={{ display: "flex", gap: 4 }}>
              {quotes.map(([, who, where], i) =>
              <button key={who + where} aria-current={i === active} aria-controls={`cm-quote-${i}`} aria-label={`Quote ${i + 1} of ${quotes.length}`}
                onClick={() => setActive(i)}
                style={{ width: 44, height: 44, padding: 0, border: 0, background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", border: "1px solid var(--gold)", background: i === active ? "var(--gold)" : "transparent", transition: "background var(--dur) var(--ease-out)" }} />
              </button>
              )}
            </span>
          </div>
        </div>
        <div style={{ background: "var(--paper-2)", border: "1px solid var(--line)", borderTop: "1px solid var(--gold)", borderRadius: "0 0 var(--radius-md) var(--radius-md)", boxShadow: "var(--shadow-md)", padding: "30px 52px 34px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <p style={{ margin: 0, fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 500, fontSize: "clamp(1.35rem,2vw,1.7rem)", lineHeight: 1.35, color: "var(--navy)", textAlign: "center", maxWidth: "34ch", textWrap: "pretty" }}>
            Every one of these stories started with a conversation.
          </p>
          <Button size="lg" onClick={onContact} icon="arrowRight">Start yours here</Button>
        </div>
        <p style={{ margin: "14px 0 0", textAlign: "right" }}>
          <span className="cm-veil" style={{ display: "inline-block", fontFamily: "var(--font-body)", fontSize: "var(--fs-caption)", color: "var(--on-navy-soft)" }}>
            Selected acceptances from Katie&rsquo;s career
          </span>
        </p>
      </Reveal>
    </SectionShell>);

}

// ---- Working Together: consultation + how engagements work ----
function Engagement() {
  const consult = [
  ["A first conversation", "Free, brief, and no obligation. This is a chance to get to know one another. You tell us where your student is and what is on your mind, we tell you how we work, and together we get a sense of whether this is the right partnership. Fit runs both ways, and we would rather find out early."],
  ["A Magis Session", <>A 60-minute meeting on Zoom. <em>Magis</em> means more, and this is where we look past the immediate worry to what a student is actually capable of: what they already do well, where there is real room to grow, and what the road ahead could look like. Families leave with a high-level roadmap for what comes next, whether or not they work with us.</>],
  ["Enrolling", "Most families enroll after a Magis Session. Families who already know what they are looking for are welcome to enroll directly."]];

  return (
    <SectionShell bg="paper2" id="engagements">
      <Reveal style={{ maxWidth: 760 }}>
        <Eyebrow>Next Steps</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.4vw,2.9rem)", fontWeight: 600, color: "var(--navy)", margin: "16px 0 0", lineHeight: 1.12 }}>
          How families begin with us.
        </h2>
      </Reveal>
      <dl style={{ margin: "56px 0 0", display: "flex", flexDirection: "column", gap: 44, maxWidth: 920 }}>
        {consult.map(([t, d], i) =>
        <Reveal key={t} delay={80 + i * 80}>
            <div style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 26, alignItems: "start" }} className="cm-steps-row">
              <span style={{ width: 56, height: 56, borderRadius: "50%", border: "1px solid var(--gold)", color: "var(--accent-ink)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600 }}>{i + 1}</span>
              <div>
                <dt style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,2.8vw,2.3rem)", fontWeight: 600, color: "var(--navy)", marginBottom: 10, lineHeight: 1.15 }}>{t}</dt>
                <dd style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 19.5, lineHeight: 1.62, color: "var(--ink-soft)", maxWidth: "60ch" }}>{d}</dd>
              </div>
            </div>
          </Reveal>
        )}
      </dl>
      <Reveal delay={340}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.6, color: "var(--ink-soft)", margin: "48px 0 0", paddingTop: 24, borderTop: "1px solid var(--gold)", fontStyle: "italic", maxWidth: "62ch" }}>
          Our work is primarily virtual, which lets us partner with families anywhere in the world, though we welcome the chance to meet in person when we can.
        </p>
      </Reveal>
    </SectionShell>);

}

Object.assign(window, { Process, Testimonials, Engagement });