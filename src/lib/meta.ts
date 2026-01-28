/**
 * Meta Tags Management Utility
 * Dynamically update meta tags, OpenGraph, Twitter Card, and JSON-LD based on page content
 */

interface MetaTagsConfig {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  type?: 'website' | 'article' | 'blog';
  canonical?: string;
  category?: string;
}

export const setMetaTags = (config: MetaTagsConfig) => {
  const {
    title = 'Duotech Solutions',
    description = 'Bulk SMS, WhatsApp API, Digital Marketing & Web Development Services',
    keywords,
    image = 'https://www.duotechsolutions.in/images/duotech-og-image.jpg',
    url = window.location.href,
    author,
    publishedDate,
    modifiedDate,
    type = 'website',
    canonical = url,
    category
  } = config;

  // Update title
  document.title = title;

  // Helper to set or update meta tags
  const setMeta = (name: string, content: string, isProperty = false) => {
    if (!content) return;
    const attr = isProperty ? 'property' : 'name';
    const selector = `meta[${attr}="${name}"]`;
    let element = document.head.querySelector(selector) as HTMLMetaElement | null;
    
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attr, name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Standard Meta Tags
  setMeta('description', description);
  if (keywords) setMeta('keywords', keywords);
  setMeta('author', author || 'Duotech Solutions');
  setMeta('robots', 'index, follow');
  setMeta('viewport', 'width=device-width, initial-scale=1.0');

  // OpenGraph Tags
  setMeta('og:title', title, true);
  setMeta('og:description', description, true);
  setMeta('og:image', image, true);
  setMeta('og:url', url, true);
  setMeta('og:type', type, true);
  setMeta('og:site_name', 'Duotech Solutions', true);
  if (category) setMeta('og:section', category, true);

  // Twitter Card Tags
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:image', image);
  setMeta('twitter:site', '@duotechsolution');
  setMeta('twitter:creator', '@duotechsolution');

  // Article-specific meta tags
  if (type === 'article' || publishedDate) {
    setMeta('article:published_time', publishedDate || new Date().toISOString(), true);
    if (modifiedDate) setMeta('article:modified_time', modifiedDate, true);
    if (author) setMeta('article:author', author, true);
    if (category) setMeta('article:section', category, true);
  }

  // Canonical URL
  let canonicalLink = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonical);
};

export const setJsonLD = (data: any) => {
  // Remove existing JSON-LD if present
  const existingScript = document.getElementById('page-json-ld');
  if (existingScript) existingScript.remove();

  // Create and inject new JSON-LD
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'page-json-ld';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

export const createBlogPostJsonLD = (post: any) => {
  const stripHtml = (html: string) => {
    const div = document.createElement('div');
    div.innerHTML = html || '';
    return div.textContent || div.innerText || '';
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': window.location.href
    },
    'headline': post.title,
    'description': post.excerpt || stripHtml(post.content || '').slice(0, 160),
    'image': post.featured_image ? [post.featured_image] : [],
    'datePublished': post.published_at || post.created_at,
    'dateModified': post.updated_at || post.published_at || post.created_at,
    'author': {
      '@type': 'Person',
      'name': post.author_name || post.author?.name || 'Duotech Solutions'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Duotech Solutions',
      'logo': {
        '@type': 'ImageObject',
        'url': window.location.origin + '/images/duotech-logo.png'
      }
    },
    'keywords': post.meta_keywords || post.category_name || ''
  };
};

export const createOrganizationJsonLD = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Duotech Solutions',
    'url': 'https://www.duotechsolutions.in',
    'logo': 'https://www.duotechsolutions.in/images/duotech-logo.png',
    'description': 'Bulk SMS, WhatsApp API, Digital Marketing & Web Development Services',
    'telephone': '+91-8800722190',
    'email': 'info@duotechsolutions.in',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'C30, C Block, Sector 63',
      'addressLocality': 'Noida',
      'addressRegion': 'UP',
      'postalCode': '201301',
      'addressCountry': 'IN'
    },
    'sameAs': [
      'https://www.facebook.com/theduotechsolutions',
      'https://twitter.com/duotechsolution',
      'https://www.linkedin.com/company/duotech-solutions/',
      'https://www.instagram.com/theduotechsolutions'
    ]
  };
};

export const createBreadcrumbJsonLD = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
};

/**
 * Create Service Schema
 * For service/product pages
 */
export const createServiceJsonLD = (serviceData: {
  name: string;
  description: string;
  image?: string;
  areaServed?: string | string[];
  priceRange?: string;
  url?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': serviceData.url || window.location.href,
    'name': serviceData.name,
    'description': serviceData.description,
    'image': serviceData.image || 'https://www.duotechsolutions.in/images/duotech-og-image.jpg',
    'provider': {
      '@type': 'Organization',
      'name': 'Duotech Solutions',
      'url': 'https://www.duotechsolutions.in',
      'telephone': '+91-8800722190'
    },
    ...(serviceData.areaServed && { 'areaServed': serviceData.areaServed }),
    ...(serviceData.priceRange && { 'priceRange': serviceData.priceRange })
  };
};

/**
 * Create Product Schema
 * For product pages
 */
