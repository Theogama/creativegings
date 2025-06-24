import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
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
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-8">
                <p className="text-lg mb-6">
                  <strong>Effective Date:</strong> December 12, 2024
                </p>
                
                <p className="mb-6">
                  CreativeGings Website Agency ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
                <ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Business information and project requirements</li>
                  <li>Payment information (processed securely through Yoco)</li>
                  <li>Communication records and correspondence</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">Technical Information</h3>
                <ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground">
                  <li>IP address and browser information</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Device information and operating system</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground">
                  <li>To provide and deliver our website design and development services</li>
                  <li>To process payments and manage billing</li>
                  <li>To communicate with you about your projects and provide customer support</li>
                  <li>To improve our services and website functionality</li>
                  <li>To send marketing communications (with your consent)</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
                <p className="mb-4 text-muted-foreground">We may share your information with:</p>
                <ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground">
                  <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (hosting, payment processing, analytics)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of our business</li>
                </ul>
                <p className="mb-6 text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties for marketing purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="mb-6">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  This includes:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure payment processing through certified providers</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                  <li>Object to processing of your personal information</li>
                </ul>
                <p className="mb-6">
                  To exercise these rights, please contact us at privacy@creativegings.co.za
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking</h2>
                <p className="mb-6">
                  We use cookies and similar technologies to enhance your browsing experience, 
                  analyze website traffic, and personalize content. You can control cookie 
                  settings through your browser preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
                <p className="mb-4">Our website may contain links to third-party services, including:</p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li><strong>Yoco:</strong> Payment processing (subject to Yoco's privacy policy)</li>
                  <li><strong>Google Analytics:</strong> Website analytics (subject to Google's privacy policy)</li>
                  <li><strong>Social Media:</strong> Social media platforms for sharing and engagement</li>
                </ul>
                <p className="mb-6">
                  These third-party services have their own privacy policies, and we encourage 
                  you to review them.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
                <p className="mb-6">
                  We retain your personal information for as long as necessary to provide our services 
                  and comply with legal obligations. When information is no longer needed, we securely 
                  delete or anonymize it.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
                <p className="mb-6">
                  Our services are not intended for children under 13 years of age. We do not 
                  knowingly collect personal information from children under 13.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
                <p className="mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new policy on this page and updating the effective date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, 
                  please contact us:
                </p>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="text-foreground"><strong>CreativeGings Website Agency</strong></p>
                  <p className="text-muted-foreground">Email: privacy@creativegings.co.za</p>
                  <p className="text-muted-foreground">Phone: +27 (0) 78 555 1702</p>
                  <p className="text-muted-foreground">Address: South Africa</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
