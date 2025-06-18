
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmailInstructions, setShowEmailInstructions] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Preselect project type if provided via query string
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedPackage = params.get('service');
    if (selectedPackage) {
      // Map URL-friendly value to select option value
      const lower = selectedPackage.toLowerCase();
      if (
        lower.includes('landing') ||
        lower === 'single landing page'
      ) setFormData((prev) => ({ ...prev, project: 'landing' }));
      else if (
        lower.includes('starter')
      ) setFormData((prev) => ({ ...prev, project: 'starter' }));
      else if (
        lower.includes('business')
      ) setFormData((prev) => ({ ...prev, project: 'business' }));
      else if (
        lower.includes('e-commerce') ||
        lower.includes('ecommerce')
      ) setFormData((prev) => ({ ...prev, project: 'ecommerce' }));
      else if (
        lower.includes('custom')
      ) setFormData((prev) => ({ ...prev, project: 'custom' }));
    }
  }, [location.search]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowEmailInstructions(true);

    // Create email content
    const emailSubject = `New Contact Form Submission from ${formData.name}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.project}
Message: ${formData.message}

Submitted at: ${new Date().toLocaleString()}
    `;

    // Create mailto link
    const mailtoLink = `mailto:info@creativegings.co.za?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Show success message and redirect
    toast.success('Your email client is opening with the pre-filled message. Please send the email to complete your submission.');
    
    setTimeout(() => {
      navigate('/contact-thank-you');
    }, 3000);

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation 
            and let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Discuss Your Project</h3>
              <p className="text-muted-foreground mb-8">
                Whether you need a simple landing page or a complex e-commerce platform, 
                we're here to help you succeed online.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Phone className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+27 78 555 1702</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Mail className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">info@creativegings.co.za</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary p-3 rounded-lg">
                  <MapPin className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">South Africa</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border">
              <h4 className="font-bold text-foreground mb-4">Why Choose CreativeGings?</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ 100% Custom Design</li>
                <li>✓ Mobile-First Approach</li>
                <li>✓ SEO Optimized</li>
                <li>✓ Fast Loading Times</li>
                <li>✓ Ongoing Support</li>
                <li>✓ Competitive Pricing</li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            {showEmailInstructions && (
              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200 text-sm italic text-center">
                  Your email client is opening with a pre-filled message. Please send the email to complete your submission. If your email client doesn't open automatically, please copy the information and send it manually to info@creativegings.co.za
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                  Project Type *
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                >
                  <option value="">Select a project type</option>
                  <option value="landing">Single Landing Page</option>
                  <option value="starter">Starter Informative Site</option>
                  <option value="business">Business Informative Site</option>
                  <option value="ecommerce">E-Commerce Site</option>
                  <option value="custom">Custom Development</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Opening Email...' : 'Send Message'}</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
