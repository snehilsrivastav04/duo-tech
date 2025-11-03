import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard,
  DollarSign,
  History,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import Button from '../ui/Button';

const mockPaymentMethods = [
  {
    id: 1,
    type: 'visa',
    last4: '4242',
    expiry: '12/25',
    isDefault: true
  },
  {
    id: 2,
    type: 'mastercard',
    last4: '5555',
    expiry: '06/24',
    isDefault: false
  }
];

const mockBillingHistory = [
  {
    id: 'TX-2024-003',
    date: '2024-03-15',
    description: 'Monthly Subscription',
    amount: 299.99,
    status: 'completed'
  },
  {
    id: 'TX-2024-002',
    date: '2024-02-15',
    description: 'Monthly Subscription',
    amount: 299.99,
    status: 'completed'
  },
  {
    id: 'TX-2024-001',
    date: '2024-01-15',
    description: 'Monthly Subscription',
    amount: 249.99,
    status: 'completed'
  },
  {
    id: 'TX-2023-012',
    date: '2023-12-15',
    description: 'Service Upgrade',
    amount: 50.00,
    status: 'completed'
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'completed':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
          <CheckCircle2 size={12} className="mr-1" /> Completed
        </span>
      );
    case 'failed':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
          <AlertCircle size={12} className="mr-1" /> Failed
        </span>
      );
    case 'pending':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
          <Clock size={12} className="mr-1" /> Pending
        </span>
      );
    default:
      return null;
  }
};

const Billing: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header with action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Billing</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your payment methods and billing history</p>
        </div>
        <div className="flex gap-3">
          <Button>
            <Plus size={16} className="mr-2" />
            Add Payment Method
          </Button>
        </div>
      </motion.div>

      {/* Payment Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-dark-600"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Payment Methods
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {mockPaymentMethods.map((method) => (
            <div 
              key={method.id}
              className={`border rounded-lg p-4 ${method.isDefault ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-gray-200 dark:border-dark-600'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-6 bg-gray-200 dark:bg-dark-600 rounded flex items-center justify-center mr-3">
                    {method.type === 'visa' ? (
                      <span className="text-xs font-bold text-blue-800">VISA</span>
                    ) : (
                      <span className="text-xs font-bold text-gray-800">MC</span>
                    )}
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    •••• •••• •••• {method.last4}
                  </span>
                </div>
                {method.isDefault && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400">
                    Default
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Expires {method.expiry}
                </span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                  {!method.isDefault && (
                    <Button variant="outline" size="sm">
                      Set Default
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Button variant="outline">
          <Plus size={16} className="mr-2" />
          Add New Payment Method
        </Button>
      </motion.div>

      {/* Billing History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-dark-600"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Billing History
          </h2>
          <Button variant="outline">
            <History size={16} className="mr-2" />
            View All
          </Button>
        </div>
        
        <div className="space-y-4">
          {mockBillingHistory.map((item) => (
            <div 
              key={item.id}
              className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-dark-600 last:border-0"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gray-100 dark:bg-dark-600 rounded-lg">
                  <DollarSign size={20} className="text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {item.description}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.date} • {item.id}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-white">
                    ${item.amount.toFixed(2)}
                  </p>
                  {getStatusBadge(item.status)}
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Current Plan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-dark-600"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Current Plan
        </h2>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              Professional Plan
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              $299.99 per month
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Next billing date: April 15, 2024
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline">
              Change Plan
            </Button>
            <Button variant="destructive">
              Cancel Subscription
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Billing;