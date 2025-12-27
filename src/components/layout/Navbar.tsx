import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.riskCheck"), path: "/risk-check" },
    { name: t("nav.howItWorks"), path: "/how-it-works" },
    { name: t("nav.features"), path: "/features" },
    { name: t("nav.middleEast"), path: "/middle-east" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.faq"), path: "/faq" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-medium group-hover:shadow-glow transition-shadow duration-300">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Vita</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary-light"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200">
                {t("nav.more")}
              </button>
              <div className="absolute top-full end-0 mt-2 w-48 bg-card rounded-xl shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {navLinks.slice(5).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl ${
                      location.pathname === link.path
                        ? "text-primary bg-primary-light"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Language Switcher & CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <Button variant="hero" size="default" asChild>
              <Link to="/risk-check">{t("nav.checkRisk")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-primary bg-primary-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 py-3">
                <LanguageSwitcher />
              </div>
              <div className="pt-4 px-4">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/risk-check" onClick={() => setIsOpen(false)}>
                    {t("nav.checkRisk")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
