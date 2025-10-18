import { Users, Award, TrendingUp, Sparkles } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Sparkles, value: "69+", label: "Events" },
    { icon: Users, value: "69+", label: "Speakers" },
    { icon: Award, value: "69+", label: "Participants" },
    { icon: TrendingUp, value: "69+", label: "Startups" },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-frost relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMGMtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOCA4IDMuNTgyIDggOC0zLjU4MiA4LTggOHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')]"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="font-heading text-accent text-sm tracking-[0.3em] uppercase">
                About The Summit
              </span>
              <div className="h-px bg-gradient-ember w-full mt-2"></div>
            </div>

            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground leading-tight">
              The Forge of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-ember">
                Tomorrow's Leaders
              </span>
            </h2>

            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              E-Summit 2026 is the annual flagship entrepreneurship and
              innovation event organized by the E-Cell of NIT Hamirpur. This
              winter, we bring together visionaries, creators, and innovators
              who dare to challenge the status quo.
            </p>

            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Through a carefully curated mix of competitions, workshops, talks,
              and networking sessions, we empower the next generation of
              entrepreneurs to transform their boldest ideas into reality—rising
              from the cold to ignite lasting change.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-glow transition-all duration-300 group"
              >
                <stat.icon
                  className="text-accent mb-4 group-hover:animate-float"
                  size={32}
                />
                <div className="font-heading text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
