import { motion } from 'framer-motion';
import Container from '../ui/Container';
import LogoCarousel from '../home/LogoCarousel';

const customerLogos = [
  { 
    name: 'TVS Motors', 
    logo: 'https://companieslogo.com/img/orig/TVS.MOTORS.BO-77de0f2c.png'
  },
  { 
    name: 'Hero MotoCorp', 
    logo: 'https://companieslogo.com/img/orig/HERO.BO-45bbd9f0.png'
  },
  { 
    name: 'Bajaj Auto', 
    logo: 'https://companieslogo.com/img/orig/BAJAJ-AUTO.BO-40653b06.png'
  },
  { 
    name: 'Amul', 
    logo: 'https://1000logos.net/wp-content/uploads/2021/11/Amul-Logo.png'
  },
  { 
    name: 'Britannia', 
    logo: 'https://companieslogo.com/img/orig/BRITANNIA.BO-49f38f34.png'
  },
  { 
    name: 'Parle', 
    logo: 'https://1000logos.net/wp-content/uploads/2021/11/Parle-Logo.png'
  },
  { 
    name: 'Titan', 
    logo: 'https://companieslogo.com/img/orig/TITAN.BO-28f0e507.png'
  },
  { 
    name: 'MRF', 
    logo: 'https://companieslogo.com/img/orig/MRF.BO-293b06f2.png'
  },
  { 
    name: 'Havells', 
    logo: 'https://companieslogo.com/img/orig/HAVELLS.BO-e800ef90.png'
  },
  { 
    name: 'Asian Paints', 
    logo: 'https://companieslogo.com/img/orig/ASIANPAINT.BO-ea9a9a30.png'
  }
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
                  Trusted by <span className="text-blue-600 dark:text-blue-400">Iconic</span> Indian Brands
                </h2>
                <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Join the most trusted Indian companies accelerating their growth with our platform
                </p>
              </motion.div>
              
              <LogoCarousel logos={customerLogos} />
            </Container>
          </section>
    )
}

export default CustomerLogos;