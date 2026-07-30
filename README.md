# CuraMagis — Web Presence

The public marketing site for **CuraMagis**, a private, premium college admissions
consulting firm led by Katie Burns. Single-page, person-forward: the page opens on
Katie's credentials and reaches the brand story further down.

## Running it

Self-contained, no build step. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server
```

React, ReactDOM, and Babel load from CDN; the `.jsx` files are transpiled in the
browser. No install required to view or edit.

## Structure

```
index.html              Page shell — loads tokens, fonts, and the components below
colors_and_type.css     Design tokens (color, type, spacing, radii, shadows, motion)
fonts/                  Cormorant Garamond + EB Garamond (brand serifs)
assets/                 Logos, compass mark, Katie's headshot
coming-soon.html        Holding page
confirmed.html          Post-inquiry confirmation
src/
  Primitives.jsx        Button, Eyebrow, Tag, Field, Divider, Icon, Logo, Photo, Reveal
  Sections.jsx          Our Process, From Families, Working Together, college marquee
  ContactDialog.jsx     Multi-step inquiry form (modal)
src-katie/
  HeaderKatie.jsx       Nav; CuraMagis logo fades in on scroll
  HeroKatie.jsx         Logo → "Meet Katie" → 26,000 applications line → credential rail
  SectionsKatie.jsx     Background, quote band, Why CuraMagis, How We Work, closing CTA
  FooterKatie.jsx       Katie / CuraMagis / Connect columns
  AppKatie.jsx          Composes the page; exposes window.CuraAppKatie
```

## Page order

Hero → Background (bio, experience, specializations) → From Families → Katie's quote →
Why CuraMagis → How We Work → Our Process → Working Together → CTA → Footer.

## Relationship to the design system

The brand reference (tokens, voice, reference components) lives in the **CuraMagis
Design System** project — that is the source of truth. This repo *consumes* it:
`colors_and_type.css`, `fonts/`, and `assets/` are copied from there. When the brand
evolves, update the design system first, then re-sync those files here. Keep
website-specific changes (copy, layout) in this repo only.

## Going to production

The browser-Babel setup is ideal for fast design iteration and renders fine on GitHub
Pages. For real hosting (SEO, faster loads), the next step is
a build pipeline (Vite or Next.js) with the `.jsx` precompiled. That's a developer
conversion — the component structure here ports directly.

## Notes

- The contact form posts to [Web3Forms](https://web3forms.com) (\`src/ContactDialog.jsx\`);
  the access key is inline — rotate it there if it ever needs changing.
- Functional icons use [Lucide](https://lucide.dev) (CDN) — a flagged substitution per
  the design system.
- One student testimonial slot in "From Families" is still a placeholder.
