import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, MessageCircle, Phone, MessageSquareMore, Mail, Megaphone, Code as CodeIcon, Palette } from 'lucide-react';
import { Service } from '../../utils/types';
import Card from '../ui/Card';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const iconMap: { [key: string]: React.ElementType } = {
  'message-square': MessageSquare,
  'message-circle': MessageCircle,
  'phone': Phone,
  'message-square-more': MessageSquareMore,
  'mail': Mail,
  'megaphone': Megaphone,
  'code': CodeIcon,
  'code-json': CodeIcon, // Map 'code-json' to the same icon
  'palette': Palette,
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  const IconComponent = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card className="h-full flex flex-col p-6">
        <div className="inline-flex p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
          {IconComponent && <IconComponent size={24} />}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
          {service.description}
        </p>
        <Link 
          to={`/services/${service.id}`}
          className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
        >
          Learn more
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
