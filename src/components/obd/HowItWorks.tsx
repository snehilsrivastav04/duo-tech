import { motion } from 'framer-motion';
import { obdContent } from '../../data/obd-data.tsx';

const ProcessStep = ({ step, index, isLast }: { step: typeof obdContent.howItWorks.steps[0]; index: number; isLast: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 border-2 border-blue-600 flex items-center justify-center">
            <span className="text-sm font-light text-blue-600">{index+1}</span>
          </div>
          {!isLast && (
            <div className="w-0.5 h-24 bg-blue-600/20 ml-8 mt-4" />
          )}
        </div>
        <div className="pt-3">
          <h3 className="text-lg font-normal text-gray-900 mb-2">
            {step.title}
          </h3>
          <p className="text-gray-600 font-light text-sm">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const { title, steps } = obdContent.howItWorks;
  return (
    <section className="py-32 bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            {title}
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
            From setup to results in four straightforward steps.
            </p>
        </div>

        <div className="space-y-0">
            {steps.map((step, index) => (
            <ProcessStep 
                key={index} 
                step={step} 
                index={index} 
                isLast={index === steps.length - 1}
            />
            ))}
        </div>
        </div>
  </section>
  )
}

export default HowItWorks;
