import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Heart,
  Target,
  Eye,
  Users,
  Globe
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: t("aboutPage.values.health"), description: t("aboutPage.values.healthDesc") },
    { icon: Target, title: t("aboutPage.values.accuracy"), description: t("aboutPage.values.accuracyDesc") },
    { icon: Users, title: t("aboutPage.values.accessibility"), description: t("aboutPage.values.accessibilityDesc") },
    { icon: Globe, title: t("aboutPage.values.cultural"), description: t("aboutPage.values.culturalDesc") },
  ];

  const team = [
    { name: t("aboutPage.team.amira.name"), role: t("aboutPage.team.amira.role"), bio: t("aboutPage.team.amira.bio") },
    { name: t("aboutPage.team.mahmoud.name"), role: t("aboutPage.team.mahmoud.role"), bio: t("aboutPage.team.mahmoud.bio") },
    { name: t("aboutPage.team.sara.name"), role: t("aboutPage.team.sara.role"), bio: t("aboutPage.team.sara.bio") },
    { name: t("aboutPage.team.khaled.name"), role: t("aboutPage.team.khaled.role"), bio: t("aboutPage.team.khaled.bio") },
  ];

  const milestones = [
    { year: "2022", event: t("aboutPage.journey.2022a") },
    { year: "2022", event: t("aboutPage.journey.2022b") },
    { year: "2023", event: t("aboutPage.journey.2023a") },
    { year: "2023", event: t("aboutPage.journey.2023b") },
    { year: "2024", event: t("aboutPage.journey.2024a") },
    { year: "2024", event: t("aboutPage.journey.2024b") },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("aboutPage.hero.title")} <span className="text-gradient-primary">{t("aboutPage.hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t("aboutPage.hero.description")}
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
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("aboutPage.mission.title")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("aboutPage.mission.description")}
              </p>
            </div>
            
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
              <div className="w-16 h-16 rounded-2xl bg-accent-light flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("aboutPage.vision.title")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("aboutPage.vision.description")}
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
                {t("aboutPage.story.title")}
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">{t("aboutPage.story.p1")}</p>
              <p className="text-lg leading-relaxed mb-6">{t("aboutPage.story.p2")}</p>
              <p className="text-lg leading-relaxed">{t("aboutPage.story.p3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("aboutPage.values.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("aboutPage.values.subtitle")}
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
              {t("aboutPage.team.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("aboutPage.team.subtitle")}
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
              {t("aboutPage.journey.title")}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute start-4 md:start-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-6 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-end" : "md:text-start"} ps-12 md:ps-0`}>
                    <span className="text-primary font-bold">{milestone.year}</span>
                    <p className="text-foreground">{milestone.event}</p>
                  </div>
                  <div className="absolute start-4 md:start-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2" />
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
            {t("aboutPage.cta.title")}
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {t("aboutPage.cta.description")}
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link to="/risk-check">
              {t("common.startAssessment")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
