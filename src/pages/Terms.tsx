
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="bg-card rounded-2xl shadow-lg p-8 border">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-8">
                <p className="text-lg mb-6">
                  <strong>Effective Date:</strong> December 12, 2024
                </p>
                <p className="mb-6 text-muted-foreground">
                  Welcome to CreativeGings Website Agency. Please read these Terms of Service ("Terms", "Terms of Service") carefully before using our website and services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Services Overview</h2>
                <p className="mb-6 text-muted-foreground">
                  CreativeGings provides professional web design and development services, including (but not limited to) landing pages, business websites, e-commerce platforms, and custom web applications. Our team collaborates closely with clients to deliver projects tailored to each business's specific goals and requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. User Obligations</h2>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>Provide accurate and up-to-date information as necessary to enable project completion.</li>
                  <li>Use our website and services for lawful purposes and in compliance with all applicable laws and regulations.</li>
                  <li>Do not attempt to gain unauthorized access to any part of our systems or interfere with their proper functioning.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Project Delivery and Payment Terms</h2>
                <ul className="list-decimal pl-6 mb-6 text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">A 50% deposit is required to confirm and begin all projects.</span> The remaining 50% balance must be settled after project completion and before final delivery or website launch.
                  </li>
                  <li>Project timelines and deliverables will be defined at the start of each engagement. Delays caused by late client feedback or content provision may impact delivery dates.</li>
                  <li>Payments must be made as agreed in the contract or invoice. Late payments may result in project suspension.</li>
                  <li>All fees are stated in South African Rand (ZAR) unless otherwise specified.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="mb-6 text-muted-foreground">
                  All materials created by CreativeGings during the course of the project remain our property until full payment is received. Upon payment, ownership of the project deliverables is transferred to the client, with CreativeGings reserving the right to display the work as part of our portfolio, unless otherwise agreed.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Privacy & Data Protection</h2>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>We respect your privacy and data security. Please also review our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for details on information collection and use.</li>
                  <li>Client information is never shared, sold, or disclosed, except where required by law.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Disclaimers & Limitation of Liability</h2>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>Our website and all its contents are provided "as is". We make no warranties regarding the accuracy, reliability, or completeness of the materials or services offered.</li>
                  <li>CreativeGings is not liable for any indirect, incidental, or consequential damages resulting from use of our services or website.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Termination</h2>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>We reserve the right to suspend or terminate your use of our services at any time for violations of these Terms or for any other reason deemed necessary.</li>
                  <li>Upon termination, any outstanding fees become immediately due and payable.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to Terms</h2>
                <p className="mb-6 text-muted-foreground">
                  CreativeGings reserves the right to update or change these Terms at any time. Updates will be posted on this page. Continued use of our services implies acceptance of the revised Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="text-foreground"><strong>CreativeGings Website Agency</strong></p>
                  <p className="text-muted-foreground">Email: info@creativegings.co.za</p>
                  <p className="text-muted-foreground">Phone: +27 (0) 78 555 1702</p>
                  <p className="text-muted-foreground">Address: South Africa</p>
                </div>
              </section>

              <section>
                <p className="text-muted-foreground">
                  By using our website and services, you agree to these Terms of Service.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