export const createProductJsonLD = (productData: {
  name: string;
  description: string;
  image?: string;
  price?: string;
  currency?: string;
  availability?: string;
  rating?: number;
  reviewCount?: number;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': window.location.href,
    'name': productData.name,
    'description': productData.description,
    'image': productData.image || 'https://www.duotechsolutions.in/images/duotech-og-image.jpg',
    'brand': {
      '@type': 'Brand',
      'name': 'Duotech Solutions'
    },
    ...(productData.price && {
      'offers': {
        '@type': 'Offer',
        'url': window.location.href,
        'priceCurrency': productData.currency || 'INR',
        'price': productData.price,
        'availability': productData.availability || 'https://schema.org/InStock',
        'seller': {
          '@type': 'Organization',
          'name': 'Duotech Solutions'
        }
      }
    }),
    ...(productData.rating && {
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': productData.rating,
        'reviewCount': productData.reviewCount || 1
      }
    })
  };
};

/**
 * Create Local Business Schema
 * For location-based services
 */
export const createLocalBusinessJsonLD = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Duotech Solutions',
    'image': 'https://www.duotechsolutions.in/images/duotech-logo.png',
    'description': 'All-in-One Communication and Digital Growth Platform providing Bulk SMS, WhatsApp API, Digital Marketing & Web Development Services in Noida',
    'telephone': '+91-8800722190',
    'email': 'info@duotechsolutions.in',
    'url': 'https://www.duotechsolutions.in',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'C30, C Block, Sector 63',
      'addressLocality': 'Noida',
      'addressRegion': 'UP',
      'postalCode': '201301',
      'addressCountry': 'IN'
    },
    'priceRange': '₹₹',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'opens': '09:00',
      'closes': '21:00'
    },
    'sameAs': [
      'https://www.facebook.com/theduotechsolutions',
      'https://twitter.com/duotechsolution',
      'https://www.linkedin.com/company/duotech-solutions/',
      'https://www.instagram.com/theduotechsolutions'
    ]
  };
};

/**
 * Create FAQ Schema
 * For FAQ sections
 */
export const createFAQJsonLD = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
};

/**
 * Create How-To Schema
 * For process/tutorial pages
 */
export const createHowToJsonLD = (data: {
  name: string;
  description: string;
  image?: string;
  steps: Array<{ name: string; description: string; image?: string }>;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': data.name,
    'description': data.description,
    'image': data.image || 'https://www.duotechsolutions.in/images/duotech-og-image.jpg',
    'step': data.steps.map((step, index) => ({
      '@type': 'HowToStep',
      'position': index + 1,
      'name': step.name,
      'text': step.description,
      ...(step.image && { 'image': step.image })
    }))
  };
};

/**
 * Create Event Schema
 * For webinar/event pages
 */
export const createEventJsonLD = (eventData: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location?: string;
  url?: string;
  image?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    'name': eventData.name,
    'description': eventData.description,
    'image': eventData.image || 'https://www.duotechsolutions.in/images/duotech-og-image.jpg',
    'startDate': eventData.startDate,
    'endDate': eventData.endDate,
    'url': eventData.url || window.location.href,
    'organizer': {
      '@type': 'Organization',
      'name': 'Duotech Solutions',
      'url': 'https://www.duotechsolutions.in'
    },
    ...(eventData.location && {
      'location': {
        '@type': 'Place',
        'name': eventData.location
      }
    })
  };
};

/**
 * Create Review/Rating Schema
 * For testimonials and reviews
 */
export const createReviewJsonLD = (review: {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
  itemReviewed?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    'author': {
      '@type': 'Person',
      'name': review.author
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': review.rating
    },
    'reviewBody': review.reviewBody,
    ...(review.datePublished && { 'datePublished': review.datePublished }),
    ...(review.itemReviewed && { 'itemReviewed': review.itemReviewed })
  };
};

/**
 * Set advanced SEO meta tags with all modern attributes
 */
export const setAdvancedMetaTags = (config: MetaTagsConfig & {
  locale?: string;
  alternates?: Array<{ hreflang: string; href: string }>;
  datePublished?: string;
  dateModified?: string;
}) => {
  // Set standard meta tags first
  setMetaTags(config);

  // Additional meta tags for enhanced SEO
  const setMeta = (name: string, content: string, isProperty = false) => {
    if (!content) return;
    const attr = isProperty ? 'property' : 'name';
    const selector = `meta[${attr}="${name}"]`;
    let element = document.head.querySelector(selector) as HTMLMetaElement | null;
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attr, name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Language and Locale
  if (config.locale) {
    setMeta('og:locale', config.locale, true);
  }

  // Date meta tags
  if (config.datePublished) {
    setMeta('article:published_time', config.datePublished, true);
  }
  if (config.dateModified) {
    setMeta('article:modified_time', config.dateModified, true);
  }

  // Alternate language links
  if (config.alternates && config.alternates.length > 0) {
    // Remove existing alternates
    document.head.querySelectorAll('link[rel="alternate"]').forEach(el => el.remove());
    
    config.alternates.forEach(alt => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hrefLang = alt.hreflang;
      link.href = alt.href;
      document.head.appendChild(link);
    });
  }

  // Additional SEO meta tags
  setMeta('format-detection', 'telephone=no');
  setMeta('apple-mobile-web-app-capable', 'yes');
  setMeta('apple-mobile-web-app-status-bar-style', 'black-translucent');
  setMeta('theme-color', '#001f4d');
};
