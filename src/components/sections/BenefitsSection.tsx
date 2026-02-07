import { Clock, ShieldCheck, TrendingDown, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    metric: "10+",
    unit: "Hours Saved",
    period: "per week, per team",
    description: "Reclaim time spent on manual data entry, reporting, and approvals.",
  },
  {
    icon: TrendingDown,
    metric: "90%",
    unit: "Fewer Errors",
    period: "in automated workflows",
    description: "Eliminate human error from repetitive, high-stakes processes.",
  },
  {
    icon: ShieldCheck,
    metric: "100%",
    unit: "Your Control",
    period: "over your data",
    description: "All automations run in your secure cloud—we never touch your data.",
  },
  {
    icon: Users,
    metric: "$0",
    unit: "IT Hires",
    period: "required",
    description: "Get enterprise-grade automation without expanding your headcount.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Results <span className="text-gradient-blue">Speak for Themselves</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real outcomes from businesses that partnered with PACE to transform their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.unit}
              className="group relative p-6 rounded-2xl border border-border bg-gradient-card hover:border-primary/50 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-gradient-blue">{benefit.metric}</span>
                <div className="text-lg font-semibold text-foreground">{benefit.unit}</div>
                <div className="text-sm text-muted-foreground">{benefit.period}</div>
              </div>
              
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
