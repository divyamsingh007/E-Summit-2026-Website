import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Timeline", id: "timeline" },
    { name: "Events", id: "events" },
    { name: "Speakers", id: "speakers" },
    { name: "FAQs", id: "faqs" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/80 backdrop-blur-lg border-b border-border shadow-frost"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-heading text-2xl font-bold tracking-wider">
            <span className="text-transparent bg-clip-text bg-gradient-ember">
              E-SUMMIT
            </span>
            <span className="text-secondary ml-2">2026</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-accent transition-colors duration-300 font-body text-sm tracking-wide"
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="default"
              className="bg-gradient-ember hover:shadow-glow transition-all duration-300 font-body"
              asChild
            >
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Passes
              </a>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground/80 hover:text-accent transition-colors duration-300 font-body text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button
                variant="default"
                className="bg-gradient-ember hover:shadow-glow transition-all duration-300 font-body w-full"
                asChild
              >
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Passes
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
