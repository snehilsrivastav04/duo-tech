import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Paperclip,
  Star,
  Archive,
  Trash2,
  Reply,
  Forward
} from 'lucide-react';
import Button from '../ui/Button';

const mockMessages = [
  {
    id: 1,
    from: 'support@company.com',
    subject: 'Your recent support ticket has been resolved',
    preview: 'We have resolved your support ticket #1234 regarding the API issues...',
    date: '2024-03-10',
    read: false,
    starred: true,
    hasAttachment: false
  },
  {
    id: 2,
    from: 'billing@company.com',
    subject: 'Invoice #INV-2024-003 is ready',
    preview: 'Your invoice for March 2024 is now available in your portal...',
    date: '2024-03-05',
    read: true,
    starred: false,
    hasAttachment: true
  },
  {
    id: 3,
    from: 'notifications@company.com',
    subject: 'Scheduled maintenance on March 15th',
    preview: 'We will be performing scheduled maintenance on our servers...',
    date: '2024-02-28',
    read: true,
    starred: false,
    hasAttachment: false
  },
  {
    id: 4,
    from: 'marketing@company.com',
    subject: 'New features available in your dashboard',
    preview: 'We have released new features that might interest you...',
    date: '2024-02-15',
    read: true,
    starred: false,
    hasAttachment: false
  }
];

const Messages: React.FC = () => {
  const [selectedMessage, setSelectedMessage] = React.useState<number | null>(null);

  return (
    <div className="space-y-8">
      {/* Header with action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Messages</h1>
          <p className="text-gray-600 dark:text-gray-400">Communications from our team</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            New Message
          </Button>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-dark-700 rounded-xl shadow-sm border border-gray-200 dark:border-dark-600 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          {/* Message List */}
          <div className={`${selectedMessage ? 'hidden md:block md:w-1/3' : 'w-full'} border-r border-gray-200 dark:border-dark-600`}>
            {/* Filters */}
            <div className="p-4 border-b border-gray-200 dark:border-dark-600">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Search messages..."
                />
              </div>
            </div>

            {/* Message List */}
            <div className="divide-y divide-gray-200 dark:divide-dark-600 max-h-[calc(100vh-300px)] overflow-y-auto">
              {mockMessages.map((message) => (
                <div 
                  key={message.id}
                  onClick={() => setSelectedMessage(message.id)}
                  className={`p-4 hover:bg-gray-50 dark:hover:bg-dark-600 cursor-pointer ${!message.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // Toggle star
                        }}
                        className="mr-2 text-gray-400 hover:text-yellow-400"
                      >
                        <Star 
                          size={16} 
                          className={message.starred ? 'fill-yellow-400 text-yellow-400' : ''} 
                        />
                      </button>
                      <span className={`font-medium ${!message.read ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                        {message.from}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {message.date}
                    </span>
                  </div>
                  <h3 className={`text-sm ${!message.read ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                    {message.subject}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {message.preview}
                  </p>
                  {message.hasAttachment && (
                    <div className="mt-1">
                      <Paperclip size={14} className="text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Message View */}
          {selectedMessage ? (
            <div className="md:w-2/3">
              <div className="p-4 border-b border-gray-200 dark:border-dark-600 flex items-center justify-between">
                <button 
                  onClick={() => setSelectedMessage(null)}
                  className="md:hidden flex items-center text-gray-600 dark:text-gray-400"
                >
                  <ChevronLeft size={16} className="mr-1" />
                  Back
                </button>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Reply size={16} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Forward size={16} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Archive size={16} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
              
              <div className="p-6 max-h-[calc(100vh-300px)] overflow-y-auto">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {mockMessages.find(m => m.id === selectedMessage)?.subject}
                  </h2>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-dark-600 flex items-center justify-center mr-3">
                        <Mail size={20} className="text-gray-500 dark:text-gray-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {mockMessages.find(m => m.id === selectedMessage)?.from}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          to me
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {mockMessages.find(m => m.id === selectedMessage)?.date}
                    </p>
                  </div>
                </div>
                
                <div className="prose dark:prose-invert max-w-none">
                  <p>Dear Valued Customer,</p>
                  
                  <p>
                    {mockMessages.find(m => m.id === selectedMessage)?.preview}
                  </p>
                  
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
                  
                  <p>Best regards,<br />Support Team</p>
                </div>
                
                {mockMessages.find(m => m.id === selectedMessage)?.hasAttachment && (
                  <div className="mt-6 border-t border-gray-200 dark:border-dark-600 pt-6">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Attachments</h3>
                    <div className="inline-flex items-center px-4 py-2 border border-gray-200 dark:border-dark-600 rounded-lg">
                      <Paperclip size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm font-medium">invoice_2024_03.pdf</span>
                      <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">(2.4 MB)</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-4 border-t border-gray-200 dark:border-dark-600">
                <div className="flex gap-3">
                  <Button variant="outline">
                    <Reply size={16} className="mr-2" />
                    Reply
                  </Button>
                  <Button>
                    <Forward size={16} className="mr-2" />
                    Forward
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex md:w-2/3 items-center justify-center bg-gray-50 dark:bg-dark-800">
              <div className="text-center">
                <Mail size={48} className="mx-auto text-gray-400 dark:text-gray-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Select a message to read</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  Choose a message from the list to view its contents
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Messages;