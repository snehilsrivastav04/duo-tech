import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import { fetchPostBySlug } from '../lib/api';
import { setMetaTags, setJsonLD, createBlogPostJsonLD } from '../lib/meta';
import type { Post } from '../types/blog';

/* Posts are fetched from the backend API */


const BlogPostPage = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetchPostBySlug(slug)
      .then(data => setPost(data))
      .catch(err => setError(err.message || 'Post not found'))
      .finally(() => setLoading(false));
  }, [slug]);

  // Update document meta tags and inject JSON-LD when post loads ✅
  useEffect(() => {
    if (!post) return;

    const stripHtml = (html: string) => {
      const div = document.createElement('div');
      div.innerHTML = html || '';
      return div.textContent || div.innerText || '';
    };

    const authorNameLocal = post.author?.name ?? (typeof post.author === 'string' ? post.author : post.author_name) ?? 'Unknown';
    const title = (post.meta_title as string) || post.title;
    const description = (post.meta_description as string) || post.excerpt || (post.content ? stripHtml(post.content).slice(0, 160) : '');
    const featuredImage = (post.featured_image as string) || (post.og_image as string) || '';
    const canonicalUrl = (post.canonical_url as string) || window.location.href;

    // Set all meta tags using the utility
    setMetaTags({
      title,
      description,
      keywords: post.meta_keywords,
      image: featuredImage,
      url: window.location.href,
      canonical: canonicalUrl,
      author: authorNameLocal,
      publishedDate: post.published_at || post.created_at,
      modifiedDate: post.updated_at || post.published_at || post.created_at,
      type: 'article',
      category: post.category_name
    });

    // Set JSON-LD structured data
    const ld = createBlogPostJsonLD(post);
    setJsonLD(ld);
  }, [post]);

  if (loading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-screen">Loading...</div>
      </MainLayout>
    );
  }

  if (error || !post) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-50 text-center px-6">
          <h1 className="text-4xl text-neutral-900 mb-4">Post Not Found</h1>
          <p className="text-neutral-600 mb-8">{error || "Sorry, we couldn't find the blog post you're looking for."}</p>
          <Link to="/blog" className="flex items-center gap-2 text-blue-600 hover:underline">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </MainLayout>
    );
  }

  // Safe derived fields from API
  const authorName = post.author?.name ?? (typeof post.author === 'string' ? post.author : post.author_name) ?? 'Unknown';
  const publishedDate = (post.published_at ?? post.date ?? post.publishedAt) || '';
  const imageSrc = post.featured_image ?? post.featured_image_url ?? post.imageUrl ?? '';

  return (
    <MainLayout>
      <div className="bg-white min-h-screen">
        {/* Post Header */}
        <div className="relative h-96 md:h-[500px]">
          {imageSrc ? (
            <img src={imageSrc} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 bg-neutral-200" />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative max-w-4xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center text-white">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-sm uppercase tracking-widest text-blue-300 mb-4">{post.category_name ?? post.category}</p>
              <h1 className="text-4xl md:text-5xl font-normal mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-neutral-300">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{authorName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{publishedDate}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Post Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
          <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: post.content ?? '' }} />
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-neutral-200 flex items-center gap-3">
              <Tag size={18} className="text-neutral-500" />
              <span className="text-sm font-semibold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">{post.category_name ?? post.category}</span>
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
                  {((post.related_posts || []) as Array<{slug:string; title:string; category_name?: string; category?: string}>).filter(p => p.slug !== slug).map(relatedPost => (
                      <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`} className="bg-white p-6 border border-neutral-200 rounded-lg group">
                          <p className="text-sm text-blue-600 mb-2">{relatedPost.category_name ?? relatedPost.category}</p>
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
