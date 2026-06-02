/* global React, Header, Hero, Approach, Process, QuoteBand, Engagement, Founder, CTABand, Footer, ContactDialog */
function CuraApp() {
  const [contactOpen, setContactOpen] = React.useState(false);
  const open = () => setContactOpen(true);
  return (
    <React.Fragment>
      <Header onContact={open} />
      <main>
        <Hero onContact={open} />
        <Approach />
        <Process />
        <QuoteBand />
        <Engagement onContact={open} />
        <Founder onContact={open} />
        <CTABand onContact={open} />
      </main>
      <Footer />
      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </React.Fragment>
  );
}
window.CuraApp = CuraApp;
