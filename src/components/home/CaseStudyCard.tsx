
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface CaseStudy {
    title: string;
    challenge: string;
    solution: string;
    results: string;
    metrics: string[];
    logo: string;
}

const CaseStudyCard: React.FC<{ caseStudy: CaseStudy, index: number }> = ({ caseStudy, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-blue-900/50 rounded-xl p-8 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
        >
            <img src={caseStudy.logo} alt={caseStudy.title} className="h-10 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{caseStudy.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{caseStudy.challenge}</p>
            <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{caseStudy.solution}</p>
            <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Results</h4>
            <ul className="space-y-2">
                {caseStudy.metrics.map((metric, i) => (
                <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{metric}</span>
                </li>
                ))}
            </ul>
        </motion.div>
    )
}

export default CaseStudyCard;
