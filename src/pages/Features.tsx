import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Brain,
  Globe,
  Shield,
  Zap,
  HeartPulse,
  Users,
  BarChart3,
  Bell,
  Smartphone,
  Languages,
  Clock
} from "lucide-react";

const mainFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Prediction",
    description: "Our machine learning model analyzes 12+ health factors to predict your diabetes risk with 98% accuracy, giving you insights typically reserved for clinical settings.",
    highlight: "98% Accuracy",
  },
  {
    icon: Globe,
    title: "Middle East Focused",
    description: "Unlike generic tools, Vita is specifically calibrated for Egyptian and Middle Eastern populations, accounting for regional dietary patterns, genetics, and lifestyle factors.",
    highlight: "Region-Specific",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your health data is encrypted end-to-end and never shared with third parties. We comply with international data protection standards including GDPR.",
    highlight: "GDPR Compliant",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get your comprehensive risk assessment in under 5 minutes. No waiting for lab results or doctor appointments to understand your risk level.",
    highlight: "5-Minute Assessment",
  },
];

const additionalFeatures = [
  {
    icon: HeartPulse,
    title: "Personalized Recommendations",
    description: "Receive tailored lifestyle and dietary advice based on your unique risk profile.",
  },
  {
    icon: Languages,
    title: "Arabic Language Support",
    description: "Full Arabic interface for comfortable use across the region.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Access your risk assessment anytime, anywhere on any device.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Monitor how your risk changes as you adopt healthier habits.",
  },
  {
    icon: Bell,
    title: "Health Reminders",
    description: "Optional reminders to retake assessments and track improvements.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access the platform anytime without scheduling appointments.",
  },
  {
    icon: Users,
    title: "Family Profiles",
    description: "Manage assessments for multiple family members in one account.",
  },
  {
    icon: Globe,
    title: "Educational Resources",
    description: "Learn about diabetes prevention through curated content.",
  },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powerful <span className="text-gradient-primary">Features</span> for Your Health
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Everything you need to understand, monitor, and reduce your diabetes risk, 
              designed specifically for the Middle East.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-3xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-semibold">
                    {feature.highlight}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              And Much More
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive tools to support your health journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-medium transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Vita is Different
            </h2>
            <p className="text-lg text-muted-foreground">
              See how we compare to traditional risk assessment methods
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Vita</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Traditional Methods</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Time to Results", "5 minutes", "Days to weeks"],
                  ["Cost", "Free", "Consultation fees"],
                  ["Regional Calibration", "✓", "✗"],
                  ["Arabic Support", "✓", "Limited"],
                  ["24/7 Availability", "✓", "✗"],
                  ["Privacy Protection", "End-to-end encrypted", "Varies"],
                  ["Personalized Tips", "✓", "Generic advice"],
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-4 px-4 text-foreground">{row[0]}</td>
                    <td className="py-4 px-4 text-center text-primary font-medium">{row[1]}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience These Features Today
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Start your free risk assessment and discover how Vita can help you 
            take control of your health.
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link to="/risk-check">
              Start Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
