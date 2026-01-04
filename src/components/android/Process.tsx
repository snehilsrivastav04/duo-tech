import React from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, Settings, Cpu, ArrowRight } from 'lucide-react';
import { FaRegLightbulb, FaGooglePlay } from 'react-icons/fa';
import Container from '../ui/Container';
import Button from '../ui/Button';

const processData = [
  {
    title: "Discovery",
    description: "Requirement gathering & planning",
    icon: <FaRegLightbulb className="w-6 h-6" />
  },
  {
    title: "Design",
    description: "Wireframing & UI mockups",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    title: "Development",
    description: "Coding & implementation",
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "Testing",
    description: "QA & performance optimization",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "Deployment",
    description: "Play Store submission",
    icon: <FaGooglePlay className="w-6 h-6" />
  },
  {
    title: "Maintenance",
    description: "Updates & support",
    icon: <Cpu className="w-6 h-6" />
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-40 bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-8 px-5 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-900/30"
          >
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
            From idea to
            <br />
            <span className="font-normal text-blue-600 dark:text-blue-400">reality</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
            A transparent, collaborative approach that transforms your vision into exceptional software
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="hidden lg:block relative">
            <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent"></div>

            <div className="grid grid-cols-6 gap-8">
              {processData.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-dark-900 shadow-lg z-10 group-hover:bg-blue-500 transition-colors"
                  />

                  <div className="pt-32">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white dark:group-hover:from-blue-600 dark:group-hover:to-blue-700 transition-all duration-500"
                    >
                      {step.icon}
                    </motion.div>

                    <div className="text-6xl font-light text-gray-200 dark:text-dark-700 mb-4 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      0{i + 1}
                    </div>

                    <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:hidden space-y-12">
            {processData.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative pl-20 group"
              >
                {i < processData.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-blue-300 to-transparent dark:from-blue-700"></div>
                )}

                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute left-6 top-8 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-dark-900 shadow-lg group-hover:bg-blue-500 transition-colors"
                />

                <div className="text-5xl font-light text-gray-200 dark:text-dark-700 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  0{i + 1}
                </div>

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white dark:group-hover:from-blue-600 dark:group-hover:to-blue-700 transition-all duration-500"
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-24"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 font-light mb-6">
            Ready to see how we can bring your project to life?
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="primary"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-base shadow-lg shadow-blue-600/30"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Process;