
import { motion } from 'framer-motion';

interface Logo {
    name: string;
    logo: string;
}

const LogoCarousel: React.FC<{ logos: Logo[] }> = ({ logos }) => {
    const duplicatedLogos = [...logos, ...logos];
    return (
        <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: ['-100%', '0%'],
            transition: {
              ease: 'linear',
              duration: 20,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/4 md:w-1/7 flex items-center justify-center p-4"
            >
              <img src={logo.logo} alt={logo.name} className="h-12 w-auto" />
            </div>
          ))}
        </motion.div>
      </div>
    )
}

export default LogoCarousel;
