import React, { useState, useRef, useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { 
  Home, MapPin, Building, Heart, Search, Calendar,
  ArrowRight, Mail, ChevronLeft, ChevronRight, Check,
  Star, Phone, MessageSquare, Users, Clock, Shield, Zap
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

// Real estate data
const realEstateData = {
  hero: {
    title: 'Find Your Dream Property',
    subtitle: 'Discover the perfect home from our premium collection of luxury properties',
    stats: [
      { value: '10,000+', label: 'Properties' },
      { value: '25+', label: 'Cities' },
      { value: '98%', label: 'Satisfaction Rate' }
    ]
  },
  featuredProperties: [
    {
      id: 1,
      title: 'Luxury Oceanfront Villa',
      location: 'Miami Beach, FL',
      price: '$3,450,000',
      beds: 5,
      baths: 4,
      sqft: '4,200',
      image: '/images/properties/property-1.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Modern Downtown Loft',
      location: 'New York, NY',
      price: '$1,850,000',
      beds: 3,
      baths: 2,
      sqft: '2,100',
      image: '/images/properties/property-2.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Countryside Estate',
      location: 'Napa Valley, CA',
      price: '$4,200,000',
      beds: 6,
      baths: 5,
      sqft: '5,800',
      image: '/images/properties/property-3.jpg',
      featured: true
    },
    {
      id: 4,
      title: 'Urban Penthouse',
      location: 'Chicago, IL',
      price: '$2,750,000',
      beds: 4,
      baths: 3,
      sqft: '3,400',
      image: '/images/properties/property-4.jpg',
      featured: true
    }
  ],
  services: [
    {
      title: 'Property Search',
      icon: <Search className="w-8 h-8 text-blue-600" />,
      description: 'Find your perfect property with our advanced search tools and filters'
    },
    {
      title: 'Virtual Tours',
      icon: <Building className="w-8 h-8 text-blue-600" />,
      description: 'Explore properties from the comfort of your home with our VR technology'
    },
    {
      title: 'Home Valuation',
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      description: 'Get an accurate estimate of your property\'s current market value'
    },
    {
      title: 'Mortgage Services',
      icon: <Home className="w-8 h-8 text-blue-600" />,
      description: 'Secure financing with our network of trusted mortgage providers'
    }
  ],
  testimonials: [
    {
      quote: 'The team made finding our dream home an absolute pleasure. Their expertise and attention to detail were exceptional.',
      author: 'Sarah Johnson',
      role: 'Home Owner',
      rating: 5,
    },
    {
      quote: 'We sold our property for 15% above asking price thanks to their marketing strategy and negotiation skills.',
      author: 'Michael Chen',
      role: 'Property Seller',
      rating: 5,
    },
    {
      quote: 'As a first-time buyer, I was guided through every step of the process with patience and professionalism.',
      author: 'Jessica Williams',
      role: 'First-time Buyer',
      rating: 5,
    },
  ],
  locations: [
    { name: 'New York', properties: 1250, image: '/images/locations/ny.jpg' },
    { name: 'Los Angeles', properties: 980, image: '/images/locations/la.jpg' },
    { name: 'Miami', properties: 750, image: '/images/locations/miami.jpg' },
    { name: 'Chicago', properties: 620, image: '/images/locations/chicago.jpg' },
    { name: 'San Francisco', properties: 540, image: '/images/locations/sf.jpg' },
    { name: 'Austin', properties: 480, image: '/images/locations/austin.jpg' },
  ]
};

// Infinite Looping Parallax Background Component
const InfiniteParallaxBackground: React.FC<{ images: string[]; speed?: number }> = ({ 
  images, 
  speed = 10 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <Parallax
          key={index}
          speed={-20}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </Parallax>
      ))}
    </div>
  );
};

// Property Card Component
const PropertyCard: React.FC<{ property: any }> = ({ property }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Featured
        </div>
        <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{property.location}</span>
        </div>
        <p className="text-2xl font-bold text-blue-600 mb-4">{property.price}</p>
        <div className="flex justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.sqft} sqft</span>
        </div>
      </div>
    </motion.div>
  );
};

// Location Card Component
const LocationCard: React.FC<{ location: any }> = ({ location }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
    >
      <img 
        src={location.image} 
        alt={location.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-1">{location.name}</h3>
        <p className="text-blue-200">{location.properties} properties</p>
      </div>
    </motion.div>
  );
};

// Testimonial Carousel Component
const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === realEstateData.testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? realEstateData.testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="bg-white/95 backdrop-blur-lg p-8 rounded-2xl shadow-xl"
      >
        <div className="flex mb-4">
          {[...Array(realEstateData.testimonials[currentIndex].rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-xl text-gray-800 mb-6">"{realEstateData.testimonials[currentIndex].quote}"</p>
        <div className="text-gray-700">
          <p className="font-bold">{realEstateData.testimonials[currentIndex].author}</p>
          <p className="text-sm">{realEstateData.testimonials[currentIndex].role}</p>
        </div>
      </motion.div>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevTestimonial}
          className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// Main HomePage Component
const HomePage: React.FC = () => {
  const heroImages = [
    '/images/hero/hero-1.jpg',
    '/images/hero/hero-2.jpg',
    '/images/hero/hero-3.jpg',
    '/images/hero/hero-4.jpg'
  ];

  return (
    <ParallaxProvider>
      <MainLayout>
        {/* Hero Section with Infinite Parallax Background */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <InfiniteParallaxBackground images={heroImages} />
          
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Find Your Dream <span className="text-blue-400">Property</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
            >
              Discover the perfect home from our premium collection of luxury properties
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore Properties
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Schedule a Tour
              </Button>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-10 left-0 right-0"
          >
            <div className="container mx-auto px-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {realEstateData.hero.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-blue-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Featured Properties Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-900 to-transparent opacity-10" />
          
          <Container>
            <div className="text-center mb-16 relative">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our handpicked selection of premium properties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {realEstateData.featuredProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Properties
              </Button>
            </div>
          </Container>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-center opacity-5" />
          
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need for your real estate journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {realEstateData.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center"
                >
                  <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Popular Locations Section with Fixed Background */}
        <section className="py-28 relative overflow-hidden">
          <div 
            className="fixed inset-0 bg-cover bg-center bg-fixed z-0"
            style={{ backgroundImage: 'url(/images/city-map-bg.jpg)' }}
          />
          <div className="absolute inset-0 bg-blue-900/80 z-10" />
          
          <Container className="relative z-20">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl font-bold mb-4">Popular Locations</h2>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Discover properties in the most sought-after locations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {realEstateData.locations.map((location, index) => (
                <LocationCard key={index} location={location} />
              ))}
            </div>
          </Container>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hear from our satisfied customers
              </p>
            </div>

            <TestimonialCarousel />
          </Container>
        </section>

        {/* CTA Section with Fixed Background */}
        <section className="py-28 relative overflow-hidden">
          <div 
            className="fixed inset-0 bg-cover bg-center bg-fixed z-0"
            style={{ backgroundImage: 'url(/images/cta-bg.jpg)' }}
          />
          <div className="absolute inset-0 bg-blue-900/70 z-10" />
          
          <Container className="relative z-20 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
            <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied clients who found their perfect property with us
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Contact Our Agents
              </Button>
            </div>
          </Container>
        </section>
      </MainLayout>
    </ParallaxProvider>
  );
};

export default HomePage;