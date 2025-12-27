import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
      aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <Globe className="w-4 h-4" />
      <span>{language === "en" ? "العربية" : "English"}</span>
    </button>
  );
};
