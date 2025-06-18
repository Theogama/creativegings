import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, CreditCard, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

const Footer = () => {
  const { theme } = useTheme();

  const logoSrc = theme === 'dark'
    ? 'images/logo-dark.png'
    : 'images/logo-light.png';

  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img
              src={logoSrc}
              alt="CreativeGings Logo"
              className="h-28 w-auto drop-shadow-lg font-bold"
              style={{ fontWeight: 900 }}
            />
            <p className="text-sm text-muted-foreground">
              Professional website design and development agency creating 
              stunning digital experiences for businesses of all sizes.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Facebook size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Twitter size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Instagram size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Linkedin size={16} />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Landing Pages</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Business Websites</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">E-Commerce</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Custom Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Phone size={14} />
                <span>+27 78 555 1702</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={14} />
                <span>info@creativegings.co.za</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 CreativeGings Website Agency. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            {' '} | {' '}
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
