
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Johnson & Associates",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "CreativeGings transformed our outdated website into a modern, professional platform that perfectly represents our brand. The team was responsive, creative, and delivered exactly what we envisioned."
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "TechStart Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "Exceptional service from start to finish. Our e-commerce site has increased sales by 150% since launch. The attention to detail and user experience design is outstanding."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Bloom Boutique",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "Working with CreativeGings was a pleasure. They understood our vision for a boutique website and created something beautiful and functional. Our customers love the new design!"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "Thompson Law Firm",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "Professional, reliable, and skilled. CreativeGings delivered our law firm website on time and within budget. The SEO optimization has significantly improved our online visibility."
    },
    {
      id: 5,
      name: "Lisa Park",
      company: "Creative Studio",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "Amazing creativity and technical expertise. Our portfolio website showcases our work beautifully and has helped us attract high-quality clients. Highly recommended!"
    },
    {
      id: 6,
      name: "Robert Kim",
      company: "FitLife Gym",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "The team at CreativeGings created a dynamic website that perfectly captures the energy of our fitness brand. Online bookings have increased dramatically since the launch."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with CreativeGings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Quote className="text-primary mr-2" size={20} />
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
