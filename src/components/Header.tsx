import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Determine which logo to show based on theme
  const logoSrc = theme === 'dark'
    ? '/images/logo-dark.png'
    : '/images/logo-light.png';

  return (
    <header className="bg-background/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Left */}
          <div className="flex items-center space-x-3">
            <img
              src={logoSrc}
              alt="CreativeGings Logo"
              className="h-28 w-auto drop-shadow-md hover:scale-105 transition-transform duration-200 font-bold"
              style={{ fontWeight: 900 }}
            />
          </div>
          {/* Centered Navigation Large Screens */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-6">
            <a href="#home" className="text-sm text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#approach" className="text-sm text-foreground hover:text-primary transition-colors">Our Approach</a>
            <a href="#services" className="text-sm text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="text-sm text-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          {/* Right Side on Large Screens: Theme toggle and Menu */}
          <div className="hidden md:flex items-center ml-3 space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-9 w-9 px-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-9 w-9 px-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-9 w-9 px-0"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-sm text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#approach" className="text-sm text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Our Approach</a>
              <a href="#services" className="text-sm text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#portfolio" className="text-sm text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <div className='flex items-center gap-3'>
                <Link to="/privacy" className="text-xs text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Privacy Policy</Link>
                {''} | {''}
                <Link to="/terms" className="text-xs text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Terms of service</Link>
              </div>
              
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
