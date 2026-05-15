import { Link } from 'react-router-dom';
import TypingText from '../components/TypingText';
import AnimatedSection from '../components/AnimatedSection';

const products = [
  {
    id: 1,
    title: 'Desiccated Coconut Fine Grade',
    description: 'Premium fine-grade desiccated coconut, perfect for bakery and confectionery.',
    image: '/images/desiccated-fine.jpg',
    badge: 'Best Seller',
    specs: ['Fat Content: 65%', 'Moisture: 3%', 'Mesh: Fine']
  },
  {
    id: 2,
    title: 'Desiccated Coconut Medium Grade',
    description: 'Medium-grade desiccated coconut ideal for various food applications.',
    image: '/images/desiccated-medium.jpg',
    badge: 'Popular',
    specs: ['Fat Content: 65%', 'Moisture: 3%', 'Mesh: Medium']
  },
  {
    id: 3,
    title: 'Virgin Coconut Oil',
    description: 'Cold-pressed virgin coconut oil with natural aroma and nutrients.',
    image: '/images/vco.jpg',
    badge: 'Premium',
    specs: ['100% Pure', 'Cold Pressed', 'Organic']
  }
];

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: 'HACCP Certified',
    description: 'International food safety standards ensuring quality you can trust.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Global Export',
    description: 'Shipping to 30+ countries with reliable logistics partners.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4"/>
        <path d="m6.8 14-3.5 2"/>
        <path d="m20.7 16-3.5-2"/>
        <path d="M6.8 10 3.3 8"/>
        <path d="m20.7 8-3.5 2"/>
        <path d="m9 22 3-8 3 8"/>
        <path d="M8 22h8"/>
        <path d="M12 6a4 4 0 0 0-4 4c0 2.2 1.8 3.1 4 6 2.2-2.9 4-3.8 4-6a4 4 0 0 0-4-4z"/>
      </svg>
    ),
    title: '15+ Years Experience',
    description: 'Decades of expertise in coconut processing and export.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: 'Premium Quality',
    description: 'Strict quality control from plantation to packaging.'
  }
];

const certifications = [
  { name: 'HACCP', logo: '/images/cert-haccp.png' },
  { name: 'ISO 22000', logo: '/images/cert-iso.png' },
  { name: 'Halal', logo: '/images/cert-halal.png' },
  { name: 'FDA Approved', logo: '/images/cert-fda.png' }
];

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-subtitle animate-fade-in">The Leading Supplier of</p>
            <h1 className="hero-title">
              <TypingText 
                texts={['Desiccated Coconut', 'Premium Quality', 'Export Ready', 'HACCP Certified']}
                className="highlight"
              />
              <span className="white animate-slide-up" style={{ animationDelay: '2.5s' }}>From Indonesia</span>
            </h1>
            <p className="hero-description animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Premium quality coconut products from the heart of Indonesia. HACCP certified, trusted by businesses in 30+ countries worldwide.
            </p>
            <div className="hero-buttons animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Link to="/products" className="btn btn-primary">View Products</Link>
              <Link to="/contact" className="btn btn-outline">Get Quote</Link>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-label">Countries Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Tons Monthly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-content">
            <div className="trust-item">
              <svg className="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>HACCP Certified</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20"/>
              </svg>
              <span>Global Shipping</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78"/>
              </svg>
              <span>Premium Quality</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-white" id="products">
        <div className="container">
          <AnimatedSection className="section-header">
            <p className="section-subtitle">Our Products</p>
            <h2 className="section-title">Premium Coconut Products</h2>
            <p className="section-description">
              Discover our range of high-quality coconut products, processed with care and exported worldwide.
            </p>
          </AnimatedSection>

          <div className="products-grid">
            {products.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 100}>
                <div className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-specs">
                      {product.specs.map((spec, i) => (
                        <span key={i} className="spec-tag">{spec}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/products" className="btn btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-secondary">
        <div className="container">
          <AnimatedSection className="section-header">
            <p className="section-subtitle">Why Choose Us</p>
            <h2 className="section-title">Your Trusted Coconut Partner</h2>
            <p className="section-description">
              We combine tradition with modern technology to deliver the finest coconut products.
            </p>
          </AnimatedSection>

          <div className="features-grid">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedSection className="section-header">
            <p className="section-subtitle">Our Certifications</p>
            <h2 className="section-title">Quality You Can Trust</h2>
          </AnimatedSection>

          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="cert-item">
                  <img src={cert.logo} alt={cert.name} className="cert-logo" />
                  <p className="cert-name">{cert.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-content">
          <AnimatedSection>
            <h2 className="cta-title">Ready to Partner with Us?</h2>
            <p className="cta-description">
              Get in touch today for competitive pricing and reliable supply of premium Indonesian coconut products.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Request Quote</Link>
              <Link to="/about" className="btn btn-outline">Learn More</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default Home;
