
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactThankYou = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-card rounded-2xl shadow-lg p-12 border">
          <CheckCircle className="text-green-500 mx-auto mb-6" size={80} />
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            We've received your interest and will get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/" className="inline-flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/#portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default ContactThankYou;
