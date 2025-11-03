import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Package, 
  Ticket,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  MessageSquare,
  CreditCard
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const logout = useAuthStore(state => state.logout);

  const menuItems = [
    { 
      icon: <LayoutDashboard size={20} />, 
      label: 'Dashboard', 
      path: '/client' 
    },
    { 
      icon: <Package size={20} />, 
      label: 'My Services', 
      path: '/client/services' 
    },
    { 
      icon: <Ticket size={20} />, 
      label: 'Support Tickets', 
      path: '/client/tickets' 
    },
    { 
      icon: <FileText size={20} />, 
      label: 'Invoices', 
      path: '/client/invoices' 
    },
    { 
      icon: <MessageSquare size={20} />, 
      label: 'Messages', 
      path: '/client/messages' 
    },
    { 
      icon: <CreditCard size={20} />, 
      label: 'Billing', 
      path: '/client/billing' 
    },
    { 
      icon: <Settings size={20} />, 
      label: 'Settings', 
      path: '/client/settings' 
    },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-800">
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-dark-700 border-r border-gray-200 dark:border-dark-600 w-64">
          <div className="flex items-center justify-between mb-6 px-2">
            <Link to="/client" className="text-2xl font-bold text-primary-600">
              Client Portal
            </Link>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-600'
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </Link>
            ))}

            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-600 transition-colors"
            >
              <LogOut size={20} />
              <span className="ml-3">Logout</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'md:ml-64' : ''} p-4 md:p-8`}>
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between mb-6">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-700 dark:text-gray-300"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Client Portal
          </h1>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientLayout;