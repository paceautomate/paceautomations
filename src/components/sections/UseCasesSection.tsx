import { Link } from "react-router-dom";
import { UserPlus, FileText, CheckSquare, ArrowLeftRight, Bell, Database, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: UserPlus,
    title: "Employee Onboarding",
    description: "Automatically provision accounts, send welcome emails, and assign training when a new hire is added to your HRIS.",
  },
  {
    icon: FileText,
    title: "Automated Reporting",
    description: "Generate and distribute daily, weekly, or monthly reports from multiple data sources without lifting a finger.",
  },
  {
    icon: CheckSquare,
    title: "Approval Workflows",
    description: "Route requests for approval through the right people, with automatic escalation and audit trails.",
  },
  {
    icon: ArrowLeftRight,
    title: "Data Handoffs",
    description: "Sync data between CRMs, ERPs, and other tools in real-time, eliminating manual exports and imports.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Alert the right people at the right time based on triggers in your business systems.",
  },
  {
    icon: Database,
    title: "Data Enrichment",
    description: "Automatically enrich leads, contacts, or records with data from external sources.",
  },
];

export function UseCasesSection() {
  return (
    <section className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Automation <span className="text-gradient-blue">Use Cases</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From onboarding to reporting, we automate the workflows that slow your team down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <useCase.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
              <p className="text-muted-foreground text-sm">{useCase.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/solutions">
              Explore All Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
