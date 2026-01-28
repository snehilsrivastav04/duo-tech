import React, { useState } from 'react';
import { 
  Search, 
  Eye, 
  Link2, 
  Zap, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp,
  Code,
  FileText,
  Share2,
  Globe,
  Clock,
  Users,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface SEOTip {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  tips: string[];
  impact: 'high' | 'medium' | 'low';
}

interface SEOComponentProps {
  title?: string;
  showDetailed?: boolean;
}

const SEOComponent: React.FC<SEOComponentProps> = ({ 
  title = 'SEO Optimization Guide',
  showDetailed = true 
}) => {
  const [expandedTip, setExpandedTip] = useState<string | null>(null);

  const seoTips: SEOTip[] = [
    {
      id: 'meta-tags',
      title: 'Meta Tags & Descriptions',
      description: 'Optimize your page titles and meta descriptions for search engines',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      tips: [
        'Keep title between 50-60 characters',
        'Meta description should be 150-160 characters',
        'Include target keywords naturally',
        'Make descriptions compelling and unique',
        'Add meta keywords (optional but helpful)'
      ],
      impact: 'high'
    },
    {
      id: 'content-quality',
      title: 'Content Quality & Relevance',
      description: 'Create high-quality, relevant content that matches user intent',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      tips: [
        'Write original, valuable content',
        'Use target keywords naturally (2-3% density)',
        'Structure content with headings (H1, H2, H3)',
        'Aim for 1500+ words for in-depth content',
        'Include internal linking to related pages'
      ],
      impact: 'high'
    },
    {
      id: 'backlinks',
      title: 'Backlinks & External Authority',
      description: 'Build high-quality backlinks from authoritative domains',
      icon: <Link2 className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      tips: [
        'Get links from high-authority domains',
        'Ensure backlinks are relevant to your niche',
        'Avoid low-quality and spammy links',
        'Use anchor text strategically',
        'Build relationships with industry influencers'
      ],
      impact: 'high'
    },
    {
      id: 'technical-seo',
      title: 'Technical SEO',
      description: 'Ensure your website is technically optimized for crawling and indexing',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      tips: [
        'Ensure fast page loading speed (<3 seconds)',
        'Mobile-responsive design (mobile-first indexing)',
        'Create XML sitemap',
        'Setup robots.txt properly',
        'Use HTTPS/SSL certificate'
      ],
      impact: 'high'
    },
    {
      id: 'structured-data',
      title: 'Structured Data & Schema',
      description: 'Implement JSON-LD structured data for better search visibility',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-pink-500 to-pink-600',
      tips: [
        'Implement Organization schema',
        'Add Article/BlogPosting schema for blog posts',
        'Use BreadcrumbList for navigation',
        'Include Product schema for e-commerce',
        'Validate schema with Google Rich Results Test'
      ],
      impact: 'high'
    },
    {
      id: 'user-experience',
      title: 'User Experience (UX)',
      description: 'Optimize for Core Web Vitals and user engagement',
      icon: <Users className="w-6 h-6" />,
      color: 'from-indigo-500 to-indigo-600',
      tips: [
        'Improve Largest Contentful Paint (LCP)',
        'Reduce Cumulative Layout Shift (CLS)',
        'Decrease First Input Delay (FID)',
        'Reduce bounce rate with engaging content',
        'Improve click-through rate (CTR) from SERPs'
      ],
      impact: 'high'
    },
    {
      id: 'social-signals',
      title: 'Social Signals & Sharing',
      description: 'Optimize for social media sharing and engagement',
      icon: <Share2 className="w-6 h-6" />,
      color: 'from-cyan-500 to-cyan-600',
      tips: [
        'Add Open Graph meta tags',
        'Setup Twitter Card meta tags',
        'Create shareable, engaging content',
        'Encourage social sharing',
        'Monitor social engagement metrics'
      ],
      impact: 'medium'
    },
    {
      id: 'monitoring',
      title: 'Analytics & Monitoring',
      description: 'Track and measure your SEO performance',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      tips: [
        'Setup Google Search Console',
        'Monitor Google Analytics 4',
        'Track keyword rankings',
        'Monitor organic traffic trends',
        'Analyze user behavior and conversion metrics'
      ],
      impact: 'medium'
    }
  ];

  const toggleTip = (id: string) => {
    setExpandedTip(expandedTip === id ? null : id);
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-orange-600 bg-orange-50';
      case 'low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                {title}
              </h1>
              <p className="text-gray-500 mt-2 text-sm md:text-base">
                Master SEO with comprehensive optimization strategies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-2">High Impact Areas</p>
                <p className="text-2xl font-light text-gray-900">6</p>
              </div>
              <Eye className="w-8 h-8 text-blue-500 opacity-20" />
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-2">Focus Areas</p>
                <p className="text-2xl font-light text-gray-900">8</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-green-500 opacity-20" />
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-2">Optimization Time</p>
                <p className="text-2xl font-light text-gray-900">3-6M</p>
              </div>
              <Clock className="w-8 h-8 text-orange-500 opacity-20" />
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-2">Expected Growth</p>
                <p className="text-2xl font-light text-gray-900">+150%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-500 opacity-20" />
            </div>
          </div>
        </div>
      </div>

      {/* SEO Tips Section */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-tight">
          Key SEO Focus Areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {seoTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <button
                onClick={() => showDetailed && toggleTip(tip.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-start justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 bg-gradient-to-br ${tip.color} rounded-lg text-white`}>
                      {tip.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-gray-900">{tip.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{tip.description}</p>
                    </div>
                  </div>
                </div>
                {showDetailed && (
                  <div className="ml-4 text-gray-400">
                    {expandedTip === tip.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                )}
              </button>

              {/* Impact Badge */}
              <div className="px-6 pb-4 flex items-center justify-between">
                <span className={`text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide ${getImpactColor(tip.impact)}`}>
                  {tip.impact} Impact
                </span>
              </div>

              {/* Expandable Tips */}
              {showDetailed && expandedTip === tip.id && (
                <div className="border-t border-gray-200 bg-gradient-to-br from-gray-50 to-white px-6 py-4 space-y-2">
                  {tip.tips.map((t, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600 leading-relaxed">{t}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-light text-gray-900 mb-3">SEO Best Practices</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Keep content fresh and updated</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Focus on user intent, not just keywords</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Regularly audit your site structure</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Monitor Core Web Vitals constantly</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Build genuine relationships for backlinks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Optimize for voice search and AI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOComponent;
