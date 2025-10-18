import { Scroll, Sword, Trophy, Crown } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      day: "Day 1",
      title: "The Call of Innovation",
      time: "10:00 AM - 6:00 PM",
      description: "Inaugural ceremony, keynote speeches, and opening workshops",
      icon: Scroll,
    },
    {
      day: "Day 2",
      title: "The Forge of Ideas",
      time: "9:00 AM - 7:00 PM",
      description: "Hackathons, pitch competitions, and expert panels",
      icon: Sword,
    },
    {
      day: "Day 3",
      title: "The Battle of Champions",
      time: "10:00 AM - 5:00 PM",
      description: "Final rounds, startup showcases, and networking sessions",
      icon: Trophy,
    },
    {
      day: "Day 4",
      title: "The Crowning",
      time: "11:00 AM - 4:00 PM",
      description: "Award ceremony, closing keynote, and grand finale",
      icon: Crown,
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-heading text-accent text-sm tracking-[0.3em] uppercase">The Journey</span>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
            Four Days of <span className="text-transparent bg-clip-text bg-gradient-ember">Epic Adventure</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Embark on a quest where each day brings new challenges and opportunities to shape the future
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-accent via-secondary to-gold"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-frost transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-3">
                      <event.icon className="text-accent group-hover:animate-float" size={24} />
                      <span className="font-heading text-2xl font-bold text-foreground">{event.day}</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-gold mb-2">{event.title}</h3>
                    <p className="font-body text-sm text-secondary mb-3">{event.time}</p>
                    <p className="font-body text-muted-foreground">{event.description}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-ember rounded-full border-4 border-background shadow-glow z-10">
                  <div className="w-3 h-3 bg-foreground rounded-full animate-glow-pulse"></div>
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
