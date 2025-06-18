
import { CheckCircle, Target, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Approach = () => {
  const steps = [
    {
      icon: Users,
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and unique requirements through detailed consultation."
    },
    {
      icon: Target,
      title: "Strategic Design",
      description: "Our team creates user-focused designs that align with your brand identity and business objectives."
    },
    {
      icon: Zap,
      title: "Development & Testing",
      description: "We build your website using modern technologies, ensuring optimal performance and cross-browser compatibility."
    },
    {
      icon: CheckCircle,
      title: "Launch & Support",
      description: "After thorough testing, we launch your site and provide ongoing support to ensure continued success."
    }
  ];

  return (
    <section id="approach" className="py-16 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Approach</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We follow a proven methodology to deliver exceptional web solutions that drive results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="group relative backdrop-blur-md bg-background/60 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {step.description}
                </CardDescription>
              </CardContent>
              
              {/* Step number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="backdrop-blur-md bg-background/60 border-border/50 shadow-lg max-w-4xl mx-auto animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose CreativeGings?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="text-primary font-semibold mb-2">5+ Years Experience</div>
                  <p className="text-muted-foreground">Proven track record in web development</p>
                </div>
                <div className="text-center">
                  <div className="text-primary font-semibold mb-2">100+ Projects Delivered</div>
                  <p className="text-muted-foreground">Successfully completed projects across industries</p>
                </div>
                <div className="text-center">
                  <div className="text-primary font-semibold mb-2">24/7 Support</div>
                  <p className="text-muted-foreground">Ongoing maintenance and support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Approach;
