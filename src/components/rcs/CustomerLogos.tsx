import React from 'react';
import { motion } from 'framer-motion';
import LogoCarousel from '../home/LogoCarousel';
import Container from '../ui/Container';

const rcsData = {
  customerLogos: [
    { name: 'RetailChain', logo: '/logos/retailchain.svg' },
    { name: 'BankGlobal', logo: '/logos/bankglobal.svg' },
    { name: 'TravelNow', logo: '/logos/travelnow.svg' },
    { name: 'HealthPlus', logo: '/logos/healthplus.svg' },
    { name: 'AutoDealers', logo: '/logos/autodealers.svg' },
    { name: 'EduTech', logo: '/logos/edutech.svg' }
  ]
};

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
            Trusted by <span className="text-blue-600 dark:text-blue-400/50">Leading</span> Brands
          </h2>
          <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
            Industry leaders who trust our RCS messaging platform
          </p>
        </motion.div>
        
        <LogoCarousel logos={rcsData.customerLogos} />
      </Container>
    </section>
  )
}

export default CustomerLogos;