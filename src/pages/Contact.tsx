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

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@vitahealth.me",
    subtext: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+20 123 456 7890",
    subtext: "Sun-Thu, 9AM-6PM (Cairo)",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Smart Village, Building B4",
    subtext: "Cairo, Egypt",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Sunday - Thursday",
    subtext: "9:00 AM - 6:00 PM",
  },
];

const contactReasons = [
  "General Inquiry",
  "Technical Support",
  "Partnership Opportunity",
  "Media & Press",
  "Privacy Request",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
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
              Get in <span className="text-gradient-primary">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have questions about Vita? We'd love to hear from you. Our team is 
              ready to help with any inquiries.
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

      {/* Contact Form & Map */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-large">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll respond as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Contact</Label>
                  <select
                    id="reason"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full h-11 rounded-lg border border-input bg-background px-3 py-2 text-foreground ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    required
                  >
                    <option value="">Select a reason</option>
                    {contactReasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help..."
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
                    "Sending..."
                  ) : (
                    <>
                      Send Message
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
                  Need Immediate Help?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our support team is available to assist you with any urgent 
                  questions about your risk assessment or the platform.
                </p>
                <ul className="space-y-3">
                  {[
                    "Response within 24 hours",
                    "Arabic and English support",
                    "Technical assistance available",
                    "Privacy inquiries prioritized",
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
                  Partnership Inquiries
                </h3>
                <p className="text-muted-foreground mb-4">
                  Interested in partnering with Vita? We work with healthcare 
                  providers, insurers, employers, and wellness organizations.
                </p>
                <p className="text-foreground font-medium">
                  partnerships@vitahealth.me
                </p>
              </div>

              <div className="bg-card rounded-3xl p-8 md:p-10 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Media & Press
                </h3>
                <p className="text-muted-foreground mb-4">
                  For media inquiries, interview requests, or press materials, 
                  please reach out to our communications team.
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
