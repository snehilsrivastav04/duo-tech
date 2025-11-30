
import { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ServiceCardProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    cta: string;
    ctaLink: string;
    bgColor: string;
    textColor: string;
    iconColor: string;
  };
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className={`${service.bgColor} ${service.textColor} p-6 rounded-lg`}>
      <div className="flex justify-between items-start">
        <p className="text-sm font-medium">{service.title}</p>
        <div className={`${service.iconColor}`}>
          {service.icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold my-4 text-blue-600">{service.description}</h3>
      <p className="text-sm mb-4">{service.features.join(', ')}</p>
      <div className="flex items-center space-x-4">
        <Button asChild className="bg-blue-600 text-white">
          <a href={service.ctaLink}>{service.cta} <ArrowRight className="w-4 h-4 ml-2" /></a>
        </Button>
        <Button asChild variant="link" className="text-blue-600">
          <a href="#">Know More</a>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
