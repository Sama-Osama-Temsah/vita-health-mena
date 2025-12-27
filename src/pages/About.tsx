import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Heart,
  Target,
  Eye,
  Users,
  Award,
  Globe,
  Lightbulb
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Health First",
    description: "Every decision we make puts your health and wellbeing at the forefront.",
  },
  {
    icon: Target,
    title: "Accuracy",
    description: "We continuously improve our AI models to provide the most accurate predictions.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Health insights should be available to everyone, regardless of location or income.",
  },
  {
    icon: Globe,
    title: "Cultural Relevance",
    description: "We design for our region's unique health needs and cultural context.",
  },
];

const team = [
  {
    name: "Dr. Amira Hassan",
    role: "Chief Medical Officer",
    bio: "Endocrinologist with 15+ years experience in diabetes research across Egypt and UAE.",
  },
  {
    name: "Mahmoud El-Sayed",
    role: "Chief Technology Officer",
    bio: "AI researcher specializing in healthcare applications, formerly at Google Health.",
  },
  {
    name: "Sara Mansour",
    role: "Head of Product",
    bio: "Product leader focused on making health technology accessible in the MENA region.",
  },
  {
    name: "Dr. Khaled Nour",
    role: "Head of Research",
    bio: "Public health expert studying diabetes epidemiology in Middle Eastern populations.",
  },
];

const milestones = [
  { year: "2022", event: "Vita founded in Cairo" },
  { year: "2022", event: "First AI model trained on Egyptian health data" },
  { year: "2023", event: "Launched beta with 5,000 users" },
  { year: "2023", event: "Expanded to UAE and Saudi Arabia" },
  { year: "2024", event: "Reached 50,000+ assessments" },
  { year: "2024", event: "Arabic interface launched" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient-primary">Vita</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're on a mission to reduce diabetes prevalence in the Middle East 
              through early detection and prevention.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
              <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower every individual in Egypt and the Middle East with the 
                knowledge and tools to understand their diabetes risk and take 
                proactive steps toward prevention. We believe early detection saves 
                lives and reduces the burden of chronic disease.
              </p>
            </div>
            
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
              <div className="w-16 h-16 rounded-2xl bg-accent-light flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A Middle East where diabetes is no longer a silent epidemic. Where 
                everyone has access to personalized health insights regardless of 
                their socioeconomic status. Where prevention becomes the norm, not 
                the exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Story
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Vita was born from a personal experience. Our founder watched a beloved 
                family member struggle with type 2 diabetes - a condition that could 
                have been prevented with earlier intervention. This sparked a question: 
                why wasn't there an easy, accessible way for Egyptians to understand 
                their diabetes risk?
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Existing risk calculators were designed for Western populations and 
                missed crucial factors specific to our region - our genetics, our diet 
                rich in rice and bread, our social customs around food, and the rapid 
                lifestyle changes happening across the Middle East.
              </p>
              <p className="text-lg leading-relaxed">
                We assembled a team of doctors, researchers, and technologists with 
                one goal: build an AI-powered tool specifically for our people. After 
                years of research, training models on regional health data, and 
                validating with medical experts, Vita was launched. Today, we've helped 
                over 50,000 people understand their risk and take action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-large transition-shadow duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Experts in medicine, technology, and regional health
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-6 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                    <span className="text-primary font-bold">{milestone.year}</span>
                    <p className="text-foreground">{milestone.event}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us in the Fight Against Diabetes
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Take your first step toward understanding and reducing your risk.
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link to="/risk-check">
              Start Your Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
