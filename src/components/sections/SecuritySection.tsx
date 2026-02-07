import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Server, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const securityFeatures = [
  {
    icon: Lock,
    title: "Your Cloud, Your Control",
    description: "All automations run in your own secure cloud environment. We deploy but never host your data.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "Complete visibility into every automation we build. No black boxes, no vendor lock-in.",
  },
  {
    icon: Server,
    title: "SOC 2 Infrastructure",
    description: "We only use enterprise-grade, SOC 2 compliant tools and platforms for all deployments.",
  },
  {
    icon: Shield,
    title: "Least Privilege Access",
    description: "We request only the minimum permissions needed, and you can revoke access at any time.",
  },
];

export function SecuritySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-secondary/50">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Security First</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Security Isn't an Afterthought.{" "}
              <span className="text-gradient-blue">It's Our Foundation.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              We understand that trust is earned. That's why Pace is built from the ground up 
              with security and data ownership at its core.
            </p>

            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/security">
                Learn About Our Security Practices
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 animate-fade-in-up hover:shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
