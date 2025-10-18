import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is E-Summit 2026?",
      answer:
        "E-Summit 2026 is the annual flagship entrepreneurship and innovation event organized by the E-Cell of NIT Hamirpur. It brings together students, entrepreneurs, investors, and industry leaders for workshops, competitions, and networking opportunities.",
    },
    {
      question: "When and where will E-Summit 2026 take place?",
      answer:
        "E-Summit 2026 will be held in February 2026 at NIT Hamirpur, Himachal Pradesh. The exact dates will be announced soon. Stay tuned to our social media channels for updates.",
    },
    {
      question: "Who can participate in E-Summit 2026?",
      answer:
        "E-Summit is open to all students, aspiring entrepreneurs, startup founders, and anyone passionate about innovation and entrepreneurship. Some competitions may have specific eligibility criteria, which will be mentioned in their respective guidelines.",
    },
    {
      question: "How do I register for events?",
      answer:
        "You can register for individual events through our official website once registrations open. Some events may require team registrations, while others allow individual participation. Details will be provided on the registration page.",
    },
    {
      question: "What are the participation fees?",
      answer:
        "Participation fees vary by event. Some workshops and talks are free, while competitions may have nominal registration fees. Early bird discounts are often available. Check the specific event pages for detailed pricing.",
    },
    {
      question: "Will accommodation be provided?",
      answer:
        "For outstation participants, limited accommodation can be arranged on campus at subsidized rates. Please indicate your accommodation requirements during registration, and our team will assist you.",
    },
    {
      question: "What prizes and opportunities are available?",
      answer:
        "Winners of various competitions will receive cash prizes, certificates, and mentorship opportunities. Additionally, selected startups may get introductions to investors and incubation support from E-Cell NIT Hamirpur.",
    },
    {
      question: "How can I stay updated about E-Summit?",
      answer:
        "Follow us on Instagram, LinkedIn, and visit our official website regularly for the latest updates on speakers, events, registrations, and important announcements.",
    },
  ];

  return (
    <section id="faqs" className="py-24 bg-gradient-frost">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-heading text-accent text-sm tracking-[0.3em] uppercase">
            Questions & Answers
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
            Seek{" "}
            <span className="text-transparent bg-clip-text bg-gradient-ember">
              Wisdom
            </span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most common questions about E-Summit 2026
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-accent/50 transition-all duration-300"
              >
                <AccordionTrigger className="font-heading text-lg font-semibold text-foreground hover:text-accent [&[data-state=open]]:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
