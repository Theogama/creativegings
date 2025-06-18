
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const GetStartedConfirm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const service = searchParams.get("service");

  useEffect(() => {
    // Optional: scroll to top when landing here
    window.scrollTo(0, 0);
  }, []);

  const handleProceed = () => {
    // Jump to contact form with preselection
    if (service) {
      // Go to / and scroll to #contact with service in param
      navigate(`/?service=${encodeURIComponent(service)}#contact`);
      // In SPA mode, we must also force scroll to contact after navigation.
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
      }, 350);
    } else {
      navigate("/#contact");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header removed */}
      <div className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="bg-card rounded-2xl shadow-lg p-12 max-w-xl w-full border text-center">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Almost There!</h1>
          {service && (
            <p className="text-lg mb-4 text-muted-foreground">
              You have selected the <b>{service}</b> package.
            </p>
          )}
          <p className="mb-6 text-muted-foreground">
            Next, you will be directed to our Contact Form. Please fill in your details along with your selected package, and we will get back to you soon via email.
          </p>
          <Button size="lg" className="w-full" onClick={handleProceed}>
            Proceed to Contact Form
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetStartedConfirm;
