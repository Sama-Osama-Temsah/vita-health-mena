import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  MapPin,
  Heart,
  Utensils,
  Users,
  TrendingUp,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MiddleEast = () => {
  const { t } = useLanguage();

  const statistics = [
    { value: "17%", label: t("middleEastPage.stats.prevalence") },
    { value: "1 in 5", label: t("middleEastPage.stats.adults") },
    { value: "50%", label: t("middleEastPage.stats.undiagnosed") },
    { value: "#1", label: t("middleEastPage.stats.growing") },
  ];

  const regionalFactors = [
    {
      icon: Utensils,
      title: t("middleEastPage.factors.diet.title"),
      description: t("middleEastPage.factors.diet.description"),
      factors: [
        t("middleEastPage.factors.diet.item1"),
        t("middleEastPage.factors.diet.item2"),
        t("middleEastPage.factors.diet.item3"),
        t("middleEastPage.factors.diet.item4"),
      ],
    },
    {
      icon: Users,
      title: t("middleEastPage.factors.genetics.title"),
      description: t("middleEastPage.factors.genetics.description"),
      factors: [
        t("middleEastPage.factors.genetics.item1"),
        t("middleEastPage.factors.genetics.item2"),
        t("middleEastPage.factors.genetics.item3"),
        t("middleEastPage.factors.genetics.item4"),
      ],
    },
    {
      icon: TrendingUp,
      title: t("middleEastPage.factors.lifestyle.title"),
      description: t("middleEastPage.factors.lifestyle.description"),
      factors: [
        t("middleEastPage.factors.lifestyle.item1"),
        t("middleEastPage.factors.lifestyle.item2"),
        t("middleEastPage.factors.lifestyle.item3"),
        t("middleEastPage.factors.lifestyle.item4"),
      ],
    },
    {
      icon: Heart,
      title: t("middleEastPage.factors.awareness.title"),
      description: t("middleEastPage.factors.awareness.description"),
      factors: [
        t("middleEastPage.factors.awareness.item1"),
        t("middleEastPage.factors.awareness.item2"),
        t("middleEastPage.factors.awareness.item3"),
        t("middleEastPage.factors.awareness.item4"),
      ],
    },
  ];

  const countries = [
    { name: t("middleEastPage.countries.egypt"), prevalence: "17.2%", flag: "🇪🇬" },
    { name: t("middleEastPage.countries.saudi"), prevalence: "18.7%", flag: "🇸🇦" },
    { name: t("middleEastPage.countries.uae"), prevalence: "16.3%", flag: "🇦🇪" },
    { name: t("middleEastPage.countries.kuwait"), prevalence: "22.0%", flag: "🇰🇼" },
    { name: t("middleEastPage.countries.qatar"), prevalence: "15.5%", flag: "🇶🇦" },
    { name: t("middleEastPage.countries.bahrain"), prevalence: "16.6%", flag: "🇧🇭" },
  ];

  const whyItems = [
    t("middleEastPage.why.item1"),
    t("middleEastPage.why.item2"),
    t("middleEastPage.why.item3"),
    t("middleEastPage.why.item4"),
    t("middleEastPage.why.item5"),
    t("middleEastPage.why.item6"),
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light text-accent text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              {t("middleEastPage.hero.badge")}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("middleEastPage.hero.title")} <span className="text-gradient-primary">{t("middleEastPage.hero.titleHighlight")}</span> {t("middleEastPage.hero.titleEnd")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {t("middleEastPage.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Factors */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("middleEastPage.factors.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("middleEastPage.factors.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {regionalFactors.map((factor, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-large transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                    <factor.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {factor.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {factor.description}
                    </p>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-3">
                  {factor.factors.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Prevalence */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("middleEastPage.prevalence.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("middleEastPage.prevalence.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {countries.map((country, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-medium transition-shadow duration-300"
              >
                <span className="text-4xl mb-3 block">{country.flag}</span>
                <h3 className="font-semibold text-foreground mb-1">{country.name}</h3>
                <p className="text-xl font-bold text-accent">{country.prevalence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vita for Middle East */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("middleEastPage.why.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("middleEastPage.why.description")}
              </p>
              
              <ul className="space-y-4">
                {whyItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-accent-light rounded-3xl p-8 md:p-12">
              <AlertCircle className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t("middleEastPage.didYouKnow")}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("middleEastPage.didYouKnowText")}
              </p>
              <p className="text-foreground font-medium">
                {t("middleEastPage.didYouKnowCta")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("middleEastPage.cta.title")}
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {t("middleEastPage.cta.description")}
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link to="/risk-check">
              {t("middleEastPage.cta.button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default MiddleEast;
