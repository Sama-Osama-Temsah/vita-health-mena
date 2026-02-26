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
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: t("howItWorksPage.step1.title"),
      description: t("howItWorksPage.step1.description"),
      details: [
        t("howItWorksPage.step1.detail1"),
        t("howItWorksPage.step1.detail2"),
        t("howItWorksPage.step1.detail3"),
        t("howItWorksPage.step1.detail4"),
      ],
    },
    {
      number: "02",
      icon: Cpu,
      title: t("howItWorksPage.step2.title"),
      description: t("howItWorksPage.step2.description"),
      details: [
        t("howItWorksPage.step2.detail1"),
        t("howItWorksPage.step2.detail2"),
        t("howItWorksPage.step2.detail3"),
        t("howItWorksPage.step2.detail4"),
      ],
    },
    {
      number: "03",
      icon: FileBarChart,
      title: t("howItWorksPage.step3.title"),
      description: t("howItWorksPage.step3.description"),
      details: [
        t("howItWorksPage.step3.detail1"),
        t("howItWorksPage.step3.detail2"),
        t("howItWorksPage.step3.detail3"),
        t("howItWorksPage.step3.detail4"),
      ],
    },
  ];

  const technologies = [
    { icon: Database, title: t("howItWorksPage.tech.bigData"), description: t("howItWorksPage.tech.bigDataDesc") },
    { icon: Cpu, title: t("howItWorksPage.tech.ml"), description: t("howItWorksPage.tech.mlDesc") },
    { icon: Shield, title: t("howItWorksPage.tech.secure"), description: t("howItWorksPage.tech.secureDesc") },
    { icon: Users, title: t("howItWorksPage.tech.regional"), description: t("howItWorksPage.tech.regionalDesc") },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("howItWorksPage.hero.title")} <span className="text-gradient-primary">{t("howItWorksPage.hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {t("howItWorksPage.hero.description")}
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/risk-check">
                {t("howItWorksPage.hero.cta")}
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
              {t("howItWorksPage.tech.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("howItWorksPage.tech.description")}
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
              {t("common.readyToKnow")}
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {t("common.readyDescription")}
            </p>
            <Button 
              variant="secondary" 
              size="xl"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link to="/risk-check">
                {t("common.freeAssessment")}
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
