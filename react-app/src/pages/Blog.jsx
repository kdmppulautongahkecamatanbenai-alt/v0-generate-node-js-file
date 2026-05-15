import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const blogPosts = [
  {
    id: 1,
    slug: 'benefits-of-desiccated-coconut',
    title: 'Health Benefits of Desiccated Coconut in Your Diet',
    excerpt: 'Discover the nutritional advantages of incorporating desiccated coconut into your daily meals and recipes.',
    image: '/images/blog/coconut-health.jpg',
    date: 'March 15, 2024',
    category: 'Health'
  },
  {
    id: 2,
    slug: 'indonesian-coconut-industry',
    title: 'The Rise of Indonesian Coconut Industry',
    excerpt: 'How Indonesia became one of the world&apos;s leading exporters of premium coconut products.',
    image: '/images/blog/coconut-industry.jpg',
    date: 'March 10, 2024',
    category: 'Industry'
  },
  {
    id: 3,
    slug: 'coconut-oil-vs-other-oils',
    title: 'Virgin Coconut Oil vs Other Cooking Oils',
    excerpt: 'A comprehensive comparison of virgin coconut oil with other popular cooking oils.',
    image: '/images/blog/coconut-oil.jpg',
    date: 'March 5, 2024',
    category: 'Cooking'
  },
  {
    id: 4,
    slug: 'sustainable-coconut-farming',
    title: 'Sustainable Coconut Farming Practices',
    excerpt: 'Learn about eco-friendly farming methods that protect the environment while producing quality coconuts.',
    image: '/images/blog/sustainable-farming.jpg',
    date: 'February 28, 2024',
    category: 'Sustainability'
  },
  {
    id: 5,
    slug: 'coconut-in-bakery',
    title: 'Using Desiccated Coconut in Bakery Products',
    excerpt: 'Tips and techniques for incorporating desiccated coconut into breads, cakes, and pastries.',
    image: '/images/blog/coconut-bakery.jpg',
    date: 'February 20, 2024',
    category: 'Recipes'
  },
  {
    id: 6,
    slug: 'quality-standards-export',
    title: 'Quality Standards for Coconut Export',
    excerpt: 'Understanding international quality standards and certifications for coconut product exports.',
    image: '/images/blog/quality-standards.jpg',
    date: 'February 15, 2024',
    category: 'Export'
  }
];

export function Blog() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Blog & News</h1>
          <p className="page-hero-description">
            Insights, tips, and news from the coconut industry.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 100}>
                <article className="blog-card">
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-content">
                    <span className="blog-date">{post.category} | {post.date}</span>
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="read-more">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Pagination */}
          <AnimatedSection>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '0.5rem', 
              marginTop: '3rem' 
            }}>
              {[1, 2, 3].map(page => (
                <button
                  key={page}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    border: page === 1 ? 'none' : '1px solid var(--gray-300)',
                    background: page === 1 ? 'var(--primary)' : 'var(--white)',
                    color: page === 1 ? 'var(--white)' : 'var(--text-dark)',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  {page}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-secondary">
        <div className="container">
          <AnimatedSection>
            <div style={{ 
              maxWidth: '600px', 
              margin: '0 auto', 
              textAlign: 'center' 
            }}>
              <h2 style={{ marginBottom: '1rem' }}>Subscribe to Our Newsletter</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
                Get the latest news, industry insights, and special offers delivered to your inbox.
              </p>
              <form style={{ display: 'flex', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: '0.875rem 1rem',
                    border: '1px solid var(--gray-300)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem'
                  }}
                />
                <button type="submit" className="btn btn-secondary">
                  Subscribe
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default Blog;
