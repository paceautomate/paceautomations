import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 md:p-16 rounded-3xl border border-border bg-card shadow-card">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Free Discovery Call</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Bring Your Operations{" "}
              <span className="text-gradient-blue">Up to Pace?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Book a free 30-minute discovery call. We'll map your workflows, 
              identify automation opportunities, and show you exactly how much time 
              and money you could save.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book a Discovery Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/solutions">
                  See What Can Be Automated
                </Link>
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              No commitment required. No sales pressure. Just a conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
