import { motion } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

interface ChatbotButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatbotButton = ({ onClick, isOpen }: ChatbotButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
    </motion.button>
  );
};

export default ChatbotButton;