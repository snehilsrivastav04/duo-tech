import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  GitBranch, 
  Terminal, 
  ArrowRight, 
  ChevronRight,
  Cpu,
  ShieldCheck,
  Zap,
  LucideIcon
} from 'lucide-react';

// Define types for props
interface ContainerProps {
  children: ReactNode;
  className?: string;
}

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  icon?: ReactNode;
}

// Mock UI Components to make the file self-contained
const Container = ({ children, className = "" }: ContainerProps) => (
  <div className={`max-w-7xl mx-auto px-6 md:px-12 ${className}`}>{children}</div>
);

const Button = ({ children, variant = "primary", className = "", icon }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 transition-all duration-300 font-medium tracking-tight rounded-none";
  const variants: Record<string, string> = {
    primary: "bg-blue-950 text-white hover:bg-blue-900",
    secondary: "border border-gray-200 text-gray-900 hover:border-gray-900"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
      {icon && <span className="ml-3">{icon}</span>}
    </button>
  );
};

const Integration = () => {
  const [activeStep, setActiveStep] = useState(0);

  const integrationFeatures = [
    {
      id: 0,
      icon: <Code size={20} />,
      title: 'Restful API Architecture',
      description: 'A clean, semantic API structure designed for performance and predictable development cycles.',
      code: `const client = new DuoTechno({
  apiKey: 'dt_live_492...',
  version: '2024-01'
});`
    },
    {
      id: 1,
      icon: <ShieldCheck size={20} />,
      title: 'End-to-End Encryption',
      description: 'Data is secured at the source. We implement AES-256 at rest and TLS 1.3 for all data in transit.',
      code: `// Secure tunnel initialization
await client.security.init({
  mode: 'enterprise',
  rotateKeys: true
});`
    },
    {
      id: 2,
      icon: <Zap size={20} />,
      title: 'Real-time Webhooks',
      description: 'Sub-millisecond latency for event streaming and automated system triggers across your stack.',
      code: `client.webhooks.listen('message.sent', (evt) => {
  console.log('Event verified:', evt.id);
});`
    }
  ];

  return (
    <section id="integrations" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Content - Typography & Service List */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-6 block">
                Technical Infrastructure
              </span>
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white leading-[1.1] mb-8">
                The architecture of <span className="font-medium">seamless</span> flow.
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-12 max-w-md">
                We believe integration shouldn't be a hurdle. Our minimalist SDKs allow you to connect entire ecosystems with a few lines of refined code.
              </p>

              <div className="space-y-0 border-t border-gray-100 dark:border-gray-800">
                {integrationFeatures.map((item, index) => (
                  <button
                    key={item.id}
                    onMouseEnter={() => setActiveStep(index)}
                    className={`group w-full flex items-center justify-between py-6 border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${
                      activeStep === index ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center space-x-6">
                      <span className="text-xs font-mono text-gray-400">0{index + 1}</span>
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white">{item.title}</h3>
                    </div>
                    <motion.div
                      animate={{ x: activeStep === index ? 0 : -10, opacity: activeStep === index ? 1 : 0 }}
                      className="text-blue-600"
                    >
                      <ChevronRight size={20} />
                    </motion.div>
                  </button>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-6">
                <Button variant="primary" icon={<ArrowRight size={18} />}>
                  Explore Docs
                </Button>
                <Button variant="secondary">
                  API Reference
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Visual Showcase */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="w-full relative">
              {/* Decorative Geometric Shapes */}
              <div className="absolute -top-12 -right-12 w-64 h-64 border border-gray-100 dark:border-gray-800 rounded-full z-0" />
              <div className="absolute -bottom-24 -left-12 w-96 h-96 border border-gray-100 dark:border-gray-800 rounded-full z-0" />

              <motion.div
                layout
                className="relative z-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] p-1 rounded-sm overflow-hidden"
              >
                {/* Terminal Header */}
                <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                    duo_techno_core.v2
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-8"
                    >
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 inline-flex items-center justify-center text-blue-600 mb-2">
                        {integrationFeatures[activeStep].icon}
                      </div>
                      
                      <div>
                        <h4 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                          {integrationFeatures[activeStep].title}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-sm">
                          {integrationFeatures[activeStep].description}
                        </p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-950 p-6 rounded-sm border border-gray-100 dark:border-gray-800 font-mono text-sm">
                        <pre className="text-blue-600 dark:text-blue-400 overflow-x-auto">
                          <code>{integrationFeatures[activeStep].code}</code>
                        </pre>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-12 flex items-center space-x-8 opacity-40 grayscale">
                    <div className="flex items-center space-x-2 text-xs font-mono">
                      <Cpu size={14} />
                      <span>v14.2.0</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-mono">
                      <Terminal size={14} />
                      <span>Bash</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-mono">
                      <GitBranch size={14} />
                      <span>main</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 md:right-12 z-20 bg-blue-950 text-white p-6 md:p-8 shadow-2xl"
              >
                <div className="text-3xl font-light">99.9%</div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">Uptime SLA</div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Integration;