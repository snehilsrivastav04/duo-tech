import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie, Shield, BarChart, Megaphone, X } from 'lucide-react';

declare global {
  interface Window {
    dataLayer: any[];
    clarity: {
      (action: string, ...args: any[]): void;
      q?: any[];
    };
  }
}

const consentTypes = [
  {
    id: 'necessary' as const,
    title: 'Necessary Cookies',
    description: 'These are required for basic site functionality and are always enabled.',
    icon: <Shield className="w-5 h-5 text-gray-500" />,
    locked: true,
  },
  {
    id: 'analytics' as const,
    title: 'Analytics Cookies',
    description: 'Google Analytics and Microsoft Clarity for understanding how you use our site.',
    icon: <BarChart className="w-5 h-5 text-gray-500" />,
  },
  {
    id: 'marketing' as const,
    title: 'Marketing Cookies',
    description: 'Google Tag Manager and advertising cookies to personalize your experience.',
    icon: <Megaphone className="w-5 h-5 text-gray-500" />,
  },
];

// Initialize GTM
const initializeGTM = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });
};

// Initialize Clarity
const initializeClarity = () => {
  window.clarity = window.clarity || function(){(window.clarity.q = window.clarity.q || []).push(arguments)};
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.clarity.ms/tag/uxsf84iq02';
  document.head.appendChild(script);
};

// Remove GTM
const removeGTM = () => {
  // Remove GTM script
  const gtmScripts = document.querySelectorAll('script[src*="googletagmanager.com/gtm.js"]');
  gtmScripts.forEach(script => script.remove());
  
  // Remove GTM iframes
  const gtmIframes = document.querySelectorAll('iframe[src*="googletagmanager.com/ns.html"]');
  gtmIframes.forEach(iframe => iframe.remove());
  
  // Clear dataLayer
  window.dataLayer = [];
};

// Remove Clarity
const removeClarity = () => {
  // Remove Clarity script
  const clarityScripts = document.querySelectorAll('script[src*="clarity.ms/tag/"]');
  clarityScripts.forEach(script => script.remove());
  
  // Clear Clarity object
  delete window.clarity;
};

type Consent = Record<typeof consentTypes[number]['id'], boolean>;

const ConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consents, setConsents] = useState<Consent>({ 
    necessary: true, 
    analytics: false, 
    marketing: false 
  });

  useEffect(() => {
    try {
      const consentData = localStorage.getItem('cookie-consent');
      if (!consentData) {
        setIsVisible(true);
      } else {
        const { preferences } = JSON.parse(consentData);
        setConsents(preferences);
        
        // Initialize services based on saved preferences
        if (preferences.analytics) {
          initializeClarity();
        }
        if (preferences.marketing) {
          initializeGTM();
        }
      }
    } catch (error) {
      console.error('Could not access localStorage:', error);
      // Default to showing the banner if there's an error
      setIsVisible(true);
    }
  }, []);

  const handleToggle = (id: keyof Consent) => {
    setConsents(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const savePreferences = (preferences: Consent) => {
    try {
      // Save preferences to localStorage
      localStorage.setItem('cookie-consent', JSON.stringify({ 
        timestamp: new Date().toISOString(), 
        version: '1.0',
        preferences 
      }));

      // Handle analytics preferences
      if (preferences.analytics) {
        initializeClarity();
      } else {
        removeClarity();
      }

      // Handle marketing preferences (GTM)
      if (preferences.marketing) {
        initializeGTM();
      } else {
        removeGTM();
      }

      // Update state and close modals
      setConsents(preferences);
      setIsVisible(false);
      setIsModalOpen(false);

    } catch (error) {
      console.error('Could not save preferences:', error);
    }
  };

  const handleAcceptAll = () => {
    const allConsents = { necessary: true, analytics: true, marketing: true };
    setConsents(allConsents);
    savePreferences(allConsents);
  };

  const handleDeclineAll = () => {
    const essentialConsents = { necessary: true, analytics: false, marketing: false };
    setConsents(essentialConsents);
    savePreferences(essentialConsents);
  };

  const handleSave = () => {
    savePreferences(consents);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Main Banner */}
      <AnimatePresence>
        {isVisible && !isModalOpen && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-t-xl"
          >
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                        <Cookie className="w-10 h-10 text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">We value your privacy</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm max-w-xl">
                                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our
                                <Link to="/privacy-policy" className="underline hover:text-blue-500 ml-1">Privacy Policy</Link>.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 mt-4 md:mt-0">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsModalOpen(true)}
                            className="px-6 py-2.5 text-sm font-semibold text-gray-800 dark:text-gray-200 bg-gray-200/60 dark:bg-gray-700/60 rounded-lg hover:bg-gray-300/80 dark:hover:bg-gray-600/80 transition-colors"
                        >
                            Customize
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleDeclineAll}
                            className="px-6 py-2.5 text-sm font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors"
                        >
                            Decline
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleAcceptAll}
                            className="px-8 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Accept All
                        </motion.button>
                    </div>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for Customization */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
            >
                {/* Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Customize Consent Preferences</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage your cookie settings. You can enable or disable different types of cookies below.</p>
                        </div>
                        <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                    {consentTypes.map(type => (
                        <div key={type.id} className={`p-4 rounded-lg border dark:border-gray-700 flex items-start gap-4 ${type.locked ? 'bg-gray-50 dark:bg-gray-700/30' : 'bg-transparent'}`}>
                            <div className="flex-shrink-0 mt-1">{type.icon}</div>
                            <div className="flex-grow">
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200">{type.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{type.description}</p>
                            </div>
                            <div className="flex-shrink-0 ml-4">
                                <label htmlFor={type.id} className="relative inline-flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        id={type.id} 
                                        className="sr-only peer"
                                        checked={consents[type.id]}
                                        disabled={type.locked}
                                        onChange={() => handleToggle(type.id)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 dark:after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Learn more in our <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.</p>
                    <div className="flex items-center gap-2">
                         <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleDeclineAll}
                            className="px-5 py-2 text-sm font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-colors"
                        >
                            Decline All
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSave}
                            className="px-5 py-2 text-sm font-semibold text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                            Save Preferences
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleAcceptAll}
                            className="px-5 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Accept All
                        </motion.button>
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConsentBanner;
