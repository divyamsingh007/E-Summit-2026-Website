import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-heading text-accent text-sm tracking-[0.3em] uppercase">Get In Touch</span>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
            Join The <span className="text-transparent bg-clip-text bg-gradient-ember">Movement</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to collaborate? Reach out to us—we'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 hover:shadow-frost transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-body text-sm text-muted-foreground mb-2 block">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-accent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-body text-sm text-muted-foreground mb-2 block">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-accent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-body text-sm text-muted-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-accent min-h-[120px]"
                  placeholder="Tell us about your query..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-ember hover:shadow-glow transition-all duration-300 font-body"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-frost transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-ember rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Location</h3>
                  <p className="font-body text-muted-foreground">
                    NIT Hamirpur<br />
                    Hamirpur, Himachal Pradesh<br />
                    India - 177005
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-frost transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-ember rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Email</h3>
                  <a
                    href="mailto:ecell@nith.ac.in"
                    className="font-body text-accent hover:text-gold transition-colors"
                  >
                    ecell@nith.ac.in
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-frost transition-all duration-300">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-accent hover:shadow-glow transition-all duration-300"
                >
                  <Instagram className="text-accent" size={20} />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-accent hover:shadow-glow transition-all duration-300"
                >
                  <Linkedin className="text-accent" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
