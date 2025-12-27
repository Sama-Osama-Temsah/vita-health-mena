import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation files
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.riskCheck": "Risk Check",
    "nav.howItWorks": "How It Works",
    "nav.features": "Features",
    "nav.middleEast": "For Middle East",
    "nav.about": "About",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.more": "More",
    "nav.checkRisk": "Check Your Risk",
    
    // Hero Section
    "hero.badge": "AI-Powered Health Prediction",
    "hero.title1": "Predict & Prevent",
    "hero.title2": "Diabetes",
    "hero.title3": "Before It Starts",
    "hero.description": "Vita uses advanced AI to assess your diabetes risk based on factors specific to Egyptian and Middle Eastern populations. Take control of your health today.",
    "hero.cta": "Check Your Risk Free",
    "hero.learnMore": "Learn How It Works",
    "hero.assessed": "people assessed",
    
    // Stats
    "stats.accuracy": "Prediction Accuracy",
    "stats.users": "Users Assessed",
    "stats.factors": "Health Factors",
    "stats.available": "Available",
    
    // Features
    "features.title": "Why Choose Vita?",
    "features.subtitle": "Purpose-built for the Middle East with cutting-edge AI technology",
    "features.ai.title": "AI-Powered Prediction",
    "features.ai.description": "Advanced machine learning algorithms analyze your health data to predict diabetes risk with high accuracy.",
    "features.local.title": "Localized for Middle East",
    "features.local.description": "Tailored risk factors and recommendations specifically designed for Egyptian and Middle Eastern populations.",
    "features.privacy.title": "Privacy First",
    "features.privacy.description": "Your health data is encrypted and never shared. We follow the strictest data protection standards.",
    "features.instant.title": "Instant Results",
    "features.instant.description": "Get your personalized risk assessment in minutes, not days. Take action today.",
    
    // How It Works
    "howItWorks.title": "Simple 3-Step Process",
    "howItWorks.subtitle": "Get your personalized risk assessment in minutes",
    "howItWorks.step1.title": "Answer Questions",
    "howItWorks.step1.description": "Complete a simple health questionnaire about your lifestyle, diet, and family history.",
    "howItWorks.step2.title": "AI Analysis",
    "howItWorks.step2.description": "Our AI processes your data using models trained on Middle Eastern population studies.",
    "howItWorks.step3.title": "Get Results",
    "howItWorks.step3.description": "Receive your personalized risk score with actionable prevention recommendations.",
    "howItWorks.learnMore": "Learn More",
    
    // Testimonials
    "testimonials.title": "Trusted by Thousands",
    "testimonials.subtitle": "Real stories from real people across the Middle East",
    
    // CTA
    "cta.title": "Take Control of Your Health Today",
    "cta.description": "Early detection is key to prevention. Check your diabetes risk now and get personalized recommendations for a healthier future.",
    "cta.button": "Start Free Assessment",
    
    // Footer
    "footer.description": "Empowering Egyptians and the Middle East with AI-powered diabetes prediction and prevention tools.",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.contact": "Contact Us",
    "footer.riskAssessment": "Risk Assessment",
    "footer.howItWorks": "How It Works",
    "footer.features": "Features",
    "footer.forMiddleEast": "For Middle East",
    "footer.aboutVita": "About Vita",
    "footer.contactUs": "Contact Us",
    "footer.faq": "FAQ",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",
    "footer.rights": "All rights reserved.",
    
    // Risk Check Page
    "riskCheck.title": "Diabetes Risk Assessment",
    "riskCheck.subtitle": "Answer a few questions to get your personalized risk score",
    "riskCheck.step1": "Personal Info",
    "riskCheck.step2": "Health History",
    "riskCheck.step3": "Lifestyle",
    "riskCheck.step4": "Diet",
    "riskCheck.step5": "Results",
    "riskCheck.personalInfo": "Personal Information",
    "riskCheck.age": "Age",
    "riskCheck.agePlaceholder": "Enter your age",
    "riskCheck.gender": "Gender",
    "riskCheck.male": "Male",
    "riskCheck.female": "Female",
    "riskCheck.weight": "Weight (kg)",
    "riskCheck.weightPlaceholder": "e.g., 70",
    "riskCheck.height": "Height (cm)",
    "riskCheck.heightPlaceholder": "e.g., 175",
    "riskCheck.healthHistory": "Health History",
    "riskCheck.familyDiabetes": "Does anyone in your immediate family have diabetes?",
    "riskCheck.yes": "Yes",
    "riskCheck.no": "No",
    "riskCheck.dontKnow": "I don't know",
    "riskCheck.highBloodPressure": "Have you been diagnosed with high blood pressure?",
    "riskCheck.lifestyleHabits": "Lifestyle Habits",
    "riskCheck.exerciseDays": "How many days per week do you exercise?",
    "riskCheck.days": "days",
    "riskCheck.smoking": "Do you smoke?",
    "riskCheck.formerSmoker": "Former smoker",
    "riskCheck.dietaryHabits": "Dietary Habits",
    "riskCheck.sugaryDrinks": "How often do you consume sugary drinks (sodas, juices)?",
    "riskCheck.daily": "Daily",
    "riskCheck.weekly": "Few times a week",
    "riskCheck.rarely": "Rarely or never",
    "riskCheck.sleepHours": "Average hours of sleep per night",
    "riskCheck.hours": "hours",
    "riskCheck.results": "Your Risk Assessment Results",
    "riskCheck.lowRisk": "Low Risk",
    "riskCheck.moderateRisk": "Moderate Risk",
    "riskCheck.highRisk": "High Risk",
    "riskCheck.recommendations": "Personalized Recommendations",
    "riskCheck.rec1": "Increase physical activity to at least 150 minutes per week",
    "riskCheck.rec2": "Reduce consumption of processed foods and sugary drinks",
    "riskCheck.rec3": "Maintain a healthy sleep schedule of 7-8 hours",
    "riskCheck.rec4": "Schedule regular check-ups with your healthcare provider",
    "riskCheck.rec5": "Consider traditional Middle Eastern diet rich in vegetables and whole grains",
    "riskCheck.disclaimer": "This is a screening tool, not a diagnosis. Please consult a healthcare professional.",
    "riskCheck.back": "Back",
    "riskCheck.next": "Next",
    "riskCheck.startOver": "Start Over",
    "riskCheck.downloadReport": "Download Report",
    
    // Common
    "common.learnMore": "Learn More",
    "common.startAssessment": "Start Your Assessment",
    "common.freeAssessment": "Start Free Assessment",
    "common.readyToKnow": "Ready to Know Your Risk?",
    "common.readyDescription": "Take the first step towards a healthier future. Our assessment is free, confidential, and takes just 5 minutes.",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.riskCheck": "فحص المخاطر",
    "nav.howItWorks": "كيف يعمل",
    "nav.features": "المميزات",
    "nav.middleEast": "للشرق الأوسط",
    "nav.about": "عن فيتا",
    "nav.faq": "الأسئلة الشائعة",
    "nav.contact": "اتصل بنا",
    "nav.more": "المزيد",
    "nav.checkRisk": "افحص مخاطرك",
    
    // Hero Section
    "hero.badge": "تنبؤ صحي مدعوم بالذكاء الاصطناعي",
    "hero.title1": "توقّع وامنع",
    "hero.title2": "السكري",
    "hero.title3": "قبل أن يبدأ",
    "hero.description": "يستخدم فيتا الذكاء الاصطناعي المتقدم لتقييم مخاطر إصابتك بالسكري بناءً على عوامل خاصة بسكان مصر والشرق الأوسط. تحكم في صحتك اليوم.",
    "hero.cta": "افحص مخاطرك مجاناً",
    "hero.learnMore": "تعرف كيف يعمل",
    "hero.assessed": "شخص تم تقييمهم",
    
    // Stats
    "stats.accuracy": "دقة التنبؤ",
    "stats.users": "المستخدمون المقيّمون",
    "stats.factors": "عوامل الصحة",
    "stats.available": "متاح",
    
    // Features
    "features.title": "لماذا تختار فيتا؟",
    "features.subtitle": "مصمم خصيصاً للشرق الأوسط بتقنية الذكاء الاصطناعي المتطورة",
    "features.ai.title": "تنبؤ بالذكاء الاصطناعي",
    "features.ai.description": "خوارزميات تعلم آلي متقدمة تحلل بياناتك الصحية للتنبؤ بمخاطر السكري بدقة عالية.",
    "features.local.title": "مخصص للشرق الأوسط",
    "features.local.description": "عوامل خطر وتوصيات مصممة خصيصاً للسكان المصريين والشرق أوسطيين.",
    "features.privacy.title": "الخصوصية أولاً",
    "features.privacy.description": "بياناتك الصحية مشفرة ولا تُشارك أبداً. نتبع أصرم معايير حماية البيانات.",
    "features.instant.title": "نتائج فورية",
    "features.instant.description": "احصل على تقييم المخاطر الشخصي في دقائق، وليس أيام. اتخذ إجراءً اليوم.",
    
    // How It Works
    "howItWorks.title": "عملية بسيطة من 3 خطوات",
    "howItWorks.subtitle": "احصل على تقييم المخاطر الشخصي في دقائق",
    "howItWorks.step1.title": "أجب على الأسئلة",
    "howItWorks.step1.description": "أكمل استبياناً صحياً بسيطاً عن نمط حياتك ونظامك الغذائي وتاريخ عائلتك.",
    "howItWorks.step2.title": "تحليل الذكاء الاصطناعي",
    "howItWorks.step2.description": "يعالج الذكاء الاصطناعي بياناتك باستخدام نماذج مدربة على دراسات سكان الشرق الأوسط.",
    "howItWorks.step3.title": "احصل على النتائج",
    "howItWorks.step3.description": "استلم نتيجة المخاطر الشخصية مع توصيات وقائية قابلة للتنفيذ.",
    "howItWorks.learnMore": "اعرف المزيد",
    
    // Testimonials
    "testimonials.title": "موثوق من الآلاف",
    "testimonials.subtitle": "قصص حقيقية من أشخاص حقيقيين عبر الشرق الأوسط",
    
    // CTA
    "cta.title": "تحكم في صحتك اليوم",
    "cta.description": "الكشف المبكر هو مفتاح الوقاية. افحص مخاطر السكري الآن واحصل على توصيات شخصية لمستقبل أكثر صحة.",
    "cta.button": "ابدأ التقييم المجاني",
    
    // Footer
    "footer.description": "تمكين المصريين والشرق الأوسط بأدوات التنبؤ والوقاية من السكري المدعومة بالذكاء الاصطناعي.",
    "footer.product": "المنتج",
    "footer.company": "الشركة",
    "footer.contact": "اتصل بنا",
    "footer.riskAssessment": "تقييم المخاطر",
    "footer.howItWorks": "كيف يعمل",
    "footer.features": "المميزات",
    "footer.forMiddleEast": "للشرق الأوسط",
    "footer.aboutVita": "عن فيتا",
    "footer.contactUs": "اتصل بنا",
    "footer.faq": "الأسئلة الشائعة",
    "footer.privacyPolicy": "سياسة الخصوصية",
    "footer.termsOfService": "شروط الخدمة",
    "footer.rights": "جميع الحقوق محفوظة.",
    
    // Risk Check Page
    "riskCheck.title": "تقييم مخاطر السكري",
    "riskCheck.subtitle": "أجب على بعض الأسئلة للحصول على نتيجة المخاطر الشخصية",
    "riskCheck.step1": "معلومات شخصية",
    "riskCheck.step2": "التاريخ الصحي",
    "riskCheck.step3": "نمط الحياة",
    "riskCheck.step4": "النظام الغذائي",
    "riskCheck.step5": "النتائج",
    "riskCheck.personalInfo": "المعلومات الشخصية",
    "riskCheck.age": "العمر",
    "riskCheck.agePlaceholder": "أدخل عمرك",
    "riskCheck.gender": "الجنس",
    "riskCheck.male": "ذكر",
    "riskCheck.female": "أنثى",
    "riskCheck.weight": "الوزن (كجم)",
    "riskCheck.weightPlaceholder": "مثال: 70",
    "riskCheck.height": "الطول (سم)",
    "riskCheck.heightPlaceholder": "مثال: 175",
    "riskCheck.healthHistory": "التاريخ الصحي",
    "riskCheck.familyDiabetes": "هل يعاني أحد من عائلتك المباشرة من السكري؟",
    "riskCheck.yes": "نعم",
    "riskCheck.no": "لا",
    "riskCheck.dontKnow": "لا أعرف",
    "riskCheck.highBloodPressure": "هل تم تشخيصك بارتفاع ضغط الدم؟",
    "riskCheck.lifestyleHabits": "عادات نمط الحياة",
    "riskCheck.exerciseDays": "كم يوماً في الأسبوع تمارس الرياضة؟",
    "riskCheck.days": "أيام",
    "riskCheck.smoking": "هل تدخن؟",
    "riskCheck.formerSmoker": "مدخن سابق",
    "riskCheck.dietaryHabits": "العادات الغذائية",
    "riskCheck.sugaryDrinks": "كم مرة تستهلك المشروبات السكرية (المشروبات الغازية، العصائر)؟",
    "riskCheck.daily": "يومياً",
    "riskCheck.weekly": "عدة مرات في الأسبوع",
    "riskCheck.rarely": "نادراً أو أبداً",
    "riskCheck.sleepHours": "متوسط ساعات النوم في الليلة",
    "riskCheck.hours": "ساعات",
    "riskCheck.results": "نتائج تقييم المخاطر الخاصة بك",
    "riskCheck.lowRisk": "خطر منخفض",
    "riskCheck.moderateRisk": "خطر متوسط",
    "riskCheck.highRisk": "خطر مرتفع",
    "riskCheck.recommendations": "التوصيات الشخصية",
    "riskCheck.rec1": "زد النشاط البدني إلى 150 دقيقة على الأقل في الأسبوع",
    "riskCheck.rec2": "قلل استهلاك الأطعمة المصنعة والمشروبات السكرية",
    "riskCheck.rec3": "حافظ على جدول نوم صحي من 7-8 ساعات",
    "riskCheck.rec4": "حدد مواعيد فحوصات منتظمة مع مقدم الرعاية الصحية",
    "riskCheck.rec5": "فكر في النظام الغذائي الشرق أوسطي التقليدي الغني بالخضروات والحبوب الكاملة",
    "riskCheck.disclaimer": "هذه أداة فحص وليست تشخيصاً. يرجى استشارة أخصائي رعاية صحية.",
    "riskCheck.back": "رجوع",
    "riskCheck.next": "التالي",
    "riskCheck.startOver": "ابدأ من جديد",
    "riskCheck.downloadReport": "تحميل التقرير",
    
    // Common
    "common.learnMore": "اعرف المزيد",
    "common.startAssessment": "ابدأ التقييم",
    "common.freeAssessment": "ابدأ التقييم المجاني",
    "common.readyToKnow": "هل أنت مستعد لمعرفة مخاطرك؟",
    "common.readyDescription": "اتخذ الخطوة الأولى نحو مستقبل أكثر صحة. تقييمنا مجاني وسري ويستغرق 5 دقائق فقط.",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("vita-language");
    return (saved as Language) || "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("vita-language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
