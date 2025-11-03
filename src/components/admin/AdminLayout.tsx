import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  Package,
  CreditCard,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  Bell,
  PieChart,
  FileText
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const logout = useAuthStore(state => state.logout);

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/admin' },
    { icon: <Users size={20} />, label: 'Clients', path: '/admin/clients' },
    { icon: <ShoppingBag size={20} />, label: 'Services', path: '/admin/services' },
    { icon: <Package size={20} />, label: 'Products', path: '/admin/products' },
    { icon: <CreditCard size={20} />, label: 'Billing', path: '/admin/billing' },
    { icon: <MessageSquare size={20} />, label: 'Tickets', path: '/admin/tickets' },
    { icon: <PieChart size={20} />, label: 'Analytics', path: '/admin/analytics' },
    { icon: <FileText size={20} />, label: 'Reports', path: '/admin/reports' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/admin/settings' },
  ];

  useEffect(() => {
    // API calls commented out to prevent connection errors
    // TODO: Implement proper backend integration when server is available
    /*
    const fetchUserData = async () => {
      try {
        const res = await fetch('/api/admin/user', { credentials: 'include' });
        const data = await res.json();
        setUser(data.user);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    const fetchNotifications = async () => {
      try {
        const res = await fetch('/api/notifications', { credentials: 'include' });
        const data = await res.json();
        setNotifications(data.notifications);
        setUnreadCount(data.unreadCount);
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    };

    fetchUserData();
    fetchNotifications();
    */
  }, []);

  const handleLogout = async () => {
    try {
      // API call commented out to prevent connection errors
      // await fetch('/api/auth/logout', {
      //   method: 'POST',
      //   credentials: 'include',
      // });
      logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const markAsRead = async (id: number) => {
    try {
      // API call commented out to prevent connection errors
      // await fetch(`/api/notifications/${id}/read`, {
      //   method: 'PATCH',
      //   credentials: 'include',
      // });
      setNotifications(notifications.map(n =>
        n.id === id ? { ...n, read: true } : n
      ));
      setUnreadCount(prev => Math.max(prev - 1, 0));
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
    }
  };

  const markAllAsRead = async () => {
    try {
      // API call commented out to prevent connection errors
      // await fetch('/api/notifications/mark-all-read', {
      //   method: 'PATCH',
      //   credentials: 'include',
      // });
      setNotifications(notifications.map(n => ({ ...n, read: true })));
      setUnreadCount(0);
    } catch (error) {
      console.error('Failed to mark all notifications as read:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        {/* Sidebar content (omitted for brevity) */}
      </aside>

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'md:ml-64' : ''} p-4 md:p-8`}>
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between mb-6">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>

        {/* Notifications Dropdown */}
        {notificationsOpen && (
          <div className="absolute right-4 mt-2 w-80 bg-white rounded-md shadow-lg z-50">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Notifications ({unreadCount})</h3>
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-blue-500"
                >
                  Mark all as read
                </button>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.length > 0 ? (
                notifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <p className="text-sm">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {notification.createdAt}
                    </p>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">
                  No notifications
                </div>
              )}
            </div>
          </div>
        )}

        {/* Page Content */}
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

export default AdminLayout;
