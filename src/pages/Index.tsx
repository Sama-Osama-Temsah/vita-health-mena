import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Activity, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Globe,
  Lock,
  Zap
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Activity,
      title: t("features.ai.title"),
      description: t("features.ai.description"),
    },
    {
      icon: Globe,
      title: t("features.local.title"),
      description: t("features.local.description"),
    },
    {
      icon: Lock,
      title: t("features.privacy.title"),
      description: t("features.privacy.description"),
    },
    {
      icon: Zap,
      title: t("features.instant.title"),
      description: t("features.instant.description"),
    },
  ];

  const stats = [
    { value: "98%", label: t("stats.accuracy") },
    { value: "50K+", label: t("stats.users") },
    { value: "12+", label: t("stats.factors") },
    { value: "24/7", label: t("stats.available") },
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      location: "Cairo, Egypt",
      text: "Vita helped me understand my diabetes risk early. The personalized recommendations have been life-changing.",
      avatar: "A",
    },
    {
      name: "Fatima Al-Rashid",
      location: "Dubai, UAE",
      text: "Finally, a health platform that understands our regional dietary habits and lifestyle factors.",
      avatar: "F",
    },
    {
      name: "Mohamed Samir",
      location: "Alexandria, Egypt",
      text: "The Arabic interface and culturally relevant advice made it easy for my entire family to use.",
      avatar: "M",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                {t("hero.badge")}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t("hero.title1")}{" "}
                <span className="text-gradient-primary">{t("hero.title2")}</span>{" "}
                {t("hero.title3")}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                {t("hero.description")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/risk-check">
                    {t("hero.cta")}
                    <ArrowRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/how-it-works">
                    {t("hero.learnMore")}
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <div className={`flex ${isRTL ? "space-x-reverse" : ""} -space-x-3`}>
                  {["A", "S", "M", "F"].map((letter, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm border-2 border-background"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-foreground">50,000+</span>
                  <span className="text-muted-foreground"> {t("hero.assessed")}</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Diverse Middle Eastern family focused on health"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className={`absolute -bottom-6 ${isRTL ? "-right-6" : "-left-6"} bg-card rounded-2xl p-5 shadow-xl border border-border animate-float`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success-light flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Risk Level</p>
                    <p className="font-semibold text-foreground">Low Risk - 12%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("features.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("features.subtitle")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-large transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
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

      {/* How It Works Preview */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("howItWorks.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("howItWorks.subtitle")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: t("howItWorks.step1.title"),
                description: t("howItWorks.step1.description"),
              },
              {
                step: "02",
                title: t("howItWorks.step2.title"),
                description: t("howItWorks.step2.description"),
              },
              {
                step: "03",
                title: t("howItWorks.step3.title"),
                description: t("howItWorks.step3.description"),
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className={`hidden md:block absolute top-8 ${isRTL ? "right-[60%]" : "left-[60%]"} w-[80%] border-t-2 border-dashed border-border`} />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/how-it-works">
                {t("howItWorks.learnMore")}
                <ArrowRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("testimonials.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("testimonials.subtitle")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-large transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <Button 
              variant="secondary" 
              size="xl" 
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link to="/risk-check">
                {t("cta.button")}
                <ArrowRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
