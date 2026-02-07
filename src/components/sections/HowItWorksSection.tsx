import { Search, Cog, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "We audit your current workflows, identify automation opportunities, and map out the highest-impact improvements.",
  },
  {
    number: "02",
    icon: Cog,
    title: "Automate",
    description: "Our team designs and deploys custom automations in your secure environment—no disruption to your daily operations.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Optimize",
    description: "We monitor, maintain, and continuously improve your automations to ensure lasting ROI as your business evolves.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            How Pace <span className="text-gradient-blue">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven three-step process that takes you from operational chaos 
            to streamlined efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 right-0 w-full h-px bg-gradient-to-r from-border via-primary/30 to-border transform translate-x-1/2" />
              )}
              
              <div className="relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-card transition-all duration-500">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {step.number}
                </div>
                
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/how-it-works">
              Learn More About Our Process
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
