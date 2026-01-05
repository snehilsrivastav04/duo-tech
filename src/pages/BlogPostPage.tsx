import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

// In a real app, you would fetch this data from a CMS
const blogPosts = {
  'the-rise-of-conversational-ai': {
    title: 'The Rise of Conversational AI in Customer Service',
    author: 'Jane Doe',
    date: 'September 5, 2025',
    category: 'AI & Machine Learning',
    imageUrl: '/src/assets/blog/blog-1.jpg',
    content: `
      <p class="text-lg text-neutral-700 leading-relaxed mb-6">The landscape of customer service is undergoing a radical transformation, and at the heart of this revolution is Conversational AI. Businesses are rapidly moving away from traditional, often frustrating, support models towards intelligent, automated, and highly personalized interactions. This shift isn't just about cutting costs; it's about creating a fundamentally better customer experience.</p>
      
      <h2 class="text-2xl font-normal text-neutral-900 mt-10 mb-4">What is Conversational AI?</h2>
      <p class="text-neutral-700 leading-relaxed mb-6">Conversational AI refers to a set of technologies, including Natural Language Processing (NLP), machine learning, and speech recognition, that enable human-like conversations between computers and users. Unlike simple chatbots that follow rigid scripts, conversational AI can understand context, intent, and sentiment, allowing for more dynamic and meaningful interactions.</p>

      <blockquote class="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50 text-neutral-800">
        "The best customer service is if the customer doesn't need to call you, doesn't need to talk to you. It just works." - Jeff Bezos
      </blockquote>

      <h2 class="text-2xl font-normal text-neutral-900 mt-10 mb-4">Key Benefits for Customer Service</h2>
      <ul class="list-disc list-inside space-y-3 text-neutral-700 leading-relaxed mb-6">
        <li><strong>24/7 Availability:</strong> AI-powered agents can provide instant support around the clock, eliminating wait times and improving customer satisfaction.</li>
        <li><strong>Scalability:</strong> Conversational AI can handle thousands of queries simultaneously, allowing businesses to scale their support operations without a linear increase in human agents.</li>
        <li><strong>Personalization:</strong> By integrating with CRM systems, AI can access customer history and provide tailored responses and recommendations.</li>
        <li><strong>Cost Efficiency:</strong> Automating routine queries frees up human agents to focus on more complex, high-value issues, optimizing resource allocation.</li>
      </ul>

      <div class="my-10">
        <img src="/src/assets/blog/blog-inner-1.jpg" alt="AI Chatbot Interface" class="rounded-lg shadow-md" />
        <p class="text-center text-sm text-neutral-500 mt-2">A modern conversational AI interface.</p>
      </div>

      <h2 class="text-2xl font-normal text-neutral-900 mt-10 mb-4">The Duo Tech Solutions Approach</h2>
      <p class="text-neutral-700 leading-relaxed">At Duo Tech, we leverage cutting-edge conversational AI to build bespoke solutions that integrate seamlessly with your existing workflows. Our focus is not just on automation, but on creating intelligent systems that augment your human team and elevate the entire customer journey.</p>
    `,
  },
    'unlocking-the-power-of-bulk-sms': {
    title: 'Unlocking the Power of Bulk SMS for Your Business',
    author: 'John Smith',
    date: 'August 28, 2025',
    category: 'Marketing',
    imageUrl: '/src/assets/blog/blog-2.jpg',
    content: `
        <p class="text-lg text-neutral-700 leading-relaxed mb-6">In an age of digital noise, cutting through the clutter to reach your audience is more challenging than ever. While social media and email marketing dominate headlines, one of the most effective and direct communication channels remains Bulk SMS. With unparalleled open rates and instant delivery, SMS marketing is a powerful tool that businesses can no longer afford to ignore.</p>

        <h2 class="text-2xl font-normal text-neutral-900 mt-10 mb-4">Why Bulk SMS is a Game-Changer</h2>
        <p class="text-neutral-700 leading-relaxed mb-6">The statistics speak for themselves. SMS messages have an open rate of up to 98%, compared to just 20-30% for emails. This near-instant form of communication ensures your message is seen within minutes of being sent.</p>

        <blockquote class="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50 text-neutral-800">
            "The immediacy and personal nature of SMS make it a uniquely powerful channel for time-sensitive offers and critical alerts."
        </blockquote>

        <h2 class="text-2xl font-normal text-neutral-900 mt-10 mb-4">Key Strategies for a Successful Campaign</h2>
        <ul class="list-disc list-inside space-y-3 text-neutral-700 leading-relaxed mb-6">
            <li><strong>Obtain Consent:</strong> Always get explicit permission from your audience before sending them promotional messages. This builds trust and ensures compliance with regulations.</li>
            <li><strong>Keep it Concise:</strong> With a 160-character limit, your message needs to be clear, direct, and compelling. Use URL shorteners for links.</li>
            <li><strong>Provide a Clear Call-to-Action (CTA):</strong> Tell your audience exactly what you want them to do, whether it's visiting a website, using a discount code, or calling a number.</li>
            <li><strong>Timing is Everything:</strong> Send your messages at times when your audience is most likely to be receptive. Avoid sending texts late at night or during early morning hours.</li>
        </ul>

        <div class="my-10">
            <img src="/src/assets/blog/blog-inner-2.jpg" alt="SMS Campaign Analytics" class="rounded-lg shadow-md" />
            <p class="text-center text-sm text-neutral-500 mt-2">Tracking the performance of an SMS campaign.</p>
        </div>

        <h2 class="text-2xl font-normal text-neutral-900 mt-10 mb-4">Duo Tech's SMS Gateway</h2>
        <p class="text-neutral-700 leading-relaxed">Our robust SMS gateway provides reliable, high-speed delivery for all your messaging needs. With easy API integration and detailed analytics, Duo Tech Solutions empowers you to run effective and scalable SMS campaigns that deliver real results.</p>
    `,
    },
      'the-future-of-web-development': {
    title: 'The Future of Web Development: Trends to Watch in 2026',
    author: 'Alex Johnson',
    date: 'August 15, 2025',
    category: 'Web Development',
    imageUrl: '/src/assets/blog/blog-3.jpg',
    content: `
        <p class="text-lg text-neutral-700 leading-relaxed mb-6">The web development landscape is in a constant state of flux. New frameworks, technologies, and methodologies emerge each year, reshaping how we build digital experiences. As we look towards 2026, several key trends are set to define the future of web development, pushing the boundaries of what's possible on the web.</p>

        <h2 class="text-2xl font-normal text-neutral-900 mt-10 mb-4">1. The Rise of Serverless Architecture</h2>
        <p class="text-neutral-700 leading-relaxed mb-6">Serverless computing, or Function-as-a-Service (FaaS), is moving from a niche technology to a mainstream approach. By abstracting away server management, developers can focus purely on code and building features. This model offers incredible scalability, cost-efficiency, and faster development cycles. Platforms like AWS Lambda, Google Cloud Functions, and Vercel are leading this charge.</p>

        <h2 class="text-2xl font-normal text-neutral-900 mt-10 mb-4">2. The Continued Dominance of Component-Based Frameworks</h2>
        <p class="text-neutral-700 leading-relaxed mb-6">Frameworks like React, Vue, and Svelte will continue to evolve, with an even greater emphasis on performance and developer experience. The concept of building user interfaces with reusable components is now the industry standard. We're seeing a move towards even more optimized compilation steps (like Svelte's) and advanced features like React Server Components, which blur the line between client and server.</p>

        <blockquote class="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50 text-neutral-800">
            "The future of web development is about building faster, more scalable, and more personalized experiences with less overhead."
        </blockquote>

        <h2 class="text-2xl font-normal text-neutral-900 mt-10 mb-4">3. Headless CMS and the Composable Web</h2>
        <p class="text-neutral-700 leading-relaxed mb-6">The monolithic CMS is giving way to a more flexible, API-first approach. Headless CMS platforms (like Contentful, Strapi, and Sanity) provide a backend for your content, which can then be delivered to any frontend—be it a website, a mobile app, or even an IoT device. This 'composable' architecture allows businesses to pick and choose the best tools for their needs, creating highly customized and scalable digital platforms.</p>

        <div class="my-10">
            <img src="/src/assets/blog/blog-inner-3.jpg" alt="Composable Architecture Diagram" class="rounded-lg shadow-md" />
            <p class="text-center text-sm text-neutral-500 mt-2">A diagram showing a modern composable architecture.</p>
        </div>

        <h2 class="text-2xl font-normal text-neutral-900 mt-10 mb-4">How Duo Tech Stays Ahead</h2>
        <p class="text-neutral-700 leading-relaxed">At Duo Tech Solutions, we are committed to staying at the forefront of these trends. Our development teams are continuously exploring and mastering these new technologies to ensure that the solutions we build for our clients are not just modern, but also future-proof. Whether it's building a serverless-powered application or architecting a headless e-commerce platform, we have the expertise to bring your vision to life.</p>
    `,
    },
};

