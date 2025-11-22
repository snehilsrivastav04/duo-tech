import { useState, useEffect, useRef } from 'react';

interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: string[];
  logo: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

const CaseStudyCard = ({ caseStudy, index }: CaseStudyCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}
      className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-2xl hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-500"
    >
      <div className="p-12">
        <div className="flex items-center mb-8">
          <div className="h-14 w-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-5 flex-shrink-0">
            <span className="text-white text-xl font-light">{caseStudy.logo}</span>
          </div>
          <h3 className="text-3xl font-light text-gray-900 dark:text-white tracking-tight">{caseStudy.title}</h3>
        </div>
        
        <div className="space-y-8">
          <div className="border-l-2 border-blue-600 pl-6">
            <h4 className="text-xs font-medium tracking-widest text-blue-600 dark:text-blue-400 mb-3">CHALLENGE</h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">{caseStudy.challenge}</p>
          </div>
          
          <div className="border-l-2 border-blue-600 pl-6">
            <h4 className="text-xs font-medium tracking-widest text-blue-600 dark:text-blue-400 mb-3">SOLUTION</h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">{caseStudy.solution}</p>
          </div>
          
          <div className="border-l-2 border-blue-600 pl-6">
            <h4 className="text-xs font-medium tracking-widest text-blue-600 dark:text-blue-400 mb-3">RESULTS</h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-6">{caseStudy.results}</p>
            <div className="grid grid-cols-2 gap-4">
              {caseStudy.metrics.map((metric: string, i: number) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300">
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-light leading-snug">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;