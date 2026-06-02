/* global React, Field, Button, Icon, Eyebrow */
const { useState: useStateD } = React;

function ContactDialog({ open, onClose }) {
  const [sent, setSent] = useStateD(false);
  const [form, setForm] = useStateD({ name: "", email: "", grade: "", note: "" });
  if (!open) return null;
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 100, background: "rgba(8,28,42,0.55)",
      backdropFilter: "blur(3px)", display: "flex", alignItems: "center",
      justifyContent: "center", padding: 24, animation: "cmFade .24s ease",
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: "var(--paper)", borderRadius: "var(--radius-lg)", width: "100%",
        maxWidth: 560, boxShadow: "var(--shadow-lg)", overflow: "hidden",
        animation: "cmRise .28s cubic-bezier(0.22,1,0.36,1)",
      }}>
        <div style={{ background: "var(--grad-navy)", padding: "26px 34px", position: "relative" }}>
          <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: 18, right: 18, background: "none", border: 0, color: "var(--on-navy-soft)", cursor: "pointer", padding: 4 }}>
            <Icon name="x" size={22} />
          </button>
          <Eyebrow onNavy>{sent ? "Thank you" : "Start a conversation"}</Eyebrow>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 600, color: "#fff", margin: "8px 0 0" }}>
            {sent ? "Your note is on its way." : "Tell us about your student."}
          </h3>
        </div>

        {sent ? (
          <div style={{ padding: "40px 34px 44px", textAlign: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(206,162,47,.14)", color: "var(--accent-ink)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <Icon name="check" size={28} />
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)", margin: "0 auto 26px", maxWidth: 380 }}>
              We read every note personally. Katie will reply within two business days — we look forward to learning your student's story.
            </p>
            <Button variant="navy" onClick={onClose}>Close</Button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ padding: "28px 34px 34px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <Field label="Your name" placeholder="Jane Doe" value={form.name} onChange={set("name")} required />
              <Field label="Email" type="email" placeholder="jane@email.com" value={form.email} onChange={set("email")} required />
            </div>
            <div style={{ marginTop: 18 }}>
              <Field label="Student's grade" placeholder="e.g. 11th grade" value={form.grade} onChange={set("grade")} />
            </div>
            <div style={{ marginTop: 18 }}>
              <Field label="How can we help?" multiline placeholder="Tell us a little about your student…" value={form.note} onChange={set("note")} hint="No pressure, no obligation — just a conversation." />
            </div>
            <div style={{ marginTop: 24, display: "flex", gap: 12, alignItems: "center" }}>
              <Button variant="primary" type="submit" icon="arrowRight">Send to Katie</Button>
              <Button variant="ghost" onClick={onClose}>Cancel</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
window.ContactDialog = ContactDialog;