const relatedPosts = [
  {
    slug: 'the-rise-of-conversational-ai',
    title: 'The Rise of Conversational AI in Customer Service',
    category: 'AI & Machine Learning',
  },
  {
    slug: 'unlocking-the-power-of-bulk-sms',
    title: 'Unlocking the Power of Bulk SMS for Your Business',
    category: 'Marketing',
  },
];

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-50 text-center px-6">
          <h1 className="text-4xl text-neutral-900 mb-4">Post Not Found</h1>
          <p className="text-neutral-600 mb-8">Sorry, we couldn't find the blog post you're looking for.</p>
          <Link to="/blog" className="flex items-center gap-2 text-blue-600 hover:underline">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="bg-white min-h-screen">
        {/* Post Header */}
        <div className="relative h-96 md:h-[500px]">
          <img src={post.imageUrl} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative max-w-4xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center text-white">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-sm uppercase tracking-widest text-blue-300 mb-4">{post.category}</p>
              <h1 className="text-4xl md:text-5xl font-normal mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-neutral-300">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Post Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
          <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-neutral-200 flex items-center gap-3">
              <Tag size={18} className="text-neutral-500" />
              <span className="text-sm font-semibold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">{post.category}</span>
          </div>

          {/* Back to Blog */}
          <div className="mt-12">
              <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
                  <ArrowLeft size={16} />
                  <span>Back to all posts</span>
              </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
              <h2 className="text-3xl text-center font-normal text-neutral-900 mb-12">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {relatedPosts.filter(p => p.slug !== slug).map(relatedPost => (
                      <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`} className="bg-white p-6 border border-neutral-200 rounded-lg group">
                          <p className="text-sm text-blue-600 mb-2">{relatedPost.category}</p>
                          <h3 className="text-xl font-normal text-neutral-900 group-hover:text-blue-600 transition-colors duration-300">
                              {relatedPost.title}
                          </h3>
                      </Link>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPostPage;
