import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa"; // Official WhatsApp icon

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // Function to handle WhatsApp click
  const handleWhatsAppClick = () => {
    const phoneNumber = "918800722190"; // Your WhatsApp number (no + or spaces)
    const message = "Hello, I would like to know more about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-800">
      <Navbar />

      {/* Main Content */}
      <motion.main
        className="flex-grow pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>

      {/* WhatsApp Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-xl flex items-center justify-center group"
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={34} />

        {/* Tooltip */}
        <span className="absolute right-20 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          Chat on WhatsApp
        </span>
      </motion.button>

      <Footer />
    </div>
  );
};

export default MainLayout;
