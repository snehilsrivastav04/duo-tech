import { Product } from '../utils/types';

export const products: Product[] = [
  {
    id: '1',
    title: 'WhatsApp API Source Code',
    description: 'Complete solution for integrating WhatsApp Business API into your systems. Customize and deploy your own WhatsApp communication platform.',
    image: 'https://images.pexels.com/photos/5053847/pexels-photo-5053847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Easy integration with existing systems',
      'Support for multiple users and accounts',
      'Automated messaging workflows',
      'Analytics dashboard',
      'Customizable templates'
    ]
  },
  {
    id: '2',
    title: 'Camera Pro',
    description: 'Advanced camera application and module for Android devices with professional-grade features for both consumer and business use.',
    image: 'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Professional image processing',
      'Advanced night mode capabilities',
      'Custom filters and effects',
      'Integrated AI scene recognition',
      'Video stabilization'
    ]
  },
  {
    id: '3',
    title: 'UniKey',
    description: 'Digital authentication tool providing secure, multi-factor authentication solutions for enterprises and applications.',
    image: 'https://images.pexels.com/photos/6266273/pexels-photo-6266273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Multi-factor authentication',
      'Biometric integration',
      'One-time password generation',
      'Seamless API integration',
      'Offline authentication support'
    ]
  }
];