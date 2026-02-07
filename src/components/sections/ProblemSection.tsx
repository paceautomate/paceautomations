import { AlertTriangle, Clock, XCircle, Users } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Hours Lost Daily",
    description: "Teams spend 30% of their time on repetitive, manual tasks that could be automated.",
  },
  {
    icon: XCircle,
    title: "Costly Errors",
    description: "Manual data entry and handoffs lead to mistakes that damage trust and revenue.",
  },
  {
    icon: Users,
    title: "Can't Scale",
    description: "Growing pains hit hard when every new client means more manual work.",
  },
  {
    icon: AlertTriangle,
    title: "No IT Resources",
    description: "Hiring engineers to build integrations is expensive and slow for SMBs.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 relative bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Your Operations Shouldn't Be This{" "}
            <span className="text-gradient-blue">Painful</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Growing businesses face the same challenges: repetitive workflows, 
            disconnected tools, and processes that don't scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-6 rounded-xl border border-border bg-card hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
