import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const blogPosts = [
  {
    slug: 'the-rise-of-conversational-ai',
    title: 'The Rise of Conversational AI in Customer Service',
    author: 'Jane Doe',
    date: 'September 5, 2025',
    excerpt: 'Explore how conversational AI is transforming customer interactions, improving satisfaction, and streamlining support operations for businesses of all sizes.',
    category: 'AI & Machine Learning',
    imageUrl: '/src/assets/blog/blog-1.jpg',
  },
  {
    slug: 'unlocking-the-power-of-bulk-sms',
    title: 'Unlocking the Power of Bulk SMS for Your Business',
    author: 'John Smith',
    date: 'August 28, 2025',
    excerpt: 'Discover the advantages of bulk SMS marketing, from high open rates to instant delivery, and learn how to implement a successful SMS campaign.',
    category: 'Marketing',
    imageUrl: '/src/assets/blog/blog-2.jpg',
  },
  {
    slug: 'the-future-of-web-development',
    title: 'The Future of Web Development: Trends to Watch in 2026',
    author: 'Alex Johnson',
    date: 'August 15, 2025',
    excerpt: 'From serverless architecture to the latest in JavaScript frameworks, we dive into the trends that will shape the future of web development.',
    category: 'Web Development',
    imageUrl: '/src/assets/blog/blog-3.jpg',
  },
    {
    slug: 'the-rise-of-conversational-ai-2',
    title: 'The Rise of Conversational AI in Customer Service',
    author: 'Jane Doe',
    date: 'September 5, 2025',
    excerpt: 'Explore how conversational AI is transforming customer interactions, improving satisfaction, and streamlining support operations for businesses of all sizes.',
    category: 'AI & Machine Learning',
    imageUrl: '/src/assets/blog/blog-1.jpg',
  },
  {
    slug: 'unlocking-the-power-of-bulk-sms-2',
    title: 'Unlocking the Power of Bulk SMS for Your Business',
    author: 'John Smith',
    date: 'August 28, 2025',
    excerpt: 'Discover the advantages of bulk SMS marketing, from high open rates to instant delivery, and learn how to implement a successful SMS campaign.',
    category: 'Marketing',
    imageUrl: '/src/assets/blog/blog-2.jpg',
  },
  {
    slug: 'the-future-of-web-development-2',
    title: 'The Future of Web Development: Trends to Watch in 2026',
    author: 'Alex Johnson',
    date: 'August 15, 2025',
    excerpt: 'From serverless architecture to the latest in JavaScript frameworks, we dive into the trends that will shape the future of web development.',
    category: 'Web Development',
    imageUrl: '/src/assets/blog/blog-3.jpg',
  },
];

const BlogPage = () => {
  return (
    <MainLayout>
      <div className="bg-neutral-50 min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 py-16 md:px-12 text-center">
            <h1 className="text-4xl md:text-5xl text-neutral-900 font-normal mb-4">
              Duo Tech Insights
            </h1>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Your source for the latest in technology, marketing, and business innovation.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-neutral-200 rounded-lg overflow-hidden group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-blue-600 mb-2">{post.category}</p>
                    <h2 className="text-xl font-normal text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                     <div className="mt-4 flex justify-end">
                      <span className="flex items-center text-blue-600 text-sm font-semibold">
                        Read More <ArrowRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPage;
