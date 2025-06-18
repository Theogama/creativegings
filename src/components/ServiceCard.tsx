
import { Check } from 'lucide-react';

interface ServiceCardProps {
  service: {
    title: string;
    price: string;
    priceAmount: number;
    features: string[];
    popular: boolean;
    bgColor: string;
    textColor: string;
  };
  onGetStarted: (service: { title: string }) => void;
  index: number;
}

const ServiceCard = ({ service, onGetStarted, index }: ServiceCardProps) => (
  <div
    className={`${service.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 relative animate-fade-in`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {service.popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
          Most Popular
        </span>
      </div>
    )}

    <div className="mb-6">
      <h3 className={`text-2xl font-bold ${service.textColor} mb-4`}>{service.title}</h3>
      <div className="flex items-center mb-4">
        <span className="text-sm text-muted-foreground mr-2">From</span>
        <span className={`text-3xl font-bold ${service.textColor}`}>{service.price}</span>
      </div>
    </div>

    <ul className="space-y-3 mb-8">
      {service.features.map((feature, featureIndex) => (
        <li key={featureIndex} className="flex items-start space-x-3">
          <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <span className={`text-sm ${service.textColor}`}>{feature}</span>
        </li>
      ))}
    </ul>

    <button
      onClick={() => onGetStarted(service)}
      className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105"
    >
      Get Started
    </button>
  </div>
);

export default ServiceCard;
