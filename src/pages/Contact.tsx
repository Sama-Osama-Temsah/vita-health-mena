import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  HeadphonesIcon
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { icon: Mail, title: t("contactPage.info.email"), details: t("contactPage.info.emailAddress"), subtext: t("contactPage.info.emailSub") },
    { icon: Phone, title: t("contactPage.info.phone"), details: t("contactPage.info.phoneNumber"), subtext: t("contactPage.info.phoneSub") },
    { icon: MapPin, title: t("contactPage.info.visit"), details: t("contactPage.info.visitAddress"), subtext: t("contactPage.info.visitSub") },
    { icon: Clock, title: t("contactPage.info.hours"), details: t("contactPage.info.hoursDetail"), subtext: t("contactPage.info.hoursSub") },
  ];

  const contactReasons = [
    t("contactPage.form.reasons.general"),
    t("contactPage.form.reasons.technical"),
    t("contactPage.form.reasons.partnership"),
    t("contactPage.form.reasons.media"),
    t("contactPage.form.reasons.privacy"),
    t("contactPage.form.reasons.other"),
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: t("contactPage.form.success"),
      description: t("contactPage.form.successDesc"),
    });
    setFormData({ name: "", email: "", reason: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("contactPage.hero.title")} <span className="text-gradient-primary">{t("contactPage.hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t("contactPage.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-medium transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                <p className="text-foreground font-medium">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Support */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-large">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {t("contactPage.form.title")}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("contactPage.form.subtitle")}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contactPage.form.name")}</Label>
                    <Input
                      id="name"
                      placeholder={t("contactPage.form.namePlaceholder")}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contactPage.form.email")}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("contactPage.form.emailPlaceholder")}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">{t("contactPage.form.reason")}</Label>
                  <select
                    id="reason"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full h-11 rounded-lg border border-input bg-background px-3 py-2 text-foreground ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    required
                  >
                    <option value="">{t("contactPage.form.reasonPlaceholder")}</option>
                    {contactReasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("contactPage.form.message")}</Label>
                  <Textarea
                    id="message"
                    placeholder={t("contactPage.form.messagePlaceholder")}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    t("contactPage.form.sending")
                  ) : (
                    <>
                      {t("contactPage.form.send")}
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Support Info */}
            <div className="space-y-8">
              <div className="bg-primary-light rounded-3xl p-8 md:p-10">
                <HeadphonesIcon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t("contactPage.support.title")}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t("contactPage.support.description")}
                </p>
                <ul className="space-y-3">
                  {[
                    t("contactPage.support.item1"),
                    t("contactPage.support.item2"),
                    t("contactPage.support.item3"),
                    t("contactPage.support.item4"),
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-3xl p-8 md:p-10 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {t("contactPage.partnership.title")}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t("contactPage.partnership.description")}
                </p>
                <p className="text-foreground font-medium">
                  partnerships@vitahealth.me
                </p>
              </div>

              <div className="bg-card rounded-3xl p-8 md:p-10 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {t("contactPage.media.title")}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t("contactPage.media.description")}
                </p>
                <p className="text-foreground font-medium">
                  press@vitahealth.me
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
