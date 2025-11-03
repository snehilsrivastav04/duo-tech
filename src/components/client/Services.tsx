import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package,
  Plus,
  Server,
  Cpu,
  Database,
  HardDrive,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import Button from '../ui/Button';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      name: 'Bulk SMS Service',
      status: 'active',
      icon: <Server size={20} />,
      usage: 75,
      renewal: '2024-05-15'
    },
    {
      id: 2,
      name: 'Cloud Hosting',
      status: 'active',
      icon: <HardDrive size={20} />,
      usage: 50,
      renewal: '2024-06-01'
    },
    {
      id: 3,
      name: 'API Gateway',
      status: 'warning',
      icon: <Cpu size={20} />,
      usage: 45,
      renewal: '2024-04-30'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
            <CheckCircle2 size={12} className="mr-1" /> Active
          </span>
        );
      case 'warning':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
            <AlertCircle size={12} className="mr-1" /> Warning
          </span>
        );
      case 'suspended':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
            <AlertCircle size={12} className="mr-1" /> Suspended
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Services</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your active services and subscriptions</p>
        </div>
        <div className="flex gap-3">
          <Button>
            <Plus size={16} className="mr-2" />
            Add New Service
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <div 
            key={service.id}
            className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-dark-600 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400">
                {service.icon}
              </div>
              {getStatusBadge(service.status)}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {service.name}
            </h3>
            
            <div className="mt-4 mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-gray-400">Usage</span>
                <span className="font-medium">{service.usage}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary-500 rounded-full"
                  style={{ width: `${service.usage}%` }}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-600">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Renewal: {service.renewal}
              </div>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;