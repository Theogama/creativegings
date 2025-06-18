
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTheme } from '@/components/theme-provider';

const Hero = () => {
  const { theme } = useTheme();

  // Use the same background image for both light and dark modes,
  // but overlay a lighter gradient in light mode.
  const backgroundUrl =
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80';

  const lightBackground = {
    backgroundImage: `
      linear-gradient(to bottom right, rgba(255,255,255,0.95) 70%, rgba(240,240,240,0.7)), 
      url('${backgroundUrl}')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const darkBackground = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${backgroundUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={theme === 'dark' ? darkBackground : lightBackground}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="absolute inset-0 flex items-center justify-center bg-background/20 dark:bg-background/40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-white leading-tight">
              Creative
              <span className="text-primary"> Web Solutions</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Transform your business with professional website design and development.
              From single landing pages to complex e-commerce platforms.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <Button size="lg" asChild className="text-sm hover:scale-105 transition-transform duration-200">
              <a href="#services" className="inline-flex items-center">
                View Our Services
                <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-sm hover:scale-105 transition-transform duration-200 dark:border-white/20 dark:text-white dark:hover:bg-white/10">
              <a href="#portfolio">
                See Our Work
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-3xl mx-auto">
            <Card className="p-6 text-center backdrop-blur-md bg-card/50 dark:bg-white/10 border-border dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <Code className="text-primary mx-auto mb-3 animate-pulse" size={24} />
              <span className="text-sm font-medium text-foreground dark:text-white">Modern Development</span>
            </Card>
            <Card className="p-6 text-center backdrop-blur-md bg-card/50 dark:bg-white/10 border-border dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <Palette className="text-primary mx-auto mb-3 animate-pulse" size={24} />
              <span className="text-sm font-medium text-foreground dark:text-white">Creative Design</span>
            </Card>
            <Card className="p-6 text-center backdrop-blur-md bg-card/50 dark:bg-white/10 border-border dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <Zap className="text-primary mx-auto mb-3 animate-pulse" size={24} />
              <span className="text-sm font-medium text-foreground dark:text-white">Fast Delivery</span>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
