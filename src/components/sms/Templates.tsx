
import React from 'react';
import { Download } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import TemplateCard from './TemplateCard';

interface Template {
  name: string;
  content: string;
  type: string;
}

interface TemplatesProps {
  templates: Template[];
}

const Templates: React.FC<TemplatesProps> = ({ templates }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready-to-Use <span className="text-blue-600">Message Templates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started quickly with our pre-approved templates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {templates.map((template, i) => (
            <TemplateCard 
              key={i}
              template={template}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
            icon={<Download className="w-5 h-5" />}
          >
            Download Full Template Pack
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Templates;
