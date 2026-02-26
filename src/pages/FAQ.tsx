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
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();

  const faqCategories = [
    {
      title: t("faqPage.cat1.title"),
      questions: [
        { question: t("faqPage.cat1.q1"), answer: t("faqPage.cat1.a1") },
        { question: t("faqPage.cat1.q2"), answer: t("faqPage.cat1.a2") },
        { question: t("faqPage.cat1.q3"), answer: t("faqPage.cat1.a3") },
        { question: t("faqPage.cat1.q4"), answer: t("faqPage.cat1.a4") },
      ],
    },
    {
      title: t("faqPage.cat2.title"),
      questions: [
        { question: t("faqPage.cat2.q1"), answer: t("faqPage.cat2.a1") },
        { question: t("faqPage.cat2.q2"), answer: t("faqPage.cat2.a2") },
        { question: t("faqPage.cat2.q3"), answer: t("faqPage.cat2.a3") },
      ],
    },
    {
      title: t("faqPage.cat3.title"),
      questions: [
        { question: t("faqPage.cat3.q1"), answer: t("faqPage.cat3.a1") },
        { question: t("faqPage.cat3.q2"), answer: t("faqPage.cat3.a2") },
        { question: t("faqPage.cat3.q3"), answer: t("faqPage.cat3.a3") },
      ],
    },
    {
      title: t("faqPage.cat4.title"),
      questions: [
        { question: t("faqPage.cat4.q1"), answer: t("faqPage.cat4.a1") },
        { question: t("faqPage.cat4.q2"), answer: t("faqPage.cat4.a2") },
        { question: t("faqPage.cat4.q3"), answer: t("faqPage.cat4.a3") },
      ],
    },
  ];

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
              {t("faqPage.hero.title")} <span className="text-gradient-primary">{t("faqPage.hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t("faqPage.hero.description")}
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
                      <AccordionTrigger className="text-start font-semibold text-foreground hover:no-underline py-5">
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
              {t("faqPage.stillQuestions")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("faqPage.stillQuestionsDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  {t("faqPage.contactUs")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/risk-check">
                  {t("faqPage.takeAssessment")}
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
