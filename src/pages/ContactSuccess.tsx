
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const EMAIL = "info@creativegings.co.za"; // Still your reference email

const ContactSuccess = () => {
  const [searchParams] = useSearchParams();
  const service = searchParams.get("service");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Original frontend-only submit: just display confirmation and redirect
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Submitted!",
      description: "Your information was sent. We'll contact you soon.",
    });
    setIsLoading(true);
    setTimeout(() => {
      navigate('/contact-thank-you');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-card rounded-2xl shadow-lg p-12 border">
            {/* Back to Services button */}
            <div className="mb-6 flex justify-start">
              <Button asChild variant="ghost" size="sm">
                <Link to="/#services" className="flex items-center">
                  <ArrowLeft className="mr-2" size={18} />
                  Back to Services
                </Link>
              </Button>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Contact CreativeGings
            </h1>
            {service ? (
              <>
                <p className="text-xl text-muted-foreground mb-8">
                  Thank you for selecting our <b>{service}</b> package!
                  Please fill out your contact details below and we'll get back to you within 24 hours.
                </p>
                <form 
                  onSubmit={handleSubmit}
                  className="max-w-md mx-auto text-left space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded border border-border bg-background"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded border border-border bg-background"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">
                      Message (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 rounded border border-border bg-background"
                      placeholder="Any specific requests or info?"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send"}
                  </Button>
                </form>
              </>
            ) : (
              <p className="text-xl text-muted-foreground mb-8">
                Thank you for contacting CreativeGings. We've received your message and will get back to you within 24 hours.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactSuccess;
