import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import CaseStudyCard from '../home/CaseStudyCard';

const caseStudiesData = [
  {
    title: "E-commerce Platform Redesign",
    challenge: "Fashion brand needed modern redesign to reduce bounce rates",
    solution: "Implemented React storefront with Shopify backend",
    results: "Increased conversions by 110% with 1.8s load time",
    metrics: ["110% conversion boost", "1.8s load time", "Mobile-first design"],
    logo: "/logos/fashion-brand.svg",
    platform: "React + Shopify",
    industry: "Fashion E-commerce"
  },
  {
    title: "Educational Portal Development",
    challenge: "Online learning platform required scalable course system",
    solution: "Custom Laravel backend with Vue.js frontend",
    results: "Handled 10x user growth with 99.99% uptime",
    metrics: ["10x user capacity", "99.99% uptime", "Interactive lessons"],
    logo: "/logos/edtech.svg",
    platform: "Vue.js + Laravel",
    industry: "EdTech"
  },
  {
    title: "Corporate Website Revamp",
    challenge: "Enterprise needed modern design reflecting their brand",
    solution: "WordPress VIP with custom React components",
    results: "Achieved 95+ Lighthouse score across all pages",
    metrics: ["95+ score", "3x faster", "WCAG compliant"],
    logo: "/logos/corporate.svg",
    platform: "WordPress + React",
    industry: "Corporate"
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Recent <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how we've helped businesses transform their digital presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((caseStudy, i) => (
            <CaseStudyCard key={i} caseStudy={caseStudy} index={i} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/50"
          >
            View All Case Studies
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudies;
