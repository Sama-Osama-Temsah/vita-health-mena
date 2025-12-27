import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, HelpCircle, MessageCircle } from "lucide-react";

const faqCategories = [
  {
    title: "About the Assessment",
    questions: [
      {
        question: "How accurate is Vita's diabetes risk prediction?",
        answer: "Vita's AI model achieves approximately 98% accuracy when validated against clinical data. However, it's important to understand this is a screening tool, not a diagnosis. Our predictions are based on statistical models trained on regional health data and should be used as a starting point for health conversations with your doctor.",
      },
      {
        question: "How long does the assessment take?",
        answer: "The complete risk assessment takes approximately 5-7 minutes to complete. You'll answer questions about your personal health, family history, lifestyle habits, and diet. The AI analysis and results are provided instantly upon completion.",
      },
      {
        question: "Is the assessment free?",
        answer: "Yes, Vita's diabetes risk assessment is completely free. We believe everyone should have access to understand their health risks regardless of their financial situation. There are no hidden fees or premium features required for the core assessment.",
      },
      {
        question: "Can I retake the assessment?",
        answer: "Absolutely! We encourage you to retake the assessment periodically, especially if you've made lifestyle changes. This helps you track how your risk level changes over time as you adopt healthier habits.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    questions: [
      {
        question: "Is my health data safe?",
        answer: "Yes, your data security is our top priority. All data is encrypted end-to-end using industry-standard TLS 1.3 protocol. Your information is stored in secure, encrypted databases, and we never share your personal health data with third parties, advertisers, or insurers.",
      },
      {
        question: "Do I need to create an account?",
        answer: "No, you can take the assessment without creating an account. However, creating an optional account allows you to save your results, track changes over time, and receive personalized health reminders if you choose.",
      },
      {
        question: "Can I delete my data?",
        answer: "Yes, you have full control over your data. You can request complete deletion of all your information at any time by contacting privacy@vitahealth.me. We process all deletion requests within 48 hours.",
      },
    ],
  },
  {
    title: "Understanding Results",
    questions: [
      {
        question: "What does my risk score mean?",
        answer: "Your risk score represents the predicted probability of developing type 2 diabetes. Low risk (below 30%) means you have a lower than average chance. Moderate risk (30-60%) suggests taking preventive action. High risk (above 60%) indicates you should consult a healthcare provider for proper screening.",
      },
      {
        question: "Is this a diagnosis?",
        answer: "No, Vita is a screening tool, not a diagnostic service. Our risk assessment helps identify individuals who may benefit from further clinical evaluation. Only a qualified healthcare provider can diagnose diabetes through proper medical testing.",
      },
      {
        question: "What should I do if I have a high risk score?",
        answer: "If your risk score is high, we recommend: 1) Scheduling an appointment with your doctor for proper blood glucose testing. 2) Beginning to implement the lifestyle recommendations we provide. 3) Sharing your Vita results with your healthcare provider for their assessment.",
      },
    ],
  },
  {
    title: "Regional Features",
    questions: [
      {
        question: "Why is Vita specific to the Middle East?",
        answer: "Generic diabetes risk calculators are often calibrated for Western populations and can underestimate risk for Middle Eastern individuals by up to 30%. Vita's AI models are trained on health data from Egyptian and Middle Eastern populations, accounting for regional genetics, dietary patterns, and lifestyle factors.",
      },
      {
        question: "Is Vita available in Arabic?",
        answer: "Yes, Vita fully supports Arabic language. You can switch between English and Arabic at any time. This ensures accessibility for Arabic-speaking users across the region.",
      },
      {
        question: "Which countries does Vita serve?",
        answer: "Vita is designed for the entire MENA region, with special focus on Egypt, Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, Jordan, and Lebanon. Our models are calibrated using health data from these populations.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Find answers to common questions about Vita's diabetes risk assessment 
              and how it can help you take control of your health.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-medium transition-shadow"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is here to help. Reach out and we'll get back to 
              you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/risk-check">
                  Take Assessment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
