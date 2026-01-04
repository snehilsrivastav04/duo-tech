
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import LogoCarousel from '../home/LogoCarousel';

const customerLogos = [
    { name: 'TechCorp', logo: '/logos/techcorp.svg' },
    { name: 'Innova', logo: '/logos/innova.svg' },
    { name: 'GlobalSoft', logo: '/logos/globalsoft.svg' },
    { name: 'DataSystems', logo: '/logos/datasystems.svg' },
    { name: 'CloudNine', logo: '/logos/cloudnine.svg' },
    { name: 'NextWave', logo: '/logos/nextwave.svg' },
    { name: 'DigitalFirst', logo: '/logos/digitalfirst.svg' }
  ];

const CustomerLogos = () => {
    return (
        <section id="customers" className="py-20 bg-gray-50 dark:bg-blue-950/50">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Trusted by <span className="text-blue-600 dark:text-blue-400">Innovative</span> Companies
                </h2>
                <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Join thousands of businesses accelerating their growth with our platform
                </p>
              </motion.div>
              
              <LogoCarousel logos={customerLogos} />
            </Container>
          </section>
    )
}

export default CustomerLogos;
