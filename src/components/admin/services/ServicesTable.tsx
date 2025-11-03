import React from 'react';
import { motion } from 'framer-motion';
import { Package, Pencil, Trash2, MoreVertical, Plus } from 'lucide-react';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import { services } from '../../../data/services';

const ServicesTable: React.FC = () => {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Services</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage available services and their configurations</p>
        </div>
        <Button variant="primary" icon={<Plus size={18} />}>
          Add Service
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-200 dark:border-dark-600">
              <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Service</th>
              <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Category</th>
              <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Status</th>
              <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Price</th>
              <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <motion.tr
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-b border-gray-100 dark:border-dark-600 last:border-0"
              >
                <td className="py-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <Package size={20} />
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900 dark:text-white">{service.title}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 max-w-md truncate">
                        {service.description}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
                    {service.category}
                  </span>
                </td>
                <td className="py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                    active
                  </span>
                </td>
                <td className="py-4 text-gray-600 dark:text-gray-400">
                  ${service.price || '99.99'}
                </td>
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" icon={<Pencil size={16} />} />
                    <Button variant="ghost" size="sm" icon={<Trash2 size={16} />} />
                    <Button variant="ghost" size="sm" icon={<MoreVertical size={16} />} />
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ServicesTable;