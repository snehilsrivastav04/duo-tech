import React from 'react';
import { motion } from 'framer-motion';
import { Check, TrendingUp, ExternalLink, FolderOpen } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const caseStudies = [
  {
    name: "E-Commerce SEO",
    description: "Increased organic traffic by 247% for online fashion retailer",
    results: ["247% Traffic Growth", "89% Revenue Increase", "Top 3 Keywords: 142"],
    industry: "Fashion E-commerce",
    timeline: "6 Months"
  },
  {
    name: "Local Service Business",
    description: "Drove 100+ qualified leads monthly for plumbing company",
    results: ["Google #1 Ranking", "112 Monthly Leads", "5x ROI in 4 Months"],
    industry: "Home Services",
    timeline: "4 Months"
  },
  {
    name: "SaaS Platform",
    description: "Grew organic sign-ups by 300% for B2B software company",
    results: ["300% Sign-up Increase", "215% Traffic Growth", "30 Keywords #1"],
    industry: "SaaS",
    timeline: "8 Months"
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            SEO <span className="text-green-600 dark:text-green-400">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real results we've achieved for businesses across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-gradient-to-r from-green-500 to-teal-600 p-6">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <TrendingUp className="w-32 h-32 text-white" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-green-100">{project.industry}</p>
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white">
                    {project.timeline}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                <div className="space-y-3">
                  {project.results.map((result, j) => (
                    <div key={j} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-6 text-green-600 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/20"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  View Detailed Case Study
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/50"
            icon={<FolderOpen className="w-5 h-5" />}
          >
            View All Case Studies
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudies;
