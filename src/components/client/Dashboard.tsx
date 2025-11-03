import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package,
  Ticket,
  CreditCard,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  Server,
  HardDrive,
  Cpu,
  Database,
  FileText,
  Mail,
  DollarSign,
  History,
  Plus
} from 'lucide-react';
import Button from '../ui/Button';

const mockData = {
  activeServices: 3,
  openTickets: 2,
  nextBilling: new Date(2024, 3, 15),
  recentActivity: [
    {
      id: 1,
      type: 'service_activated',
      title: 'Bulk SMS Service Activated',
      date: new Date(2024, 2, 10),
      status: 'success'
    },
    {
      id: 2,
      type: 'ticket_updated',
      title: 'Support Ticket #1234 Updated',
      date: new Date(2024, 2, 9),
      status: 'pending'
    },
    {
      id: 3,
      type: 'payment_processed',
      title: 'Monthly Payment Processed',
      date: new Date(2024, 2, 8),
      status: 'success'
    }
  ],
  serviceUsage: [
    {
      name: 'SMS Credits',
      used: 7500,
      total: 10000,
      percentage: 75
    },
    {
      name: 'API Calls',
      used: 45000,
      total: 100000,
      percentage: 45
    },
    {
      name: 'Storage',
      used: 4.2,
      total: 10,
      percentage: 42
    }
  ],
  services: [
    {
      id: 1,
      name: 'Bulk SMS Service',
      type: 'messaging',
      status: 'active',
      icon: <Server size={20} />,
      usage: 75
    },
    {
      id: 2,
      name: 'Cloud Hosting',
      type: 'hosting',
      status: 'active',
      icon: <HardDrive size={20} />,
      usage: 50
    },
    {
      id: 3,
      name: 'API Gateway',
      type: 'api',
      status: 'warning',
      icon: <Cpu size={20} />,
      usage: 45
    }
  ],
  invoices: [
    {
      id: 'INV-2024-003',
      date: '2024-03-15',
      amount: 299.99,
      status: 'paid'
    },
    {
      id: 'INV-2024-002',
      date: '2024-02-15',
      amount: 299.99,
      status: 'paid'
    }
  ],
  messages: [
    {
      id: 1,
      from: 'support@company.com',
      subject: 'Your support ticket has been resolved',
      date: '2024-03-10',
      read: false
    },
    {
      id: 2,
      from: 'billing@company.com',
      subject: 'Invoice #INV-2024-003 is ready',
      date: '2024-03-05',
      read: true
    }
  ],
  billing: {
    nextPayment: '$299.99',
    dueDate: 'April 15, 2024',
    paymentMethod: 'VISA •••• 4242'
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
    case 'paid':
    case 'success':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
          <CheckCircle2 size={12} className="mr-1" /> {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      );
    case 'warning':
    case 'pending':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
          <Clock size={12} className="mr-1" /> {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      );
    case 'error':
    case 'overdue':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
          <AlertCircle size={12} className="mr-1" /> {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      );
    default:
      return null;
  }
};

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Active Services',
      value: mockData.activeServices,
      icon: <Package size={24} />,
      change: '+1',
      isPositive: true
    },
    {
      title: 'Open Tickets',
      value: mockData.openTickets,
      icon: <Ticket size={24} />,
      change: '-2',
      isPositive: true
    },
    {
      title: 'Next Billing',
      value: mockData.nextBilling.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      icon: <CreditCard size={24} />,
      change: '$299.99',
      isPositive: null
    },
    {
      title: 'Notifications',
      value: '3 New',
      icon: <Bell size={24} />,
      change: 'View all',
      isPositive: null
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white"
      >
        <h1 className="text-2xl font-bold mb-2">Welcome back!</h1>
        <p className="opacity-90">Here's what's happening with your services today.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400">
                {stat.icon}
              </div>
              {stat.change && (
                <div className={`flex items-center ${
                  stat.isPositive === null 
                    ? 'text-gray-500 dark:text-gray-400' 
                    : stat.isPositive 
                      ? 'text-green-500' 
                      : 'text-red-500'
                }`}>
                  {stat.change}
                  {stat.isPositive !== null && (
                    stat.isPositive 
                      ? <ArrowUpRight size={16} className="ml-1" />
                      : <ArrowDownRight size={16} className="ml-1" />
                  )}
                </div>
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {stat.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {stat.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Services and Billing Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Active Services
            </h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {mockData.services.map((service) => (
              <div 
                key={service.id}
                className="flex items-center justify-between p-4 border border-gray-200 dark:border-dark-600 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gray-100 dark:bg-dark-600 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {service.name}
                    </h3>
                    <div className="w-32 h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden mt-1">
                      <div 
                        className="h-full bg-primary-500 rounded-full"
                        style={{ width: `${service.usage}%` }}
                      />
                    </div>
                  </div>
                </div>
                {getStatusBadge(service.status)}
              </div>
            ))}
            <Button variant="outline" className="w-full">
              <Plus size={16} className="mr-2" />
              Add New Service
            </Button>
          </div>
        </motion.div>

        {/* Billing Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Billing Summary
            </h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-dark-600 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Next Payment
                </h3>
                <span className="font-bold text-primary-600 dark:text-primary-400">
                  {mockData.billing.nextPayment}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>Due {mockData.billing.dueDate}</span>
                <span>{mockData.billing.paymentMethod}</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                Recent Invoices
              </h3>
              <div className="space-y-3">
                {mockData.invoices.map((invoice) => (
                  <div 
                    key={invoice.id}
                    className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-dark-600 last:border-0"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText size={18} className="text-gray-500 dark:text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {invoice.id}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {invoice.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-medium">
                        ${invoice.amount.toFixed(2)}
                      </span>
                      {getStatusBadge(invoice.status)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity and Messages Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Recent Activity
            </h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {mockData.recentActivity.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-dark-600 last:border-0"
              >
                <div className="flex items-center space-x-3">
                  {getStatusIcon(activity.status)}
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {activity.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Details
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Recent Messages
            </h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {mockData.messages.map((message) => (
              <div 
                key={message.id}
                className={`p-4 rounded-lg ${!message.read ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-50 dark:hover:bg-dark-600'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <Mail size={18} className="mr-3 text-gray-500 dark:text-gray-400" />
                    <span className={`font-medium ${!message.read ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                      {message.from}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {message.date}
                  </span>
                </div>
                <h3 className={`text-sm ${!message.read ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'} ml-8`}>
                  {message.subject}
                </h3>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              <Mail size={16} className="mr-2" />
              View All Messages
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Service Usage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-sm"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Service Usage
        </h2>
        <div className="space-y-6">
          {mockData.serviceUsage.map((service, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {service.name}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {service.used.toLocaleString()} / {service.total.toLocaleString()}
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary-500 rounded-full transition-all duration-500"
                  style={{ width: `${service.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

function getStatusIcon(status: string) {
  switch (status) {
    case 'success':
      return <CheckCircle2 size={16} className="text-green-500" />;
    case 'pending':
      return <Clock size={16} className="text-yellow-500" />;
    case 'error':
      return <AlertCircle size={16} className="text-red-500" />;
    default:
      return null;
  }
}

export default Dashboard;