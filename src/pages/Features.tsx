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
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();

  const mainFeatures = [
    {
      icon: Brain,
      title: t("featuresPage.main.ai.title"),
      description: t("featuresPage.main.ai.description"),
      highlight: t("featuresPage.main.ai.highlight"),
    },
    {
      icon: Globe,
      title: t("featuresPage.main.regional.title"),
      description: t("featuresPage.main.regional.description"),
      highlight: t("featuresPage.main.regional.highlight"),
    },
    {
      icon: Shield,
      title: t("featuresPage.main.privacy.title"),
      description: t("featuresPage.main.privacy.description"),
      highlight: t("featuresPage.main.privacy.highlight"),
    },
    {
      icon: Zap,
      title: t("featuresPage.main.instant.title"),
      description: t("featuresPage.main.instant.description"),
      highlight: t("featuresPage.main.instant.highlight"),
    },
  ];

  const additionalFeatures = [
    { icon: HeartPulse, title: t("featuresPage.additional.recommendations"), description: t("featuresPage.additional.recommendationsDesc") },
    { icon: Languages, title: t("featuresPage.additional.arabic"), description: t("featuresPage.additional.arabicDesc") },
    { icon: Smartphone, title: t("featuresPage.additional.mobile"), description: t("featuresPage.additional.mobileDesc") },
    { icon: BarChart3, title: t("featuresPage.additional.tracking"), description: t("featuresPage.additional.trackingDesc") },
    { icon: Bell, title: t("featuresPage.additional.reminders"), description: t("featuresPage.additional.remindersDesc") },
    { icon: Clock, title: t("featuresPage.additional.availability"), description: t("featuresPage.additional.availabilityDesc") },
    { icon: Users, title: t("featuresPage.additional.family"), description: t("featuresPage.additional.familyDesc") },
    { icon: Globe, title: t("featuresPage.additional.education"), description: t("featuresPage.additional.educationDesc") },
  ];

  const comparisonRows = [
    [t("featuresPage.comparison.time"), t("featuresPage.comparison.timeVita"), t("featuresPage.comparison.timeTraditional")],
    [t("featuresPage.comparison.cost"), t("featuresPage.comparison.costVita"), t("featuresPage.comparison.costTraditional")],
    [t("featuresPage.comparison.calibration"), "✓", "✗"],
    [t("featuresPage.comparison.arabicSupport"), "✓", t("featuresPage.comparison.arabicTraditional")],
    [t("featuresPage.comparison.availabilityLabel"), "✓", "✗"],
    [t("featuresPage.comparison.privacyLabel"), t("featuresPage.comparison.privacyVita"), t("featuresPage.comparison.privacyTraditional")],
    [t("featuresPage.comparison.tips"), "✓", t("featuresPage.comparison.tipsTraditional")],
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("featuresPage.hero.title")} <span className="text-gradient-primary">{t("featuresPage.hero.titleHighlight")}</span> {t("featuresPage.hero.titleEnd")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {t("featuresPage.hero.description")}
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
                <div className="absolute top-4 end-4">
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
              {t("featuresPage.additional.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("featuresPage.additional.subtitle")}
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
              {t("featuresPage.comparison.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("featuresPage.comparison.subtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-start py-4 px-4 font-semibold text-foreground">{t("featuresPage.comparison.feature")}</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">{t("featuresPage.comparison.vita")}</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground">{t("featuresPage.comparison.traditional")}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
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
            {t("featuresPage.cta.title")}
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {t("featuresPage.cta.description")}
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
      </section>
    </Layout>
  );
};

export default Features;
