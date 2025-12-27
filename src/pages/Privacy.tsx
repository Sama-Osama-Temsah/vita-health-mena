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

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data transmitted between your device and our servers is encrypted using industry-standard TLS 1.3 protocol.",
  },
  {
    icon: Server,
    title: "Secure Data Storage",
    description: "Your health information is stored in encrypted databases with multiple layers of security controls.",
  },
  {
    icon: Eye,
    title: "Privacy by Design",
    description: "We collect only the minimum data necessary to provide accurate risk assessments. No unnecessary tracking.",
  },
  {
    icon: Trash2,
    title: "Data Deletion Rights",
    description: "You can request complete deletion of your data at any time. We honor all deletion requests within 48 hours.",
  },
  {
    icon: FileCheck,
    title: "GDPR Compliant",
    description: "We follow European data protection standards, providing you with full control over your personal information.",
  },
  {
    icon: Shield,
    title: "No Third-Party Sharing",
    description: "Your health data is never sold or shared with advertisers, insurers, or any third parties.",
  },
];

const dataUsage = [
  {
    category: "What We Collect",
    items: [
      "Age, gender, height, and weight",
      "Family health history (yes/no responses only)",
      "Lifestyle habits (exercise, diet, sleep)",
      "Email address (if you choose to create an account)",
    ],
  },
  {
    category: "What We DON'T Collect",
    items: [
      "Your real name or ID documents",
      "Precise location data",
      "Medical records or test results",
      "Financial or payment information",
      "Biometric data",
    ],
  },
  {
    category: "How We Use Your Data",
    items: [
      "Calculate your personalized risk score",
      "Provide relevant health recommendations",
      "Improve our AI model accuracy (anonymized)",
      "Send assessment reminders (if opted in)",
    ],
  },
];

const Privacy = () => {
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
              Privacy & Data <span className="text-gradient-primary">Security</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Your health data is sacred. We've built Vita with privacy at its core, 
              ensuring your information stays protected and under your control.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Protect Your Data
            </h2>
            <p className="text-lg text-muted-foreground">
              Multiple layers of security to keep your health information safe
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
              Transparency in Data Handling
            </h2>
            <p className="text-lg text-muted-foreground">
              Clear information about what data we collect and how we use it
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
              Your Privacy Rights
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Right to Access",
                  description: "You can request a copy of all personal data we hold about you at any time.",
                },
                {
                  title: "Right to Rectification",
                  description: "If any of your data is inaccurate, you can request corrections.",
                },
                {
                  title: "Right to Erasure",
                  description: "You can request complete deletion of your data from our systems.",
                },
                {
                  title: "Right to Data Portability",
                  description: "You can receive your data in a structured, commonly used format.",
                },
                {
                  title: "Right to Object",
                  description: "You can opt out of data processing for certain purposes at any time.",
                },
              ].map((right, index) => (
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
              Questions About Your Privacy?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our Data Protection Officer is here to help with any privacy-related 
              inquiries or to process your data requests.
            </p>
            <div className="inline-block bg-primary-light rounded-xl px-6 py-4">
              <p className="text-primary font-medium">privacy@vitahealth.me</p>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
