import { Linkedin } from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Arjun Malhotra",
      role: "Tech Entrepreneur & Investor",
      title: "Guardian of Innovation",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
    {
      name: "Priya Sharma",
      role: "Founder & CEO, TechVerse",
      title: "Architect of Change",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
    {
      name: "Vikram Singh",
      role: "Director of Innovation, Global Corp",
      title: "Visionary Leader",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
    {
      name: "Ananya Verma",
      role: "AI Research Scientist",
      title: "Master of Algorithms",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
    {
      name: "Rahul Kapoor",
      role: "Serial Entrepreneur",
      title: "Champion of Startups",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
    {
      name: "Meera Patel",
      role: "VC Partner, Future Fund",
      title: "Keeper of Opportunities",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
  ];

  return (
    <section id="speakers" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-heading text-accent text-sm tracking-[0.3em] uppercase">The Council</span>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
            Voices That Shaped <span className="text-transparent bg-clip-text bg-gradient-ember">The Realm</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from the pioneers and trailblazers who transformed their visions into empires
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg border-2 border-border hover:border-accent/50 transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="font-heading text-sm text-gold italic mb-2">"{speaker.title}"</p>
                  <p className="font-body text-sm text-muted-foreground">{speaker.role}</p>
                </div>

                <div className="absolute inset-0 shadow-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">{speaker.name}</h3>
                <p className="font-body text-sm text-secondary mb-2">{speaker.role}</p>
                <button className="text-accent hover:text-gold transition-colors">
                  <Linkedin size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
