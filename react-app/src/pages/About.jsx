import AnimatedSection from '../components/AnimatedSection';

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: 'Quality First',
    description: 'We never compromise on quality. Every batch undergoes rigorous testing to meet international standards.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Customer Focus',
    description: 'Your success is our success. We work closely with each client to meet their specific needs.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="m7 10 2 2 6-6"/>
        <path d="m7 16 2 2 6-6"/>
      </svg>
    ),
    title: 'Sustainability',
    description: 'Committed to sustainable practices that benefit our farmers, communities, and the environment.'
  }
];

const milestones = [
  { year: '2008', title: 'Company Founded', description: 'Started as a small coconut processing facility in Riau.' },
  { year: '2012', title: 'First Export', description: 'Began exporting to Malaysia and Singapore.' },
  { year: '2015', title: 'HACCP Certified', description: 'Achieved HACCP certification for international standards.' },
  { year: '2018', title: 'Global Expansion', description: 'Expanded to 20+ countries across Asia, Europe, and Americas.' },
  { year: '2023', title: '500+ Tons Monthly', description: 'Reached production capacity of 500+ tons per month.' }
];

export function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">About Tropicoco</h1>
          <p className="page-hero-description">
            Your trusted partner for premium Indonesian coconut products since 2008.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="about-content">
            <AnimatedSection>
              <div className="about-image">
                <img src="/images/about-factory.jpg" alt="Tropicoco Factory" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="about-text">
                <h3>Our Story</h3>
                <p>
                  Founded in 2008 in the heart of Riau, Sumatra, Tropicoco began as a small family-owned coconut processing facility with a vision to share the finest Indonesian coconut products with the world.
                </p>
                <p>
                  Over the years, we have grown from a local processor to a leading exporter, serving customers in more than 30 countries. Our commitment to quality, sustainability, and customer satisfaction has been the cornerstone of our success.
                </p>
                <p>
                  Today, we operate state-of-the-art processing facilities that combine traditional expertise with modern technology, ensuring every product meets the highest international standards.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-secondary">
        <div className="container">
          <AnimatedSection className="section-header">
            <p className="section-subtitle">Our Values</p>
            <h2 className="section-title">What Drives Us</h2>
          </AnimatedSection>

          <div className="values-grid">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedSection className="section-header">
            <p className="section-subtitle">Our Journey</p>
            <h2 className="section-title">Key Milestones</h2>
          </AnimatedSection>

          <div className="milestones">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="milestone-item" style={{ 
                  display: 'flex', 
                  gap: '2rem', 
                  marginBottom: '2rem',
                  padding: '1.5rem',
                  background: index % 2 === 0 ? 'var(--gray-100)' : 'var(--white)',
                  borderRadius: 'var(--radius-lg)'
                }}>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '800', 
                    color: 'var(--primary)',
                    minWidth: '80px'
                  }}>
                    {milestone.year}
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-dark)' }}>{milestone.title}</h4>
                    <p style={{ margin: 0, color: 'var(--text-light)' }}>{milestone.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-secondary">
        <div className="container">
          <AnimatedSection className="section-header">
            <p className="section-subtitle">Our Team</p>
            <h2 className="section-title">Meet the People Behind Tropicoco</h2>
            <p className="section-description">
              A dedicated team of professionals committed to delivering excellence in every product.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div style={{ 
              textAlign: 'center', 
              padding: '3rem', 
              background: 'var(--white)', 
              borderRadius: 'var(--radius-xl)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                Our team of 100+ skilled workers, from farmers to quality control experts, work together to ensure every coconut product exceeds expectations.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>100+</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Team Members</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>15+</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Years Combined Exp</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default About;
