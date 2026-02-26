import { Layout } from "@/components/layout/Layout";
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  Trash2, 
  FileCheck,
  CheckCircle
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { t } = useLanguage();

  const securityFeatures = [
    { icon: Lock, title: t("privacyPage.security.encryption"), description: t("privacyPage.security.encryptionDesc") },
    { icon: Server, title: t("privacyPage.security.storage"), description: t("privacyPage.security.storageDesc") },
    { icon: Eye, title: t("privacyPage.security.design"), description: t("privacyPage.security.designDesc") },
    { icon: Trash2, title: t("privacyPage.security.deletion"), description: t("privacyPage.security.deletionDesc") },
    { icon: FileCheck, title: t("privacyPage.security.gdpr"), description: t("privacyPage.security.gdprDesc") },
    { icon: Shield, title: t("privacyPage.security.noSharing"), description: t("privacyPage.security.noSharingDesc") },
  ];

  const dataUsage = [
    {
      category: t("privacyPage.data.collect"),
      items: [t("privacyPage.data.collect1"), t("privacyPage.data.collect2"), t("privacyPage.data.collect3"), t("privacyPage.data.collect4")],
    },
    {
      category: t("privacyPage.data.dontCollect"),
      items: [t("privacyPage.data.dontCollect1"), t("privacyPage.data.dontCollect2"), t("privacyPage.data.dontCollect3"), t("privacyPage.data.dontCollect4"), t("privacyPage.data.dontCollect5")],
    },
    {
      category: t("privacyPage.data.usage"),
      items: [t("privacyPage.data.usage1"), t("privacyPage.data.usage2"), t("privacyPage.data.usage3"), t("privacyPage.data.usage4")],
    },
  ];

  const rights = [
    { title: t("privacyPage.rights.access"), description: t("privacyPage.rights.accessDesc") },
    { title: t("privacyPage.rights.rectification"), description: t("privacyPage.rights.rectificationDesc") },
    { title: t("privacyPage.rights.erasure"), description: t("privacyPage.rights.erasureDesc") },
    { title: t("privacyPage.rights.portability"), description: t("privacyPage.rights.portabilityDesc") },
    { title: t("privacyPage.rights.object"), description: t("privacyPage.rights.objectDesc") },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("privacyPage.hero.title")} <span className="text-gradient-primary">{t("privacyPage.hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t("privacyPage.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("privacyPage.security.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("privacyPage.security.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-large transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-5">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Usage */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("privacyPage.data.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("privacyPage.data.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dataUsage.map((section, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-4 border-b border-border">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              {t("privacyPage.rights.title")}
            </h2>
            
            <div className="space-y-6">
              {rights.map((right, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-card rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-success-light flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{right.title}</h3>
                    <p className="text-muted-foreground">{right.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t("privacyPage.contact.title")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t("privacyPage.contact.description")}
            </p>
            <div className="inline-block bg-primary-light rounded-xl px-6 py-4">
              <p className="text-primary font-medium">privacy@vitahealth.me</p>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              {t("privacyPage.contact.updated")}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
