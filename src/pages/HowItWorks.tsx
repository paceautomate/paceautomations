import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Search, Cog, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Assessment",
    duration: "Week 1",
    description: "We start with a deep dive into your current operations. Through interviews and workflow mapping, we identify the processes that consume the most time and have the highest error rates.",
    deliverables: [
      "Workflow audit report",
      "Automation opportunity matrix",
      "ROI projections",
      "Implementation roadmap",
    ],
  },
  {
    number: "02",
    icon: Cog,
    title: "Design & Development",
    duration: "Weeks 2-3",
    description: "Our team designs custom automations tailored to your specific needs. We build in your secure environment, ensuring you maintain full control of your data throughout the process.",
    deliverables: [
      "Custom automation architecture",
      "Security documentation",
      "Testing protocols",
      "User training materials",
    ],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Deploy & Optimize",
    duration: "Week 4+",
    description: "We deploy your automations with zero disruption to daily operations. Post-launch, we monitor performance and continuously optimize to maximize your ROI.",
    deliverables: [
      "Live automation deployment",
      "Performance monitoring",
      "Monthly optimization reviews",
      "Ongoing support access",
    ],
  },
];

const HowItWorks = () => {
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
                A Proven Process for{" "}
                <span className="text-gradient-blue">Lasting Results</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                From discovery to deployment, we handle every step of your automation journey 
                with precision and care.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-6">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="mb-16 last:mb-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      {step.duration}
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">{step.title}</h2>
                    <p className="text-lg text-muted-foreground">{step.description}</p>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="p-8 rounded-2xl border border-border bg-card shadow-card">
                      <h3 className="font-semibold mb-4 text-muted-foreground">Deliverables</h3>
                      <ul className="space-y-3">
                        {step.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                From Chaos to Clarity in{" "}
                <span className="text-gradient-blue">4 Weeks</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Most clients see their first automations live within 30 days, 
                with measurable ROI within the first month of operation.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient-blue mb-2">1</div>
                <div className="text-muted-foreground">Week to assess</div>
              </div>
              <ArrowRight className="w-8 h-8 text-primary hidden md:block" />
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient-blue mb-2">2</div>
                <div className="text-muted-foreground">Weeks to build</div>
              </div>
              <ArrowRight className="w-8 h-8 text-primary hidden md:block" />
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient-blue mb-2">1</div>
                <div className="text-muted-foreground">Week to deploy</div>
              </div>
              <ArrowRight className="w-8 h-8 text-primary hidden md:block" />
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient-blue mb-2">∞</div>
                <div className="text-muted-foreground">Ongoing optimization</div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
