import { useState, FC, memo, KeyboardEvent } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
  Phone,
  MessageSquare,
  Globe,
  Mail,
  TrendingUp,
  Smartphone,
  Palette,
  Code,
} from 'lucide-react';

// Prop-type interfaces
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

interface Stat {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface UseCase {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

interface Service {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

// Testimonial Carousel Component
export const TestimonialCarousel: FC<{ testimonials: Testimonial[] }> = memo(({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div
        key={currentIndex}
        className="bg-white border border-gray-100 p-12 md:p-16 transition-all duration-700 ease-out"
        role="region"
        aria-live="polite"
      >
        <div className="flex mb-8 justify-center md:justify-start">
          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-blue-900 mx-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-2xl md:text-3xl text-gray-800 font-light leading-relaxed mb-12 text-center md:text-left">
          "{testimonials[currentIndex].quote}"
        </p>
        <div className="text-gray-600 text-center md:text-left">
          <p className="font-medium text-lg text-blue-900">{testimonials[currentIndex].author}</p>
          <p className="text-sm font-light mt-1">{testimonials[currentIndex].role}</p>
        </div>
      </div>

      <div className="flex justify-center mt-12 space-x-6 items-center">
        <button
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
          className="p-3 border border-gray-200 hover:border-blue-900 transition-all duration-300 focus:outline-none focus:border-blue-900"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center space-x-3" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`h-0.5 transition-all duration-500 focus:outline-none ${
                i === currentIndex ? 'bg-blue-900 w-12' : 'bg-gray-300 w-8 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-selected={i === currentIndex}
              role="tab"
            />
          ))}
        </div>
        <button
          onClick={nextTestimonial}
          aria-label="Next testimonial"
          className="p-3 border border-gray-200 hover:border-blue-900 transition-all duration-300 focus:outline-none focus:border-blue-900"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
});

// Stats Grid Component
export const StatsGrid: FC<{ stats: Stat[]; className?: string }> = memo(({ stats, className }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 ${className ?? ''}`}>
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white p-10 transition-all duration-500 hover:bg-gray-50 group"
        >
          <div className="flex flex-col items-start space-y-6">
            <div className="text-blue-900 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              {stat.icon}
            </div>
            <div>
              <p className="text-5xl font-light text-blue-900 mb-3 tracking-tight">
                {stat.value}
              </p>
              <p className="text-base font-medium text-gray-800 mb-2">{stat.label}</p>
              <p className="text-sm font-light text-gray-500 leading-relaxed">{stat.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

// Newsletter Form Component
export const NewsletterForm: FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setEmail('');
      setError('');
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    }
  };

  return (
    <div className="space-y-6 max-w-md">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="w-full px-6 py-4 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-900 transition-colors duration-300 font-light"
          aria-label="Email address"
        />
        <button
          onClick={handleSubmit}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-900 text-white p-3 hover:bg-blue-800 transition-colors duration-300 focus:outline-none"
          aria-label="Subscribe"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      {submitted && (
        <div className="text-center text-blue-900 text-sm font-light animate-pulse">
          Thank you for subscribing. We'll be in touch soon.
        </div>
      )}
      {error && (
        <div className="text-center text-red-600 text-sm font-light">
          {error}
        </div>
      )}
      <p className="text-xs text-gray-500 font-light text-center leading-relaxed">
        We respect your privacy.{' '}
        <a href="#" className="text-blue-900 hover:opacity-70 transition-opacity duration-300" aria-label="Privacy Policy">
          Read our privacy policy
        </a>
      </p>
    </div>
  );
};

// Use Case Card Component
export const UseCaseCard: FC<{ useCase: UseCase }> = ({ useCase }) => {
  return (
    <div className="bg-white border border-gray-100 p-10 transition-all duration-500 hover:border-blue-900 group">
      <div className="flex items-start space-x-5 mb-8">
        <div className="text-blue-900 opacity-40 group-hover:opacity-100 transition-opacity duration-500 mt-1">
          {useCase.icon}
        </div>
        <h3 className="text-2xl font-light text-blue-900">{useCase.title}</h3>
      </div>
      <p className="text-gray-600 font-light leading-relaxed mb-10">{useCase.description}</p>
      <div className="space-y-4">
        {useCase.features.map((feature: string, i: number) => (
          <div key={i} className="flex items-start group/item">
            <div className="w-1 h-1 bg-blue-900 mt-2.5 mr-4 flex-shrink-0 transition-all duration-300 group-hover/item:w-3" />
            <span className="text-gray-700 font-light leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Service Card Component
export const ServiceCard: FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="bg-white border border-gray-100 p-10 transition-all duration-500 hover:border-blue-900 hover:shadow-sm group cursor-pointer">
      <div className="flex items-start space-x-5 mb-8">
        <div className="text-blue-900 opacity-40 group-hover:opacity-100 transition-opacity duration-500 mt-1">
          {service.icon}
        </div>
        <h3 className="text-2xl font-light text-blue-900">{service.title}</h3>
      </div>
      <p className="text-gray-600 font-light leading-relaxed mb-10">
        {service.description}
      </p>
      {service.features.length > 0 && (
        <div className="space-y-4 mb-10">
          {service.features.slice(0, 4).map((feature, i) => (
            <div key={i} className="flex items-start group/item">
              <div className="w-1 h-1 bg-blue-900 mt-2.5 mr-4 flex-shrink-0 transition-all duration-300 group-hover/item:w-3" />
              <span className="text-gray-700 font-light leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      )}
      
      <div className="flex items-center justify-between pt-6 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-sm font-light text-blue-900 tracking-wide">
          Learn More
        </span>
        <ArrowRight className="w-4 h-4 text-blue-900 transform group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  );
};

// Demo Component
export default function ComponentShowcase() {
  const testimonials: Testimonial[] = [
    {
      quote: "The attention to detail and quality of service exceeded all our expectations. A truly transformative experience.",
      author: "Sarah Mitchell",
      role: "Chief Marketing Officer, TechCorp",
      rating: 5
    },
    {
      quote: "Professional, efficient, and remarkable results. They understood our vision perfectly.",
      author: "James Chen",
      role: "Founder, StartupHub",
      rating: 5
    }
  ];

  const stats: Stat[] = [
    {
      value: "500+",
      label: "Clients",
      description: "Trusted by leading brands",
      icon: <Globe className="w-6 h-6" />
    },
    {
      value: "98%",
      label: "Satisfaction",
      description: "Client retention rate",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      value: "50M+",
      label: "Messages",
      description: "Delivered monthly",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      value: "24/7",
      label: "Support",
      description: "Always here for you",
      icon: <Phone className="w-6 h-6" />
    }
  ];

  const useCases: UseCase[] = [
    {
      title: "Enterprise Solutions",
      icon: <Code className="w-6 h-6" />,
      description: "Comprehensive communication platforms designed for scale and reliability.",
      features: [
        "Multi-channel integration",
        "Advanced analytics dashboard",
        "Custom workflow automation",
        "Enterprise-grade security"
      ]
    }
  ];

  const services: Service[] = [
    {
      title: "IVR Service",
      icon: <Phone className="w-6 h-6" />,
      description: "Intelligent voice response systems that enhance customer experience.",
      features: [
        "Custom voice menus",
        "Call routing optimization",
        "Multi-language support",
        "Real-time analytics"
      ]
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Strategic campaigns that drive engagement and conversion.",
      features: [
        "SEO optimization",
        "Content strategy",
        "Performance tracking",
        "Brand positioning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-blue-900 text-center mb-20">
            Client Testimonials
          </h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-blue-900 text-center">
            Our Impact
          </h2>
        </div>
        <StatsGrid stats={stats} />
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-20">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200">
            {useCases.map((useCase, i) => (
              <UseCaseCard key={i} useCase={useCase} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-20">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-blue-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Subscribe to receive insights, updates, and exclusive offers.
          </p>
          <div className="flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}