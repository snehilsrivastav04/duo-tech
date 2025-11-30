import { motion } from 'framer-motion';
import { obdContent } from '../../data/obd-data.tsx';

const UseCaseCard = ({ useCase, index }: { useCase: typeof obdContent.useCases.industries[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-white p-8 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center">
            {useCase.icon}
          </div>
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            {useCase.name}
          </span>
        </div>

        <h3 className="text-xl font-light text-gray-900 mb-3">
          {useCase.name}
        </h3>
        <p className="text-gray-600 font-light text-sm mb-6 leading-relaxed">
          {useCase.details}
        </p>

      </div>
    </motion.div>
  );
};


const UseCases = () => {
  const { title, industries } = obdContent.useCases;
  return (
    <section className="py-32 bg-gradient-to-br from-blue-50 to-blue-100/50">
        <div className="max-w-3xl mb-20">
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            {title}
        </h2>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
            Tailored communication strategies for every sector.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} index={index} />
        ))}
        </div>
  </section>
  )
}

export default UseCases;
