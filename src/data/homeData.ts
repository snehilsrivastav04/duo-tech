import { ArrowRight, Check, Code, Shield, Zap } from 'lucide-react';
import { Feature, IntegrationFeature, PlanFeature, Testimonial, CompanyLogo } from '../types/home';

export const features: Feature[] = [
  {
    icon: <ArrowRight />,
    title: "Fast Integration",
    description: "Quick and easy setup with any existing system"
  },
  {
    icon: <Check />,
    title: "Reliable Performance",
    description: "99.9% uptime guarantee with global infrastructure"
  },
  {
    icon: <Shield />,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption"
  },
  {
    icon: <Zap />,
    title: "Real-time Updates",
    description: "Instant notifications and live status tracking"
  }
];

// ... Add other data exports (testimonials, plans, etc.)
