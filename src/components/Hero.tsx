import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 15, 28, 0.7), rgba(10, 15, 28, 0.8)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-wider">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-gold to-accent animate-float">
              WINTER OF
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-ember text-7xl md:text-9xl">
              INNOVATION
            </span>
          </h1>

          <p className="font-body text-xl md:text-2xl text-secondary/90 tracking-wide leading-relaxed max-w-2xl mx-auto">
            Where ideas rise from the cold to ignite change
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              size="lg"
              className="bg-gradient-ember hover:shadow-glow hover:scale-105 transition-all duration-300 font-body text-lg px-8 py-6"
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
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAbout}
              className="border-secondary text-secondary hover:bg-secondary/10 font-body text-lg px-8 py-6"
            >
              Know More
            </Button>
          </div>

          <div className="mt-12 font-body text-muted-foreground space-y-1">
            <p className="text-lg">Coming February 2026</p>
            <p className="text-sm tracking-widest uppercase">NIT Hamirpur</p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-secondary hover:text-accent transition-colors cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};

export default Hero;
