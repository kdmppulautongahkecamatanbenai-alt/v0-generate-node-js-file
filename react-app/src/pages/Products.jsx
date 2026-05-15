import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const products = [
  {
    id: 1,
    title: 'Desiccated Coconut Fine Grade',
    description: 'Premium fine-grade desiccated coconut with consistent particle size. Perfect for bakery, confectionery, and food processing industries.',
    image: '/images/desiccated-fine.jpg',
    badge: 'Best Seller',
    specs: {
      'Fat Content': '60-65%',
      'Moisture': 'Max 3%',
      'Particle Size': 'Fine (< 1.4mm)',
      'Color': 'White to Creamy White',
      'Packaging': '25kg / 50kg bags'
    }
  },
  {
    id: 2,
    title: 'Desiccated Coconut Medium Grade',
    description: 'Medium-grade desiccated coconut ideal for various food applications including snacks, cereals, and toppings.',
    image: '/images/desiccated-medium.jpg',
    badge: 'Popular',
    specs: {
      'Fat Content': '60-65%',
      'Moisture': 'Max 3%',
      'Particle Size': 'Medium (1.4-2.8mm)',
      'Color': 'White to Creamy White',
      'Packaging': '25kg / 50kg bags'
    }
  },
  {
    id: 3,
    title: 'Desiccated Coconut Flakes',
    description: 'Large flaky cuts perfect for decorative toppings, premium confectionery, and specialty food products.',
    image: '/images/coconut-flakes.jpg',
    badge: 'Premium',
    specs: {
      'Fat Content': '60-65%',
      'Moisture': 'Max 3%',
      'Particle Size': 'Flakes (> 5mm)',
      'Color': 'White to Creamy White',
      'Packaging': '10kg / 25kg bags'
    }
  },
  {
    id: 4,
    title: 'Virgin Coconut Oil (VCO)',
    description: 'Cold-pressed virgin coconut oil retaining natural aroma, flavor, and nutrients. Ideal for cooking, cosmetics, and health products.',
    image: '/images/vco.jpg',
    badge: 'Organic',
    specs: {
      'Extraction': 'Cold Pressed',
      'Free Fatty Acid': 'Max 0.2%',
      'Moisture': 'Max 0.1%',
      'Color': 'Water Clear',
      'Packaging': '1L / 5L / 20L / 200L'
    }
  },
  {
    id: 5,
    title: 'Coconut Cream',
    description: 'Rich and creamy coconut extract perfect for culinary applications, beverages, and desserts.',
    image: '/images/coconut-cream.jpg',
    badge: 'New',
    specs: {
      'Fat Content': '20-24%',
      'Brix': '20-22',
      'pH': '5.8-6.5',
      'Color': 'White',
      'Packaging': '400ml cans / 1L tetra'
    }
  },
  {
    id: 6,
    title: 'Coconut Milk Powder',
    description: 'Spray-dried coconut milk powder for easy storage and reconstitution. Perfect for food manufacturers.',
    image: '/images/coconut-milk-powder.jpg',
    badge: 'Industrial',
    specs: {
      'Fat Content': '50-65%',
      'Moisture': 'Max 3%',
      'Solubility': '> 95%',
      'Color': 'Off-white',
      'Packaging': '20kg / 25kg bags'
    }
  }
];

export function Products() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Our Products</h1>
          <p className="page-hero-description">
            Premium quality coconut products for food manufacturers, bakeries, and distributors worldwide.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-white">
        <div className="container">
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
                      {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                        <span key={key} className="spec-tag">{key}: {value}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section bg-secondary">
        <div className="container">
          <AnimatedSection className="section-header">
            <p className="section-subtitle">Quality Standards</p>
            <h2 className="section-title">Product Specifications</h2>
            <p className="section-description">
              All our products meet international food safety standards and can be customized to your requirements.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div style={{ 
              background: 'var(--white)', 
              borderRadius: 'var(--radius-xl)', 
              padding: '2rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--primary)' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--primary)' }}>Parameter</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--primary)' }}>Standard</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Fat Content', '60-65% (adjustable)'],
                    ['Moisture', 'Max 3%'],
                    ['Total Plate Count', '< 5,000 cfu/g'],
                    ['E. Coli', 'Negative'],
                    ['Salmonella', 'Negative/25g'],
                    ['Shelf Life', '12 months'],
                    ['Storage', 'Cool, dry place']
                  ].map(([param, value], index) => (
                    <tr key={index} style={{ borderBottom: '1px solid var(--gray-200)' }}>
                      <td style={{ padding: '1rem', color: 'var(--text-dark)', fontWeight: '500' }}>{param}</td>
                      <td style={{ padding: '1rem', color: 'var(--text-light)' }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-content">
          <AnimatedSection>
            <h2 className="cta-title">Need Custom Specifications?</h2>
            <p className="cta-description">
              We can customize particle size, fat content, packaging, and more to meet your specific requirements.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Request Quote</Link>
              <a href="mailto:export@tropicoco.com" className="btn btn-outline">Email Us</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default Products;
