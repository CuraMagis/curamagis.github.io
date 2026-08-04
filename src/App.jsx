/* global React, HeaderKatie, HeroKatie, KatieBio, KatieQuote, Testimonials, WhyCuraMagis, ApproachKatie, Process, Engagement, CTABandKatie, FooterKatie, ContactDialog */
function CuraAppKatie() {
  const [contactOpen, setContactOpen] = React.useState(false);
  const open = () => setContactOpen(true);
  return (
    <React.Fragment>
      <HeaderKatie onContact={open} />
      <main>
        <HeroKatie onContact={open} />
        <KatieQuote />
        <WhyCuraMagis />
        <KatieBio />
        <ApproachKatie />
        <Testimonials onContact={open} />
        <Process />
        <Engagement />
        <CTABandKatie onContact={open} />
      </main>
      <FooterKatie onContact={open} />
      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </React.Fragment>);
}
window.CuraAppKatie = CuraAppKatie;
