import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, PenTool, LayoutTemplate, ArrowRight, MessageSquare, Smartphone, TabletSmartphone } from 'lucide-react';
import Container from '../ui/Container';
import { useState } from 'react';

const services = [
  {
    title: 'IVR Service',
    icon: <Phone className="w-5 h-5" />,
    description: 'Automated voice solutions for seamless customer interactions.',
    category: 'Communication'
  },
  {
    title: 'SMS Services',
    icon: <MessageSquare className="w-5 h-5" />,
    description: 'Reliable messaging for promotional and transactional needs.',
    category: 'Communication'
  },
  {
    title: 'Virtual Numbers',
    icon: <Smartphone className="w-5 h-5" />,
    description: 'Professional virtual numbers for business communications.',
    category: 'Infrastructure'
  },
  {
    title: 'Toll Free Numbers',
    icon: <Phone className="w-5 h-5" />,
    description: 'Enhance customer accessibility with toll-free solutions.',
    category: 'Infrastructure'
  },
  {
    title: 'Email Marketing',
    icon: <Mail className="w-5 h-5" />,
    description: 'Effective email campaigns for business growth.',
    category: 'Marketing'
  },
  {
    title: 'WhatsApp Marketing',
    icon: <MessageSquare className="w-5 h-5" />,
    description: 'Engage customers through WhatsApp solutions.',
    category: 'Marketing'
  },
  {
    title: 'Digital Marketing',
    icon: <Globe className="w-5 h-5" />,
    description: 'Boost your online presence with comprehensive strategies.',
    category: 'Marketing'
  },
  {
    title: 'Website Development',
    icon: <Globe className="w-5 h-5" />,
    description: 'Custom websites tailored to your business.',
    category: 'Development'
  },
  {
    title: 'App Development',
    icon: <TabletSmartphone className="w-5 h-5" />,
    description: 'Feature-rich mobile applications.',
    category: 'Development'
  },
  {
    title: 'UI/UX Design',
    icon: <PenTool className="w-5 h-5" />,
    description: 'Intuitive designs for better user engagement.',
    category: 'Design'
  },
  {
    title: 'Graphic Design',
    icon: <PenTool className="w-5 h-5" />,
    description: 'Creative solutions for branding and marketing.',
    category: 'Design'
  },
  {
    title: 'Products',
    icon: <LayoutTemplate className="w-5 h-5" />,
    description: 'Specialized products for business operations.',
    category: 'Solutions'
  }
];

const categories = ['All', 'Communication', 'Marketing', 'Development', 'Design', 'Infrastructure', 'Solutions'];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getServiceRoute = (title: string) => {
    const routeMap: { [key: string]: string } = {
      'IVR Service': '/services/ivr',
      'SMS Services': '/services/bulk-sms',
      'Virtual Numbers': '/services/virtual-number',
      'Toll Free Numbers': '/services/toll-free-number',
      'Email Marketing': '/digital/email-marketing',
      'WhatsApp Marketing': '/services/whatsapp-bulk',
      'Digital Marketing': '/digital/seo',
      'Website Development': '/development/web',
      'App Development': '/development/android',
      'UI/UX Design': '/development/ui-ux',
      'Graphic Design': '/digital/graphic-design',
      'Products': '/products'
    };
    return routeMap[title] || '/services';
  };

  return (
    <Link to={getServiceRoute(service.title)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{ y: -8 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group relative h-full"
      >
        <motion.div
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.3 }}
          className="relative h-full p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
        >
          {/* Icon with subtle animation */}
          <motion.div
            animate={{ rotate: isHovered ? [0, 5, 0] : 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <div className="text-gray-600 dark:text-gray-400">
              {service.icon}
            </div>
          </motion.div>

          {/* Category tag */}
          <div className="inline-block mb-4">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider">
              {service.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-normal text-gray-900 dark:text-white mb-3">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Subtle indicator line */}
          <motion.div
            animate={{ width: isHovered ? '100%' : '40px' }}
            transition={{ duration: 0.3 }}
            className="h-[1px] bg-gray-300 dark:bg-gray-700 mb-6"
          />

          {/* Learn more text with arrow */}
          <div className="flex items-center space-x-2">
            <motion.span
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              className="text-sm font-normal text-gray-900 dark:text-white"
            >
              Learn More
            </motion.span>
            <motion.div
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredServices, setFilteredServices] = useState(services);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredServices(services);
    } else {
      setFilteredServices(services.filter(service => service.category === category));
    }
  };

  return (
    <section id="services" className="py-32 bg-white dark:bg-black">
      <Container>
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Minimal section label */}
            <div className="mb-8">
              <span className="text-sm tracking-[0.2em] text-gray-500 dark:text-gray-400">
                SERVICES
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white tracking-tight mb-6">
              Tailored Solutions
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
              Essential services designed for modern business needs
            </p>
          </motion.div>
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryClick(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-normal transition-all ${
                activeCategory === category
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col items-center space-y-6">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-3.5 border border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full text-sm font-normal hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors"
              >
                View All Services
              </motion.button>
            </Link>
            
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Need assistance?{' '}
              <Link 
                to="/contact" 
                className="text-gray-900 dark:text-white hover:underline transition-all inline-flex items-center space-x-1"
              >
                <span>Contact us</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Services;