import React from 'react';
import { Copy, Check } from 'lucide-react';

interface TemplateCardProps {
  template: {
    name: string;
    content: string;
    type: string;
  };
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(template.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-900">{template.name}</h3>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
          template.type === 'transactional' 
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-purple-100 text-purple-800'
        }`}>
          {template.type}
        </span>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-600">
        {template.content}
      </div>

      <button
        onClick={handleCopy}
        className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 mr-1" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 mr-1" />
            Copy template
          </>
        )}
      </button>
    </div>
  );
};

export default TemplateCard;