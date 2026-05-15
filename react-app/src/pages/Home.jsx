import { Link } from 'react-router-dom';
import TypingText from '../components/TypingText';
import AnimatedSection from '../components/AnimatedSection';

const WHATSAPP_LINK = "https://wa.me/6282284233857?text=Hello%2C%20I%27m%20interested%20in%20your%20desiccated%20coconut%20products.%20Please%20send%20me%20pricing%20information.";

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function ShieldIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

function UsersIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function CheckCircleIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
}

function FileTextIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  );
}

function MessageSquareIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

function AwardIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}

function FactoryIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
      <path d="M17 18h1"/>
      <path d="M12 18h1"/>
      <path d="M7 18h1"/>
    </svg>
  );
}

function TruckIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/>
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/>
      <circle cx="7" cy="18" r="2"/>
      <path d="M15 18H9"/>
      <circle cx="17" cy="18" r="2"/>
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

const products = [
  {
    name: 'High Fat Desiccated Coconut',
    image: '/images/high-fat-coconut.jpg',
    whatsappMsg: "Hello, I'm interested in High Fat Desiccated Coconut. Please send me pricing information.",
    specs: [
      { label: 'Fat Content', value: '65% ±3%' },
      { label: 'Moisture', value: 'MAX 3%' },
      { label: 'Grade', value: 'Fine / Medium' },
      { label: 'Color', value: 'Natural White' },
      { label: 'Impurities', value: 'Not more than 8 pcs/100g' },
      { label: 'pH', value: '6.1 – 6.7' },
    ],
  },
  {
    name: 'Low Fat Desiccated Coconut',
    image: '/images/low-fat-coconut.jpg',
    whatsappMsg: "Hello, I'm interested in Low Fat Desiccated Coconut. Please send me pricing information.",
    specs: [
      { label: 'Fat Content', value: '45% ±3%' },
      { label: 'Moisture', value: 'MAX 3%' },
      { label: 'Grade', value: 'Fine / Extra Fine' },
      { label: 'Color', value: 'Natural White' },
      { label: 'Impurities', value: 'Not more than 8 pcs/100g' },
      { label: 'pH', value: '6.1 – 6.7' },
    ],
  },
];

const reasons = [
  {
    icon: ShieldIcon,
    title: 'Certified Quality',
    description: 'All our products meet HACCP, ISO 22000, and FSSC 22000 standards.',
  },
  {
    icon: UsersIcon,
    title: 'Reliable Supply',
    description: 'Consistent supply with capacity of 500+ tons monthly production.',
  },
  {
    icon: FileTextIcon,
    title: 'Complete Documentation',
    description: 'Full export documentation including COA, Phytosanitary, and COO.',
  },
  {
    icon: MessageSquareIcon,
    title: 'Responsive Communication',
    description: 'Quick response and professional support throughout the process.',
  },
];

