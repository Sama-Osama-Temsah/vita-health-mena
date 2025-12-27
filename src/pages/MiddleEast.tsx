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

const statistics = [
  { value: "17%", label: "Diabetes prevalence in Egypt" },
  { value: "1 in 5", label: "Adults affected in Middle East" },
  { value: "50%", label: "Cases remain undiagnosed" },
  { value: "#1", label: "Fastest growing health concern" },
];

const regionalFactors = [
  {
    icon: Utensils,
    title: "Dietary Patterns",
    description: "Traditional Middle Eastern cuisine, while rich in healthy options, has evolved to include more processed foods and sugary beverages, increasing diabetes risk.",
    factors: ["High rice and bread consumption", "Sweet tea culture", "Growing fast food adoption", "Traditional sweets and desserts"],
  },
  {
    icon: Users,
    title: "Genetic Predisposition",
    description: "Research shows that populations in the MENA region may have genetic factors that increase susceptibility to type 2 diabetes.",
    factors: ["Family history patterns", "Genetic markers specific to region", "Consanguinity effects", "Ethnic susceptibility factors"],
  },
  {
    icon: TrendingUp,
    title: "Lifestyle Changes",
    description: "Rapid urbanization and modernization have led to more sedentary lifestyles and reduced physical activity across the region.",
    factors: ["Decreased walking habits", "Car-dependent transportation", "Office-based work increase", "Less outdoor activities"],
  },
  {
    icon: Heart,
    title: "Health Awareness",
    description: "Many cases go undiagnosed due to limited awareness about diabetes symptoms and the importance of regular screening.",
    factors: ["Delayed symptom recognition", "Stigma around chronic disease", "Limited screening access", "Prevention knowledge gaps"],
  },
];

const countries = [
  { name: "Egypt", prevalence: "17.2%", flag: "🇪🇬" },
  { name: "Saudi Arabia", prevalence: "18.7%", flag: "🇸🇦" },
  { name: "UAE", prevalence: "16.3%", flag: "🇦🇪" },
  { name: "Kuwait", prevalence: "22.0%", flag: "🇰🇼" },
  { name: "Qatar", prevalence: "15.5%", flag: "🇶🇦" },
  { name: "Bahrain", prevalence: "16.6%", flag: "🇧🇭" },
];

const MiddleEast = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light text-accent text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Designed for Our Region
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Built for <span className="text-gradient-primary">Egyptians</span> & the Middle East
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              The Middle East faces one of the highest diabetes rates globally. Vita is 
              specifically designed to address the unique health challenges of our region.
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
              Understanding Regional Risk Factors
            </h2>
            <p className="text-lg text-muted-foreground">
              Our AI model accounts for factors unique to the Middle Eastern population
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
              Diabetes Prevalence Across the Region
            </h2>
            <p className="text-lg text-muted-foreground">
              Adult diabetes rates in Middle Eastern countries (IDF Atlas 2023)
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
                Why Vita is Different for Our Region
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Generic diabetes risk calculators miss crucial factors specific to our 
                population. Vita was built from the ground up with Middle Eastern health 
                data and cultural context.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Trained on Egyptian and Middle Eastern health studies",
                  "Accounts for regional dietary patterns (rice, bread, sweets)",
                  "Considers genetic factors common in MENA populations",
                  "Arabic language support for accessibility",
                  "Culturally relevant lifestyle recommendations",
                  "Understands local healthcare context",
                ].map((item, index) => (
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
                Did You Know?
              </h3>
              <p className="text-muted-foreground mb-6">
                Studies show that standard diabetes risk calculators developed for 
                Western populations can underestimate risk by up to 30% when applied 
                to Middle Eastern individuals.
              </p>
              <p className="text-foreground font-medium">
                That's why Vita uses region-specific models for more accurate predictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Accurate Risk Assessment
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of Egyptians and Middle Easterners who have already 
            discovered their true diabetes risk with Vita.
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link to="/risk-check">
              Check Your Risk Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default MiddleEast;
