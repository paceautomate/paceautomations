import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { 
  UserPlus, FileText, CheckSquare, ArrowLeftRight, Bell, Database,
  Building2, HeartPulse, Briefcase, ArrowRight, Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: UserPlus,
    title: "Employee Onboarding",
    description: "Automatically provision accounts across all your tools, send personalized welcome sequences, and assign training—triggered the moment a new hire is added to your HRIS.",
    benefits: ["80% faster onboarding", "Zero missed steps", "Consistent experience"],
  },
  {
    icon: FileText,
    title: "Automated Reporting",
    description: "Generate and distribute reports from multiple data sources on any schedule. From daily sales summaries to monthly compliance reports, never manually compile data again.",
    benefits: ["Hours saved weekly", "Real-time accuracy", "Stakeholder visibility"],
  },
  {
    icon: CheckSquare,
    title: "Approval Workflows",
    description: "Route requests through the right approvers based on type, amount, or department. Automatic escalation ensures nothing gets stuck, with full audit trails for compliance.",
    benefits: ["50% faster approvals", "Complete audit trails", "No bottlenecks"],
  },
  {
    icon: ArrowLeftRight,
    title: "Data Synchronization",
    description: "Keep your CRM, ERP, accounting, and other systems in perfect sync. Real-time or scheduled syncs eliminate manual exports and ensure data consistency across your stack.",
    benefits: ["Single source of truth", "No manual exports", "Real-time accuracy"],
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Alert the right people at the right time based on events in your business systems. From deal stage changes to support ticket escalations, never miss a critical moment.",
    benefits: ["Instant awareness", "Reduced response time", "No noise"],
  },
  {
    icon: Database,
    title: "Data Enrichment",
    description: "Automatically enrich leads, contacts, and company records with data from external sources. Better data quality means better decisions and higher conversion rates.",
    benefits: ["Richer profiles", "Better targeting", "Higher conversion"],
  },
];

const industries = [
  {
    icon: Briefcase,
    title: "Software & SaaS",
    description: "Automate customer onboarding, usage reporting, and renewal workflows.",
  },
  {
    icon: Building2,
    title: "Financial Services",
    description: "Streamline compliance reporting, client communications, and document processing.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Operations",
    description: "Automate patient intake, scheduling, and administrative workflows securely.",
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-glow opacity-30" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8 shadow-card">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Custom Solutions for Real Problems</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up text-foreground">
                Automation Solutions That{" "}
                <span className="text-gradient-blue">Actually Work</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Every business is different. We build custom automations tailored to your 
                specific workflows, tools, and goals.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={solution.title}
                  className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-card transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Built for <span className="text-gradient-blue">Your Industry</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We specialize in automation for growing businesses in software, 
                financial services, and healthcare operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={industry.title}
                  className="p-8 rounded-2xl border border-border bg-card text-center animate-fade-in-up hover:shadow-card transition-all duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{industry.title}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Discuss Your Needs
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

export default Solutions;
