import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../utils/types';
import Card from '../ui/Card';

interface ProductCardProps {
  product: Product;
  index?: number;
  expanded?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  index = 0,
  expanded = false 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col">
        <div className={`${expanded ? 'h-64' : 'h-48'} overflow-hidden rounded-t-xl`}>
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {product.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {product.description}
          </p>
          
          {expanded && (
            <div className="mt-2 mb-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Features:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-flex mr-2 text-secondary-500 mt-1">
                      <Check size={16} />
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-auto pt-4">
            <Link 
              to={`/products/${product.id}`}
              className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
            >
              {expanded ? 'View details' : 'Learn more'}
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProductCard;