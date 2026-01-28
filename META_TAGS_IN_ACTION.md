# Meta Tags in Action - Examples

This document shows the actual HTML that gets generated when pages load.

## Blog Post Page Example

When a user visits `/blog/sms-marketing-guide`, the PHP API returns post data and the following HTML is generated in the `<head>`:

```html
<!-- Standard Meta Tags -->
<title>SMS Marketing Guide 2026 - Best Practices & Tips</title>
<meta name="description" content="Learn SMS marketing strategies, campaign best practices, and tips from Duotech Solutions experts.">
<meta name="keywords" content="sms marketing, marketing guide, bulk sms, sms campaigns">
<meta name="author" content="Rajesh Kumar">
<meta name="robots" content="index, follow">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- OpenGraph Tags (Facebook, LinkedIn, etc.) -->
<meta property="og:title" content="SMS Marketing Guide 2026 - Best Practices & Tips">
<meta property="og:description" content="Learn SMS marketing strategies, campaign best practices, and tips from Duotech Solutions experts.">
<meta property="og:image" content="https://panel.duotechsolutions.in/images/posts/sms-guide.jpg">
<meta property="og:url" content="https://www.duotechsolutions.in/blog/sms-marketing-guide">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Duotech Solutions">
<meta property="og:section" content="SMS Services">
<meta property="article:published_time" content="2026-01-15T10:00:00Z">
<meta property="article:modified_time" content="2026-01-15T14:30:00Z">
<meta property="article:author" content="Rajesh Kumar">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="SMS Marketing Guide 2026 - Best Practices & Tips">
<meta name="twitter:description" content="Learn SMS marketing strategies, campaign best practices, and tips from Duotech Solutions experts.">
<meta name="twitter:image" content="https://panel.duotechsolutions.in/images/posts/sms-guide.jpg">
<meta name="twitter:site" content="@duotechsolution">
<meta name="twitter:creator" content="@duotechsolution">

<!-- Canonical URL -->
<link rel="canonical" href="https://www.duotechsolutions.in/blog/sms-marketing-guide">

<!-- JSON-LD Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.duotechsolutions.in/blog/sms-marketing-guide"
  },
  "headline": "Complete Guide to SMS Marketing in 2026",
  "description": "Learn SMS marketing strategies, campaign best practices, and tips from Duotech Solutions experts.",
  "image": [
    "https://panel.duotechsolutions.in/images/posts/sms-guide.jpg"
  ],
  "datePublished": "2026-01-15T10:00:00Z",
  "dateModified": "2026-01-15T14:30:00Z",
  "author": {
    "@type": "Person",
    "name": "Rajesh Kumar"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Duotech Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.duotechsolutions.in/images/duotech-logo.png"
    }
  },
  "keywords": "sms marketing, marketing guide, bulk sms, sms campaigns"
}
</script>

<!-- Organization Schema (added automatically) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Duotech Solutions",
  "url": "https://www.duotechsolutions.in",
  "logo": "https://www.duotechsolutions.in/images/duotech-logo.png",
  "description": "Bulk SMS, WhatsApp API, Digital Marketing & Web Development Services",
  "telephone": "+91-8800722190",
  "email": "info@duotechsolutions.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C30, C Block, Sector 63",
    "addressLocality": "Noida",
    "addressRegion": "UP",
    "postalCode": "201301",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.facebook.com/theduotechsolutions",
    "https://twitter.com/duotechsolution",
    "https://www.linkedin.com/company/duotech-solutions/",
    "https://www.instagram.com/theduotechsolutions"
  ]
}
</script>
```

---

## How This Looks in Different Platforms

### 1. Google Search Results
```
SMS Marketing Guide 2026 - Best Practices & Tips
https://www.duotechsolutions.in/blog/sms-marketing-guide

Learn SMS marketing strategies, campaign best practices, and tips from 
Duotech Solutions experts.
```

### 2. Facebook Share Preview
```
┌────────────────────────────────────────────────┐
│  Image: sms-guide.jpg                          │
│                                                 │
│  SMS Marketing Guide 2026 - Best Practices...  │
│  Learn SMS marketing strategies, campaign...   │
│                                                 │
│  duotechsolutions.in                           │
└────────────────────────────────────────────────┘
```

### 3. Twitter/X Share Preview
```
┌────────────────────────────────────────────────┐
│                                                 │
│  SMS Marketing Guide 2026 - Best Practices...  │
│                                                 │
│  Learn SMS marketing strategies, campaign...   │
│                                                 │
│  [Image: sms-guide.jpg]                        │
│  via @duotechsolution                          │
└────────────────────────────────────────────────┘
```

### 4. LinkedIn Share Preview
```
┌────────────────────────────────────────────────┐
│  SMS Marketing Guide 2026 - Best Practices...  │
│  Learn SMS marketing strategies, campaign...   │
│  duotechsolutions.in                           │
│  [Image: sms-guide.jpg]                        │
│  Posted by Rajesh Kumar                        │
└────────────────────────────────────────────────┘
```

---

## Blog Listing Page Example

When a user visits `/blog`, the page `<head>` contains:

```html
<!-- Standard Meta Tags -->
<title>Blog - Duotech Solutions | Technology & Digital Marketing Insights</title>
<meta name="description" content="Explore articles on Bulk SMS, WhatsApp API, Digital Marketing, SEO, Web Development, and technology trends from Duotech Solutions experts.">
<meta name="keywords" content="blog, technology, digital marketing, SMS, WhatsApp API, web development, tutorials, guides">
<meta name="author" content="Duotech Solutions">
<meta name="robots" content="index, follow">

<!-- OpenGraph Tags -->
<meta property="og:title" content="Blog - Duotech Solutions | Technology & Digital Marketing Insights">
<meta property="og:description" content="Explore articles on Bulk SMS, WhatsApp API, Digital Marketing, SEO, Web Development, and technology trends from Duotech Solutions experts.">
<meta property="og:image" content="https://www.duotechsolutions.in/images/duotech-og-image.jpg">
<meta property="og:url" content="https://www.duotechsolutions.in/blog">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Duotech Solutions">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Blog - Duotech Solutions | Technology & Digital Marketing Insights">
<meta name="twitter:description" content="Explore articles on Bulk SMS, WhatsApp API, Digital Marketing, SEO, Web Development, and technology trends from Duotech Solutions experts.">
<meta name="twitter:image" content="https://www.duotechsolutions.in/images/duotech-og-image.jpg">
<meta name="twitter:site" content="@duotechsolution">

<!-- Canonical URL -->
<link rel="canonical" href="https://www.duotechsolutions.in/blog">

<!-- Organization Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Duotech Solutions",
  "url": "https://www.duotechsolutions.in",
  "logo": "https://www.duotechsolutions.in/images/duotech-logo.png",
  "description": "Bulk SMS, WhatsApp API, Digital Marketing & Web Development Services",
  "telephone": "+91-8800722190",
  "email": "info@duotechsolutions.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C30, C Block, Sector 63",
    "addressLocality": "Noida",
    "addressRegion": "UP",
    "postalCode": "201301",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.facebook.com/theduotechsolutions",
    "https://twitter.com/duotechsolution",
    "https://www.linkedin.com/company/duotech-solutions/",
    "https://www.instagram.com/theduotechsolutions"
  ]
}
</script>
```

---

## Homepage Example

The homepage has these default meta tags (set in `src/main.tsx`):

```html
<title>Duotech Solutions - Bulk SMS, WhatsApp API, Digital Marketing & Web Development</title>
<meta name="description" content="Duotech Solutions provides Bulk SMS, WhatsApp Business API, IVR, Voice OBD, Digital Marketing, SEO, Web & App Development services in Noida. Transform your business communication today!">
<meta name="keywords" content="bulk sms service, whatsapp api, digital marketing, web development, seo services, ivr solutions, voice obd, virtual numbers">
<meta name="author" content="Duotech Solutions">

<meta property="og:title" content="Duotech Solutions - Bulk SMS, WhatsApp API, Digital Marketing & Web Development">
<meta property="og:description" content="Duotech Solutions provides Bulk SMS, WhatsApp Business API, IVR, Voice OBD, Digital Marketing, SEO, Web & App Development services in Noida. Transform your business communication today!">
<meta property="og:image" content="https://www.duotechsolutions.in/images/duotech-og-image.jpg">
<meta property="og:url" content="https://www.duotechsolutions.in/">
<meta property="og:type" content="website">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Duotech Solutions - Bulk SMS, WhatsApp API, Digital Marketing & Web Development">
<meta name="twitter:image" content="https://www.duotechsolutions.in/images/duotech-og-image.jpg">
<meta name="twitter:site" content="@duotechsolution">

<link rel="canonical" href="https://www.duotechsolutions.in/">

<!-- Organization Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Duotech Solutions",
  "url": "https://www.duotechsolutions.in",
  "logo": "https://www.duotechsolutions.in/images/duotech-logo.png",
  ...
}
</script>
```

