import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import { fetchPosts } from '../lib/api';
import { setAdvancedMetaTags, setJsonLD, createOrganizationJsonLD, createBreadcrumbJsonLD, setMetaTags } from '../lib/meta';
import type { Post } from '../types/blog';



const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Set SEO meta tags for Blog page
    setAdvancedMetaTags({
      title: 'Blog | Duotech Solutions | SMS, WhatsApp & Digital Marketing Insights',
      description: 'Read latest blogs and insights about bulk SMS, WhatsApp API, digital marketing, web development, and business communication solutions. Expert tips and industry trends.',
      keywords: 'blog, duotech blog, sms blog, whatsapp api blog, digital marketing blog, web development tips, business communication',
      image: 'https://www.duotechsolutions.in/images/duotech-og-image.jpg',
      url: window.location.href,
      canonical: 'https://www.duotechsolutions.in/blog',
      author: 'Duotech Solutions',
      type: 'website'
    });

    // Set structured data
    setJsonLD(createOrganizationJsonLD());

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'blog-breadcrumb-json-ld';
    const breadcrumbData = createBreadcrumbJsonLD([
      { name: 'Home', url: 'https://www.duotechsolutions.in/' },
      { name: 'Blog', url: window.location.href }
    ]);
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    return () => {
      const scripts = document.querySelectorAll('#blog-breadcrumb-json-ld');
      scripts.forEach(script => script.remove());
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    fetchPosts(1, 100) // Fetch up to 100 posts to show all blogs
      .then(data => { if (mounted) setPosts(data.posts || []); })
      .catch(err => { if (mounted) setError(err.message || 'Failed to load posts'); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, []);

  // Set meta tags for blog listing page
  useEffect(() => {
    setMetaTags({
      title: 'Blog - Duotech Solutions | Technology & Digital Marketing Insights',
      description: 'Explore articles on Bulk SMS, WhatsApp API, Digital Marketing, SEO, Web Development, and technology trends from Duotech Solutions experts.',
      keywords: 'blog, technology, digital marketing, SMS, WhatsApp API, web development, tutorials, guides',
      url: window.location.href,
      canonical: window.location.href,
      type: 'website'
    });

    // Set organization JSON-LD for blog page
    setJsonLD(createOrganizationJsonLD());
  }, []);

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
            {loading ? (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center">Loading posts...</div>
            ) : error ? (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-red-500">{error}</div>
            ) : posts.length === 0 ? (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center">No posts found.</div>
            ) : posts.map((post, index) => {
              const imageUrl = post.featured_image || post.imageUrl || '/src/assets/blog/blog-1.jpg';
              return (
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
                        src={imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-blue-600 mb-2">{post.category_name || post.category}</p>
                      <h2 className="text-xl font-normal text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-neutral-500">
                        <div className="flex items-center gap-2">
                          <User size={14} />
                          <span>{post.author_name || post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{post.published_at || post.date}</span>
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
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPage;
