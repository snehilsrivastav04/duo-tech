import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Search, ShoppingCart, DollarSign, Globe, Settings, Edit2 } from 'lucide-react';
import ChatbotButton from './ChatbotButton';
import ChatbotWindow from './ChatbotWindow';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && <ChatbotWindow />}
      </AnimatePresence>
      <ChatbotButton onClick={toggleChatbot} isOpen={isOpen} />
    </div>
  );
};

export default Chatbot;