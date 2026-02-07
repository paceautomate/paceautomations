import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  Mail,
  MessageSquare,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "30-minute discovery call",
  "Workflow audit included",
  "No commitment required",
  "Custom ROI projection",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Request sent!",
        description: "We’ll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Free Discovery Call
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Let's Bring Your Operations{" "}
                <span className="text-gradient-blue">Up to Pace</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Book a free 30-minute call to discuss your workflows and discover
                how much time and money automation could save you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="p-8 rounded-2xl border bg-card shadow-card">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">Get in Touch</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Work Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : <>Book a Discovery Call <ArrowRight /></>}
                  </Button>
                </form>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">What to Expect</h3>
                <ul className="space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex gap-3">
                      <CheckCircle className="text-success" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 border rounded-xl">
                  <Mail className="inline mr-2 text-primary" />
                  <a
                    href="mailto:hello@pacepartners.com"
                    className="text-primary underline"
                  >
                    hello@pacepartners.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
