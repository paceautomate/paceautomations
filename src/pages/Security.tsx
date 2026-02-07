import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { 
  Shield, Lock, Eye, Server, Key, FileCheck, 
  RefreshCw, AlertTriangle, CheckCircle, ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const securityPrinciples = [
  {
    icon: Lock,
    title: "Your Cloud, Your Control",
    description: "All automations run exclusively in your own secure cloud environment. We deploy and configure, but your data never leaves your infrastructure. You maintain full ownership and control.",
  },
  {
    icon: Key,
    title: "Least Privilege Access",
    description: "We request only the minimum permissions necessary to build and maintain your automations. Every access point is documented, and you can revoke permissions at any time.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "No black boxes. Every automation we build is fully documented and visible to your team. You own the code, the configurations, and the logic—no vendor lock-in.",
  },
  {
    icon: Server,
    title: "Enterprise Infrastructure",
    description: "We exclusively use SOC 2 Type II compliant platforms and tools. Your automations run on the same infrastructure trusted by Fortune 500 companies.",
  },
];

const practices = [
  {
    icon: FileCheck,
    title: "Security Documentation",
    description: "Every project includes comprehensive security documentation, including data flow diagrams, access matrices, and risk assessments.",
  },
  {
    icon: RefreshCw,
    title: "Regular Audits",
    description: "We conduct regular reviews of all automations to ensure they continue to meet security best practices as your business evolves.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Clear escalation procedures and rapid response protocols for any security concerns, with defined SLAs for critical issues.",
  },
];

const certifications = [
  "SOC 2 Type II Compliant Infrastructure",
  "GDPR-Ready Processes",
  "HIPAA-Compliant Options Available",
  "Encrypted Data in Transit & At Rest",
];

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-glow opacity-30" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Security First</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up text-foreground">
                Your Data Security Is{" "}
                <span className="text-gradient-blue">Non-Negotiable</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                We've built Pace from the ground up with security at its core. 
                Trust isn't assumed—it's earned through transparency, best practices, 
                and putting you in control.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our Security <span className="text-gradient-blue">Principles</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Four foundational principles that guide every decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityPrinciples.map((principle, index) => (
                <div
                  key={principle.title}
                  className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 animate-fade-in-up hover:shadow-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <principle.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practices */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Security <span className="text-gradient-blue">Practices</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Beyond our core principles, we maintain rigorous security practices 
                  throughout every engagement.
                </p>

                <div className="space-y-6">
                  {practices.map((practice, index) => (
                    <div
                      key={practice.title}
                      className="flex gap-4 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <practice.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">{practice.title}</h3>
                        <p className="text-sm text-muted-foreground">{practice.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-card shadow-card">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Compliance & Certifications</h3>
                <ul className="space-y-4">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    Need specific compliance requirements? We work with your security 
                    team to meet industry-specific standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust CTA */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Have Security Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're happy to discuss our security practices in detail, answer your 
                questions, or work with your security team directly.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Talk to Our Team
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

export default Security;