---

## Dynamic Updates Example

### Before Navigation to Post
```html
<title>Duotech Solutions - Bulk SMS, WhatsApp API...</title>
<meta name="description" content="Duotech Solutions provides...">
<!-- Generic homepage meta tags -->
```

### User clicks on blog post "SMS Marketing Guide"

### After Post Loads
```html
<title>SMS Marketing Guide 2026 - Best Practices & Tips</title>
<meta name="description" content="Learn SMS marketing strategies...">
<!-- Post-specific meta tags -->
```

The page title and meta tags are **automatically updated** by the React component without a full page refresh!

---

## SEO Impact

### Before Meta Tags Implementation
- ❌ Social shares show generic title/description
- ❌ Search engines see same meta for all pages
- ❌ No structured data for content
- ❌ Duplicate content issues

### After Meta Tags Implementation
- ✅ Each post has unique, SEO-optimized title
- ✅ Relevant descriptions appear in search results
- ✅ Beautiful rich previews on social media
- ✅ Search engines understand post content via JSON-LD
- ✅ Canonical URLs prevent duplicate content
- ✅ Author attribution builds trust
- ✅ Updated timestamps signal fresh content

---

## Verification Tools

Test the generated meta tags:

1. **View Page Source**
   - Right-click → "View Page Source"
   - Search for "meta" to see all meta tags
   - Look for "script type=application/ld+json"

2. **OpenGraph Preview**
   - Visit https://www.opengraph.xyz/
   - Paste your blog post URL
   - See how it appears on social media

3. **Rich Results Test**
   - Visit https://search.google.com/test/rich-results
   - Paste your blog post URL
   - Verify JSON-LD schema is valid

4. **Google Search Console**
   - Submit blog URL to Google
   - Check "Coverage" to see if indexed
   - Check "Performance" to see search impressions

---

## Example Data Flow

```
┌──────────────────────────────┐
│ User visits blog post URL    │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────────┐
│ BlogPostPage.tsx component loads │
└──────────────┬───────────────────┘
               │
               ▼
┌────────────────────────────────────────┐
│ API call: fetchPostBySlug('post-slug') │
└──────────────┬─────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────────┐
│ PHP API returns post data with:             │
│ - meta_title                                 │
│ - meta_description                           │
│ - featured_image                             │
│ - author_name                                │
│ - published_at                               │
│ - etc...                                     │
└──────────────┬───────────────────────────────┘
               │
               ▼
┌────────────────────────────────────────┐
│ setMetaTags() is called with post data │
└──────────────┬─────────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│ <head> is updated with:              │
│ - <title>                             │
│ - <meta name="description">           │
│ - <meta property="og:*">              │
│ - <meta name="twitter:*">             │
│ - <link rel="canonical">              │
│ - JSON-LD scripts                     │
└──────────────┬──────────────────────┘
               │
               ▼
┌────────────────────────────────────────┐
│ Search engines & social media see:   │
│ - Unique title & description         │
│ - Relevant keywords                   │
│ - Featured image                      │
│ - Author information                  │
│ - Structured data (JSON-LD)           │
└────────────────────────────────────────┘
```

---

## Code Example Showing the Process

```tsx
// 1. Component mounts, post data loads
const [post, setPost] = useState<Post | null>(null);

useEffect(() => {
  fetchPostBySlug(slug) // Calls PHP API
    .then(data => {
      setPost(data); // Triggers next useEffect
      console.log("Post data received:", data);
    });
}, [slug]);

// 2. When post data is available
useEffect(() => {
  if (!post) return;
  
  // 3. Extract meta information
  const title = post.meta_title || post.title;
  const description = post.meta_description || post.excerpt;
  const image = post.featured_image;
  
  // 4. Call setMetaTags() - updates <head>
  setMetaTags({
    title,
    description,
    keywords: post.meta_keywords,
    image,
    author: post.author_name,
    publishedDate: post.published_at,
    modifiedDate: post.updated_at,
    type: 'article',
    category: post.category_name
  });
  
  // 5. Inject JSON-LD
  const schema = createBlogPostJsonLD(post);
  setJsonLD(schema);
  
  console.log("Meta tags updated:", { title, description, image });
}, [post]); // Re-run when post changes
```

This shows how the meta tags are dynamically updated based on API data!
