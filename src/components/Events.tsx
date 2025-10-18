import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Users,
  Lightbulb,
  Handshake,
  Code,
  Mic,
  Briefcase,
  Rocket,
} from "lucide-react";

type EventCategory =
  | "All"
  | "Competitions"
  | "Talks"
  | "Workshops"
  | "Networking";

const Events = () => {
  const [activeFilter, setActiveFilter] = useState<EventCategory>("All");

  const events = [
    {
      name: "Startup Pitch Competition",
      description:
        "Present your startup idea to industry experts and win funding",
      category: "Competitions",
      icon: Rocket,
    },
    {
      name: "Hackathon 2026",
      description: "24-hour coding challenge to build innovative solutions",
      category: "Competitions",
      icon: Code,
    },
    {
      name: "Case Study Challenge",
      description:
        "Solve real-world business problems with creative strategies",
      category: "Competitions",
      icon: Briefcase,
    },
    {
      name: "Founder's Talk",
      description: "Learn from successful entrepreneurs about their journey",
      category: "Talks",
      icon: Mic,
    },
    {
      name: "Innovation Workshop",
      description:
        "Hands-on sessions on design thinking and product development",
      category: "Workshops",
      icon: Lightbulb,
    },
    {
      name: "Investor Meet & Greet",
      description:
        "Connect with VCs and angel investors for funding opportunities",
      category: "Networking",
      icon: Handshake,
    },
    {
      name: "Panel Discussion",
      description:
        "Industry leaders discuss the future of technology and startups",
      category: "Talks",
      icon: Users,
    },
    {
      name: "Business Plan Competition",
      description: "Compete with detailed business plans for exciting prizes",
      category: "Competitions",
      icon: Trophy,
    },
  ];

  const filters: EventCategory[] = [
    "All",
    "Competitions",
    "Talks",
    "Workshops",
    "Networking",
  ];

  const filteredEvents =
    activeFilter === "All"
      ? events
      : events.filter((event) => event.category === activeFilter);

  return (
    <section id="events" className="py-24 bg-gradient-frost">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-heading text-accent text-sm tracking-[0.3em] uppercase">
            Events & Competitions
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-ember">
              Quest
            </span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From fierce competitions to enlightening workshops—find your path to
            innovation
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`font-body ${
                activeFilter === filter
                  ? "bg-gradient-ember shadow-glow"
                  : "border-secondary text-secondary hover:bg-secondary/10"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-glow transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-ember rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <event.icon className="text-foreground" size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {event.name}
                </h3>
              </div>
              <p className="font-body text-muted-foreground mb-4">
                {event.description}
              </p>
              <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full">
                <span className="font-body text-xs text-accent uppercase tracking-wider">
                  {event.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
