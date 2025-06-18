import { Check } from 'lucide-react';
import { useState } from 'react';
import { YocoService, type YocoCheckoutRequest } from '@/services/yocoService';
import { toast } from '@/components/ui/use-toast';
import Loader from '@/components/ui/Loader';
import { useNavigate } from "react-router-dom";
import ServiceCard from './ServiceCard';
import CustomDevelopment from './CustomDevelopment';

const Services = () => {
  const [processingPayment, setProcessingPayment] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      title: "Single Landing Page",
      price: "R1999.00",
      priceAmount: 199900, // in cents for Yoco
      features: [
        "1 Page",
        "3 Revisions",
        "Modern and Professional Design",
        "Fully Responsive",
        "4-5 Sections",
        "Contact form",
        "WhatsApp Button"
      ],
      popular: false,
      bgColor: "backdrop-blur-md bg-background/60 border-border/50",
      textColor: "text-foreground"
    },
    {
      title: "Starter Informative Site",
      price: "R3000.00",
      priceAmount: 300000,
      features: [
        "3-5 Pages",
        "4 Revisions per page",
        "Landing Design",
        "Modern and Professional Design",
        "Fully Responsive",
        "Contact form",
        "WhatsApp Button",
        "Google Sitemap Submission",
        "Optional Gallery Page addon"
      ],
      popular: true,
      bgColor: "backdrop-blur-md bg-primary/10 border-primary/20",
      textColor: "text-foreground"
    },
    {
      title: "Business Informative Site",
      price: "R4500.00",
      priceAmount: 450000,
      features: [
        "6-10 Pages",
        "5 Revisions per page",
        "Landing Design",
        "Gallery + Service Page Design",
        "Content Generation",
        "Modern and Professional Design",
        "Fully Responsive",
        "Image & Graphic Sourcing",
        "Contact form",
        "WhatsApp Button",
        "Google Sitemap Submission",
        "Basic SEO"
      ],
      popular: false,
      bgColor: "backdrop-blur-md bg-secondary/60 border-border/50",
      textColor: "text-foreground"
    },
    {
      title: "E-Commerce Site",
      price: "R8900.00",
      priceAmount: 890000,
      features: [
        "Modern Shop Development",
        "Complete Store Functionality",
        "CMS (Content Management System)",
        "5 Revisions per Page",
        "Fully Responsive",
        "Automated Invoicing",
        "Social Media Linking",
        "10 Free Product Uploads",
        "Policy Page Setup",
        "Payment Gateway Integration",
        "Shipping Zones Setup",
        "Image & Graphic Sourcing",
        "Contact form",
        "WhatsApp Button",
        "Google Sitemap Submission",
        "Basic SEO",
        "Training for store management"
      ],
      popular: false,
      bgColor: "backdrop-blur-md bg-background/60 border-border/50",
      textColor: "text-foreground"
    }
  ];

  // No backend/payment; handle simple redirect
  const handleGetStarted = (service: typeof services[0]) => {
    // Direct to confirmation page, pass selected service as param
    navigate(`/get-started-confirm?service=${encodeURIComponent(service.title)}`);
  };

  return (
    <>
      {isLoading && <Loader label="Redirecting to secure payment..." />}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Website Design Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our range of professional website design packages, 
              each crafted to meet different business needs and budgets.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              No upfront payment required. Click "Get Started" and we'll be in touch to discuss your project details and next steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                service={service}
                onGetStarted={handleGetStarted}
                index={index}
              />
            ))}
          </div>

          <CustomDevelopment />
        </div>
      </section>
    </>
  );
};

export default Services;
// The Services.tsx file is getting lengthy! Please consider asking me to help you refactor this file for future maintainability.
