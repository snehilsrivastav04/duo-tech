import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, BarChart2, Users, Shield, Zap } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

interface FeaturesGridProps {
  features?: Feature[];
}

const iconMap = {
  CheckCircle,
  BarChart2,
  Users,
  Shield,
  Zap,
};

const defaultFeatures: Feature[] = [
    {
        icon: Zap,
        title: "Real-Time Alerts",
        description: "Instantly notify customers about order status, appointments, or critical updates.",
        color: "blue"
      },
      {
        icon: Users,
        title: "Two-Factor Authentication",
        description: "Enhance security with SMS-based verification codes for user logins and transactions.",
        color: "green"
      },
      {
        icon: BarChart2,
        title: "Promotional Campaigns",
        description: "Run large-scale SMS marketing campaigns to drive sales and customer engagement.",
        color: "purple"
      },
      {
        icon: Shield,
        title: "Customer Support",
        description: "Provide quick and reliable customer service through two-way SMS conversations.",
        color: "red"
      }
];

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features = defaultFeatures }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden">
      <Container>
        <SectionTitle 
          title="Unlock Growth with Versatile SMS Use Cases"
          subtitle="From marketing to customer support, our SMS Gateway is your all-in-one solution for effective communication."
          className="text-center mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-transparent hover:border-blue-300 dark:hover:border-blue-700 relative overflow-hidden h-full flex flex-col`}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Animated Background Blob */}
              <div className={`absolute top-0 left-0 w-24 h-24 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-full bg-${feature.color}-100 dark:bg-${feature.color}-900/30 flex items-center justify-center mb-5 border-2 border-${feature.color}-200 dark:border-${feature.color}-800 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">{feature.description}</p>
                </div>
              </div>

              {/* Geometric Corner Accents */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-gray-200 dark:border-gray-700 rounded-tl-lg opacity-0 group-hover:opacity-100 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-500" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-gray-200 dark:border-gray-700 rounded-tr-lg opacity-0 group-hover:opacity-100 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-500" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-gray-200 dark:border-gray-700 rounded-br-lg opacity-0 group-hover:opacity-100 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Background Geometric Elements */}
        <div className="absolute left-0 top-1/3 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute right-0 bottom-1/3 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
      </Container>
    </section>
  );
};

export default FeaturesGrid;