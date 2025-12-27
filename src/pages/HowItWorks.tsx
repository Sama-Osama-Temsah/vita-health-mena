import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ClipboardList, 
  Cpu, 
  FileBarChart,
  Shield,
  CheckCircle,
  Users,
  Database
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Complete Health Questionnaire",
    description: "Answer simple questions about your age, weight, family history, lifestyle habits, and dietary patterns. The questionnaire takes only 5-7 minutes.",
    details: [
      "Personal health metrics (BMI, blood pressure)",
      "Family history of diabetes",
      "Physical activity levels",
      "Dietary habits specific to Middle Eastern cuisine",
    ],
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI-Powered Analysis",
    description: "Our advanced machine learning model processes your data using algorithms trained on health studies from Egyptian and Middle Eastern populations.",
    details: [
      "12+ risk factors analyzed simultaneously",
      "Models trained on regional health data",
      "Considers genetic and environmental factors",
      "Real-time processing in seconds",
    ],
  },
  {
    number: "03",
    icon: FileBarChart,
    title: "Personalized Risk Report",
    description: "Receive a comprehensive risk assessment with your predicted diabetes probability and actionable recommendations tailored to your profile.",
    details: [
      "Clear risk percentage score",
      "Breakdown of contributing factors",
      "Culturally relevant lifestyle tips",
      "Recommended next steps",
    ],
  },
];

const technologies = [
  {
    icon: Database,
    title: "Big Data Analytics",
    description: "Analyzing millions of health records to identify patterns",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Advanced algorithms that improve with more data",
  },
  {
    icon: Shield,
    title: "Secure Processing",
    description: "End-to-end encryption for all health data",
  },
  {
    icon: Users,
    title: "Regional Expertise",
    description: "Models calibrated for Middle Eastern populations",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How Vita <span className="text-gradient-primary">Works</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Understanding your diabetes risk has never been easier. Our AI-powered 
              platform delivers accurate predictions in just minutes.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/risk-check">
                Start Your Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-3 mb-6">
                    <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary-light to-secondary flex items-center justify-center">
                    <step.icon className="w-32 h-32 text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine cutting-edge AI with regional health expertise to deliver 
              accurate, relevant predictions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-large transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-5">
                  <tech.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Know Your Risk?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Take the first step towards a healthier future. Our assessment is 
              free, confidential, and takes just 5 minutes.
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
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
