const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { name: "About", id: "about" },
    { name: "Events", id: "events" },
    { name: "Speakers", id: "speakers" },
    { name: "FAQs", id: "faqs" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-ember opacity-30"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-heading text-2xl font-bold tracking-wider mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-ember">
                E-SUMMIT
              </span>
              <span className="text-secondary ml-2">2026</span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Winter of Innovation — Where ideas rise from the cold to ignite
              change.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  E-Cell Instagram
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  E-Cell LinkedIn
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-accent hover:text-gold transition-colors font-semibold"
                >
                  Get Passes
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 pb-4 text-center">
          <p className="font-body text-sm text-muted-foreground">
            Designed & Developed by &nbsp;
            <span className="text-accent font-semibold">E-Cell Tech Team Including: </span>
            <ol className="list-decimal list-inside">
              <li>Krish Bhutani</li>
              <li>Atharv Golait</li>
              <li>Divyam Singh Duhoon</li>
            </ol>
          </p>
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © 2026 E-Cell NIT Hamirpur · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