const documents = [
  { key: 'invoice', label: 'Commercial Invoice' },
  { key: 'packing', label: 'Packing List' },
  { key: 'bol', label: 'Bill of Lading' },
  { key: 'coo', label: 'Certificate of Origin' },
  { key: 'phyto', label: 'Phytosanitary Certificate' },
  { key: 'coa', label: 'Certificate of Analysis' },
];

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <AnimatedSection animation="fadeUp" delay={0}>
                <p className="hero-subtitle">The Leading Supplier of</p>
              </AnimatedSection>
              <AnimatedSection animation="fadeUp" delay={100}>
                <h1 className="hero-title">
                  <TypingText 
                    texts={['Desiccated Coconut', 'Premium Quality', 'Export Ready', 'HACCP Certified']}
                    className="highlight"
                  />
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fadeUp" delay={200}>
                <p className="hero-title-sub">From Indonesia</p>
              </AnimatedSection>
              <AnimatedSection animation="fadeUp" delay={300}>
                <p className="hero-description">
                  Premium quality desiccated coconut from certified Indonesian suppliers. 
                  Export-ready products meeting international food safety standards.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeUp" delay={400}>
                <div className="hero-buttons">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <WhatsAppIcon className="btn-icon" />
                    Get Inquiry
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        
        {/* Wave Shape */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="container">
          <AnimatedSection animation="fadeUp">
            <div className="trust-content">
              <div className="trust-item">
                <AwardIcon className="trust-icon" />
                <div>
                  <p className="trust-label">Certifications</p>
                  <p className="trust-value">HACCP / ISO 22000 / FSSC 22000</p>
                </div>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <FactoryIcon className="trust-icon" />
                <div>
                  <p className="trust-label">Production Capacity</p>
                  <p className="trust-value">500+ Tons / Month</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Company Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="about-grid">
            <AnimatedSection animation="fadeUp" delay={0}>
              <div className="about-image-wrapper">
                <div className="about-image">
                  <img src="/images/hero-bg.jpg" alt="Tropica Coco Coconut Plantation" />
                </div>
                <div className="about-badge">
                  <ShieldIcon className="about-badge-icon" />
                  <div>
                    <p className="about-badge-number">10+</p>
                    <p className="about-badge-text">Years Experience</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={150}>
              <div className="about-content">
                <span className="section-badge">About Tropica Coco</span>
                <h2 className="about-title">PT Tropica Coconut Indonesia</h2>
                <p className="about-description">
                  PT Tropica Coconut Indonesia is an Indonesian exporter focused on supplying desiccated coconut for international food and ingredient markets. We support importers, distributors, and food manufacturers with export-oriented coordination, consistent product specifications, and responsive communication throughout the sourcing process.
                </p>
                <div className="about-features">
                  <div className="about-feature">
                    <UsersIcon className="about-feature-icon" />
                    <p className="about-feature-title">Global Reach</p>
                    <p className="about-feature-desc">Serving clients in 30+ countries</p>
                  </div>
                  <div className="about-feature">
                    <CheckCircleIcon className="about-feature-icon" />
                    <p className="about-feature-title">Quality First</p>
                    <p className="about-feature-desc">Certified facilities only</p>
                  </div>
                </div>
                <Link to="/about" className="btn btn-outline-dark">
                  Learn More About Us
                  <ArrowRightIcon className="btn-icon-right" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-white" id="products">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="section-header">
            <span className="section-badge">Premium Quality</span>
            <h2 className="section-title">Our Products</h2>
          </AnimatedSection>

          <div className="products-grid-2">
            {products.map((product, index) => (
              <AnimatedSection key={index} animation="fadeUp" delay={index * 150}>
                <div className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-specs-grid">
                      {product.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="spec-item">
                          <p className="spec-label">{spec.label}</p>
                          <p className="spec-value">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/6282284233857?text=${encodeURIComponent(product.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-full"
                    >
                      <WhatsAppIcon className="btn-icon" />
                      Request Quote
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-secondary">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="section-header">
            <span className="section-badge">Our Advantages</span>
            <h2 className="section-title">Why Choose Us</h2>
          </AnimatedSection>

          <div className="features-grid">
            {reasons.map((reason, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 100}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <reason.icon className="icon" />
                  </div>
                  <h3 className="feature-title">{reason.title}</h3>
                  <p className="feature-description">{reason.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Section */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="section-center">
            <div className="section-icon">
              <TruckIcon className="icon-lg" />
            </div>
            <h2 className="section-title">Supply Chain Excellence</h2>
            <p className="section-description-wide">
              We coordinate with certified production facilities and handle end-to-end export logistics. 
              From initial inquiry to final delivery at destination port, we manage documentation, 
              quality verification, and shipping coordination to ensure a smooth supply process.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="section bg-secondary">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="section-header">
            <div className="section-icon">
              <FileTextIcon className="icon-lg" />
            </div>
            <h2 className="section-title">Export Documentation</h2>
          </AnimatedSection>

          <div className="docs-grid">
            {documents.map((doc, index) => (
              <AnimatedSection key={doc.key} animation="fadeUp" delay={index * 80}>
                <div className="doc-item">
                  <CheckCircleIcon className="doc-icon" />
                  <span className="doc-label">{doc.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <AnimatedSection animation="fadeUp">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Source Premium Coconut Products?</h2>
              <p className="cta-description">
                Contact us today for competitive pricing, product specifications, and shipping information.
              </p>
              <div className="cta-buttons">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                  <WhatsAppIcon className="btn-icon" />
                  Chat on WhatsApp
                </a>
                <Link to="/contact" className="btn btn-outline-light">
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default Home;
