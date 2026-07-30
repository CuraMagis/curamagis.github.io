/* global React, HeaderKatie, HeroKatie, KatieBio, KatieQuote, Testimonials, WhyCuraMagis, ApproachKatie, Process, Engagement, CTABandKatie, FooterKatie, ContactDialog */
function CuraAppKatie() {
  const [contactOpen, setContactOpen] = React.useState(false);
  const open = () => setContactOpen(true);
  return (
    <React.Fragment>
      <HeaderKatie onContact={open} />
      <main>
        <HeroKatie onContact={open} />
        <KatieBio />
        <Testimonials />
        <KatieQuote />
        <WhyCuraMagis />
        <ApproachKatie />
        <Process />
        <Engagement onContact={open} />
        <CTABandKatie onContact={open} />
      </main>
      <FooterKatie onContact={open} />
      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </React.Fragment>);
}
window.CuraAppKatie = CuraAppKatie;
