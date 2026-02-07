import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Target, Heart, Zap, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Results-Obsessed",
    description: "We measure success by your ROI, not hours billed. Every automation we build is designed to deliver measurable impact.",
  },
  {
    icon: Heart,
    title: "Trust First",
    description: "Security and transparency aren't features—they're foundations. We earn trust through action, not promises.",
  },
  {
    icon: Zap,
    title: "Speed Matters",
    description: "Growing businesses can't wait months for results. We move fast without cutting corners on quality or security.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description: "We're not just vendors—we're partners in your success. Your goals become our goals.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-glow opacity-30" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up text-foreground">
                We Help Businesses{" "}
                <span className="text-gradient-blue">Run Faster</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Pace is a security-first automation partner for growing businesses 
                that refuse to let manual processes slow them down.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Our <span className="text-gradient-blue">Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe that growing businesses shouldn't be held back by the same 
                  manual, error-prone workflows that enterprise companies automated years ago.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  The problem? Enterprise-grade automation typically requires enterprise-grade 
                  budgets, timelines, and internal IT teams. That's where Pace comes in.
                </p>
                <p className="text-lg text-muted-foreground">
                  We bring the expertise, tools, and security practices of enterprise automation 
                  to SMBs—without the enterprise overhead. Fast, secure, and built for your 
                  specific needs.
                </p>
              </div>
              
              <div className="p-8 rounded-2xl border border-border bg-card animate-fade-in-up shadow-card" style={{ animationDelay: "0.2s" }}>
                <div className="text-6xl font-bold text-gradient-blue mb-4">10-250</div>
                <div className="text-xl font-semibold mb-2 text-foreground">Employee Sweet Spot</div>
                <p className="text-muted-foreground">
                  We specialize in businesses large enough to have real workflow complexity, 
                  but lean enough that hiring a full IT team doesn't make sense yet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                What We <span className="text-gradient-blue">Stand For</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide every decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 animate-fade-in-up hover:shadow-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Why <span className="text-gradient-blue">Pace?</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-blue mb-2">4 Weeks</div>
                  <div className="text-muted-foreground">From kickoff to live automation</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-blue mb-2">100%</div>
                  <div className="text-muted-foreground">Client data ownership</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-blue mb-2">0</div>
                  <div className="text-muted-foreground">Long-term contracts required</div>
                </div>
              </div>
              
              <div className="mt-12">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Let's Talk
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
