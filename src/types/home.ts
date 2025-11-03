import { ReactNode } from 'react';

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface PlanFeature {
  name: string;
  description: string;
  features: string[];
  price: string;
  cta: string;
  popular?: boolean;
  savings?: string;
}

export interface CompanyLogo {
  name: string;
  url?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
  companyName: string;
}

export interface IntegrationFeature {
  icon: ReactNode;
  title: string;
  description: string;
}
