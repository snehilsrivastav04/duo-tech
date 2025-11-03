import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ShoppingBag, 
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  BarChart3,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { AdminStats } from '../../utils/types';
import Card from '../ui/Card';
import Button from '../ui/Button';

const mockStats: AdminStats = {
  totalUsers: 1250,
  totalOrders: 856,
  activeServices: 12,
  totalRevenue: 125000,
  ticketsOpen: 8,
  ticketsClosed: 45,
  newSignups: 28,
  activeSubscriptions: 450
};

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Users',
      value: mockStats.totalUsers,
      icon: <Users size={24} />,
      change: '+12%',
      isPositive: true
    },
    {
      title: 'Active Services',
      value: mockStats.activeServices,
      icon: <ShoppingBag size={24} />,
      change: '+8%',
      isPositive: true
    },
    {
      title: 'Monthly Revenue',
      value: `$${mockStats.totalRevenue.toLocaleString()}`,
      icon: <DollarSign size={24} />,
      change: '+15%',
      isPositive: true
    },
    {
      title: 'Active Subscriptions',
      value: mockStats.activeSubscriptions,
      icon: <TrendingUp size={24} />,
      change: '+5%',
      isPositive: true
    }
  ];

  const recentTickets = [
    {
      id: 'T-1234',
      subject: 'API Integration Issue',
      priority: 'high',
      status: 'open',
      timestamp: '10 minutes ago'
    },
    {
      id: 'T-1233',
      subject: 'Billing Question',
      priority: 'medium',
      status: 'in-progress',
      timestamp: '1 hour ago'
    },
    {
      id: 'T-1232',
      subject: 'Service Upgrade Request',
      priority: 'low',
      status: 'resolved',
      timestamp: '2 hours ago'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <AlertCircle size={16} className="text-red-500" />;
      case 'in-progress':
        return <Clock size={16} className="text-yellow-500" />;
      case 'resolved':
        return <CheckCircle2 size={16} className="text-green-500" />;
      default:
        return null;
    }
  };

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'low':
        return 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400">
                  {stat.icon}
                </div>
                <div className={`flex items-center ${
                  stat.isPositive ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change}
                  {stat.isPositive ? (
                    <ArrowUpRight size={16} className="ml-1" />
                  ) : (
                    <ArrowDownRight size={16} className="ml-1" />
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {stat.title}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Revenue Overview
              </h3>
              <Button variant="outline" size="sm">
                View Report
              </Button>
            </div>
            <div className="h-64 flex items-end justify-between space-x-2">
              {[40, 70, 45, 90, 65, 85, 55].map((height, index) => (
                <motion.div
                  key={index}
                  className="bg-primary-200 dark:bg-primary-700 rounded-t-lg w-full"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </Card>
        </motion.div>

        {/* Service Usage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Service Usage
              </h3>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
            <div className="space-y-6">
              {[
                { name: 'API Calls', used: 75000, total: 100000 },
                { name: 'Storage', used: 450, total: 1000 },
                { name: 'Bandwidth', used: 800, total: 1000 }
              ].map((service, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {service.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {service.used} / {service.total}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(service.used / service.total) * 100}%` }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Recent Tickets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Recent Support Tickets
            </h3>
            <Button variant="outline" size="sm">
              View All Tickets
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-200 dark:border-dark-600">
                  <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Ticket ID</th>
                  <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Subject</th>
                  <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Priority</th>
                  <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Status</th>
                  <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentTickets.map((ticket, index) => (
                  <motion.tr
                    key={ticket.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-b border-gray-100 dark:border-dark-600 last:border-0"
                  >
                    <td className="py-4 text-gray-900 dark:text-white font-medium">
                      {ticket.id}
                    </td>
                    <td className="py-4 text-gray-700 dark:text-gray-300">
                      {ticket.subject}
                    </td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityClass(ticket.priority)}`}>
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center">
                        {getStatusIcon(ticket.status)}
                        <span className="ml-2 text-gray-700 dark:text-gray-300">
                          {ticket.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-gray-600 dark:text-gray-400">
                      {ticket.timestamp}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>

      {/* Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Recent Notifications
            </h3>
            <Button variant="outline" size="sm" icon={<Bell size={16} />}>
              Mark All as Read
            </Button>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'New User Registration',
                description: 'John Doe has registered a new account',
                time: '5 minutes ago',
                type: 'user'
              },
              {
                title: 'Server Alert',
                description: 'High CPU usage detected on Server #123',
                time: '10 minutes ago',
                type: 'alert'
              },
              {
                title: 'Payment Received',
                description: 'Payment of $299.99 received from Client #456',
                time: '1 hour ago',
                type: 'payment'
              }
            ].map((notification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start p-4 bg-gray-50 dark:bg-dark-600 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {notification.type === 'user' ? (
                      <Users size={20} />
                    ) : notification.type === 'alert' ? (
                      <AlertCircle size={20} />
                    ) : (
                      <DollarSign size={20} />
                    )}
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    {notification.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {notification.description}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {notification.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Dashboard;