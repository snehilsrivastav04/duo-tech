import React from 'react';
import { motion } from 'framer-motion';
import { User, Pencil, Trash2, MoreVertical, UserPlus } from 'lucide-react';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2024-03-15T10:30:00'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    status: 'active',
    lastLogin: '2024-03-14T15:45:00'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'user',
    status: 'inactive',
    lastLogin: '2024-03-10T09:20:00'
  }
];

const UsersTable: React.FC = () => {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Users</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage system users and their permissions</p>
        </div>
        <Button variant="primary" icon={<UserPlus size={18} />}>
          Add User
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-200 dark:border-dark-600">
              <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">User</th>
              <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Role</th>
              <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Status</th>
              <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Last Login</th>
              <th className="pb-3 font-semibold text-gray-600 dark:text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((user, index) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-b border-gray-100 dark:border-dark-600 last:border-0"
              >
                <td className="py-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <User size={20} />
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900 dark:text-white">{user.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.role === 'admin' 
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400'
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.status === 'active'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-4 text-gray-600 dark:text-gray-400">
                  {new Date(user.lastLogin).toLocaleDateString()}
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

export default UsersTable;