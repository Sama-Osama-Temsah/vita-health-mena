import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  AlertTriangle,
  Activity,
  Heart,
  User,
  Utensils
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const RiskCheck = () => {
  const { t, isRTL } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    weight: "",
    height: "",
    familyHistory: "",
    bloodPressure: "",
    physicalActivity: [3],
    smoking: "",
    sweetDrinks: "",
    processedFood: "",
    sleep: [7],
  });

  const steps = [
    { id: 1, title: t("riskCheck.step1"), icon: User },
    { id: 2, title: t("riskCheck.step2"), icon: Heart },
    { id: 3, title: t("riskCheck.step3"), icon: Activity },
    { id: 4, title: t("riskCheck.step4"), icon: Utensils },
    { id: 5, title: t("riskCheck.step5"), icon: CheckCircle },
  ];

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateRisk = () => {
    let riskScore = 15;
    if (formData.familyHistory === "yes") riskScore += 20;
    if (parseInt(formData.age) > 45) riskScore += 15;
    if (formData.physicalActivity[0] < 3) riskScore += 10;
    if (formData.smoking === "yes") riskScore += 15;
    if (formData.sweetDrinks === "daily") riskScore += 10;
    return Math.min(riskScore, 100);
  };

  const getRiskLevel = (score: number) => {
    if (score < 30) return { level: t("riskCheck.lowRisk"), color: "text-success", bg: "bg-success-light" };
    if (score < 60) return { level: t("riskCheck.moderateRisk"), color: "text-warning", bg: "bg-accent-light" };
    return { level: t("riskCheck.highRisk"), color: "text-destructive", bg: "bg-destructive/10" };
  };

  const recommendations = [
    t("riskCheck.rec1"),
    t("riskCheck.rec2"),
    t("riskCheck.rec3"),
    t("riskCheck.rec4"),
    t("riskCheck.rec5"),
  ];

  const NextIcon = isRTL ? ArrowLeft : ArrowRight;
  const BackIcon = isRTL ? ArrowRight : ArrowLeft;

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-hero min-h-[calc(100vh-5rem)]">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("riskCheck.title")}
            </h1>
            <p className="text-muted-foreground">
              {t("riskCheck.subtitle")}
            </p>
          </div>

          {/* Progress */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex justify-between mb-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex flex-col items-center ${
                    step.id <= currentStep ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                      step.id <= currentStep
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium hidden sm:block">{step.title}</span>
                </div>
              ))}
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Form Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-10">
              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    {t("riskCheck.personalInfo")}
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="age">{t("riskCheck.age")}</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder={t("riskCheck.agePlaceholder")}
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>{t("riskCheck.gender")}</Label>
                      <RadioGroup
                        value={formData.gender}
                        onValueChange={(value) => setFormData({ ...formData, gender: value })}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male" className="cursor-pointer">{t("riskCheck.male")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female" className="cursor-pointer">{t("riskCheck.female")}</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="weight">{t("riskCheck.weight")}</Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder={t("riskCheck.weightPlaceholder")}
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="height">{t("riskCheck.height")}</Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder={t("riskCheck.heightPlaceholder")}
                        value={formData.height}
                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Health History */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    {t("riskCheck.healthHistory")}
                  </h2>
                  
                  <div className="space-y-4">
                    <Label>{t("riskCheck.familyDiabetes")}</Label>
                    <RadioGroup
                      value={formData.familyHistory}
                      onValueChange={(value) => setFormData({ ...formData, familyHistory: value })}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="yes" id="fh-yes" />
                        <Label htmlFor="fh-yes" className="cursor-pointer flex-1">{t("riskCheck.yes")}</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="no" id="fh-no" />
                        <Label htmlFor="fh-no" className="cursor-pointer flex-1">{t("riskCheck.no")}</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="unknown" id="fh-unknown" />
                        <Label htmlFor="fh-unknown" className="cursor-pointer flex-1">{t("riskCheck.dontKnow")}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-4">
                    <Label>{t("riskCheck.highBloodPressure")}</Label>
                    <RadioGroup
                      value={formData.bloodPressure}
                      onValueChange={(value) => setFormData({ ...formData, bloodPressure: value })}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="yes" id="bp-yes" />
                        <Label htmlFor="bp-yes" className="cursor-pointer flex-1">{t("riskCheck.yes")}</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="no" id="bp-no" />
                        <Label htmlFor="bp-no" className="cursor-pointer flex-1">{t("riskCheck.no")}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* Step 3: Lifestyle */}
              {currentStep === 3 && (
                <div className="space-y-8 animate-fade-in">
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    {t("riskCheck.lifestyleHabits")}
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>{t("riskCheck.exerciseDays")}</Label>
                      <span className="font-semibold text-primary">{formData.physicalActivity[0]} {t("riskCheck.days")}</span>
                    </div>
                    <Slider
                      value={formData.physicalActivity}
                      onValueChange={(value) => setFormData({ ...formData, physicalActivity: value })}
                      max={7}
                      step={1}
                      className="py-4"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>0 {t("riskCheck.days")}</span>
                      <span>7 {t("riskCheck.days")}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Label>{t("riskCheck.smoking")}</Label>
                    <RadioGroup
                      value={formData.smoking}
                      onValueChange={(value) => setFormData({ ...formData, smoking: value })}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="yes" id="smoke-yes" />
                        <Label htmlFor="smoke-yes" className="cursor-pointer flex-1">{t("riskCheck.yes")}</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="no" id="smoke-no" />
                        <Label htmlFor="smoke-no" className="cursor-pointer flex-1">{t("riskCheck.no")}</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="former" id="smoke-former" />
                        <Label htmlFor="smoke-former" className="cursor-pointer flex-1">{t("riskCheck.formerSmoker")}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* Step 4: Diet */}
              {currentStep === 4 && (
                <div className="space-y-8 animate-fade-in">
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    {t("riskCheck.dietaryHabits")}
                  </h2>
                  
                  <div className="space-y-4">
                    <Label>{t("riskCheck.sugaryDrinks")}</Label>
                    <RadioGroup
                      value={formData.sweetDrinks}
                      onValueChange={(value) => setFormData({ ...formData, sweetDrinks: value })}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="daily" id="drink-daily" />
                        <Label htmlFor="drink-daily" className="cursor-pointer flex-1">{t("riskCheck.daily")}</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="weekly" id="drink-weekly" />
                        <Label htmlFor="drink-weekly" className="cursor-pointer flex-1">{t("riskCheck.weekly")}</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="rarely" id="drink-rarely" />
                        <Label htmlFor="drink-rarely" className="cursor-pointer flex-1">{t("riskCheck.rarely")}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>{t("riskCheck.sleepHours")}</Label>
                      <span className="font-semibold text-primary">{formData.sleep[0]} {t("riskCheck.hours")}</span>
                    </div>
                    <Slider
                      value={formData.sleep}
                      onValueChange={(value) => setFormData({ ...formData, sleep: value })}
                      min={4}
                      max={12}
                      step={0.5}
                      className="py-4"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>4 {t("riskCheck.hours")}</span>
                      <span>12 {t("riskCheck.hours")}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Results */}
              {currentStep === 5 && (
                <div className="text-center animate-fade-in">
                  <h2 className="text-xl font-semibold text-foreground mb-8">
                    {t("riskCheck.results")}
                  </h2>
                  
                  {(() => {
                    const score = calculateRisk();
                    const risk = getRiskLevel(score);
                    return (
                      <div className="space-y-8">
                        <div className={`inline-flex flex-col items-center p-8 rounded-3xl ${risk.bg}`}>
                          <span className={`text-6xl font-bold ${risk.color} mb-2`}>
                            {score}%
                          </span>
                          <span className={`text-xl font-semibold ${risk.color}`}>
                            {risk.level}
                          </span>
                        </div>
                        
                        <div className="bg-secondary/50 rounded-xl p-6 text-start">
                          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-primary" />
                            {t("riskCheck.recommendations")}
                          </h3>
                          <ul className="space-y-3">
                            {recommendations.map((rec, i) => (
                              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <span>{rec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-muted p-4 rounded-xl">
                          <AlertTriangle className="w-4 h-4" />
                          <span>{t("riskCheck.disclaimer")}</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                {currentStep > 1 && currentStep < 5 ? (
                  <Button variant="outline" onClick={handleBack}>
                    <BackIcon className="w-4 h-4" />
                    {t("riskCheck.back")}
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < 4 && (
                  <Button variant="hero" onClick={handleNext}>
                    {t("riskCheck.next")}
                    <NextIcon className="w-4 h-4" />
                  </Button>
                )}

                {currentStep === 4 && (
                  <Button variant="hero" onClick={handleNext}>
                    {t("riskCheck.step5")}
                    <NextIcon className="w-4 h-4" />
                  </Button>
                )}

                {currentStep === 5 && (
                  <div className="flex gap-4 w-full">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        setCurrentStep(1);
                        setFormData({
                          age: "",
                          gender: "",
                          weight: "",
                          height: "",
                          familyHistory: "",
                          bloodPressure: "",
                          physicalActivity: [3],
                          smoking: "",
                          sweetDrinks: "",
                          processedFood: "",
                          sleep: [7],
                        });
                      }}
                    >
                      {t("riskCheck.startOver")}
                    </Button>
                    <Button variant="hero" className="flex-1">
                      {t("riskCheck.downloadReport")}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RiskCheck;
